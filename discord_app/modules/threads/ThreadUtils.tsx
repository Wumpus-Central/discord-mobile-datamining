// discord_app/modules/threads/ThreadUtils.tsx
import _objectWithoutProperties from "_objectWithoutProperties";
import generateOldThreadCutoff from "generateOldThreadCutoff";
import updateUserGuildSettingsInternal from "updateUserGuildSettingsInternal";
import storeThread from "storeThread";
import { ThreadMemberFlags } from "AbortCodes";
import ME from "ME";

let c10;
let c9;
const require = arg1;
function getAccessibilityLabelFormatter() {
  const obj = { minutes: require("../../intl/index.native.tsx") /* getSystemLocale */.t["1Rcf/h"], hours: require("../../intl/index.native.tsx") /* getSystemLocale */.t.vgnx51, days: require("../../intl/index.native.tsx") /* getSystemLocale */.t.fNvE50, month: null };
  const intl = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[3] = intl.string(require("../../intl/index.native.tsx") /* getSystemLocale */.t.P7Gygz);
  return obj;
}
let closure_3 = ["can_send_message", "parent_channel_type"];
({ AnalyticEvents: c9, UserNotificationSettings: c10 } = ME);
let result = require("updateUserGuildSettingsInternal").fileFinishedImporting("modules/threads/ThreadUtils.tsx");

export const getTimestampString = require("getTimestampString");
export const getTimestampAccessibilityLabel = function getTimestampAccessibilityLabel(extractTimestampResult) {
  return require("getTimestampString.tsx")(extractTimestampResult, getAccessibilityLabelFormatter);
};
export const trackThreadBrowserTab = function trackThreadBrowserTab() {
  require("../app_analytics/AppAnalyticsUtils.tsx") /* collectGuildAnalyticsMetadata */.trackWithMetadata(constants.THREAD_BROWSER_TAB_CHANGED);
};
export const trackThreadBrowserOpened = function trackThreadBrowserOpened() {
  let str = arg0;
  if (arg0 === undefined) {
    str = "Modal";
  }
  require("../app_analytics/AppAnalyticsUtils.tsx") /* collectGuildAnalyticsMetadata */.trackWithMetadata(constants.OPEN_MODAL, { type: "Thread Browser", location_section: str });
};
export const trackActiveThreadsPopoutOpened = function trackActiveThreadsPopoutOpened() {
  require("../../utils/AnalyticsUtils.tsx").track(constants.OPEN_POPOUT, { type: "Active Threads Popout" });
};
export const trackThreadNotificationSettingsUpdated = function trackThreadNotificationSettingsUpdated(outer1_0, c1) {
  let can_send_message;
  let parent_channel_type;
  let obj = require("../app_analytics/ThreadAnalyticsUtils.tsx") /* collectThreadMetadata */;
  const result = obj.collectThreadMetadata(outer1_0);
  if (null != result) {
    const guildId = outer1_0.getGuildId();
    const parent_id = outer1_0.parent_id;
    let tmpResult = tmp(5225);
    const currentChannelSettings = tmpResult.getCurrentChannelSettings(guildId, parent_id);
    let num = storeThread.flags(outer1_0.id);
    if (num == null) {
      num = 0;
    }
    function getNotificationAnalyticsString(flags) {
      if (obj.hasFlag(flags, constants.ALL_MESSAGES)) {
        let tmp6 = tmp(tmp2[11]).MessageNotificationSettings[constants2.ALL_MESSAGES];
      } else {
        let tmpResult = tmp(tmp2[12]);
        if (tmpResult.hasFlag(flags, tmp3.ONLY_MENTIONS)) {
          tmp6 = tmp(tmp2[11]).MessageNotificationSettings[constants2.ONLY_MENTIONS];
        } else {
          tmpResult = tmp(tmp2[12]);
          const MessageNotificationSettings = tmp(tmp2[11]).MessageNotificationSettings;
          if (hasFlagResult) {
            tmp6 = MessageNotificationSettings[tmp5.NO_MESSAGES];
          } else {
            tmp6 = MessageNotificationSettings[tmp5.NULL];
          }
          hasFlagResult = tmpResult.hasFlag(flags, tmp3.NO_MESSAGES);
        }
      }
      return tmp6;
    }
    let notificationAnalyticsString = getNotificationAnalyticsString(num);
    const isMutedResult = storeThread.isMuted(outer1_0.id);
    tmpResult = tmp(5225);
    let result1 = tmpResult.muteConfigToTimestamp(obj7.getMuteConfig(outer1_0.id));
    ({ can_send_message, parent_channel_type } = result);
    obj = {};
    const merged = Object.assign(callback(result, closure_3));
    obj.channel_id = outer1_0.id;
    obj.guild_id = guildId;
    obj.parent_id = parent_id;
    obj.channel_type = outer1_0.type;
    obj.has_interacted_with_thread = num & ThreadMemberFlags.HAS_INTERACTED;
    obj.parent_is_muted = guildOrCategoryOrChannelMuted.isGuildOrCategoryOrChannelMuted(guildId, parent_id);
    obj.old_thread_notification_setting = notificationAnalyticsString;
    if (null != c1.flags) {
      notificationAnalyticsString = getNotificationAnalyticsString(c1.flags);
    }
    obj.new_thread_notification_setting = notificationAnalyticsString;
    obj.parent_notification_setting = currentChannelSettings.channel_message_notification_settings;
    obj.old_thread_is_muted = isMutedResult;
    let muted = c1.muted;
    if (muted == null) {
      muted = isMutedResult;
    }
    obj.new_thread_is_muted = muted;
    obj.old_thread_muted_until = result1;
    if (null != c1.mute_config) {
      result1 = tmp(5225).muteConfigToTimestamp(c1.mute_config);
      const tmpResult1 = tmp(5225);
    }
    obj.new_thread_muted_until = result1;
    require("../../utils/AnalyticsUtils.tsx").track(constants.THREAD_NOTIFICATION_SETTINGS_UPDATED, obj);
    const obj5 = require("../../utils/AnalyticsUtils.tsx");
  }
};
export const useLastMessageTimestamp = function useLastMessageTimestamp(thread) {
  const _require = thread;
  const items = [generateOldThreadCutoff];
  const stateFromStores = _require("../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => outer1_5.lastMessageId(thread.id));
  let extractTimestampResult = null;
  if (null != stateFromStores) {
    extractTimestampResult = require("../../utils/SnowflakeUtils.tsx").extractTimestamp(stateFromStores);
    const obj2 = require("../../utils/SnowflakeUtils.tsx");
  }
  const threadMetadata = thread.threadMetadata;
  let createTimestamp;
  if (threadMetadata != null) {
    createTimestamp = threadMetadata.createTimestamp;
  }
  let valueOfResult = null;
  if (null != createTimestamp) {
    valueOfResult = require("../../../_runtime/03867_t.js")(createTimestamp).valueOf();
    const obj3 = require("../../../_runtime/03867_t.js")(createTimestamp);
  }
  if (extractTimestampResult == null) {
    extractTimestampResult = valueOfResult;
  }
  if (extractTimestampResult == null) {
    extractTimestampResult = require("../../utils/SnowflakeUtils.tsx").extractTimestamp(thread.id);
    const obj4 = require("../../utils/SnowflakeUtils.tsx");
  }
  return extractTimestampResult;
};