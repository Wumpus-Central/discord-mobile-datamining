// === Module 15874: DeclarativeNotificationSettingsRedesignExperiment ===

// Module 15874 (DeclarativeNotificationSettingsRedesignExperiment)
import ApexExperiment from "ApexExperiment" /* 1449 */;
import size from "module_2" /* 2 */;

let closure_0 = ApexExperiment.createApexExperiment({ name: "2026-09-declarative-notification-settings-redesign", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
const result = size.fileFinishedImporting("modules/notifications/DeclarativeNotificationSettingsRedesignExperiment.tsx");

export function isDeclarativeNotificationSettingsRedesignEnabled(refreshEffectiveNotifSettings) {
  return closure_0.getConfig({ location: refreshEffectiveNotifSettings }).enabled;
}
export function useIsDeclarativeNotificationSettingsRedesignEnabled(EffectiveNotifSettingsLayout) {
  return closure_0.useConfig({ location: EffectiveNotifSettingsLayout }).enabled;
}