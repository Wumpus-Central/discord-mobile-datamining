// === Module 14229: CanonicalizeLocaleList ===

// Module 14229 (CanonicalizeLocaleList)

export const CanonicalizeLocaleList = function CanonicalizeLocaleList(items) {
  return Intl.getCanonicalLocales(items);
};