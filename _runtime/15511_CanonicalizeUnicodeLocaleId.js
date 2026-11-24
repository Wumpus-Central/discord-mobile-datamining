// === Module 15511: CanonicalizeUnicodeLocaleId ===

// Module 15511 (CanonicalizeUnicodeLocaleId)

export function CanonicalizeUnicodeLocaleId(items) {
  return Intl.getCanonicalLocales(items)[0];
}