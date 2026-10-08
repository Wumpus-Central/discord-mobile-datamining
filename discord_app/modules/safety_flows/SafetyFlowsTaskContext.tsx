// === Module 18396: SafetyFlowsTaskContext ===

// Module 18396 (SafetyFlowsTaskContext)
import noop from "module_19" /* 19 */;

let context = noop.createContext(null);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/safety_flows/SafetyFlowsTaskContext.tsx");

export const SafetyFlowTaskContext = context;
export const useSafetyFlowTask = ReactCompilerGating.isReactCompilerEnabled() ? (function useSafetyFlowTask() {
  context = noop.useContext(context);
  if (null == context) {
    const _Error = Error;
    const error = new Error("useSafetyFlowTask must be used within a SafetyFlowTaskContext Provider");
    throw error;
  } else {
    return context;
  }
}) : (function useSafetyFlowTask() {
  context = noop.useContext(context);
  if (null == context) {
    const _Error = Error;
    const error = new Error("useSafetyFlowTask must be used within a SafetyFlowTaskContext Provider");
    throw error;
  } else {
    return context;
  }
});