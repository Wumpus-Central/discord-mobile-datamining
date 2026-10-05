// discord_app/modules/client_themes/native/CustomThemeMobileActionCreators.tsx
import DispatcherDefault from "../../../Dispatcher.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/client_themes/native/CustomThemeMobileActionCreators.tsx");

export const updateCustomTheme = function updateCustomTheme(customThemeSettings, first1) {
  const obj = DispatcherDefault;
  const obj2 = { type: "UPDATE_CUSTOM_THEME", customTheme: customThemeSettings, theme: first1 };
  obj.dispatch(obj2);
};
export const resetCustomTheme = function resetCustomTheme() {
  const obj = DispatcherDefault;
  obj.dispatch({ type: "RESET_CUSTOM_THEME" });
};
export const previewCustomTheme = function previewCustomTheme(previewCustomTheme) {
  const obj = DispatcherDefault;
  const obj2 = { type: "PREVIEW_CUSTOM_THEME", previewCustomTheme };
  obj.dispatch(obj2);
};
export const clearPreviewTheme = function clearPreviewTheme() {
  const obj = DispatcherDefault;
  obj.dispatch({ type: "CLEAR_PREVIEW_CUSTOM_THEME" });
};
