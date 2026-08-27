// === Module 14727: updateBackgroundGradientPreset ===

// Module 14727 (updateBackgroundGradientPreset)
import set from "set" /* 2 */;
import dispatcherDefault from "dispatcher" /* 709 */;

const result = set.fileFinishedImporting("modules/client_themes/ClientThemesBackgroundActionCreators.tsx");

export const updateBackgroundGradientPreset = function updateBackgroundGradientPreset(id) {
  let obj = dispatcherDefault;
  obj = { type: "UPDATE_BACKGROUND_GRADIENT_PRESET", presetId: id };
  obj.dispatch(obj);
};
export const updateMobilePendingThemeIndex = function updateMobilePendingThemeIndex(mobileThemesIndex) {
  let obj = dispatcherDefault;
  obj = { type: "UPDATE_MOBILE_PENDING_THEME_INDEX", mobileThemesIndex };
  obj.dispatch(obj);
};
export const resetBackgroundGradientPreset = function resetBackgroundGradientPreset() {
  dispatcherDefault.dispatch({ type: "UPDATE_BACKGROUND_GRADIENT_PRESET", presetId: null });
};
export const resetPreviewClientTheme = function resetPreviewClientTheme() {
  dispatcherDefault.dispatch({ type: "RESET_PREVIEW_CLIENT_THEME" });
};