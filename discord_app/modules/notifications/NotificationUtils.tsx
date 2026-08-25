// === Module 9979: getMuteTimeOptions ===

// Module 9979 (getMuteTimeOptions)
import DISCORD_EPOCHDefault from "DISCORD_EPOCH" /* 11 */;
import initialize from "initialize" /* 589 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import closure_4 from "updateUserGuildSettingsInternal" /* 4589 */;
import { UserNotificationSettings } from "ME" /* 676 */;
import MAX_FAVORITES from "MAX_FAVORITES" /* 685 */;

require = arg1;
({ MuteUntilSeconds: closure_6, ChannelNotificationSettingsFlags: error } = MAX_FAVORITES);
let closure_8 = { ignoreMute: false, ignoreUnreadSetting: true, ignoreNotificationSetting: false };
const result = require("set").fileFinishedImporting("modules/notifications/NotificationUtils.tsx");

export const getMuteTimeOptions = function getMuteTimeOptions() {
  let obj = { id: "15-minutes", label: null, value: null };
  const intl = getSystemLocale.intl;
  obj[1] = intl.string(getSystemLocale.t["8ot6gv"]);
  obj[2] = closure_6.MINUTES_15;
  const items = [obj, , , , , ];
  obj = { id: "1-hour", label: null, value: null };
  const intl2 = getSystemLocale.intl;
  obj[1] = intl2.string(getSystemLocale.t.UMWBZr);
  obj[2] = closure_6.HOURS_1;
  items[1] = obj;
  obj = { id: "3-hours", label: null, value: null };
  const intl3 = getSystemLocale.intl;
  obj[1] = intl3.string(getSystemLocale.t.QmYWtu);
  obj[2] = closure_6.HOURS_3;
  items[2] = obj;
  obj1 = { id: "8-hours", label: null, value: null };
  const intl4 = getSystemLocale.intl;
  obj1[1] = intl4.string(getSystemLocale.t.EpAXPC);
  obj1[2] = closure_6.HOURS_8;
  items[3] = obj1;
  const obj2 = { id: "24-hours", label: null, value: null };
  const intl5 = getSystemLocale.intl;
  obj2[1] = intl5.string(getSystemLocale.t["755t4q"]);
  obj2[2] = closure_6.HOURS_24;
  items[4] = obj2;
  const obj3 = { id: "forever", label: null, value: null };
  const intl6 = getSystemLocale.intl;
  obj3[1] = intl6.string(getSystemLocale.t.r3LawO);
  obj3[2] = closure_6.ALWAYS;
  items[5] = obj3;
  return items;
};
export const filterOverrides = function filterOverrides(channelOverrides, arg1) {
  closure_0 = channelOverrides;
  let tmp = arg1;
  if (arg1 === undefined) {
    tmp = closure_8;
  }
  importDefault = tmp;
  const keys = DISCORD_EPOCHDefault.keys(channelOverrides);
  return keys.filter((arg0) => {
    let num = dependencyMap[arg0].flags;
    if (num == null) {
      num = 0;
    }
    let hasFlagResult = closure_1_2(closure_1_3[5]).hasFlag(num, closure_1_7.UNREADS_ALL_MESSAGES);
    if (!hasFlagResult) {
      let num2 = tmp[arg0].flags;
      if (num2 == null) {
        num2 = 0;
      }
      hasFlagResult = closure_1_2(tmp3[5]).hasFlag(num2, closure_1_7.UNREADS_ONLY_MENTIONS);
      const tmp2Result = closure_1_2(tmp3[5]);
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
        tmp8 = dependencyMap[arg0].message_notifications !== closure_1_5.NULL;
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
  const items = [closure_4];
  return initialize.useStateFromStores(items, () => useNewNotifications.useNewNotifications);
};
export const shouldShowUseNewNotificationSystem = function shouldShowUseNewNotificationSystem(GuildPopoutMenu) {
  return useNewNotifications.useNewNotifications;
};