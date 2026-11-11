// _runtime/16533_CanonicalizeLocaleList.js

export function CanonicalizeLocaleList(items) {
  return Intl.getCanonicalLocales(items);
}
