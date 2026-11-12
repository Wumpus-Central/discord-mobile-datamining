// === Module 16576: CanonicalizeUnicodeLocaleId ===

// Module 16576 (CanonicalizeUnicodeLocaleId)

export function CanonicalizeUnicodeLocaleId(items) {
  return Intl.getCanonicalLocales(items)[0];
}