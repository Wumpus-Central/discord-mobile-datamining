// _runtime/13983_CanonicalizeLocaleList.js

export const CanonicalizeLocaleList = function CanonicalizeLocaleList(items) {
  return Intl.getCanonicalLocales(items);
};
