// === Module 4211: ReactionUtils ===

// Module 4211 (ReactionUtils)
import util from "util" /* 1114 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import UserSettings from "UserSettings" /* 1935 */;
import UnicodeEmojisDefault from "UnicodeEmojis" /* 4213 */;
import MessageReactionsTypes from "MessageReactionsTypes" /* 7763 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

require = fn;
const Constants = fn(1074);
({ AnalyticsSections: closure_4, AnalyticEvents: hasOwnProperty } = Constants);
const constants3 = fn(4212).NotificationSettingsUpdateType;
const size = fn(2);
let result = size.fileFinishedImporting("modules/reactions/ReactionUtils.tsx");

export const MAX_REACTIONS = 20;
export const getReactionEmojiName = function getReactionEmojiName(emoji) {
  if (null == emoji.id) {
    let result = UnicodeEmojisDefault.convertSurrogateToName(emoji.name);
  } else {
    const _HermesInternal = HermesInternal;
    result = ":" + emoji.name + ":";
  }
  return result;
};
export const getAccessibleEmojiDisplayName = function getAccessibleEmojiDisplayName(me, count, emoji, arg3) {
  const t = util.t;
  if (arg3) {
    if (me) {
      let i9DXqM = t.i9DXqM;
    } else {
      i9DXqM = t["Z/l+qu"];
    }
  } else {
    if (me) {
      let PirBBE = t.CLuzw5;
      let tmp5 = tmp;
    } else {
      PirBBE = t.PirBBE;
      tmp5 = tmp;
    }
    const intl = tmp5(1114).intl;
    const obj = { reactions: count, emojiName: null };
    if (null == emoji.id) {
      let str2 = UnicodeEmojisDefault.convertSurrogateToName(emoji.name);
    } else {
      const _HermesInternal = HermesInternal;
      str2 = ":" + emoji.name + ":";
    }
    let str3;
    if (str2 != null) {
      const str5 = str2.replace(/[:_]/g, " ");
      if (str5 != null) {
        str3 = str5.trim();
      }
    }
    if (str3 == null) {
      str3 = "";
    }
    obj.emojiName = str3;
    return intl.formatToPlainString(PirBBE, obj);
  }
};
export const isMeReaction = function isMeReaction(me, me_burst, arg2) {
  let tmp3 = arg2 === MessageReactionsTypes.ReactionTypes.BURST;
  if (tmp3) {
    tmp3 = true === me_burst;
  }
  if (!tmp3) {
    let tmp5 = arg2 === MessageReactionsTypes.ReactionTypes.NORMAL;
    if (tmp5) {
      tmp5 = true === me;
    }
    tmp3 = tmp5;
  }
  return tmp3;
};
export const toReactionEmoji = function toReactionEmoji(byName) {
  let id = byName.id;
  if (id == null) {
    id = null;
  }
  const obj = { id, name: null, animated: null };
  let str = null != byName.id ? byName.name : byName.optionallyDiverseSequence;
  if (str == null) {
    str = byName.name;
  }
  if (str == null) {
    str = "";
  }
  obj.name = str;
  obj.animated = Boolean(byName.animated);
  return obj;
};
export const isCustomReactionEmojiId = function isCustomReactionEmojiId(emojiId) {
  let tmp = null != emojiId;
  if (tmp) {
    tmp = "" !== emojiId;
  }
  if (!tmp) {
    return tmp;
  } else if (typeof emojiId === "number") {
    let tmp2 = 0 !== emojiId;
  } else {
    const _String = String;
    tmp2 = "0" !== String(emojiId);
  }
};
export const emojiEquals = function emojiEquals(emoji, id2) {
  if (null != id2.id) {
    if (null != emoji.id) {
      const _HermesInternal = HermesInternal;
      let id = "" + emoji.id;
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
  if (isThread.isThread()) {
    let FORUM_CHANNEL_TEXT_AREA = constants.THREAD_TEXT_AREA;
  } else if (isThread.isForumPost()) {
    FORUM_CHANNEL_TEXT_AREA = constants.FORUM_CHANNEL_TEXT_AREA;
  } else {
    FORUM_CHANNEL_TEXT_AREA = isThread.isGuildVocal() ? tmp.TEXT_IN_VOICE : tmp.CHANNEL_TEXT_AREA;
  }
  return FORUM_CHANNEL_TEXT_AREA;
};
export const shouldApplyReaction = function shouldApplyReaction(optimistic) {
  optimistic = optimistic.optimistic;
  if (optimistic) {
    optimistic = AuthenticationStore.getId() !== optimistic.userId;
  }
  return !optimistic;
};
export const updateReactionNotificationsSetting = function updateReactionNotificationsSetting(NumberResult, setting) {
  const ReactionNotifications = UserSettings.ReactionNotifications;
  ReactionNotifications.updateSetting(NumberResult);
  const obj = { update_type: constants3.ACCOUNT, reaction_notifications: NumberResult, reaction_notifications_old: setting };
  obj.track(constants2.NOTIFICATION_SETTINGS_UPDATED, obj);
};