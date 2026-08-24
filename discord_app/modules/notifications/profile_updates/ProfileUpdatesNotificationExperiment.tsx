// discord_app/modules/notifications/profile_updates/ProfileUpdatesNotificationExperiment.tsx
import set from "../../../../_runtime/00002_set.js";
import ApexExperiment from "../../experiments/apex/index.tsx";

const apexExperiment = ApexExperiment.createApexExperiment({ kind: "user", name: "2026-01-profile-updates-notification", defaultConfig: { showSettingsToggle: false }, variations: { 0: { showSettingsToggle: false }, 1: { showSettingsToggle: true }, 2: { showSettingsToggle: true } } });
const result = set.fileFinishedImporting("modules/notifications/profile_updates/ProfileUpdatesNotificationExperiment.tsx");

export default apexExperiment;
export const useProfileUpdatesNotificationExperiment = function useProfileUpdatesNotificationExperiment(tabsV2Settings) {
  return apexExperiment.useConfig({ location: tabsV2Settings });
};
export const isEligibleForProfileUpdatesNotificationsToggle = function isEligibleForProfileUpdatesNotificationsToggle(location) {
  return apexExperiment.getConfig({ location }).showSettingsToggle;
};