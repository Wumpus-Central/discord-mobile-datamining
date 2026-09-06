// === Module 7781: ThreadUtils ===

// Module 7781 (ThreadUtils)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import util from "util" /* 1114 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import _modDef4153 from "module_4153" /* 4153 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 4740 */;
import NotificationSettingsUtils from "NotificationSettingsUtils" /* 7114 */;
import getTimestampStringDefault from "getTimestampString" /* 7499 */;
import ThreadAnalyticsUtils from "ThreadAnalyticsUtils" /* 7774 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import ReadStateStore from "ReadStateStore" /* 4575 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 4741 */;
import JoinedThreadsStore from "JoinedThreadsStore" /* 4201 */;

require = fn;
function getAccessibilityLabelFormatter() {
  const time = { minutes: util.t["1Rcf/h"], hours: util.t.vgnx51, days: util.t.fNvE50, month: null };
  const intl = util.intl;
  time.month = intl.string(util.t.P7Gygz);
  return time;
}
let closure_3 = ["can_send_message", "parent_channel_type"];
const ThreadMemberFlags = fn(1113).ThreadMemberFlags;
const Constants = fn(1074);
({ AnalyticEvents: closure_9, UserNotificationSettings: c10 } = Constants);
const size = fn(2);
let result = size.fileFinishedImporting("modules/threads/ThreadUtils.tsx");

export const getTimestampString = getTimestampStringDefault;
export const getTimestampAccessibilityLabel = function getTimestampAccessibilityLabel(extractTimestampResult) {
  return getTimestampStringDefault(extractTimestampResult, getAccessibilityLabelFormatter);
};
export const trackThreadBrowserTab = function trackThreadBrowserTab() {
  AppAnalyticsUtils.trackWithMetadata(constants.THREAD_BROWSER_TAB_CHANGED);
};
export const trackThreadBrowserOpened = function trackThreadBrowserOpened() {
  let str = arg0;
  if (arg0 === undefined) {
    str = "Modal";
  }
  AppAnalyticsUtils.trackWithMetadata(constants.OPEN_MODAL, { type: "Thread Browser", location_section: str });
};
export const trackActiveThreadsPopoutOpened = function trackActiveThreadsPopoutOpened() {
  AnalyticsUtilsDefault.track(constants.OPEN_POPOUT, { type: "Active Threads Popout" });
};
export const trackThreadNotificationSettingsUpdated = function trackThreadNotificationSettingsUpdated(getGuildId, flags) {
  let obj = ThreadAnalyticsUtils;
  const result = obj.collectThreadMetadata(getGuildId);
  if (null != result) {
    const guildId = getGuildId.getGuildId();
    const parent_id = getGuildId.parent_id;
    let tmpResult = NotificationSettingsUtils;
    const currentChannelSettings = tmpResult.getCurrentChannelSettings(guildId, parent_id);
    let num = JoinedThreadsStore.flags(getGuildId.id);
    if (num == null) {
      num = 0;
    }
    function getNotificationAnalyticsString(flags) {
      if (obj.hasFlag(flags, constants.ALL_MESSAGES)) {
        let tmp6 = require("NotificationSettingsUtils").MessageNotificationSettings[constants2.ALL_MESSAGES];
      } else {
        let tmpResult = require("FlagUtils");
        if (tmpResult.hasFlag(flags, constants.ONLY_MENTIONS)) {
          tmp6 = require("NotificationSettingsUtils").MessageNotificationSettings[constants2.ONLY_MENTIONS];
        } else {
          tmpResult = require("FlagUtils");
          const MessageNotificationSettings = require("NotificationSettingsUtils").MessageNotificationSettings;
          if (hasFlagResult) {
            tmp6 = MessageNotificationSettings[constants2.NO_MESSAGES];
          } else {
            tmp6 = MessageNotificationSettings[constants2.NULL];
          }
          hasFlagResult = tmpResult.hasFlag(flags, constants.NO_MESSAGES);
        }
      }
      return tmp6;
    }
    let notificationAnalyticsString = getNotificationAnalyticsString(num);
    const isMutedResult = JoinedThreadsStore.isMuted(getGuildId.id);
    tmpResult = NotificationSettingsUtils;
    let result1 = tmpResult.muteConfigToTimestamp(JoinedThreadsStore.getMuteConfig(getGuildId.id));
    ({ can_send_message, parent_channel_type } = result);
    obj = {};
    const merged = Object.assign(_objectWithoutProperties(result, closure_3));
    obj.channel_id = getGuildId.id;
    obj.guild_id = guildId;
    obj.parent_id = parent_id;
    obj.channel_type = getGuildId.type;
    obj.has_interacted_with_thread = num & ThreadMemberFlags.HAS_INTERACTED;
    obj.parent_is_muted = UserGuildSettingsStore.isGuildOrCategoryOrChannelMuted(guildId, parent_id);
    obj.old_thread_notification_setting = notificationAnalyticsString;
    if (null != flags.flags) {
      notificationAnalyticsString = getNotificationAnalyticsString(flags.flags);
    }
    obj.new_thread_notification_setting = notificationAnalyticsString;
    obj.parent_notification_setting = currentChannelSettings.channel_message_notification_settings;
    obj.old_thread_is_muted = isMutedResult;
    let muted = flags.muted;
    if (muted == null) {
      muted = isMutedResult;
    }
    obj.new_thread_is_muted = muted;
    obj.old_thread_muted_until = result1;
    if (null != flags.mute_config) {
      result1 = NotificationSettingsUtils.muteConfigToTimestamp(flags.mute_config);
      const tmpResult1 = NotificationSettingsUtils;
    }
    obj.new_thread_muted_until = result1;
    AnalyticsUtilsDefault.track(constants.THREAD_NOTIFICATION_SETTINGS_UPDATED, obj);
  }
};
export const useLastMessageTimestamp = function useLastMessageTimestamp(thread) {
  _require = thread;
  const items = [ReadStateStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => ReadStateStore.lastMessageId(thread.id));
  let extractTimestampResult = null;
  if (null != stateFromStores) {
    extractTimestampResult = SnowflakeUtilsDefault.extractTimestamp(stateFromStores);
  }
  const threadMetadata = thread.threadMetadata;
  let createTimestamp;
  if (threadMetadata != null) {
    createTimestamp = threadMetadata.createTimestamp;
  }
  let valueOfResult = null;
  if (null != createTimestamp) {
    valueOfResult = _modDef4153(createTimestamp).valueOf();
    const obj3 = _modDef4153(createTimestamp);
  }
  if (extractTimestampResult == null) {
    extractTimestampResult = valueOfResult;
  }
  if (extractTimestampResult == null) {
    extractTimestampResult = SnowflakeUtilsDefault.extractTimestamp(thread.id);
  }
  return extractTimestampResult;
};