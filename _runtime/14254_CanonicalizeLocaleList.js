// _runtime/14254_CanonicalizeLocaleList.js

export const CanonicalizeLocaleList = function CanonicalizeLocaleList(items) {
  return Intl.getCanonicalLocales(items);
};
