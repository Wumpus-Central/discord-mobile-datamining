// _runtime/14229_CanonicalizeLocaleList.js

export const CanonicalizeLocaleList = function CanonicalizeLocaleList(items) {
  return Intl.getCanonicalLocales(items);
};
