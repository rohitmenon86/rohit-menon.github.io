# Session summary

## 2026-11-23 17:14 CET — Research artifacts, academic CV and service updates

- Added the public SG-DOR checkpoint and dataset repositories to its research card.
- Added the public EvidMTL checkpoint repository to its research card.
- Added the public HortiBot pepper/peduncle detection dataset to its research card.
- Added the corresponding HumanoidsBonn code repositories for SG-DOR, EvidMTL, HortiBot and DawnIK.
- Did not add a HortiBot checkpoint link because no public HortiBot model repository was present under the confirmed `rohitmenon86` account.
- Replaced the downloadable academic CV and legacy `cv.pdf` alias with the current five-page public academic CV; retained its content and 258/9/9 Google Scholar metrics while omitting the phone number.
- Synchronized the full website BibTeX file with the current publication database and updated the selected BibTeX file with OMAR and the current O-STaR and SG-AMP records.
- Added the verified Google Scholar metrics to the CV page.
- Added homepage news for service as an RSS 2027 Shepherd and HRI 2027 Pioneers Senior Reviewer.
- Added a homepage availability banner for postdoctoral and research group leader positions from April 2027.
- Updated the research themes from the academic application materials, keeping the forward direction abstract and focused on resource-efficient, adaptable robots for long-horizon mobile manipulation.
- Updated the experience page with the current University of Bonn role, research output, supervision, funding contributions and research-infrastructure procurement listed in the academic CV.
- Updated the teaching page to seven completed and two ongoing MSc theses, three thesis awards, two Winter 2026/27 lab projects and six MSc Mobile Robotics mentees.
- Removed application-specific institutional wording from all public pages, downloadable academic-CV text, BibTeX comments and website documentation.
- Replaced the homepage portrait with the photograph used in the current academic CV, zoomed out to keep the full head and face inside the circular frame without stretching it.

Verification:

- Confirmed all four Hugging Face URLs return HTTP 200.
- Confirmed the Hugging Face API lists the linked resources as public repositories owned by `rohitmenon86`.
- Confirmed the four linked HumanoidsBonn repositories through the public GitHub API.
- Confirmed the live Google Scholar profile reports 258 citations, h-index 9 and i10-index 9.
- Confirmed both academic-CV website filenames match by SHA-256, contain five A4 pages and do not contain the phone number.
- Confirmed the public website files and extracted academic-CV text contain no application-specific institutional wording.
- Rendered and visually inspected all five academic-CV pages.
- Rendered and visually inspected the updated research page at desktop width and the updated CV page at mobile width; the new links and metrics fit without clipping or overflow.
- Rendered and visually inspected the revised homepage at desktop and mobile widths, the research and experience pages at desktop width, and the teaching page at mobile width; the opportunity banner and CV-derived additions fit without clipping or horizontal overflow.
- Rendered and visually inspected the replacement portrait in the circular homepage frame at desktop and mobile widths.
- Verified the edited HTML structure, BibTeX entry sets and internal links.
- `git diff --check` completed without whitespace errors.

## 2026-10-12 14:49 CEST — Public industry résumé refresh

- Replaced the website's downloadable industry résumé with the approved public-facing version derived from the Analog Devices application CV.
- The public version omits the phone number and references; the internal master CV was not copied to the website.

Verification:

- Confirmed the website PDF matches the approved source PDF by SHA-256.
- Confirmed the résumé is two A4 pages.
- Confirmed extracted text contains neither the phone number nor the removed reference contact details.
- Rendered and visually inspected both pages before copying the approved PDF.
- `git diff --check` completed without whitespace errors.

## 2026-10-11 23:30 CEST — Website CV and O-STaR video refresh

- Replaced the downloadable academic CV and industry résumé with the current rebuilt PDFs.
- Updated the legacy `cv.pdf` academic-CV alias for consistency.
- Replaced the short O-STaR preview with the supplied full paper video and removed its silent audio track.
- Replaced the O-STaR poster with the video frame at 02:04.

Verification:

- Confirmed both website downloads match their source PDFs by SHA-256.
- Confirmed the academic CV is six A4 pages and the industry résumé is two A4 pages.
- Confirmed neither PDF contains a telephone number in its extracted text.
- Confirmed the O-STaR video uses browser-compatible H.264 video and contains no audio stream.
- Visually inspected the 1920 × 1080 O-STaR poster extracted at 02:04.
- `git diff --check` completed without whitespace errors.

## 2026-10-06 13:10 CEST — Selected-publication BibTeX

- Added `selected_publications.bib` with only first-author and explicitly marked equal-first-author records.
- Added separate Selected BibTeX and All BibTeX downloads to the CV page.

Verification:

- Confirmed all nine selected entries exactly match the authoritative academic-CV bibliography.
- Confirmed every selected entry lists Rohit Menon first or within the declared equal-first-author group.
- Rendered the CV page at desktop and mobile widths; all four download buttons remain readable and correctly arranged.
- `git diff --check` completed without whitespace errors.

## 2026-10-06 13:05 CEST — CV phone-number removal

- Removed the phone number from the academic and industry CV headers.
- Rebuilt both PDFs and replaced the website downloads.
- Updated the legacy `cv.pdf` academic-CV alias for consistency.

Verification:

- Confirmed text extraction from both rebuilt PDFs contains no phone number.
- The academic CV remains six A4 pages and the industry CV remains two A4 pages.
- Rendered and visually inspected all eight pages; no layout regression was observed.
- Confirmed the website PDFs match the rebuilt source PDFs by SHA-256.
- `git diff --check` completed without whitespace errors.

## Archive

- 2026-10-06 10:58 CEST — Updated both CVs to list English C2 and German B2 and replaced the website downloads.
- 2026-10-05 21:25 CEST — Increased the homepage profile photograph size on mobile screens.
- 2026-10-05 17:20 CEST — Refreshed website content, navigation, research media, teaching, outreach, experience and CV downloads.
