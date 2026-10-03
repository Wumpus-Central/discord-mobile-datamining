// === Module 805: featureFlagsIntegration ===

// Module 805 (featureFlagsIntegration)
import _INTERNAL_FLAG_BUFFER_SIZE from "_INTERNAL_FLAG_BUFFER_SIZE" /* 806 */;
import setupIntegration from "setupIntegration" /* 763 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const featureFlagsIntegration = setupIntegration.defineIntegration(() => ({
  name: "FeatureFlags",
  processEvent(contexts, arg1, arg2) {
    return _INTERNAL_FLAG_BUFFER_SIZE._INTERNAL_copyFlagsFromScopeToEvent(contexts);
  },
  addFeatureFlag(flagKey, value) {
    const result = _INTERNAL_FLAG_BUFFER_SIZE._INTERNAL_insertFlagToScope(flagKey, value);
    const result1 = _INTERNAL_FLAG_BUFFER_SIZE._INTERNAL_addFeatureFlagToActiveSpan(flagKey, value);
  }
}));