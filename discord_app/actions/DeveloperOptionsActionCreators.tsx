// discord_app/actions/DeveloperOptionsActionCreators.tsx
import DispatcherDefault from "../Dispatcher.tsx";
import size from "../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("actions/DeveloperOptionsActionCreators.tsx");

export const setDeveloperOptionSettings = function setDeveloperOptionSettings(settings) {
  const obj = { type: "DEVELOPER_OPTIONS_UPDATE_SETTINGS", settings };
  return obj.dispatch(obj);
};
export const setRoutingKeyTags = function setRoutingKeyTags(tags) {
  const obj = { type: "DEVELOPER_OPTIONS_SET_ROUTING_KEY", tags };
  return obj.dispatch(obj);
};
