// === Module 1107: statsigIntegration ===

// Module 1107 (statsigIntegration)
import registerSpanErrorInstrumentation from "registerSpanErrorInstrumentation";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const statsigIntegration = registerSpanErrorInstrumentation.defineIntegration((featureFlagClient) => {
  featureFlagClient = featureFlagClient.featureFlagClient;
  return {
    name: "Statsig",
    setup(arg0) {
      featureFlagClient.on("gate_evaluation", (gate) => {
        const result = callback(817)._INTERNAL_insertFlagToScope(gate.gate.name, gate.gate.value);
        const obj = callback(817);
        const result1 = callback(817)._INTERNAL_addFeatureFlagToActiveSpan(gate.gate.name, gate.gate.value);
      });
    },
    processEvent(contexts) {
      return featureFlagClient(table[0])._INTERNAL_copyFlagsFromScopeToEvent(contexts);
    }
  };
});