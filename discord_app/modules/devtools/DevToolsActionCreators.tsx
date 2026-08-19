// === Module 13951: updateDevToolsSettings ===

// Module 13951 (updateDevToolsSettings)
import dispatcherDefault from "dispatcher" /* 709 */;
import initialize from "initialize" /* 7471 */;

const result = require("obj132").fileFinishedImporting("modules/devtools/DevToolsActionCreators.tsx");

export const updateDevToolsSettings = function updateDevToolsSettings(settings) {
  const obj = { type: "DEV_TOOLS_SETTINGS_UPDATE", settings };
  obj.dispatch(obj);
};
export const toggleDisplayDevTools = function toggleDisplayDevTools() {
  dispatcherDefault.dispatch({ type: "DEV_TOOLS_SETTINGS_UPDATE", settings: { displayTools: !displayTools.displayTools } });
};
export const openDevTools = function openDevTools(lastOpenTabId, lastOpenSubTabId) {
  dispatcherDefault.dispatch({ type: "DEV_TOOLS_SETTINGS_UPDATE", settings: { displayTools: true, lastOpenTabId, lastOpenSubTabId } });
};
export const clearAnalyticsLog = function clearAnalyticsLog() {
  dispatcherDefault.dispatch({ type: "ANALYTICS_LOG_CLEAR" });
};