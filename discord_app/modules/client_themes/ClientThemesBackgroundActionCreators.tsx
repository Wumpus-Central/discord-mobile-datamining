// discord_app/modules/client_themes/ClientThemesBackgroundActionCreators.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import size from "../../../_runtime/metro/00002__.js";

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
