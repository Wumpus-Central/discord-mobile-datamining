// === Module 15445: ? ===

// Module 15445

export function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
}