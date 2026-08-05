// discord_app/modules/devtools/DevToolsActionCreators.tsx
import initialize from "initialize";

const result = require("set").fileFinishedImporting("modules/devtools/DevToolsActionCreators.tsx");

export const updateDevToolsSettings = function updateDevToolsSettings(settings) {
  let obj = require("../../Dispatcher.tsx");
  obj = { type: "DEV_TOOLS_SETTINGS_UPDATE", settings };
  obj.dispatch(obj);
};
export const toggleDisplayDevTools = function toggleDisplayDevTools() {
  require("../../Dispatcher.tsx").dispatch({ type: "DEV_TOOLS_SETTINGS_UPDATE", settings: { displayTools: !displayTools.displayTools } });
};
export const openDevTools = function openDevTools(lastOpenTabId, lastOpenSubTabId) {
  require("../../Dispatcher.tsx").dispatch({ type: "DEV_TOOLS_SETTINGS_UPDATE", settings: { displayTools: true, lastOpenTabId, lastOpenSubTabId } });
};
export const clearAnalyticsLog = function clearAnalyticsLog() {
  require("../../Dispatcher.tsx").dispatch({ type: "ANALYTICS_LOG_CLEAR" });
};