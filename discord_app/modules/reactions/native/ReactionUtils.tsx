// === Module 11606: reactions/ReactionUtils ===

// Module 11606 (reactions/ReactionUtils)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ReactionUtils from "ReactionUtils" /* 4476 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4796 */;
import HapticUtils from "HapticUtils" /* 4797 */;
import haptics_HapticFeedbackTypesDefault from "haptics/HapticFeedbackTypes" /* 4798 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 5009 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5195 */;
import ReactionActionCreators from "ReactionActionCreators" /* 8093 */;
import _modDef11620 from "module_11620" /* 11620 */;
import _modDef11621 from "module_11621" /* 11621 */;
import ChannelStore from "ChannelStore" /* 2044 */;
import MessageStore from "MessageStore" /* 5049 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4650 */;
import UserStore from "UserStore" /* 1372 */;

const require = globalThis.__r;

require = fn;
const Constants = fn(1074);
({ AnalyticEvents: closure_7, AnalyticsPages: closure_8, AnalyticsSections: closure_9 } = Constants);
const EmojiIntention = fn(1375).EmojiIntention;
const jsx = fn(21).jsx;
let obj = {};
obj[fn(8092).ReactionTypes.NORMAL] = _modDef11620;
obj[fn(8092).ReactionTypes.BURST] = _modDef11621;
let obj2 = {};
obj2[fn(8092).ReactionTypes.NORMAL] = fn(9117).ReactionIcon;
obj2[fn(8092).ReactionTypes.BURST] = fn(9570).SuperReactionIcon;
const size = fn(2);
let result = size.fileFinishedImporting("modules/reactions/native/ReactionUtils.tsx");

export const handleOutOfSuperReactions = function handleOutOfSuperReactions(onDismiss) {
  const currentUser = UserStore.getCurrentUser();
  if (null != currentUser) {
    let openLazyResult;
    if (!obj.isPremium(currentUser)) {
      const obj3 = { onDismiss };
      openLazyResult = ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11489, dependencyMap.paths), "SuperReactionUpsellActionSheet", obj3);
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
  const currentUser = UserStore.getCurrentUser();
  if (null != currentUser) {
    let ReactionTypes = MESSAGE;
    const obj7 = require("PremiumUtils");
    let tmp4 = tmp12;
    if (true === burst) {
      tmp4 = !isPremiumResult;
    }
    if (tmp4) {
      const currentUser1 = UserStore.getCurrentUser();
      if (null != currentUser1) {
        if (!tmp13Result.isPremium(currentUser1)) {
          require("ActionSheetActionCreators").openLazy(tmp13(ReactionTypes[14])(ReactionTypes[13], ReactionTypes.paths), "SuperReactionUpsellActionSheet", { onDismiss: "r" });
          const obj3 = require("ActionSheetActionCreators");
        }
        tmp13Result = tmp13(ReactionTypes[11]);
      }
    }
    isPremiumResult = require("PremiumUtils").isPremium(currentUser);
    const bestActiveInputForChannelId = require("ChatInputUtils").getBestActiveInputForChannelId(channel.id);
    if (bestActiveInputForChannelId != null) {
      bestActiveInputForChannelId.closeCustomKeyboard();
    }
    require("openEmojiPickerActionSheet");
    let obj2 = {
      onPressEmoji(byName, burst) {
          id = id.id;
          const obj = { burst };
          if (null != byName) {
            const toReactionEmojiResult = ReactionUtils.toReactionEmoji(byName);
            if (!obj.burst) {
              const result = HapticUtils.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
              const tmp3Result = HapticUtils;
            }
            const tmp3Result2 = ReactionActionCreators;
            tmp3Result2.addReaction(id, closure_1, toReactionEmojiResult, MESSAGE, obj);
          }
        },
      channel,
      pickerIntention: EmojiIntention.REACTION,
      reactionType: null,
      analyticsObject: null,
      messageId: null
    };
    if (true !== burst) {
      obj2.reactionType = tmp13(ReactionTypes[17]).ReactionTypes.NORMAL;
      obj2.analyticsObject = MESSAGE;
      obj2.messageId = id;
      obj2 = tmp10(obj2);
    }
    ReactionTypes = tmp13(ReactionTypes[17]).ReactionTypes;
    const BURST = ReactionTypes.BURST;
    const tmp13Result3 = require("ChatInputUtils");
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
    const obj = { guild_id: SelectedGuildStore.getGuildId(), channel_id: channelId, location_message_id: messageId, location_message_is_poll: isPoll, location: null };
    const obj2 = { page: tmp4, section: FORUM_CHANNEL_POST };
    const merged1 = Object.assign(_location);
    obj.location = obj2;
    AppAnalyticsUtilsDefault.trackWithMetadata(constants.REACTION_ACTION_SHEET_OPENED, obj);
    const obj4 = { messageId, channelId, emoji: isPoll.emoji };
    const obj6 = ActionSheetActionCreatorsDefault;
    const merged2 = Object.assign(merged);
    obj6.openLazy(asyncRequireImpl(11607, dependencyMap.paths), "MessageReactions", obj4);
    const tmp19 = asyncRequireImpl(11607, dependencyMap.paths);
  }
  FORUM_CHANNEL_POST = constants2.FORUM_CHANNEL_POST;
  tmp4 = isPrivateResult ? React6.DM_CHANNEL : React6.GUILD_CHANNEL;
};
export const handleViewPreviewReactions = function handleViewPreviewReactions(id2, id, emoji) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11619, dependencyMap.paths), "MessagePreviewReactions", { messageId: id2, channelId: id, emoji });
};
export const ADD_REACTION_ICONS = obj;
export const ADD_REACTION_ICON_COMPONENTS = obj2;
export const handleRemoveAllReactions = function handleRemoveAllReactions(arg0, arg1) {
  _require = arg0;
  importDefault = arg1;
  const obj2 = { title: null, children: null, cancelText: null, confirmText: null, onConfirm: null };
  const intl = require("util").intl;
  obj2.title = intl.string(require("util").t.ZbtGBm);
  const obj3 = { variant: "text-md/normal", children: null };
  const intl2 = require("util").intl;
  obj3.children = intl2.string(require("util").t.VpjOCo);
  obj2.children = jsx(require("Text/Text").Text, { variant: "text-md/normal", children: null });
  const intl3 = require("util").intl;
  obj2.cancelText = intl3.string(require("util").t["ETE/oC"]);
  const intl4 = require("util").intl;
  obj2.confirmText = intl4.string(require("util").t.oyYWHE);
  obj2.onConfirm = function onConfirm() {
    return ReactionActionCreators.removeAllReactions(closure_0, closure_1);
  };
  AlertActionCreatorsDefault.show(obj2);
};