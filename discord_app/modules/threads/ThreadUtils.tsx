// discord_app/modules/threads/ThreadUtils.tsx
import SnowflakeUtilsDefault from "../../utils/SnowflakeUtils.tsx";
import ThreadConstants from "ThreadConstants.tsx";
import intl2 from "../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../utils/AnalyticsUtils.tsx";
import _modDef4467 from "../../../_runtime/metro/04467__.js";
import AppAnalyticsUtils from "../app_analytics/AppAnalyticsUtils.tsx";
import NotificationSettingsUtils from "../../utils/NotificationSettingsUtils.tsx";
import getTimestampStringDefault from "getTimestampString.tsx";
import ThreadAnalyticsUtils from "../app_analytics/ThreadAnalyticsUtils.tsx";
import _objectWithoutProperties from "../../../_runtime/metro/00109__objectWithoutProperties.js";
import ReadStateStore from "../../stores/ReadStateStore.tsx";
import UserGuildSettingsStore from "../../stores/UserGuildSettingsStore.tsx";
import JoinedThreadsStore from "JoinedThreadsStore.tsx";
import Constants from "../../Constants.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

let c10;
let c9;
function getAccessibilityLabelFormatter() {
  let intl;
  const time = {
    minutes: intl2.t["1Rcf/h"],
    hours: intl2.t.vgnx51,
    days: intl2.t.fNvE50,
    month: intl.string(intl2.t.P7Gygz),
  };
  intl = intl2.intl;
  return time;
}
let closure_3 = ["can_send_message", "parent_channel_type"];
const ThreadMemberFlags = ThreadConstants.ThreadMemberFlags;
({ AnalyticEvents: c9, UserNotificationSettings: c10 } = Constants);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (id) => {
      let first;
      let tmp12;
      let tmp6;
      let tmp8;
      _require = id;
      const obj = require("react");
      const cResult = obj.c(11);
      const tmp = _require;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ReadStateStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== id.id) {
        const fn = function o() {
          return ReadStateStore.lastMessageId(id.id);
        };
        cResult[1] = id.id;
        cResult[2] = fn;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const tmpResult = tmp(504);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
      if (cResult[3] !== stateFromStores) {
        let extractTimestampResult = null;
        if (null != stateFromStores) {
          const obj3 = SnowflakeUtilsDefault;
          extractTimestampResult = obj3.extractTimestamp(stateFromStores);
        }
        cResult[3] = stateFromStores;
        cResult[4] = extractTimestampResult;
        tmp8 = extractTimestampResult;
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
          const obj4 = _modDef4467(createTimestamp);
          valueOfResult = obj4.valueOf();
        }
        cResult[5] = createTimestamp;
        cResult[6] = valueOfResult;
        tmp12 = valueOfResult;
      } else {
        tmp12 = cResult[6];
      }
      if (cResult[7] === id.id) {
        if (cResult[8] === tmp12) {
          let tmp15;
          if (cResult[9] === tmp8) {
            tmp15 = cResult[10];
          }
          return tmp15;
        }
      }
      let extractTimestampResult1 = tmp8;
      if (tmp8 == null) {
        extractTimestampResult1 = tmp12;
      }
      if (extractTimestampResult1 == null) {
        const obj5 = SnowflakeUtilsDefault;
        extractTimestampResult1 = obj5.extractTimestamp(id.id);
      }
      cResult[7] = id.id;
      cResult[8] = tmp12;
      cResult[9] = tmp8;
      cResult[10] = extractTimestampResult1;
      tmp15 = extractTimestampResult1;
    }
  : (threadMetadata) => {
      _require = threadMetadata;
      const items = [ReadStateStore];
      const obj = require("get initialized");
      const stateFromStores = obj.useStateFromStores(items, () => ReadStateStore.lastMessageId(threadMetadata.id));
      let extractTimestampResult = null;
      if (null != stateFromStores) {
        const obj2 = SnowflakeUtilsDefault;
        extractTimestampResult = obj2.extractTimestamp(stateFromStores);
      }
      threadMetadata = threadMetadata.threadMetadata;
      let createTimestamp;
      if (threadMetadata != null) {
        createTimestamp = threadMetadata.createTimestamp;
      }
      let valueOfResult = null;
      if (null != createTimestamp) {
        const obj3 = _modDef4467(createTimestamp);
        valueOfResult = obj3.valueOf();
      }
      if (extractTimestampResult == null) {
        extractTimestampResult = valueOfResult;
      }
      if (extractTimestampResult == null) {
        const obj4 = SnowflakeUtilsDefault;
        extractTimestampResult = obj4.extractTimestamp(threadMetadata.id);
      }
      return extractTimestampResult;
    };
let result = size.fileFinishedImporting("modules/threads/ThreadUtils.tsx");

export const getTimestampString = getTimestampStringDefault;
export const getTimestampAccessibilityLabel = function getTimestampAccessibilityLabel(extractTimestampResult) {
  return getTimestampStringDefault(extractTimestampResult, getAccessibilityLabelFormatter);
};
export const trackThreadBrowserTab = function trackThreadBrowserTab() {
  const obj = AppAnalyticsUtils;
  obj.trackWithMetadata(constants.THREAD_BROWSER_TAB_CHANGED);
};
export const trackThreadBrowserOpened = function trackThreadBrowserOpened() {
  let str = arg0;
  if (arg0 === undefined) {
    str = "Modal";
  }
  const obj = AppAnalyticsUtils;
  obj.trackWithMetadata(constants.OPEN_MODAL, { type: "Thread Browser", location_section: str });
};
export const trackActiveThreadsPopoutOpened = function trackActiveThreadsPopoutOpened() {
  const obj = AnalyticsUtilsDefault;
  obj.track(constants.OPEN_POPOUT, { type: "Active Threads Popout" });
};
export const trackThreadNotificationSettingsUpdated = function trackThreadNotificationSettingsUpdated(
  getGuildId,
  flags,
) {
  let can_send_message;
  let constants2;
  let muted;
  let parent_channel_type;
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
      let tmp6;
      const obj = require("FlagUtils");
      if (obj.hasFlag(flags, constants.ALL_MESSAGES)) {
        tmp6 = require("NotificationSettingsUtils").MessageNotificationSettings[constants2.ALL_MESSAGES];
      } else {
        const tmpResult = require("FlagUtils");
        if (tmpResult.hasFlag(flags, constants.ONLY_MENTIONS)) {
          tmp6 = require("NotificationSettingsUtils").MessageNotificationSettings[constants2.ONLY_MENTIONS];
        } else {
          const tmpResult2 = require("FlagUtils");
          const hasFlagResult = tmpResult2.hasFlag(flags, constants.NO_MESSAGES);
          const MessageNotificationSettings = require("NotificationSettingsUtils").MessageNotificationSettings;
          if (hasFlagResult) {
            tmp6 = MessageNotificationSettings[constants2.NO_MESSAGES];
          } else {
            tmp6 = MessageNotificationSettings[constants2.NULL];
          }
        }
      }
      return tmp6;
    }
    let notificationAnalyticsString = getNotificationAnalyticsString(num);
    const isMutedResult = JoinedThreadsStore.isMuted(getGuildId.id);
    const tmpResult3 = NotificationSettingsUtils;
    let result1 = tmpResult3.muteConfigToTimestamp(JoinedThreadsStore.getMuteConfig(getGuildId.id));
    ({ can_send_message, parent_channel_type } = result);
    const obj2 = {
      channel_id: getGuildId.id,
      guild_id: guildId,
      parent_id,
      channel_type: getGuildId.type,
      has_interacted_with_thread: num & ThreadMemberFlags.HAS_INTERACTED,
      parent_is_muted: UserGuildSettingsStore.isGuildOrCategoryOrChannelMuted(guildId, parent_id),
      old_thread_notification_setting: notificationAnalyticsString,
      new_thread_notification_setting: notificationAnalyticsString,
      parent_notification_setting: currentChannelSettings.channel_message_notification_settings,
      old_thread_is_muted: isMutedResult,
      new_thread_is_muted: muted,
      old_thread_muted_until: result1,
      new_thread_muted_until: result1,
    };
    const merged = Object.assign(_objectWithoutProperties(result, closure_3));
    if (null != flags.flags) {
      notificationAnalyticsString = getNotificationAnalyticsString(flags.flags);
    }
    muted = flags.muted;
    if (muted == null) {
      muted = isMutedResult;
    }
    if (null != flags.mute_config) {
      const tmpResult4 = NotificationSettingsUtils;
      result1 = tmpResult4.muteConfigToTimestamp(flags.mute_config);
    }
    const obj5 = AnalyticsUtilsDefault;
    obj5.track(constants.THREAD_NOTIFICATION_SETTINGS_UPDATED, obj2);
  }
};
export const useLastMessageTimestamp = tmp3;
