// === Module 14201: CanonicalizeLocaleList ===

// Module 14201 (CanonicalizeLocaleList)

export const CanonicalizeLocaleList = function CanonicalizeLocaleList(items) {
  return Intl.getCanonicalLocales(items);
};