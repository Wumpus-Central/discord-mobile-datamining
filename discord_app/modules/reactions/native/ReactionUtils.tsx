// === Module 11254: reactions/ReactionUtils ===

// Module 11254 (reactions/ReactionUtils)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ReactionUtils from "ReactionUtils" /* 4211 */;
import PremiumUtils from "PremiumUtils" /* 4218 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import HapticUtils from "HapticUtils" /* 4528 */;
import haptics_HapticFeedbackTypesDefault from "haptics/HapticFeedbackTypes" /* 4529 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 4740 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 4904 */;
import ReactionActionCreators from "ReactionActionCreators" /* 7764 */;
import _modDef11268 from "module_11268" /* 11268 */;
import _modDef11269 from "module_11269" /* 11269 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import MessageStore from "MessageStore" /* 4781 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4381 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
const Constants = fn(1074);
({ AnalyticEvents: closure_7, AnalyticsPages: closure_8, AnalyticsSections: closure_9 } = Constants);
const EmojiIntention = fn(1374).EmojiIntention;
const jsx = fn(21).jsx;
let obj = {};
obj[fn(7763).ReactionTypes.NORMAL] = _modDef11268;
obj[fn(7763).ReactionTypes.BURST] = _modDef11269;
obj = {};
obj[fn(7763).ReactionTypes.NORMAL] = fn(8757).ReactionIcon;
obj[fn(7763).ReactionTypes.BURST] = fn(9373).SuperReactionIcon;
const size = fn(2);
let result = size.fileFinishedImporting("modules/reactions/native/ReactionUtils.tsx");

export const handleOutOfSuperReactions = function handleOutOfSuperReactions(onDismiss) {
  const currentUser = UserStore.getCurrentUser();
  if (null != currentUser) {
    let obj = PremiumUtils;
    let openLazyResult;
    if (!obj.isPremium(currentUser)) {
      obj = { onDismiss };
      openLazyResult = ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11136, dependencyMap.paths), "SuperReactionUpsellActionSheet", obj);
    }
    return openLazyResult;
  }
};
export const handleAddNewReactions = function handleAddNewReactions(channel, id) {
  _require = channel;
  importDefault = id;
  if (MESSAGE === undefined) {
    MESSAGE = require("ReactionActionCreators").ReactionLocations.MESSAGE;
  }
  if (burst != null) {
    burst = burst.burst;
  }
  let tmp10Result = UserStore;
  const currentUser = UserStore.getCurrentUser();
  if (null != currentUser) {
    let ReactionTypes = MESSAGE;
    const obj7 = require("PremiumUtils");
    let tmp4 = tmp12;
    if (true === burst) {
      tmp4 = !isPremiumResult;
    }
    if (tmp4) {
      const currentUser1 = tmp10Result.getCurrentUser();
      if (null != currentUser1) {
        let tmp13Result = tmp13(ReactionTypes[11]);
        if (!tmp13Result.isPremium(currentUser1)) {
          require("ActionSheetActionCreators").openLazy(tmp13(ReactionTypes[14])(ReactionTypes[13], ReactionTypes.paths), "SuperReactionUpsellActionSheet", { onDismiss: "Array" });
          const obj3 = require("ActionSheetActionCreators");
        }
      }
    }
    tmp13Result = tmp13(ReactionTypes[15]);
    const bestActiveInputForChannelId = tmp13Result.getBestActiveInputForChannelId(channel.id);
    if (bestActiveInputForChannelId != null) {
      bestActiveInputForChannelId.closeCustomKeyboard();
    }
    require("openEmojiPickerActionSheet");
    tmp10Result = {
      onPressEmoji(byName, burst) {
          id = id.id;
          const obj = { burst };
          if (null != byName) {
            const toReactionEmojiResult = ReactionUtils.toReactionEmoji(byName);
            if (!obj.burst) {
              let tmp3Result = HapticUtils;
              const result = tmp3Result.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
            }
            tmp3Result = ReactionActionCreators;
            tmp3Result.addReaction(id, closure_1, toReactionEmojiResult, MESSAGE, obj);
          }
        },
      channel,
      pickerIntention: EmojiIntention.REACTION,
      reactionType: null,
      analyticsObject: null,
      messageId: null
    };
    if (true !== burst) {
      tmp10Result.reactionType = tmp13(ReactionTypes[17]).ReactionTypes.NORMAL;
      tmp10Result.analyticsObject = MESSAGE;
      tmp10Result.messageId = id;
      tmp10Result = tmp10(tmp10Result);
    }
    ReactionTypes = tmp13(ReactionTypes[17]).ReactionTypes;
    const BURST = ReactionTypes.BURST;
    isPremiumResult = require("PremiumUtils").isPremium(currentUser);
  }
};
export const handleViewReactions = function handleViewReactions(isPoll) {
  ({ messageId, channelId, location: _location } = isPoll);
  if (_location === undefined) {
    _location = {};
  }
  isPoll = isPoll.isPoll;
  const merged = Object.assign(isPoll, Object.assign({ messageId: 0, channelId: 0, location: 0, isPoll: 0, emoji: 0 }));
  const channel = ChannelStore.getChannel(channelId);
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
      const message = MessageStore.getMessage(channelId, messageId);
      let isPollResult;
      if (message != null) {
        isPollResult = message.isPoll();
      }
      isPoll = true === isPollResult;
    }
    let obj = { guild_id: SelectedGuildStore.getGuildId(), channel_id: channelId, location_message_id: messageId, location_message_is_poll: isPoll, location: null };
    obj = { page: tmp4, section: FORUM_CHANNEL_POST };
    const merged1 = Object.assign(_location);
    obj.location = obj;
    AppAnalyticsUtilsDefault.trackWithMetadata(constants.REACTION_ACTION_SHEET_OPENED, obj);
    const obj1 = { messageId, channelId, emoji: isPoll.emoji };
    const obj6 = ActionSheetActionCreatorsDefault;
    const merged2 = Object.assign(merged);
    obj6.openLazy(asyncRequireImpl(11255, dependencyMap.paths), "MessageReactions", obj1);
    const tmp19 = asyncRequireImpl(11255, dependencyMap.paths);
  }
  FORUM_CHANNEL_POST = constants2.FORUM_CHANNEL_POST;
  tmp4 = isPrivateResult ? React6.DM_CHANNEL : React6.GUILD_CHANNEL;
};
export const handleViewPreviewReactions = function handleViewPreviewReactions(id2, id, emoji) {
  const obj = { messageId: id2, channelId: id, emoji };
  obj.openLazy(asyncRequireImpl(11267, dependencyMap.paths), "MessagePreviewReactions", obj);
};
export const ADD_REACTION_ICONS = obj;
export const ADD_REACTION_ICON_COMPONENTS = obj;
export const handleRemoveAllReactions = function handleRemoveAllReactions(arg0, arg1) {
  _require = arg0;
  importDefault = arg1;
  let obj = { title: null, children: null, cancelText: null, confirmText: null, onConfirm: null };
  const intl = require("util").intl;
  obj.title = intl.string(require("util").t.ZbtGBm);
  obj = { variant: "text-md/normal", children: null };
  const intl2 = require("util").intl;
  obj.children = intl2.string(require("util").t.VpjOCo);
  obj.children = jsx(require("Text/Text").Text, { variant: "text-md/normal", children: null });
  const intl3 = require("util").intl;
  obj.cancelText = intl3.string(require("util").t["ETE/oC"]);
  const intl4 = require("util").intl;
  obj.confirmText = intl4.string(require("util").t.oyYWHE);
  obj.onConfirm = function onConfirm() {
    return ReactionActionCreators.removeAllReactions(closure_0, closure_1);
  };
  obj.show(obj);
};