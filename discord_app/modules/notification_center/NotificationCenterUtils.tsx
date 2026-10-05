// discord_app/modules/notification_center/NotificationCenterUtils.tsx
import SnowflakeUtilsDefault from "../../utils/SnowflakeUtils.tsx";
import UserSettings from "../user_settings/UserSettings.tsx";
import getTimestampString from "getTimestampString.tsx";
import NotificationCenterItemsTypes from "NotificationCenterItemsTypes.tsx";
import size from "../../../_runtime/metro/00002__.js";

const getTimestampStringDefault = getTimestampString;

const result = size.fileFinishedImporting("modules/notification_center/NotificationCenterUtils.tsx");

export const getRelativeTimestamp = function getRelativeTimestamp(extractTimestampResult) {
  let tmp2;
  const obj = {
    since: extractTimestampResult,
    getFormatter: flag ? tmp2.getAbbreviatedFormatter : tmp2.getFullFormatter,
  };
  const tmp = getTimestampStringDefault;
  tmp2 = getTimestampString;
  return tmp(obj);
};
export const isRemoteAcked = function isRemoteAcked(acked, setting) {
  acked = acked.acked;
  if (!acked) {
    let tmp4 = setting !== UserSettings.NOTIFICATION_CENTER_ACKED_BEFORE_ID_UNSET;
    if (tmp4) {
      const obj = SnowflakeUtilsDefault;
      tmp4 = obj.compare(setting, acked.id) >= 0;
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
  const fromTimestamp = SnowflakeUtilsDefault.fromTimestamp;
  SnowflakeUtilsDefault;
  const date = new Date(since);
  const fromTimestampResult = fromTimestamp(date.getTime());
  const obj = {
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
  const fromTimestamp = SnowflakeUtilsDefault.fromTimestamp;
  SnowflakeUtilsDefault;
  const date = new Date(since);
  const fromTimestampResult = fromTimestamp(date.getTime());
  const obj = {
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
  let date;
  let fromTimestamp;
  const obj = {
    acked: false,
    enableBadge: true,
    id: fromTimestamp(date.getTime()),
    kind: "notification-center-item",
    local_id: "mobile_update_available_" + newBuild.build,
    type: NotificationCenterItemsTypes.NotificationCenterLocalItems.MOBILE_NATIVE_UPDATE_AVAILABLE,
    deeplink: str.toString(),
  };
  fromTimestamp = SnowflakeUtilsDefault.fromTimestamp;
  SnowflakeUtilsDefault;
  date = new Date();
  return obj;
};
export const isMentionItem = function isMentionItem(type) {
  const tmp3 =
    type.type === NotificationCenterItemsTypes.NotificationCenterItems.RECENT_MENTION ||
    type.type === NotificationCenterItemsTypes.NotificationCenterItems.REPLY_MENTION;
  return tmp3;
};
