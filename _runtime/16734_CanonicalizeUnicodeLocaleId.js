// === Module 16734: CanonicalizeUnicodeLocaleId ===

// Module 16734 (CanonicalizeUnicodeLocaleId)

export function CanonicalizeUnicodeLocaleId(items) {
  return Intl.getCanonicalLocales(items)[0];
}