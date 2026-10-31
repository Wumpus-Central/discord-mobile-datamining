// === Module 16076: CanonicalizeUnicodeLocaleId ===

// Module 16076 (CanonicalizeUnicodeLocaleId)

export function CanonicalizeUnicodeLocaleId(items) {
  return Intl.getCanonicalLocales(items)[0];
}