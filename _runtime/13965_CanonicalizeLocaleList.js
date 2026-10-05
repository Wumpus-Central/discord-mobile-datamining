// === Module 13965: CanonicalizeLocaleList ===

// Module 13965 (CanonicalizeLocaleList)

export const CanonicalizeLocaleList = function CanonicalizeLocaleList(items) {
  return Intl.getCanonicalLocales(items);
};