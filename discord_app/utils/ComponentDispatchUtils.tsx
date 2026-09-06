// === Module 1109: ComponentDispatcher ===

// Module 1109 (ComponentDispatcher)
import set from "set" /* 2 */;
import timestampDefault from "timestamp" /* 3 */;
import ME from "ME" /* 1074 */;
import logFluxActionAll from "logFluxAction" /* 1110 */;
import safeDispatch from "safeDispatch" /* 1111 */;

const ComponentActionsKeyed = ME.ComponentActionsKeyed;
let closure_3 = new timestampDefault("ComponentDispatchUtils");
obj = {
  maxListeners: 100,
  enableDevtools: false,
  logger: obj,
  devtoolsReporter: function reportDevtoolsEvent(fullActionName, actionData, durationMs) {
    importAll = fullActionName;
    const values = Object.values(ComponentActionsKeyed);
    let found = values.find((arg0) => closure_0.startsWith(arg0));
    if (found == null) {
      found = fullActionName;
    }
    let obj = logFluxActionAll;
    obj = { type: "ComponentDispatch", description: found, data: obj, durationMs };
    obj = { actionData, fullActionName };
    obj.reportEvent(obj);
  }
};
obj = {
  warn(arg0) {
    const items = [arg0, ...HermesBuiltin.copyRestArgs()];
    return warn.warn.apply(items);
  }
};
const componentDispatcher = new safeDispatch.ComponentDispatcher(obj);
const tmp2 = new timestampDefault("ComponentDispatchUtils");
const result = set.fileFinishedImporting("utils/ComponentDispatchUtils.tsx");

export const ComponentDispatcher = safeDispatch.ComponentDispatcher;
export const ComponentDispatch = componentDispatcher;