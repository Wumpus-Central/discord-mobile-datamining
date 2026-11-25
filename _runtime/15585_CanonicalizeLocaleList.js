// === Module 15585: CanonicalizeLocaleList ===

// Module 15585 (CanonicalizeLocaleList)

export function CanonicalizeLocaleList(items) {
  return Intl.getCanonicalLocales(items);
}