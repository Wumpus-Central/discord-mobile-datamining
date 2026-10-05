// discord_app/modules/notifications/settings/utils/notificationSettingsPresetOptionUtils.tsx
import Constants from "../../../../Constants.tsx";
import intl4 from "../../../../intl/index.native.tsx";
import ReadStateConstants from "../../../read_states/ReadStateConstants.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const UserNotificationSettings = Constants.UserNotificationSettings;
const UnreadSetting = ReadStateConstants.UnreadSetting;
const result = size.fileFinishedImporting(
  "modules/notifications/settings/utils/notificationSettingsPresetOptionUtils.tsx",
);

export const getPushNotificationSelectOptions = function getPushNotificationSelectOptions() {
  let intl;
  let intl2;
  let intl3;
  const obj = { label: intl.string(intl4.t["HVah/3"]), value: UserNotificationSettings.ALL_MESSAGES };
  intl = intl4.intl;
  const items = [obj, ,];
  const obj2 = { label: intl2.string(intl4.t["tu+ZWJ"]), value: UserNotificationSettings.ONLY_MENTIONS };
  intl2 = intl4.intl;
  items[1] = obj2;
  const obj3 = { label: intl3.string(intl4.t.X4wWUi), value: UserNotificationSettings.NO_MESSAGES };
  intl3 = intl4.intl;
  items[2] = obj3;
  return items;
};
export const getUnreadSelectOptions = function getUnreadSelectOptions(notificationSetting) {
  let intl;
  let intl2;
  const obj = { label: intl.string(intl4.t["HVah/3"]), value: UnreadSetting.ALL_MESSAGES };
  intl = intl4.intl;
  const items = [obj];
  const obj2 = {
    value: UnreadSetting.ONLY_MENTIONS,
    label: intl2.string(intl4.t["tu+ZWJ"]),
    disabled: notificationSetting === UserNotificationSettings.ALL_MESSAGES,
  };
  intl2 = intl4.intl;
  notificationSetting = undefined;
  if (notificationSetting != null) {
    notificationSetting = notificationSetting.notificationSetting;
  }
  items[1] = obj2;
  return items;
};
