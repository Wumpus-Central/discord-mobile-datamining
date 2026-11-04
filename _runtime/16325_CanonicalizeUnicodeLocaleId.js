// === Module 16325: CanonicalizeUnicodeLocaleId ===

// Module 16325 (CanonicalizeUnicodeLocaleId)

export function CanonicalizeUnicodeLocaleId(items) {
  return Intl.getCanonicalLocales(items)[0];
}