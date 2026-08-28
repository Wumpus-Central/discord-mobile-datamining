// === Module 11458: updateCustomTheme ===

// Module 11458 (updateCustomTheme)
import set from "set" /* 2 */;
import dispatcherDefault from "dispatcher" /* 709 */;

const result = set.fileFinishedImporting("modules/client_themes/native/CustomThemeMobileActionCreators.tsx");

export const updateCustomTheme = function updateCustomTheme(customThemeSettings, customThemeBaseTheme) {
  let obj = dispatcherDefault;
  obj = { type: "UPDATE_CUSTOM_THEME", customTheme: customThemeSettings, theme: customThemeBaseTheme };
  obj.dispatch(obj);
};
export const resetCustomTheme = function resetCustomTheme() {
  dispatcherDefault.dispatch({ type: "RESET_CUSTOM_THEME" });
};
export const previewCustomTheme = function previewCustomTheme(previewCustomTheme) {
  let obj = dispatcherDefault;
  obj = { type: "PREVIEW_CUSTOM_THEME", previewCustomTheme };
  obj.dispatch(obj);
};
export const clearPreviewTheme = function clearPreviewTheme() {
  dispatcherDefault.dispatch({ type: "CLEAR_PREVIEW_CUSTOM_THEME" });
};