// === Module 16420: CanonicalizeUnicodeLocaleId ===

// Module 16420 (CanonicalizeUnicodeLocaleId)

export function CanonicalizeUnicodeLocaleId(items) {
  return Intl.getCanonicalLocales(items)[0];
}