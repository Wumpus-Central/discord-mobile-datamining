// === Module 15684: CanonicalizeUnicodeLocaleId ===

// Module 15684 (CanonicalizeUnicodeLocaleId)

export function CanonicalizeUnicodeLocaleId(items) {
  return Intl.getCanonicalLocales(items)[0];
}