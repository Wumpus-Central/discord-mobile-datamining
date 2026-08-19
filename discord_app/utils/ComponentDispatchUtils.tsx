// discord_app/utils/ComponentDispatchUtils.tsx
import obj132 from "../../_runtime/00002_obj132.js";
import timestampDefault from "../modules/debug/Logger.tsx";
import ME from "../Constants.tsx";
import logFluxActionAll from "../../discord_common/js/shared/DevtoolsExtension.tsx";
import safeDispatch from "../../discord_common/js/shared/utils/ComponentDispatchUtils.tsx";

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