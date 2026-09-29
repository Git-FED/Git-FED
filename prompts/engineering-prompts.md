# Engineering Prompts

## Repository planner

```text
Given this FedPromptly feature request, return: user problem, smallest useful slice, file tree, content/data shape, accessibility behavior, responsive states, privacy concerns, tests, deployment notes, rollback plan, and future extension. Prefer static-first solutions and do not introduce authentication, payments, a database, or a background job unless the requirement truly needs it.
```

## Review prompt

```text
Review this change for correctness, broken links, accessibility, mobile behavior, performance, privacy, payment boundaries, copy accuracy, and scope. Report blockers first with file/line evidence. Then report improvements. End with the smallest test plan that gives confidence.
```

## Accessibility prompt

```text
Audit this page as a keyboard-only, screen-reader, mobile, low-bandwidth, and reduced-motion user. Return evidence, severity, fix, and a manual verification step for each finding.
```
