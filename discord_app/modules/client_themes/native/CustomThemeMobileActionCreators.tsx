// discord_app/modules/client_themes/native/CustomThemeMobileActionCreators.tsx
import { dispatcher } from "../../../Dispatcher.tsx";
const result = require("set").fileFinishedImporting("modules/client_themes/native/CustomThemeMobileActionCreators.tsx");

export const updateCustomTheme = function updateCustomTheme(customThemeSettings, first1) {
  let obj = dispatcher;
  obj = { type: "UPDATE_CUSTOM_THEME", customTheme: customThemeSettings, theme: first1 };
  obj.dispatch(obj);
};
export const resetCustomTheme = function resetCustomTheme() {
  dispatcher.dispatch({ type: "RESET_CUSTOM_THEME" });
};
export const previewCustomTheme = function previewCustomTheme(previewCustomTheme) {
  let obj = dispatcher;
  obj = { type: "PREVIEW_CUSTOM_THEME", previewCustomTheme };
  obj.dispatch(obj);
};
export const clearPreviewTheme = function clearPreviewTheme() {
  dispatcher.dispatch({ type: "CLEAR_PREVIEW_CUSTOM_THEME" });
};