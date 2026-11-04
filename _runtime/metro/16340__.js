// _runtime/metro/16340__.js

export function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
}
