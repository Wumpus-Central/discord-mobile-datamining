// === Module 16481: ICYMICardInteractionRow ===

// Module 16481 (ICYMICardInteractionRow)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl3 from "intl" /* 1126 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import EmojiConstants from "EmojiConstants" /* 1380 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1402 */;
import ReactionUtils from "ReactionUtils" /* 4527 */;
import ColorUtils from "ColorUtils" /* 4733 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 4909 */;
import Pressables from "Pressables" /* 5916 */;
import MessageActionCreatorsDefault from "MessageActionCreators" /* 6978 */;
import MessageReactionsTypes from "MessageReactionsTypes" /* 7272 */;
import ReactionActionCreators from "ReactionActionCreators" /* 7273 */;
import canAddNewReactionsDefault from "canAddNewReactions" /* 7641 */;
import ICYMIActionCreatorsDefault from "ICYMIActionCreators" /* 8039 */;
import messages_MessagesUtils from "messages/MessagesUtils" /* 9867 */;
import openEmojiPickerActionSheet2 from "openEmojiPickerActionSheet" /* 9879 */;
import PendingReplyActionCreators from "PendingReplyActionCreators" /* 11305 */;
import ForwardModalUtils from "ForwardModalUtils" /* 11319 */;
import ForwardingIconDefault from "ForwardingIcon" /* 11328 */;
import ArrowAngleLeftUpIcon from "ArrowAngleLeftUpIcon" /* 11379 */;
import ICYMIShared from "ICYMIShared" /* 16475 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ThreadMessageStore from "ThreadMessageStore" /* 6819 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildVerificationStore from "GuildVerificationStore" /* 5577 */;
import PermissionStore from "PermissionStore" /* 4515 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, message, nativeEvent, parentMessage;

let closure_12;
let closure_14;
let closure_16;
let closure_17;
let closure_18;
let hasOwnProperty;
let map1;
let metroImportDefault;
let metroRequire;
function EmojiReaction(messageId) {
  let backgroundColor1;
  let items5;
  let items6;
  let items7;
  let obj9;
  let tmp17Result;
  let tmp24;
  let tmp25;
  messageId = messageId.messageId;
  const channel = messageId.channel;
  const reaction = messageId.reaction;
  const isBurstReaction = messageId.isBurstReaction;
  const handleItemInteracted = messageId.handleItemInteracted;
  let emoji;
  const count = messageId.count;
  const tmp = closure_20();
  let tmp2 = messageId;
  let burst_colors = reaction.burst_colors;
  const useEmojiColorPalette = messageId(reaction[26]).useEmojiColorPalette;
  messageId(reaction[26]);
  if (burst_colors == null) {
    burst_colors = [];
  }
  const emojiColorPalette = useEmojiColorPalette(burst_colors);
  let str = "";
  if (null != emojiColorPalette) {
    let backgroundColor;
    const hex2rgb = tmp2(reaction[27]).hex2rgb;
    tmp2(reaction[27]);
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
    let str2 = hex2rgb(backgroundColor, num);
    if (str2 == null) {
      str2 = "";
    }
    str = str2;
  }
  let obj = { backgroundColor: str, borderColor: backgroundColor1 };
  backgroundColor1 = undefined;
  if (emojiColorPalette != null) {
    backgroundColor1 = emojiColorPalette.backgroundColor;
  }
  let accentColor;
  if (emojiColorPalette != null) {
    accentColor = emojiColorPalette.accentColor;
  }
  let tmp10 = null;
  if (null != accentColor) {
    let obj2 = { color: emojiColorPalette.accentColor };
    tmp10 = obj2;
  }
  emoji = reaction.emoji;
  let selectedInnerTextContainer = isBurstReaction ? reaction.me_burst : reaction.me;
  let selected;
  if (selectedInnerTextContainer) {
    selected = tmp.selected;
  }
  const items = [GuildVerificationStore];
  const items1 = [emoji];
  const tmp2Result3 = tmp2(reaction[18]);
  const stateFromStores = tmp2Result3.useStateFromStores(items, () => {
    const canChatInGuildResult = null != channel.guild_id && GuildVerificationStore.canChatInGuild(tmp.guild_id);
    return canChatInGuildResult;
  });
  const items2 = [channel, isBurstReaction, messageId, reaction, handleItemInteracted];
  const memo = handleItemInteracted.useMemo(() => {
    let obj2;
    let obj4;
    let tmp2;
    if (null != emoji.id) {
      const obj = { uri: obj2.getEmojiURL(obj4) };
      obj4 = { id: null, animated: null, size: 48 };
      ({ id: obj3.id, animated: obj3.animated } = emoji);
      tmp2 = obj;
      obj2 = AvatarUtilsDefault;
    }
    return tmp2;
  }, items1);
  const callback = handleItemInteracted.useCallback(() => {
    handleItemInteracted("press_reaction", { actionGestureType: "press", actionTargetElement: "toggle_existing_reaction_button", actionIntentType: "react", actionDestinationType: null });
    const obj = messages_MessagesUtils;
    const result = obj.handleAddOrRemoveReaction(messageId, channel, reaction, isBurstReaction, ReactionActionCreators.ReactionLocations.MESSAGE);
  }, items2);
  const items3 = [tmp.emojiContainer, selected, ];
  let tmp16 = isBurstReaction;
  const PressableOpacity = tmp2(tmp3[25]).PressableOpacity;
  if (isBurstReaction) {
    tmp16 = obj;
  }
  const obj3 = { style: items3, onPress: callback, accessible: true, accessibilityLabel: emoji.name, disabled: !stateFromStores, children: items7 };
  items3[2] = tmp16;
  const items4 = [tmp.innerEmojiContainer, ];
  let obj4 = { style: items4, children: tmp17Result };
  const tmp19 = selectedInnerTextContainer && tmp.selectedInnerEmojiContainer;
  items4[1] = tmp19;
  if (null == emoji.id) {
    const obj5 = { variant: "text-md/medium", color: "interactive-text-default", style: items5, allowFontScaling: false, children: emoji.name };
    items5 = [, ];
    ({ defaultEmoji: arr8[0], emojiText: arr8[1] } = tmp);
    tmp17Result = closure_16(tmp2(tmp3[24]).Text, obj5);
  } else {
    const tmp2Result4 = tmp2(reaction[14]);
    if (tmp2Result4.isAndroid()) {
      const obj6 = { style: items6, source: memo };
      items6 = [, ];
      ({ defaultEmoji: arr7[0], emojiImage: arr7[1] } = tmp);
      tmp17Result = closure_16(closure_6, obj6);
    } else {
      const obj7 = { emoji, size: v20, style: tmp.defaultEmoji, animate: true };
      tmp17Result = closure_16(channel(tmp3[30]), obj7);
    }
  }
  items7 = [closure_16(emoji, obj4), ];
  const items8 = [tmp.innerTextContainer, ];
  if (selectedInnerTextContainer) {
    selectedInnerTextContainer = tmp.selectedInnerTextContainer;
  }
  items8[1] = selectedInnerTextContainer;
  const obj8 = { style: items8, children: closure_16(tmp24, obj9) };
  obj9 = { animate: true, count, textStyle: tmp25, textVariant: "text-md/semibold" };
  tmp25 = null;
  tmp24 = channel(reaction[31]);
  if (isBurstReaction) {
    tmp25 = tmp10;
  }
  items7[1] = closure_16(emoji, obj8);
  return closure_17(PressableOpacity, obj3);
}
({ View: hasOwnProperty, Image: metroRequire, ScrollView: metroImportDefault } = react_native);
({ MessageFlags: closure_12, Permissions: map1, HorizontalGradient: closure_14 } = Constants);
const EmojiIntention = EmojiConstants.EmojiIntention;
({ jsx: closure_16, jsxs: closure_17, Fragment: closure_18 } = Fragment);
let c19 = 20;
let closure_20 = createStyles.createStyles(() => {
  let num;
  let obj3;
  let size1;
  let tmp4Result;
  const obj = { container: { flexDirection: "row", alignItems: "center", flexWrap: "wrap", justifyContent: "space-between" }, replyForwardButtonContainer: { flexDirection: "row", alignItems: "center", flexWrap: "wrap", gap: 6 }, emojisRowContainer: { position: "relative", flexDirection: "row", alignItems: "center", flexWrap: "wrap", gap: 6 }, emojisContainer: { position: "relative", flexDirection: "row", alignItems: "center", flexWrap: "wrap", gap: 6 }, emojiContainer: { flexDirection: "row", backgroundColor: nativeDefault.colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND, borderRadius: nativeDefault.radii.sm, flexShrink: 3, paddingHorizontal: 8, gap: 6 }, innerEmojiContainer: { paddingVertical: 5 }, selectedInnerEmojiContainer: { paddingVertical: 4 }, addEmojiContainer: { minHeight: 30, alignItems: "center" }, disabled: { opacity: 0.4 }, defaultEmoji: size, emojiText: { lineHeight: num, fontSize: 16, textAlign: "center", paddingTop: 2 }, selectedInnerTextContainer: { paddingBottom: 3.5 }, innerTextContainer: { alignSelf: "flex-end", paddingBottom: 4.5 }, emojiImage: { resizeMode: "contain", width: v20, height: v20 }, selected: obj3, gradient: { position: "absolute", right: 0, top: 0, bottom: 0, width: 48 }, overflowChevron: { position: "absolute", right: 0 }, comments: { paddingVertical: 6, paddingHorizontal: 8, backgroundColor: nativeDefault.colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND, borderRadius: nativeDefault.radii.sm, display: "flex", flexDirection: "row", alignItems: "center", gap: 8 }, commentCount: { display: "flex", flexDirection: "row", alignItems: "center", gap: 4, justifySelf: "end" }, commentsIcon: size1 };
  size = { width: v20, height: v20 };
  ({ flexDirection: "row", backgroundColor: nativeDefault.colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND, borderRadius: nativeDefault.radii.sm, flexShrink: 3, paddingHorizontal: 8, gap: 6 });
  num = 16;
  const obj4 = PlatformUtils;
  if (!obj4.isAndroid()) {
    num = v20;
  }
  obj3 = { borderColor: nativeDefault.unsafe_rawColors.BRAND_560, borderWidth: 1, paddingHorizontal: 7, backgroundColor: tmp4Result.hexWithOpacity(nativeDefault.unsafe_rawColors.BRAND_500, 0.3) };
  tmp4Result = ColorUtils;
  ({ paddingVertical: 6, paddingHorizontal: 8, backgroundColor: nativeDefault.colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND, borderRadius: nativeDefault.radii.sm, display: "flex", flexDirection: "row", alignItems: "center", gap: 8 });
  size1 = { width: 20, height: 20, tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
  return obj;
});
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((id, arg1, arg2) => {
  let closure_2;
  let first;
  let messageCount;
  let mostRecentMessage;
  let thread;
  _require = id;
  let closure_1 = arg1;
  dependencyMap = arg2;
  let tmp = _require;
  let obj = require("react");
  const cResult = obj.c(17);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore, ThreadMessageStore];
    let num = 0;
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === id) {
    let tmp7;
    if (cResult[2] === arg1) {
      tmp7 = cResult[3];
    }
    const tmpResult = tmp(504);
    const stateFromStoresObject = tmpResult.useStateFromStoresObject(first, tmp7);
    ({ thread, messageCount, mostRecentMessage } = stateFromStoresObject);
    if (cResult[4] === id) {
      if (cResult[5] === arg2) {
        let tmp9;
        if (cResult[6] === arg1) {
          tmp9 = cResult[7];
        }
        id = undefined;
        if (id != null) {
          id = id.id;
        }
        if (cResult[8] === id) {
          if (cResult[9] === arg2) {
            if (cResult[10] === arg1) {
              let tmp12;
              if (cResult[11] === id) {
                tmp12 = cResult[12];
              }
              const effect = react.useEffect(tmp9, tmp12);
              if (cResult[13] === messageCount) {
                if (cResult[14] === mostRecentMessage) {
                  let tmp15;
                  if (cResult[15] === thread) {
                    tmp15 = cResult[16];
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
      let tmp = null != closure_1 && null != id;
      if (tmp) {
        tmp = closure_1.hasFlag(constants.HAS_THREAD) || closure_2;
        closure_1.hasFlag(constants.HAS_THREAD) || closure_2;
      }
      if (tmp) {
        tmp = null == ThreadMessageStore.getMostRecentMessage(closure_1.id);
      }
      if (tmp) {
        const obj2 = ChannelActionCreatorsDefault;
        obj2.preload(id.id, closure_1.id);
        const obj4 = { channelId: closure_1.id, isPreload: true, limit: 25 };
        const obj3 = MessageActionCreatorsDefault;
        const messages = obj3.fetchMessages(obj4);
      }
    };
    cResult[4] = id;
    cResult[5] = arg2;
    cResult[6] = arg1;
    cResult[7] = fn2;
    tmp9 = fn2;
  }
  const fn = function c() {
    let num;
    if (null != closure_1) {
      let obj;
      if (null != id) {
        let channel = ChannelStore.getChannel(closure_1.id);
        if (channel == null) {
          channel = null;
        }
        obj = { thread: channel, messageCount: num, mostRecentMessage: ThreadMessageStore.getMostRecentMessage(closure_1.id) };
        num = ThreadMessageStore.getCount(closure_1.id);
        if (num == null) {
          num = 0;
        }
      }
      return obj;
    }
    obj = { thread: null, messageCount: 0, mostRecentMessage: null };
  };
  cResult[1] = id;
  cResult[2] = arg1;
  cResult[3] = fn;
  tmp7 = fn;
}) : ((id, arg1, arg2) => {
  let closure_2;
  let messageCount;
  let mostRecentMessage;
  let thread;
  _require = id;
  let closure_1 = arg1;
  dependencyMap = arg2;
  let obj = require("get initialized");
  const items = [ChannelStore, ThreadMessageStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    let num;
    if (null != closure_1) {
      let obj;
      if (null != id) {
        let channel = ChannelStore.getChannel(closure_1.id);
        if (channel == null) {
          channel = null;
        }
        obj = { thread: channel, messageCount: num, mostRecentMessage: ThreadMessageStore.getMostRecentMessage(closure_1.id) };
        num = ThreadMessageStore.getCount(closure_1.id);
        if (num == null) {
          num = 0;
        }
      }
      return obj;
    }
    obj = { thread: null, messageCount: 0, mostRecentMessage: null };
  });
  id = undefined;
  ({ thread, messageCount, mostRecentMessage } = stateFromStoresObject);
  const useEffect = react.useEffect;
  if (id != null) {
    id = id.id;
  }
  const items1 = [id, arg2, arg1, id];
  const effect = useEffect(() => {
    let tmp = null != closure_1 && null != id;
    if (tmp) {
      tmp = closure_1.hasFlag(constants.HAS_THREAD) || closure_2;
      closure_1.hasFlag(constants.HAS_THREAD) || closure_2;
    }
    if (tmp) {
      tmp = null == ThreadMessageStore.getMostRecentMessage(closure_1.id);
    }
    if (tmp) {
      const obj2 = ChannelActionCreatorsDefault;
      obj2.preload(id.id, closure_1.id);
      const obj4 = { channelId: closure_1.id, isPreload: true, limit: 25 };
      const obj3 = MessageActionCreatorsDefault;
      const messages = obj3.fetchMessages(obj4);
    }
  }, items1);
  return { thread, messageCount, mostRecentMessage };
});
let closure_21 = tmp5;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_22 = ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  let disabled;
  let handleItemInteracted;
  let intl2;
  let items;
  let showText;
  let obj = channel(handleItemInteracted[17]);
  const cResult = obj.c(17);
  channel = channel.channel;
  const onPressEmoji = channel.onPressEmoji;
  ({ showText, disabled, handleItemInteracted } = channel);
  const tmp4 = closure_20();
  if (cResult[0] === channel) {
    if (cResult[1] === handleItemInteracted) {
      let tmp5;
      if (cResult[2] === onPressEmoji) {
        tmp5 = cResult[3];
      }
      let disabled1 = null;
      if (disabled) {
        disabled1 = tmp4.disabled;
      }
      if (cResult[4] === tmp4.addEmojiContainer) {
        if (cResult[5] === tmp4.emojiContainer) {
          let tmp7;
          let tmp9;
          let tmp11;
          let tmp14;
          if (cResult[6] === disabled1) {
            tmp7 = cResult[7];
          }
          const _Symbol = Symbol;
          if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
            const intl = tmp(handleItemInteracted[22]).intl;
            const stringResult = intl.string(channel(handleItemInteracted[22]).t.lfIHs4);
            cResult[8] = stringResult;
            tmp9 = stringResult;
          } else {
            tmp9 = cResult[8];
          }
          const _Symbol2 = Symbol;
          if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp13 = closure_16(channel(handleItemInteracted[23]).ReactionIcon, { size: "sm" });
            cResult[9] = tmp13;
            tmp11 = tmp13;
          } else {
            tmp11 = cResult[9];
          }
          if (cResult[10] !== showText) {
            let tmp15 = showText;
            if (tmp15) {
              const obj2 = { variant: "text-sm/semibold", color: "redesign-button-tertiary-text", children: intl2.string(channel(handleItemInteracted[22]).t.m9O1gd) };
              const Text = tmp(handleItemInteracted[24]).Text;
              intl2 = tmp(handleItemInteracted[22]).intl;
              tmp15 = closure_16(Text, obj2);
            }
            cResult[10] = showText;
            cResult[11] = tmp15;
            tmp14 = tmp15;
          } else {
            tmp14 = cResult[11];
          }
          if (cResult[12] === disabled) {
            if (cResult[13] === tmp5) {
              if (cResult[14] === tmp7) {
                let tmp17;
                if (cResult[15] === tmp14) {
                  tmp17 = cResult[16];
                }
                return tmp17;
              }
            }
          }
          const obj3 = { onPress: tmp5, style: tmp7, accessible: true, accessibilityLabel: tmp9, disabled, children: items };
          items = [tmp11, tmp14];
          const tmp19 = closure_17(channel(handleItemInteracted[25]).PressableOpacity, obj3);
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
    let guild_id;
    handleItemInteracted("press_reaction_picker", { actionGestureType: "press", actionTargetElement: "reaction_picker_button", actionIntentType: "open", actionDestinationType: null });
    const obj = { pickerIntention: EmojiIntention.REACTION, autoFocus: false, startExpanded: false, onPressEmoji, channel, guildId: guild_id };
    guild_id = undefined;
    const openEmojiPickerActionSheet = openEmojiPickerActionSheet2.openEmojiPickerActionSheet;
    openEmojiPickerActionSheet2;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    const result = openEmojiPickerActionSheet(obj);
  };
  cResult[0] = channel;
  cResult[1] = handleItemInteracted;
  cResult[2] = onPressEmoji;
  cResult[3] = fn;
  tmp5 = fn;
}) : ((channel) => {
  let disabled;
  let handleItemInteracted;
  let intl;
  let intl2;
  let items1;
  let items2;
  let showText;
  channel = channel.channel;
  const onPressEmoji = channel.onPressEmoji;
  ({ showText, disabled, handleItemInteracted } = channel);
  const tmp = closure_20();
  const items = [channel, onPressEmoji, handleItemInteracted];
  const callback = react.useCallback(() => {
    let guild_id;
    handleItemInteracted("press_reaction_picker", { actionGestureType: "press", actionTargetElement: "reaction_picker_button", actionIntentType: "open", actionDestinationType: null });
    const obj = { pickerIntention: EmojiIntention.REACTION, autoFocus: false, startExpanded: false, onPressEmoji, channel, guildId: guild_id };
    guild_id = undefined;
    const openEmojiPickerActionSheet = openEmojiPickerActionSheet2.openEmojiPickerActionSheet;
    openEmojiPickerActionSheet2;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    const result = openEmojiPickerActionSheet(obj);
  }, items);
  let obj = { onPress: callback, style: items1, accessible: true, accessibilityLabel: intl.string(channel(handleItemInteracted[22]).t.lfIHs4), disabled, children: items2 };
  items1 = [, , ];
  ({ emojiContainer: arr2[0], addEmojiContainer: arr2[1] } = tmp);
  let disabled1 = null;
  const PressableOpacity = channel(handleItemInteracted[25]).PressableOpacity;
  if (disabled) {
    disabled1 = tmp.disabled;
  }
  items1[2] = disabled1;
  intl = tmp4(handleItemInteracted[22]).intl;
  items2 = [closure_16(channel(handleItemInteracted[23]).ReactionIcon, { size: "sm" }), ];
  if (showText) {
    const obj2 = { variant: "text-sm/semibold", color: "redesign-button-tertiary-text", children: intl2.string(channel(handleItemInteracted[22]).t.m9O1gd) };
    const Text = tmp4(handleItemInteracted[24]).Text;
    intl2 = tmp4(handleItemInteracted[22]).intl;
    showText = closure_16(Text, obj2);
  }
  items2[1] = showText;
  return closure_17(PressableOpacity, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_24 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let disabled;
  let onPress;
  const obj = react2;
  const cResult = obj.c(10);
  ({ onPress, disabled } = arg0);
  const tmp4 = closure_20();
  let disabled1 = null;
  if (disabled) {
    disabled1 = tmp4.disabled;
  }
  if (cResult[0] === tmp4.addEmojiContainer) {
    if (cResult[1] === tmp4.emojiContainer) {
      let tmp6;
      let tmp9;
      let tmp8;
      if (cResult[2] === disabled1) {
        tmp6 = cResult[3];
      }
      const _Symbol = Symbol;
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = intl3.intl;
        const stringResult = intl.string(intl3.t.xIUfJS);
        const tmp13 = authStore3(ForwardingIconDefault, { size: "sm" });
        cResult[4] = stringResult;
        cResult[5] = tmp13;
        tmp9 = tmp13;
        tmp8 = stringResult;
      } else {
        tmp8 = cResult[4];
        tmp9 = cResult[5];
      }
      if (cResult[6] === disabled) {
        if (cResult[7] === onPress) {
          let tmp14;
          if (cResult[8] === tmp6) {
            tmp14 = cResult[9];
          }
          return tmp14;
        }
      }
      const obj2 = { onPress, style: tmp6, accessible: true, disabled, accessibilityLabel: tmp8, children: tmp9 };
      const tmp16 = authStore3(Pressables.PressableOpacity, obj2);
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
}) : ((disabled) => {
  let intl;
  let items;
  disabled = disabled.disabled;
  const onPress = disabled.onPress;
  const tmp = closure_20();
  const obj = { onPress, style: items, accessible: true, disabled, accessibilityLabel: intl.string(intl3.t.xIUfJS), children: authStore3(ForwardingIconDefault, { size: "sm" }) };
  items = [, , ];
  ({ emojiContainer: arr[0], addEmojiContainer: arr[1] } = tmp);
  let disabled1 = null;
  const PressableOpacity = Pressables.PressableOpacity;
  if (disabled) {
    disabled1 = tmp.disabled;
  }
  items[2] = disabled1;
  intl = intl3.intl;
  return authStore3(PressableOpacity, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_25 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let disabled;
  let onPress;
  const obj = react2;
  const cResult = obj.c(10);
  ({ onPress, disabled } = arg0);
  const tmp4 = closure_20();
  let disabled1 = null;
  if (disabled) {
    disabled1 = tmp4.disabled;
  }
  if (cResult[0] === tmp4.addEmojiContainer) {
    if (cResult[1] === tmp4.emojiContainer) {
      let tmp6;
      let tmp9;
      let tmp8;
      if (cResult[2] === disabled1) {
        tmp6 = cResult[3];
      }
      const _Symbol = Symbol;
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = intl3.intl;
        const stringResult = intl.string(intl3.t["5NwaNY"]);
        const tmp12 = authStore3(ArrowAngleLeftUpIcon.ArrowAngleLeftUpIcon, { size: "sm" });
        cResult[4] = stringResult;
        cResult[5] = tmp12;
        tmp9 = tmp12;
        tmp8 = stringResult;
      } else {
        tmp8 = cResult[4];
        tmp9 = cResult[5];
      }
      if (cResult[6] === disabled) {
        if (cResult[7] === onPress) {
          let tmp13;
          if (cResult[8] === tmp6) {
            tmp13 = cResult[9];
          }
          return tmp13;
        }
      }
      const obj2 = { onPress, style: tmp6, accessible: true, disabled, accessibilityLabel: tmp8, children: tmp9 };
      const tmp15 = authStore3(Pressables.PressableOpacity, obj2);
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
}) : ((disabled) => {
  let intl;
  let items;
  disabled = disabled.disabled;
  const onPress = disabled.onPress;
  const tmp = closure_20();
  const obj = { onPress, style: items, accessible: true, disabled, accessibilityLabel: intl.string(intl3.t["5NwaNY"]), children: authStore3(ArrowAngleLeftUpIcon.ArrowAngleLeftUpIcon, { size: "sm" }) };
  items = [, , ];
  ({ emojiContainer: arr[0], addEmojiContainer: arr[1] } = tmp);
  let disabled1 = null;
  const PressableOpacity = Pressables.PressableOpacity;
  if (disabled) {
    disabled1 = tmp.disabled;
  }
  items[2] = disabled1;
  intl = intl3.intl;
  return authStore3(PressableOpacity, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_26 = ReactCompilerGating.isReactCompilerEnabled() ? ((parentMessage) => {
  let handleItemInteracted;
  let items1;
  let style;
  let obj = parentMessage(handleItemInteracted[17]);
  const cResult = obj.c(34);
  parentMessage = parentMessage.parentMessage;
  const threadData = parentMessage.threadData;
  ({ style, handleItemInteracted } = parentMessage);
  const tmp4 = closure_20();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PermissionStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== parentMessage.id) {
    const fn = function o() {
      const obj = { channelId: parentMessage.id };
      return PermissionStore.canWithPartialContext(map1.VIEW_CHANNEL, obj);
    };
    cResult[1] = parentMessage.id;
    cResult[2] = fn;
  }
  parentMessage(handleItemInteracted[18]);
  if (cResult[3] === handleItemInteracted) {
    if (cResult[4] === parentMessage) {
      let tmp10;
      if (cResult[5] === threadData.thread) {
        tmp10 = cResult[6];
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
                let tmp22;
                let tmp23;
                let tmp26;
                if (cResult[20] === tmp4.comments) {
                  tmp22 = cResult[21];
                }
                if (cResult[22] !== tmp4.commentsIcon) {
                  let obj2 = { style: tmp4.commentsIcon };
                  const tmp25 = closure_16(parentMessage(handleItemInteracted[35]).ChatIcon, obj2);
                  cResult[22] = tmp4.commentsIcon;
                  cResult[23] = tmp25;
                  tmp23 = tmp25;
                } else {
                  tmp23 = cResult[23];
                }
                if (cResult[24] !== str) {
                  const obj3 = { variant: "text-md/semibold", color: "text-strong", children: str };
                  const tmp28 = closure_16(parentMessage(handleItemInteracted[24]).Text, obj3);
                  cResult[24] = str;
                  cResult[25] = tmp28;
                  tmp26 = tmp28;
                } else {
                  tmp26 = cResult[25];
                }
                if (cResult[26] === tmp4.commentCount) {
                  if (cResult[27] === tmp23) {
                    let tmp29;
                    if (cResult[28] === tmp26) {
                      tmp29 = cResult[29];
                    }
                    if (cResult[30] === tmp10) {
                      if (cResult[31] === tmp22) {
                        let tmp33;
                        if (cResult[32] === tmp29) {
                          tmp33 = cResult[33];
                        }
                        return tmp33;
                      }
                    }
                    const obj4 = { style: tmp22, onPress: tmp10, children: tmp29 };
                    const tmp35 = closure_16(parentMessage(handleItemInteracted[25]).PressableHighlight, obj4);
                    cResult[30] = tmp10;
                    cResult[31] = tmp22;
                    cResult[32] = tmp29;
                    cResult[33] = tmp35;
                    tmp33 = tmp35;
                  }
                }
                const obj5 = { style: tmp4.commentCount, children: items1 };
                items1 = [tmp23, tmp26];
                const tmp32 = closure_17(closure_5, obj5);
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
            let tmp11;
            let tmp12;
            if (cResult[8] === tmp4.comments) {
              tmp11 = cResult[9];
            }
            if (cResult[10] !== tmp4.commentsIcon) {
              const obj6 = { style: tmp4.commentsIcon };
              const tmp14 = closure_16(parentMessage(handleItemInteracted[35]).ChatIcon, obj6);
              cResult[10] = tmp4.commentsIcon;
              cResult[11] = tmp14;
              tmp12 = tmp14;
            } else {
              tmp12 = cResult[11];
            }
            if (cResult[12] === tmp4.commentCount) {
              let tmp15;
              if (cResult[13] === tmp12) {
                tmp15 = cResult[14];
              }
              if (cResult[15] === tmp10) {
                if (cResult[16] === tmp11) {
                  let tmp19;
                  if (cResult[17] === tmp15) {
                    tmp19 = cResult[18];
                  }
                  return tmp19;
                }
              }
              const obj7 = { style: tmp11, onPress: tmp10, children: tmp15 };
              const tmp21 = closure_16(parentMessage(handleItemInteracted[25]).PressableHighlight, obj7);
              cResult[15] = tmp10;
              cResult[16] = tmp11;
              cResult[17] = tmp15;
              cResult[18] = tmp21;
              tmp19 = tmp21;
            }
            const obj8 = { style: tmp4.commentCount, children: tmp12 };
            const tmp18 = closure_16(closure_5, obj8);
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
  const fn2 = function b() {
    handleItemInteracted("press_comments", { actionGestureType: "press", actionTargetElement: "thread_comments_button", actionIntentType: "navigate", actionDestinationType: "channel" });
    const tmp2 = null != parentMessage && null != threadData.thread;
    if (tmp2) {
      const obj2 = ICYMIShared;
      obj2.navigateToPost(parentMessage.getChannelId(), threadData.thread.guild_id, parentMessage.id);
    }
  };
  cResult[3] = handleItemInteracted;
  cResult[4] = parentMessage;
  cResult[5] = threadData.thread;
  cResult[6] = fn2;
  tmp10 = fn2;
}) : ((parentMessage) => {
  let handleItemInteracted;
  let items2;
  let items3;
  let items4;
  let obj3;
  let obj7;
  let obj8;
  let style;
  parentMessage = parentMessage.parentMessage;
  const threadData = parentMessage.threadData;
  ({ style, handleItemInteracted } = parentMessage);
  const tmp = closure_20();
  let tmp2 = parentMessage;
  let obj = parentMessage(handleItemInteracted[18]);
  const items = [PermissionStore];
  const items1 = [parentMessage, threadData.thread, handleItemInteracted];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const obj = { channelId: parentMessage.id };
    return PermissionStore.canWithPartialContext(map1.VIEW_CHANNEL, obj);
  });
  const callback = react.useCallback(() => {
    handleItemInteracted("press_comments", { actionGestureType: "press", actionTargetElement: "thread_comments_button", actionIntentType: "navigate", actionDestinationType: "channel" });
    const tmp2 = null != parentMessage && null != threadData.thread;
    if (tmp2) {
      const obj2 = ICYMIShared;
      obj2.navigateToPost(parentMessage.getChannelId(), threadData.thread.guild_id, parentMessage.id);
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
          let obj2 = { style: items2, onPress: callback, children: closure_17(closure_5, obj3) };
          items2 = [tmp.comments, style];
          obj3 = { style: tmp.commentCount, children: items3 };
          const PressableHighlight2 = tmp2(handleItemInteracted[25]).PressableHighlight;
          const obj4 = { style: tmp.commentsIcon };
          items3 = [closure_16(tmp2(handleItemInteracted[35]).ChatIcon, obj4), ];
          const obj5 = { variant: "text-md/semibold", color: "text-strong", children: str };
          items3[1] = closure_16(tmp2(handleItemInteracted[24]).Text, obj5);
          return closure_16(PressableHighlight2, obj2);
        }
      }
      const obj6 = { style: items4, onPress: callback, children: closure_16(closure_5, obj7) };
      items4 = [tmp.comments, style];
      obj7 = { style: tmp.commentCount, children: closure_16(tmp2(handleItemInteracted[35]).ChatIcon, obj8) };
      const PressableHighlight = tmp2(handleItemInteracted[25]).PressableHighlight;
      obj8 = { style: tmp.commentsIcon };
      return closure_16(PressableHighlight, obj6);
    }
  }
  return null;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((message) => {
  let arr;
  let backgroundVariant;
  let channel;
  let closure_0;
  let handleItemInteracted;
  let hideAdditionalButtons;
  let id;
  let inForum;
  let isKeyMessage;
  let tmp15;
  let obj = require("react");
  const cResult = obj.c(57);
  message = message.message;
  channel = message.channel;
  ({ hideAdditionalButtons, isKeyMessage, inForum, backgroundVariant, id } = message);
  const itemType = message.itemType;
  let tmp4 = undefined !== hideAdditionalButtons;
  const guild = message.guild;
  if (tmp4) {
    tmp4 = hideAdditionalButtons;
  }
  const tmp5 = undefined !== inForum && inForum;
  closure_20();
  const tmp8 = closure_21(guild, message, tmp5);
  if (cResult[0] !== message.reactions) {
    const items = [];
    _require = items;
    const reactions = message.reactions;
    const item = reactions.forEach((me_vote) => {
      if (null == me_vote.me_vote) {
        if (me_vote.burst_count > 0) {
          const push = closure_0.push;
          const obj = { type: MessageReactionsTypes.ReactionTypes.BURST };
          const merged = Object.assign(me_vote);
          push(obj);
        }
        if (me_vote.count > 0) {
          const push2 = closure_0.push;
          const obj2 = { type: MessageReactionsTypes.ReactionTypes.NORMAL };
          const merged1 = Object.assign(me_vote);
          push2(obj2);
        }
      }
    });
    cResult[0] = message.reactions;
    cResult[1] = items;
    arr = items;
  } else {
    _require = cResult[1];
  }
  if (cResult[2] !== channel) {
    const tmp12 = null != channel && message(channel[37])(channel);
    cResult[2] = channel;
    cResult[3] = tmp12;
  }
  const tmpResult = require("canForwardMessage");
  const canForwardMessage = tmpResult.useCanForwardMessage(message);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [PermissionStore];
    cResult[4] = items1;
    tmp15 = items1;
  } else {
    tmp15 = cResult[4];
  }
  if (cResult[5] !== channel) {
    class W {
      constructor() {
        return PermissionStore.can(map1.SEND_MESSAGES, channel);
      }
    }
    cResult[5] = channel;
    cResult[6] = W;
  } else {
    class W {
      constructor() {
        return PermissionStore.can(map1.SEND_MESSAGES, channel);
      }
    }
  }
  const tmpResult2 = require("get initialized");
  const stateFromStores = tmpResult2.useStateFromStores(tmp15, W);
  if (tmp4) {
    class W {
      constructor() {
        return PermissionStore.can(map1.SEND_MESSAGES, channel);
      }
    }
  }
  let diff = num8;
  if (tmp8.messageCount > 0) {
    class W {
      constructor() {
        return PermissionStore.can(map1.SEND_MESSAGES, channel);
      }
    }
    diff = num8 - 1;
  }
  if (arr.length > diff) {
    class W {
      constructor() {
        return PermissionStore.can(map1.SEND_MESSAGES, channel);
      }
    }
  }
  let tmp20 = !tmp4;
  if (tmp20) {
    class W {
      constructor() {
        return PermissionStore.can(map1.SEND_MESSAGES, channel);
      }
    }
    tmp20 = tmp21;
  }
  if (cResult[7] === 0 > 0) {
    class W {
      constructor() {
        return PermissionStore.can(map1.SEND_MESSAGES, channel);
      }
    }
  }
  let obj2 = { hasOverflow: tmp22, showReplyForwardButtons: tmp20, showThreadAsComments: tmp23 };
  cResult[7] = 0 > 0;
  cResult[8] = tmp20;
  cResult[9] = tmp8.messageCount > 0;
  cResult[10] = obj2;
}) : ((message) => {
  let _undefined;
  let c12;
  let hasOverflow;
  let items10;
  let items11;
  let items12;
  let items13;
  let items14;
  let items15;
  let items16;
  let items9;
  let obj5;
  let showReplyForwardButtons;
  let showThreadAsComments;
  let tmp16;
  let tmp20Result2;
  let tmp23Result4;
  message = message.message;
  const channel = message.channel;
  let flag = message.hideAdditionalButtons;
  const guild = message.guild;
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
  let handleItemInteracted;
  c12 = undefined;
  const tmp = closure_20();
  let tmp2 = closure_21(guild, message, flag3);
  const messageCount = tmp2;
  let items = [message.reactions];
  const memo = str.useMemo(() => {
    const items = [];
    const reactions = message.reactions;
    const item = reactions.forEach((me_vote) => {
      if (null == me_vote.me_vote) {
        if (me_vote.burst_count > 0) {
          const push = items.push;
          const obj = { type: message(flag[36]).ReactionTypes.BURST };
          const merged = Object.assign(me_vote);
          push(obj);
        }
        if (me_vote.count > 0) {
          const push2 = items.push;
          const obj2 = { type: message(flag[36]).ReactionTypes.NORMAL };
          const merged1 = Object.assign(me_vote);
          push2(obj2);
        }
      }
    });
    return items;
  }, items);
  const items1 = [channel];
  const memo1 = str.useMemo(() => {
    const tmp2 = null != channel && canAddNewReactionsDefault(tmp);
    return tmp2;
  }, items1);
  let tmp5 = flag;
  let tmp4 = message;
  let obj = message(flag[38]);
  const canForwardMessage = obj.useCanForwardMessage(message);
  let obj2 = message(flag[18]);
  const items2 = [handleItemInteracted];
  const stateFromStores = obj2.useStateFromStores(items2, () => PermissionStore.can(map1.SEND_MESSAGES, channel));
  const items3 = [flag, tmp2.messageCount, memo.length, stateFromStores, canForwardMessage];
  const memo2 = str.useMemo(() => {
    let tmp4;
    let tmp5;
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
    const obj = { hasOverflow: num3 > 0, showReplyForwardButtons: tmp5, showThreadAsComments: tmp4 };
    tmp5 = !flag;
    tmp4 = messageCount.messageCount > 0;
    if (!flag) {
      tmp5 = stateFromStores || canForwardMessage;
    }
    return obj;
  }, items3);
  ({ hasOverflow, showReplyForwardButtons, showThreadAsComments } = memo2);
  const items4 = [id, itemType];
  handleItemInteracted = str.useCallback((open_profile, actionParameters) => {
    const obj = ICYMIActionCreatorsDefault;
    obj.itemInteracted(id, itemType, open_profile);
    const obj2 = ICYMIActionCreatorsDefault;
    const obj3 = { itemId: id, itemType, actionParameters };
    obj2.feedItemActioned(obj3);
  }, items4);
  const items5 = [channel.id, message.id, handleItemInteracted];
  const items6 = [message, handleItemInteracted];
  const callback1 = str.useCallback((byName, burst) => {
    callback("press_reaction", { actionGestureType: "press", actionTargetElement: "add_new_reaction_button", actionIntentType: "open", actionDestinationType: null });
    id = channel.id;
    const id2 = message.id;
    if (null != byName) {
      const obj = ReactionUtils;
      const toReactionEmojiResult = obj.toReactionEmoji(byName);
      const obj2 = ReactionActionCreators;
      const obj3 = { burst };
      obj2.addReaction(id, id2, toReactionEmojiResult, ReactionActionCreators.ReactionLocations.MESSAGE, obj3);
    }
  }, items5);
  const items7 = [channel, message, handleItemInteracted];
  const callback2 = str.useCallback(() => {
    callback("press_forward", { actionGestureType: "press", actionTargetElement: "forward_button", actionIntentType: "share", actionDestinationType: "channel" });
    const obj = ForwardModalUtils;
    const obj2 = { message, source: "icymi-tab" };
    obj.openForwardModal(obj2);
  }, items6);
  const items8 = [str, flag2];
  const callback3 = str.useCallback(() => {
    callback("press_reply", { actionGestureType: "press", actionTargetElement: "reply_button", actionIntentType: "reply", actionDestinationType: "channel" });
    const obj = ICYMIShared;
    obj.navigateToPost(channel.id, channel.guild_id, message.id);
    const obj2 = PendingReplyActionCreators;
    const obj3 = { channel, message, shouldMention: true, showMentionToggle: true };
    const pendingReply = obj2.createPendingReply(obj3);
  }, items7);
  const memo3 = str.useMemo(() => {
    if (flag2) {
      return nativeDefault.colors.MESSAGE_HIGHLIGHT_BACKGROUND_DEFAULT;
    } else if ("primary" === "primary") {
      return nativeDefault.colors.CARD_BACKGROUND_DEFAULT;
    } else if ("secondary" === str) {
      return nativeDefault.colors.CARD_SECONDARY_BG;
    } else if ("base" === str) {
      return nativeDefault.colors.BACKGROUND_BASE_LOW;
    }
  }, items8);
  let obj3 = message(flag[42]);
  const token = obj3.useToken(memo3);
  [tmp16, c12] = flag2(str.useState(true), 2);
  [][0] = handleItemInteracted;
  flag2(str.useState(true), 2);
  const callback4 = str.useCallback((nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    _undefined(nativeEvent.contentOffset.x + nativeEvent.layoutMeasurement.width < nativeEvent.contentSize.width);
  }, []);
  if (0 !== memo.length) {
    const obj4 = { style: tmp.container, children: closure_16(id, obj5) };
    obj5 = { style: tmp.emojisRowContainer, children: tmp23Result4 };
    if (memo.length > 0) {
      const obj6 = { style: items9, children: items13 };
      items9 = [tmp.emojisContainer];
      let tmp23Result = !flag;
      const obj7 = { horizontal: true, scrollEnabled: hasOverflow, contentContainerStyle: { gap: 6 }, onScroll: callback4, onScrollEndDrag: tmp18, showsHorizontalScrollIndicator: false, children: items12 };
      const tmp24 = messageCount;
      if (!flag) {
        tmp23Result = showReplyForwardButtons || showThreadAsComments;
      }
      if (tmp23Result) {
        const obj8 = { style: tmp.replyForwardButtonContainer, children: items10 };
        if (showThreadAsComments) {
          const obj9 = { threadData: tmp2, parentMessage: message, handleItemInteracted };
          showThreadAsComments = closure_16(closure_26, obj9);
        }
        items10 = [showThreadAsComments, ];
        if (showReplyForwardButtons) {
          const obj10 = { children: items11 };
          const obj11 = { onPress: callback3, disabled: !stateFromStores };
          items11 = [closure_16(closure_25, obj11), ];
          const obj12 = { onPress: callback2, disabled: !canForwardMessage };
          items11[1] = closure_16(closure_24, obj12);
          showReplyForwardButtons = closure_17(closure_18, obj10);
        }
        items10[1] = showReplyForwardButtons;
        tmp23Result = closure_17(tmp21, obj8);
      }
      items12 = [
        tmp23Result,
        memo.map((reaction, index) => {
              const obj = { messageId: message.id, channel, reaction, count: reaction.type === MessageReactionsTypes.ReactionTypes.BURST ? reaction.burst_count : reaction.count, isBurstReaction: reaction.type === MessageReactionsTypes.ReactionTypes.BURST, handleItemInteracted };
              const obj2 = { children: authStore3(EmojiReaction, obj) };
              return authStore3(hasOwnProperty, obj2, "reaction-" + index);
            }),

      ];
      let tmp20Result = null;
      if (!flag) {
        tmp20Result = null;
        if (memo1) {
          const obj13 = { channel, onPressEmoji: callback1, handleItemInteracted };
          tmp20Result = closure_16(closure_22, obj13);
        }
      }
      items12[2] = tmp20Result;
      items13 = [closure_17(tmp24, obj7), ];
      let tmp23Result3 = null;
      if (hasOverflow) {
        tmp23Result3 = null;
        if (tmp16) {
          const obj14 = { children: items15 };
          const obj17 = { style: tmp.gradient, start: null, end: null, colors: items14, locations: [0, 0.8, 1] };
          ({ START: obj15.start, END: obj15.end } = closure_14);
          const tmp36 = channel(tmp5[43]);
          items14 = [, , ];
          const obj16 = channel(tmp5[44])(token);
          const alphaResult = obj16.alpha(0);
          items14[0] = alphaResult.hex();
          items14[1] = token;
          items14[2] = token;
          items15 = [closure_16(tmp36, obj17), ];
          const obj18 = { style: items16, size: "xs", color: "icon-muted" };
          items16 = [tmp.overflowChevron];
          items15[1] = closure_16(tmp4(tmp5[45]).ChevronSmallRightIcon, obj18);
          tmp23Result3 = closure_17(closure_18, obj14);
        }
      }
      items13[1] = tmp23Result3;
      tmp23Result4 = closure_17(tmp21, obj6);
    } else {
      tmp23Result4 = null;
    }
    tmp20Result2 = closure_16(tmp21, obj4);
  } else {
    tmp20Result2 = null;
  }
  return tmp20Result2;
});
function onAddReaction(arg0, arg1, byName, burst) {
  if (null != byName) {
    const obj = ReactionUtils;
    const toReactionEmojiResult = obj.toReactionEmoji(byName);
    const obj2 = ReactionActionCreators;
    const obj3 = { burst };
    obj2.addReaction(arg0, arg1, toReactionEmojiResult, ReactionActionCreators.ReactionLocations.MESSAGE, obj3);
  }
}
let size = size_mod;
let result = size.fileFinishedImporting("modules/icymi/native/ICYMICardInteractionRow.tsx");

export default tmp6;
export { onAddReaction };
export const useThread = tmp5;