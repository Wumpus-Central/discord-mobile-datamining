// _runtime/00929_featureFlagsIntegration.js
import setupIntegration from "00887_setupIntegration.js";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const featureFlagsIntegration = setupIntegration.defineIntegration(() => ({
  name: "FeatureFlags",
  processEvent(contexts) {
    return callback(930)._INTERNAL_copyFlagsFromScopeToEvent(contexts);
  },
  addFeatureFlag(first, value) {
    const result = callback(930)._INTERNAL_insertFlagToScope(first, value);
    const obj = callback(930);
    const result1 = callback(930)._INTERNAL_addFeatureFlagToActiveSpan(first, value);
  },
}));
