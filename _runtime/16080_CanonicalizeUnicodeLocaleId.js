// === Module 16080: CanonicalizeUnicodeLocaleId ===

// Module 16080 (CanonicalizeUnicodeLocaleId)

export function CanonicalizeUnicodeLocaleId(items) {
  return Intl.getCanonicalLocales(items)[0];
}