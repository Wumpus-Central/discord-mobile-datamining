// === Module 14289: CanonicalizeLocaleList ===

// Module 14289 (CanonicalizeLocaleList)

export const CanonicalizeLocaleList = function CanonicalizeLocaleList(items) {
  return Intl.getCanonicalLocales(items);
};