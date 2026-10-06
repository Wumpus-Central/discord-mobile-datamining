// === Module 13983: CanonicalizeLocaleList ===

// Module 13983 (CanonicalizeLocaleList)

export const CanonicalizeLocaleList = function CanonicalizeLocaleList(items) {
  return Intl.getCanonicalLocales(items);
};