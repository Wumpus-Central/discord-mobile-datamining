// === Module 14254: CanonicalizeLocaleList ===

// Module 14254 (CanonicalizeLocaleList)

export const CanonicalizeLocaleList = function CanonicalizeLocaleList(items) {
  return Intl.getCanonicalLocales(items);
};