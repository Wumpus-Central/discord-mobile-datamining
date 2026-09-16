// _runtime/14317_CanonicalizeLocaleList.js

export const CanonicalizeLocaleList = function CanonicalizeLocaleList(items) {
  return Intl.getCanonicalLocales(items);
};
