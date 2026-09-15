// === Module 14299: CanonicalizeLocaleList ===

// Module 14299 (CanonicalizeLocaleList)

export const CanonicalizeLocaleList = function CanonicalizeLocaleList(items) {
  return Intl.getCanonicalLocales(items);
};