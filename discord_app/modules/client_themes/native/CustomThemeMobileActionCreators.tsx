// === Module 13662: CustomThemeMobileActionCreators ===

// Module 13662 (CustomThemeMobileActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/client_themes/native/CustomThemeMobileActionCreators.tsx");

export function updateCustomTheme(customThemeSettings, customThemeBaseTheme) {
  DispatcherDefault.dispatch({ type: "UPDATE_CUSTOM_THEME", customTheme: customThemeSettings, theme: customThemeBaseTheme });
}
export function resetCustomTheme() {
  DispatcherDefault.dispatch({ type: "RESET_CUSTOM_THEME" });
}
export function previewCustomTheme(previewCustomTheme) {
  DispatcherDefault.dispatch({ type: "PREVIEW_CUSTOM_THEME", previewCustomTheme });
}
export function clearPreviewTheme() {
  DispatcherDefault.dispatch({ type: "CLEAR_PREVIEW_CUSTOM_THEME" });
}