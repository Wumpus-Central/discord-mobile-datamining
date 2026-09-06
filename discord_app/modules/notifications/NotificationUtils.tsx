// discord_app/modules/notifications/NotificationUtils.tsx
import SnowflakeUtilsDefault from "../../utils/SnowflakeUtils.tsx";
import initialize from "../../../discord_common/js/packages/flux/index.tsx";
import util from "../../intl/index.native.tsx";
import FlagUtilsAll from "../../../discord_common/js/shared/utils/FlagUtils.tsx";
import MuteTimers from "../../lib/MuteTimers.tsx";
import UserGuildSettingsStore from "../../stores/UserGuildSettingsStore.tsx";

require = fn;
const UserNotificationSettings = fn(1074).UserNotificationSettings;
const UserSettingsConstants = fn(1084);
({ MuteUntilSeconds: metroRequire, ChannelNotificationSettingsFlags: closure_7 } = UserSettingsConstants);
let closure_8 = { ignoreMute: false, ignoreUnreadSetting: true, ignoreNotificationSetting: false };
const size = fn(2);
const result = size.fileFinishedImporting("modules/notifications/NotificationUtils.tsx");

export const getMuteTimeOptions = function getMuteTimeOptions() {
  let obj = { id: "15-minutes", label: null, value: null };
  const intl = util.intl;
  obj.label = intl.string(util.t["8ot6gv"]);
  obj.value = timestampProducer.MINUTES_15;
  const items = [obj, , , , ,];
  obj = { id: "1-hour", label: null, value: null };
  const intl2 = util.intl;
  obj.label = intl2.string(util.t.UMWBZr);
  obj.value = timestampProducer.HOURS_1;
  items[1] = obj;
  obj = { id: "3-hours", label: null, value: null };
  const intl3 = util.intl;
  obj.label = intl3.string(util.t.QmYWtu);
  obj.value = timestampProducer.HOURS_3;
  items[2] = obj;
  const obj1 = { id: "8-hours", label: null, value: null };
  const intl4 = util.intl;
  obj1.label = intl4.string(util.t.EpAXPC);
  obj1.value = timestampProducer.HOURS_8;
  items[3] = obj1;
  const obj2 = { id: "24-hours", label: null, value: null };
  const intl5 = util.intl;
  obj2.label = intl5.string(util.t["755t4q"]);
  obj2.value = timestampProducer.HOURS_24;
  items[4] = obj2;
  const obj3 = { id: "forever", label: null, value: null };
  const intl6 = util.intl;
  obj3.label = intl6.string(util.t.r3LawO);
  obj3.value = timestampProducer.ALWAYS;
  items[5] = obj3;
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
