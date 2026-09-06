// === Module 12187: MobileVisualRefreshExperiment ===

// Module 12187 (MobileVisualRefreshExperiment)
import apex_ApexExperimentDefault from "apex/ApexExperiment" /* 1434 */;

const tmp2 = apex_ApexExperimentDefault({ kind: "user", name: "2026-02-mobile-visual-refresh", defaultConfig: { enabled: false, chatInputFloating: false, chatInputLegacySendButton: false }, variations: { 0: { enabled: false, chatInputFloating: false, chatInputLegacySendButton: false }, 1: { enabled: true, chatInputFloating: false, chatInputLegacySendButton: false }, 2: { enabled: true, chatInputFloating: true, chatInputLegacySendButton: false }, 3: { enabled: true, chatInputFloating: true, chatInputLegacySendButton: false }, 4: { enabled: true, chatInputFloating: true, chatInputLegacySendButton: true } } });
let closure_0 = tmp2;
const size = fn(2);
const result = size.fileFinishedImporting("modules/themes/experiments/MobileVisualRefreshExperiment.tsx");

export default function useIsMobileVisualRefreshExperimentEnabled(location) {
  return closure_0.useConfig({ location }).enabled;
};
export const MobileVisualRefreshExperiment = tmp2;
export const useMobileVisualRefreshConfig = function useMobileVisualRefreshConfig(location) {
  return closure_0.useConfig({ location: location.location });
};
export const isMobileVisualRefreshEnabled = function isMobileVisualRefreshEnabled(location) {
  return closure_0.getConfig({ location }).enabled;
};
export const resolveRefreshToken = function resolveRefreshToken(MESSAGES_HEADER_PADDING_BOTTOM) {
  return MESSAGES_HEADER_PADDING_BOTTOM.resolve({ enabledExperiments: ["mobile-visual-refresh"] });
};