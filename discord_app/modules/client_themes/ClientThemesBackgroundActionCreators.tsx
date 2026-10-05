// === Module 14980: ClientThemesBackgroundActionCreators ===

// Module 14980 (ClientThemesBackgroundActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/client_themes/ClientThemesBackgroundActionCreators.tsx");

export const updateBackgroundGradientPreset = function updateBackgroundGradientPreset(id) {
  const obj = DispatcherDefault;
  const obj2 = { type: "UPDATE_BACKGROUND_GRADIENT_PRESET", presetId: id };
  obj.dispatch(obj2);
};
export const updateMobilePendingThemeIndex = function updateMobilePendingThemeIndex(mobileThemesIndex) {
  const obj = DispatcherDefault;
  const obj2 = { type: "UPDATE_MOBILE_PENDING_THEME_INDEX", mobileThemesIndex };
  obj.dispatch(obj2);
};
export const resetBackgroundGradientPreset = function resetBackgroundGradientPreset() {
  const obj = DispatcherDefault;
  obj.dispatch({ type: "UPDATE_BACKGROUND_GRADIENT_PRESET", presetId: null });
};
export const resetPreviewClientTheme = function resetPreviewClientTheme() {
  const obj = DispatcherDefault;
  obj.dispatch({ type: "RESET_PREVIEW_CLIENT_THEME" });
};