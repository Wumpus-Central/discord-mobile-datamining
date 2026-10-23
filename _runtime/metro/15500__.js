// _runtime/metro/15500__.js

export const shouldPolyfill = function shouldPolyfill() {
  return !("supportedValuesOf" in Intl);
};
