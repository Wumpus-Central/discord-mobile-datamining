// === Module 16935: ICYMICardInteractionRow ===

// Module 16935 (ICYMICardInteractionRow)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import PlatformUtils from "PlatformUtils" /* 1382 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1415 */;
import ReactionUtils from "ReactionUtils" /* 4762 */;
import ColorUtils from "ColorUtils" /* 4967 */;
import Pressables from "Pressables" /* 6184 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 7014 */;
import MessageActionCreatorsDefault from "MessageActionCreators" /* 7178 */;
import ReactionActionCreators from "ReactionActionCreators" /* 7899 */;
import MessageReactionsTypes from "MessageReactionsTypes" /* 7900 */;
import canAddNewReactionsDefault from "canAddNewReactions" /* 7989 */;
import ICYMIActionCreatorsDefault from "ICYMIActionCreators" /* 8471 */;
import messages_MessagesUtils from "messages/MessagesUtils" /* 9382 */;
import openEmojiPickerActionSheet from "openEmojiPickerActionSheet" /* 9426 */;
import PendingReplyActionCreators from "PendingReplyActionCreators" /* 9690 */;
import ForwardModalUtils from "ForwardModalUtils" /* 11551 */;
import ForwardingIconDefault from "ForwardingIcon" /* 11563 */;
import ArrowAngleLeftUpIcon from "ArrowAngleLeftUpIcon" /* 12831 */;
import ICYMIShared from "ICYMIShared" /* 16929 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ThreadMessageStore from "ThreadMessageStore" /* 7005 */;
import ChannelStore from "ChannelStore" /* 2065 */;
import GuildVerificationStore from "GuildVerificationStore" /* 5891 */;
import PermissionStore from "PermissionStore" /* 4750 */;

const require = globalThis.__r;

require = fn;
function EmojiReaction(count) {
  const messageId = count.messageId;
  const channel = count.channel;
  const reaction = count.reaction;
  const isBurstReaction = count.isBurstReaction;
  const handleItemInteracted = count.handleItemInteracted;
  let emoji;
  const tmp = closure_19();
  let burst_colors = reaction.burst_colors;
  if (burst_colors == null) {
    burst_colors = [];
  }
  const emojiColorPalette = messageId(reaction[26]).useEmojiColorPalette(burst_colors);
  let str = "";
  if (null != emojiColorPalette) {
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
    let str2 = tmp2(tmp3[27]).hex2rgb(backgroundColor, num);
    if (str2 == null) {
      str2 = "";
    }
    str = str2;
    const tmp2Result = tmp2(tmp3[27]);
  }
  let obj2 = { backgroundColor: str, borderColor: null };
  let backgroundColor1;
  if (emojiColorPalette != null) {
    backgroundColor1 = emojiColorPalette.backgroundColor;
  }
  obj2.borderColor = backgroundColor1;
  let accentColor;
  if (emojiColorPalette != null) {
    accentColor = emojiColorPalette.accentColor;
  }
  let tmp8 = null;
  if (null != accentColor) {
    const obj3 = { color: emojiColorPalette.accentColor };
    tmp8 = obj3;
  }
  emoji = reaction.emoji;
  let selectedInnerTextContainer = isBurstReaction ? reaction.me_burst : reaction.me;
  let selected;
  if (selectedInnerTextContainer) {
    selected = tmp.selected;
  }
  let obj = messageId(reaction[26]);
  const items = [GuildVerificationStore];
  const items1 = [emoji];
  const stateFromStores = messageId(reaction[18]).useStateFromStores(items, () => {
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
      const obj = { uri: null };
      ({ id: obj3.id, animated: obj3.animated } = emoji);
      obj.uri = AvatarUtilsDefault.getEmojiURL({ id: null, animated: null, size: 48 });
      tmp2 = obj;
      const obj4 = { id: null, animated: null, size: 48 };
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
    tmp14 = obj2;
  }
  let obj4 = { style: items3, onPress: callback, accessible: true, accessibilityLabel: emoji.name, disabled: !stateFromStores, children: null };
  items3[2] = tmp14;
  const items4 = [tmp.innerEmojiContainer, ];
  let selectedInnerEmojiContainer = selectedInnerTextContainer;
  if (selectedInnerTextContainer) {
    selectedInnerEmojiContainer = tmp.selectedInnerEmojiContainer;
  }
  const obj5 = { style: items4, children: null };
  items4[1] = selectedInnerEmojiContainer;
  if (null == emoji.id) {
    const obj6 = { variant: "text-md/medium", color: "interactive-text-default", style: null, allowFontScaling: false, children: null };
    const items5 = [, ];
    ({ defaultEmoji: arr8[0], emojiText: arr8[1] } = tmp);
    obj6.style = items5;
    obj6.children = emoji.name;
    let tmp15Result = closure_15(tmp2(tmp3[24]).Text, obj6);
  } else {
    if (tmp2Result4.isAndroid()) {
      const obj7 = { style: null, source: null };
      const items6 = [, ];
      ({ defaultEmoji: arr7[0], emojiImage: arr7[1] } = tmp);
      obj7.style = items6;
      obj7.source = memo;
      tmp15Result = closure_15(tmp21(tmp3[30]), obj7);
    } else {
      const obj8 = { emoji, size: v20, style: tmp.defaultEmoji, animate: true };
      tmp15Result = closure_15(tmp21(tmp3[31]), obj8);
    }
    tmp2Result4 = tmp2(tmp3[14]);
  }
  obj5.children = tmp15Result;
  const items7 = [closure_15(emoji, obj5), ];
  const items8 = [tmp.innerTextContainer, ];
  if (selectedInnerTextContainer) {
    selectedInnerTextContainer = tmp.selectedInnerTextContainer;
  }
  const obj9 = { style: items8, children: null };
  items8[1] = selectedInnerTextContainer;
  const obj10 = { animate: true, count: count.count, textStyle: null, textVariant: "text-md/semibold" };
  let tmp20 = null;
  const tmp2Result3 = messageId(reaction[18]);
  if (isBurstReaction) {
    tmp20 = tmp8;
  }
  obj10.textStyle = tmp20;
  obj9.children = closure_15(channel(reaction[32]), obj10);
  items7[1] = closure_15(emoji, obj9);
  obj4.children = items7;
  return closure_16(messageId(reaction[25]).PressableOpacity, obj4);
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ScrollView: metroRequire } = get_ActivityIndicator);
const Constants = fn(1085);
({ MessageFlags: closure_11, Permissions: closure_12, HorizontalGradient: map1 } = Constants);
const EmojiIntention = fn(1393).EmojiIntention;
const jsxProd = fn(21);
({ jsx: closure_15, jsxs: closure_16, Fragment: closure_17 } = jsxProd);
let c18 = 20;
const createStyles = fn(5092);
let closure_19 = createStyles.createStyles(() => {
  const obj = { container: { flexDirection: "row", alignItems: "center", flexWrap: "wrap", justifyContent: "space-between" }, replyForwardButtonContainer: { flexDirection: "row", alignItems: "center", flexWrap: "wrap", gap: 6 }, emojisRowContainer: { position: "relative", flexDirection: "row", alignItems: "center", flexWrap: "wrap", gap: 6 }, emojisContainer: { position: "relative", flexDirection: "row", alignItems: "center", flexWrap: "wrap", gap: 6 }, emojiContainer: { flexDirection: "row", backgroundColor: nativeDefault.colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND, borderRadius: nativeDefault.radii.sm, flexShrink: 3, paddingHorizontal: 8, gap: 6 }, innerEmojiContainer: { paddingVertical: 5 }, selectedInnerEmojiContainer: { paddingVertical: 4 }, addEmojiContainer: { minHeight: 30, alignItems: "center" }, disabled: { opacity: 0.4 }, defaultEmoji: null, emojiText: null, selectedInnerTextContainer: null, innerTextContainer: null, emojiImage: null, selected: null, gradient: null, overflowChevron: null, comments: null, commentCount: null, commentsIcon: null };
  const size = { width: v20, height: v20 };
  obj.defaultEmoji = size;
  const obj2 = { flexDirection: "row", backgroundColor: nativeDefault.colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND, borderRadius: nativeDefault.radii.sm, flexShrink: 3, paddingHorizontal: 8, gap: 6 };
  let num = 16;
  if (!obj4.isAndroid()) {
    num = v20;
  }
  obj.emojiText = { lineHeight: num, fontSize: 16, textAlign: "center", paddingTop: 2 };
  obj.selectedInnerTextContainer = { paddingBottom: 3.5 };
  obj.innerTextContainer = { alignSelf: "flex-end", paddingBottom: 4.5 };
  obj.emojiImage = { resizeMode: "contain", width: v20, height: v20 };
  const obj3 = { borderColor: nativeDefault.unsafe_rawColors.BRAND_560, borderWidth: 1, paddingHorizontal: 7, backgroundColor: null };
  obj4 = PlatformUtils;
  obj3.backgroundColor = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.BRAND_500, 0.3);
  obj.selected = obj3;
  obj.gradient = { position: "absolute", right: 0, top: 0, bottom: 0, width: 48 };
  obj.overflowChevron = { position: "absolute", right: 0 };
  const tmp4Result = ColorUtils;
  obj.comments = { paddingVertical: 6, paddingHorizontal: 8, backgroundColor: nativeDefault.colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND, borderRadius: nativeDefault.radii.sm, display: "flex", flexDirection: "row", alignItems: "center", gap: 8 };
  obj.commentCount = { display: "flex", flexDirection: "row", alignItems: "center", gap: 4, justifySelf: "end" };
  const size1 = { width: 20, height: 20, tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
  obj.commentsIcon = size1;
  return obj;
});
let ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function useThread(id, arg1, arg2) {
  _require = id;
  closure_1 = arg1;
  dependencyMap = arg2;
  const cResult = require("c").c(17);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore, ThreadMessageStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === id) {
    if (cResult[2] === arg1) {
      let tmp7 = cResult[3];
    }
    const stateFromStoresObject = tmp(504).useStateFromStoresObject(first, tmp7);
    ({ thread, messageCount, mostRecentMessage } = stateFromStoresObject);
    if (cResult[4] === id) {
      if (cResult[5] === arg2) {
        if (cResult[6] === arg1) {
          let tmp9 = cResult[7];
        }
        id = undefined;
        if (id != null) {
          id = id.id;
        }
        if (cResult[8] === id) {
          if (cResult[9] === arg2) {
            if (cResult[10] === arg1) {
              if (cResult[11] === id) {
                let tmp12 = cResult[12];
              }
              const effect = noop.useEffect(tmp9, tmp12);
              if (cResult[13] === messageCount) {
                if (cResult[14] === mostRecentMessage) {
                  if (cResult[15] === thread) {
                    let tmp15 = cResult[16];
                  }
                  return tmp15;
                }
              }
              let obj2 = { thread, messageCount, mostRecentMessage };
              cResult[13] = messageCount;
              cResult[14] = mostRecentMessage;
              cResult[15] = thread;
              cResult[16] = obj2;
              tmp15 = obj2;
            }
          }
        }
        const items1 = [id, arg2, arg1, id];
        cResult[8] = id;
        cResult[9] = arg2;
        cResult[10] = arg1;
        cResult[11] = id;
        cResult[12] = items1;
        tmp12 = items1;
      }
    }
    const fn2 = function y() {
      let tmp = null != closure_1;
      if (tmp) {
        tmp = null != id;
      }
      if (tmp) {
        tmp = closure_1.hasFlag(constants.HAS_THREAD) || closure_2;
        const tmp4 = closure_1.hasFlag(constants.HAS_THREAD) || closure_2;
      }
      if (tmp) {
        tmp = null == ThreadMessageStore.getMostRecentMessage(closure_1.id);
      }
      if (tmp) {
        ChannelActionCreatorsDefault.preload(id.id, closure_1.id);
        const obj4 = { channelId: closure_1.id, isPreload: true, limit: 25 };
        const messages = MessageActionCreatorsDefault.fetchMessages(obj4);
      }
    };
    cResult[4] = id;
    cResult[5] = arg2;
    cResult[6] = arg1;
    cResult[7] = fn2;
    tmp9 = fn2;
    const tmpResult = tmp(504);
  }
  const fn = function h() {
    if (null != closure_1) {
      if (null != closure_0) {
        let channel = ChannelStore.getChannel(closure_1.id);
        if (channel == null) {
          channel = null;
        }
        let obj = { thread: channel, messageCount: null, mostRecentMessage: null };
        let num = ThreadMessageStore.getCount(closure_1.id);
        if (num == null) {
          num = 0;
        }
        obj.messageCount = num;
        obj.mostRecentMessage = ThreadMessageStore.getMostRecentMessage(closure_1.id);
      }
      return obj;
    }
    obj = { thread: null, messageCount: 0, mostRecentMessage: null };
  };
  cResult[1] = id;
  cResult[2] = arg1;
  cResult[3] = fn;
  tmp7 = fn;
  let obj = require("c");
  tmp = _require;
}) : (function useThread(id, arg1, arg2) {
  _require = id;
  closure_1 = arg1;
  dependencyMap = arg2;
  const items = [ChannelStore, ThreadMessageStore];
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(items, () => {
    if (null != closure_1) {
      if (null != closure_0) {
        let channel = ChannelStore.getChannel(closure_1.id);
        if (channel == null) {
          channel = null;
        }
        let obj = { thread: channel, messageCount: null, mostRecentMessage: null };
        let num = ThreadMessageStore.getCount(closure_1.id);
        if (num == null) {
          num = 0;
        }
        obj.messageCount = num;
        obj.mostRecentMessage = ThreadMessageStore.getMostRecentMessage(closure_1.id);
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
    let tmp = null != closure_1;
    if (tmp) {
      tmp = null != id;
    }
    if (tmp) {
      tmp = closure_1.hasFlag(constants.HAS_THREAD) || closure_2;
      const tmp4 = closure_1.hasFlag(constants.HAS_THREAD) || closure_2;
    }
    if (tmp) {
      tmp = null == ThreadMessageStore.getMostRecentMessage(closure_1.id);
    }
    if (tmp) {
      ChannelActionCreatorsDefault.preload(id.id, closure_1.id);
      const obj4 = { channelId: closure_1.id, isPreload: true, limit: 25 };
      const messages = MessageActionCreatorsDefault.fetchMessages(obj4);
    }
  }, items1);
  return { thread, messageCount, mostRecentMessage };
});
let closure_20 = tmp5;
ReactCompilerGating = fn(558);
let closure_21 = ReactCompilerGating.isReactCompilerEnabled() ? (function AddEmojiButton(channel) {
  const cResult = channel(handleItemInteracted[17]).c(17);
  channel = channel.channel;
  const onPressEmoji = channel.onPressEmoji;
  ({ showText, disabled, handleItemInteracted } = channel);
  const tmp4 = closure_19();
  if (cResult[0] === channel) {
    if (cResult[1] === handleItemInteracted) {
      if (cResult[2] === onPressEmoji) {
        let tmp5 = cResult[3];
      }
      let disabled1 = null;
      if (disabled) {
        disabled1 = tmp4.disabled;
      }
      if (cResult[4] === tmp4.addEmojiContainer) {
        if (cResult[5] === tmp4.emojiContainer) {
          if (cResult[6] === disabled1) {
            let tmp7 = cResult[7];
          }
          const _Symbol = Symbol;
          if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
            const intl = tmp(handleItemInteracted[22]).intl;
            const stringResult = intl.string(tmp(handleItemInteracted[22]).t.lfIHs4);
            cResult[8] = stringResult;
            let tmp9 = stringResult;
          } else {
            tmp9 = cResult[8];
          }
          const _Symbol2 = Symbol;
          if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp13 = closure_15(tmp(handleItemInteracted[23]).ReactionIcon, { size: "sm" });
            cResult[9] = tmp13;
            let tmp11 = tmp13;
          } else {
            tmp11 = cResult[9];
          }
          if (cResult[10] !== showText) {
            let tmp15 = showText;
            if (showText) {
              let obj2 = { variant: "text-sm/semibold", color: "redesign-button-tertiary-text", children: null };
              const intl2 = tmp(handleItemInteracted[22]).intl;
              obj2.children = intl2.string(tmp(handleItemInteracted[22]).t.m9O1gd);
              tmp15 = closure_15(tmp(handleItemInteracted[24]).Text, obj2);
            }
            cResult[10] = showText;
            cResult[11] = tmp15;
            let tmp14 = tmp15;
          } else {
            tmp14 = cResult[11];
          }
          if (cResult[12] === disabled) {
            if (cResult[13] === tmp5) {
              if (cResult[14] === tmp7) {
                if (cResult[15] === tmp14) {
                  let tmp17 = cResult[16];
                }
                return tmp17;
              }
            }
          }
          const obj3 = { onPress: tmp5, style: tmp7, accessible: true, accessibilityLabel: tmp9, disabled, children: null };
          const items = [tmp11, tmp14];
          obj3.children = items;
          const tmp19 = closure_16(tmp(handleItemInteracted[25]).PressableOpacity, obj3);
          cResult[12] = disabled;
          cResult[13] = tmp5;
          cResult[14] = tmp7;
          cResult[15] = tmp14;
          cResult[16] = tmp19;
          tmp17 = tmp19;
        }
      }
      const items1 = [, , ];
      ({ emojiContainer: arr[0], addEmojiContainer: arr[1] } = tmp4);
      items1[2] = disabled1;
      cResult[4] = tmp4.addEmojiContainer;
      cResult[5] = tmp4.emojiContainer;
      cResult[6] = disabled1;
      cResult[7] = items1;
      tmp7 = items1;
    }
  }
  const fn = function n() {
    handleItemInteracted("press_reaction_picker", { actionGestureType: "press", actionTargetElement: "reaction_picker_button", actionIntentType: "open", actionDestinationType: null });
    const obj2 = { pickerIntention: EmojiIntention.REACTION, autoFocus: false, startExpanded: false, onPressEmoji, channel, guildId: null };
    let guild_id;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    obj2.guildId = guild_id;
    const result = openEmojiPickerActionSheet.openEmojiPickerActionSheet(obj2);
  };
  cResult[0] = channel;
  cResult[1] = handleItemInteracted;
  cResult[2] = onPressEmoji;
  cResult[3] = fn;
  tmp5 = fn;
  const obj = channel(handleItemInteracted[17]);
}) : (function AddEmojiButton(channel) {
  channel = channel.channel;
  const onPressEmoji = channel.onPressEmoji;
  ({ showText, disabled, handleItemInteracted } = channel);
  const tmp = closure_19();
  const items = [channel, onPressEmoji, handleItemInteracted];
  const callback = noop.useCallback(() => {
    handleItemInteracted("press_reaction_picker", { actionGestureType: "press", actionTargetElement: "reaction_picker_button", actionIntentType: "open", actionDestinationType: null });
    const obj2 = { pickerIntention: EmojiIntention.REACTION, autoFocus: false, startExpanded: false, onPressEmoji, channel, guildId: null };
    let guild_id;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    obj2.guildId = guild_id;
    const result = openEmojiPickerActionSheet.openEmojiPickerActionSheet(obj2);
  }, items);
  const obj = { onPress: callback, style: null, accessible: true, accessibilityLabel: null, disabled: null, children: null };
  const items1 = [, , ];
  ({ emojiContainer: arr2[0], addEmojiContainer: arr2[1] } = tmp);
  let disabled1 = null;
  if (disabled) {
    disabled1 = tmp.disabled;
  }
  items1[2] = disabled1;
  obj.style = items1;
  const intl = tmp4(handleItemInteracted[22]).intl;
  obj.accessibilityLabel = intl.string(channel(handleItemInteracted[22]).t.lfIHs4);
  obj.disabled = disabled;
  const items2 = [closure_15(channel(handleItemInteracted[23]).ReactionIcon, { size: "sm" }), ];
  if (showText) {
    let obj2 = { variant: "text-sm/semibold", color: "redesign-button-tertiary-text", children: null };
    const intl2 = tmp4(handleItemInteracted[22]).intl;
    obj2.children = intl2.string(tmp4(handleItemInteracted[22]).t.m9O1gd);
    showText = closure_15(tmp4(handleItemInteracted[24]).Text, obj2);
  }
  items2[1] = showText;
  obj.children = items2;
  return closure_16(channel(handleItemInteracted[25]).PressableOpacity, obj);
});
ReactCompilerGating = fn(558);
let closure_23 = ReactCompilerGating.isReactCompilerEnabled() ? (function ForwardButton(arg0) {
  const cResult = c.c(10);
  ({ onPress, disabled } = arg0);
  const tmp4 = closure_19();
  let disabled1 = null;
  if (disabled) {
    disabled1 = tmp4.disabled;
  }
  if (cResult[0] === tmp4.addEmojiContainer) {
    if (cResult[1] === tmp4.emojiContainer) {
      if (cResult[2] === disabled1) {
        let tmp6 = cResult[3];
      }
      const _Symbol = Symbol;
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = util.intl;
        const stringResult = intl.string(util.t.xIUfJS);
        const tmp13 = value2(ForwardingIconDefault, { size: "sm" });
        cResult[4] = stringResult;
        cResult[5] = tmp13;
        let tmp9 = tmp13;
        let tmp8 = stringResult;
      } else {
        tmp8 = cResult[4];
        tmp9 = cResult[5];
      }
      if (cResult[6] === disabled) {
        if (cResult[7] === onPress) {
          if (cResult[8] === tmp6) {
            let tmp14 = cResult[9];
          }
          return tmp14;
        }
      }
      const obj2 = { onPress, style: tmp6, accessible: true, disabled, accessibilityLabel: tmp8, children: tmp9 };
      const tmp16 = value2(Pressables.PressableOpacity, obj2);
      cResult[6] = disabled;
      cResult[7] = onPress;
      cResult[8] = tmp6;
      cResult[9] = tmp16;
      tmp14 = tmp16;
    }
  }
  const items = [, , ];
  ({ emojiContainer: arr[0], addEmojiContainer: arr[1] } = tmp4);
  items[2] = disabled1;
  cResult[0] = tmp4.addEmojiContainer;
  cResult[1] = tmp4.emojiContainer;
  cResult[2] = disabled1;
  cResult[3] = items;
  tmp6 = items;
}) : (function ForwardButton(disabled) {
  disabled = disabled.disabled;
  const tmp = closure_19();
  const obj = { onPress: disabled.onPress, style: null, accessible: true, disabled: null, accessibilityLabel: null, children: null };
  const items = [, , ];
  ({ emojiContainer: arr[0], addEmojiContainer: arr[1] } = tmp);
  let disabled1 = null;
  if (disabled) {
    disabled1 = tmp.disabled;
  }
  items[2] = disabled1;
  obj.style = items;
  obj.disabled = disabled;
  const intl = util.intl;
  obj.accessibilityLabel = intl.string(util.t.xIUfJS);
  obj.children = value2(ForwardingIconDefault, { size: "sm" });
  return value2(Pressables.PressableOpacity, obj);
});
ReactCompilerGating = fn(558);
let closure_24 = ReactCompilerGating.isReactCompilerEnabled() ? (function ReplyButton(arg0) {
  const cResult = c.c(10);
  ({ onPress, disabled } = arg0);
  const tmp4 = closure_19();
  let disabled1 = null;
  if (disabled) {
    disabled1 = tmp4.disabled;
  }
  if (cResult[0] === tmp4.addEmojiContainer) {
    if (cResult[1] === tmp4.emojiContainer) {
      if (cResult[2] === disabled1) {
        let tmp6 = cResult[3];
      }
      const _Symbol = Symbol;
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = util.intl;
        const stringResult = intl.string(util.t["5NwaNY"]);
        const tmp12 = value2(ArrowAngleLeftUpIcon.ArrowAngleLeftUpIcon, { size: "sm" });
        cResult[4] = stringResult;
        cResult[5] = tmp12;
        let tmp9 = tmp12;
        let tmp8 = stringResult;
      } else {
        tmp8 = cResult[4];
        tmp9 = cResult[5];
      }
      if (cResult[6] === disabled) {
        if (cResult[7] === onPress) {
          if (cResult[8] === tmp6) {
            let tmp13 = cResult[9];
          }
          return tmp13;
        }
      }
      const obj2 = { onPress, style: tmp6, accessible: true, disabled, accessibilityLabel: tmp8, children: tmp9 };
      const tmp15 = value2(Pressables.PressableOpacity, obj2);
      cResult[6] = disabled;
      cResult[7] = onPress;
      cResult[8] = tmp6;
      cResult[9] = tmp15;
      tmp13 = tmp15;
    }
  }
  const items = [, , ];
  ({ emojiContainer: arr[0], addEmojiContainer: arr[1] } = tmp4);
  items[2] = disabled1;
  cResult[0] = tmp4.addEmojiContainer;
  cResult[1] = tmp4.emojiContainer;
  cResult[2] = disabled1;
  cResult[3] = items;
  tmp6 = items;
}) : (function ReplyButton(disabled) {
  disabled = disabled.disabled;
  const tmp = closure_19();
  const obj = { onPress: disabled.onPress, style: null, accessible: true, disabled: null, accessibilityLabel: null, children: null };
  const items = [, , ];
  ({ emojiContainer: arr[0], addEmojiContainer: arr[1] } = tmp);
  let disabled1 = null;
  if (disabled) {
    disabled1 = tmp.disabled;
  }
  items[2] = disabled1;
  obj.style = items;
  obj.disabled = disabled;
  const intl = util.intl;
  obj.accessibilityLabel = intl.string(util.t["5NwaNY"]);
  obj.children = value2(ArrowAngleLeftUpIcon.ArrowAngleLeftUpIcon, { size: "sm" });
  return value2(Pressables.PressableOpacity, obj);
});
ReactCompilerGating = fn(558);
let closure_25 = ReactCompilerGating.isReactCompilerEnabled() ? (function ThreadAsCommentsButton(parentMessage) {
  const cResult = parentMessage(handleItemInteracted[17]).c(34);
  parentMessage = parentMessage.parentMessage;
  const threadData = parentMessage.threadData;
  ({ style, handleItemInteracted } = parentMessage);
  const tmp4 = closure_19();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PermissionStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== parentMessage.id) {
    const fn = function o() {
      return PermissionStore.canWithPartialContext(constants2.VIEW_CHANNEL, { channelId: parentMessage.id });
    };
    cResult[1] = parentMessage.id;
    cResult[2] = fn;
  }
  parentMessage(handleItemInteracted[18]);
  if (cResult[3] === handleItemInteracted) {
    if (cResult[4] === parentMessage) {
      if (cResult[5] === threadData.thread) {
        let tmp10 = cResult[6];
      }
      if (tmp9) {
        if (0 !== threadData.messageCount) {
          if (null != threadData.thread) {
            if (null != threadData.mostRecentMessage) {
              let str = "9+";
              if (threadData.messageCount <= 9) {
                str = threadData.messageCount;
              }
              if (cResult[19] === style) {
                if (cResult[20] === tmp4.comments) {
                  let tmp22 = cResult[21];
                }
                if (cResult[22] !== tmp4.commentsIcon) {
                  let obj2 = { style: tmp4.commentsIcon };
                  const tmp25 = closure_15(tmp(handleItemInteracted[36]).ChatIcon, obj2);
                  cResult[22] = tmp4.commentsIcon;
                  cResult[23] = tmp25;
                  let tmp23 = tmp25;
                } else {
                  tmp23 = cResult[23];
                }
                if (cResult[24] !== str) {
                  const obj3 = { variant: "text-md/semibold", color: "text-strong", children: str };
                  const tmp28 = closure_15(tmp(handleItemInteracted[24]).Text, obj3);
                  cResult[24] = str;
                  cResult[25] = tmp28;
                  let tmp26 = tmp28;
                } else {
                  tmp26 = cResult[25];
                }
                if (cResult[26] === tmp4.commentCount) {
                  if (cResult[27] === tmp23) {
                    if (cResult[28] === tmp26) {
                      let tmp29 = cResult[29];
                    }
                    if (cResult[30] === tmp10) {
                      if (cResult[31] === tmp22) {
                        if (cResult[32] === tmp29) {
                          let tmp33 = cResult[33];
                        }
                        return tmp33;
                      }
                    }
                    const obj4 = { style: tmp22, onPress: tmp10, children: tmp29 };
                    const tmp35 = closure_15(tmp(handleItemInteracted[25]).PressableHighlight, obj4);
                    cResult[30] = tmp10;
                    cResult[31] = tmp22;
                    cResult[32] = tmp29;
                    cResult[33] = tmp35;
                    tmp33 = tmp35;
                  }
                }
                const obj5 = { style: tmp4.commentCount, children: null };
                const items1 = [tmp23, tmp26];
                obj5.children = items1;
                const tmp32 = closure_16(closure_5, obj5);
                cResult[26] = tmp4.commentCount;
                cResult[27] = tmp23;
                cResult[28] = tmp26;
                cResult[29] = tmp32;
                tmp29 = tmp32;
              }
              const items2 = [tmp4.comments, style];
              cResult[19] = style;
              cResult[20] = tmp4.comments;
              cResult[21] = items2;
              tmp22 = items2;
            }
          }
          if (cResult[7] === style) {
            if (cResult[8] === tmp4.comments) {
              let tmp11 = cResult[9];
            }
            if (cResult[10] !== tmp4.commentsIcon) {
              const obj6 = { style: tmp4.commentsIcon };
              const tmp14 = closure_15(tmp(handleItemInteracted[36]).ChatIcon, obj6);
              cResult[10] = tmp4.commentsIcon;
              cResult[11] = tmp14;
              let tmp12 = tmp14;
            } else {
              tmp12 = cResult[11];
            }
            if (cResult[12] === tmp4.commentCount) {
              if (cResult[13] === tmp12) {
                let tmp15 = cResult[14];
              }
              if (cResult[15] === tmp10) {
                if (cResult[16] === tmp11) {
                  if (cResult[17] === tmp15) {
                    let tmp19 = cResult[18];
                  }
                  return tmp19;
                }
              }
              const obj7 = { style: tmp11, onPress: tmp10, children: tmp15 };
              const tmp21 = closure_15(tmp(handleItemInteracted[25]).PressableHighlight, obj7);
              cResult[15] = tmp10;
              cResult[16] = tmp11;
              cResult[17] = tmp15;
              cResult[18] = tmp21;
              tmp19 = tmp21;
            }
            const obj8 = { style: tmp4.commentCount, children: tmp12 };
            const tmp18 = closure_15(closure_5, obj8);
            cResult[12] = tmp4.commentCount;
            cResult[13] = tmp12;
            cResult[14] = tmp18;
            tmp15 = tmp18;
          }
          const items3 = [tmp4.comments, style];
          cResult[7] = style;
          cResult[8] = tmp4.comments;
          cResult[9] = items3;
          tmp11 = items3;
        }
      }
      return null;
    }
  }
  class T {
    constructor() {
      tmp = handleItemInteracted("press_comments", { actionGestureType: "press", actionTargetElement: "thread_comments_button", actionIntentType: "navigate", actionDestinationType: "channel" });
      obj = parentMessage;
      tmp2 = null != parentMessage;
      if (tmp2) {
        tmp3 = threadData;
        tmp2 = null != threadData.thread;
      }
      if (tmp2) {
        tmp4 = closure_0;
        tmp5 = closure_2;
        obj2 = closure_0(closure_2[35]);
        tmp6 = threadData;
        navigateToPostResult = obj2.navigateToPost(obj.getChannelId(), threadData.thread.guild_id, obj.id);
      }
      return;
    }
  }
  cResult[3] = handleItemInteracted;
  cResult[4] = parentMessage;
  cResult[5] = threadData.thread;
  cResult[6] = T;
  tmp10 = T;
  const obj = parentMessage(handleItemInteracted[17]);
}) : (function ThreadAsCommentsButton(parentMessage) {
  parentMessage = parentMessage.parentMessage;
  const threadData = parentMessage.threadData;
  ({ style, handleItemInteracted } = parentMessage);
  const tmp = closure_19();
  const items = [PermissionStore];
  const items1 = [parentMessage, threadData.thread, handleItemInteracted];
  const stateFromStores = parentMessage(handleItemInteracted[18]).useStateFromStores(items, () => PermissionStore.canWithPartialContext(constants2.VIEW_CHANNEL, { channelId: parentMessage.id }));
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
          let obj2 = { style: null, onPress: null, children: null };
          const items2 = [tmp.comments, style];
          obj2.style = items2;
          obj2.onPress = callback;
          const obj3 = { style: tmp.commentCount, children: null };
          const obj4 = { style: tmp.commentsIcon };
          const items3 = [closure_15(tmp2(handleItemInteracted[36]).ChatIcon, obj4), ];
          const obj5 = { variant: "text-md/semibold", color: "text-strong", children: str };
          items3[1] = closure_15(tmp2(handleItemInteracted[24]).Text, obj5);
          obj3.children = items3;
          obj2.children = closure_16(closure_5, obj3);
          return closure_15(tmp2(handleItemInteracted[25]).PressableHighlight, obj2);
        }
      }
      const obj6 = { style: null, onPress: null, children: null };
      const items4 = [tmp.comments, style];
      obj6.style = items4;
      obj6.onPress = callback;
      const obj7 = { style: tmp.commentCount, children: null };
      const obj8 = { style: tmp.commentsIcon };
      obj7.children = closure_15(tmp2(handleItemInteracted[36]).ChatIcon, obj8);
      obj6.children = closure_15(closure_5, obj7);
      return closure_15(tmp2(handleItemInteracted[25]).PressableHighlight, obj6);
    }
  }
  return null;
});
ReactCompilerGating = fn(558);
function onAddReaction(arg0, arg1, byName, burst) {
  if (null != byName) {
    const obj2 = ReactionActionCreators;
    const obj3 = { burst };
    obj2.addReaction(arg0, arg1, ReactionUtils.toReactionEmoji(byName), ReactionActionCreators.ReactionLocations.MESSAGE, obj3);
    const toReactionEmojiResult = ReactionUtils.toReactionEmoji(byName);
  }
}
let size = fn(2);
let result = size.fileFinishedImporting("modules/icymi/native/ICYMICardInteractionRow.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ICYMICardInteractionRow(message) {
  const cResult = require("c").c(57);
  message = message.message;
  channel = message.channel;
  ({ hideAdditionalButtons, isKeyMessage, inForum, backgroundVariant, id } = message);
  const itemType = message.itemType;
  let tmp4 = undefined !== hideAdditionalButtons;
  if (tmp4) {
    tmp4 = hideAdditionalButtons;
  }
  closure_19();
  const tmp8 = closure_20(message.guild, message, undefined !== inForum && inForum);
  if (cResult[0] !== message.reactions) {
    const items = [];
    _require = items;
    const reactions = message.reactions;
    const item = reactions.forEach((me_vote) => {
      if (null == me_vote.me_vote) {
        if (me_vote.burst_count > 0) {
          const obj = {};
          const merged = Object.assign(me_vote);
          obj.type = MessageReactionsTypes.ReactionTypes.BURST;
          closure_0.push(obj);
        }
        if (me_vote.count > 0) {
          const obj2 = {};
          const merged1 = Object.assign(me_vote);
          obj2.type = MessageReactionsTypes.ReactionTypes.NORMAL;
          closure_0.push(obj2);
        }
      }
    });
    cResult[0] = message.reactions;
    cResult[1] = items;
    const arr = items;
  } else {
    _require = cResult[1];
  }
  if (cResult[2] !== channel) {
    let tmp12 = null != channel;
    if (tmp12) {
      tmp12 = message(tmp2[38])(channel);
    }
    cResult[2] = channel;
    cResult[3] = tmp12;
  }
  let obj = require("c");
  const tmp5 = undefined !== inForum && inForum;
  const canForwardMessage = require("canForwardMessage").useCanForwardMessage(message);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [PermissionStore];
    cResult[4] = items1;
    let tmp15 = items1;
  } else {
    tmp15 = cResult[4];
  }
  if (cResult[5] !== channel) {
    class W {
      constructor() {
        return closure_10.can(Permissions.SEND_MESSAGES, channel);
      }
    }
    cResult[5] = channel;
    cResult[6] = W;
  } else {
    class W {
      constructor() {
        return closure_10.can(Permissions.SEND_MESSAGES, channel);
      }
    }
  }
  const tmpResult = require("canForwardMessage");
  const stateFromStores = require("initialize").useStateFromStores(tmp15, W);
  if (tmp4) {
    class W {
      constructor() {
        return closure_10.can(Permissions.SEND_MESSAGES, channel);
      }
    }
  }
  let diff = num8;
  if (tmp8.messageCount > 0) {
    class W {
      constructor() {
        return closure_10.can(Permissions.SEND_MESSAGES, channel);
      }
    }
    diff = num8 - 1;
  }
  if (arr.length > diff) {
    class W {
      constructor() {
        return closure_10.can(Permissions.SEND_MESSAGES, channel);
      }
    }
  }
  let tmp20 = !tmp4;
  if (!tmp4) {
    class W {
      constructor() {
        return closure_10.can(Permissions.SEND_MESSAGES, channel);
      }
    }
    if (!stateFromStores) {
      class W {
        constructor() {
          return closure_10.can(Permissions.SEND_MESSAGES, channel);
        }
      }
    }
    tmp20 = tmp21;
  }
  if (cResult[7] === 0 > 0) {
    class W {
      constructor() {
        return closure_10.can(Permissions.SEND_MESSAGES, channel);
      }
    }
  }
  cResult[7] = 0 > 0;
  cResult[8] = tmp20;
  cResult[9] = tmp8.messageCount > 0;
  cResult[10] = { hasOverflow: 0 > 0, showReplyForwardButtons: tmp20, showThreadAsComments: tmp8.messageCount > 0 };
  let obj2 = { hasOverflow: 0 > 0, showReplyForwardButtons: tmp20, showThreadAsComments: tmp8.messageCount > 0 };
  const tmpResult2 = require("initialize");
}) : (function ICYMICardInteractionRow(message) {
  message = message.message;
  const channel = message.channel;
  let flag = message.hideAdditionalButtons;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = message.isKeyMessage;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let flag3 = message.inForum;
  if (flag3 === undefined) {
    flag3 = false;
  }
  let str = message.backgroundVariant;
  if (str === undefined) {
    str = "primary";
  }
  let id = message.id;
  const itemType = message.itemType;
  let stateFromStores;
  c12 = undefined;
  const tmp = closure_19();
  let tmp2 = closure_20(message.guild, message, flag3);
  const messageCount = tmp2;
  let items = [message.reactions];
  const memo = str.useMemo(() => {
    const items = [];
    const reactions = message.reactions;
    const item = reactions.forEach((me_vote) => {
      if (null == me_vote.me_vote) {
        if (me_vote.burst_count > 0) {
          const obj = {};
          const merged = Object.assign(me_vote);
          obj.type = message(flag[37]).ReactionTypes.BURST;
          items.push(obj);
        }
        if (me_vote.count > 0) {
          const obj2 = {};
          const merged1 = Object.assign(me_vote);
          obj2.type = message(flag[37]).ReactionTypes.NORMAL;
          items.push(obj2);
        }
      }
    });
    return items;
  }, items);
  const items1 = [channel];
  const memo1 = str.useMemo(() => {
    let tmp2 = null != channel;
    if (tmp2) {
      tmp2 = canAddNewReactionsDefault(tmp);
    }
    return tmp2;
  }, items1);
  const canForwardMessage = message(flag[39]).useCanForwardMessage(message);
  let obj = message(flag[39]);
  const tmp4 = message;
  const items2 = [stateFromStores];
  stateFromStores = message(flag[18]).useStateFromStores(items2, () => PermissionStore.can(constants2.SEND_MESSAGES, channel));
  const items3 = [flag, tmp2.messageCount, memo.length, stateFromStores, canForwardMessage];
  const memo2 = str.useMemo(() => {
    let num = 4;
    if (flag) {
      num = 6;
    }
    let diff = num;
    if (messageCount.messageCount > 0) {
      diff = num - 1;
    }
    let num3 = 0;
    if (memo.length > diff) {
      num3 = memo.length - diff;
    }
    const obj = { hasOverflow: num3 > 0, showReplyForwardButtons: null, showThreadAsComments: null };
    let tmp5 = !flag;
    if (!flag) {
      let tmp6 = stateFromStores;
      if (!stateFromStores) {
        tmp6 = canForwardMessage;
      }
      tmp5 = tmp6;
    }
    obj.showReplyForwardButtons = tmp5;
    obj.showThreadAsComments = messageCount.messageCount > 0;
    return obj;
  }, items3);
  ({ hasOverflow, showReplyForwardButtons, showThreadAsComments } = memo2);
  const items4 = [id, itemType];
  const handleItemInteracted = str.useCallback((open_profile, actionParameters) => {
    ICYMIActionCreatorsDefault.itemInteracted(id, itemType, open_profile);
    ICYMIActionCreatorsDefault.feedItemActioned({ itemId: id, itemType, actionParameters });
  }, items4);
  const items5 = [channel.id, message.id, handleItemInteracted];
  const items6 = [message, handleItemInteracted];
  const callback1 = str.useCallback((byName, burst) => {
    callback("press_reaction", { actionGestureType: "press", actionTargetElement: "add_new_reaction_button", actionIntentType: "open", actionDestinationType: null });
    id = channel.id;
    const id2 = message.id;
    if (null != byName) {
      const obj2 = ReactionActionCreators;
      const obj3 = { burst };
      obj2.addReaction(id, id2, ReactionUtils.toReactionEmoji(byName), ReactionActionCreators.ReactionLocations.MESSAGE, obj3);
      const toReactionEmojiResult = ReactionUtils.toReactionEmoji(byName);
    }
  }, items5);
  const items7 = [channel, message, handleItemInteracted];
  const callback2 = str.useCallback(() => {
    callback("press_forward", { actionGestureType: "press", actionTargetElement: "forward_button", actionIntentType: "share", actionDestinationType: "channel" });
    ForwardModalUtils.openForwardModal({ message, source: "icymi-tab" });
  }, items6);
  const items8 = [str, flag2];
  const callback3 = str.useCallback(() => {
    callback("press_reply", { actionGestureType: "press", actionTargetElement: "reply_button", actionIntentType: "reply", actionDestinationType: "channel" });
    ICYMIShared.navigateToPost(channel.id, channel.guild_id, message.id);
    const pendingReply = PendingReplyActionCreators.createPendingReply({ channel, message, shouldMention: true, showMentionToggle: true });
  }, items7);
  const memo3 = str.useMemo(() => {
    if (flag2) {
      return nativeDefault.colors.MESSAGE_HIGHLIGHT_BACKGROUND_DEFAULT;
    } else if ("primary" === "primary") {
      return nativeDefault.colors.CARD_BACKGROUND_DEFAULT;
    } else if ("secondary" === tmp) {
      return nativeDefault.colors.CARD_SECONDARY_BG;
    } else if ("base" === tmp) {
      return nativeDefault.colors.BACKGROUND_BASE_LOW;
    }
  }, items8);
  let obj2 = message(flag[18]);
  const token = message(flag[43]).useToken(memo3);
  let obj3 = message(flag[43]);
  [tmp16, c12] = flag2(str.useState(true), 2);
  [][0] = handleItemInteracted;
  const callback4 = str.useCallback((nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    _undefined(nativeEvent.contentOffset.x + nativeEvent.layoutMeasurement.width < nativeEvent.contentSize.width);
  }, []);
  if (0 !== memo.length) {
    const obj4 = { style: tmp.container, children: null };
    const obj5 = { style: tmp.emojisRowContainer, children: null };
    if (memo.length > 0) {
      const obj6 = { style: tmp.emojisContainer, children: null };
      const obj7 = { horizontal: true, scrollEnabled: hasOverflow, contentContainerStyle: { gap: 6 }, onScroll: callback4, onScrollEndDrag: tmp18, showsHorizontalScrollIndicator: false, children: null };
      let tmp23Result = !flag;
      if (!flag) {
        let tmp26 = showReplyForwardButtons;
        if (!showReplyForwardButtons) {
          tmp26 = showThreadAsComments;
        }
        tmp23Result = tmp26;
      }
      if (tmp23Result) {
        const obj8 = { style: tmp.replyForwardButtonContainer, children: null };
        if (showThreadAsComments) {
          const obj9 = { threadData: tmp2, parentMessage: message, handleItemInteracted };
          showThreadAsComments = closure_15(closure_25, obj9);
        }
        const items9 = [showThreadAsComments, ];
        if (showReplyForwardButtons) {
          const obj10 = { children: null };
          const obj11 = { onPress: callback3, disabled: !stateFromStores };
          const items10 = [closure_15(closure_24, obj11), ];
          const obj12 = { onPress: callback2, disabled: !canForwardMessage };
          items10[1] = closure_15(closure_23, obj12);
          obj10.children = items10;
          showReplyForwardButtons = closure_16(closure_17, obj10);
        }
        items9[1] = showReplyForwardButtons;
        obj8.children = items9;
        tmp23Result = closure_16(tmp21, obj8);
      }
      const items11 = [
        tmp23Result,
        memo.map((reaction, index) => {
              const obj = { messageId: message.id, channel, reaction, count: reaction.type === MessageReactionsTypes.ReactionTypes.BURST ? reaction.burst_count : reaction.count, isBurstReaction: reaction.type === MessageReactionsTypes.ReactionTypes.BURST, handleItemInteracted };
              const obj2 = { children: value2(EmojiReaction, obj) };
              return value2(hasOwnProperty, obj2, "reaction-" + index);
            }),

      ];
      let tmp20Result = null;
      if (!flag) {
        tmp20Result = null;
        if (memo1) {
          const obj13 = { channel, onPressEmoji: callback1, handleItemInteracted };
          tmp20Result = closure_15(closure_21, obj13);
        }
      }
      items11[2] = tmp20Result;
      obj7.children = items11;
      const items12 = [closure_16(itemType, obj7), ];
      let tmp23Result3 = null;
      if (hasOverflow) {
        tmp23Result3 = null;
        if (tmp16) {
          const obj14 = { children: null };
          const obj17 = { style: tmp.gradient, start: null, end: null, colors: null, locations: null };
          ({ START: obj15.start, END: obj15.end } = closure_13);
          const tmp36 = channel(tmp5[44]);
          const obj16 = channel(tmp5[45])(token);
          const items13 = [channel(tmp5[45])(token).alpha(0).hex(), token, token];
          obj17.colors = items13;
          obj17.locations = [0, 0.8, 1];
          const items14 = [closure_15(tmp36, obj17), ];
          const obj18 = { style: tmp.overflowChevron, size: "xs", color: "icon-muted" };
          items14[1] = closure_15(tmp4(tmp5[46]).ChevronSmallRightIcon, obj18);
          obj14.children = items14;
          tmp23Result3 = closure_16(closure_17, obj14);
          const alphaResult = channel(tmp5[45])(token).alpha(0);
        }
      }
      items12[1] = tmp23Result3;
      obj6.children = items12;
      let tmp23Result4 = closure_16(tmp21, obj6);
    } else {
      tmp23Result4 = null;
    }
    obj5.children = tmp23Result4;
    obj4.children = closure_15(id, obj5);
    let tmp20Result2 = closure_15(tmp21, obj4);
  } else {
    tmp20Result2 = null;
  }
  return tmp20Result2;
});
export { onAddReaction };
export const useThread = tmp5;