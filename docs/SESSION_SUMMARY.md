# Session summary

## 2026-10-06 10:58 CEST — CV language proficiency

- Updated both LaTeX CV sources to list English C2 and German B2; no telc reference remains.
- Rebuilt the six-page academic CV and two-page résumé and replaced the website downloads.
- Updated the legacy `cv.pdf` academic-CV alias for consistency.
- Removed a commented field that caused BibTeX to reject the academic publication database during the rebuild; publication content is unchanged.

Verification:

- Both PDFs compile successfully with `latexmk` and contain the requested language text.
- The academic CV remains six A4 pages and the résumé remains two A4 pages.
- Rendered and visually inspected all eight pages; no clipping, overlap or layout regression was observed.
- Confirmed the website PDFs match the rebuilt source PDFs by SHA-256.
- `git diff --check` completed without whitespace errors.

## 2026-10-05 21:25 CEST — Mobile profile photograph

- Increased the homepage profile photograph from 100 × 100 px to 140 × 140 px at viewport widths up to 1024 px.
- Left the desktop portrait and all non-profile images unchanged.

Verification:

- Confirmed the mobile media query contains the new dimensions.
- `git diff --check` completed without whitespace errors.

## 2026-10-05 17:20 CEST — Research website content refresh

- Reorganized navigation into Research, Teaching, Outreach, Experience and CV while retaining the existing visual design.
- Rewrote the homepage around prior-guided active perception and added a HortiBot demonstration.
- Added seven featured research projects with problem, contribution, result and available paper/video links.
- Added current SG-DOR, O-STaR and SG-AMP figures and a compressed O-STaR preview.
- Explicitly separated O-STaR from the distinct IROS 2025 Best Poster precursor and marked the O-STaR arXiv link as forthcoming.
- Added the EvidMTL IROS 2025 highlights talk at the supplied 3:08 timestamp.
- Added the Wissenschaftsfest demonstration recording at the supplied 1:05 timestamp.
- Added the GITEX AI Expo demonstration recording at the supplied 1:00 timestamp.
- Added MAiRA voice-controlled pick-and-place and robot tic-tac-toe engineering demonstration videos to Experience.
- Added the MAiRA safe human-detection demonstration video to Experience.
- Added the complete HortiBot harvesting sequence as a 13.5-second 2× preview, compressed to 720p at 25 fps without audio.
- Simplified the thesis-supervision presentation to direct topic and outcome entries.
- Replaced student-name headings with project titles and listed each supervised lab project separately.
- Added the five specified lab projects across Winter 2024/25, Winter 2025/26 and Summer 2026.
- Added all five completed MSc thesis topics and two ongoing supervised MSc theses.
- Added Placeability and GO-VMP as co-supervised MSc thesis entries with their publication outcomes.
- Added the supplied Flexible Command Grounding and Active Perception screenshots to the Summer 2026 lab-project cards.
- Added the NeTTUN demonstration video and the Hybr-iT/MobiPick system page, describing motion planning and arm trajectory generation.
- Restored Email, Google Scholar, ORCID, ResearchGate, GitHub, LinkedIn and HRL profile links across the site.
- Reduced the homepage research headline on desktop and mobile.
- Replaced the SG-DOR image with the supplied 16:9 cover figure.
- Added locally hosted clickable thumbnails for research, industry and outreach YouTube videos so full videos load only after selection.
- Presented O-STaR and the IROS 2025 Best Poster work as separate featured research projects.
- Added separate academic and industry CV downloads sourced from `CV_RohitMenon`.
- Standardized the website on Inter sans-serif, reduced the homepage statement size, showed the full SG-DOR figure and added the WDR/HortiBot thumbnails.
- Used the HortiBot cover figure as the project image and retained the video as a separate thumbnail.
- Displayed the complete NBV-SC, EvidMTL and DawnIK figures with contained image fitting.
- Stacked project figures above their video thumbnails in the media column; labelled the HortiBot video “Greenhouse demo.”
- Replaced Problem/Contribution/Result blocks and author-role labels with concise descriptions and prominent conference-location badges.
- Reordered research, teaching, lab-project and outreach entries in reverse chronological order.
- Restored GO-VMP and Fruit Mapping, added the ICRA 2016 MSc thesis project and its compressed 25 fps muted video, and placed SG-AMP first with its IROS 2026 workshop venue.
- Added full paper titles, published-paper and arXiv links where available, and thumbnail-activated YouTube embeds.
- Aligned lecture semesters at the right and summarized more than ten Humanoid Robots seminar projects from 2022 to 2026.
- Added the preferred Pint of Science talk photograph and its presentation title.
- Used the NBV-SC video teaser as the card's only media instead of repeating the cover figure.
- Used the DawnIK video teaser as the card's only media instead of repeating the cover figure.
- Placed the HortiBot Greenhouse demo directly below its cover figure.
- Kept Experience date ranges on one line and removed the DFKI unknown-object-picking bullet.
- Added the official DFKI MobiPick video thumbnail and changed the Xenomai wording to "developed."
- Removed the unsupported GO-VMP personal-contribution statement and replaced it with wording supported by the paper abstract.
- Rewrote HortiBot to foreground the full perception stack and rewrote EvidMTL from the paper abstract, including its evidential depth loss and reported 30% mapping improvement.
- Rewrote DawnIK, NBV-SC, Fruit Mapping and the assistive-grasping MSc thesis from their papers, replacing generic validation language with the actual methods and reported outcomes.
- Removed first-person authorship qualifiers from the HortiBot, DawnIK, NBV-SC and assistive-grasping descriptions so the cards focus on the methods and results.
- Added separate teaching, outreach and experience pages using the current academic CV and official records.
- Synced the current six-page academic CV and 25-entry BibTeX source.
- Added explicit image credits and YouTube privacy disclosure.

Verification:

- Checked all local links and required assets; no missing site targets.
- Rendered the homepage at 1440 px and Research/Outreach at 390 px in headless Chrome; navigation, cards, images and video remained readable without horizontal overflow.
- Confirmed the O-STaR asset is H.264, 1280×720, 25 fps, 12 seconds, 467 KB and has no audio stream.
- Confirmed the downloadable academic CV is six A4 pages and the BibTeX database contains 25 records.
- `git diff --check` completed without whitespace errors.
