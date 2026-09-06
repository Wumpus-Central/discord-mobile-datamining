// discord_app/modules/notification_center/NotificationCenterUtils.tsx
import SnowflakeUtilsDefault from "../../utils/SnowflakeUtils.tsx";
import UserSettings from "../user_settings/UserSettings.tsx";
import NotificationCenterItemsTypes from "NotificationCenterItemsTypes.tsx";
import notification_center_getTimestampString from "getTimestampString.tsx";
import size from "../../../_runtime/metro/00002__.js";

const notification_center_getTimestampStringDefault = notification_center_getTimestampString;

const result = size.fileFinishedImporting("modules/notification_center/NotificationCenterUtils.tsx");

export const getRelativeTimestamp = function getRelativeTimestamp(extractTimestampResult) {
  if (flag === undefined) {
    flag = true;
  }
  const obj = { since: extractTimestampResult, getFormatter: null };
  const tmp2 = notification_center_getTimestampString;
  obj.getFormatter = flag ? tmp2.getAbbreviatedFormatter : tmp2.getFullFormatter;
  return notification_center_getTimestampStringDefault(obj);
};
export const isRemoteAcked = function isRemoteAcked(addResult, setting) {
  let acked = addResult.acked;
  if (!acked) {
    let tmp4 = setting !== UserSettings.NOTIFICATION_CENTER_ACKED_BEFORE_ID_UNSET;
    if (tmp4) {
      tmp4 = SnowflakeUtilsDefault.compare(setting, addResult.id) >= 0;
    }
    acked = tmp4;
  }
  return acked;
};
export const incomingFriendRequestLocalItem = function incomingFriendRequestLocalItem(
  user,
  since,
  origin_application_id,
) {
  let obj = SnowflakeUtilsDefault;
  const fromTimestampResult = obj.fromTimestamp(new Date(since).getTime());
  obj = {
    acked: false,
    forceUnacked: true,
    other_user: user,
    kind: "notification-center-item",
    local_id: "incoming_friend_requests_" + user.id + "_" + fromTimestampResult,
    deeplink: "https://discord.com/users/" + user.id,
    type: NotificationCenterItemsTypes.NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS,
    id: fromTimestampResult,
    applicationId: origin_application_id,
  };
  return obj;
};
export const incomingGameFriendRequestLocalItem = function incomingGameFriendRequestLocalItem(
  user,
  since,
  applicationId,
) {
  let obj = SnowflakeUtilsDefault;
  const fromTimestampResult = obj.fromTimestamp(new Date(since).getTime());
  obj = {
    acked: false,
    forceUnacked: true,
    other_user: user,
    kind: "notification-center-item",
    local_id: "incoming_game_friend_requests_" + user.id + "_" + fromTimestampResult,
    deeplink: "https://discord.com/users/" + user.id,
    type: NotificationCenterItemsTypes.NotificationCenterLocalItems.INCOMING_GAME_FRIEND_REQUESTS,
    id: fromTimestampResult,
    applicationId,
  };
  return obj;
};
export const mobileNativeUpdateAvailableLocalItem = function mobileNativeUpdateAvailableLocalItem(newBuild) {
  const obj = {
    acked: false,
    enableBadge: true,
    id: null,
    kind: "notification-center-item",
    local_id: null,
    type: null,
    deeplink: null,
  };
  const obj2 = SnowflakeUtilsDefault;
  obj.id = obj2.fromTimestamp(new Date().getTime());
  obj.local_id = "mobile_update_available_" + newBuild.build;
  obj.type = NotificationCenterItemsTypes.NotificationCenterLocalItems.MOBILE_NATIVE_UPDATE_AVAILABLE;
  obj.deeplink = newBuild.urls.install.toString();
  return obj;
};
export const isMentionItem = function isMentionItem(addResult) {
  let tmp3 = addResult.type === NotificationCenterItemsTypes.NotificationCenterItems.RECENT_MENTION;
  if (!tmp3) {
    tmp3 = addResult.type === NotificationCenterItemsTypes.NotificationCenterItems.REPLY_MENTION;
  }
  return tmp3;
};
