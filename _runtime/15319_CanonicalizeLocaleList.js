// _runtime/15319_CanonicalizeLocaleList.js

export function CanonicalizeLocaleList(items) {
  return Intl.getCanonicalLocales(items);
}
