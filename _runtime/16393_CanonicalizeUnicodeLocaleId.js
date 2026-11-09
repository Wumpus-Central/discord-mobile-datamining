// _runtime/16393_CanonicalizeUnicodeLocaleId.js

export function CanonicalizeUnicodeLocaleId(items) {
  return Intl.getCanonicalLocales(items)[0];
}
