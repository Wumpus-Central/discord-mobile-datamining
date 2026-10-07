// discord_app/modules/devtools/DevToolsActionCreators.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import DevToolsSettingsStore from "DevToolsSettingsStore.tsx";

const size = fn(2);
const result = size.fileFinishedImporting("modules/devtools/DevToolsActionCreators.tsx");

export const updateDevToolsSettings = function updateDevToolsSettings(settings) {
  DispatcherDefault.dispatch({ type: "DEV_TOOLS_SETTINGS_UPDATE", settings });
};
export const toggleDisplayDevTools = function toggleDisplayDevTools() {
  DispatcherDefault.dispatch({
    type: "DEV_TOOLS_SETTINGS_UPDATE",
    settings: { displayTools: !DevToolsSettingsStore.displayTools },
  });
};
export const openDevTools = function openDevTools(lastOpenTabId, lastOpenSubTabId) {
  DispatcherDefault.dispatch({
    type: "DEV_TOOLS_SETTINGS_UPDATE",
    settings: { displayTools: true, lastOpenTabId, lastOpenSubTabId },
  });
};
export const clearAnalyticsLog = function clearAnalyticsLog() {
  DispatcherDefault.dispatch({ type: "ANALYTICS_LOG_CLEAR" });
};
