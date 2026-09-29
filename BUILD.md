# Build and Test Guide

This repository intentionally avoids a required package manager. The build is a static file validation and deployment process.

## Local server

```bash
python3 -m http.server 8000
```

## JSON validation

```bash
python3 -m json.tool data/portfolio.json >/dev/null
python3 -m json.tool FILE_MANIFEST.json >/dev/null
```

## Manual browser test

1. Open the homepage.
2. Confirm the hero says what FedPromptly is.
3. Confirm project cards render from JSON.
4. Clear local storage and verify payment embeds are not shown before age verification.
5. Enter a date for someone under 18 and confirm the error state.
6. Enter a date for someone 18 or older and confirm the gate unlocks.
7. Test all footer email links and support links.
8. Resize to 320px and 1440px.
9. Navigate with Tab and activate controls with Enter/Space.
10. Enable reduced motion and confirm card movement is not essential.

## Definition of done

A change is done when it solves a stated visitor or maintainer problem, has an owner, passes the relevant checks, and does not introduce an unsupported claim.
