// _runtime/16325_CanonicalizeUnicodeLocaleId.js

export function CanonicalizeUnicodeLocaleId(items) {
  return Intl.getCanonicalLocales(items)[0];
}
