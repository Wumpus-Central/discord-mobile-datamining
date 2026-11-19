// === Module 15355: CanonicalizeLocaleList ===

// Module 15355 (CanonicalizeLocaleList)

export function CanonicalizeLocaleList(items) {
  return Intl.getCanonicalLocales(items);
}