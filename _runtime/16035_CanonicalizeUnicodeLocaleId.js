// === Module 16035: CanonicalizeUnicodeLocaleId ===

// Module 16035 (CanonicalizeUnicodeLocaleId)

export function CanonicalizeUnicodeLocaleId(items) {
  return Intl.getCanonicalLocales(items)[0];
}