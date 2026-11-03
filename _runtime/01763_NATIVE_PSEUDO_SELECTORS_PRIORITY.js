// _runtime/01763_NATIVE_PSEUDO_SELECTORS_PRIORITY.js
const items = [":focus-within", ":focus", ":hover", ":active", ":active-deepest"];

export const NATIVE_PSEUDO_SELECTORS_PRIORITY = items;
export const NATIVE_PSEUDO_SELECTORS = new Set(items);
export const PRESS_PSEUDO_SELECTORS = [":active", ":active-deepest"];
