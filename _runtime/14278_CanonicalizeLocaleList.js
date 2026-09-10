// === Module 14278: CanonicalizeLocaleList ===

// Module 14278 (CanonicalizeLocaleList)

export const CanonicalizeLocaleList = function CanonicalizeLocaleList(items) {
  return Intl.getCanonicalLocales(items);
};