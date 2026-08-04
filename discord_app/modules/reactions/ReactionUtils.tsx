// discord_app/modules/reactions/ReactionUtils.tsx
import fetchFingerprint from "fetchFingerprint";
import ME from "ME";
import { NotificationSettingsUpdateType as closure_6 } from "AccountNotificationFlags";

let c4;
let c5;
const require = arg1;
({ AnalyticsSections: c4, AnalyticEvents: c5 } = ME);
let result = require("AccountNotificationFlags").fileFinishedImporting("modules/reactions/ReactionUtils.tsx");

export const MAX_REACTIONS = 20;
export const getReactionEmojiName = function getReactionEmojiName(emoji) {
  if (null == emoji.id) {
    let result = importDefault(3834).convertSurrogateToName(emoji.name);
    const obj = importDefault(3834);
  } else {
    const _HermesInternal = HermesInternal;
    result = ":" + emoji.name + ":";
  }
  return result;
};
export const getAccessibleEmojiDisplayName = function getAccessibleEmojiDisplayName(me, count, emoji, arg3) {
  const t = require(1236) /* getSystemLocale */.t;
  if (arg3) {
    if (me) {
      Z_l_qu = t.i9DXqM;
      let tmp6 = tmp2;
      let tmp7 = tmp2;
      let tmp8 = tmp;
    } else {
      Z_l_qu = t["Z/l+qu"];
      tmp6 = tmp2;
      tmp7 = tmp2;
      tmp8 = tmp;
    }
  } else {
    if (me) {
      let PirBBE = t.CLuzw5;
      let tmp5 = tmp;
    } else {
      PirBBE = t.PirBBE;
      tmp5 = tmp;
    }
    const intl = tmp5(1236).intl;
    const obj = { reactions: null, emojiName: null };
    obj[0] = count;
    if (null == emoji.id) {
      let str2 = importDefault(3834).convertSurrogateToName(emoji.name);
      const obj2 = importDefault(3834);
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
    obj[1] = str3;
    return intl.formatToPlainString(PirBBE, obj);
  }
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
  obj[1] = str;
  obj[2] = Boolean(byName.animated);
  return obj;
};
export const isCustomReactionEmojiId = function isCustomReactionEmojiId(emojiId) {
  let tmp = null != emojiId;
  if (tmp) {
    tmp = "" !== emojiId;
  }
  if (!tmp) {
    return tmp;
  } else if (typeof emojiId === "Object") {
    let tmp2 = 0 !== emojiId;
  } else {
    const _String = String;
    tmp2 = "0" !== String(emojiId);
  }
};
export const emojiEquals = function emojiEquals(emoji, closure_0) {
  if (null != closure_0.id) {
    if (null != emoji.id) {
      const _HermesInternal = HermesInternal;
      let id = "" + emoji.id;
    } else {
      id = emoji.id;
    }
    const _HermesInternal2 = HermesInternal;
    return "" + closure_0.id === id;
  } else {
    return null == emoji.id && closure_0.name === emoji.name;
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
    optimistic = id.getId() !== optimistic.userId;
  }
  return !optimistic;
};
export const updateReactionNotificationsSetting = function updateReactionNotificationsSetting(NumberResult, setting) {
  const ReactionNotifications = require(3866) /* explicitContentFromProto */.ReactionNotifications;
  ReactionNotifications.updateSetting(NumberResult);
  let obj = importDefault(698);
  obj = { update_type: constants3.ACCOUNT, reaction_notifications: NumberResult, reaction_notifications_old: setting };
  obj.track(constants2.NOTIFICATION_SETTINGS_UPDATED, obj);
};