// === Module 1763: NATIVE_PSEUDO_SELECTORS_PRIORITY ===

// Module 1763 (NATIVE_PSEUDO_SELECTORS_PRIORITY)
const items = [":focus-within", ":focus", ":hover", ":active", ":active-deepest"];

export const NATIVE_PSEUDO_SELECTORS_PRIORITY = items;
export const NATIVE_PSEUDO_SELECTORS = new Set(items);
export const PRESS_PSEUDO_SELECTORS = [":active", ":active-deepest"];