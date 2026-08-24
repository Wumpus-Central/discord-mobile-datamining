// discord_app/modules/safety_flows/SafetyFlowsTaskContext.tsx
import importAllResult from "../../../_runtime/00019_noop.js";

let c0 = importAllResult;
let context = importAllResult.createContext(null);
const result = require("set").fileFinishedImporting("modules/safety_flows/SafetyFlowsTaskContext.tsx");

export const SafetyFlowTaskContext = context;
export const useSafetyFlowTask = function useSafetyFlowTask() {
  context = importAllResult.useContext(context);
  if (null == context) {
    const _Error = Error;
    error = new Error("useSafetyFlowTask must be used within a SafetyFlowTaskContext Provider");
    throw error;
  } else {
    return context;
  }
};