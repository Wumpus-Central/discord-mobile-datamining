// === Module 12205: CustomThemeMobileActionCreators ===

// Module 12205 (CustomThemeMobileActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/client_themes/native/CustomThemeMobileActionCreators.tsx");

export const updateCustomTheme = function updateCustomTheme(customThemeSettings, customThemeBaseTheme) {
  DispatcherDefault.dispatch({ type: "UPDATE_CUSTOM_THEME", customTheme: customThemeSettings, theme: customThemeBaseTheme });
};
export const resetCustomTheme = function resetCustomTheme() {
  DispatcherDefault.dispatch({ type: "RESET_CUSTOM_THEME" });
};
export const previewCustomTheme = function previewCustomTheme(previewCustomTheme) {
  DispatcherDefault.dispatch({ type: "PREVIEW_CUSTOM_THEME", previewCustomTheme });
};
export const clearPreviewTheme = function clearPreviewTheme() {
  DispatcherDefault.dispatch({ type: "CLEAR_PREVIEW_CUSTOM_THEME" });
};