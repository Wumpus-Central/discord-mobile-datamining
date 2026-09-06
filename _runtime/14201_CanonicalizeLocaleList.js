// _runtime/14201_CanonicalizeLocaleList.js

export const CanonicalizeLocaleList = function CanonicalizeLocaleList(items) {
  return Intl.getCanonicalLocales(items);
};
