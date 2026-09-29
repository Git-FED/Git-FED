# Incident Response

## Severity

- **P0:** payment, security, or broad outage with material user impact.
- **P1:** important public path broken or misleading users.
- **P2:** limited feature, content, or visual defect.
- **P3:** polish, documentation, or low-impact issue.

## Response sequence

1. Acknowledge the report privately and assign an owner.
2. Confirm scope without exposing personal or payment data.
3. Disable or hide a broken payment path if necessary.
4. Publish a factual status note when users are affected.
5. Identify workaround and next update time.
6. Fix, test, and deploy.
7. Record root cause, timeline, and prevention action.

## Status update template

**Investigating:** We are investigating [service/path]. Users may experience [impact]. Next update by [time].

**Identified:** The issue is caused by [verified cause]. We are applying [workaround/fix].

**Resolved:** The issue was resolved at [time]. We are monitoring and will document follow-up actions.
