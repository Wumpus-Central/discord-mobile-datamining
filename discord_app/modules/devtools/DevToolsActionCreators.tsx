// === Module 17502: DevToolsActionCreators ===

// Module 17502 (DevToolsActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import DevToolsSettingsStore from "DevToolsSettingsStore" /* 7856 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/devtools/DevToolsActionCreators.tsx");

export function updateDevToolsSettings(settings) {
  DispatcherDefault.dispatch({ type: "DEV_TOOLS_SETTINGS_UPDATE", settings });
}
export function toggleDisplayDevTools() {
  DispatcherDefault.dispatch({ type: "DEV_TOOLS_SETTINGS_UPDATE", settings: { displayTools: !DevToolsSettingsStore.displayTools } });
}
export function openDevTools(lastOpenTabId, lastOpenSubTabId) {
  DispatcherDefault.dispatch({ type: "DEV_TOOLS_SETTINGS_UPDATE", settings: { displayTools: true, lastOpenTabId, lastOpenSubTabId } });
}
export function clearAnalyticsLog() {
  DispatcherDefault.dispatch({ type: "ANALYTICS_LOG_CLEAR" });
}