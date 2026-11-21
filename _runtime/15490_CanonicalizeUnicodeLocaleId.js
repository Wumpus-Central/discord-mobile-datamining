// === Module 15490: CanonicalizeUnicodeLocaleId ===

// Module 15490 (CanonicalizeUnicodeLocaleId)

export function CanonicalizeUnicodeLocaleId(items) {
  return Intl.getCanonicalLocales(items)[0];
}