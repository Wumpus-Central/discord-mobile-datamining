// === Module 14452: useIsDeclarativeNotificationSettingsRedesignEnabled ===

// Module 14452 (useIsDeclarativeNotificationSettingsRedesignEnabled)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1433 */;

let closure_0 = ApexExperiment.createApexExperiment({ name: "2026-09-declarative-notification-settings-redesign", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
const result = set.fileFinishedImporting("modules/notifications/DeclarativeNotificationSettingsRedesignExperiment.tsx");

export const useIsDeclarativeNotificationSettingsRedesignEnabled = function useIsDeclarativeNotificationSettingsRedesignEnabled(location) {
  return closure_0.useConfig({ location }).enabled;
};