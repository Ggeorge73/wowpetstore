# Shopify Product Mapping Audit

## Current status

The local site catalog contains 24 products and `js/store.js` includes Shopify product ID mappings for local product IDs 1 through 24.

## Production risk addressed

The prior implementation assigned a fallback Shopify product ID when a local product did not have an explicit Shopify mapping. That can cause the wrong Shopify product to be displayed or purchased if a new local product is added without a Shopify ID.

## Required launch validation

Before production traffic, confirm each local product maps to the intended Shopify product and variant in Shopify Admin.

Recommended audit columns:

- Local product ID
- Local product name
- Local price
- Local weight
- Shopify product ID
- Shopify product title
- Shopify variant ID
- Shopify price
- Shopify inventory status
- Shopify image
- Match status
- Notes

## Expected behavior after this fix

If a local product does not have a Shopify ID, the product page should show a clear unavailable message instead of silently falling back to another product.