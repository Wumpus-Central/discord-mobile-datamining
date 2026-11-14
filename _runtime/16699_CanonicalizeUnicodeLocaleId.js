// === Module 16699: CanonicalizeUnicodeLocaleId ===

// Module 16699 (CanonicalizeUnicodeLocaleId)

export function CanonicalizeUnicodeLocaleId(items) {
  return Intl.getCanonicalLocales(items)[0];
}