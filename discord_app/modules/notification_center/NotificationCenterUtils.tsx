// === Module 7010: getRelativeTimestamp ===

// Module 7010 (getRelativeTimestamp)
const result = require("DISCORD_EPOCH").fileFinishedImporting("modules/notification_center/NotificationCenterUtils.tsx");

export const getRelativeTimestamp = function getRelativeTimestamp(extractTimestampResult, flag) {
  if (flag === undefined) {
    flag = true;
  }
  const obj = { since: extractTimestampResult, getFormatter: null };
  const tmp2 = require(7011) /* getDurationString */;
  obj[1] = flag ? tmp2.getAbbreviatedFormatter : tmp2.getFullFormatter;
  return importDefault(7011)(obj);
};
export const isRemoteAcked = function isRemoteAcked(addResult, closure_1) {
  let acked = addResult.acked;
  if (!acked) {
    let tmp4 = closure_1 !== require(3928) /* explicitContentFromProto */.NOTIFICATION_CENTER_ACKED_BEFORE_ID_UNSET;
    if (tmp4) {
      tmp4 = importDefault(11).compare(closure_1, addResult.id) >= 0;
      const obj = importDefault(11);
    }
    acked = tmp4;
  }
  return acked;
};
export const incomingFriendRequestLocalItem = function incomingFriendRequestLocalItem(user, since, origin_application_id) {
  let obj = importDefault(11);
  const fromTimestampResult = obj.fromTimestamp(new Date(since).getTime());
  obj = { acked: false, forceUnacked: true, other_user: user, kind: "notification-center-item", local_id: "incoming_friend_requests_" + user.id + "_" + fromTimestampResult, deeplink: "https://discord.com/users/" + user.id, type: require(7009) /* NotificationCenterScenes */.NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS, id: fromTimestampResult, applicationId: origin_application_id };
  return obj;
};
export const incomingGameFriendRequestLocalItem = function incomingGameFriendRequestLocalItem(user, since, applicationId) {
  let obj = importDefault(11);
  const fromTimestampResult = obj.fromTimestamp(new Date(since).getTime());
  obj = { acked: false, forceUnacked: true, other_user: user, kind: "notification-center-item", local_id: "incoming_game_friend_requests_" + user.id + "_" + fromTimestampResult, deeplink: "https://discord.com/users/" + user.id, type: require(7009) /* NotificationCenterScenes */.NotificationCenterLocalItems.INCOMING_GAME_FRIEND_REQUESTS, id: fromTimestampResult, applicationId };
  return obj;
};
export const mobileNativeUpdateAvailableLocalItem = function mobileNativeUpdateAvailableLocalItem(newBuild) {
  const obj = { acked: false, enableBadge: true, id: null, kind: "notification-center-item", local_id: null, type: null, deeplink: null };
  const obj2 = importDefault(11);
  obj[2] = obj2.fromTimestamp(new Date().getTime());
  obj[4] = "mobile_update_available_" + newBuild.build;
  obj[5] = require(7009) /* NotificationCenterScenes */.NotificationCenterLocalItems.MOBILE_NATIVE_UPDATE_AVAILABLE;
  obj[6] = newBuild.urls.install.toString();
  return obj;
};
export const isMentionItem = function isMentionItem(addResult) {
  let tmp3 = addResult.type === require(7009) /* NotificationCenterScenes */.NotificationCenterItems.RECENT_MENTION;
  if (!tmp3) {
    tmp3 = addResult.type === require(7009) /* NotificationCenterScenes */.NotificationCenterItems.REPLY_MENTION;
  }
  return tmp3;
};