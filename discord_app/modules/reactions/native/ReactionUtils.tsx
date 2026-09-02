// === Module 11112: handleOutOfSuperReactions ===

// Module 11112 (handleOutOfSuperReactions)
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import getPremiumPlanItem from "getPremiumPlanItem" /* 4139 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4445 */;
import collectGuildAnalyticsMetadataDefault from "collectGuildAnalyticsMetadata" /* 4700 */;
import setDefault from "set" /* 4857 */;
import registerAssetDefault from "registerAsset" /* 11126 */;
import registerAssetDefault2 from "registerAsset" /* 11127 */;
import closure_3 from "ensureGuildLoaded" /* 1386 */;
import closure_4 from "reinjectEphemerals" /* 4735 */;
import closure_5 from "handleConnectionOpen" /* 4299 */;
import closure_6 from "mergeGuildAvatar" /* 1921 */;
import ME from "ME" /* 673 */;
import { EmojiIntention } from "set" /* 1924 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
({ AnalyticEvents: error, AnalyticsPages: closure_8, AnalyticsSections: c9 } = ME);
let obj = {};
obj[require("ReactionTypes").ReactionTypes.NORMAL] = registerAssetDefault;
obj[require("ReactionTypes").ReactionTypes.BURST] = registerAssetDefault2;
obj = {};
obj[require("ReactionTypes").ReactionTypes.NORMAL] = require("ReactionIcon").ReactionIcon;
obj[require("ReactionTypes").ReactionTypes.BURST] = require("SuperReactionIcon").SuperReactionIcon;
let result = require("set").fileFinishedImporting("modules/reactions/native/ReactionUtils.tsx");

export const handleOutOfSuperReactions = function handleOutOfSuperReactions(arg0) {
  const currentUser = authStore.getCurrentUser();
  if (null != currentUser) {
    let obj = getPremiumPlanItem;
    let openLazyResult;
    if (!obj.isPremium(currentUser)) {
      obj = { onDismiss: null };
      obj[0] = arg0;
      openLazyResult = ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(9128, dependencyMap.paths), "SuperReactionUpsellActionSheet", obj);
      const obj2 = ACTION_SHEET_HEIGHT_HALFDefault;
    }
    return openLazyResult;
  }
};
export const handleAddNewReactions = function handleAddNewReactions(channel, id, MESSAGE, burst) {
  const _require = channel;
  importDefault = id;
  if (MESSAGE === undefined) {
    MESSAGE = _require(MESSAGE[10]).ReactionLocations.MESSAGE;
  }
  if (burst != null) {
    burst = burst.burst;
  }
  let tmp10Result = authStore;
  const currentUser = authStore.getCurrentUser();
  if (null != currentUser) {
    let ReactionTypes = MESSAGE;
    const isPremiumResult = _require(MESSAGE[11]).isPremium(currentUser);
    let tmp4 = tmp12;
    if (true === burst) {
      tmp4 = !isPremiumResult;
    }
    if (tmp4) {
      const currentUser1 = tmp10Result.getCurrentUser();
      if (null != currentUser1) {
        let tmp13Result = tmp13(ReactionTypes[11]);
        if (!tmp13Result.isPremium(currentUser1)) {
          importDefault(ReactionTypes[12]).openLazy(tmp13(ReactionTypes[14])(ReactionTypes[13], ReactionTypes.paths), "SuperReactionUpsellActionSheet", { onDismiss: "r" });
          const obj3 = importDefault(ReactionTypes[12]);
        }
      }
    }
    tmp13Result = tmp13(ReactionTypes[15]);
    const bestActiveInputForChannelId = tmp13Result.getBestActiveInputForChannelId(channel.id);
    if (bestActiveInputForChannelId != null) {
      bestActiveInputForChannelId.closeCustomKeyboard();
    }
    _require(ReactionTypes[16]);
    tmp10Result = { onPressEmoji: null, channel: null, pickerIntention: null, reactionType: null, analyticsObject: null, messageId: null };
    tmp10Result[0] = function onPressEmoji(byName, burst) {
      id = channel.id;
      const obj = { burst };
      if (null != byName) {
        const toReactionEmojiResult = channel(MESSAGE[7]).toReactionEmoji(byName);
        if (!obj.burst) {
          let tmp3Result = tmp3(tmp4[8]);
          const result = tmp3Result.triggerHapticFeedback(id(tmp4[9]).IMPACT_LIGHT);
        }
        tmp3Result = tmp3(tmp4[10]);
        tmp3Result.addReaction(id, tmp, toReactionEmojiResult, tmp2, obj);
        const obj2 = channel(MESSAGE[7]);
      }
    };
    tmp10Result[1] = channel;
    tmp10Result[2] = EmojiIntention.REACTION;
    if (true !== burst) {
      tmp10Result[3] = tmp13(ReactionTypes[17]).ReactionTypes.NORMAL;
      tmp10Result[4] = MESSAGE;
      tmp10Result[5] = id;
      tmp10Result = tmp10(tmp10Result);
    }
    ReactionTypes = tmp13(ReactionTypes[17]).ReactionTypes;
    const BURST = ReactionTypes.BURST;
    const obj7 = _require(MESSAGE[11]);
  }
};
export const handleViewReactions = function handleViewReactions(isPoll) {
  ({ messageId, channelId, location: _location } = isPoll);
  if (_location === undefined) {
    _location = {};
  }
  isPoll = isPoll.isPoll;
  const merged = Object.assign(isPoll, Object.create(null));
  channel = channel.getChannel(channelId);
  let isPrivateResult;
  if (channel != null) {
    isPrivateResult = channel.isPrivate();
  }
  let isForumLikeChannelResult;
  if (channel != null) {
    isForumLikeChannelResult = channel.isForumLikeChannel();
  }
  if (!isForumLikeChannelResult) {
    let isForumPostResult;
    if (channel != null) {
      isForumPostResult = channel.isForumPost();
    }
    if (!isForumPostResult) {
      let FORUM_CHANNEL_POST = constants2.CHANNEL;
    }
    if (isPoll == null) {
      message = message.getMessage(channelId, messageId);
      let isPollResult;
      if (message != null) {
        isPollResult = message.isPoll();
      }
      isPoll = true === isPollResult;
    }
    let obj = { guild_id: null, channel_id: null, location_message_id: null, location_message_is_poll: null, location: null };
    obj[0] = guildId.getGuildId();
    obj[1] = channelId;
    obj[2] = messageId;
    obj[3] = isPoll;
    obj = { page: null, section: null };
    obj[0] = tmp4;
    obj[1] = FORUM_CHANNEL_POST;
    const merged1 = Object.assign(_location);
    obj[4] = obj;
    collectGuildAnalyticsMetadataDefault.trackWithMetadata(constants.REACTION_ACTION_SHEET_OPENED, obj);
    const obj3 = collectGuildAnalyticsMetadataDefault;
    obj1 = { messageId: null, channelId: null, emoji: null };
    obj1[0] = messageId;
    obj1[1] = channelId;
    obj1[2] = isPoll.emoji;
    const obj6 = ACTION_SHEET_HEIGHT_HALFDefault;
    const merged2 = Object.assign(merged);
    obj6.openLazy(asyncRequireImpl(11113, dependencyMap.paths), "MessageReactions", obj1);
  }
  FORUM_CHANNEL_POST = constants2.FORUM_CHANNEL_POST;
};
export const handleViewPreviewReactions = function handleViewPreviewReactions(id2, id, emoji) {
  let obj = ACTION_SHEET_HEIGHT_HALFDefault;
  obj = { messageId: id2, channelId: id, emoji };
  obj.openLazy(asyncRequireImpl(11125, dependencyMap.paths), "MessagePreviewReactions", obj);
};
export const ADD_REACTION_ICONS = obj;
export const ADD_REACTION_ICON_COMPONENTS = obj;
export const handleRemoveAllReactions = function handleRemoveAllReactions(arg0, arg1) {
  const _require = arg0;
  importDefault = arg1;
  let obj = setDefault;
  obj = { title: null, children: null, cancelText: null, confirmText: null, onConfirm: null };
  const intl = _require(1233).intl;
  obj[0] = intl.string(_require(1233).t.ZbtGBm);
  obj = { variant: "text-md/normal", children: null };
  const intl2 = _require(1233).intl;
  obj[1] = intl2.string(_require(1233).t.VpjOCo);
  obj[1] = jsx(_require(4474).Text, { variant: "text-md/normal", children: null });
  const intl3 = _require(1233).intl;
  obj[2] = intl3.string(_require(1233).t["ETE/oC"]);
  const intl4 = _require(1233).intl;
  obj[3] = intl4.string(_require(1233).t.oyYWHE);
  obj[4] = function onConfirm() {
    return callback(closure_1_2[10]).removeAllReactions(callback, closure_1);
  };
  obj.show(obj);
};