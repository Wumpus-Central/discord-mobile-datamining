// === Module 11572: CustomThemeMobileActionCreators ===

// Module 11572 (CustomThemeMobileActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/client_themes/native/CustomThemeMobileActionCreators.tsx");

export const updateCustomTheme = function updateCustomTheme(customThemeSettings, first1) {
  DispatcherDefault.dispatch({ type: "UPDATE_CUSTOM_THEME", customTheme: customThemeSettings, theme: first1 });
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