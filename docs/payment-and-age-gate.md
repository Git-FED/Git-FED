# Payment and Age-Gate Implementation Note

## What is implemented

The promotional page contains:

- A date-of-birth input.
- A client-side check for an age of 18 or older.
- A `localStorage` flag used to avoid repeated prompts on the same browser.
- PayPal subscription markup and Stripe Buy Button markup inside the gated region.
- Ko-fi and Buy Me a Coffee support links outside the subscription embed.

## What this does not prove

This does not prove age, identity, location, eligibility, consent, tax status, consumer-protection compliance, or compliance with a payment provider's terms. A front-end flag can be altered by the visitor and must not be treated as a security boundary.

## Production checklist

- Confirm the appropriate age threshold by jurisdiction and product.
- Confirm whether the product actually requires an age restriction.
- Confirm provider rules for subscription buttons, recurring billing, disclosures, receipts, cancellation, refunds, and chargebacks.
- Do not store date of birth unless there is a documented lawful reason and secure data design.
- Decide whether payment should be handled on a provider-hosted page instead of embedded.
- Add terms, privacy, refund, and contact links before live billing.
- Use a server-side entitlement system for paid access; never trust `localStorage`.
- Test rejected, canceled, successful, refunded, and chargeback flows.
- Confirm whether the displayed public keys and plan IDs are still active and intended for this project.
