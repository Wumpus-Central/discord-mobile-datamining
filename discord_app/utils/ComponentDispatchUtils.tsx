// === Module 1228: ComponentDispatcher ===

// Module 1228 (ComponentDispatcher)
import set from "set" /* 2 */;
import timestampDefault from "timestamp" /* 3 */;
import ME from "ME" /* 673 */;
import logFluxActionAll from "logFluxAction" /* 1229 */;
import safeDispatch from "safeDispatch" /* 1230 */;

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