// === Module 16792: MobileReferralSubscriberProfileEntrypointButtonExperiment ===

// Module 16792 (MobileReferralSubscriberProfileEntrypointButtonExperiment)
import DurationsDefault from "Durations" /* 1090 */;

const result = 3 * DurationsDefault.Millis.DAYS_30;
fn(1433);
const ApexExperiment = { name: "2026-05-mobile-referral-subscriber-profile-entrypoint-button", kind: "user", defaultConfig: { enabled: false, showReferralNotificationDot: false }, variations: { 0: { enabled: false, showReferralNotificationDot: false }, 1: { enabled: true, showReferralNotificationDot: false }, 2: { enabled: true, showReferralNotificationDot: true } } };
let closure_0 = ApexExperiment.createApexExperiment(ApexExperiment);
const size = fn(2);
const result1 = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/MobileReferralSubscriberProfileEntrypointButtonExperiment.tsx");

export const REFERRAL_NITRO_BUTTON_RED_DOT_COOLDOWN_MS = result;
export const useMobileReferralSubscriberProfileEntrypointButtonConfig = function useMobileReferralSubscriberProfileEntrypointButtonConfig(YouBannerDecorations) {
  return closure_0.useConfig({ location: YouBannerDecorations });
};