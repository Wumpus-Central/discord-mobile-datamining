// === Module 15691: CanonicalizeUnicodeLocaleId ===

// Module 15691 (CanonicalizeUnicodeLocaleId)

export function CanonicalizeUnicodeLocaleId(items) {
  return Intl.getCanonicalLocales(items)[0];
}