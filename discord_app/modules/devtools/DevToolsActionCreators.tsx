// === Module 15574: DevToolsActionCreators ===

// Module 15574 (DevToolsActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import DevToolsSettingsStore from "DevToolsSettingsStore" /* 7719 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/devtools/DevToolsActionCreators.tsx");

export const updateDevToolsSettings = function updateDevToolsSettings(settings) {
  const obj = { type: "DEV_TOOLS_SETTINGS_UPDATE", settings };
  obj.dispatch(obj);
};
export const toggleDisplayDevTools = function toggleDisplayDevTools() {
  DispatcherDefault.dispatch({ type: "DEV_TOOLS_SETTINGS_UPDATE", settings: { displayTools: !DevToolsSettingsStore.displayTools } });
};
export const openDevTools = function openDevTools(lastOpenTabId, lastOpenSubTabId) {
  DispatcherDefault.dispatch({ type: "DEV_TOOLS_SETTINGS_UPDATE", settings: { displayTools: true, lastOpenTabId, lastOpenSubTabId } });
};
export const clearAnalyticsLog = function clearAnalyticsLog() {
  DispatcherDefault.dispatch({ type: "ANALYTICS_LOG_CLEAR" });
};