// === Module 16383: CanonicalizeUnicodeLocaleId ===

// Module 16383 (CanonicalizeUnicodeLocaleId)

export function CanonicalizeUnicodeLocaleId(items) {
  return Intl.getCanonicalLocales(items)[0];
}