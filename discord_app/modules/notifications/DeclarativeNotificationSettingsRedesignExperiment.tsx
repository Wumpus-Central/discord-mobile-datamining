// === Module 16238: DeclarativeNotificationSettingsRedesignExperiment ===

// Module 16238 (DeclarativeNotificationSettingsRedesignExperiment)
import ApexExperiment from "ApexExperiment" /* 1448 */;
import size from "module_2" /* 2 */;

let closure_0 = ApexExperiment.createApexExperiment({ name: "2026-09-declarative-notification-settings-redesign", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
const result = size.fileFinishedImporting("modules/notifications/DeclarativeNotificationSettingsRedesignExperiment.tsx");

export function isDeclarativeNotificationSettingsRedesignEnabled(getAssignedNotifSettingsAndMappings) {
  return closure_0.getConfig({ location: getAssignedNotifSettingsAndMappings }).enabled;
}
export function useIsDeclarativeNotificationSettingsRedesignEnabled(location) {
  return closure_0.useConfig({ location }).enabled;
}