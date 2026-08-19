// _runtime/01105__wrappedIsEnabled.js
import registerSpanErrorInstrumentation from "00817_registerSpanErrorInstrumentation.js";

function _wrappedIsEnabled(arg0) {
  closure_0 = arg0;
  return function() {
    const items = [...arguments];
    const first = items[0];
    const applyResult = callback.apply(this, items);
    if (typeof first === "string") {
      if (typeof applyResult === "boolean") {
        const result = callback(dependencyMap[0])._INTERNAL_insertFlagToScope(first, applyResult);
        const obj = callback(dependencyMap[0]);
        const result1 = callback(dependencyMap[0])._INTERNAL_addFeatureFlagToActiveSpan(first, applyResult);
        const obj2 = callback(dependencyMap[0]);
      }
      return applyResult;
    }
    if (callback(dependencyMap[1]).DEBUG_BUILD) {
      const debug = callback(dependencyMap[0]).debug;
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
      featureFlagClientClass(dependencyMap[0]).fill(featureFlagClientClass.prototype, "isEnabled", _wrappedIsEnabled);
    },
    processEvent(contexts) {
      return featureFlagClientClass(table[0])._INTERNAL_copyFlagsFromScopeToEvent(contexts);
    }
  };
});