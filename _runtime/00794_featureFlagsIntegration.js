// _runtime/00794_featureFlagsIntegration.js
import setupIntegration from "00752_setupIntegration.js";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const featureFlagsIntegration = setupIntegration.defineIntegration(() => ({
  name: "FeatureFlags",
  processEvent(contexts) {
    return callback(795)._INTERNAL_copyFlagsFromScopeToEvent(contexts);
  },
  addFeatureFlag(first, value) {
    const result = callback(795)._INTERNAL_insertFlagToScope(first, value);
    const obj = callback(795);
    const result1 = callback(795)._INTERNAL_addFeatureFlagToActiveSpan(first, value);
  },
}));
