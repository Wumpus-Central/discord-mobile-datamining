// === Module 14317: CanonicalizeLocaleList ===

// Module 14317 (CanonicalizeLocaleList)

export const CanonicalizeLocaleList = function CanonicalizeLocaleList(items) {
  return Intl.getCanonicalLocales(items);
};