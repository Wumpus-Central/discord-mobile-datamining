// discord_app/actions/DeveloperOptionsActionCreators.tsx
import set from "../../_runtime/00002_set.js";
import dispatcherDefault from "../Dispatcher.tsx";

const result = set.fileFinishedImporting("actions/DeveloperOptionsActionCreators.tsx");

export const setDeveloperOptionSettings = function setDeveloperOptionSettings(settings) {
  let obj = dispatcherDefault;
  obj = { type: "DEVELOPER_OPTIONS_UPDATE_SETTINGS", settings };
  return obj.dispatch(obj);
};
export const setRoutingKeyTags = function setRoutingKeyTags(tags) {
  let obj = dispatcherDefault;
  obj = { type: "DEVELOPER_OPTIONS_SET_ROUTING_KEY", tags };
  return obj.dispatch(obj);
};
