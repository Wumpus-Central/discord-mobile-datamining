// === Module 794: featureFlagsIntegration ===

// Module 794 (featureFlagsIntegration)
import setupIntegration from "setupIntegration" /* 752 */;

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
  }
}));