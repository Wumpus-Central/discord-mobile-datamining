// _runtime/00794_featureFlagsIntegration.js
import _INTERNAL_FLAG_BUFFER_SIZE from "00795__INTERNAL_FLAG_BUFFER_SIZE.js";
import setupIntegration from "00752_setupIntegration.js";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const featureFlagsIntegration = setupIntegration.defineIntegration(() => ({
  name: "FeatureFlags",
  processEvent(contexts, arg1, arg2) {
    return _INTERNAL_FLAG_BUFFER_SIZE._INTERNAL_copyFlagsFromScopeToEvent(contexts);
  },
  addFeatureFlag(flagKey, value) {
    const result = _INTERNAL_FLAG_BUFFER_SIZE._INTERNAL_insertFlagToScope(flagKey, value);
    const result1 = _INTERNAL_FLAG_BUFFER_SIZE._INTERNAL_addFeatureFlagToActiveSpan(flagKey, value);
  },
}));
