// discord_app/utils/ComponentDispatchUtils.tsx
import LoggerDefault from "../modules/debug/Logger.tsx";
import Constants from "../Constants.tsx";
import DevtoolsExtensionAll from "../../discord_common/js/shared/DevtoolsExtension.tsx";
import utils_ComponentDispatchUtils from "../../discord_common/js/shared/utils/ComponentDispatchUtils.tsx";
import size from "../../_runtime/metro/00002__.js";

const ComponentActionsKeyed = Constants.ComponentActionsKeyed;
const warn = new LoggerDefault("ComponentDispatchUtils");
const componentDispatcher = new utils_ComponentDispatchUtils.ComponentDispatcher({
  maxListeners: 100,
  enableDevtools: false,
  logger: {
    warn(arg0) {
      const items = [arg0, ...HermesBuiltin.copyRestArgs()];
      return warn.warn.apply(items);
    },
  },
  devtoolsReporter: function reportDevtoolsEvent(fullActionName, actionData, durationMs) {
    closure_0 = fullActionName;
    const values = Object.values(ComponentActionsKeyed);
    let found = values.find((item) => closure_0.startsWith(item));
    if (found == null) {
      found = fullActionName;
    }
    const obj = { type: "ComponentDispatch", description: found, data: { actionData, fullActionName }, durationMs };
    obj.reportEvent(obj);
  },
});
const result = size.fileFinishedImporting("utils/ComponentDispatchUtils.tsx");

export const ComponentDispatcher = utils_ComponentDispatchUtils.ComponentDispatcher;
export const ComponentDispatch = componentDispatcher;
