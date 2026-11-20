// === Module 15367: CanonicalizeUnicodeLocaleId ===

// Module 15367 (CanonicalizeUnicodeLocaleId)

export function CanonicalizeUnicodeLocaleId(items) {
  return Intl.getCanonicalLocales(items)[0];
}