// discord_app/modules/notifications/NotificationUtils.tsx
import SnowflakeUtilsDefault from "../../utils/SnowflakeUtils.tsx";
import get_initialized from "../../../discord_common/js/packages/flux/index.tsx";
import react from "../../../_runtime/00576_react.js";
import Constants from "../../Constants.tsx";
import intl7 from "../../intl/index.native.tsx";
import FlagUtilsAll from "../../../discord_common/js/shared/utils/FlagUtils.tsx";
import MuteTimers from "../../lib/MuteTimers.tsx";
import UserGuildSettingsStore from "../../stores/UserGuildSettingsStore.tsx";
import UserSettingsConstants from "../user_settings/UserSettingsConstants.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

let importDefault;

let metroImportDefault;
let metroRequire;
const UserNotificationSettings = Constants.UserNotificationSettings;
({ MuteUntilSeconds: metroRequire, ChannelNotificationSettingsFlags: metroImportDefault } = UserSettingsConstants);
let closure_8 = { ignoreMute: false, ignoreUnreadSetting: true, ignoreNotificationSetting: false };
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let tmp4;
      let tmp5;
      let useNewNotifications;
      const obj = react;
      const cResult = obj.c(2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserGuildSettingsStore];
        const fn = function o() {
          return useNewNotifications.useNewNotifications;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const tmpResult = get_initialized;
      return tmpResult.useStateFromStores(tmp4, tmp5);
    }
  : () => {
      let useNewNotifications;
      const items = [UserGuildSettingsStore];
      const obj = get_initialized;
      return obj.useStateFromStores(items, () => useNewNotifications.useNewNotifications);
    };
const result = size.fileFinishedImporting("modules/notifications/NotificationUtils.tsx");

export const getMuteTimeOptions = function getMuteTimeOptions() {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  const obj = { id: "15-minutes", label: intl.string(intl7.t["8ot6gv"]), value: metroRequire.MINUTES_15 };
  intl = intl7.intl;
  const items = [obj, , , , ,];
  const obj2 = { id: "1-hour", label: intl2.string(intl7.t.UMWBZr), value: metroRequire.HOURS_1 };
  intl2 = intl7.intl;
  items[1] = obj2;
  const obj3 = { id: "3-hours", label: intl3.string(intl7.t.QmYWtu), value: metroRequire.HOURS_3 };
  intl3 = intl7.intl;
  items[2] = obj3;
  const obj4 = { id: "8-hours", label: intl4.string(intl7.t.EpAXPC), value: metroRequire.HOURS_8 };
  intl4 = intl7.intl;
  items[3] = obj4;
  const obj5 = { id: "24-hours", label: intl5.string(intl7.t["755t4q"]), value: metroRequire.HOURS_24 };
  intl5 = intl7.intl;
  items[4] = obj5;
  const obj6 = { id: "forever", label: intl6.string(intl7.t.r3LawO), value: metroRequire.ALWAYS };
  intl6 = intl7.intl;
  items[5] = obj6;
  return items;
};
export const filterOverrides = function filterOverrides(channelOverrides, arg1) {
  let ignoreUnreadSetting;
  let tmp = arg1;
  if (arg1 === undefined) {
    tmp = closure_8;
  }
  importDefault = tmp;
  let obj = SnowflakeUtilsDefault;
  const keys = obj.keys(channelOverrides);
  return keys.filter((item) => {
    const message_notifications = channelOverrides[item].message_notifications;
    const NULL = UserNotificationSettings.NULL;
    let num = channelOverrides[item].flags;
    const hasFlag = FlagUtilsAll.hasFlag;
    FlagUtilsAll;
    if (num == null) {
      num = 0;
    }
    let hasFlagResult = hasFlag(num, metroImportDefault.UNREADS_ALL_MESSAGES);
    if (!hasFlagResult) {
      let num2 = channelOverrides[item].flags;
      const hasFlag2 = FlagUtilsAll.hasFlag;
      FlagUtilsAll;
      if (num2 == null) {
        num2 = 0;
      }
      hasFlagResult = hasFlag2(num2, metroImportDefault.UNREADS_ONLY_MENTIONS);
    }
    let tmp9 = !ignoreUnreadSetting.ignoreUnreadSetting && hasFlagResult;
    if (!tmp9) {
      tmp9 = !ignoreUnreadSetting.ignoreNotificationSetting && message_notifications !== NULL;
    }
    if (!tmp9) {
      let isMuted = !ignoreUnreadSetting.ignoreMute;
      if (isMuted) {
        const obj = MuteTimers;
        isMuted = obj.computeIsMuted(channelOverrides[item]);
      }
      tmp9 = isMuted;
    }
    return tmp9;
  });
};
export const useShouldUseNewNotificationSystem = tmp3;
export const shouldShowUseNewNotificationSystem = function shouldShowUseNewNotificationSystem() {
  return UserGuildSettingsStore.useNewNotifications;
};
