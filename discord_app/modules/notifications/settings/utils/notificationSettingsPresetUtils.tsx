// discord_app/modules/notifications/settings/utils/notificationSettingsPresetUtils.tsx
import Constants from "../../../../Constants.tsx";
import intl2 from "../../../../intl/index.native.tsx";
import ReadStateConstants from "../../../read_states/ReadStateConstants.tsx";
import merged5 from "../../../../../_runtime/05075_merged5.js";
import size from "../../../../../_runtime/metro/00002__.js";

function presetFromSettings(stateFromStores, stateFromStores1) {
  const items = [stateFromStores1, stateFromStores];
  const str = merged5;
  const match = str.match(items);
  const items1 = [UserNotificationSettings.ALL_MESSAGES, UnreadSetting.ALL_MESSAGES];
  const items2 = [UserNotificationSettings.ONLY_MENTIONS, UnreadSetting.UNSET];
  const items3 = [UserNotificationSettings.ONLY_MENTIONS, UnreadSetting.ONLY_MENTIONS];
  const withResult = match.with(items1, () => constants.ALL_MESSAGES);
  const items4 = [UserNotificationSettings.NO_MESSAGES, UnreadSetting.UNSET];
  const withResult1 = withResult.with(items2, () => constants.MENTIONS);
  const items5 = [UserNotificationSettings.NO_MESSAGES, UnreadSetting.ONLY_MENTIONS];
  const withResult2 = withResult1.with(items3, () => constants.MENTIONS);
  const withResult3 = withResult2.with(items4, () => constants.NOTHING);
  const withResult4 = withResult3.with(items5, () => constants.NOTHING);
  return withResult4.otherwise(() => constants.CUSTOM);
}
const UserNotificationSettings = Constants.UserNotificationSettings;
const UnreadSetting = ReadStateConstants.UnreadSetting;
const Presets = {
  ALL_MESSAGES: "all_messages",
  HYBRID: "hybrid",
  MENTIONS: "mentions",
  NOTHING: "nothing",
  CUSTOM: "custom",
};
const result = size.fileFinishedImporting("modules/notifications/settings/utils/notificationSettingsPresetUtils.tsx");

export { Presets };
export { presetFromSettings };
export const webPresetFromSettings = function webPresetFromSettings(guildUnreadSetting, messageNotifications) {
  if (guildUnreadSetting === UnreadSetting.ALL_MESSAGES) {
    let HYBRID;
    if (messageNotifications === UserNotificationSettings.ONLY_MENTIONS) {
      HYBRID = obj.HYBRID;
    }
    return HYBRID;
  }
  HYBRID = presetFromSettings(guildUnreadSetting, messageNotifications);
};
export const presetName = function presetName(config) {
  const str = merged5;
  const match = str.match(config);
  const withResult = match.with(obj.ALL_MESSAGES, () => {
    const intl = intl2.intl;
    return intl.string(intl2.t.hZrr6k);
  });
  const withResult1 = withResult.with(obj.HYBRID, () => {
    const intl = intl2.intl;
    return intl.string(intl2.t.JzbSEY);
  });
  const withResult2 = withResult1.with(obj.MENTIONS, () => {
    const intl = intl2.intl;
    return intl.string(intl2.t.y59NJm);
  });
  const withResult3 = withResult2.with(obj.NOTHING, () => {
    const intl = intl2.intl;
    return intl.string(intl2.t["pGn/bJ"]);
  });
  const withResult4 = withResult3.with(obj.CUSTOM, () => {
    const intl = intl2.intl;
    return intl.string(intl2.t["32yow9"]);
  });
  return withResult4.exhaustive();
};
export const arePresetSettingsUnset = function arePresetSettingsUnset(arg0, arg1) {
  let tmp = null != arg0 && arg0 !== UnreadSetting.UNSET;
  if (!tmp) {
    tmp = null != arg1 && arg1 !== UserNotificationSettings.NULL;
    const tmp4 = null != arg1 && arg1 !== UserNotificationSettings.NULL;
  }
  return !tmp;
};
