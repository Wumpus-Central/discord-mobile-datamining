// === Module 1367: useIsMobileVisualRefreshExperimentEnabled ===

// Module 1367 (useIsMobileVisualRefreshExperimentEnabled)
import getUnitIdDefault from "getUnitId" /* 1368 */;

const tmp2 = getUnitIdDefault({ kind: "user", name: "2026-02-mobile-visual-refresh", defaultConfig: { enabled: false, chatInputFloating: false, chatInputLegacySendButton: false }, variations: { 0: { enabled: false, chatInputFloating: false, chatInputLegacySendButton: false }, 1: { enabled: true, chatInputFloating: false, chatInputLegacySendButton: false }, 2: { enabled: true, chatInputFloating: true, chatInputLegacySendButton: false }, 3: { enabled: true, chatInputFloating: true, chatInputLegacySendButton: false }, 4: { enabled: true, chatInputFloating: true, chatInputLegacySendButton: true } } });
let closure_0 = tmp2;
const result = require("set").fileFinishedImporting("modules/themes/experiments/MobileVisualRefreshExperiment.tsx");

export default function useIsMobileVisualRefreshExperimentEnabled(location) {
  return closure_0.useConfig({ location }).enabled;
};
export const MobileVisualRefreshExperiment = tmp2;
export const useMobileVisualRefreshConfig = function useMobileVisualRefreshConfig(location) {
  return closure_0.useConfig({ location: location.location });
};
export const isMobileVisualRefreshEnabled = function isMobileVisualRefreshEnabled(ClientThemesBackgroundStore) {
  return closure_0.getConfig({ location: ClientThemesBackgroundStore }).enabled;
};
export const resolveRefreshToken = function resolveRefreshToken(CHANNEL_SAFE_AREA_BOTTOM_BACKGROUND, chatInputFloating) {
  return CHANNEL_SAFE_AREA_BOTTOM_BACKGROUND.resolve({ enabledExperiments: chatInputFloating ? ["mobile-visual-refresh"] : [] });
};