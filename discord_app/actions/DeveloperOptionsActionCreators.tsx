// discord_app/actions/DeveloperOptionsActionCreators.tsx
import { dispatcher } from "../Dispatcher.tsx";
const result = require("set").fileFinishedImporting("actions/DeveloperOptionsActionCreators.tsx");

export const setDeveloperOptionSettings = function setDeveloperOptionSettings(settings) {
  let obj = dispatcher;
  obj = { type: "DEVELOPER_OPTIONS_UPDATE_SETTINGS", settings };
  return obj.dispatch(obj);
};
export const setRoutingKeyTags = function setRoutingKeyTags(tags) {
  let obj = dispatcher;
  obj = { type: "DEVELOPER_OPTIONS_SET_ROUTING_KEY", tags };
  return obj.dispatch(obj);
};