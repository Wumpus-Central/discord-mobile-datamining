// === Module 979: _wrappedIsEnabled ===

// Module 979 (_wrappedIsEnabled)
import _mod946 from "module_946" /* 946 */;
import registerSpanErrorInstrumentation from "module_693" /* 693 */;

function _wrappedIsEnabled(arg0) {
  closure_0 = arg0;
  return function() {
    const items = [...arguments];
    const first = items[0];
    const applyResult = closure_0.apply(this, items);
    if (typeof first === "string") {
      if (typeof applyResult === "boolean") {
        const result = registerSpanErrorInstrumentation._INTERNAL_insertFlagToScope(first, applyResult);
        const result1 = registerSpanErrorInstrumentation._INTERNAL_addFeatureFlagToActiveSpan(first, applyResult);
      }
      return applyResult;
    }
    if (_mod946.DEBUG_BUILD) {
      const debug = registerSpanErrorInstrumentation.debug;
      const _HermesInternal = HermesInternal;
      debug.error("[Feature Flags] UnleashClient.isEnabled does not match expected signature. arg0: " + first + " (" + typeof first + "), result: " + applyResult + " (" + typeof applyResult + ")");
    }
  };
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const unleashIntegration = registerSpanErrorInstrumentation.defineIntegration((featureFlagClientClass) => {
  featureFlagClientClass = featureFlagClientClass.featureFlagClientClass;
  return {
    name: "Unleash",
    setupOnce() {
      registerSpanErrorInstrumentation.fill(featureFlagClientClass.prototype, "isEnabled", _wrappedIsEnabled);
    },
    processEvent(contexts, arg1, arg2) {
      return featureFlagClientClass(dependencyMap[0])._INTERNAL_copyFlagsFromScopeToEvent(contexts);
    }
  };
});