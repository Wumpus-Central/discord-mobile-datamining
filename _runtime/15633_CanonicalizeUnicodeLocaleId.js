// === Module 15633: CanonicalizeUnicodeLocaleId ===

// Module 15633 (CanonicalizeUnicodeLocaleId)

export function CanonicalizeUnicodeLocaleId(items) {
  return Intl.getCanonicalLocales(items)[0];
}