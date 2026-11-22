// === Module 15488: CanonicalizeUnicodeLocaleId ===

// Module 15488 (CanonicalizeUnicodeLocaleId)

export function CanonicalizeUnicodeLocaleId(items) {
  return Intl.getCanonicalLocales(items)[0];
}