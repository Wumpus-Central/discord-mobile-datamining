// === Module 983: statsigIntegration ===

// Module 983 (statsigIntegration)
import registerSpanErrorInstrumentation from "module_693" /* 693 */;

let featureFlagClient;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const statsigIntegration = registerSpanErrorInstrumentation.defineIntegration((featureFlagClient) => {
  featureFlagClient = featureFlagClient.featureFlagClient;
  let obj = {
    name: "Statsig",
    setup(arg0) {
      featureFlagClient.on("gate_evaluation", (gate) => {
        const obj = featureFlagClient(closure_1_1[0]);
        const result = obj._INTERNAL_insertFlagToScope(gate.gate.name, gate.gate.value);
        const obj2 = featureFlagClient(closure_1_1[0]);
        const result1 = obj2._INTERNAL_addFeatureFlagToActiveSpan(gate.gate.name, gate.gate.value);
      });
    },
    processEvent(contexts, arg1, arg2) {
      const obj = featureFlagClient(dependencyMap[0]);
      return obj._INTERNAL_copyFlagsFromScopeToEvent(contexts);
    }
  };
  return obj;
});