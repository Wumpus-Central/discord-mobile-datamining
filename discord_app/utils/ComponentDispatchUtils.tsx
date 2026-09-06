// === Module 1109: ComponentDispatchUtils ===

// Module 1109 (ComponentDispatchUtils)
import LoggerDefault from "Logger" /* 3 */;
import Constants from "Constants" /* 1074 */;
import DevtoolsExtensionAll from "DevtoolsExtension" /* 1110 */;
import utils_ComponentDispatchUtils from "utils/ComponentDispatchUtils" /* 1111 */;
import size from "module_2" /* 2 */;

const ComponentActionsKeyed = Constants.ComponentActionsKeyed;
const warn = new LoggerDefault("ComponentDispatchUtils");
const componentDispatcher = new utils_ComponentDispatchUtils.ComponentDispatcher({
  maxListeners: 100,
  enableDevtools: false,
  logger: {
    warn(arg0) {
      const items = [arg0, ...HermesBuiltin.copyRestArgs()];
      return warn.warn.apply(items);
    }
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
  }
});
const result = size.fileFinishedImporting("utils/ComponentDispatchUtils.tsx");

export const ComponentDispatcher = utils_ComponentDispatchUtils.ComponentDispatcher;
export const ComponentDispatch = componentDispatcher;