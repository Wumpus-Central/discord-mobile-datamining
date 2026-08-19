// === Module 708: setDeveloperOptionSettings ===

// Module 708 (setDeveloperOptionSettings)
import obj132 from "obj132" /* 2 */;
import dispatcherDefault from "dispatcher" /* 709 */;

const result = obj132.fileFinishedImporting("actions/DeveloperOptionsActionCreators.tsx");

export const setDeveloperOptionSettings = function setDeveloperOptionSettings(settings) {
  const obj = { type: "DEVELOPER_OPTIONS_UPDATE_SETTINGS", settings };
  return obj.dispatch(obj);
};
export const setRoutingKeyTags = function setRoutingKeyTags(tags) {
  const obj = { type: "DEVELOPER_OPTIONS_SET_ROUTING_KEY", tags };
  return obj.dispatch(obj);
};