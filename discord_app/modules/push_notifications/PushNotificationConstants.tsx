// discord_app/modules/push_notifications/PushNotificationConstants.tsx
import PlatformUtils from "../../utils/PlatformUtils.tsx";
import ClientInfoUtils from "../../utils/native/ClientInfoUtils.tsx";
import MetaQuestUtils from "../device/MetaQuestUtils.android.tsx";
import size from "../../../_runtime/metro/00002__.js";

ClientInfoUtils = ClientInfoUtils.getConstants();
let str;
if (ClientInfoUtils != null) {
  str = ClientInfoUtils.Identifier;
}
if (str == null) {
  str = "";
}
MetaQuestUtils = MetaQuestUtils.isQuestRelease();
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
const result = size.fileFinishedImporting("modules/push_notifications/PushNotificationConstants.tsx");

export const BUNDLE_ID = str;
export const IS_QUEST_RELEASE = MetaQuestUtils;
export const DEVICE_PUSH_PROVIDER_ANDROID = "gcm";
export const DEVICE_PUSH_PROVIDER_META_HORIZON = "meta_horizon";
export const DEVICE_PUSH_PROVIDER_IOS = str2;
export const DEVICE_PUSH_VOIP_PROVIDER = str4;
export const getDevicePushProvider = function getDevicePushProvider() {
  if (MetaQuestUtils) {
    let str = meta_horizon;
  } else {
    str = "gcm";
    if (!obj.isAndroid()) {
      str = str2;
    }
    obj = PlatformUtils;
  }
  return str;
};
export const NotificationTypes = {
  REMINDER: "reminder",
  TOP_MESSAGE_PUSH: "top_messages_push",
  TRENDING_CONTENT_PUSH: "trending_content_push",
};
