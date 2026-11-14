// discord_app/modules/notifications/custom_status/NotifyFriendsOnCustomStatusUpdateExperiment.tsx
import ApexExperiment from "../../experiments/apex/index.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const apexExperiment = ApexExperiment.createApexExperiment({
  kind: "user",
  name: "2026-11-notify-friends-on-custom-status-update",
  defaultConfig: { enabled: false },
  variations: { 0: { enabled: false }, 1: { enabled: true } },
});
const result = size.fileFinishedImporting(
  "modules/notifications/custom_status/NotifyFriendsOnCustomStatusUpdateExperiment.tsx",
);

export default apexExperiment;
export function useNotifyFriendsOnCustomStatusUpdateExperiment(NotifyFriendsOnCustomStatusUpdateSetting) {
  return apexExperiment.useConfig({ location: NotifyFriendsOnCustomStatusUpdateSetting }).enabled;
}
export function getNotifyFriendsOnCustomStatusUpdateExperiment(location) {
  return apexExperiment.getConfig({ location }).enabled;
}
