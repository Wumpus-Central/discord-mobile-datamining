// _runtime/metro/15539__.js

export function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
}
