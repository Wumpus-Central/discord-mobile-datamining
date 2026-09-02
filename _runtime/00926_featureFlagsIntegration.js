// === Module 926: featureFlagsIntegration ===

// Module 926 (featureFlagsIntegration)
import setupIntegration from "setupIntegration" /* 884 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const featureFlagsIntegration = setupIntegration.defineIntegration(() => ({
  name: "FeatureFlags",
  processEvent(contexts) {
    return callback(927)._INTERNAL_copyFlagsFromScopeToEvent(contexts);
  },
  addFeatureFlag(first, value) {
    const result = callback(927)._INTERNAL_insertFlagToScope(first, value);
    const obj = callback(927);
    const result1 = callback(927)._INTERNAL_addFeatureFlagToActiveSpan(first, value);
  }
}));