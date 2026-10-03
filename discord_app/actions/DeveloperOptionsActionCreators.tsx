// === Module 1358: DeveloperOptionsActionCreators ===

// Module 1358 (DeveloperOptionsActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("actions/DeveloperOptionsActionCreators.tsx");

export const setDeveloperOptionSettings = function setDeveloperOptionSettings(settings) {
  return DispatcherDefault.dispatch({ type: "DEVELOPER_OPTIONS_UPDATE_SETTINGS", settings });
};
export const setRoutingKeyTags = function setRoutingKeyTags(tags) {
  return DispatcherDefault.dispatch({ type: "DEVELOPER_OPTIONS_SET_ROUTING_KEY", tags });
};