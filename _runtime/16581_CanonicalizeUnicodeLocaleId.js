// === Module 16581: CanonicalizeUnicodeLocaleId ===

// Module 16581 (CanonicalizeUnicodeLocaleId)

export function CanonicalizeUnicodeLocaleId(items) {
  return Intl.getCanonicalLocales(items)[0];
}