// === Module 11948: CustomThemeMobileActionCreators ===

// Module 11948 (CustomThemeMobileActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/client_themes/native/CustomThemeMobileActionCreators.tsx");

export const updateCustomTheme = function updateCustomTheme(customThemeSettings, customThemeBaseTheme) {
  const obj = { type: "UPDATE_CUSTOM_THEME", customTheme: customThemeSettings, theme: customThemeBaseTheme };
  obj.dispatch(obj);
};
export const resetCustomTheme = function resetCustomTheme() {
  DispatcherDefault.dispatch({ type: "RESET_CUSTOM_THEME" });
};
export const previewCustomTheme = function previewCustomTheme(previewCustomTheme) {
  const obj = { type: "PREVIEW_CUSTOM_THEME", previewCustomTheme };
  obj.dispatch(obj);
};
export const clearPreviewTheme = function clearPreviewTheme() {
  DispatcherDefault.dispatch({ type: "CLEAR_PREVIEW_CUSTOM_THEME" });
};