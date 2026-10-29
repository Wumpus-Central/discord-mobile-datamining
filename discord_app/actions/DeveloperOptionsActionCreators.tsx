// discord_app/actions/DeveloperOptionsActionCreators.tsx
import DispatcherDefault from "../Dispatcher.tsx";
import size from "../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("actions/DeveloperOptionsActionCreators.tsx");

export function setDeveloperOptionSettings(settings) {
  return DispatcherDefault.dispatch({ type: "DEVELOPER_OPTIONS_UPDATE_SETTINGS", settings });
}
export function setRoutingKeyTags(tags) {
  return DispatcherDefault.dispatch({ type: "DEVELOPER_OPTIONS_SET_ROUTING_KEY", tags });
}
