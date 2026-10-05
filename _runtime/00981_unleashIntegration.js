// _runtime/00981_unleashIntegration.js
import _mod948 from "metro/00948__.js";
import registerSpanErrorInstrumentation from "metro/00693__.js";

let featureFlagClientClass;

function _wrappedIsEnabled(arg0) {
  let closure_0 = arg0;
  return function () {
    const items = [...arguments];
    const first = items[0];
    const applyResult = closure_0.apply(this, items);
    if (typeof first === "string") {
      if (typeof applyResult === "boolean") {
        const obj = registerSpanErrorInstrumentation;
        const result = obj._INTERNAL_insertFlagToScope(first, applyResult);
        const obj2 = registerSpanErrorInstrumentation;
        const result1 = obj2._INTERNAL_addFeatureFlagToActiveSpan(first, applyResult);
      }
      return applyResult;
    }
    if (_mod948.DEBUG_BUILD) {
      const debug = registerSpanErrorInstrumentation.debug;
      const _HermesInternal = HermesInternal;
      debug.error(
        "[Feature Flags] UnleashClient.isEnabled does not match expected signature. arg0: " +
          first +
          " (" +
          typeof first +
          "), result: " +
          applyResult +
          " (" +
          typeof applyResult +
          ")",
      );
    }
  };
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const unleashIntegration = registerSpanErrorInstrumentation.defineIntegration((featureFlagClientClass) => {
  featureFlagClientClass = featureFlagClientClass.featureFlagClientClass;
  let obj = {
    name: "Unleash",
    setupOnce() {
      const prototype = featureFlagClientClass.prototype;
      const obj = registerSpanErrorInstrumentation;
      obj.fill(prototype, "isEnabled", _wrappedIsEnabled);
    },
    processEvent(contexts, arg1, arg2) {
      const obj = featureFlagClientClass(dependencyMap[0]);
      return obj._INTERNAL_copyFlagsFromScopeToEvent(contexts);
    },
  };
  return obj;
});
