import updateUserGuildSettingsInternal from "updateUserGuildSettingsInternal";
import { UserNotificationSettings } from "ME";
import MAX_FAVORITES from "MAX_FAVORITES";

let closure_6;
let error;
const require = arg1;
({ MuteUntilSeconds: closure_6, ChannelNotificationSettingsFlags: error } = MAX_FAVORITES);
let closure_8 = { ignoreMute: false, ignoreUnreadSetting: true, ignoreNotificationSetting: false };
const result = require("MAX_FAVORITES").fileFinishedImporting("modules/notifications/NotificationUtils.tsx");

export const getMuteTimeOptions = function getMuteTimeOptions() {
  let obj = { id: "15-minutes", label: null, value: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[1] = intl.string(require(1236) /* getSystemLocale */.t["8ot6gv"]);
  obj[2] = closure_6.MINUTES_15;
  const items = [obj, , , , , ];
  obj = { id: "1-hour", label: null, value: null };
  const intl2 = require(1236) /* getSystemLocale */.intl;
  obj[1] = intl2.string(require(1236) /* getSystemLocale */.t.UMWBZr);
  obj[2] = closure_6.HOURS_1;
  items[1] = obj;
  obj = { id: "3-hours", label: null, value: null };
  const intl3 = require(1236) /* getSystemLocale */.intl;
  obj[1] = intl3.string(require(1236) /* getSystemLocale */.t.QmYWtu);
  obj[2] = closure_6.HOURS_3;
  items[2] = obj;
  const obj1 = { id: "8-hours", label: null, value: null };
  const intl4 = require(1236) /* getSystemLocale */.intl;
  obj1[1] = intl4.string(require(1236) /* getSystemLocale */.t.EpAXPC);
  obj1[2] = closure_6.HOURS_8;
  items[3] = obj1;
  const obj2 = { id: "24-hours", label: null, value: null };
  const intl5 = require(1236) /* getSystemLocale */.intl;
  obj2[1] = intl5.string(require(1236) /* getSystemLocale */.t["755t4q"]);
  obj2[2] = closure_6.HOURS_24;
  items[4] = obj2;
  const obj3 = { id: "forever", label: null, value: null };
  const intl6 = require(1236) /* getSystemLocale */.intl;
  obj3[1] = intl6.string(require(1236) /* getSystemLocale */.t.r3LawO);
  obj3[2] = closure_6.ALWAYS;
  items[5] = obj3;
  return items;
};
export const filterOverrides = function filterOverrides(channelOverrides, arg1) {
  let closure_0 = channelOverrides;
  let tmp = arg1;
  if (arg1 === undefined) {
    tmp = closure_8;
  }
  const importDefault = tmp;
  const keys = importDefault(11).keys(channelOverrides);
  return keys.filter((arg0) => {
    let num = dependencyMap[arg0].flags;
    if (num == null) {
      num = 0;
    }
    let hasFlagResult = outer1_2(outer1_3[5]).hasFlag(num, outer1_7.UNREADS_ALL_MESSAGES);
    if (!hasFlagResult) {
      let num2 = tmp[arg0].flags;
      if (num2 == null) {
        num2 = 0;
      }
      hasFlagResult = outer1_2(tmp3[5]).hasFlag(num2, outer1_7.UNREADS_ONLY_MENTIONS);
      const tmp2Result = outer1_2(tmp3[5]);
    }
    const ignoreUnreadSetting = tmp.ignoreUnreadSetting;
    let tmp7 = !ignoreUnreadSetting;
    if (!ignoreUnreadSetting) {
      tmp7 = hasFlagResult;
    }
    if (!tmp7) {
      const ignoreNotificationSetting = tmp6.ignoreNotificationSetting;
      let tmp8 = !ignoreNotificationSetting;
      if (!ignoreNotificationSetting) {
        tmp8 = dependencyMap[arg0].message_notifications !== outer1_5.NULL;
      }
      tmp7 = tmp8;
    }
    if (!tmp7) {
      const ignoreMute = tmp6.ignoreMute;
      let isMuted = !ignoreMute;
      if (!ignoreMute) {
        isMuted = dependencyMap(tmp3[6]).computeIsMuted(tmp[arg0]);
        const obj3 = dependencyMap(tmp3[6]);
      }
      tmp7 = isMuted;
    }
    return tmp7;
  });
};
export const useShouldUseNewNotificationSystem = function useShouldUseNewNotificationSystem(GuildUnreadAction) {
  const items = [updateUserGuildSettingsInternal];
  return require(589) /* initialize */.useStateFromStores(items, () => useNewNotifications.useNewNotifications);
};
export const shouldShowUseNewNotificationSystem = function shouldShowUseNewNotificationSystem(GuildPopoutMenu) {
  return useNewNotifications.useNewNotifications;
};