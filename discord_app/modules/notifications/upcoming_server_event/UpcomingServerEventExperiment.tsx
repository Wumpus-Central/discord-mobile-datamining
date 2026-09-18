// === Module 15726: UpcomingServerEventExperiment ===

// Module 15726 (UpcomingServerEventExperiment)
import ApexExperiment from "ApexExperiment" /* 1434 */;
import size from "module_2" /* 2 */;

const obj = { kind: "user", name: "2026-04-upcoming-server-event", defaultConfig: { showSettingsToggle: false }, variations: null };
const obj2 = { 1: null, 2: { showSettingsToggle: true }, 3: { showSettingsToggle: true } };
obj2[3] = { showSettingsToggle: true };
obj.variations = obj2;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/notifications/upcoming_server_event/UpcomingServerEventExperiment.tsx");

export default apexExperiment;
export const useUpcomingServerEventExperiment = function useUpcomingServerEventExperiment(tabsV2Settings) {
  return apexExperiment.useConfig({ location: tabsV2Settings });
};
export const isEligibleForUpcomingServerEventNotifications = function isEligibleForUpcomingServerEventNotifications(location) {
  return apexExperiment.getConfig({ location }).showSettingsToggle;
};