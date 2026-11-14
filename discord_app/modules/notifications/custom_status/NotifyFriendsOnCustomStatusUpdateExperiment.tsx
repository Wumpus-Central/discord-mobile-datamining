// === Module 18608: NotifyFriendsOnCustomStatusUpdateExperiment ===

// Module 18608 (NotifyFriendsOnCustomStatusUpdateExperiment)
import ApexExperiment from "ApexExperiment" /* 1452 */;
import size from "module_2" /* 2 */;

const apexExperiment = ApexExperiment.createApexExperiment({ kind: "user", name: "2026-11-notify-friends-on-custom-status-update", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
const result = size.fileFinishedImporting("modules/notifications/custom_status/NotifyFriendsOnCustomStatusUpdateExperiment.tsx");

export default apexExperiment;
export function useNotifyFriendsOnCustomStatusUpdateExperiment(NotifyFriendsOnCustomStatusUpdateSetting) {
  return apexExperiment.useConfig({ location: NotifyFriendsOnCustomStatusUpdateSetting }).enabled;
}
export function getNotifyFriendsOnCustomStatusUpdateExperiment(location) {
  return apexExperiment.getConfig({ location }).enabled;
}