// === Module 16335: CanonicalizeUnicodeLocaleId ===

// Module 16335 (CanonicalizeUnicodeLocaleId)

export function CanonicalizeUnicodeLocaleId(items) {
  return Intl.getCanonicalLocales(items)[0];
}