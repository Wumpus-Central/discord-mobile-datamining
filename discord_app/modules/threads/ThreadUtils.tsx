// === Module 7904: ThreadUtils ===

// Module 7904 (ThreadUtils)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import util from "util" /* 1126 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import _modDef4661 from "module_4661" /* 4661 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5106 */;
import NotificationSettingsUtils from "NotificationSettingsUtils" /* 6800 */;
import threads_getTimestampStringDefault from "threads/getTimestampString" /* 7214 */;
import ThreadAnalyticsUtils from "ThreadAnalyticsUtils" /* 7893 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import ReadStateStore from "ReadStateStore" /* 6042 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5973 */;
import JoinedThreadsStore from "JoinedThreadsStore" /* 4711 */;

const require = globalThis.__r;

require = fn;
function getAccessibilityLabelFormatter() {
  const time = { minutes: util.t["1Rcf/h"], hours: util.t.vgnx51, days: util.t.fNvE50, month: null };
  const intl = util.intl;
  time.month = intl.string(util.t.P7Gygz);
  return time;
}
let closure_3 = ["can_send_message", "parent_channel_type"];
const ThreadMemberFlags = fn(1125).ThreadMemberFlags;
const Constants = fn(1085);
({ AnalyticEvents: closure_9, UserNotificationSettings: c10 } = Constants);
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/threads/ThreadUtils.tsx");

export const getTimestampString = threads_getTimestampStringDefault;
export const getTimestampAccessibilityLabel = function getTimestampAccessibilityLabel(extractTimestampResult) {
  return threads_getTimestampStringDefault(extractTimestampResult, getAccessibilityLabelFormatter);
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
  const result = ThreadAnalyticsUtils.collectThreadMetadata(getGuildId);
  if (null != result) {
    const guildId = getGuildId.getGuildId();
    const parent_id = getGuildId.parent_id;
    const currentChannelSettings = NotificationSettingsUtils.getCurrentChannelSettings(guildId, parent_id);
    let num = JoinedThreadsStore.flags(getGuildId.id);
    if (num == null) {
      num = 0;
    }
    function getNotificationAnalyticsString(flags) {
      if (obj.hasFlag(flags, constants.ALL_MESSAGES)) {
        let tmp6 = require("NotificationSettingsUtils").MessageNotificationSettings[constants2.ALL_MESSAGES];
      } else {
        if (tmpResult.hasFlag(flags, constants.ONLY_MENTIONS)) {
          tmp6 = require("NotificationSettingsUtils").MessageNotificationSettings[constants2.ONLY_MENTIONS];
        } else {
          const tmpResult2 = require("FlagUtils");
          const MessageNotificationSettings = require("NotificationSettingsUtils").MessageNotificationSettings;
          if (hasFlagResult) {
            tmp6 = MessageNotificationSettings[constants2.NO_MESSAGES];
          } else {
            tmp6 = MessageNotificationSettings[constants2.NULL];
          }
          hasFlagResult = require("FlagUtils").hasFlag(flags, constants.NO_MESSAGES);
        }
        tmpResult = require("FlagUtils");
      }
      return tmp6;
    }
    let notificationAnalyticsString = getNotificationAnalyticsString(num);
    const isMutedResult = JoinedThreadsStore.isMuted(getGuildId.id);
    let tmpResult = NotificationSettingsUtils;
    let result1 = NotificationSettingsUtils.muteConfigToTimestamp(JoinedThreadsStore.getMuteConfig(getGuildId.id));
    ({ can_send_message, parent_channel_type } = result);
    const obj2 = {};
    const merged = Object.assign(_objectWithoutProperties(result, closure_3));
    obj2.channel_id = getGuildId.id;
    obj2.guild_id = guildId;
    obj2.parent_id = parent_id;
    obj2.channel_type = getGuildId.type;
    obj2.has_interacted_with_thread = num & ThreadMemberFlags.HAS_INTERACTED;
    obj2.parent_is_muted = UserGuildSettingsStore.isGuildOrCategoryOrChannelMuted(guildId, parent_id);
    obj2.old_thread_notification_setting = notificationAnalyticsString;
    if (null != flags.flags) {
      notificationAnalyticsString = getNotificationAnalyticsString(flags.flags);
    }
    obj2.new_thread_notification_setting = notificationAnalyticsString;
    obj2.parent_notification_setting = currentChannelSettings.channel_message_notification_settings;
    obj2.old_thread_is_muted = isMutedResult;
    let muted = flags.muted;
    if (muted == null) {
      muted = isMutedResult;
    }
    obj2.new_thread_is_muted = muted;
    obj2.old_thread_muted_until = result1;
    if (null != flags.mute_config) {
      result1 = NotificationSettingsUtils.muteConfigToTimestamp(flags.mute_config);
      const tmpResult4 = NotificationSettingsUtils;
    }
    obj2.new_thread_muted_until = result1;
    const tmpResult3 = NotificationSettingsUtils;
    AnalyticsUtilsDefault.track(constants.THREAD_NOTIFICATION_SETTINGS_UPDATED, obj2);
  }
};
export const useLastMessageTimestamp = ReactCompilerGating.isReactCompilerEnabled() ? (function useLastMessageTimestamp(id) {
  _require = id;
  const cResult = require("c").c(11);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ReadStateStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== id.id) {
    const fn = function o() {
      return ReadStateStore.lastMessageId(id.id);
    };
    cResult[1] = id.id;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(first, tmp6);
  if (cResult[3] !== stateFromStores) {
    let extractTimestampResult = null;
    if (null != stateFromStores) {
      extractTimestampResult = SnowflakeUtilsDefault.extractTimestamp(stateFromStores);
    }
    cResult[3] = stateFromStores;
    cResult[4] = extractTimestampResult;
    let tmp8 = extractTimestampResult;
  } else {
    tmp8 = cResult[4];
  }
  const threadMetadata = id.threadMetadata;
  let createTimestamp;
  if (threadMetadata != null) {
    createTimestamp = threadMetadata.createTimestamp;
  }
  if (cResult[5] !== createTimestamp) {
    let valueOfResult = null;
    if (null != createTimestamp) {
      valueOfResult = _modDef4661(createTimestamp).valueOf();
      const obj4 = _modDef4661(createTimestamp);
    }
    cResult[5] = createTimestamp;
    cResult[6] = valueOfResult;
    let tmp12 = valueOfResult;
  } else {
    tmp12 = cResult[6];
  }
  if (cResult[7] === id.id) {
    if (cResult[8] === tmp12) {
      if (cResult[9] === tmp8) {
        let tmp15 = cResult[10];
      }
      return tmp15;
    }
  }
  let extractTimestampResult1 = tmp8;
  if (tmp8 == null) {
    extractTimestampResult1 = tmp12;
  }
  if (extractTimestampResult1 == null) {
    extractTimestampResult1 = SnowflakeUtilsDefault.extractTimestamp(id.id);
  }
  cResult[7] = id.id;
  cResult[8] = tmp12;
  cResult[9] = tmp8;
  cResult[10] = extractTimestampResult1;
  tmp15 = extractTimestampResult1;
  const tmpResult = require("initialize");
}) : (function useLastMessageTimestamp(threadMetadata) {
  _require = threadMetadata;
  const items = [ReadStateStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => ReadStateStore.lastMessageId(threadMetadata.id));
  let extractTimestampResult = null;
  if (null != stateFromStores) {
    extractTimestampResult = SnowflakeUtilsDefault.extractTimestamp(stateFromStores);
  }
  threadMetadata = threadMetadata.threadMetadata;
  let createTimestamp;
  if (threadMetadata != null) {
    createTimestamp = threadMetadata.createTimestamp;
  }
  let valueOfResult = null;
  if (null != createTimestamp) {
    valueOfResult = _modDef4661(createTimestamp).valueOf();
    const obj3 = _modDef4661(createTimestamp);
  }
  if (extractTimestampResult == null) {
    extractTimestampResult = valueOfResult;
  }
  if (extractTimestampResult == null) {
    extractTimestampResult = SnowflakeUtilsDefault.extractTimestamp(threadMetadata.id);
  }
  return extractTimestampResult;
});