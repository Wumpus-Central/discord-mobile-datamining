// === Module 16011: result ===

// Module 16011 (result)
import obj132Default from "obj132" /* 687 */;
import ApexExperiment from "ApexExperiment" /* 1472 */;

const result = 3 * obj132Default.Millis.DAYS_30;
let closure_0 = ApexExperiment.createApexExperiment({ name: "2026-05-mobile-referral-subscriber-profile-entrypoint-button", kind: "user", defaultConfig: { enabled: false, showReferralNotificationDot: false }, variations: { 0: { enabled: false, showReferralNotificationDot: false }, 1: { enabled: true, showReferralNotificationDot: false }, 2: { enabled: true, showReferralNotificationDot: true } } });
const result1 = require("obj132").fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/MobileReferralSubscriberProfileEntrypointButtonExperiment.tsx");

export const REFERRAL_NITRO_BUTTON_RED_DOT_COOLDOWN_MS = result;
export const useMobileReferralSubscriberProfileEntrypointButtonConfig = function useMobileReferralSubscriberProfileEntrypointButtonConfig(YouBannerDecorations) {
  return closure_0.useConfig({ location: YouBannerDecorations });
};