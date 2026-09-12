// === Module 14540: DeclarativeNotificationSettingsRedesignExperiment ===

// Module 14540 (DeclarativeNotificationSettingsRedesignExperiment)
import ApexExperiment from "ApexExperiment" /* 1433 */;
import size from "module_2" /* 2 */;

let closure_0 = ApexExperiment.createApexExperiment({ name: "2026-09-declarative-notification-settings-redesign", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
const result = size.fileFinishedImporting("modules/notifications/DeclarativeNotificationSettingsRedesignExperiment.tsx");

export const isDeclarativeNotificationSettingsRedesignEnabled = function isDeclarativeNotificationSettingsRedesignEnabled(getAssignedNotifSettingsAndMappings) {
  return closure_0.getConfig({ location: getAssignedNotifSettingsAndMappings }).enabled;
};
export const useIsDeclarativeNotificationSettingsRedesignEnabled = function useIsDeclarativeNotificationSettingsRedesignEnabled(location) {
  return closure_0.useConfig({ location }).enabled;
};