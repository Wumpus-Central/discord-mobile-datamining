// === Module 15539: ? ===

// Module 15539

export function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
}