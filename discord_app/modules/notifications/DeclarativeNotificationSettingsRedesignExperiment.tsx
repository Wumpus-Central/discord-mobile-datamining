// discord_app/modules/notifications/DeclarativeNotificationSettingsRedesignExperiment.tsx
import set from "../../../_runtime/00002_set.js";
import ApexExperiment from "../experiments/apex/index.tsx";

let closure_0 = ApexExperiment.createApexExperiment({
  name: "2026-09-declarative-notification-settings-redesign",
  kind: "user",
  defaultConfig: { enabled: false },
  variations: { 0: { enabled: false }, 1: { enabled: true } },
});
const result = set.fileFinishedImporting("modules/notifications/DeclarativeNotificationSettingsRedesignExperiment.tsx");

export const useIsDeclarativeNotificationSettingsRedesignEnabled =
  function useIsDeclarativeNotificationSettingsRedesignEnabled(location) {
    return closure_0.useConfig({ location }).enabled;
  };
