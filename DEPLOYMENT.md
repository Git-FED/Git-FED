# Deployment Guide

## GitHub Pages setup

1. Push the repository to GitHub.
2. Open **Settings → Pages**.
3. Select **GitHub Actions** as the source.
4. Ensure the default branch is `main` or update `.github/workflows/deploy.yml`.
5. Push a change or run the workflow manually.
6. Open the deployment URL from the workflow environment.
7. Test from a clean browser session, not only an already cached session.

## Custom domain

`CNAME` is intentionally blank until DNS ownership is ready. When using a custom domain:

- Put the exact hostname in `CNAME`.
- Add the GitHub Pages DNS records recommended by GitHub.
- Enable HTTPS after DNS resolves.
- Test both apex and `www` behavior if both are configured.

## Release checklist

- [ ] Homepage loads with no console errors.
- [ ] Project cards load from `data/portfolio.json`.
- [ ] Relative links work from the deployed base path.
- [ ] 404 page loads for an unknown route.
- [ ] Footer emails open the intended mail client.
- [ ] External support links are verified.
- [ ] Age gate hides payment embeds in a clean browser.
- [ ] Reduced motion and keyboard navigation work.
- [ ] Payment provider and legal review are complete before live billing.
