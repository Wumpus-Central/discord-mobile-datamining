// discord_app/modules/notifications/settings/utils/notificationSettingsPresetOptionUtils.tsx
import { UserNotificationSettings } from "ME";
import { UnreadSetting } from "ReadStateTypes";

const result = require("getSystemLocale").fileFinishedImporting("modules/notifications/settings/utils/notificationSettingsPresetOptionUtils.tsx");

export const getPushNotificationSelectOptions = function getPushNotificationSelectOptions() {
  let obj = { label: null, value: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[0] = intl.string(require(1236) /* getSystemLocale */.t["HVah/3"]);
  obj[1] = UserNotificationSettings.ALL_MESSAGES;
  const items = [obj, , ];
  obj = { label: null, value: null };
  const intl2 = require(1236) /* getSystemLocale */.intl;
  obj[0] = intl2.string(require(1236) /* getSystemLocale */.t["tu+ZWJ"]);
  obj[1] = UserNotificationSettings.ONLY_MENTIONS;
  items[1] = obj;
  obj = { label: null, value: null };
  const intl3 = require(1236) /* getSystemLocale */.intl;
  obj[0] = intl3.string(require(1236) /* getSystemLocale */.t.X4wWUi);
  obj[1] = UserNotificationSettings.NO_MESSAGES;
  items[2] = obj;
  return items;
};
export const getUnreadSelectOptions = function getUnreadSelectOptions(notificationSetting) {
  let obj = { label: null, value: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[0] = intl.string(require(1236) /* getSystemLocale */.t["HVah/3"]);
  obj[1] = UnreadSetting.ALL_MESSAGES;
  const items = [obj, ];
  obj = { value: UnreadSetting.ONLY_MENTIONS, label: null, disabled: null };
  const intl2 = require(1236) /* getSystemLocale */.intl;
  obj[1] = intl2.string(require(1236) /* getSystemLocale */.t["tu+ZWJ"]);
  notificationSetting = undefined;
  if (notificationSetting != null) {
    notificationSetting = notificationSetting.notificationSetting;
  }
  obj[2] = notificationSetting === UserNotificationSettings.ALL_MESSAGES;
  items[1] = obj;
  return items;
};