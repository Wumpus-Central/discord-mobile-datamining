// _runtime/16699_CanonicalizeUnicodeLocaleId.js

export function CanonicalizeUnicodeLocaleId(items) {
  return Intl.getCanonicalLocales(items)[0];
}
