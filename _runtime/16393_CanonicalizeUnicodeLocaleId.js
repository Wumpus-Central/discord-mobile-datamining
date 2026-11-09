// === Module 16393: CanonicalizeUnicodeLocaleId ===

// Module 16393 (CanonicalizeUnicodeLocaleId)

export function CanonicalizeUnicodeLocaleId(items) {
  return Intl.getCanonicalLocales(items)[0];
}