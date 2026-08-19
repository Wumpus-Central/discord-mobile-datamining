// === Module 1231: ComponentDispatcher ===

// Module 1231 (ComponentDispatcher)
import obj132 from "obj132" /* 2 */;
import timestampDefault from "timestamp" /* 3 */;
import ME from "ME" /* 676 */;
import logFluxActionAll from "logFluxAction" /* 1232 */;
import safeDispatch from "safeDispatch" /* 1233 */;

const ComponentActionsKeyed = ME.ComponentActionsKeyed;
let closure_3 = new timestampDefault("ComponentDispatchUtils");
let obj = {
  warn(arg0) {
    const items = [arg0, ...HermesBuiltin.copyRestArgs()];
    return warn.warn.apply(items);
  }
};
const componentDispatcher = new safeDispatch.ComponentDispatcher(obj);
const tmp2 = new timestampDefault("ComponentDispatchUtils");
const result = obj132.fileFinishedImporting("utils/ComponentDispatchUtils.tsx");

export const ComponentDispatcher = safeDispatch.ComponentDispatcher;
export const ComponentDispatch = componentDispatcher;