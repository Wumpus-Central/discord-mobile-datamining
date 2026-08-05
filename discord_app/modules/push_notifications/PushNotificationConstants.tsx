// discord_app/modules/push_notifications/PushNotificationConstants.tsx
import getConstants from "getConstants";
import isMetaQuest from "isMetaQuest";
import { set } from "../../utils/PlatformUtils.tsx";

getConstants = getConstants.getConstants();
let str;
if (getConstants != null) {
  str = getConstants.Identifier;
}
if (str == null) {
  str = "";
}
isMetaQuest = isMetaQuest.isQuestRelease();
const startsWithResult = str.startsWith("com.discord.kodiak");
const startsWithResult1 = str.startsWith("com.hammerandchisel.discord.local");
const meta_horizon = "meta_horizon";
let str2 = "apns_internal";
if (!startsWithResult) {
  let str3 = "apns";
  if (startsWithResult1) {
    str3 = "apns_local";
  }
  str2 = str3;
}
let str4 = "apns_internal_voip";
if (!startsWithResult) {
  let str5 = "apns_voip";
  if (startsWithResult1) {
    str5 = "apns_local_voip";
  }
  str4 = str5;
}
const result = require("set").fileFinishedImporting("modules/push_notifications/PushNotificationConstants.tsx");

export const BUNDLE_ID = str;
export const IS_QUEST_RELEASE = isMetaQuest;
export const DEVICE_PUSH_PROVIDER_ANDROID = "gcm";
export const DEVICE_PUSH_PROVIDER_META_HORIZON = "meta_horizon";
export const DEVICE_PUSH_PROVIDER_IOS = str2;
export const DEVICE_PUSH_VOIP_PROVIDER = str4;
export const getDevicePushProvider = function getDevicePushProvider() {
  if (isMetaQuest) {
    let str = meta_horizon;
  } else {
    str = "gcm";
    if (!obj.isAndroid()) {
      str = str2;
    }
    obj = set /* set */;
  }
  return str;
};
export const NotificationTypes = { REMINDER: "reminder", TOP_MESSAGE_PUSH: "top_messages_push", TRENDING_CONTENT_PUSH: "trending_content_push" };