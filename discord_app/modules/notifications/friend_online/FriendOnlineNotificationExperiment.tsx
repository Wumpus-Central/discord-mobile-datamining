import ApexExperiment from "ApexExperiment";

const obj = { 1: null, 2: { showSettingsToggle: true } };
obj[2] = { showSettingsToggle: true };
const apexExperiment = ApexExperiment.createApexExperiment({ kind: "user", name: "2026-03-friend-is-online-v3", defaultConfig: { showSettingsToggle: false }, variations: obj });
const result = require("set").fileFinishedImporting("modules/notifications/friend_online/FriendOnlineNotificationExperiment.tsx");

export default apexExperiment;
export const useFriendOnlineNotificationExperiment = function useFriendOnlineNotificationExperiment(tabsV2Settings) {
  return apexExperiment.useConfig({ location: tabsV2Settings });
};
export const isEligibleForFriendOnlineNotifications = function isEligibleForFriendOnlineNotifications(location) {
  return apexExperiment.getConfig({ location }).showSettingsToggle;
};