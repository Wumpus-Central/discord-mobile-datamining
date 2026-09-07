// === Module 14204: CanonicalizeLocaleList ===

// Module 14204 (CanonicalizeLocaleList)

export const CanonicalizeLocaleList = function CanonicalizeLocaleList(items) {
  return Intl.getCanonicalLocales(items);
};