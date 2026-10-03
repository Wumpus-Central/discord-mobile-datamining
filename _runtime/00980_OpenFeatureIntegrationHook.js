// === Module 980: OpenFeatureIntegrationHook ===

// Module 980 (OpenFeatureIntegrationHook)
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import registerSpanErrorInstrumentation from "module_693" /* 693 */;

const OpenFeatureIntegrationHook = require;
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
class OpenFeatureIntegrationHook {
  constructor() {
    tmp = c2(this, OpenFeatureIntegrationHook);
    return;
  }
}
const entry = {
  key: "after",
  value: function after(arg0, flagKey) {
    const result = OpenFeatureIntegrationHook(693)._INTERNAL_insertFlagToScope(flagKey.flagKey, flagKey.value);
    const obj = OpenFeatureIntegrationHook(693);
    const result1 = OpenFeatureIntegrationHook(693)._INTERNAL_addFeatureFlagToActiveSpan(flagKey.flagKey, flagKey.value);
  }
};
const items = [
  entry,
  {
    key: "error",
    value: function error(flagKey, arg1, arg2) {
      const result = OpenFeatureIntegrationHook(693)._INTERNAL_insertFlagToScope(flagKey.flagKey, flagKey.defaultValue);
      const obj = OpenFeatureIntegrationHook(693);
      const result1 = OpenFeatureIntegrationHook(693)._INTERNAL_addFeatureFlagToActiveSpan(flagKey.flagKey, flagKey.defaultValue);
    }
  }
];

export const OpenFeatureIntegrationHook = _createClass(OpenFeatureIntegrationHook, items);
export const openFeatureIntegration = registerSpanErrorInstrumentation.defineIntegration(() => ({
  name: "OpenFeature",
  processEvent(contexts, arg1, arg2) {
    return OpenFeatureIntegrationHook(dependencyMap[2])._INTERNAL_copyFlagsFromScopeToEvent(contexts);
  }
}));