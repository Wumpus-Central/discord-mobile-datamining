import { ComponentActionsKeyed } from "ME";

let c3 = new require("safeDispatch")("ComponentDispatchUtils");
obj = {
  maxListeners: 100,
  enableDevtools: false,
  logger: obj,
  devtoolsReporter: function reportDevtoolsEvent(fullActionName, actionData, durationMs) {
    const importAll = fullActionName;
    const values = Object.values(ComponentActionsKeyed);
    let found = values.find((arg0) => closure_0.startsWith(arg0));
    if (found == null) {
      found = fullActionName;
    }
    let obj = importAll(1232);
    obj = { type: "ComponentDispatch", description: found, data: obj, durationMs };
    obj = { actionData, fullActionName };
    obj.reportEvent(obj);
  }
};
obj = {
  warn(arg0) {
    const items = [arg0, ...HermesBuiltin.copyRestArgs()];
    return tmp2.warn.apply(items);
  }
};
const componentDispatcher = new require("safeDispatch").ComponentDispatcher(obj);
const tmp2 = new require("safeDispatch")("ComponentDispatchUtils");
const result = require("timestamp").fileFinishedImporting("utils/ComponentDispatchUtils.tsx");

export const ComponentDispatcher = require("safeDispatch").ComponentDispatcher;
export const ComponentDispatch = componentDispatcher;