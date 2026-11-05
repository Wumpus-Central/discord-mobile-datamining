// === Module 16338: CanonicalizeUnicodeLocaleId ===

// Module 16338 (CanonicalizeUnicodeLocaleId)

export function CanonicalizeUnicodeLocaleId(items) {
  return Intl.getCanonicalLocales(items)[0];
}