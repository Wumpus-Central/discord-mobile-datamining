// === Module 7528: getAccessibilityLabelFormatter ===

// Module 7528 (getAccessibilityLabelFormatter)
import DISCORD_EPOCHDefault from "DISCORD_EPOCH" /* 11 */;
import expandEventPropertiesDefault from "expandEventProperties" /* 698 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import tDefault from "t" /* 3975 */;
import collectGuildAnalyticsMetadata from "collectGuildAnalyticsMetadata" /* 5042 */;
import getTimestampStringDefault from "getTimestampString" /* 5093 */;
import UserNotificationSettings from "UserNotificationSettings" /* 6795 */;
import collectThreadMetadata from "collectThreadMetadata" /* 7521 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import generateOldThreadCutoff from "generateOldThreadCutoff" /* 4772 */;
import updateUserGuildSettingsInternal from "updateUserGuildSettingsInternal" /* 5043 */;
import storeThread from "storeThread" /* 4023 */;
import { ThreadMemberFlags } from "AbortCodes" /* 1235 */;
import ME from "ME" /* 676 */;

require = fn;
function getAccessibilityLabelFormatter() {
  const obj = { minutes: getSystemLocale.t["1Rcf/h"], hours: getSystemLocale.t.vgnx51, days: getSystemLocale.t.fNvE50, month: null };
  const intl = getSystemLocale.intl;
  obj[3] = intl.string(getSystemLocale.t.P7Gygz);
  return obj;
}
let closure_3 = ["can_send_message", "parent_channel_type"];
({ AnalyticEvents: c9, UserNotificationSettings: c10 } = ME);
let result = require("obj132").fileFinishedImporting("modules/threads/ThreadUtils.tsx");

export const getTimestampString = getTimestampStringDefault;
export const getTimestampAccessibilityLabel = function getTimestampAccessibilityLabel(extractTimestampResult) {
  return getTimestampStringDefault(extractTimestampResult, getAccessibilityLabelFormatter);
};
export const trackThreadBrowserTab = function trackThreadBrowserTab() {
  collectGuildAnalyticsMetadata.trackWithMetadata(constants.THREAD_BROWSER_TAB_CHANGED);
};
export const trackThreadBrowserOpened = function trackThreadBrowserOpened() {
  let str = arg0;
  if (arg0 === undefined) {
    str = "Modal";
  }
  collectGuildAnalyticsMetadata.trackWithMetadata(constants.OPEN_MODAL, { type: "Thread Browser", location_section: str });
};
export const trackActiveThreadsPopoutOpened = function trackActiveThreadsPopoutOpened() {
  expandEventPropertiesDefault.track(constants.OPEN_POPOUT, { type: "Active Threads Popout" });
};
export const trackThreadNotificationSettingsUpdated = function trackThreadNotificationSettingsUpdated(closure_1_0, c1) {
  let obj = collectThreadMetadata;
  const result = obj.collectThreadMetadata(closure_1_0);
  if (null != result) {
    const guildId = closure_1_0.getGuildId();
    const parent_id = closure_1_0.parent_id;
    let tmpResult = UserNotificationSettings;
    const currentChannelSettings = tmpResult.getCurrentChannelSettings(guildId, parent_id);
    let num = closure_7.flags(closure_1_0.id);
    if (num == null) {
      num = 0;
    }
    function getNotificationAnalyticsString(flags) {
      if (obj.hasFlag(flags, constants.ALL_MESSAGES)) {
        let tmp6 = callback(table[11]).MessageNotificationSettings[constants2.ALL_MESSAGES];
      } else {
        let tmpResult = callback(table[12]);
        if (tmpResult.hasFlag(flags, constants.ONLY_MENTIONS)) {
          tmp6 = callback(table[11]).MessageNotificationSettings[constants2.ONLY_MENTIONS];
        } else {
          tmpResult = callback(table[12]);
          const MessageNotificationSettings = callback(table[11]).MessageNotificationSettings;
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
    const isMutedResult = closure_7.isMuted(closure_1_0.id);
    tmpResult = UserNotificationSettings;
    let result1 = tmpResult.muteConfigToTimestamp(closure_7.getMuteConfig(closure_1_0.id));
    ({ can_send_message, parent_channel_type } = result);
    obj = {};
    const merged = Object.assign(callback(result, closure_3));
    obj.channel_id = closure_1_0.id;
    obj.guild_id = guildId;
    obj.parent_id = parent_id;
    obj.channel_type = closure_1_0.type;
    obj.has_interacted_with_thread = num & ThreadMemberFlags.HAS_INTERACTED;
    obj.parent_is_muted = guildOrCategoryOrChannelMuted.isGuildOrCategoryOrChannelMuted(guildId, parent_id);
    obj.old_thread_notification_setting = notificationAnalyticsString;
    if (null != importDefault.flags) {
      notificationAnalyticsString = getNotificationAnalyticsString(importDefault.flags);
    }
    obj.new_thread_notification_setting = notificationAnalyticsString;
    obj.parent_notification_setting = currentChannelSettings.channel_message_notification_settings;
    obj.old_thread_is_muted = isMutedResult;
    let muted = importDefault.muted;
    if (muted == null) {
      muted = isMutedResult;
    }
    obj.new_thread_is_muted = muted;
    obj.old_thread_muted_until = result1;
    if (null != importDefault.mute_config) {
      result1 = UserNotificationSettings.muteConfigToTimestamp(importDefault.mute_config);
      const tmpResult1 = UserNotificationSettings;
    }
    obj.new_thread_muted_until = result1;
    expandEventPropertiesDefault.track(constants.THREAD_NOTIFICATION_SETTINGS_UPDATED, obj);
  }
};
export const useLastMessageTimestamp = function useLastMessageTimestamp(thread) {
  const _require = thread;
  const items = [closure_5];
  const stateFromStores = _require(589).useStateFromStores(items, () => closure_1_5.lastMessageId(thread.id));
  let extractTimestampResult = null;
  if (null != stateFromStores) {
    extractTimestampResult = DISCORD_EPOCHDefault.extractTimestamp(stateFromStores);
  }
  const threadMetadata = thread.threadMetadata;
  let createTimestamp;
  if (threadMetadata != null) {
    createTimestamp = threadMetadata.createTimestamp;
  }
  let valueOfResult = null;
  if (null != createTimestamp) {
    valueOfResult = tDefault(createTimestamp).valueOf();
    const obj3 = tDefault(createTimestamp);
  }
  if (extractTimestampResult == null) {
    extractTimestampResult = valueOfResult;
  }
  if (extractTimestampResult == null) {
    extractTimestampResult = DISCORD_EPOCHDefault.extractTimestamp(thread.id);
  }
  return extractTimestampResult;
};