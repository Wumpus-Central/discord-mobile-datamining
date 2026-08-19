// discord_app/modules/reactions/ReactionUtils.tsx
import expandEventPropertiesDefault from "../../utils/AnalyticsUtils.tsx";
import getSystemLocale from "../../intl/index.native.tsx";
import parseRawEmojiObjectDefault from "../emojis/UnicodeEmojis.tsx";
import explicitContentFromProto from "../user_settings/UserSettings.tsx";
import ReactionTypes from "../messages/MessageReactionsTypes.tsx";
import fetchFingerprint from "../../stores/AuthenticationStore.tsx";
import ME from "../../Constants.tsx";
import { NotificationSettingsUpdateType as closure_6 } from "../notifications/NotificationConstants.tsx";

require = fn;
({ AnalyticsSections: c4, AnalyticEvents: c5 } = ME);
let result = require("obj132").fileFinishedImporting("modules/reactions/ReactionUtils.tsx");

export const MAX_REACTIONS = 20;
export const getReactionEmojiName = function getReactionEmojiName(emoji) {
  if (null == emoji.id) {
    let result = parseRawEmojiObjectDefault.convertSurrogateToName(emoji.name);
  } else {
    const _HermesInternal = HermesInternal;
    result = ":" + emoji.name + ":";
  }
  return result;
};
export const getAccessibleEmojiDisplayName = function getAccessibleEmojiDisplayName(me, count, emoji, arg3) {
  const t = getSystemLocale.t;
  if (arg3) {
    if (me) {
      let i9DXqM = t.i9DXqM;
    } else {
      i9DXqM = t["Z/l+qu"];
    }
  } else {
    if (me) {
      let PirBBE = t.CLuzw5;
      let tmp5 = require;
    } else {
      PirBBE = t.PirBBE;
      tmp5 = require;
    }
    const intl = tmp5(1236).intl;
    const obj = { reactions: null, emojiName: null };
    obj[0] = count;
    if (null == emoji.id) {
      let str2 = parseRawEmojiObjectDefault.convertSurrogateToName(emoji.name);
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
export const isMeReaction = function isMeReaction(me, me_burst, arg2) {
  let tmp3 = arg2 === ReactionTypes.ReactionTypes.BURST;
  if (tmp3) {
    tmp3 = true === me_burst;
  }
  if (!tmp3) {
    let tmp5 = arg2 === ReactionTypes.ReactionTypes.NORMAL;
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
  } else if (typeof emojiId === "number") {
  } else {
    const _String = String;
    const tmp2 = "0" !== String(emojiId);
  }
};
export const emojiEquals = function emojiEquals(emoji, closure_0) {
  if (null != _require.id) {
    if (null != emoji.id) {
      const _HermesInternal = HermesInternal;
      let id = "" + emoji.id;
    } else {
      id = emoji.id;
    }
    const _HermesInternal2 = HermesInternal;
    return "" + _require.id === id;
  } else {
    return null == emoji.id && _require.name === emoji.name;
  }
};
export const getBurstAnalyticsSection = function getBurstAnalyticsSection(isThread) {
  if (isThread.isThread()) {
    let FORUM_CHANNEL_TEXT_AREA = constants.THREAD_TEXT_AREA;
  } else if (isThread.isForumPost()) {
    FORUM_CHANNEL_TEXT_AREA = constants.FORUM_CHANNEL_TEXT_AREA;
  } else {
    FORUM_CHANNEL_TEXT_AREA = isThread.isGuildVocal() ? constants.TEXT_IN_VOICE : constants.CHANNEL_TEXT_AREA;
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
  const ReactionNotifications = explicitContentFromProto.ReactionNotifications;
  ReactionNotifications.updateSetting(NumberResult);
  const obj = { update_type: constants3.ACCOUNT, reaction_notifications: NumberResult, reaction_notifications_old: setting };
  obj.track(constants2.NOTIFICATION_SETTINGS_UPDATED, obj);
};