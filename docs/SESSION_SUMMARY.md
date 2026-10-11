# Session summary

## 2026-10-11 23:30 CEST — Website CV and O-STaR video refresh

- Replaced the downloadable academic CV and industry résumé with the current rebuilt PDFs.
- Updated the legacy `cv.pdf` academic-CV alias for consistency.
- Replaced the short O-STaR preview with the supplied full paper video and removed its silent audio track.

Verification:

- Confirmed both website downloads match their source PDFs by SHA-256.
- Confirmed the academic CV is six A4 pages and the industry résumé is two A4 pages.
- Confirmed neither PDF contains a telephone number in its extracted text.
- Confirmed the O-STaR video uses browser-compatible H.264 video and contains no audio stream.
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

## Archive

- 2026-10-05 17:20 CEST — Refreshed website content, navigation, research media, teaching, outreach, experience and CV downloads.
