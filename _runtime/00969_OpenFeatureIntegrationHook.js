// _runtime/00969_OpenFeatureIntegrationHook.js
import _classCallCheck from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";
import registerSpanErrorInstrumentation from "metro/00682__.js";

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
    const result = OpenFeatureIntegrationHook(682)._INTERNAL_insertFlagToScope(flagKey.flagKey, flagKey.value);
    const obj = OpenFeatureIntegrationHook(682);
    const result1 = OpenFeatureIntegrationHook(682)._INTERNAL_addFeatureFlagToActiveSpan(
      flagKey.flagKey,
      flagKey.value,
    );
  },
};
const items = [
  entry,
  {
    key: "error",
    value: function error(flagKey, arg1, arg2) {
      const result = OpenFeatureIntegrationHook(682)._INTERNAL_insertFlagToScope(flagKey.flagKey, flagKey.defaultValue);
      const obj = OpenFeatureIntegrationHook(682);
      const result1 = OpenFeatureIntegrationHook(682)._INTERNAL_addFeatureFlagToActiveSpan(
        flagKey.flagKey,
        flagKey.defaultValue,
      );
    },
  },
];

export const OpenFeatureIntegrationHook = _createClass(OpenFeatureIntegrationHook, items);
export const openFeatureIntegration = registerSpanErrorInstrumentation.defineIntegration(() => ({
  name: "OpenFeature",
  processEvent(contexts, arg1, arg2) {
    return OpenFeatureIntegrationHook(dependencyMap[2])._INTERNAL_copyFlagsFromScopeToEvent(contexts);
  },
}));
