// === Module 14290: CanonicalizeLocaleList ===

// Module 14290 (CanonicalizeLocaleList)

export const CanonicalizeLocaleList = function CanonicalizeLocaleList(items) {
  return Intl.getCanonicalLocales(items);
};