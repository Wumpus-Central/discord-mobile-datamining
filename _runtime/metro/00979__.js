// _runtime/metro/00979__.js
import registerSpanErrorInstrumentation from "00693__.js";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export function buildLaunchDarklyFlagUsedHandler() {
  let obj = {
    name: "sentry-flag-auditor",
    type: "flag-used",
    synchronous: true,
    method(c2, arg1, arg2) {
      const obj = registerSpanErrorInstrumentation;
      const result = obj._INTERNAL_insertFlagToScope(c2, arg1.value);
      const obj2 = registerSpanErrorInstrumentation;
      const result1 = obj2._INTERNAL_addFeatureFlagToActiveSpan(c2, arg1.value);
    },
  };
  return obj;
}
export const launchDarklyIntegration = registerSpanErrorInstrumentation.defineIntegration(() => {
  let obj = {
    name: "LaunchDarkly",
    processEvent(contexts, arg1, arg2) {
      const obj = registerSpanErrorInstrumentation;
      return obj._INTERNAL_copyFlagsFromScopeToEvent(contexts);
    },
  };
  return obj;
});
