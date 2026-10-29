// === Module 15995: CanonicalizeUnicodeLocaleId ===

// Module 15995 (CanonicalizeUnicodeLocaleId)

export function CanonicalizeUnicodeLocaleId(items) {
  return Intl.getCanonicalLocales(items)[0];
}