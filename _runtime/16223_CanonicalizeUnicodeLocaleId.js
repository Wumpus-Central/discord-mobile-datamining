// === Module 16223: CanonicalizeUnicodeLocaleId ===

// Module 16223 (CanonicalizeUnicodeLocaleId)

export function CanonicalizeUnicodeLocaleId(items) {
  return Intl.getCanonicalLocales(items)[0];
}