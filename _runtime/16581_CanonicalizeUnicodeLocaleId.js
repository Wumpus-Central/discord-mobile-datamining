// _runtime/16581_CanonicalizeUnicodeLocaleId.js

export function CanonicalizeUnicodeLocaleId(items) {
  return Intl.getCanonicalLocales(items)[0];
}
