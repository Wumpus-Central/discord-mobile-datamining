// === Module 14325: CanonicalizeLocaleList ===

// Module 14325 (CanonicalizeLocaleList)

export const CanonicalizeLocaleList = function CanonicalizeLocaleList(items) {
  return Intl.getCanonicalLocales(items);
};