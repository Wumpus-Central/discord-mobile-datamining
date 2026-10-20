// === Module 9909: MessageReactionsContent ===

// Module 9909 (MessageReactionsContent)
import _modDef12 from "module_12" /* 12 */;
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1128 */;
import native from "native" /* 1202 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1417 */;
import useWindowDimensions from "useWindowDimensions" /* 1499 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1633 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2002 */;
import UserSettings from "UserSettings" /* 4776 */;
import ColorUtils from "ColorUtils" /* 4942 */;
import timing from "timing" /* 5167 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5171 */;
import HapticUtils from "HapticUtils" /* 5173 */;
import haptics_HapticFeedbackTypesDefault from "haptics/HapticFeedbackTypes" /* 5174 */;
import BurstReactionAnimationPreviewDefault from "BurstReactionAnimationPreview" /* 5185 */;
import MessageReactionsTypes from "MessageReactionsTypes" /* 5186 */;
import Text_Text from "Text/Text" /* 5195 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 5226 */;
import BottomSheetModal from "BottomSheetModal" /* 5230 */;
import FastListDefault from "FastList" /* 7118 */;
import EmojiDefault from "Emoji" /* 7178 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7202 */;
import ReactionActionCreators from "ReactionActionCreators" /* 8234 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8605 */;
import generated_NoResults from "generated/NoResults" /* 8660 */;
import useEmojiAndSource from "useEmojiAndSource" /* 9872 */;
import useEmojiColorPalette from "useEmojiColorPalette" /* 9911 */;
import SwipeableFastListDefault from "SwipeableFastList" /* 9915 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4946 */;
import ChannelStore from "ChannelStore" /* 4800 */;
import GuildMemberStore from "GuildMemberStore" /* 4860 */;
import MessageReactionsStore from "MessageReactionsStore" /* 8233 */;
import PermissionStore from "PermissionStore" /* 4880 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5014 */;

const ReactionActionCreatorsAll = ReactionActionCreators;

require = fn;
function RemoveAllButton(channelId) {
  ({ reactions: require, reactionSelectedIndex } = channelId);
  channelId = channelId.channelId;
  const messageId = channelId.messageId;
  noop = undefined;
  c6 = undefined;
  let callback;
  const tmp = closure_22();
  const items = [ChannelStore];
  const items1 = [channelId];
  const stateFromStores = require("initialize").useStateFromStores(items, () => ChannelStore.getChannel(channelId), items1);
  const useReducedMotion = AccessibilityStore.useReducedMotion;
  let obj = require("initialize");
  const tmp6 = reactionSelectedIndex(messageId[41])(stateFromStores);
  [c5, c6] = useReducedMotion(noop.useState(true), 2);
  const tmp7 = useReducedMotion(noop.useState(true), 2);
  const sharedValue = require("ReanimatedRexport").useSharedValue(64);
  let obj2 = require("ReanimatedRexport");
  const fn = function b() {
    if (useReducedMotion) {
      let withTimingResult = sharedValue.get();
    } else {
      withTimingResult = timing.withTiming(sharedValue.get(), { duration: 200 });
    }
    return { maxWidth: withTimingResult };
  };
  const obj3 = require("ReanimatedRexport");
  fn.__closure = { useReducedMotion, buttonWidth: sharedValue, withTiming: require("timing").withTiming };
  fn.__workletHash = 16499689496895;
  fn.__initData = __initData;
  const animatedStyle = obj3.useAnimatedStyle(fn);
  const obj4 = { useReducedMotion, buttonWidth: sharedValue, withTiming: require("timing").withTiming };
  const sharedValue1 = require("ReanimatedRexport").useSharedValue(0);
  const obj5 = require("ReanimatedRexport");
  class R {
    constructor() {
      if (useReducedMotion) {
        tmp5 = closure_8;
        value = closure_8.get();
      } else {
        tmp = closure_0;
        tmp2 = closure_3;
        obj = closure_0(closure_3[42]);
        tmp3 = closure_8;
        value = obj.withTiming(closure_8.get(), { duration: 125 });
      }
      return { opacity: value, color: "white", fontSize: 14, marginLeft: 8, textAlignVertical: "center" };
    }
  }
  const obj6 = require("ReanimatedRexport");
  R.__closure = { useReducedMotion, textOpacity: sharedValue1, withTiming: require("timing").withTiming };
  R.__workletHash = 8698187840986;
  R.__initData = __initData2;
  const items2 = [sharedValue, sharedValue1];
  const animatedStyle1 = obj6.useAnimatedStyle(R);
  callback = noop.useCallback(() => {
    _undefined(true);
    const result = sharedValue.set(32);
    const result1 = sharedValue1.set(0);
  }, items2);
  const items3 = [reactionSelectedIndex, callback];
  const effect = noop.useEffect(() => {
    callback();
  }, items3);
  let tmp14 = null;
  if (tmp6) {
    const obj8 = {
      onPress() {
          if (c5) {
            _undefined(false);
            const result = sharedValue.set(useWindowDimensions.getWindowDimensions().width);
            const result1 = sharedValue1.set(1);
          } else {
            ReactionActionCreatorsAll.removeEmojiReactions(channelId, messageId, _require[reactionSelectedIndex].emoji);
            callback();
          }
        },
      children: null
    };
    const obj9 = { style: null, children: null };
    const items4 = [tmp.removeAllButton, animatedStyle];
    obj9.style = items4;
    const obj10 = { color: reactionSelectedIndex(tmp3[14]).unsafe_rawColors.WHITE, size: "sm" };
    const items5 = [closure_18(require("TrashIcon").TrashIcon, obj10), ];
    const obj11 = { style: animatedStyle1, variant: "text-sm/semibold", color: "text-overlay-light", children: null };
    const intl = require("util").intl;
    obj11.children = intl.string(require("util").t["zx/e4P"]);
    items5[1] = closure_18(closure_20, obj11);
    obj9.children = items5;
    obj8.children = closure_19(reactionSelectedIndex(tmp3[11]).View, obj9);
    tmp14 = closure_18(sharedValue, obj8);
  }
  return tmp14;
}
function EmojiOptionsButton(channelId) {
  channelId = channelId.channelId;
  const messageId = channelId.messageId;
  let flag = channelId.isEmojiPack;
  ({ reactions, reactionSelectedIndex } = channelId);
  if (flag === undefined) {
    flag = false;
  }
  const tmp = closure_22();
  const items = [ChannelStore];
  const items1 = [channelId];
  const stateFromStores = channelId(504).useStateFromStores(items, () => ChannelStore.getChannel(channelId), items1);
  const tmp3 = messageId(9912)(stateFromStores);
  dependencyMap = tmp3;
  const reaction = tmp4;
  const items2 = [channelId, messageId, reactions[reactionSelectedIndex], tmp3, flag];
  const obj2 = {
    onPress: noop.useCallback(() => {
      ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(9913, dependencyMap.paths), "ReactionEmojiOptionsActionSheet", { channelId, messageId, reaction, canRemoveReactions, isEmojiPack: flag }, "replaceTopSheet");
    }, items2),
    style: tmp.emojiOptionsButton,
    children: null
  };
  const obj3 = { variant: "text-xs/semibold", color: "text-subtle", children: null };
  const intl = channelId(1128).intl;
  obj3.children = intl.string(channelId(1128).t.pCaYID);
  const items3 = [closure_18(channelId(5195).Text, obj3), ];
  const obj = channelId(504);
  items3[1] = closure_18(channelId(7254).ChevronSmallRightIcon, { color: messageId(587).colors.ICON_SUBTLE, size: "xs" });
  obj2.children = items3;
  return closure_19(closure_7, obj2);
}
get_ActivityIndicator = fn(17);
({ ActivityIndicator: metroRequire, Platform, Pressable: closure_7, StyleSheet: closure_8, View: closure_9 } = get_ActivityIndicator);
const EmojiSourceDataTypes = fn(6835).EmojiSourceDataTypes;
const Constants = fn(1087);
({ DEFAULT_NUM_REACTION_USERS: closure_16, Permissions: closure_17 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_18, jsxs: closure_19 } = jsxProd);
let closure_20 = ReanimatedRexport.createAnimatedComponent(fn(5195).Text);
let c21 = 48;
const createStyles = fn(4945);
let obj = { container: { flex: 1 }, containerEmpty: { padding: 32, borderTopLeftRadius: nativeDefault.radii.sm, borderTopRightRadius: nativeDefault.radii.sm }, listRow: null, tabContainer: null, tabContainerSelected: null, tab: null, tabSelected: null, tabActive: null, reactionTab: null, removeButtonContainer: null, emojiOptionsButton: null, removeAllButton: null, reactionCountText: null, reactionCountTextSelected: null, emoji: null, emojiText: null, emojiImage: null, emojiTextIdentifier: null, avatar: null, buttonRow: null, loadingSpinner: null };
let obj3 = { padding: 32, borderTopLeftRadius: nativeDefault.radii.sm, borderTopRightRadius: nativeDefault.radii.sm };
obj.listRow = { height: 48, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
let obj4 = { height: 48, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
obj.tabContainer = { flexDirection: "row", alignItems: "center", borderRadius: nativeDefault.radii.sm, padding: 8, marginTop: 8 };
let obj5 = { flexDirection: "row", alignItems: "center", borderRadius: nativeDefault.radii.sm, padding: 8, marginTop: 8 };
obj.tabContainerSelected = { backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_SELECTED };
obj.tab = { padding: 0, marginHorizontal: 8, marginBottom: 8 };
obj.tabSelected = { borderBottomColor: "transparent" };
let obj6 = { backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_SELECTED };
obj.tabActive = { borderRadius: nativeDefault.radii.sm };
obj.reactionTab = { display: "flex", flexDirection: "column" };
obj.removeButtonContainer = { display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" };
let obj7 = { borderRadius: nativeDefault.radii.sm };
obj.emojiOptionsButton = { flexDirection: "row", alignItems: "center", marginRight: nativeDefault.space.PX_16, gap: 2 };
let obj8 = { flexDirection: "row", alignItems: "center", marginRight: nativeDefault.space.PX_16, gap: 2 };
obj.removeAllButton = { backgroundColor: nativeDefault.colors.STATUS_DANGER, borderRadius: nativeDefault.radii.xxl, height: 32, overflow: "hidden", minWidth: 42, marginRight: 20, display: "flex", flexDirection: "row", alignItems: "center", paddingHorizontal: 12 };
let obj9 = { backgroundColor: nativeDefault.colors.STATUS_DANGER, borderRadius: nativeDefault.radii.xxl, height: 32, overflow: "hidden", minWidth: 42, marginRight: 20, display: "flex", flexDirection: "row", alignItems: "center", paddingHorizontal: 12 };
obj.reactionCountText = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
let obj10 = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
obj.reactionCountTextSelected = { color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
obj.emoji = { marginRight: 8 };
let obj11 = { color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
obj.emojiText = { lineHeight: 24, fontSize: 20, textAlign: "center", color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
obj.emojiImage = { resizeMode: "contain", width: 24, height: 24 };
obj.emojiTextIdentifier = { padding: 16 };
obj.avatar = { marginRight: 10 };
obj.buttonRow = { flexDirection: "row", justifyContent: "flex-end", alignItems: "center" };
obj.loadingSpinner = { height: 48, padding: 6 };
let closure_22 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_23 = ReactCompilerGating.isReactCompilerEnabled() ? (function useCanManageMessages(channelId) {
  _require = channelId;
  const cResult = require("c").c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PermissionStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channelId) {
    const fn = function o() {
      return PermissionStore.canWithPartialContext(constants.MANAGE_MESSAGES, { channelId });
    };
    const items1 = [channelId];
    cResult[1] = channelId;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp7 = items1;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const obj = require("c");
  return require("initialize").useStateFromStores(first, tmp6, tmp7);
}) : (function useCanManageMessages(channelId) {
  _require = channelId;
  const items = [PermissionStore];
  const items1 = [channelId];
  return require("initialize").useStateFromStores(items, () => PermissionStore.canWithPartialContext(constants.MANAGE_MESSAGES, { channelId }), items1);
});
ReactCompilerGating = fn(558);
let closure_24 = ReactCompilerGating.isReactCompilerEnabled() ? (function useReactionSelected(reactions) {
  const cResult = reactions(576).c(7);
  reactions = reactions.reactions;
  const emoji = reactions.emoji;
  const isSelectedBurst = reactions.isSelectedBurst;
  closure_2 = tmp2;
  if (cResult[0] === emoji) {
    if (cResult[1] === tmp2) {
      if (cResult[2] === reactions) {
        let tmp3 = cResult[3];
      }
      const tmp6 = _slicedToArray(noop.useState(tmp3), 2);
      const _Math = Math;
      const bound = Math.min(tmp6[0], reactions.length - 1);
      if (cResult[4] === reactions[bound]) {
        if (cResult[5] === bound) {
          let tmp10 = cResult[6];
        }
        return tmp10;
      }
      const obj2 = { reactionSelected: reactions[bound], reactionSelectedIndex: bound, setReactionSelectedIndex: tmp6[1] };
      cResult[4] = reactions[bound];
      cResult[5] = bound;
      cResult[6] = obj2;
      tmp10 = obj2;
    }
  }
  const fn = function c() {
    if (null == emoji) {
      return 0;
    } else {
      const findIndexResult = reactions.findIndex((emoji) => {
        const emojiEqualsResult = reactions(dependencyMap[18]).emojiEquals(emoji.emoji, emoji);
        let num = emoji.burst_count;
        if (num == null) {
          num = 0;
        }
        let tmp2 = num > 0;
        if (closure_1_2) {
          if (tmp2) {
            tmp2 = emojiEqualsResult;
          }
          let tmp3 = tmp2;
        } else {
          tmp3 = !tmp2;
          if (!tmp2) {
            tmp3 = emojiEqualsResult;
          }
        }
        return tmp3;
      });
      let num = 0;
      if (findIndexResult >= 0) {
        num = findIndexResult;
      }
      return num;
    }
  };
  cResult[0] = emoji;
  cResult[1] = undefined !== isSelectedBurst && isSelectedBurst;
  cResult[2] = reactions;
  cResult[3] = fn;
  tmp3 = fn;
  const obj = reactions(576);
}) : (function useReactionSelected(reactions) {
  reactions = reactions.reactions;
  ({ emoji: importDefault, isSelectedBurst } = reactions);
  if (isSelectedBurst === undefined) {
    isSelectedBurst = false;
  }
  const tmp = _slicedToArray(noop.useState(() => {
    if (null == importDefault) {
      return 0;
    } else {
      const findIndexResult = reactions.findIndex((emoji) => {
        const emojiEqualsResult = reactions(dependencyMap[18]).emojiEquals(emoji.emoji, closure_1_1);
        let num = emoji.burst_count;
        if (num == null) {
          num = 0;
        }
        let tmp2 = num > 0;
        if (isSelectedBurst) {
          if (tmp2) {
            tmp2 = emojiEqualsResult;
          }
          let tmp3 = tmp2;
        } else {
          tmp3 = !tmp2;
          if (!tmp2) {
            tmp3 = emojiEqualsResult;
          }
        }
        return tmp3;
      });
      let num = 0;
      if (findIndexResult >= 0) {
        num = findIndexResult;
      }
      return num;
    }
  }), 2);
  const bound = Math.min(tmp[0], reactions.length - 1);
  return { reactionSelected: reactions[bound], reactionSelectedIndex: bound, setReactionSelectedIndex: tmp[1] };
});
ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function useReactors(channelId) {
  const cResult = channelId(reactionType[16]).c(10);
  channelId = channelId.channelId;
  const messageId = channelId.messageId;
  const reaction = channelId.reaction;
  reactionType = channelId.reactionType;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [MessageReactionsStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === channelId) {
    if (cResult[2] === messageId) {
      if (cResult[3] === reaction.emoji) {
        if (cResult[4] === reactionType) {
          let tmp6 = cResult[5];
          let tmp7 = cResult[6];
        }
        const tmpResult = tmp(tmp2[17]);
        const stateFromStores = tmpResult.useStateFromStores(first, tmp6, tmp7, messageId(tmp2[19]));
        if (reactionType === tmp(tmp2[20]).ReactionTypes.VOTE) {
          const count_details = reaction.count_details;
          let num2;
          if (count_details != null) {
            num2 = count_details.vote;
          }
          if (num2 == null) {
            num2 = 0;
          }
          let tmp13 = num2;
        } else {
          tmp13 = reactionType === tmp(tmp2[20]).ReactionTypes.BURST ? reaction.burst_count : reaction.count;
        }
        if (cResult[7] === stateFromStores) {
          if (cResult[8] === tmp15) {
            let tmp16 = cResult[9];
          }
          return tmp16;
        }
        const obj2 = { reactors: stateFromStores, reactorsHasMore: tmp13 > stateFromStores.length };
        cResult[7] = stateFromStores;
        cResult[8] = tmp13 > stateFromStores.length;
        cResult[9] = obj2;
        tmp16 = obj2;
      }
    }
  }
  const fn = function o() {
    const reactions = MessageReactionsStore.getReactions(channelId, messageId, reaction.emoji, limit, reactionType);
    let items;
    if (reactions != null) {
      items = reactions.values();
    }
    if (items == null) {
      items = [];
    }
    return Array.from(items);
  };
  const items1 = [channelId, messageId, reaction.emoji, reactionType];
  cResult[1] = channelId;
  cResult[2] = messageId;
  cResult[3] = reaction.emoji;
  cResult[4] = reactionType;
  cResult[5] = fn;
  cResult[6] = items1;
  tmp7 = items1;
  tmp6 = fn;
  const obj = channelId(reactionType[16]);
}) : (function useReactors(channelId) {
  channelId = channelId.channelId;
  const messageId = channelId.messageId;
  const reaction = channelId.reaction;
  const reactionType = channelId.reactionType;
  let items = [MessageReactionsStore];
  const items1 = [channelId, messageId, reaction.emoji, reactionType];
  const stateFromStores = channelId(reactionType[17]).useStateFromStores(items, () => {
    const reactions = MessageReactionsStore.getReactions(channelId, messageId, reaction.emoji, limit, reactionType);
    let items;
    if (reactions != null) {
      items = reactions.values();
    }
    if (items == null) {
      items = [];
    }
    return Array.from(items);
  }, items1, messageId(reactionType[19]));
  const obj2 = { reactors: stateFromStores, reactorsHasMore: null };
  if (reactionType === channelId(reactionType[20]).ReactionTypes.VOTE) {
    const count_details = reaction.count_details;
    let num;
    if (count_details != null) {
      num = count_details.vote;
    }
    if (num == null) {
      num = 0;
    }
    let tmp3 = num;
  } else {
    tmp3 = reactionType === channelId(reactionType[20]).ReactionTypes.BURST ? reaction.burst_count : reaction.count;
  }
  obj2.reactorsHasMore = tmp3 > stateFromStores.length;
  return obj2;
});
let closure_25 = tmp5;
ReactCompilerGating = fn(558);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function useReactorsOnScrollNative(channelId) {
  const cResult = channelId(reactorsHasMore[16]).c(13);
  channelId = channelId.channelId;
  const messageId = channelId.messageId;
  const reactionSelected = channelId.reactionSelected;
  ({ reactors, reactorsHasMore } = channelId);
  const reactionType = channelId.reactionType;
  noop = noop.useRef(false);
  let id = null;
  if (reactors.length > 0) {
    id = reactors[reactors.length - 1].id;
  }
  if (cResult[0] === channelId) {
    if (cResult[1] === messageId) {
      if (cResult[2] === reactionSelected) {
        if (cResult[3] === reactionType) {
          if (cResult[4] === id) {
            if (cResult[5] === reactorsHasMore) {
              let tmp4 = cResult[6];
            }
            const current = tmp4;
            closure_8 = obj2.useRef(tmp4);
            if (cResult[7] !== tmp4) {
              const fn2 = function p() {
                closure_8.current = current;
              };
              const items = [tmp4];
              cResult[7] = tmp4;
              cResult[8] = fn2;
              cResult[9] = items;
              let tmp7 = items;
              let tmp6 = fn2;
            } else {
              tmp6 = cResult[8];
              tmp7 = cResult[9];
            }
            const effect = obj2.useEffect(tmp6, tmp7);
            const _Symbol = Symbol;
            if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
              const fn3 = function y() {
                return _modDef12.debounce((AUTO_DISMISS, current) => ref.current(AUTO_DISMISS, current), 16);
              };
              cResult[10] = fn3;
              let tmp10 = fn3;
            } else {
              tmp10 = cResult[10];
            }
            const tmp12 = messageId(reactorsHasMore[23])(tmp10);
            closure_9 = tmp12;
            if (cResult[11] !== tmp12) {
              class E {
                constructor() {
                  return (nativeEvent) => {
                    nativeEvent = nativeEvent.nativeEvent;
                    return closure_1_9(nativeEvent.contentOffset.y, nativeEvent.contentSize.height);
                  };
                }
              }
              cResult[11] = tmp12;
              cResult[12] = E;
            } else {
              class E {
                constructor() {
                  return (nativeEvent) => {
                    nativeEvent = nativeEvent.nativeEvent;
                    return closure_1_9(nativeEvent.contentOffset.y, nativeEvent.contentSize.height);
                  };
                }
              }
            }
            return messageId(reactorsHasMore[23])(E);
          }
        }
      }
    }
  }
  const fn = function o(arg0, arg1) {
    let tmp = arg0 / arg1 > 0.75 && reactorsHasMore;
    if (tmp) {
      tmp = !ref.current;
    }
    if (tmp) {
      ref.current = true;
      const obj2 = { channelId, messageId, emoji: reactionSelected.emoji, limit, after: id, type: reactionType };
      const reactors = ReactionActionCreatorsAll.getReactors(obj2);
      reactors.then(() => {
        ref.current = false;
      });
    }
  };
  cResult[0] = channelId;
  cResult[1] = messageId;
  cResult[2] = reactionSelected;
  cResult[3] = reactionType;
  cResult[4] = id;
  cResult[5] = reactorsHasMore;
  cResult[6] = fn;
  tmp4 = fn;
  let obj = channelId(reactorsHasMore[16]);
}) : (function useReactorsOnScrollNative(channelId) {
  channelId = channelId.channelId;
  const messageId = channelId.messageId;
  const reactionSelected = channelId.reactionSelected;
  ({ reactors, reactorsHasMore } = channelId);
  const reactionType = channelId.reactionType;
  noop = undefined;
  let current;
  closure_8 = undefined;
  closure_9 = undefined;
  noop = noop.useRef(false);
  let id = null;
  if (reactors.length > 0) {
    id = reactors[reactors.length - 1].id;
  }
  const items = [channelId, messageId, reactionSelected, reactorsHasMore, id, reactionType];
  current = obj.useCallback((arg0, arg1) => {
    let tmp = arg0 / arg1 > 0.75 && reactorsHasMore;
    if (tmp) {
      tmp = !ref.current;
    }
    if (tmp) {
      ref.current = true;
      const obj2 = { channelId, messageId, emoji: reactionSelected.emoji, limit, after: id, type: reactionType };
      const reactors = ReactionActionCreatorsAll.getReactors(obj2);
      reactors.then(() => {
        ref.current = false;
      });
    }
  }, items);
  closure_8 = obj.useRef(current);
  const items1 = [current];
  const effect = obj.useEffect(() => {
    closure_8.current = current;
  }, items1);
  closure_9 = messageId(reactorsHasMore[23])(() => _modDef12.debounce((AUTO_DISMISS, current) => ref.current(AUTO_DISMISS, current), 16));
  return messageId(reactorsHasMore[23])(() => (nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    return closure_1_9(nativeEvent.contentOffset.y, nativeEvent.contentSize.height);
  });
});
let closure_26 = tmp6;
ReactCompilerGating = fn(558);
let closure_27 = ReactCompilerGating.isReactCompilerEnabled() ? (function useRenderFooter(arg0, arg1) {
  _require = arg0;
  closure_1 = arg1;
  const cResult = require("c").c(4);
  let tmp2 = closure_22();
  const loadingSpinner = tmp2;
  if (cResult[0] === arg0) {
    if (cResult[1] === arg1) {
      if (cResult[2] === tmp2) {
        let tmp3 = cResult[3];
      }
      return tmp3;
    }
  }
  const fn = function o() {
    if (closure_1) {
      const obj = { style: loadingSpinner.loadingSpinner, size: "large" };
      let tmp2 = collapsedCategories(timestampProducer, obj);
    } else {
      tmp2 = null;
    }
    return tmp2;
  };
  cResult[0] = arg0;
  cResult[1] = arg1;
  cResult[2] = tmp2;
  cResult[3] = fn;
  tmp3 = fn;
}) : (function useRenderFooter(arg0, arg1) {
  closure_1 = arg1;
  const tmp = closure_22();
  const loadingSpinner = tmp;
  const items = [arg0, arg1, tmp];
  return noop.useCallback(() => {
    if (closure_1) {
      const obj = { style: loadingSpinner.loadingSpinner, size: "large" };
      let tmp2 = collapsedCategories(timestampProducer, obj);
    } else {
      tmp2 = null;
    }
    return tmp2;
  }, items);
});
ReactCompilerGating = fn(558);
let closure_28 = ReactCompilerGating.isReactCompilerEnabled() ? (function useRenderItem(arg0, arg1, arg2, burst_count, arg4) {
  _require = arg0;
  importDefault = arg1;
  closure_2 = arg2;
  dependencyMap = burst_count;
  closure_4 = arg4;
  const cResult = require("c").c(10);
  let tmp2 = closure_22();
  noop = tmp2;
  const analyticsLocations = useAnalyticsLocationsDefault().analyticsLocations;
  if (cResult[0] === arg4) {
    if (cResult[1] === analyticsLocations) {
      if (cResult[2] === arg2) {
        if (cResult[3] === arg1) {
          if (cResult[4] === burst_count.burst_count) {
            if (cResult[5] === burst_count.emoji) {
              if (cResult[6] === arg0) {
                if (cResult[7] === tmp2.avatar) {
                  if (cResult[8] === tmp2.listRow) {
                    let tmp3 = cResult[9];
                  }
                  return tmp3;
                }
              }
            }
          }
        }
      }
    }
  }
  class S {
    constructor(arg0, arg1) {
      obj = closure_0[arg1];
      closure_0 = obj;
      id = obj.id;
      diff = closure_0.length - 1;
      tmp2 = NORMAL;
      channel = closure_1_12.getChannel(NORMAL);
      guildId = null;
      if (null != channel) {
        guildId = channel.getGuildId();
      }
      tmp4 = closure_1;
      tmp5 = closure_3;
      obj3 = closure_1(closure_3[25]);
      nickname = obj3.getNickname(guildId, tmp2, obj);
      if (nickname == null) {
        tmp4Result = tmp4(tmp5[26]);
        nickname = tmp4Result.getGlobalName(obj);
      }
      member = null;
      if (null != guildId) {
        tmp8 = closure_1_13;
        member = closure_1_13.getMember(guildId, id);
      }
      if (closure_3.burst_count > 0) {
        tmp11 = closure_0;
        NORMAL = closure_0(tmp5[20]).ReactionTypes.BURST;
        tmp10 = closure_0;
      } else {
        tmp9 = closure_0;
        NORMAL = closure_0(tmp5[20]).ReactionTypes.NORMAL;
        tmp10 = closure_0;
      }
      obj1 = { style: closure_5.listRow, children: null };
      tmp14 = closure_1_18;
      tmp12 = closure_1_19;
      tmp13 = closure_1_9;
      tmp4Result1 = tmp4(tmp5[28]);
      obj11 = { style: closure_5.avatar, size: tmp10(tmp5[29]).AvatarSizes.SMALL, source: null };
      avatarSource = obj.getAvatarSource(guildId);
      guildMemberAvatarSource = avatarSource;
      if (null != guildId) {
        avatar = undefined;
        if (member != null) {
          avatar = member.avatar;
        }
        guildMemberAvatarSource = avatarSource;
        if (null != avatar) {
          tmp4Result2 = tmp4(tmp5[30]);
          guildMemberAvatarSource = tmp4Result2.getGuildMemberAvatarSource(member, obj);
        }
      }
      obj12 = { leading: tmp14(tmp10(tmp5[29]).Avatar, obj11), label: tmp14(tmp4(tmp5[31]), { user: obj, nick: nickname }), trailing: null, onPress: null, onLongPress: null };
      obj11.source = guildMemberAvatarSource;
      tmp14Result = null;
      if (closure_4) {
        tmp10Result = tmp10(tmp5[32]);
        tmp14Result = null;
        if (tmp10Result.isAndroid()) {
          tmp20 = closure_1_7;
          obj13 = { onPress: null, children: null };
          obj13.onPress = function onPress() { ... };
          obj13.children = tmp14(tmp10(tmp5[33]).XSmallIcon, {});
          tmp14Result = tmp14(closure_1_7, obj13);
        }
      }
      openProfile = function openProfile() { ... };
      obj12.trailing = tmp14Result;
      obj12.onPress = openProfile;
      obj12.onLongPress = openProfile;
      items = [, ];
      items[0] = tmp14(tmp4Result1, obj12);
      tmp14Result1 = null;
      if (arg1 !== diff) {
        tmp14Result1 = tmp14(tmp4(tmp5[34]), {});
      }
      items[1] = tmp14Result1;
      obj1.children = items;
      return tmp12(tmp13, obj1);
    }
  }
  cResult[0] = arg4;
  cResult[1] = analyticsLocations;
  cResult[2] = arg2;
  cResult[3] = arg1;
  cResult[4] = burst_count.burst_count;
  cResult[5] = burst_count.emoji;
  cResult[6] = arg0;
  cResult[7] = tmp2.avatar;
  cResult[8] = tmp2.listRow;
  cResult[9] = S;
  tmp3 = S;
}) : (function useRenderItem(arg0, arg1, arg2, arg3, arg4) {
  closure_0 = arg0;
  importDefault = arg1;
  closure_2 = arg2;
  dependencyMap = arg3;
  closure_4 = arg4;
  const tmp = closure_22();
  noop = tmp;
  const analyticsLocations = useAnalyticsLocationsDefault().analyticsLocations;
  let items = [arg0, arg2, arg4, arg1, arg3, tmp, analyticsLocations];
  return noop.useCallback((arg0, arg1) => {
    user = user[arg1];
    const id = user.id;
    const diff = user.length - 1;
    channel = channel.getChannel(NORMAL);
    let guildId = null;
    if (null != channel) {
      guildId = channel.getGuildId();
    }
    let nickname = messageId(burst_count[25]).getNickname(guildId, NORMAL, user);
    if (nickname == null) {
      nickname = messageId(burst_count[26]).getGlobalName(user);
      const tmp4Result = messageId(burst_count[26]);
    }
    member = null;
    if (null != guildId) {
      member = member.getMember(guildId, id);
    }
    if (burst_count.burst_count > 0) {
      NORMAL = closure_0(burst_count[20]).ReactionTypes.BURST;
      let tmp10 = closure_0;
    } else {
      NORMAL = closure_0(burst_count[20]).ReactionTypes.NORMAL;
      tmp10 = closure_0;
    }
    let obj2 = { style: closure_5.listRow, children: null };
    const obj3 = messageId(burst_count[25]);
    const obj4 = { style: closure_5.avatar, size: tmp10(burst_count[29]).AvatarSizes.SMALL, source: null };
    const avatarSource = user.getAvatarSource(guildId);
    let guildMemberAvatarSource = avatarSource;
    if (null != guildId) {
      let avatar;
      if (member != null) {
        avatar = member.avatar;
      }
      guildMemberAvatarSource = avatarSource;
      if (null != avatar) {
        guildMemberAvatarSource = messageId(burst_count[30]).getGuildMemberAvatarSource(member, user);
        const tmp4Result4 = messageId(burst_count[30]);
      }
    }
    const obj5 = { leading: closure_1_18(tmp10(burst_count[29]).Avatar, obj4), label: closure_1_18(messageId(burst_count[31]), { user, nick: nickname }), trailing: null, onPress: null, onLongPress: null };
    obj4.source = guildMemberAvatarSource;
    let tmp14Result = null;
    if (closure_4) {
      tmp14Result = null;
      if (tmp10Result.isAndroid()) {
        const obj6 = {
          onPress() {
                obj = ReactionActionCreators;
                const obj2 = { channelId, messageId, emoji: emoji.emoji, location: ReactionActionCreators.ReactionLocations.MESSAGE, userId: obj.id, options: { burst: NORMAL === MessageReactionsTypes.ReactionTypes.BURST } };
                return obj.removeReaction(obj2);
              },
          children: closure_1_18(tmp10(burst_count[33]).XSmallIcon, {})
        };
        tmp14Result = closure_1_18(closure_1_7, obj6);
      }
      tmp10Result = tmp10(burst_count[32]);
    }
    function openProfile() {
      localUser = { userId: id, channelId, messageId, localUser, sourceAnalyticsLocations: analyticsLocations };
      showUserProfileActionSheetDefault(localUser, "stack");
    }
    obj5.trailing = tmp14Result;
    obj5.onPress = openProfile;
    obj5.onLongPress = openProfile;
    const items = [closure_1_18(messageId(burst_count[28]), obj5), ];
    let tmp14Result2 = null;
    if (arg1 !== diff) {
      tmp14Result2 = closure_1_18(messageId(burst_count[34]), {});
    }
    items[1] = tmp14Result2;
    obj2.children = items;
    return closure_1_19(closure_1_9, obj2);
  }, items);
});
ReactCompilerGating = fn(558);
let closure_29 = ReactCompilerGating.isReactCompilerEnabled() ? (function useRenderQuickActions(arg0, arg1, burst_count, arg3) {
  _require = arg0;
  closure_1 = arg1;
  dependencyMap = arg3;
  const cResult = require("c").c(7);
  const tmp2 = closure_22();
  const buttonRow = tmp2;
  if (cResult[0] === arg0) {
    if (cResult[1] === arg1) {
      if (cResult[2] === burst_count.burst_count) {
        if (cResult[3] === burst_count.emoji) {
          if (cResult[4] === arg3) {
            if (cResult[5] === tmp2.buttonRow) {
              let tmp3 = cResult[6];
            }
            return tmp3;
          }
        }
      }
    }
  }
  const fn = function s(arg0, arg1) {
    const channelId = dependencyMap[arg1];
    if (burst_count.burst_count > 0) {
      let NORMAL = channelId(5186).ReactionTypes.BURST;
    } else {
      NORMAL = channelId(5186).ReactionTypes.NORMAL;
    }
    let obj = { style: buttonRow.buttonRow, children: null };
    let obj2 = { title: null, IconComponent: null, color: null, onPress: null, height: null };
    const intl = channelId(1128).intl;
    obj2.title = intl.string(channelId(1128).t.N86XcP);
    obj2.IconComponent = channelId(6882).XSmallIcon;
    obj2.color = messageId(587).unsafe_rawColors.RED_400;
    obj2.onPress = function onPress() {
      const obj2 = { channelId, messageId, emoji: emoji.emoji, location: ReactionActionCreators.ReactionLocations.MESSAGE, userId: channelId.id, options: null };
      const obj = ReactionActionCreators;
      obj2.options = { burst: NORMAL === MessageReactionsTypes.ReactionTypes.BURST };
      return obj.removeReaction(obj2);
    };
    obj2.height = height;
    obj.children = closure_1_18(messageId(9910), obj2);
    return closure_1_18(closure_1_9, obj);
  };
  cResult[0] = arg0;
  cResult[1] = arg1;
  cResult[2] = burst_count.burst_count;
  cResult[3] = burst_count.emoji;
  cResult[4] = arg3;
  cResult[5] = tmp2.buttonRow;
  cResult[6] = fn;
  tmp3 = fn;
}) : (function useRenderQuickActions(arg0, arg1, arg2, arg3) {
  closure_0 = arg0;
  closure_1 = arg1;
  const burst_count = arg2;
  dependencyMap = arg3;
  const tmp = closure_22();
  const buttonRow = tmp;
  const items = [arg3, arg0, arg1, arg2, tmp];
  return noop.useCallback((arg0, arg1) => {
    const channelId = dependencyMap[arg1];
    if (burst_count.burst_count > 0) {
      let NORMAL = channelId(5186).ReactionTypes.BURST;
    } else {
      NORMAL = channelId(5186).ReactionTypes.NORMAL;
    }
    let obj = { style: buttonRow.buttonRow, children: null };
    let obj2 = { title: null, IconComponent: null, color: null, onPress: null, height: null };
    const intl = channelId(1128).intl;
    obj2.title = intl.string(channelId(1128).t.N86XcP);
    obj2.IconComponent = channelId(6882).XSmallIcon;
    obj2.color = messageId(587).unsafe_rawColors.RED_400;
    obj2.onPress = function onPress() {
      const obj2 = { channelId, messageId, emoji: emoji.emoji, location: ReactionActionCreators.ReactionLocations.MESSAGE, userId: channelId.id, options: null };
      const obj = ReactionActionCreators;
      obj2.options = { burst: NORMAL === MessageReactionsTypes.ReactionTypes.BURST };
      return obj.removeReaction(obj2);
    };
    obj2.height = height;
    obj.children = closure_1_18(messageId(9910), obj2);
    return closure_1_18(closure_1_9, obj);
  }, items);
});
ReactCompilerGating = fn(558);
let closure_30 = ReactCompilerGating.isReactCompilerEnabled() ? (function ReactionTab(arg0) {
  const cResult = c.c(43);
  ({ reaction, selected } = arg0);
  const tmp4 = closure_22();
  if (cResult[0] !== reaction.burst_colors) {
    let burst_colors = reaction.burst_colors;
    if (burst_colors == null) {
      burst_colors = [];
    }
    cResult[0] = reaction.burst_colors;
    cResult[1] = burst_colors;
    let tmp6 = burst_colors;
  } else {
    tmp6 = cResult[1];
  }
  const emojiColorPalette = useEmojiColorPalette.useEmojiColorPalette(tmp6);
  if (cResult[2] !== emojiColorPalette) {
    let accentColor;
    if (emojiColorPalette != null) {
      accentColor = emojiColorPalette.accentColor;
    }
    let tmp12 = null;
    if (null != accentColor) {
      const obj2 = { color: emojiColorPalette.accentColor };
      tmp12 = obj2;
    }
    cResult[2] = emojiColorPalette;
    cResult[3] = tmp12;
  }
  if (cResult[4] !== emojiColorPalette) {
    let tmp14 = null;
    if (null != emojiColorPalette) {
      const obj3 = { backgroundColor: ColorUtils.hexOpacityToRgba(emojiColorPalette.backgroundColor, emojiColorPalette.opacity) };
      tmp14 = obj3;
      const tmpResult3 = ColorUtils;
    }
    cResult[4] = emojiColorPalette;
    cResult[5] = tmp14;
    let tmp13 = tmp14;
  } else {
    tmp13 = cResult[5];
  }
  const emoji = reaction.emoji;
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    class I {
      constructor() {
        return closure_1_10.useReducedMotion;
      }
    }
    cResult[6] = items;
    cResult[7] = I;
    let tmp16 = I;
    let tmp15 = items;
  } else {
    tmp15 = cResult[6];
    tmp16 = cResult[7];
  }
  const tmpResult = useEmojiColorPalette;
  const stateFromStores = initialize.useStateFromStores(tmp15, tmp16);
  const AnimateEmoji = UserSettings.AnimateEmoji;
  let setting = !stateFromStores;
  if (!stateFromStores) {
    setting = AnimateEmoji.useSetting();
  }
  if (cResult[8] === emoji.animated) {
    if (cResult[9] === emoji.id) {
      if (cResult[10] === setting) {
        let tmp20 = cResult[11];
      }
      class I {
        constructor() {
          return closure_1_10.useReducedMotion;
        }
      }
      let tmp25 = null;
      if (selected) {
        tmp25 = null;
        if (tmp5) {
          tmp25 = tmp13;
        }
      }
      if (cResult[12] === tmp4.tabContainer) {
        if (cResult[13] === tmp24) {
          if (cResult[14] === tmp25) {
            let tmp26 = cResult[15];
          }
          let name = emoji.id;
          if (name == null) {
            name = emoji.name;
          }
          class I {
            constructor() {
              return closure_1_10.useReducedMotion;
            }
          }
          if (cResult[18] === tmp4.emoji) {
            if (cResult[19] === tmp4.emojiText) {
              let tmp28 = cResult[20];
            }
            if (cResult[21] === tmp4.emoji) {
              if (cResult[22] === tmp4.emojiImage) {
                let tmp29 = cResult[23];
              }
              if (cResult[24] === emoji.name) {
                if (cResult[25] === tmp20) {
                  if (cResult[26] === tmp28) {
                    if (cResult[27] === tmp29) {
                      let tmp30 = cResult[28];
                    }
                    let prop = null;
                    if (selected) {
                      prop = tmp4.reactionCountTextSelected;
                    }
                    class I {
                      constructor() {
                        return closure_1_10.useReducedMotion;
                      }
                    }
                    if (cResult[29] === tmp4.reactionCountText) {
                      if (cResult[30] === prop) {
                        if (cResult[31] === tmp34) {
                          let tmp35 = cResult[32];
                        }
                        const tmp36 = reaction.burst_count > 0 ? reaction.burst_count : reaction.count;
                        if (cResult[33] === tmp35) {
                          if (cResult[34] === tmp36) {
                            let tmp37 = cResult[35];
                          }
                          if (cResult[36] === emoji.name) {
                            if (cResult[37] === name) {
                              if (cResult[38] === tmp27) {
                                if (cResult[39] === tmp30) {
                                  if (cResult[40] === tmp37) {
                                    if (cResult[41] === tmp26) {
                                      let tmp39 = cResult[42];
                                    }
                                    return tmp39;
                                  }
                                }
                              }
                            }
                          }
                          class I {
                            constructor() {
                              return closure_1_10.useReducedMotion;
                            }
                          }
                          const obj4 = { style: tmp26, accessible: true, accessibilityLabel: emoji.name, accessibilityState: tmp27, children: null };
                          const items1 = [tmp30, tmp37];
                          obj4.children = items1;
                          const tmp41 = closure_1_19(React6, obj4, name);
                          cResult[36] = emoji.name;
                          cResult[37] = name;
                          cResult[38] = tmp27;
                          cResult[39] = tmp30;
                          cResult[40] = tmp37;
                          cResult[41] = tmp26;
                          cResult[42] = tmp41;
                          tmp39 = tmp41;
                        }
                        class I {
                          constructor() {
                            return closure_1_10.useReducedMotion;
                          }
                        }
                        const obj5 = { variant: "text-md/bold", style: tmp35, children: tmp36 };
                        const tmp38 = collapsedCategories(Text_Text.Text, obj5);
                        cResult[33] = tmp35;
                        cResult[34] = tmp36;
                        cResult[35] = tmp38;
                        tmp37 = tmp38;
                      }
                    }
                    const items2 = [tmp4.reactionCountText, prop, tmp34];
                    cResult[29] = tmp4.reactionCountText;
                    cResult[30] = prop;
                    cResult[31] = tmp34;
                    cResult[32] = items2;
                    tmp35 = items2;
                  }
                }
              }
              class I {
                constructor() {
                  return closure_1_10.useReducedMotion;
                }
              }
              const obj6 = { src: tmp20, name: emoji.name, textEmojiStyle: tmp28, fastImageStyle: tmp29 };
              const tmp32 = collapsedCategories(EmojiDefault, obj6);
              cResult[24] = emoji.name;
              cResult[25] = tmp20;
              cResult[26] = tmp28;
              cResult[27] = tmp29;
              cResult[28] = tmp32;
              tmp30 = tmp32;
            }
            const items3 = [, ];
            class I {
              constructor() {
                return closure_1_10.useReducedMotion;
              }
            }
            items3[1] = tmp4.emojiImage;
            cResult[21] = tmp4.emoji;
            cResult[22] = tmp4.emojiImage;
            cResult[23] = items3;
            tmp29 = items3;
          }
          const items4 = [, ];
          ({ emoji: arr4[0], emojiText: arr4[1] } = tmp4);
          cResult[18] = tmp4.emoji;
          cResult[19] = tmp4.emojiText;
          cResult[20] = items4;
          tmp28 = items4;
        }
      }
      const items5 = [tmp4.tabContainer, null, tmp25];
      cResult[12] = tmp4.tabContainer;
      cResult[13] = null;
      cResult[14] = tmp25;
      cResult[15] = items5;
      tmp26 = items5;
    }
  }
  let emojiURL;
  if (null != emoji.id) {
    const obj8 = { id: null, animated: null, size: 48 };
    class I {
      constructor() {
        return closure_1_10.useReducedMotion;
      }
    }
    let animated = emoji.animated;
    if (animated) {
      animated = setting;
    }
    obj8.animated = animated;
    emojiURL = AvatarUtilsDefault.getEmojiURL(obj8);
  }
  cResult[8] = emoji.animated;
  cResult[9] = emoji.id;
  cResult[10] = setting;
  cResult[11] = emojiURL;
  tmp20 = emojiURL;
  const tmpResult4 = initialize;
}) : (function ReactionTab(arg0) {
  ({ reaction, selected } = arg0);
  const tmp = closure_22();
  let burst_colors = reaction.burst_colors;
  if (burst_colors == null) {
    burst_colors = [];
  }
  const emojiColorPalette = useEmojiColorPalette.useEmojiColorPalette(burst_colors);
  let accentColor;
  if (emojiColorPalette != null) {
    accentColor = emojiColorPalette.accentColor;
  }
  let tmp7 = null;
  if (null != accentColor) {
    const obj2 = { color: emojiColorPalette.accentColor };
    tmp7 = obj2;
  }
  let tmp8 = null;
  if (null != emojiColorPalette) {
    const obj3 = { backgroundColor: ColorUtils.hexOpacityToRgba(emojiColorPalette.backgroundColor, emojiColorPalette.opacity) };
    tmp8 = obj3;
    const tmp3Result = ColorUtils;
  }
  const emoji = reaction.emoji;
  const items = [AccessibilityStore];
  const stateFromStores = initialize.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const AnimateEmoji = UserSettings.AnimateEmoji;
  let emojiURL;
  if (null != emoji.id) {
    const obj4 = { id: null, animated: null, size: 48 };
    ({ id: obj7.id, animated } = emoji);
    if (animated) {
      animated = !stateFromStores;
    }
    if (animated) {
      animated = tmp10;
    }
    obj4.animated = animated;
    emojiURL = AvatarUtilsDefault.getEmojiURL(obj4);
  }
  const items1 = [tmp.tabContainer, , ];
  let tabContainerSelected = null;
  if (selected) {
    tabContainerSelected = tmp.tabContainerSelected;
  }
  items1[1] = tabContainerSelected;
  let tmp16 = null;
  if (selected) {
    tmp16 = null;
    if (tmp2) {
      tmp16 = tmp8;
    }
  }
  const obj5 = { style: items1, accessible: true, accessibilityLabel: emoji.name, accessibilityState: { selected }, children: null };
  items1[2] = tmp16;
  const obj8 = { src: emojiURL, name: emoji.name, textEmojiStyle: null, fastImageStyle: null };
  const items2 = [, ];
  ({ emoji: arr4[0], emojiText: arr4[1] } = tmp);
  obj8.textEmojiStyle = items2;
  const items3 = [, ];
  ({ emoji: arr5[0], emojiImage: arr5[1] } = tmp);
  obj8.fastImageStyle = items3;
  const items4 = [collapsedCategories(EmojiDefault, obj8), ];
  const items5 = [tmp.reactionCountText, , ];
  let prop = null;
  if (selected) {
    prop = tmp.reactionCountTextSelected;
  }
  items5[1] = prop;
  let tmp19 = null;
  if (reaction.burst_count > 0) {
    tmp19 = tmp7;
  }
  items5[2] = tmp19;
  items4[1] = collapsedCategories(Text_Text.Text, { variant: "text-md/bold", style: items5, children: reaction.burst_count > 0 ? reaction.burst_count : reaction.count });
  obj5.children = items4;
  let name = emoji.id;
  if (name == null) {
    name = emoji.name;
  }
  return closure_1_19(React6, obj5, name);
});
const __initData = { code: "function MessageReactionsContentTsx1(){const{useReducedMotion,buttonWidth,withTiming}=this.__closure;return{maxWidth:useReducedMotion?buttonWidth.get():withTiming(buttonWidth.get(),{duration:200})};}" };
const __initData2 = { code: "function MessageReactionsContentTsx2(){const{useReducedMotion,textOpacity,withTiming}=this.__closure;return{opacity:useReducedMotion?textOpacity.get():withTiming(textOpacity.get(),{duration:125}),color:'white',fontSize:14,marginLeft:8,textAlignVertical:'center'};}" };
ReactCompilerGating = fn(558);
let closure_35 = ReactCompilerGating.isReactCompilerEnabled() ? (function EmojiPackReactionTabActions(arg0) {
  const cResult = c.c(5);
  const id = arg0.reactions[arg0.reactionSelectedIndex].emoji.id;
  if (cResult[0] !== id) {
    const obj2 = { emojiId: id, skipKnownGuildEmojiFetch: true };
    cResult[0] = id;
    cResult[1] = obj2;
    let tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  const sourceType = useEmojiAndSource.useEmojiAndSource(tmp4).sourceType;
  if (cResult[2] === arg0) {
    if (cResult[3] === sourceType) {
      return cResult[4];
    }
  }
  if (sourceType === EmojiSourceDataTypes.PACK) {
    const obj3 = {};
    const merged = Object.assign(arg0);
    obj3.isEmojiPack = true;
    let tmp10 = collapsedCategories(EmojiOptionsButton, obj3);
  } else {
    const obj4 = {};
    const merged1 = Object.assign(arg0);
    tmp10 = collapsedCategories(RemoveAllButton, obj4);
  }
  cResult[2] = arg0;
  cResult[3] = sourceType;
  cResult[4] = tmp10;
  const tmpResult = useEmojiAndSource;
}) : (function EmojiPackReactionTabActions(arg0) {
  const emojiId = arg0.reactions[arg0.reactionSelectedIndex].emoji.id;
  if (obj.useEmojiAndSource({ emojiId, skipKnownGuildEmojiFetch: true }).sourceType === EmojiSourceDataTypes.PACK) {
    const obj2 = {};
    const merged = Object.assign(arg0);
    obj2.isEmojiPack = true;
    let tmp6 = collapsedCategories(EmojiOptionsButton, obj2);
  } else {
    const obj3 = {};
    const merged1 = Object.assign(arg0);
    tmp6 = collapsedCategories(RemoveAllButton, obj3);
  }
  return tmp6;
});
ReactCompilerGating = fn(558);
let closure_36 = ReactCompilerGating.isReactCompilerEnabled() ? (function ReactionTabs(setReactionSelectedIndex) {
  const cResult = reactionSelectedIndex(576).c(34);
  const tmp3 = closure_22();
  ({ reactions, reactionSelectedIndex } = setReactionSelectedIndex);
  setReactionSelectedIndex = setReactionSelectedIndex.setReactionSelectedIndex;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { location: "ReactionTabs" };
    const obj3 = { autoTrackExposure: false };
    cResult[0] = obj2;
    cResult[1] = obj3;
    tmp4 = obj2;
    tmp5 = obj3;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const obj = reactionSelectedIndex(576);
  const tmp6 = setReactionSelectedIndex;
  const tidaWebformEnabled = setReactionSelectedIndex(7233).useExperiment(tmp4, tmp5).tidaWebformEnabled;
  if (cResult[2] === reactionSelectedIndex) {
    if (cResult[3] === reactions) {
      if (cResult[7] !== setReactionSelectedIndex) {
        class T {
          constructor(arg0) {
            obj = closure_0(closure_3[51]);
            result = obj.triggerHapticFeedback(closure_1(closure_3[52]).IMPACT_LIGHT);
            tmp2 = setReactionSelectedIndex(setReactionSelectedIndex);
            return;
          }
        }
        cResult[7] = setReactionSelectedIndex;
        cResult[8] = T;
      } else {
        class T {
          constructor(arg0) {
            obj = closure_0(closure_3[51]);
            result = obj.triggerHapticFeedback(closure_1(closure_3[52]).IMPACT_LIGHT);
            tmp2 = setReactionSelectedIndex(setReactionSelectedIndex);
            return;
          }
        }
      }
      if (cResult[9] === reactionSelectedIndex) {
        class T {
          constructor(arg0) {
            obj = closure_0(closure_3[51]);
            result = obj.triggerHapticFeedback(closure_1(closure_3[52]).IMPACT_LIGHT);
            tmp2 = setReactionSelectedIndex(setReactionSelectedIndex);
            return;
          }
        }
      }
      const obj8 = { tabs: cResult[4], tabStyle: null, tabStyleActive: null, tabStyleSelected: null, tabIndexSelected: null, onSelect: null };
      ({ tab: obj5.tabStyle, tabActive: obj5.tabStyleActive, tabSelected: obj5.tabStyleSelected } = tmp3);
      obj8.tabIndexSelected = reactionSelectedIndex;
      obj8.onSelect = T;
      const tmp13 = closure_18(tmp6(9914), obj8);
      cResult[9] = reactionSelectedIndex;
      cResult[10] = tmp3.tab;
      cResult[11] = tmp3.tabActive;
      cResult[12] = tmp3.tabSelected;
      cResult[13] = cResult[4];
      cResult[14] = T;
      cResult[15] = tmp13;
    }
  }
  if (cResult[5] !== reactionSelectedIndex) {
    class T {
      constructor(arg0) {
        obj = closure_0(closure_3[51]);
        result = obj.triggerHapticFeedback(closure_1(closure_3[52]).IMPACT_LIGHT);
        tmp2 = setReactionSelectedIndex(setReactionSelectedIndex);
        return;
      }
    }
    cResult[5] = reactionSelectedIndex;
    cResult[6] = R;
  } else {
    class T {
      constructor(arg0) {
        obj = closure_0(closure_3[51]);
        result = obj.triggerHapticFeedback(closure_1(closure_3[52]).IMPACT_LIGHT);
        tmp2 = setReactionSelectedIndex(setReactionSelectedIndex);
        return;
      }
    }
  }
  const mapped = reactions.map(R);
  cResult[2] = reactionSelectedIndex;
  cResult[3] = reactions;
  cResult[4] = mapped;
  const obj4 = setReactionSelectedIndex(7233);
}) : (function ReactionTabs(setReactionSelectedIndex) {
  const tmp = closure_22();
  ({ reactions, reactionSelectedIndex } = setReactionSelectedIndex);
  setReactionSelectedIndex = setReactionSelectedIndex.setReactionSelectedIndex;
  const emoji = reactions[reactionSelectedIndex].emoji;
  const obj2 = { style: tmp.reactionTab, children: null };
  const obj4 = { tabs: null, tabStyle: null, tabStyleActive: null, tabStyleSelected: null, tabIndexSelected: null, onSelect: null };
  const obj = setReactionSelectedIndex(7233);
  obj4.tabs = reactions.map((reaction, index) => {
    let str = "normal-";
    if (reaction.burst_count > 0) {
      str = "burst-";
    }
    let str2 = reaction.emoji.id;
    if (str2 == null) {
      str2 = "";
    }
    return collapsedCategories(closure_30, { reaction, selected: index === reactionSelectedIndex }, "" + str + str2 + ":" + reaction.emoji.name);
  });
  ({ tab: obj3.tabStyle, tabActive: obj3.tabStyleActive, tabSelected: obj3.tabStyleSelected } = tmp);
  obj4.tabIndexSelected = reactionSelectedIndex;
  obj4.onSelect = function onSelect(arg0) {
    const result = HapticUtils.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
    setReactionSelectedIndex(arg0);
  };
  const items = [closure_18(setReactionSelectedIndex(9914), obj4), closure_18(setReactionSelectedIndex(8887), { outer: true }), ];
  const obj5 = { style: tmp.removeButtonContainer, children: null };
  const obj7 = { style: tmp.emojiTextIdentifier, variant: "eyebrow", color: "text-default", children: null };
  const tmp5 = setReactionSelectedIndex(9914);
  obj7.children = reactionSelectedIndex(4892).getReactionEmojiName(reactions[reactionSelectedIndex].emoji);
  const items1 = [closure_18(reactionSelectedIndex(5195).Text, obj7), ];
  if (obj.useExperiment({ location: "ReactionTabs" }, { autoTrackExposure: false }).tidaWebformEnabled) {
    const obj8 = {};
    const merged = Object.assign(setReactionSelectedIndex);
    let tmp4Result = closure_18(EmojiOptionsButton, obj8);
  } else {
    const obj14 = {};
    const merged1 = Object.assign(setReactionSelectedIndex);
    let name = emoji.id;
    if (name == null) {
      name = emoji.name;
    }
    tmp4Result = closure_18(closure_35, obj14, name);
  }
  items1[1] = tmp4Result;
  obj5.children = items1;
  items[2] = closure_19(closure_9, obj5);
  obj2.children = items;
  return closure_19(closure_9, obj2);
});
fn(558);
const MessageReactionsContent_SwipableBounced = "MessageReactionsContent_SwipableBounced";
const obj12 = { lineHeight: 24, fontSize: 20, textAlign: "center", color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
let Storage = fn(510).Storage;
let closure_38 = Storage.get("MessageReactionsContent_SwipableBounced", false);
ReactCompilerGating = fn(558);
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? (function MessageReactionsEmpty() {
  const cResult = c.c(10);
  const tmp4 = closure_22();
  const tmp5 = useSafeAreaInsetsDefault();
  const noResultsSource = generated_NoResults.useNoResultsSource();
  const sum = 338 + tmp5.bottom;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const stringResult = intl.string(util.t.HmPOrp);
    const intl2 = util.intl;
    const stringResult1 = intl2.string(util.t["pTJ5J/"]);
    cResult[0] = stringResult;
    cResult[1] = stringResult1;
    tmp8 = stringResult;
    tmp9 = stringResult1;
  } else {
    [tmp8, tmp9] = cResult;
  }
  if (cResult[2] !== noResultsSource) {
    const obj3 = { source: noResultsSource, title: tmp8, body: tmp9 };
    const tmp14 = collapsedCategories(native.RefreshEmptyState, obj3);
    cResult[2] = noResultsSource;
    cResult[3] = tmp14;
    let tmp12 = tmp14;
  } else {
    tmp12 = cResult[3];
  }
  if (cResult[4] === tmp4.containerEmpty) {
    if (cResult[5] === tmp12) {
      let tmp15 = cResult[6];
    }
    if (cResult[7] === sum) {
      if (cResult[8] === tmp15) {
        let tmp17 = cResult[9];
      }
      return tmp17;
    }
    const obj4 = { scrollable: true, startHeight: sum, children: tmp15 };
    const tmp19 = collapsedCategories(Sheet_BottomSheet.BottomSheet, obj4);
    cResult[7] = sum;
    cResult[8] = tmp15;
    cResult[9] = tmp19;
    tmp17 = tmp19;
  }
  const tmp16 = collapsedCategories(BottomSheetModal.BottomSheetView, { style: tmp4.containerEmpty, children: tmp12 });
  cResult[4] = tmp4.containerEmpty;
  cResult[5] = tmp12;
  cResult[6] = tmp16;
  tmp15 = tmp16;
}) : (function MessageReactionsEmpty() {
  const tmp = closure_22();
  const tmp2 = useSafeAreaInsetsDefault();
  const obj2 = { scrollable: true, startHeight: 338 + tmp2.bottom, children: null };
  const obj3 = { style: tmp.containerEmpty, children: null };
  const obj4 = { source: generated_NoResults.useNoResultsSource(), title: null, body: null };
  const intl = util.intl;
  obj4.title = intl.string(util.t.HmPOrp);
  const intl2 = util.intl;
  obj4.body = intl2.string(util.t["pTJ5J/"]);
  obj3.children = collapsedCategories(native.RefreshEmptyState, obj4);
  obj2.children = collapsedCategories(BottomSheetModal.BottomSheetView, obj3);
  return collapsedCategories(Sheet_BottomSheet.BottomSheet, obj2);
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/reactions/native/MessageReactionsContent.tsx");

export const useReactors = tmp5;
export const useReactorsOnScrollNative = tmp6;
export const MessageReactionsEmpty = tmp7;
export const MessageReactionsContent = ReactCompilerGating.isReactCompilerEnabled() ? (function MessageReactionsContent(channelId) {
  const cResult = channelId(NORMAL[16]).c(56);
  channelId = channelId.channelId;
  const messageId = channelId.messageId;
  ({ emoji, reactions, isSelectedBurst, disableManage, disableTabs } = channelId);
  const tmp6 = closure_22();
  if (cResult[0] === emoji) {
    if (cResult[1] === isSelectedBurst) {
      if (cResult[2] === reactions) {
        let tmp7 = cResult[3];
      }
      const tmp9 = closure_24(tmp7);
      const reactionSelected = tmp9.reactionSelected;
      ({ reactionSelectedIndex, setReactionSelectedIndex } = tmp9);
      if (null != reactionSelected.me_vote) {
        NORMAL = tmp(tmp2[20]).ReactionTypes.VOTE;
      } else if (reactionSelected.burst_count > 0) {
        NORMAL = tmp(tmp2[20]).ReactionTypes.BURST;
      } else {
        NORMAL = tmp(tmp2[20]).ReactionTypes.NORMAL;
      }
      if (cResult[4] === channelId) {
        if (cResult[5] === messageId) {
          if (cResult[6] === reactionSelected) {
            if (cResult[7] === NORMAL) {
              let tmp11 = cResult[8];
            }
            ({ reactors, reactorsHasMore } = closure_25(tmp11));
            const _Symbol = Symbol;
            if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
              const items = [ChannelStore];
              cResult[9] = items;
              let tmp15 = items;
            } else {
              tmp15 = cResult[9];
            }
            if (cResult[10] !== channelId) {
              const fn = function z() {
                return ChannelStore.getChannel(channelId);
              };
              const items1 = [channelId];
              cResult[10] = channelId;
              cResult[11] = fn;
              cResult[12] = items1;
              let tmp18 = items1;
              let tmp17 = fn;
            } else {
              tmp17 = cResult[11];
              tmp18 = cResult[12];
            }
            const tmp13 = closure_25(tmp11);
            const stateFromStores = tmp(tmp2[17]).useStateFromStores(tmp15, tmp17, tmp18);
            const tmpResult = tmp(tmp2[17]);
            let tmp21 = messageId;
            const isActiveChannelOrUnarchivableThread = tmp(tmp2[59]).useIsActiveChannelOrUnarchivableThread(stateFromStores);
            const tmp22 = messageId(tmp2[54])();
            const tmp24 = closure_23(channelId) && !tmp4 && isActiveChannelOrUnarchivableThread;
            let name = reactionSelected.emoji.id;
            if (name == null) {
              name = reactionSelected.emoji.name;
            }
            const _Symbol2 = Symbol;
            if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
              const intl = tmp(tmp2[36]).intl;
              const stringResult = intl.string(tmp(tmp2[36]).t.gHp0C4);
              cResult[13] = stringResult;
              let tmp25 = stringResult;
            } else {
              tmp25 = cResult[13];
            }
            if (cResult[14] === channelId) {
              if (cResult[15] === messageId) {
                if (cResult[16] === reactionSelected) {
                  if (cResult[17] === NORMAL) {
                    if (cResult[18] === reactors) {
                      if (cResult[19] === reactorsHasMore) {
                        let tmp28 = cResult[20];
                      }
                      const tmp30 = closure_26(tmp28);
                      const tmp32 = closure_27(reactors, reactorsHasMore);
                      const tmp39 = closure_28(reactors, messageId, channelId, reactionSelected, tmp24);
                      const tmp45 = closure_29(channelId, messageId, reactionSelected, reactors);
                      if (cResult[21] !== reactors.length) {
                        const items2 = [reactors.length];
                        cResult[21] = reactors.length;
                        cResult[22] = items2;
                        let tmp46 = items2;
                      } else {
                        tmp46 = cResult[22];
                      }
                      if (cResult[23] === tmp22.bottom) {
                        if (cResult[24] === tmp6.container) {
                          if (cResult[25] === tmp30) {
                            if (cResult[26] === tmp32) {
                              if (cResult[27] === tmp39) {
                                if (cResult[28] === tmp45) {
                                  if (cResult[29] === tmp46) {
                                    let tmp47 = cResult[30];
                                  }
                                  const _Symbol3 = Symbol;
                                  if (cResult[31] === Symbol.for("react.memo_cache_sentinel")) {
                                    function se() {
                                      c38 = true;
                                      const Storage = channelId(NORMAL[58]).Storage;
                                      const result = Storage.set(MessageReactionsContent_SwipableBounced, true);
                                    }
                                    cResult[31] = se;
                                    let merged = se;
                                  } else {
                                    merged = cResult[31];
                                  }
                                  if (cResult[32] !== tmp24) {
                                    const tmp51 = tmp(tmp2[32]).isIOS() && tmp24;
                                    cResult[32] = tmp24;
                                    cResult[33] = tmp51;
                                    let tmp50 = tmp51;
                                    const tmpResult4 = tmp(tmp2[32]);
                                  } else {
                                    tmp50 = cResult[33];
                                  }
                                  if (cResult[34] === channelId) {
                                    if (cResult[35] === messageId) {
                                      if (cResult[36] === reactionSelected.emoji) {
                                        if (cResult[37] === NORMAL) {
                                          let tmp52 = cResult[38];
                                        }
                                        if (cResult[39] !== tmp52) {
                                          const tmp52Result = tmp52();
                                          cResult[39] = tmp52;
                                          cResult[40] = tmp52Result;
                                          let tmp53 = tmp52Result;
                                        } else {
                                          tmp53 = cResult[40];
                                        }
                                        if (cResult[41] === channelId) {
                                          if (cResult[42] === tmp5) {
                                            if (cResult[43] === messageId) {
                                              if (cResult[44] === reactionSelectedIndex) {
                                                if (cResult[45] === reactions) {
                                                  if (cResult[46] === setReactionSelectedIndex) {
                                                    let tmp55 = cResult[47];
                                                  }
                                                  if (cResult[48] === tmp50) {
                                                    if (cResult[49] === tmp47) {
                                                      if (cResult[50] === name) {
                                                        if (cResult[52] === tmp53) {
                                                          if (cResult[53] === tmp55) {
                                                            if (cResult[54] === tmp59) {
                                                              let tmp70 = cResult[55];
                                                            }
                                                            return tmp70;
                                                          }
                                                        }
                                                        let obj2 = { scrollable: true, backdropOpacity: tmp(tmp2[63]).BACKDROP_OPACITY, backdropChildren: tmp53, header: tmp55, children: cResult[51] };
                                                        const tmp72 = closure_18(tmp(tmp2[57]).BottomSheet, obj2);
                                                        cResult[52] = tmp53;
                                                        cResult[53] = tmp55;
                                                        cResult[54] = cResult[51];
                                                        cResult[55] = tmp72;
                                                        tmp70 = tmp72;
                                                      }
                                                    }
                                                  }
                                                  if (tmp50) {
                                                    tmp21 = tmp21(tmp2[61]);
                                                    const obj3 = { inActionSheet: true, bounceFirstRowOnMount: !c38, onBounceSwipable: merged };
                                                    merged = Object.assign(tmp47);
                                                    let tmp60Result = closure_18(tmp21, obj3, name);
                                                  } else {
                                                    const obj4 = { inActionSheet: true };
                                                    const merged1 = Object.assign(tmp47);
                                                    tmp60Result = closure_18(tmp21(tmp2[62]), obj4, name);
                                                    const tmp21Result = tmp21(tmp2[62]);
                                                  }
                                                  cResult[48] = tmp50;
                                                  cResult[49] = tmp47;
                                                  cResult[50] = name;
                                                  cResult[51] = tmp60Result;
                                                }
                                              }
                                            }
                                          }
                                        }
                                        let tmp56 = null;
                                        if (true !== tmp5) {
                                          const obj5 = { reactions, reactionSelectedIndex, setReactionSelectedIndex, messageId, channelId };
                                          tmp56 = closure_18(closure_36, obj5);
                                        }
                                        cResult[41] = channelId;
                                        cResult[42] = tmp5;
                                        cResult[43] = messageId;
                                        cResult[44] = reactionSelectedIndex;
                                        cResult[45] = reactions;
                                        cResult[46] = setReactionSelectedIndex;
                                        cResult[47] = tmp56;
                                        tmp55 = tmp56;
                                      }
                                    }
                                  }
                                  function renderBurstAnimationPreview() {
                                    let tmp3 = null;
                                    if (NORMAL === MessageReactionsTypes.ReactionTypes.BURST) {
                                      const obj = { style: closure_2_8.absoluteFill, pointerEvents: "none", children: null };
                                      const obj2 = { emoji: reactionSelected.emoji, reactionType: NORMAL, messageId, channelId };
                                      obj.children = collapsedCategories(BurstReactionAnimationPreviewDefault, obj2);
                                      tmp3 = collapsedCategories(React6, obj);
                                    }
                                    return tmp3;
                                  }
                                  cResult[34] = channelId;
                                  cResult[35] = messageId;
                                  cResult[36] = reactionSelected.emoji;
                                  cResult[37] = NORMAL;
                                  cResult[38] = renderBurstAnimationPreview;
                                  tmp52 = renderBurstAnimationPreview;
                                }
                              }
                            }
                          }
                        }
                      }
                      const obj6 = { accessibilityLabel: tmp25, footerSize: v48, insetBottom: tmp27, onScroll: tmp30, renderFooter: tmp32, renderItem: tmp39, renderQuickActions: tmp45, itemSize: v48, sections: tmp46, style: tmp6.container };
                      cResult[23] = tmp22.bottom;
                      cResult[24] = tmp6.container;
                      cResult[25] = tmp30;
                      cResult[26] = tmp32;
                      cResult[27] = tmp39;
                      cResult[28] = tmp45;
                      cResult[29] = tmp46;
                      cResult[30] = obj6;
                      tmp47 = obj6;
                    }
                  }
                }
              }
            }
            const obj7 = { channelId, messageId, reactionSelected, reactors, reactorsHasMore, reactionType: NORMAL };
            cResult[14] = channelId;
            cResult[15] = messageId;
            cResult[16] = reactionSelected;
            cResult[17] = NORMAL;
            cResult[18] = reactors;
            cResult[19] = reactorsHasMore;
            cResult[20] = obj7;
            tmp28 = obj7;
            const tmpResult3 = tmp(tmp2[59]);
          }
        }
      }
      const obj8 = { channelId, messageId, reaction: reactionSelected, reactionType: NORMAL };
      cResult[4] = channelId;
      cResult[5] = messageId;
      cResult[6] = reactionSelected;
      cResult[7] = NORMAL;
      cResult[8] = obj8;
      tmp11 = obj8;
    }
  }
  const obj9 = { reactions, emoji, isSelectedBurst };
  cResult[0] = emoji;
  cResult[1] = isSelectedBurst;
  cResult[2] = reactions;
  cResult[3] = obj9;
  tmp7 = obj9;
  let obj = channelId(NORMAL[16]);
  tmp4 = undefined !== disableManage && disableManage;
}) : (function MessageReactionsContent(channelId) {
  channelId = channelId.channelId;
  ({ messageId, reactions, disableManage } = channelId);
  ({ emoji, isSelectedBurst } = channelId);
  if (disableManage === undefined) {
    disableManage = false;
  }
  let flag = channelId.disableTabs;
  if (flag === undefined) {
    flag = false;
  }
  const tmp2 = closure_24({ reactions, emoji, isSelectedBurst });
  const reactionSelected = tmp2.reactionSelected;
  ({ reactionSelectedIndex, setReactionSelectedIndex } = tmp2);
  if (null != reactionSelected.me_vote) {
    let NORMAL = channelId(5186).ReactionTypes.VOTE;
    let tmp5 = channelId;
    let tmp7 = channelId;
  } else if (reactionSelected.burst_count > 0) {
    NORMAL = channelId(5186).ReactionTypes.BURST;
    tmp5 = channelId;
    tmp7 = channelId;
  } else {
    NORMAL = channelId(5186).ReactionTypes.NORMAL;
    tmp5 = channelId;
    tmp7 = channelId;
  }
  const tmp = closure_22();
  ({ reactors, reactorsHasMore } = closure_25({ channelId, messageId, reaction: reactionSelected, reactionType: NORMAL }));
  const tmp13 = closure_25({ channelId, messageId, reaction: reactionSelected, reactionType: NORMAL });
  const items = [ChannelStore];
  const items1 = [channelId];
  const stateFromStores = tmp7(504).useStateFromStores(items, () => ChannelStore.getChannel(channelId), items1);
  const tmp7Result = tmp7(504);
  const isActiveChannelOrUnarchivableThread = tmp7(7318).useIsActiveChannelOrUnarchivableThread(stateFromStores);
  const tmp7Result3 = tmp7(7318);
  let tmp18 = closure_23(channelId);
  if (tmp18) {
    tmp18 = !disableManage;
  }
  if (tmp18) {
    tmp18 = isActiveChannelOrUnarchivableThread;
  }
  let name = reactionSelected.emoji.id;
  if (name == null) {
    name = reactionSelected.emoji.name;
  }
  const obj = { accessibilityLabel: null, footerSize: null, insetBottom: null, onScroll: null, renderFooter: null, renderItem: null, renderQuickActions: null, itemSize: null, sections: null, style: null };
  const intl = tmp7(1128).intl;
  obj.accessibilityLabel = intl.string(tmp7(1128).t.gHp0C4);
  obj.footerSize = v48;
  obj.insetBottom = useSafeAreaInsetsDefault().bottom;
  obj.onScroll = closure_26({ channelId, messageId, reactionSelected, reactors, reactorsHasMore, reactionType: NORMAL });
  obj.renderFooter = closure_27(reactors, reactorsHasMore);
  obj.renderItem = closure_28(reactors, messageId, channelId, reactionSelected, tmp18);
  obj.renderQuickActions = closure_29(channelId, messageId, reactionSelected, reactors);
  obj.itemSize = v48;
  const items2 = [reactors.length];
  obj.sections = items2;
  obj.style = tmp.container;
  const callback = noop.useCallback(() => {
    c38 = true;
    const Storage = channelId(dependencyMap[58]).Storage;
    const result = Storage.set(MessageReactionsContent_SwipableBounced, true);
  }, []);
  const tmp17 = useSafeAreaInsetsDefault();
  const tmp7Result4 = tmp7(1384);
  const obj2 = { scrollable: true, backdropOpacity: tmp7(4903).BACKDROP_OPACITY, backdropChildren: null, header: null, children: null };
  let tmp21Result = null;
  if (NORMAL === tmp5(5186).ReactionTypes.BURST) {
    const obj3 = { style: closure_8.absoluteFill, pointerEvents: "none", children: null };
    const obj4 = { emoji: reactionSelected.emoji, reactionType: NORMAL, messageId, channelId };
    obj3.children = closure_18(BurstReactionAnimationPreviewDefault, obj4);
    tmp21Result = closure_18(closure_9, obj3);
  }
  obj2.backdropChildren = tmp21Result;
  let tmp21Result3 = null;
  if (true !== flag) {
    const obj5 = { reactions, reactionSelectedIndex, setReactionSelectedIndex, messageId, channelId };
    tmp21Result3 = closure_18(closure_36, obj5);
  }
  obj2.header = tmp21Result3;
  if (tmp20) {
    const obj6 = { inActionSheet: true, bounceFirstRowOnMount: !c38, onBounceSwipable: callback };
    const merged = Object.assign(obj);
    let tmp21Result4 = closure_18(SwipeableFastListDefault, obj6, name);
    const tmp16Result = SwipeableFastListDefault;
  } else {
    const obj7 = { inActionSheet: true };
    const merged1 = Object.assign(obj);
    tmp21Result4 = closure_18(FastListDefault, obj7, name);
    const tmp16Result2 = FastListDefault;
  }
  obj2.children = tmp21Result4;
  return closure_18(tmp7(5226).BottomSheet, obj2);
});