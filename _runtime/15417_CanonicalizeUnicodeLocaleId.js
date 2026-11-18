// === Module 15417: CanonicalizeUnicodeLocaleId ===

// Module 15417 (CanonicalizeUnicodeLocaleId)

export function CanonicalizeUnicodeLocaleId(items) {
  return Intl.getCanonicalLocales(items)[0];
}