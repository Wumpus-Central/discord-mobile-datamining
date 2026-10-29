// === Module 16887: ClientThemesBackgroundActionCreators ===

// Module 16887 (ClientThemesBackgroundActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/client_themes/ClientThemesBackgroundActionCreators.tsx");

export function updateBackgroundGradientPreset(id) {
  DispatcherDefault.dispatch({ type: "UPDATE_BACKGROUND_GRADIENT_PRESET", presetId: id });
}
export function updateMobilePendingThemeIndex(mobileThemesIndex) {
  DispatcherDefault.dispatch({ type: "UPDATE_MOBILE_PENDING_THEME_INDEX", mobileThemesIndex });
}
export function resetBackgroundGradientPreset() {
  DispatcherDefault.dispatch({ type: "UPDATE_BACKGROUND_GRADIENT_PRESET", presetId: null });
}
export function resetPreviewClientTheme() {
  DispatcherDefault.dispatch({ type: "RESET_PREVIEW_CLIENT_THEME" });
}