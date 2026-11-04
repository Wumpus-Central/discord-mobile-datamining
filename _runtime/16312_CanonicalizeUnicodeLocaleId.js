// === Module 16312: CanonicalizeUnicodeLocaleId ===

// Module 16312 (CanonicalizeUnicodeLocaleId)

export function CanonicalizeUnicodeLocaleId(items) {
  return Intl.getCanonicalLocales(items)[0];
}