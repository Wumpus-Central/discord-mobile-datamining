// discord_app/modules/client_themes/ClientThemesBackgroundActionCreators.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/client_themes/ClientThemesBackgroundActionCreators.tsx");

export const updateBackgroundGradientPreset = function updateBackgroundGradientPreset(id) {
  const obj = { type: "UPDATE_BACKGROUND_GRADIENT_PRESET", presetId: id };
  obj.dispatch(obj);
};
export const updateMobilePendingThemeIndex = function updateMobilePendingThemeIndex(mobileThemesIndex) {
  const obj = { type: "UPDATE_MOBILE_PENDING_THEME_INDEX", mobileThemesIndex };
  obj.dispatch(obj);
};
export const resetBackgroundGradientPreset = function resetBackgroundGradientPreset() {
  DispatcherDefault.dispatch({ type: "UPDATE_BACKGROUND_GRADIENT_PRESET", presetId: null });
};
export const resetPreviewClientTheme = function resetPreviewClientTheme() {
  DispatcherDefault.dispatch({ type: "RESET_PREVIEW_CLIENT_THEME" });
};
