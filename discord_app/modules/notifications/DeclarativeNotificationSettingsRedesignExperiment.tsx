// discord_app/modules/notifications/DeclarativeNotificationSettingsRedesignExperiment.tsx
import ApexExperiment from "../experiments/apex/index.tsx";
import size from "../../../_runtime/metro/00002__.js";

let closure_0 = ApexExperiment.createApexExperiment({
  name: "2026-09-declarative-notification-settings-redesign",
  kind: "user",
  defaultConfig: { enabled: false },
  variations: { 0: { enabled: false }, 1: { enabled: true } },
});
const result = size.fileFinishedImporting(
  "modules/notifications/DeclarativeNotificationSettingsRedesignExperiment.tsx",
);

export function isDeclarativeNotificationSettingsRedesignEnabled(getAssignedNotifSettingsAndMappings) {
  return closure_0.getConfig({ location: getAssignedNotifSettingsAndMappings }).enabled;
}
export function useIsDeclarativeNotificationSettingsRedesignEnabled(location) {
  return closure_0.useConfig({ location }).enabled;
}
