// === Module 15518: ? ===

// Module 15518

export function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
}