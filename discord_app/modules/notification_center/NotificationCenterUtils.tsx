// discord_app/modules/notification_center/NotificationCenterUtils.tsx
const result = require("DISCORD_EPOCH").fileFinishedImporting("modules/notification_center/NotificationCenterUtils.tsx");

export const getRelativeTimestamp = function getRelativeTimestamp(extractTimestampResult, flag) {
  if (flag === undefined) {
    flag = true;
  }
  const obj = { since: extractTimestampResult, getFormatter: null };
  const tmp2 = require("getTimestampString.tsx") /* getDurationString */;
  obj[1] = flag ? tmp2.getAbbreviatedFormatter : tmp2.getFullFormatter;
  return require("getTimestampString.tsx")(obj);
};
export const isRemoteAcked = function isRemoteAcked(addResult, closure_1) {
  let acked = addResult.acked;
  if (!acked) {
    let tmp4 = closure_1 !== require("../user_settings/UserSettings.tsx") /* explicitContentFromProto */.NOTIFICATION_CENTER_ACKED_BEFORE_ID_UNSET;
    if (tmp4) {
      tmp4 = require("../../utils/SnowflakeUtils.tsx").compare(closure_1, addResult.id) >= 0;
      const obj = require("../../utils/SnowflakeUtils.tsx");
    }
    acked = tmp4;
  }
  return acked;
};
export const incomingFriendRequestLocalItem = function incomingFriendRequestLocalItem(user, since, origin_application_id) {
  let obj = require("../../utils/SnowflakeUtils.tsx");
  const fromTimestampResult = obj.fromTimestamp(new Date(since).getTime());
  obj = { acked: false, forceUnacked: true, other_user: user, kind: "notification-center-item", local_id: "incoming_friend_requests_" + user.id + "_" + fromTimestampResult, deeplink: "https://discord.com/users/" + user.id, type: require("NotificationCenterItemsTypes.tsx") /* NotificationCenterScenes */.NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS, id: fromTimestampResult, applicationId: origin_application_id };
  return obj;
};
export const incomingGameFriendRequestLocalItem = function incomingGameFriendRequestLocalItem(user, since, applicationId) {
  let obj = require("../../utils/SnowflakeUtils.tsx");
  const fromTimestampResult = obj.fromTimestamp(new Date(since).getTime());
  obj = { acked: false, forceUnacked: true, other_user: user, kind: "notification-center-item", local_id: "incoming_game_friend_requests_" + user.id + "_" + fromTimestampResult, deeplink: "https://discord.com/users/" + user.id, type: require("NotificationCenterItemsTypes.tsx") /* NotificationCenterScenes */.NotificationCenterLocalItems.INCOMING_GAME_FRIEND_REQUESTS, id: fromTimestampResult, applicationId };
  return obj;
};
export const mobileNativeUpdateAvailableLocalItem = function mobileNativeUpdateAvailableLocalItem(newBuild) {
  const obj = { acked: false, enableBadge: true, id: null, kind: "notification-center-item", local_id: null, type: null, deeplink: null };
  const obj2 = require("../../utils/SnowflakeUtils.tsx");
  obj[2] = obj2.fromTimestamp(new Date().getTime());
  obj[4] = "mobile_update_available_" + newBuild.build;
  obj[5] = require("NotificationCenterItemsTypes.tsx") /* NotificationCenterScenes */.NotificationCenterLocalItems.MOBILE_NATIVE_UPDATE_AVAILABLE;
  obj[6] = newBuild.urls.install.toString();
  return obj;
};
export const isMentionItem = function isMentionItem(addResult) {
  let tmp3 = addResult.type === require("NotificationCenterItemsTypes.tsx") /* NotificationCenterScenes */.NotificationCenterItems.RECENT_MENTION;
  if (!tmp3) {
    tmp3 = addResult.type === require("NotificationCenterItemsTypes.tsx") /* NotificationCenterScenes */.NotificationCenterItems.REPLY_MENTION;
  }
  return tmp3;
};