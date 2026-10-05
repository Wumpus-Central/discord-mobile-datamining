// === Module 805: featureFlagsIntegration ===

// Module 805 (featureFlagsIntegration)
import _INTERNAL_FLAG_BUFFER_SIZE from "_INTERNAL_FLAG_BUFFER_SIZE" /* 806 */;
import module_763 from "module_763" /* 763 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const featureFlagsIntegration = module_763.defineIntegration(() => {
  let obj = {
    name: "FeatureFlags",
    processEvent(contexts, arg1, arg2) {
      const obj = _INTERNAL_FLAG_BUFFER_SIZE;
      return obj._INTERNAL_copyFlagsFromScopeToEvent(contexts);
    },
    addFeatureFlag(flagKey, value) {
      const obj = _INTERNAL_FLAG_BUFFER_SIZE;
      const result = obj._INTERNAL_insertFlagToScope(flagKey, value);
      const obj2 = _INTERNAL_FLAG_BUFFER_SIZE;
      const result1 = obj2._INTERNAL_addFeatureFlagToActiveSpan(flagKey, value);
    }
  };
  return obj;
});