// === Module 4527: ReactionUtils ===

// Module 4527 (ReactionUtils)
import intl2 from "intl" /* 1126 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import UserSettings from "UserSettings" /* 2028 */;
import NotificationConstants from "NotificationConstants" /* 4528 */;
import UnicodeEmojisDefault from "UnicodeEmojis" /* 4529 */;
import MessageReactionsTypes from "MessageReactionsTypes" /* 7272 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
({ AnalyticsSections: closure_4, AnalyticEvents: hasOwnProperty } = Constants);
const constants3 = NotificationConstants.NotificationSettingsUpdateType;
let result = size.fileFinishedImporting("modules/reactions/ReactionUtils.tsx");

export const MAX_REACTIONS = 20;
export const getReactionEmojiName = function getReactionEmojiName(emoji) {
  let result;
  if (null == emoji.id) {
    const obj = UnicodeEmojisDefault;
    result = obj.convertSurrogateToName(emoji.name);
  } else {
    const _HermesInternal = HermesInternal;
    result = ":" + emoji.name + ":";
  }
  return result;
};
export const getAccessibleEmojiDisplayName = function getAccessibleEmojiDisplayName(selected, count, emoji, arg3) {
  let PirBBE;
  let str2;
  let str3;
  let tmp6;
  const t = intl2.t;
  const tmp3 = arg3;
  if (tmp3) {
    let i9DXqM;
    let tmp10;
    if (selected) {
      i9DXqM = t.i9DXqM;
      tmp10 = require;
    } else {
      i9DXqM = t["Z/l+qu"];
      tmp10 = require;
    }
    tmp6 = tmp10;
    PirBBE = i9DXqM;
  } else if (selected) {
    PirBBE = t.CLuzw5;
    tmp6 = require;
  } else {
    PirBBE = t.PirBBE;
    tmp6 = require;
  }
  const intl = tmp6(1126).intl;
  const formatToPlainString = intl.formatToPlainString;
  const obj = { reactions: count, emojiName: str3 };
  if (null == emoji.id) {
    const obj2 = UnicodeEmojisDefault;
    str2 = obj2.convertSurrogateToName(emoji.name);
  } else {
    const _HermesInternal = HermesInternal;
    str2 = ":" + emoji.name + ":";
  }
  str3 = undefined;
  if (str2 != null) {
    const str5 = str2.replace(/[:_]/g, " ");
    if (str5 != null) {
      str3 = str5.trim();
    }
  }
  if (str3 == null) {
    str3 = "";
  }
  return formatToPlainString(PirBBE, obj);
};
export const isMeReaction = function isMeReaction(me, me_burst, arg2) {
  let tmp3 = arg2 === MessageReactionsTypes.ReactionTypes.BURST && true === me_burst;
  if (!tmp3) {
    tmp3 = arg2 === MessageReactionsTypes.ReactionTypes.NORMAL && true === me;
    const tmp5 = arg2 === MessageReactionsTypes.ReactionTypes.NORMAL && true === me;
  }
  return tmp3;
};
export const toReactionEmoji = function toReactionEmoji(byName) {
  let str;
  let id = byName.id;
  if (id == null) {
    id = null;
  }
  const obj = { id, name: str, animated: Boolean(byName.animated) };
  str = null != byName.id ? byName.name : byName.optionallyDiverseSequence;
  if (str == null) {
    str = byName.name;
  }
  if (str == null) {
    str = "";
  }
  return obj;
};
export const isCustomReactionEmojiId = function isCustomReactionEmojiId(emojiId) {
  let tmp = null != emojiId && "" !== emojiId;
  if (tmp) {
    let tmp2;
    if (typeof emojiId === "number") {
      tmp2 = 0 !== emojiId;
    } else {
      const _String = String;
      tmp2 = "0" !== String(emojiId);
    }
    tmp = tmp2;
  }
  return tmp;
};
export const emojiEquals = function emojiEquals(emoji, id2) {
  if (null != id2.id) {
    let id;
    if (null != emoji.id) {
      const _HermesInternal = HermesInternal;
      id = "" + emoji.id;
    } else {
      id = emoji.id;
    }
    const _HermesInternal2 = HermesInternal;
    return "" + id2.id === id;
  } else {
    return null == emoji.id && id2.name === emoji.name;
  }
};
export const getBurstAnalyticsSection = function getBurstAnalyticsSection(isThread) {
  let FORUM_CHANNEL_TEXT_AREA;
  if (isThread.isThread()) {
    FORUM_CHANNEL_TEXT_AREA = constants.THREAD_TEXT_AREA;
  } else if (isThread.isForumPost()) {
    FORUM_CHANNEL_TEXT_AREA = constants.FORUM_CHANNEL_TEXT_AREA;
  } else {
    FORUM_CHANNEL_TEXT_AREA = isThread.isGuildVocal() ? constants.TEXT_IN_VOICE : constants.CHANNEL_TEXT_AREA;
  }
  return FORUM_CHANNEL_TEXT_AREA;
};
export const shouldApplyReaction = function shouldApplyReaction(optimistic) {
  optimistic = optimistic.optimistic;
  const userId = optimistic.userId;
  if (optimistic) {
    optimistic = AuthenticationStore.getId() !== userId;
  }
  return !optimistic;
};
export const updateReactionNotificationsSetting = function updateReactionNotificationsSetting(NumberResult, setting) {
  const ReactionNotifications = UserSettings.ReactionNotifications;
  ReactionNotifications.updateSetting(NumberResult);
  const obj = AnalyticsUtilsDefault;
  const obj2 = { update_type: constants3.ACCOUNT, reaction_notifications: NumberResult, reaction_notifications_old: setting };
  obj.track(hasOwnProperty.NOTIFICATION_SETTINGS_UPDATED, obj2);
};