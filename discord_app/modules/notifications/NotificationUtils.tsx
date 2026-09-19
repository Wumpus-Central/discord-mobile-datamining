// === Module 10401: notifications/NotificationUtils ===

// Module 10401 (notifications/NotificationUtils)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import initialize from "initialize" /* 504 */;
import util from "util" /* 1115 */;
import FlagUtilsAll from "FlagUtils" /* 1385 */;
import MuteTimers from "MuteTimers" /* 4398 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 4937 */;

require = fn;
const UserNotificationSettings = fn(1074).UserNotificationSettings;
const UserSettingsConstants = fn(1084);
({ MuteUntilSeconds: metroRequire, ChannelNotificationSettingsFlags: closure_7 } = UserSettingsConstants);
let closure_8 = { ignoreMute: false, ignoreUnreadSetting: true, ignoreNotificationSetting: false };
const size = fn(2);
const result = size.fileFinishedImporting("modules/notifications/NotificationUtils.tsx");

export const getMuteTimeOptions = function getMuteTimeOptions() {
  const obj = { id: "15-minutes", label: null, value: null };
  const intl = util.intl;
  obj.label = intl.string(util.t["8ot6gv"]);
  obj.value = timestampProducer.MINUTES_15;
  const items = [obj, , , , , ];
  const obj2 = { id: "1-hour", label: null, value: null };
  const intl2 = util.intl;
  obj2.label = intl2.string(util.t.UMWBZr);
  obj2.value = timestampProducer.HOURS_1;
  items[1] = obj2;
  const obj3 = { id: "3-hours", label: null, value: null };
  const intl3 = util.intl;
  obj3.label = intl3.string(util.t.QmYWtu);
  obj3.value = timestampProducer.HOURS_3;
  items[2] = obj3;
  const obj4 = { id: "8-hours", label: null, value: null };
  const intl4 = util.intl;
  obj4.label = intl4.string(util.t.EpAXPC);
  obj4.value = timestampProducer.HOURS_8;
  items[3] = obj4;
  const obj5 = { id: "24-hours", label: null, value: null };
  const intl5 = util.intl;
  obj5.label = intl5.string(util.t["755t4q"]);
  obj5.value = timestampProducer.HOURS_24;
  items[4] = obj5;
  const obj6 = { id: "forever", label: null, value: null };
  const intl6 = util.intl;
  obj6.label = intl6.string(util.t.r3LawO);
  obj6.value = timestampProducer.ALWAYS;
  items[5] = obj6;
  return items;
};
export const filterOverrides = function filterOverrides(channelOverrides, arg1) {
  dependencyMap = channelOverrides;
  let tmp = arg1;
  if (arg1 === undefined) {
    tmp = closure_8;
  }
  importDefault = tmp;
  const keys = SnowflakeUtilsDefault.keys(channelOverrides);
  return keys.filter((item) => {
    let num = dependencyMap[item].flags;
    if (num == null) {
      num = 0;
    }
    let hasFlagResult = FlagUtilsAll.hasFlag(num, constants.UNREADS_ALL_MESSAGES);
    if (!hasFlagResult) {
      let num2 = dependencyMap[item].flags;
      if (num2 == null) {
        num2 = 0;
      }
      hasFlagResult = FlagUtilsAll.hasFlag(num2, constants.UNREADS_ONLY_MENTIONS);
      const tmp2Result = FlagUtilsAll;
    }
    ignoreUnreadSetting = ignoreUnreadSetting.ignoreUnreadSetting;
    let tmp7 = !ignoreUnreadSetting;
    if (!ignoreUnreadSetting) {
      tmp7 = hasFlagResult;
    }
    if (!tmp7) {
      const ignoreNotificationSetting = tmp6.ignoreNotificationSetting;
      let tmp8 = !ignoreNotificationSetting;
      if (!ignoreNotificationSetting) {
        tmp8 = dependencyMap[item].message_notifications !== UserNotificationSettings.NULL;
      }
      tmp7 = tmp8;
    }
    if (!tmp7) {
      const ignoreMute = tmp6.ignoreMute;
      let isMuted = !ignoreMute;
      if (!ignoreMute) {
        isMuted = MuteTimers.computeIsMuted(dependencyMap[item]);
      }
      tmp7 = isMuted;
    }
    return tmp7;
  });
};
export const useShouldUseNewNotificationSystem = function useShouldUseNewNotificationSystem() {
  const items = [UserGuildSettingsStore];
  return initialize.useStateFromStores(items, () => useNewNotifications.useNewNotifications);
};
export const shouldShowUseNewNotificationSystem = function shouldShowUseNewNotificationSystem() {
  return UserGuildSettingsStore.useNewNotifications;
};