import re
import requests
import os

def fetch_metrics(scholar_id):
    url = f"https://scholar.google.de/citations?user={scholar_id}&hl=en"
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
    }
    response = requests.get(url, headers=headers)
    if response.status_code != 200:
        print(f"Failed to fetch Scholar page: {response.status_code}")
        return None

    content = response.text
    
    # Extract metrics using regex
    # Format typically: <td class="gsc_rsb_std">162</td>
    metrics = re.findall(r'<td class="gsc_rsb_std">(\d+)</td>', content)
    
    if len(metrics) >= 3:
        return {
            'citations': metrics[0],
            'h_index': metrics[2],
            'i10_index': metrics[4] if len(metrics) > 4 else metrics[2] # Fallback if structure differs
        }
    return None

def update_file(filepath, metrics):
    if not os.path.exists(filepath):
        return

    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Update Citations
    content = re.sub(r'(Citations:\s*<strong>)\d+(</strong>)', r'\g<1>' + metrics["citations"] + r'\g<2>', content)
    
    # Update h-index
    content = re.sub(r'(h-index:\s*<strong>)\d+(</strong>)', r'\g<1>' + metrics["h_index"] + r'\g<2>', content)
    
    # Update i10-index
    content = re.sub(r'(i10-index:\s*<strong>)\d+(</strong>)', r'\g<1>' + metrics["i10_index"] + r'\g<2>', content)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

def main():
    scholar_id = "l0PmEYEAAAAJ"
    metrics = fetch_metrics(scholar_id)
    
    if metrics:
        print(f"Found metrics: {metrics}")
        update_file('research.html', metrics)
        print("Updated research.html successfully.")
    else:
        print("Could not extract metrics.")

if __name__ == "__main__":
    main()
