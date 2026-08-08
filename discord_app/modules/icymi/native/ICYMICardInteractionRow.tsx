// discord_app/modules/icymi/native/ICYMICardInteractionRow.tsx
import Separator from "Separator";
import EMOJI_PICKER_ACTION_SHEET_KEY from "EMOJI_PICKER_ACTION_SHEET_KEY";
import get_ActivityIndicator from "module_4313";
import updateState from "updateState";
import ensureGuildLoaded from "ensureGuildLoaded";
import recomputeGuild from "recomputeGuild";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import ME from "ME";
import { EmojiIntention } from "set";
import jsxProd from "getSystemLocale";
import createCacheKey from "createCacheKey";
import { initialize } from "../../../../discord_common/js/packages/flux/index.tsx";
import { Themes } from "../../../../discord_common/js/packages/tokens/native.tsx";
import { ArrowAngleLeftUpIcon } from "../../../design/components/Icon/native/redesign/generated/ArrowAngleLeftUpIcon.tsx";
import { PressableBase } from "../../../design/void/Pressables/native/Pressables.tsx";
import { getSystemLocale } from "../../../intl/index.native.tsx";
import { hexToRgba } from "../../../utils/ColorUtils.tsx";
import { set } from "../../../utils/PlatformUtils.tsx";
import { ForwardingIcon } from "../../forwarding/native/ForwardingIcon.tsx";
import { checkReactionResponse } from "../../reactions/ReactionActionCreators.tsx";
import { MAX_REACTIONS } from "../../reactions/ReactionUtils.tsx";

let c5;
let closure_12;
let closure_14;
let closure_16;
let closure_17;
let closure_18;
let closure_6;
let error;
let map1;
const require = arg1;
function AddEmojiButton(channel) {
  let disabled;
  let handleItemInteracted;
  let showText;
  channel = channel.channel;
  const onPressEmoji = channel.onPressEmoji;
  ({ showText, disabled, handleItemInteracted } = channel);
  const tmp = callback3();
  const items = [channel, onPressEmoji, handleItemInteracted];
  const callback = React.useCallback(() => {
    handleItemInteracted("press_reaction_picker", { actionGestureType: "press", actionTargetElement: "reaction_picker_button", actionIntentType: "open", actionDestinationType: null });
    let obj = channel(handleItemInteracted[19]);
    obj = { pickerIntention: outer1_15.REACTION, autoFocus: false, startExpanded: false, onPressEmoji, channel, guildId: null };
    let guild_id;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    obj[5] = guild_id;
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
  obj[1] = items1;
  const intl = tmp4(tmp5[21]).intl;
  obj[3] = intl.string(channel(handleItemInteracted[21]).t.lfIHs4);
  obj[4] = disabled;
  const items2 = [callback(channel(handleItemInteracted[22]).ReactionIcon, { size: "sm" }), ];
  if (showText) {
    obj = { variant: "text-sm/semibold", color: "redesign-button-tertiary-text", children: null };
    const intl2 = tmp4(tmp5[21]).intl;
    obj[2] = intl2.string(tmp4(tmp5[21]).t.m9O1gd);
    showText = callback(tmp4(tmp5[23]).Text, obj);
  }
  items2[1] = showText;
  obj[5] = items2;
  return closure_17(channel(handleItemInteracted[20]).PressableOpacity, obj);
}
function EmojiReaction(count) {
  const messageId = count.messageId;
  const channel = count.channel;
  const reaction = count.reaction;
  const isBurstReaction = count.isBurstReaction;
  const handleItemInteracted = count.handleItemInteracted;
  let emoji;
  const tmp = callback3();
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
  obj[1] = backgroundColor1;
  let accentColor;
  if (emojiColorPalette != null) {
    accentColor = emojiColorPalette.accentColor;
  }
  let tmp8 = null;
  if (null != accentColor) {
    obj = { color: null };
    obj[0] = emojiColorPalette.accentColor;
    tmp8 = obj;
  }
  emoji = reaction.emoji;
  let selectedInnerTextContainer = isBurstReaction ? reaction.me_burst : reaction.me;
  let selected;
  if (selectedInnerTextContainer) {
    selected = tmp.selected;
  }
  tmp2Result = tmp2(tmp3[16]);
  const items = [recomputeGuild];
  const items1 = [emoji];
  const stateFromStores = tmp2Result.useStateFromStores(items, () => {
    let canChatInGuildResult = null != channel.guild_id;
    if (canChatInGuildResult) {
      canChatInGuildResult = outer1_10.canChatInGuild(tmp.guild_id);
    }
    return canChatInGuildResult;
  });
  const items2 = [channel, isBurstReaction, messageId, reaction, handleItemInteracted];
  const memo = handleItemInteracted.useMemo(() => {
    let tmp2;
    if (null != emoji.id) {
      let obj = { uri: null };
      obj = { id: null, animated: null, size: 48 };
      ({ id: obj3[0], animated: obj3[1] } = emoji);
      obj[0] = channel(reaction[26]).getEmojiURL(obj);
      tmp2 = obj;
      const obj2 = channel(reaction[26]);
    }
    return tmp2;
  }, items1);
  const callback = handleItemInteracted.useCallback(() => {
    handleItemInteracted("press_reaction", { actionGestureType: "press", actionTargetElement: "toggle_existing_reaction_button", actionIntentType: "react", actionDestinationType: null });
    const result = messageId(reaction[27]).handleAddOrRemoveReaction(messageId, channel, reaction, isBurstReaction, messageId(reaction[11]).ReactionLocations.MESSAGE);
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
    obj3[2] = items5;
    obj3[4] = emoji.name;
    let tmp15Result = tmp15(tmp2(tmp3[23]).Text, obj3);
  } else {
    if (tmp2Result1.isAndroid()) {
      const obj4 = { style: null, source: null };
      const items6 = [, ];
      ({ defaultEmoji: arr7[0], emojiImage: arr7[1] } = tmp);
      obj4[0] = items6;
      obj4[1] = memo;
      tmp15Result = tmp15(closure_6, obj4);
    } else {
      const obj5 = { emoji: null, size: null, style: null, animate: true };
      obj5[0] = emoji;
      obj5[1] = c19;
      obj5[2] = tmp.defaultEmoji;
      tmp15Result = tmp15(channel(tmp3[28]), obj5);
    }
    tmp2Result1 = tmp2(tmp3[14]);
  }
  obj2[1] = tmp15Result;
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
  obj7[2] = tmp22;
  obj6[1] = closure_16(channel(reaction[29]), obj7);
  items7[1] = closure_16(emoji, obj6);
  obj1[5] = items7;
  return closure_17(messageId(reaction[20]).PressableOpacity, obj1);
}
function ForwardButton(disabled) {
  disabled = disabled.disabled;
  const tmp = callback3();
  const obj = { onPress: disabled.onPress, style: null, accessible: true, disabled: null, accessibilityLabel: null, children: null };
  const items = [, , ];
  ({ emojiContainer: arr[0], addEmojiContainer: arr[1] } = tmp);
  disabled = null;
  if (disabled) {
    disabled = tmp.disabled;
  }
  items[2] = disabled;
  obj[1] = items;
  obj[3] = disabled;
  const intl = tmp3(1236).intl;
  obj[4] = intl.string(getSystemLocale.t.xIUfJS);
  obj[5] = closure_16(ForwardingIcon, { size: "sm" });
  return closure_16(PressableBase.PressableOpacity, obj);
}
function ReplyButton(disabled) {
  disabled = disabled.disabled;
  const tmp = callback3();
  const obj = { onPress: disabled.onPress, style: null, accessible: true, disabled: null, accessibilityLabel: null, children: null };
  const items = [, , ];
  ({ emojiContainer: arr[0], addEmojiContainer: arr[1] } = tmp);
  disabled = null;
  if (disabled) {
    disabled = tmp.disabled;
  }
  items[2] = disabled;
  obj[1] = items;
  obj[3] = disabled;
  const intl = tmp3(1236).intl;
  obj[4] = intl.string(getSystemLocale.t["5NwaNY"]);
  obj[5] = closure_16(ArrowAngleLeftUpIcon.ArrowAngleLeftUpIcon, { size: "sm" });
  return closure_16(PressableBase.PressableOpacity, obj);
}
function ThreadAsCommentsButton(parentMessage) {
  let handleItemInteracted;
  let style;
  parentMessage = parentMessage.parentMessage;
  const threadData = parentMessage.threadData;
  ({ style, handleItemInteracted } = parentMessage);
  const tmp = callback3();
  let obj = parentMessage(handleItemInteracted[16]);
  const items = [getUncachedChannelPermissions];
  const items1 = [parentMessage, threadData.thread, handleItemInteracted];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_11.canWithPartialContext(outer1_13.VIEW_CHANNEL, { channelId: parentMessage.id }));
  const callback = React.useCallback(() => {
    handleItemInteracted("press_comments", { actionGestureType: "press", actionTargetElement: "thread_comments_button", actionIntentType: "navigate", actionDestinationType: "channel" });
    let tmp2 = null != parentMessage;
    if (tmp2) {
      tmp2 = null != threadData.thread;
    }
    if (tmp2) {
      parentMessage(handleItemInteracted[32]).navigateToPost(obj.getChannelId(), threadData.thread.guild_id, obj.id);
      const obj2 = parentMessage(handleItemInteracted[32]);
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
          obj[0] = items2;
          obj[1] = callback;
          obj = { style: null, children: null };
          obj[0] = tmp.commentCount;
          const obj1 = { style: null };
          obj1[0] = tmp.commentsIcon;
          const items3 = [callback(tmp2(tmp3[33]).ChatIcon, obj1), ];
          let obj2 = { variant: "text-md/semibold", color: "text-strong", children: null };
          obj2[2] = str;
          items3[1] = callback(tmp2(tmp3[23]).Text, obj2);
          obj[1] = items3;
          obj[2] = callback2(closure_5, obj);
          return callback(tmp2(tmp3[20]).PressableHighlight, obj);
        }
      }
      const obj3 = { style: null, onPress: null, children: null };
      const items4 = [tmp.comments, style];
      obj3[0] = items4;
      obj3[1] = callback;
      const obj4 = { style: null, children: null };
      obj4[0] = tmp.commentCount;
      const obj5 = { style: null };
      obj5[0] = tmp.commentsIcon;
      obj4[1] = callback(tmp2(tmp3[33]).ChatIcon, obj5);
      obj3[2] = callback(closure_5, obj4);
      return callback(tmp2(tmp3[20]).PressableHighlight, obj3);
    }
  }
  return null;
}
({ View: c5, Image: closure_6, ScrollView: error } = get_ActivityIndicator);
({ MessageFlags: closure_12, Permissions: map1, HorizontalGradient: closure_14 } = ME);
({ jsx: closure_16, jsxs: closure_17, Fragment: closure_18 } = jsxProd);
let c19 = 20;
let closure_20 = createCacheKey.createStyles(() => {
  let obj = { container: { flexDirection: "row", alignItems: "center", flexWrap: "wrap", justifyContent: "space-between" }, replyForwardButtonContainer: { flexDirection: "row", alignItems: "center", flexWrap: "wrap", gap: 6 }, emojisRowContainer: { position: "relative", flexDirection: "row", alignItems: "center", flexWrap: "wrap", gap: 6 }, emojisContainer: { position: "relative", flexDirection: "row", alignItems: "center", flexWrap: "wrap", gap: 6 }, emojiContainer: null, innerEmojiContainer: null, selectedInnerEmojiContainer: null, addEmojiContainer: null, disabled: null, defaultEmoji: null, emojiText: null, selectedInnerTextContainer: null, innerTextContainer: null, emojiImage: null, selected: null, gradient: null, overflowChevron: null, comments: null, commentCount: null, commentsIcon: null };
  obj = { flexDirection: "row", backgroundColor: Themes.colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND, borderRadius: Themes.radii.sm, flexShrink: 3, paddingHorizontal: 8, gap: 6 };
  obj[4] = obj;
  obj[5] = { paddingVertical: 5 };
  obj[6] = { paddingVertical: 4 };
  obj[7] = { minHeight: 30, alignItems: "center" };
  obj[8] = { opacity: 0.4 };
  obj = { width: c19, height: c19 };
  obj[9] = obj;
  let obj3 = set;
  let num = 16;
  if (!obj3.isAndroid()) {
    num = tmp3;
  }
  obj[10] = { lineHeight: num, fontSize: 16, textAlign: "center", paddingTop: 2 };
  obj[11] = { paddingBottom: 3.5 };
  obj[12] = { alignSelf: "flex-end", paddingBottom: 4.5 };
  obj[13] = { resizeMode: "contain", width: c19, height: c19 };
  const obj1 = { borderColor: Themes.unsafe_rawColors.BRAND_560, borderWidth: 1, paddingHorizontal: 7, backgroundColor: null };
  obj1[3] = hexToRgba.hexWithOpacity(Themes.unsafe_rawColors.BRAND_500, 0.3);
  obj[14] = obj1;
  obj[15] = { position: "absolute", right: 0, top: 0, bottom: 0, width: 48 };
  obj[16] = { position: "absolute", right: 0 };
  const tmp4 = require;
  const tmp4Result = hexToRgba;
  obj[17] = { paddingVertical: 6, paddingHorizontal: 8, backgroundColor: Themes.colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND, borderRadius: Themes.radii.sm, display: "flex", flexDirection: "row", alignItems: "center", gap: 8 };
  obj[18] = { display: "flex", flexDirection: "row", alignItems: "center", gap: 4, justifySelf: "end" };
  obj3 = { width: 20, height: 20, tintColor: tmp(712).colors.INTERACTIVE_TEXT_DEFAULT };
  obj[19] = obj3;
  return obj;
});
let result = require("get ActivityIndicator").fileFinishedImporting("modules/icymi/native/ICYMICardInteractionRow.tsx");

export default function ICYMICardInteractionRow(message) {
  let c12;
  let guild;
  let hasOverflow;
  let hideAdditionalButtons;
  let messageCount;
  let mostRecentMessage;
  let showReplyForwardButtons;
  let showThreadAsComments;
  let thread;
  let tmp18;
  message = message.message;
  guild = message;
  let channel = message.channel;
  message = channel;
  ({ guild, hideAdditionalButtons } = message);
  if (hideAdditionalButtons === undefined) {
    hideAdditionalButtons = false;
  }
  let flag2 = hideAdditionalButtons;
  let flag = message.isKeyMessage;
  if (flag === undefined) {
    flag = false;
  }
  flag2 = message.inForum;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let str = message.backgroundVariant;
  if (str === undefined) {
    str = "primary";
  }
  let id = message.id;
  const itemType = message.itemType;
  let obj;
  let memo;
  let canForwardMessage;
  let stateFromStores;
  let callback;
  c12 = undefined;
  let tmp = callback3();
  obj = guild(flag2[16]);
  let items = [canForwardMessage, memo];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    if (null != message) {
      if (null != guild) {
        let channel = canForwardMessage.getChannel(tmp.id);
        if (channel == null) {
          channel = null;
        }
        let obj = { thread: null, messageCount: null, mostRecentMessage: null };
        obj[0] = channel;
        let num = memo.getCount(tmp.id);
        if (num == null) {
          num = 0;
        }
        obj[1] = num;
        obj[2] = memo.getMostRecentMessage(tmp.id);
        const obj2 = memo;
      }
      return obj;
    }
    obj = { thread: null, messageCount: 0, mostRecentMessage: null };
  });
  let obj1 = str;
  id = undefined;
  ({ thread, messageCount, mostRecentMessage } = stateFromStoresObject);
  if (guild != null) {
    id = guild.id;
  }
  const items1 = [id, flag2, message, guild];
  const effect = str.useEffect(() => {
    let obj = message;
    let tmp = null != message;
    if (tmp) {
      tmp = null != guild;
    }
    if (tmp) {
      tmp = obj.hasFlag(_undefined.HAS_THREAD) || flag2;
      const tmp4 = obj.hasFlag(_undefined.HAS_THREAD) || flag2;
    }
    if (tmp) {
      tmp = null == memo.getMostRecentMessage(obj.id);
    }
    if (tmp) {
      message(flag2[17]).preload(guild.id, obj.id);
      const obj2 = message(flag2[17]);
      obj = { channelId: null, isPreload: true, limit: 25 };
      obj[0] = obj.id;
      const messages = message(flag2[18]).fetchMessages(obj);
      const obj3 = message(flag2[18]);
    }
  }, items1);
  obj = { thread, messageCount, mostRecentMessage };
  const items2 = [message.reactions];
  memo = obj1.useMemo(() => {
    const items = [];
    const reactions = items.reactions;
    const item = reactions.forEach((me_vote) => {
      if (null == me_vote.me_vote) {
        if (me_vote.burst_count > 0) {
          let obj = {};
          const merged = Object.assign(me_vote);
          obj.type = items(outer1_2[34]).ReactionTypes.BURST;
          items.push(obj);
        }
        if (me_vote.count > 0) {
          obj = {};
          const merged1 = Object.assign(me_vote);
          obj.type = items(outer1_2[34]).ReactionTypes.NORMAL;
          items.push(obj);
        }
      }
    });
    return items;
  }, items2);
  const items3 = [channel];
  const memo1 = obj1.useMemo(() => {
    let tmp2 = null != message;
    if (tmp2) {
      tmp2 = message(flag2[35])(tmp);
    }
    return tmp2;
  }, items3);
  let tmp2Result = tmp2(tmp3[36]);
  canForwardMessage = tmp2Result.useCanForwardMessage(message);
  tmp2Result = tmp2(tmp3[16]);
  const items4 = [callback];
  stateFromStores = tmp2Result.useStateFromStores(items4, () => callback.can(outer1_13.SEND_MESSAGES, message));
  const items5 = [hideAdditionalButtons, obj.messageCount, memo.length, stateFromStores, canForwardMessage];
  const memo2 = obj1.useMemo(() => {
    let num = 4;
    if (flag2) {
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
    let tmp5 = !tmp;
    if (!flag2) {
      let tmp6 = stateFromStores;
      if (!stateFromStores) {
        tmp6 = canForwardMessage;
      }
      tmp5 = tmp6;
    }
    obj[1] = tmp5;
    obj[2] = obj.messageCount > 0;
    return obj;
  }, items5);
  ({ hasOverflow, showReplyForwardButtons, showThreadAsComments } = memo2);
  const items6 = [id, itemType];
  callback = obj1.useCallback((open_profile, actionParameters) => {
    let obj = message(flag2[37]);
    obj.itemInteracted(id, itemType, open_profile);
    obj = { itemId: id, itemType, actionParameters };
    message(flag2[37]).feedItemActioned(obj);
  }, items6);
  const items7 = [channel.id, message.id, callback];
  const items8 = [message, callback];
  const callback1 = obj1.useCallback((byName) => {
    callback("press_reaction", { actionGestureType: "press", actionTargetElement: "add_new_reaction_button", actionIntentType: "open", actionDestinationType: null });
    const id = message.id;
    const id2 = guild.id;
    if (null != byName) {
      let obj = guild(flag2[10]);
      const obj2 = guild(flag2[11]);
      obj = { burst: null };
      obj[0] = arg1;
      obj2.addReaction(id, id2, obj.toReactionEmoji(byName), guild(flag2[11]).ReactionLocations.MESSAGE, obj);
      const toReactionEmojiResult = obj.toReactionEmoji(byName);
    }
  }, items7);
  const items9 = [channel, message, callback];
  const callback2 = obj1.useCallback(() => {
    callback("press_forward", { actionGestureType: "press", actionTargetElement: "forward_button", actionIntentType: "share", actionDestinationType: "channel" });
    let obj = guild(flag2[38]);
    obj = { message: guild, source: "icymi-tab" };
    obj.openForwardModal(obj);
  }, items8);
  const items10 = [str, flag];
  callback3 = obj1.useCallback(() => {
    callback("press_reply", { actionGestureType: "press", actionTargetElement: "reply_button", actionIntentType: "reply", actionDestinationType: "channel" });
    let obj = guild(flag2[32]);
    obj.navigateToPost(message.id, message.guild_id, guild.id);
    obj = { channel: message, message: guild, shouldMention: true, showMentionToggle: true };
    const pendingReply = guild(flag2[39]).createPendingReply(obj);
  }, items9);
  const memo3 = obj1.useMemo(() => {
    if (flag) {
      return message(flag2[13]).colors.MESSAGE_HIGHLIGHT_BACKGROUND_DEFAULT;
    } else if ("primary" === "primary") {
      return message(flag2[13]).colors.CARD_BACKGROUND_DEFAULT;
    } else if ("secondary" === tmp) {
      return message(flag2[13]).colors.CARD_SECONDARY_BG;
    } else if ("base" === tmp) {
      return message(flag2[13]).colors.BACKGROUND_BASE_LOW;
    }
  }, items10);
  const token = guild(flag2[40]).useToken(memo3);
  const tmp2Result1 = guild(flag2[40]);
  [tmp18, c12] = flag(obj1.useState(true), 2);
  [][0] = callback;
  const callback4 = obj1.useCallback((nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    _undefined(nativeEvent.contentOffset.x + nativeEvent.layoutMeasurement.width < nativeEvent.contentSize.width);
  }, []);
  if (0 !== memo.length) {
    obj = { style: null, children: null };
    obj[0] = tmp.container;
    obj1 = { style: null, children: null };
    obj1[0] = tmp.emojisRowContainer;
    if (memo.length > 0) {
      let obj2 = { style: null, children: null };
      const items11 = [tmp.emojisContainer];
      obj2[0] = items11;
      let obj3 = { horizontal: true, scrollEnabled: null, contentContainerStyle: null, onScroll: null, onScrollEndDrag: null, showsHorizontalScrollIndicator: false, children: null };
      obj3[1] = hasOverflow;
      obj3[2] = { gap: 6 };
      obj3[3] = callback4;
      obj3[4] = tmp20;
      let tmp25Result = !hideAdditionalButtons;
      if (!hideAdditionalButtons) {
        let tmp28 = showReplyForwardButtons;
        if (!showReplyForwardButtons) {
          tmp28 = showThreadAsComments;
        }
        tmp25Result = tmp28;
      }
      if (tmp25Result) {
        const obj4 = { style: null, children: null };
        obj4[0] = tmp.replyForwardButtonContainer;
        if (showThreadAsComments) {
          const obj5 = { threadData: null, parentMessage: null, handleItemInteracted: null };
          obj5[0] = obj;
          obj5[1] = message;
          obj5[2] = callback;
          showThreadAsComments = tmp22(ThreadAsCommentsButton, obj5);
        }
        const items12 = [showThreadAsComments, ];
        if (showReplyForwardButtons) {
          const obj6 = { children: null };
          const obj7 = { onPress: null, disabled: null };
          obj7[0] = callback3;
          obj7[1] = !stateFromStores;
          const items13 = [tmp22(ReplyButton, obj7), ];
          const obj8 = { onPress: null, disabled: null };
          obj8[0] = callback2;
          obj8[1] = !canForwardMessage;
          items13[1] = tmp22(ForwardButton, obj8);
          obj6[0] = items13;
          showReplyForwardButtons = tmp25(closure_18, obj6);
        }
        items12[1] = showReplyForwardButtons;
        obj4[1] = items12;
        tmp25Result = tmp25(tmp23, obj4);
      }
      const items14 = [
        tmp25Result,
        memo.map((reaction) => {
              let obj = { messageId: guild.id, channel: message, reaction, count: reaction.type === guild(flag2[34]).ReactionTypes.BURST ? reaction.burst_count : reaction.count, isBurstReaction: reaction.type === guild(flag2[34]).ReactionTypes.BURST, handleItemInteracted: callback };
              obj = { children: null };
              obj[0] = outer1_16(outer1_22, obj);
              return outer1_16(id, obj, "reaction-" + arg1);
            }),

      ];
      let tmp22Result = null;
      if (!hideAdditionalButtons) {
        tmp22Result = null;
        if (memo1) {
          const obj9 = { channel: null, onPressEmoji: null, handleItemInteracted: null };
          obj9[0] = channel;
          obj9[1] = callback1;
          obj9[2] = callback;
          tmp22Result = tmp22(AddEmojiButton, obj9);
        }
      }
      items14[2] = tmp22Result;
      obj3[6] = items14;
      const items15 = [closure_17(obj, obj3), ];
      tmp25Result = null;
      if (hasOverflow) {
        tmp25Result = null;
        if (tmp18) {
          const obj10 = { children: null };
          const obj11 = { style: null, start: null, end: null, colors: null, locations: null };
          obj11[0] = tmp.gradient;
          ({ START: obj18[1], END: obj18[2] } = closure_14);
          const tmp38 = message(tmp3[41]);
          const obj19 = message(tmp3[42])(token);
          const items16 = [message(tmp3[42])(token).alpha(0).hex(), token, token];
          obj11[3] = items16;
          obj11[4] = [0, 0.8, 1];
          const items17 = [tmp22(tmp38, obj11), ];
          const obj12 = { style: null, size: "xs", color: "icon-muted" };
          const items18 = [tmp.overflowChevron];
          obj12[0] = items18;
          items17[1] = tmp22(tmp2(tmp3[43]).ChevronSmallRightIcon, obj12);
          obj10[0] = items17;
          tmp25Result = tmp25(closure_18, obj10);
          const alphaResult = message(tmp3[42])(token).alpha(0);
        }
      }
      items15[1] = tmp25Result;
      obj2[1] = items15;
      let tmp25Result1 = tmp25(tmp23, obj2);
      const tmp26 = obj;
    } else {
      tmp25Result1 = null;
    }
    obj1[1] = tmp25Result1;
    obj[1] = closure_16(id, obj1);
    tmp22Result = tmp22(tmp23, obj);
  } else {
    tmp22Result = null;
  }
  return tmp22Result;
};
export const onAddReaction = function onAddReaction(arg0, arg1, byName) {
  if (null != byName) {
    let obj = MAX_REACTIONS;
    const obj2 = checkReactionResponse;
    obj = { burst: null };
    obj[0] = arg3;
    obj2.addReaction(arg0, arg1, obj.toReactionEmoji(byName), checkReactionResponse.ReactionLocations.MESSAGE, obj);
    const toReactionEmojiResult = obj.toReactionEmoji(byName);
  }
};
export const useThread = function useThread(id) {
  let messageCount;
  let mostRecentMessage;
  let thread;
  const _require = id;
  let closure_1 = arg1;
  const dependencyMap = arg2;
  const items = [ensureGuildLoaded, updateState];
  const stateFromStoresObject = _initialize.useStateFromStoresObject(items, () => {
    if (null != message) {
      if (null != guild) {
        let channel = canForwardMessage.getChannel(tmp.id);
        if (channel == null) {
          channel = null;
        }
        let obj = { thread: null, messageCount: null, mostRecentMessage: null };
        obj[0] = channel;
        let num = memo.getCount(tmp.id);
        if (num == null) {
          num = 0;
        }
        obj[1] = num;
        obj[2] = memo.getMostRecentMessage(tmp.id);
        const obj2 = memo;
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
  const effect = React.useEffect(() => {
    let obj = message;
    let tmp = null != message;
    if (tmp) {
      tmp = null != guild;
    }
    if (tmp) {
      tmp = obj.hasFlag(_undefined.HAS_THREAD) || flag2;
      const tmp4 = obj.hasFlag(_undefined.HAS_THREAD) || flag2;
    }
    if (tmp) {
      tmp = null == memo.getMostRecentMessage(obj.id);
    }
    if (tmp) {
      message(flag2[17]).preload(guild.id, obj.id);
      const obj2 = message(flag2[17]);
      obj = { channelId: null, isPreload: true, limit: 25 };
      obj[0] = obj.id;
      const messages = message(flag2[18]).fetchMessages(obj);
      const obj3 = message(flag2[18]);
    }
  }, items1);
  return { thread, messageCount, mostRecentMessage };
};