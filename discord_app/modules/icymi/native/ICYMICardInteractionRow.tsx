// === Module 16499: ICYMICardInteractionRow ===

// Module 16499 (ICYMICardInteractionRow)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import PlatformUtils from "PlatformUtils" /* 1115 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1396 */;
import ReactionUtils from "ReactionUtils" /* 4211 */;
import ColorUtils from "ColorUtils" /* 4409 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 4573 */;
import Pressables from "Pressables" /* 5123 */;
import MessageActionCreatorsDefault from "MessageActionCreators" /* 7456 */;
import MessageReactionsTypes from "MessageReactionsTypes" /* 7763 */;
import ReactionActionCreators from "ReactionActionCreators" /* 7764 */;
import canAddNewReactionsDefault from "canAddNewReactions" /* 7971 */;
import ICYMIActionCreatorsDefault from "ICYMIActionCreators" /* 8351 */;
import openEmojiPickerActionSheet from "openEmojiPickerActionSheet" /* 11121 */;
import messages_MessagesUtils from "messages/MessagesUtils" /* 11252 */;
import PendingReplyActionCreators from "PendingReplyActionCreators" /* 11669 */;
import ForwardModalUtils from "ForwardModalUtils" /* 11680 */;
import ForwardingIconDefault from "ForwardingIcon" /* 11688 */;
import ArrowAngleLeftUpIcon from "ArrowAngleLeftUpIcon" /* 11734 */;
import ICYMIShared from "ICYMIShared" /* 16491 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ThreadMessageStore from "ThreadMessageStore" /* 7306 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import GuildVerificationStore from "GuildVerificationStore" /* 5413 */;
import PermissionStore from "PermissionStore" /* 4199 */;

require = fn;
function AddEmojiButton(channel) {
  channel = channel.channel;
  const onPressEmoji = channel.onPressEmoji;
  ({ showText, disabled, handleItemInteracted } = channel);
  const tmp = closure_20();
  const items = [channel, onPressEmoji, handleItemInteracted];
  const callback = noop.useCallback(() => {
    handleItemInteracted("press_reaction_picker", { actionGestureType: "press", actionTargetElement: "reaction_picker_button", actionIntentType: "open", actionDestinationType: null });
    const obj = { pickerIntention: EmojiIntention.REACTION, autoFocus: false, startExpanded: false, onPressEmoji, channel, guildId: null };
    let guild_id;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    obj.guildId = guild_id;
    const result = obj.openEmojiPickerActionSheet(obj);
  }, items);
  let obj = { onPress: callback, style: null, accessible: true, accessibilityLabel: null, disabled: null, children: null };
  const items1 = [, , ];
  ({ emojiContainer: arr2[0], addEmojiContainer: arr2[1] } = tmp);
  disabled = null;
  if (disabled) {
    disabled = tmp.disabled;
  }
  items1[2] = disabled;
  obj.style = items1;
  const intl = tmp4(handleItemInteracted[21]).intl;
  obj.accessibilityLabel = intl.string(channel(handleItemInteracted[21]).t.lfIHs4);
  obj.disabled = disabled;
  const items2 = [closure_16(channel(handleItemInteracted[22]).ReactionIcon, { size: "sm" }), ];
  if (showText) {
    obj = { variant: "text-sm/semibold", color: "redesign-button-tertiary-text", children: null };
    const intl2 = tmp4(handleItemInteracted[21]).intl;
    obj.children = intl2.string(tmp4(handleItemInteracted[21]).t.m9O1gd);
    showText = closure_16(tmp4(handleItemInteracted[23]).Text, obj);
  }
  items2[1] = showText;
  obj.children = items2;
  return closure_17(channel(handleItemInteracted[20]).PressableOpacity, obj);
}
function EmojiReaction(count) {
  const messageId = count.messageId;
  const channel = count.channel;
  const reaction = count.reaction;
  const isBurstReaction = count.isBurstReaction;
  const handleItemInteracted = count.handleItemInteracted;
  let emoji;
  const tmp = closure_20();
  let obj = messageId(reaction[24]);
  let burst_colors = reaction.burst_colors;
  if (burst_colors == null) {
    burst_colors = [];
  }
  const emojiColorPalette = obj.useEmojiColorPalette(burst_colors);
  let str = "";
  if (null != emojiColorPalette) {
    let tmp2Result = tmp2(tmp3[25]);
    let backgroundColor;
    if (emojiColorPalette != null) {
      backgroundColor = emojiColorPalette.backgroundColor;
    }
    let num;
    if (emojiColorPalette != null) {
      num = emojiColorPalette.opacity;
    }
    if (num == null) {
      num = 0.15;
    }
    let str2 = tmp2Result.hex2rgb(backgroundColor, num);
    if (str2 == null) {
      str2 = "";
    }
    str = str2;
  }
  obj = { backgroundColor: str, borderColor: null };
  let backgroundColor1;
  if (emojiColorPalette != null) {
    backgroundColor1 = emojiColorPalette.backgroundColor;
  }
  obj.borderColor = backgroundColor1;
  let accentColor;
  if (emojiColorPalette != null) {
    accentColor = emojiColorPalette.accentColor;
  }
  let tmp8 = null;
  if (null != accentColor) {
    obj = { color: emojiColorPalette.accentColor };
    tmp8 = obj;
  }
  emoji = reaction.emoji;
  let selectedInnerTextContainer = isBurstReaction ? reaction.me_burst : reaction.me;
  let selected;
  if (selectedInnerTextContainer) {
    selected = tmp.selected;
  }
  tmp2Result = tmp2(tmp3[16]);
  const items = [GuildVerificationStore];
  const items1 = [emoji];
  const stateFromStores = tmp2Result.useStateFromStores(items, () => {
    let canChatInGuildResult = null != channel.guild_id;
    if (canChatInGuildResult) {
      canChatInGuildResult = GuildVerificationStore.canChatInGuild(tmp.guild_id);
    }
    return canChatInGuildResult;
  });
  const items2 = [channel, isBurstReaction, messageId, reaction, handleItemInteracted];
  const memo = handleItemInteracted.useMemo(() => {
    let tmp2;
    if (null != emoji.id) {
      let obj = { uri: null };
      obj = { id: null, animated: null, size: 48 };
      ({ id: obj3.id, animated: obj3.animated } = emoji);
      obj.uri = AvatarUtilsDefault.getEmojiURL(obj);
      tmp2 = obj;
    }
    return tmp2;
  }, items1);
  const callback = handleItemInteracted.useCallback(() => {
    handleItemInteracted("press_reaction", { actionGestureType: "press", actionTargetElement: "toggle_existing_reaction_button", actionIntentType: "react", actionDestinationType: null });
    const result = messages_MessagesUtils.handleAddOrRemoveReaction(messageId, channel, reaction, isBurstReaction, ReactionActionCreators.ReactionLocations.MESSAGE);
  }, items2);
  const items3 = [tmp.emojiContainer, selected, ];
  let tmp14 = isBurstReaction;
  if (isBurstReaction) {
    tmp14 = obj;
  }
  const obj1 = { style: items3, onPress: callback, accessible: true, accessibilityLabel: emoji.name, disabled: !stateFromStores, children: null };
  items3[2] = tmp14;
  const items4 = [tmp.innerEmojiContainer, ];
  let selectedInnerEmojiContainer = selectedInnerTextContainer;
  if (selectedInnerTextContainer) {
    selectedInnerEmojiContainer = tmp.selectedInnerEmojiContainer;
  }
  let obj2 = { style: items4, children: null };
  items4[1] = selectedInnerEmojiContainer;
  if (null == emoji.id) {
    const obj3 = { variant: "text-md/medium", color: "interactive-text-default", style: null, allowFontScaling: false, children: null };
    const items5 = [, ];
    ({ defaultEmoji: arr8[0], emojiText: arr8[1] } = tmp);
    obj3.style = items5;
    obj3.children = emoji.name;
    let tmp15Result = closure_16(tmp2(tmp3[23]).Text, obj3);
  } else {
    if (tmp2Result1.isAndroid()) {
      const obj4 = { style: null, source: null };
      const items6 = [, ];
      ({ defaultEmoji: arr7[0], emojiImage: arr7[1] } = tmp);
      obj4.style = items6;
      obj4.source = memo;
      tmp15Result = closure_16(closure_6, obj4);
    } else {
      const obj5 = { emoji, size: v20, style: tmp.defaultEmoji, animate: true };
      tmp15Result = closure_16(channel(tmp3[28]), obj5);
    }
    tmp2Result1 = tmp2(tmp3[14]);
  }
  obj2.children = tmp15Result;
  const items7 = [closure_16(emoji, obj2), ];
  const items8 = [tmp.innerTextContainer, ];
  if (selectedInnerTextContainer) {
    selectedInnerTextContainer = tmp.selectedInnerTextContainer;
  }
  const obj6 = { style: items8, children: null };
  items8[1] = selectedInnerTextContainer;
  const obj7 = { animate: true, count: count.count, textStyle: null, textVariant: "text-md/semibold" };
  let tmp22 = null;
  if (isBurstReaction) {
    tmp22 = tmp8;
  }
  obj7.textStyle = tmp22;
  obj6.children = closure_16(channel(reaction[29]), obj7);
  items7[1] = closure_16(emoji, obj6);
  obj1.children = items7;
  return closure_17(messageId(reaction[20]).PressableOpacity, obj1);
}
function ForwardButton(disabled) {
  disabled = disabled.disabled;
  const tmp = closure_20();
  const obj = { onPress: disabled.onPress, style: null, accessible: true, disabled: null, accessibilityLabel: null, children: null };
  const items = [, , ];
  ({ emojiContainer: arr[0], addEmojiContainer: arr[1] } = tmp);
  disabled = null;
  if (disabled) {
    disabled = tmp.disabled;
  }
  items[2] = disabled;
  obj.style = items;
  obj.disabled = disabled;
  const intl = util.intl;
  obj.accessibilityLabel = intl.string(util.t.xIUfJS);
  obj.children = value2(ForwardingIconDefault, { size: "sm" });
  return value2(Pressables.PressableOpacity, obj);
}
function ReplyButton(disabled) {
  disabled = disabled.disabled;
  const tmp = closure_20();
  const obj = { onPress: disabled.onPress, style: null, accessible: true, disabled: null, accessibilityLabel: null, children: null };
  const items = [, , ];
  ({ emojiContainer: arr[0], addEmojiContainer: arr[1] } = tmp);
  disabled = null;
  if (disabled) {
    disabled = tmp.disabled;
  }
  items[2] = disabled;
  obj.style = items;
  obj.disabled = disabled;
  const intl = util.intl;
  obj.accessibilityLabel = intl.string(util.t["5NwaNY"]);
  obj.children = value2(ArrowAngleLeftUpIcon.ArrowAngleLeftUpIcon, { size: "sm" });
  return value2(Pressables.PressableOpacity, obj);
}
function ThreadAsCommentsButton(parentMessage) {
  parentMessage = parentMessage.parentMessage;
  const threadData = parentMessage.threadData;
  ({ style, handleItemInteracted } = parentMessage);
  const tmp = closure_20();
  let obj = parentMessage(handleItemInteracted[16]);
  const items = [PermissionStore];
  const items1 = [parentMessage, threadData.thread, handleItemInteracted];
  const stateFromStores = obj.useStateFromStores(items, () => PermissionStore.canWithPartialContext(constants2.VIEW_CHANNEL, { channelId: parentMessage.id }));
  const callback = noop.useCallback(() => {
    handleItemInteracted("press_comments", { actionGestureType: "press", actionTargetElement: "thread_comments_button", actionIntentType: "navigate", actionDestinationType: "channel" });
    let tmp2 = null != parentMessage;
    if (tmp2) {
      tmp2 = null != threadData.thread;
    }
    if (tmp2) {
      ICYMIShared.navigateToPost(parentMessage.getChannelId(), threadData.thread.guild_id, parentMessage.id);
    }
  }, items1);
  if (stateFromStores) {
    if (0 !== threadData.messageCount) {
      if (null != threadData.thread) {
        if (null != threadData.mostRecentMessage) {
          let str = "9+";
          if (threadData.messageCount <= 9) {
            str = threadData.messageCount;
          }
          obj = { style: null, onPress: null, children: null };
          const items2 = [tmp.comments, style];
          obj.style = items2;
          obj.onPress = callback;
          obj = { style: tmp.commentCount, children: null };
          const obj1 = { style: tmp.commentsIcon };
          const items3 = [closure_16(tmp2(handleItemInteracted[33]).ChatIcon, obj1), ];
          let obj2 = { variant: "text-md/semibold", color: "text-strong", children: str };
          items3[1] = closure_16(tmp2(handleItemInteracted[23]).Text, obj2);
          obj.children = items3;
          obj.children = closure_17(closure_5, obj);
          return closure_16(tmp2(handleItemInteracted[20]).PressableHighlight, obj);
        }
      }
      const obj3 = { style: null, onPress: null, children: null };
      const items4 = [tmp.comments, style];
      obj3.style = items4;
      obj3.onPress = callback;
      const obj4 = { style: tmp.commentCount, children: null };
      const obj5 = { style: tmp.commentsIcon };
      obj4.children = closure_16(tmp2(handleItemInteracted[33]).ChatIcon, obj5);
      obj3.children = closure_16(closure_5, obj4);
      return closure_16(tmp2(handleItemInteracted[20]).PressableHighlight, obj3);
    }
  }
  return null;
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, Image: metroRequire, ScrollView: closure_7 } = get_ActivityIndicator);
const Constants = fn(1074);
({ MessageFlags: closure_12, Permissions: map1, HorizontalGradient: closure_14 } = Constants);
const EmojiIntention = fn(1374).EmojiIntention;
const jsxProd = fn(21);
({ jsx: closure_16, jsxs: closure_17, Fragment: closure_18 } = jsxProd);
let c19 = 20;
const createStyles = fn(4560);
let closure_20 = createStyles.createStyles(() => {
  let obj = { container: { flexDirection: "row", alignItems: "center", flexWrap: "wrap", justifyContent: "space-between" }, replyForwardButtonContainer: { flexDirection: "row", alignItems: "center", flexWrap: "wrap", gap: 6 }, emojisRowContainer: { position: "relative", flexDirection: "row", alignItems: "center", flexWrap: "wrap", gap: 6 }, emojisContainer: { position: "relative", flexDirection: "row", alignItems: "center", flexWrap: "wrap", gap: 6 }, emojiContainer: null, innerEmojiContainer: null, selectedInnerEmojiContainer: null, addEmojiContainer: null, disabled: null, defaultEmoji: null, emojiText: null, selectedInnerTextContainer: null, innerTextContainer: null, emojiImage: null, selected: null, gradient: null, overflowChevron: null, comments: null, commentCount: null, commentsIcon: null };
  obj = { flexDirection: "row", backgroundColor: nativeDefault.colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND, borderRadius: nativeDefault.radii.sm, flexShrink: 3, paddingHorizontal: 8, gap: 6 };
  obj.emojiContainer = obj;
  obj.innerEmojiContainer = { paddingVertical: 5 };
  obj.selectedInnerEmojiContainer = { paddingVertical: 4 };
  obj.addEmojiContainer = { minHeight: 30, alignItems: "center" };
  obj.disabled = { opacity: 0.4 };
  const size = { width: v20, height: v20 };
  obj.defaultEmoji = size;
  let num = 16;
  if (!obj4.isAndroid()) {
    num = v20;
  }
  obj.emojiText = { lineHeight: num, fontSize: 16, textAlign: "center", paddingTop: 2 };
  obj.selectedInnerTextContainer = { paddingBottom: 3.5 };
  obj.innerTextContainer = { alignSelf: "flex-end", paddingBottom: 4.5 };
  obj.emojiImage = { resizeMode: "contain", width: v20, height: v20 };
  obj = { borderColor: nativeDefault.unsafe_rawColors.BRAND_560, borderWidth: 1, paddingHorizontal: 7, backgroundColor: null };
  obj4 = PlatformUtils;
  obj.backgroundColor = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.BRAND_500, 0.3);
  obj.selected = obj;
  obj.gradient = { position: "absolute", right: 0, top: 0, bottom: 0, width: 48 };
  obj.overflowChevron = { position: "absolute", right: 0 };
  const tmp4Result = ColorUtils;
  obj.comments = { paddingVertical: 6, paddingHorizontal: 8, backgroundColor: nativeDefault.colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND, borderRadius: nativeDefault.radii.sm, display: "flex", flexDirection: "row", alignItems: "center", gap: 8 };
  obj.commentCount = { display: "flex", flexDirection: "row", alignItems: "center", gap: 4, justifySelf: "end" };
  const size1 = { width: 20, height: 20, tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
  obj.commentsIcon = size1;
  return obj;
});
let size = fn(2);
let result = size.fileFinishedImporting("modules/icymi/native/ICYMICardInteractionRow.tsx");

export default function ICYMICardInteractionRow(message) {
  message = message.message;
  let channel = message.channel;
  ({ guild, hideAdditionalButtons } = message);
  if (hideAdditionalButtons === undefined) {
    hideAdditionalButtons = false;
  }
  let flag = message.isKeyMessage;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = message.inForum;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let str = message.backgroundVariant;
  if (str === undefined) {
    str = "primary";
  }
  const itemType = message.itemType;
  let memo;
  let canForwardMessage;
  let stateFromStores;
  let handleItemInteracted;
  c12 = undefined;
  let tmp = closure_20();
  closure_129_0 = guild;
  closure_129_1 = message;
  closure_129_2 = flag2;
  let threadData = message(hideAdditionalButtons[16]);
  let items = [canForwardMessage, memo];
  const stateFromStoresObject = threadData.useStateFromStoresObject(items, () => {
    if (null != channel) {
      if (null != message) {
        channel = ChannelStore.getChannel(tmp.id);
        if (channel == null) {
          channel = null;
        }
        let obj = { thread: channel, messageCount: null, mostRecentMessage: null };
        let num = ThreadMessageStore.getCount(tmp.id);
        if (num == null) {
          num = 0;
        }
        obj.messageCount = num;
        obj.mostRecentMessage = ThreadMessageStore.getMostRecentMessage(tmp.id);
      }
      return obj;
    }
    obj = { thread: null, messageCount: 0, mostRecentMessage: null };
  });
  let obj1 = str;
  let id;
  ({ thread, messageCount, mostRecentMessage } = stateFromStoresObject);
  if (guild != null) {
    id = guild.id;
  }
  const items1 = [id, flag2, message, guild];
  const effect = str.useEffect(() => {
    let obj = channel;
    let tmp = null != channel;
    if (tmp) {
      tmp = null != message;
    }
    if (tmp) {
      tmp = obj.hasFlag(constants.HAS_THREAD) || hideAdditionalButtons;
      const tmp4 = obj.hasFlag(constants.HAS_THREAD) || hideAdditionalButtons;
    }
    if (tmp) {
      tmp = null == ThreadMessageStore.getMostRecentMessage(obj.id);
    }
    if (tmp) {
      ChannelActionCreatorsDefault.preload(message.id, obj.id);
      obj = { channelId: null, isPreload: true, limit: 25 };
      obj.channelId = obj.id;
      const messages = MessageActionCreatorsDefault.fetchMessages(obj);
    }
  }, items1);
  threadData = { thread, messageCount, mostRecentMessage };
  const items2 = [message.reactions];
  memo = obj1.useMemo(() => {
    const items = [];
    const reactions = message.reactions;
    const item = reactions.forEach((me_vote) => {
      if (null == me_vote.me_vote) {
        if (me_vote.burst_count > 0) {
          let obj = {};
          const merged = Object.assign(me_vote);
          obj.type = message(hideAdditionalButtons[34]).ReactionTypes.BURST;
          items.push(obj);
        }
        if (me_vote.count > 0) {
          obj = {};
          const merged1 = Object.assign(me_vote);
          obj.type = message(hideAdditionalButtons[34]).ReactionTypes.NORMAL;
          items.push(obj);
        }
      }
    });
    return items;
  }, items2);
  const items3 = [channel];
  const memo1 = obj1.useMemo(() => {
    let tmp2 = null != channel;
    if (tmp2) {
      tmp2 = canAddNewReactionsDefault(tmp);
    }
    return tmp2;
  }, items3);
  let tmp2Result = tmp2(tmp3[36]);
  canForwardMessage = tmp2Result.useCanForwardMessage(message);
  tmp2Result = tmp2(tmp3[16]);
  const items4 = [handleItemInteracted];
  stateFromStores = tmp2Result.useStateFromStores(items4, () => PermissionStore.can(constants2.SEND_MESSAGES, channel));
  const items5 = [hideAdditionalButtons, threadData.messageCount, memo.length, stateFromStores, canForwardMessage];
  const memo2 = obj1.useMemo(() => {
    let num = 4;
    if (hideAdditionalButtons) {
      num = 6;
    }
    let diff = num;
    if (obj.messageCount > 0) {
      diff = num - 1;
    }
    let num3 = 0;
    if (memo.length > diff) {
      num3 = memo.length - diff;
    }
    obj = { hasOverflow: num3 > 0, showReplyForwardButtons: null, showThreadAsComments: null };
    let tmp5 = !hideAdditionalButtons;
    if (!hideAdditionalButtons) {
      let tmp6 = stateFromStores;
      if (!stateFromStores) {
        tmp6 = canForwardMessage;
      }
      tmp5 = tmp6;
    }
    obj.showReplyForwardButtons = tmp5;
    obj.showThreadAsComments = obj.messageCount > 0;
    return obj;
  }, items5);
  ({ hasOverflow, showReplyForwardButtons, showThreadAsComments } = memo2);
  const items6 = [id, itemType];
  handleItemInteracted = obj1.useCallback((open_profile, actionParameters) => {
    let obj = ICYMIActionCreatorsDefault;
    obj.itemInteracted(id, itemType, open_profile);
    obj = { itemId: id, itemType, actionParameters };
    ICYMIActionCreatorsDefault.feedItemActioned(obj);
  }, items6);
  const items7 = [channel.id, message.id, handleItemInteracted];
  const items8 = [message, handleItemInteracted];
  const callback1 = obj1.useCallback((byName, burst) => {
    callback("press_reaction", { actionGestureType: "press", actionTargetElement: "add_new_reaction_button", actionIntentType: "open", actionDestinationType: null });
    id = channel.id;
    const id2 = message.id;
    if (null != byName) {
      const obj2 = ReactionActionCreators;
      const obj = { burst };
      obj2.addReaction(id, id2, obj.toReactionEmoji(byName), ReactionActionCreators.ReactionLocations.MESSAGE, obj);
      const toReactionEmojiResult = obj.toReactionEmoji(byName);
    }
  }, items7);
  const items9 = [channel, message, handleItemInteracted];
  const callback2 = obj1.useCallback(() => {
    callback("press_forward", { actionGestureType: "press", actionTargetElement: "forward_button", actionIntentType: "share", actionDestinationType: "channel" });
    const obj = { message, source: "icymi-tab" };
    obj.openForwardModal(obj);
  }, items8);
  const items10 = [str, flag];
  const callback3 = obj1.useCallback(() => {
    callback("press_reply", { actionGestureType: "press", actionTargetElement: "reply_button", actionIntentType: "reply", actionDestinationType: "channel" });
    let obj = ICYMIShared;
    obj.navigateToPost(channel.id, channel.guild_id, message.id);
    obj = { channel, message, shouldMention: true, showMentionToggle: true };
    const pendingReply = PendingReplyActionCreators.createPendingReply(obj);
  }, items9);
  const memo3 = obj1.useMemo(() => {
    if (flag) {
      return nativeDefault.colors.MESSAGE_HIGHLIGHT_BACKGROUND_DEFAULT;
    } else if ("primary" === "primary") {
      return nativeDefault.colors.CARD_BACKGROUND_DEFAULT;
    } else if ("secondary" === tmp) {
      return nativeDefault.colors.CARD_SECONDARY_BG;
    } else if ("base" === tmp) {
      return nativeDefault.colors.BACKGROUND_BASE_LOW;
    }
  }, items10);
  const token = message(hideAdditionalButtons[40]).useToken(memo3);
  const tmp2Result1 = message(hideAdditionalButtons[40]);
  [tmp18, c12] = flag(obj1.useState(true), 2);
  [][0] = handleItemInteracted;
  const callback4 = obj1.useCallback((nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    _undefined(nativeEvent.contentOffset.x + nativeEvent.layoutMeasurement.width < nativeEvent.contentSize.width);
  }, []);
  if (0 !== memo.length) {
    threadData = { style: tmp.container, children: null };
    obj1 = { style: tmp.emojisRowContainer, children: null };
    if (memo.length > 0) {
      let obj2 = { style: null, children: null };
      const items11 = [tmp.emojisContainer];
      obj2.style = items11;
      let obj3 = { horizontal: true, scrollEnabled: hasOverflow, contentContainerStyle: { gap: 6 }, onScroll: callback4, onScrollEndDrag: tmp20, showsHorizontalScrollIndicator: false, children: null };
      let tmp25Result = !hideAdditionalButtons;
      if (!hideAdditionalButtons) {
        let tmp28 = showReplyForwardButtons;
        if (!showReplyForwardButtons) {
          tmp28 = showThreadAsComments;
        }
        tmp25Result = tmp28;
      }
      if (tmp25Result) {
        const obj4 = { style: tmp.replyForwardButtonContainer, children: null };
        if (showThreadAsComments) {
          const obj5 = { threadData, parentMessage: message, handleItemInteracted };
          showThreadAsComments = closure_16(ThreadAsCommentsButton, obj5);
        }
        const items12 = [showThreadAsComments, ];
        if (showReplyForwardButtons) {
          const obj6 = { children: null };
          const obj7 = { onPress: callback3, disabled: !stateFromStores };
          const items13 = [closure_16(ReplyButton, obj7), ];
          const obj8 = { onPress: callback2, disabled: !canForwardMessage };
          items13[1] = closure_16(ForwardButton, obj8);
          obj6.children = items13;
          showReplyForwardButtons = closure_17(closure_18, obj6);
        }
        items12[1] = showReplyForwardButtons;
        obj4.children = items12;
        tmp25Result = closure_17(tmp23, obj4);
      }
      const items14 = [
        tmp25Result,
        memo.map((reaction, index) => {
              let obj = { messageId: message.id, channel, reaction, count: null, isBurstReaction: null, handleItemInteracted };
              obj = { children: null, count: reaction.type === MessageReactionsTypes.ReactionTypes.BURST ? reaction.burst_count : reaction.count, isBurstReaction: reaction.type === MessageReactionsTypes.ReactionTypes.BURST };
              obj.children = value2(EmojiReaction, obj);
              return value2(hasOwnProperty, obj, "reaction-" + index);
            }),

      ];
      let tmp22Result = null;
      if (!hideAdditionalButtons) {
        tmp22Result = null;
        if (memo1) {
          const obj9 = { channel, onPressEmoji: callback1, handleItemInteracted };
          tmp22Result = closure_16(AddEmojiButton, obj9);
        }
      }
      items14[2] = tmp22Result;
      obj3.children = items14;
      const items15 = [closure_17(threadData, obj3), ];
      tmp25Result = null;
      if (hasOverflow) {
        tmp25Result = null;
        if (tmp18) {
          const obj10 = { children: null };
          const obj11 = { style: tmp.gradient, start: null, end: null, colors: null, locations: null };
          ({ START: obj18.start, END: obj18.end } = closure_14);
          const tmp38 = channel(tmp3[41]);
          const obj19 = channel(tmp3[42])(token);
          const items16 = [channel(tmp3[42])(token).alpha(0).hex(), token, token];
          obj11.colors = items16;
          obj11.locations = [0, 0.8, 1];
          const items17 = [closure_16(tmp38, obj11), ];
          const obj12 = { style: null, size: "xs", color: "icon-muted" };
          const items18 = [tmp.overflowChevron];
          obj12.style = items18;
          items17[1] = closure_16(tmp2(tmp3[43]).ChevronSmallRightIcon, obj12);
          obj10.children = items17;
          tmp25Result = closure_17(closure_18, obj10);
          const alphaResult = channel(tmp3[42])(token).alpha(0);
        }
      }
      items15[1] = tmp25Result;
      obj2.children = items15;
      let tmp25Result1 = closure_17(tmp23, obj2);
    } else {
      tmp25Result1 = null;
    }
    obj1.children = tmp25Result1;
    threadData.children = closure_16(id, obj1);
    tmp22Result = closure_16(tmp23, threadData);
  } else {
    tmp22Result = null;
  }
  return tmp22Result;
};
export const onAddReaction = function onAddReaction(arg0, arg1, byName, burst) {
  if (null != byName) {
    const obj2 = ReactionActionCreators;
    const obj = { burst };
    obj2.addReaction(arg0, arg1, obj.toReactionEmoji(byName), ReactionActionCreators.ReactionLocations.MESSAGE, obj);
    const toReactionEmojiResult = obj.toReactionEmoji(byName);
  }
};
export const useThread = function useThread(id, arg1, arg2) {
  _require = id;
  closure_1 = arg1;
  dependencyMap = arg2;
  const items = [ChannelStore, ThreadMessageStore];
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(items, () => {
    if (null != channel) {
      if (null != message) {
        channel = ChannelStore.getChannel(tmp.id);
        if (channel == null) {
          channel = null;
        }
        let obj = { thread: channel, messageCount: null, mostRecentMessage: null };
        let num = ThreadMessageStore.getCount(tmp.id);
        if (num == null) {
          num = 0;
        }
        obj.messageCount = num;
        obj.mostRecentMessage = ThreadMessageStore.getMostRecentMessage(tmp.id);
      }
      return obj;
    }
    obj = { thread: null, messageCount: 0, mostRecentMessage: null };
  });
  id = undefined;
  ({ thread, messageCount, mostRecentMessage } = stateFromStoresObject);
  if (id != null) {
    id = id.id;
  }
  const items1 = [id, arg2, arg1, id];
  const effect = noop.useEffect(() => {
    let obj = channel;
    let tmp = null != channel;
    if (tmp) {
      tmp = null != message;
    }
    if (tmp) {
      tmp = obj.hasFlag(constants.HAS_THREAD) || hideAdditionalButtons;
      const tmp4 = obj.hasFlag(constants.HAS_THREAD) || hideAdditionalButtons;
    }
    if (tmp) {
      tmp = null == ThreadMessageStore.getMostRecentMessage(obj.id);
    }
    if (tmp) {
      ChannelActionCreatorsDefault.preload(message.id, obj.id);
      obj = { channelId: null, isPreload: true, limit: 25 };
      obj.channelId = obj.id;
      const messages = MessageActionCreatorsDefault.fetchMessages(obj);
    }
  }, items1);
  return { thread, messageCount, mostRecentMessage };
};