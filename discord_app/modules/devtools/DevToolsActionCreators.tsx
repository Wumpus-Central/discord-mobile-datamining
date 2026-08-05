// discord_app/modules/devtools/DevToolsActionCreators.tsx
import initialize from "initialize";
import { dispatcher } from "../../Dispatcher.tsx";

const result = require("set").fileFinishedImporting("modules/devtools/DevToolsActionCreators.tsx");

export const updateDevToolsSettings = function updateDevToolsSettings(settings) {
  let obj = dispatcher;
  obj = { type: "DEV_TOOLS_SETTINGS_UPDATE", settings };
  obj.dispatch(obj);
};
export const toggleDisplayDevTools = function toggleDisplayDevTools() {
  dispatcher.dispatch({ type: "DEV_TOOLS_SETTINGS_UPDATE", settings: { displayTools: !displayTools.displayTools } });
};
export const openDevTools = function openDevTools(lastOpenTabId, lastOpenSubTabId) {
  dispatcher.dispatch({ type: "DEV_TOOLS_SETTINGS_UPDATE", settings: { displayTools: true, lastOpenTabId, lastOpenSubTabId } });
};
export const clearAnalyticsLog = function clearAnalyticsLog() {
  dispatcher.dispatch({ type: "ANALYTICS_LOG_CLEAR" });
};