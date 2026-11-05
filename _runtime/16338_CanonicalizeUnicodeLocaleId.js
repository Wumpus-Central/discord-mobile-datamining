// _runtime/16338_CanonicalizeUnicodeLocaleId.js

export function CanonicalizeUnicodeLocaleId(items) {
  return Intl.getCanonicalLocales(items)[0];
}
