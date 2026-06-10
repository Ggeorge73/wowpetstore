# Production Security Hardening Checklist

## Authentication

- [ ] Disable mock authentication in production builds.
- [ ] Configure real Firebase Auth providers before enabling account features.
- [ ] Show `Account service temporarily unavailable` if Firebase fails in production.
- [ ] Do not allow fake localStorage users in production.

## Firestore

- [ ] Deploy `firestore.rules` before enabling production Firebase features.
- [ ] Confirm users can only read/write their own user document.
- [ ] Do not allow browser clients to write paid orders.
- [ ] Do not allow browser clients to write authoritative loyalty or subscription state.
- [ ] Moderate or validate reviews before displaying them publicly.

## Shopify

- [ ] Keep Shopify as the only payment authority.
- [ ] Confirm the exposed token is Storefront-only, not Admin API.
- [ ] Confirm every product page maps to the intended Shopify product and variant.
- [ ] Confirm paid orders appear in Shopify Admin.

## Browser security

- [ ] Add a Content Security Policy at the host/CDN level.
- [ ] Add HSTS, Referrer-Policy, Permissions-Policy, and X-Content-Type-Options headers.
- [ ] Sanitize user-generated content before rendering it with HTML.
- [ ] Treat localStorage as convenience cache only, not trusted state.
