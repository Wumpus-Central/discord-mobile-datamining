// === Module 15403: CanonicalizeUnicodeLocaleId ===

// Module 15403 (CanonicalizeUnicodeLocaleId)

export function CanonicalizeUnicodeLocaleId(items) {
  return Intl.getCanonicalLocales(items)[0];
}