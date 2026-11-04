// === Module 16340: ? ===

// Module 16340

export function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
}