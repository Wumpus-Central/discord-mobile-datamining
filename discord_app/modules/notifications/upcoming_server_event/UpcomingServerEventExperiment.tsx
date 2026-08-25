// === Module 14914: apexExperiment ===

// Module 14914 (apexExperiment)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1472 */;

const obj = { 1: null, 2: { showSettingsToggle: true }, 3: { showSettingsToggle: true } };
obj[3] = { showSettingsToggle: true };
const apexExperiment = ApexExperiment.createApexExperiment({ kind: "user", name: "2026-04-upcoming-server-event", defaultConfig: { showSettingsToggle: false }, variations: obj });
const result = set.fileFinishedImporting("modules/notifications/upcoming_server_event/UpcomingServerEventExperiment.tsx");

export default apexExperiment;
export const useUpcomingServerEventExperiment = function useUpcomingServerEventExperiment(tabsV2Settings) {
  return apexExperiment.useConfig({ location: tabsV2Settings });
};
export const isEligibleForUpcomingServerEventNotifications = function isEligibleForUpcomingServerEventNotifications(location) {
  return apexExperiment.getConfig({ location }).showSettingsToggle;
};