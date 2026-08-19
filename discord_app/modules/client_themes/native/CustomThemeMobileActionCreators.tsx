// discord_app/modules/client_themes/native/CustomThemeMobileActionCreators.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import dispatcherDefault from "../../../Dispatcher.tsx";

const result = obj132.fileFinishedImporting("modules/client_themes/native/CustomThemeMobileActionCreators.tsx");

export const updateCustomTheme = function updateCustomTheme(customThemeSettings, customThemeBaseTheme) {
  const obj = { type: "UPDATE_CUSTOM_THEME", customTheme: customThemeSettings, theme: customThemeBaseTheme };
  obj.dispatch(obj);
};
export const resetCustomTheme = function resetCustomTheme() {
  dispatcherDefault.dispatch({ type: "RESET_CUSTOM_THEME" });
};
export const previewCustomTheme = function previewCustomTheme(previewCustomTheme) {
  const obj = { type: "PREVIEW_CUSTOM_THEME", previewCustomTheme };
  obj.dispatch(obj);
};
export const clearPreviewTheme = function clearPreviewTheme() {
  dispatcherDefault.dispatch({ type: "CLEAR_PREVIEW_CUSTOM_THEME" });
};