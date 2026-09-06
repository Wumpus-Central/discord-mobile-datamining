// === Module 11256: MessageReactionsContent ===

// Module 11256 (MessageReactionsContent)
import _modDef12 from "module_12" /* 12 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import native from "native" /* 1178 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1396 */;
import useWindowDimensions from "useWindowDimensions" /* 1477 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1611 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import HapticUtils from "HapticUtils" /* 4528 */;
import haptics_HapticFeedbackTypesDefault from "haptics/HapticFeedbackTypes" /* 4529 */;
import Text_Text from "Text/Text" /* 4556 */;
import timing from "timing" /* 4561 */;
import BottomSheetModal from "BottomSheetModal" /* 6627 */;
import EmojiDefault from "Emoji" /* 7130 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 7150 */;
import MessageReactionsTypes from "MessageReactionsTypes" /* 7763 */;
import ReactionActionCreators from "ReactionActionCreators" /* 7764 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8179 */;
import generated_NoResults from "generated/NoResults" /* 8232 */;
import useEmojiColorPalette from "useEmojiColorPalette" /* 11259 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4552 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import GuildMemberStore from "GuildMemberStore" /* 2021 */;
import MessageReactionsStore from "MessageReactionsStore" /* 7762 */;
import PermissionStore from "PermissionStore" /* 4199 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4296 */;

const ReactionActionCreatorsAll = ReactionActionCreators;

require = fn;
function useReactors(channelId) {
  channelId = channelId.channelId;
  const messageId = channelId.messageId;
  const reaction = channelId.reaction;
  const reactionType = channelId.reactionType;
  let obj = channelId(reactionType[14]);
  let items = [MessageReactionsStore];
  const items1 = [channelId, messageId, reaction.emoji, reactionType];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const reactions = MessageReactionsStore.getReactions(channelId, messageId, reaction.emoji, limit, reactionType);
    let items;
    if (reactions != null) {
      items = reactions.values();
    }
    if (items == null) {
      items = [];
    }
    return Array.from(items);
  }, items1, messageId(reactionType[16]));
  obj = { reactors: stateFromStores, reactorsHasMore: null };
  if (reactionType === channelId(reactionType[17]).ReactionTypes.VOTE) {
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
    tmp3 = reactionType === channelId(reactionType[17]).ReactionTypes.BURST ? reaction.burst_count : reaction.count;
  }
  obj.reactorsHasMore = tmp3 > stateFromStores.length;
  return obj;
}
function useReactorsOnScrollNative(channelId) {
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
      const obj = { channelId, messageId, emoji: reactionSelected.emoji, limit, after: id, type: reactionType };
      const reactors = obj.getReactors(obj);
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
  closure_9 = messageId(reactorsHasMore[19])(() => _modDef12.debounce((AUTO_DISMISS, current) => ref.current(AUTO_DISMISS, current), 16));
  return messageId(reactorsHasMore[19])(() => (nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    return closure_1_9(nativeEvent.contentOffset.y, nativeEvent.contentSize.height);
  });
}
function ReactionTab(arg0) {
  ({ reaction, selected } = arg0);
  const tmp = closure_20();
  let obj = useEmojiColorPalette;
  let burst_colors = reaction.burst_colors;
  if (burst_colors == null) {
    burst_colors = [];
  }
  const emojiColorPalette = obj.useEmojiColorPalette(burst_colors);
  let accentColor;
  if (emojiColorPalette != null) {
    accentColor = emojiColorPalette.accentColor;
  }
  let tmp7 = null;
  if (null != accentColor) {
    obj = { color: emojiColorPalette.accentColor };
    tmp7 = obj;
  }
  let tmp8 = null;
  if (null != emojiColorPalette) {
    obj = { backgroundColor: null };
    let tmp3Result = tmp3(4409);
    obj.backgroundColor = tmp3Result.hexOpacityToRgba(emojiColorPalette.backgroundColor, emojiColorPalette.opacity);
    tmp8 = obj;
  }
  const emoji = reaction.emoji;
  tmp3Result = tmp3(504);
  const items = [AccessibilityStore];
  const stateFromStores = tmp3Result.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const AnimateEmoji = tmp3(1935).AnimateEmoji;
  let emojiURL;
  if (null != emoji.id) {
    const obj1 = { id: null, animated: null, size: 48 };
    ({ id: obj7.id, animated } = emoji);
    if (animated) {
      animated = !stateFromStores;
    }
    if (animated) {
      animated = tmp10;
    }
    obj1.animated = animated;
    emojiURL = AvatarUtilsDefault.getEmojiURL(obj1);
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
  const obj2 = { style: items1, accessible: true, accessibilityLabel: emoji.name, accessibilityState: { selected }, children: null };
  items1[2] = tmp16;
  const obj3 = { src: emojiURL, name: emoji.name, textEmojiStyle: null, fastImageStyle: null };
  const items2 = [, ];
  ({ emoji: arr4[0], emojiText: arr4[1] } = tmp);
  obj3.textEmojiStyle = items2;
  const items3 = [, ];
  ({ emoji: arr5[0], emojiImage: arr5[1] } = tmp);
  obj3.fastImageStyle = items3;
  const items4 = [closure_1_17(EmojiDefault, obj3), ];
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
  items4[1] = closure_1_17(Text_Text.Text, { variant: "text-md/bold", style: items5, children: reaction.burst_count > 0 ? reaction.burst_count : reaction.count });
  obj2.children = items4;
  let name = emoji.id;
  if (name == null) {
    name = emoji.name;
  }
  return collapsedCategories(React7, obj2, name);
}
function RemoveAllButton(channelId) {
  ({ reactions: require, reactionSelectedIndex } = channelId);
  channelId = channelId.channelId;
  const messageId = channelId.messageId;
  noop = undefined;
  c6 = undefined;
  let sharedValue1;
  let callback;
  let obj = require("initialize");
  const items = [ChannelStore];
  const items1 = [channelId];
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId), items1);
  const useReducedMotion = AccessibilityStore.useReducedMotion;
  const tmp = closure_20();
  const tmp6 = reactionSelectedIndex(messageId[39])(stateFromStores);
  [c5, c6] = useReducedMotion(noop.useState(true), 2);
  let obj1 = require("ReanimatedRexport");
  const sharedValue = obj1.useSharedValue(64);
  let obj2 = require("ReanimatedRexport");
  class S {
    constructor() {
      if (useReducedMotion) {
        tmp5 = closure_7;
        value = closure_7.get();
      } else {
        tmp = closure_0;
        tmp2 = closure_3;
        obj = closure_0(closure_3[40]);
        tmp3 = closure_7;
        value = obj.withTiming(closure_7.get(), { duration: 200 });
      }
      return { maxWidth: value };
    }
  }
  obj = { useReducedMotion, buttonWidth: sharedValue, withTiming: require("timing").withTiming };
  S.__closure = obj;
  S.__workletHash = 16499689496895;
  S.__initData = __initData;
  const animatedStyle = obj2.useAnimatedStyle(S);
  let obj4 = require("ReanimatedRexport");
  sharedValue1 = obj4.useSharedValue(0);
  const tmp7 = useReducedMotion(noop.useState(true), 2);
  class T {
    constructor() {
      if (useReducedMotion) {
        tmp5 = closure_8;
        value = closure_8.get();
      } else {
        tmp = closure_0;
        tmp2 = closure_3;
        obj = closure_0(closure_3[40]);
        tmp3 = closure_8;
        value = obj.withTiming(closure_8.get(), { duration: 125 });
      }
      return { opacity: value, color: "white", fontSize: 14, marginLeft: 8, textAlignVertical: "center" };
    }
  }
  obj = { useReducedMotion, textOpacity: sharedValue1, withTiming: require("timing").withTiming };
  T.__closure = obj;
  T.__workletHash = 8698187840986;
  T.__initData = __initData2;
  const items2 = [sharedValue, sharedValue1];
  const animatedStyle1 = require("ReanimatedRexport").useAnimatedStyle(T);
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
    obj1 = {
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
    obj2 = { style: null, children: null };
    const items4 = [tmp.removeAllButton, animatedStyle];
    obj2.style = items4;
    const obj3 = { color: tmp5(tmp3[13]).unsafe_rawColors.WHITE, size: "sm" };
    const items5 = [closure_17(tmp2(tmp3[42]).TrashIcon, obj3), ];
    obj4 = { style: animatedStyle1, variant: "text-sm/semibold", color: "text-overlay-light", children: null };
    const intl = tmp2(tmp3[34]).intl;
    obj4.children = intl.string(tmp2(tmp3[34]).t["zx/e4P"]);
    items5[1] = closure_17(closure_19, obj4);
    obj2.children = items5;
    obj1.children = closure_18(tmp5(tmp3[10]).View, obj2);
    tmp14 = closure_17(sharedValue, obj1);
  }
  return tmp14;
}
function EmojiOptionsButton(channelId) {
  channelId = channelId.channelId;
  const messageId = channelId.messageId;
  ({ reactions, reactionSelectedIndex } = channelId);
  let obj = channelId(504);
  const items = [ChannelStore];
  const items1 = [channelId];
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId), items1);
  const tmp3 = messageId(11260)(stateFromStores);
  const canRemoveReactions = tmp3;
  dependencyMap = tmp4;
  const items2 = [channelId, messageId, reactions[reactionSelectedIndex], tmp3];
  obj = {
    onPress: noop.useCallback(() => {
      const obj = { channelId, messageId, reaction, canRemoveReactions };
      obj.openLazy(asyncRequireImpl(11261, dependencyMap.paths), "ReactionEmojiOptionsActionSheet", obj, "replaceTopSheet");
    }, items2),
    style: closure_20().emojiOptionsButton,
    children: null
  };
  obj = { variant: "text-xs/semibold", color: "text-subtle", children: null };
  const intl = channelId(1114).intl;
  obj.children = intl.string(channelId(1114).t.pCaYID);
  const items3 = [closure_17(channelId(4556).Text, obj), ];
  const tmp = closure_20();
  items3[1] = closure_17(channelId(7209).ChevronSmallRightIcon, { color: messageId(576).colors.ICON_SUBTLE, size: "xs" });
  obj.children = items3;
  return closure_18(closure_7, obj);
}
function ReactionTabs(setReactionSelectedIndex) {
  const tmp = closure_20();
  ({ reactions, reactionSelectedIndex } = setReactionSelectedIndex);
  setReactionSelectedIndex = setReactionSelectedIndex.setReactionSelectedIndex;
  setReactionSelectedIndex(7189);
  let obj = { style: tmp.reactionTab, children: null };
  obj = {
    tabs: reactions.map((reaction, index) => {
      let str = reaction.emoji.id;
      if (str == null) {
        str = "";
      }
      return closure_2_17(ReactionTab, { reaction, selected: index === reactionSelectedIndex }, "" + str + ":" + reaction.emoji.name);
    }),
    tabStyle: null,
    tabStyleActive: null,
    tabStyleSelected: null,
    tabIndexSelected: reactionSelectedIndex,
    onSelect(arg0) {
      const result = HapticUtils.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
      setReactionSelectedIndex(arg0);
    },
    initialNumTabsToRender: reactionSelectedIndex(4211).MAX_REACTIONS
  };
  ({ tab: obj3.tabStyle, tabActive: obj3.tabStyleActive, tabSelected: obj3.tabStyleSelected } = tmp);
  const items = [closure_17(setReactionSelectedIndex(11262), obj), closure_17(setReactionSelectedIndex(8599), { outer: true }), ];
  const obj1 = { style: tmp.removeButtonContainer, children: null };
  const obj2 = { style: tmp.emojiTextIdentifier, variant: "eyebrow", color: "text-default", children: null };
  const tmp4 = closure_17;
  const tmp5 = setReactionSelectedIndex(11262);
  obj2.children = reactionSelectedIndex(4211).getReactionEmojiName(reactions[reactionSelectedIndex].emoji);
  const items1 = [closure_17(reactionSelectedIndex(4556).Text, obj2), ];
  const obj3 = {};
  const obj6 = reactionSelectedIndex(4211);
  const merged = Object.assign(setReactionSelectedIndex);
  items1[1] = tmp4(obj.useExperiment({ location: "ReactionTabs" }, { autoTrackExposure: false }).tidaWebformEnabled ? EmojiOptionsButton : RemoveAllButton, obj3);
  obj1.children = items1;
  items[2] = closure_18(closure_9, obj1);
  obj.children = items;
  return closure_18(closure_9, obj);
}
get_ActivityIndicator = fn(17);
({ ActivityIndicator: metroRequire, Platform, Pressable: closure_7, StyleSheet: closure_8, View: closure_9 } = get_ActivityIndicator);
const Constants = fn(1074);
({ DEFAULT_NUM_REACTION_USERS: closure_15, Permissions: closure_16 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_17, jsxs: closure_18 } = jsxProd);
let closure_19 = ReanimatedRexport.createAnimatedComponent(fn(4556).Text);
fn(4560);
let obj = { container: { flex: 1 }, containerEmpty: null, listRow: null, tabContainer: null, tabContainerSelected: null, tab: null, tabSelected: null, tabActive: null, reactionTab: null, removeButtonContainer: null, emojiOptionsButton: null, removeAllButton: null, reactionCountText: null, reactionCountTextSelected: null, emoji: null, emojiText: null, emojiImage: null, emojiTextIdentifier: null, avatar: null, buttonRow: null, loadingSpinner: null };
obj = { padding: 32, borderTopLeftRadius: nativeDefault.radii.sm, borderTopRightRadius: nativeDefault.radii.sm };
obj.containerEmpty = obj;
const createStyles = { height: 48, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
obj.listRow = createStyles;
obj.tabContainer = { flexDirection: "row", alignItems: "center", borderRadius: nativeDefault.radii.sm, padding: 8, marginTop: 8 };
let obj2 = { flexDirection: "row", alignItems: "center", borderRadius: nativeDefault.radii.sm, padding: 8, marginTop: 8 };
obj.tabContainerSelected = { backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_SELECTED };
obj.tab = { padding: 0, marginHorizontal: 8, marginBottom: 8 };
obj.tabSelected = { borderBottomColor: "transparent" };
let obj3 = { backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_SELECTED };
obj.tabActive = { borderRadius: nativeDefault.radii.sm };
obj.reactionTab = { display: "flex", flexDirection: "column" };
obj.removeButtonContainer = { display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" };
let obj4 = { borderRadius: nativeDefault.radii.sm };
obj.emojiOptionsButton = { flexDirection: "row", alignItems: "center", marginRight: nativeDefault.space.PX_16, gap: 2 };
let obj5 = { flexDirection: "row", alignItems: "center", marginRight: nativeDefault.space.PX_16, gap: 2 };
obj.removeAllButton = { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_CRITICAL, borderRadius: nativeDefault.radii.xxl, height: 32, overflow: "hidden", minWidth: 42, marginRight: 20, display: "flex", flexDirection: "row", alignItems: "center", paddingHorizontal: 12 };
let obj6 = { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_CRITICAL, borderRadius: nativeDefault.radii.xxl, height: 32, overflow: "hidden", minWidth: 42, marginRight: 20, display: "flex", flexDirection: "row", alignItems: "center", paddingHorizontal: 12 };
obj.reactionCountText = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
const obj7 = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
obj.reactionCountTextSelected = { color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
obj.emoji = { marginRight: 8 };
const obj8 = { color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
obj.emojiText = { lineHeight: 24, fontSize: 20, textAlign: "center", color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
obj.emojiImage = { resizeMode: "contain", width: 24, height: 24 };
obj.emojiTextIdentifier = { padding: 16 };
obj.avatar = { marginRight: 10 };
obj.buttonRow = { flexDirection: "row", justifyContent: "flex-end", alignItems: "center" };
obj.loadingSpinner = { height: 48, padding: 6 };
let closure_20 = createStyles.createStyles(obj);
const __initData = { code: "function MessageReactionsContentTsx1(){const{useReducedMotion,buttonWidth,withTiming}=this.__closure;return{maxWidth:useReducedMotion?buttonWidth.get():withTiming(buttonWidth.get(),{duration:200})};}" };
const __initData2 = { code: "function MessageReactionsContentTsx2(){const{useReducedMotion,textOpacity,withTiming}=this.__closure;return{opacity:useReducedMotion?textOpacity.get():withTiming(textOpacity.get(),{duration:125}),color:'white',fontSize:14,marginLeft:8,textAlignVertical:'center'};}" };
const MessageReactionsContent_SwipableBounced = "MessageReactionsContent_SwipableBounced";
let Storage = fn(510).Storage;
let closure_30 = Storage.get("MessageReactionsContent_SwipableBounced", false);
const size = fn(2);
let result = size.fileFinishedImporting("modules/reactions/native/MessageReactionsContent.tsx");

export { useReactors };
export { useReactorsOnScrollNative };
export const MessageReactionsEmpty = function MessageReactionsEmpty() {
  const tmp = closure_20();
  const tmp2 = useSafeAreaInsetsDefault();
  let obj = { scrollable: true, startHeight: 338 + tmp2.bottom, children: null };
  obj = { style: tmp.containerEmpty, children: null };
  const obj1 = { source: obj.useNoResultsSource(), title: null, body: null };
  const intl = util.intl;
  obj1.title = intl.string(util.t.HmPOrp);
  const intl2 = util.intl;
  obj1.body = intl2.string(util.t["pTJ5J/"]);
  obj.children = closure_1_17(native.RefreshEmptyState, obj1);
  obj.children = closure_1_17(BottomSheetModal.BottomSheetView, obj);
  return closure_1_17(Sheet_BottomSheet.BottomSheet, obj);
};
export const MessageReactionsContent = function MessageReactionsContent(channelId) {
  channelId = channelId.channelId;
  ({ messageId, reactions, isSelectedBurst, disableManage } = channelId);
  if (disableManage === undefined) {
    disableManage = false;
  }
  let flag = channelId.disableTabs;
  if (flag === undefined) {
    flag = false;
  }
  closure_129_2 = undefined;
  closure_129_0 = reactions;
  const emoji = channelId.emoji;
  if (isSelectedBurst === undefined) {
    isSelectedBurst = false;
  }
  closure_129_2 = isSelectedBurst;
  let obj = noop;
  let tmp3 = _slicedToArray(noop.useState(() => {
    if (null == messageId) {
      return 0;
    } else {
      const findIndexResult = channelId.findIndex((emoji) => {
        const emojiEqualsResult = channelId(dependencyMap[15]).emojiEquals(emoji.emoji, messageId);
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
  }), 2);
  const bound = Math.min(tmp3[0], reactions.length - 1);
  if (null != reactions[bound].me_vote) {
    let NORMAL = channelId(7763).ReactionTypes.VOTE;
    let tmp8 = channelId;
    let tmp10 = channelId;
  } else if (tmp5.burst_count > 0) {
    NORMAL = channelId(7763).ReactionTypes.BURST;
    tmp8 = channelId;
    tmp10 = channelId;
  } else {
    NORMAL = channelId(7763).ReactionTypes.NORMAL;
    tmp8 = channelId;
    tmp10 = channelId;
  }
  let tmp2 = closure_20();
  ({ reactors, reactorsHasMore } = useReactors({ channelId, messageId, reaction: reactions[bound], reactionType: NORMAL }));
  let tmp10Result = tmp10(504);
  let items = [ChannelStore];
  const items1 = [channelId];
  const stateFromStores = tmp10Result.useStateFromStores(items, () => ChannelStore.getChannel(channelId), items1);
  tmp10Result = tmp10(7269);
  const isActiveChannelOrUnarchivableThread = tmp10Result.useIsActiveChannelOrUnarchivableThread(stateFromStores);
  closure_130_0 = channelId;
  const tmp16 = useReactors({ channelId, messageId, reaction: reactions[bound], reactionType: NORMAL });
  const tmp20 = useSafeAreaInsetsDefault();
  const items2 = [PermissionStore];
  const items3 = [channelId];
  let tmp21 = tmp8(504).useStateFromStores(items2, () => PermissionStore.canWithPartialContext(constants.MANAGE_MESSAGES, { channelId }), items3) && !disableManage && isActiveChannelOrUnarchivableThread;
  let name = tmp5.emoji.id;
  if (name == null) {
    name = tmp5.emoji.name;
  }
  obj = { accessibilityLabel: null, footerSize: 48, insetBottom: null, onScroll: null, renderFooter: null, renderItem: null, renderQuickActions: null, itemSize: 48, sections: null, style: null };
  let intl = tmp10(1114).intl;
  obj.accessibilityLabel = intl.string(tmp10(1114).t.gHp0C4);
  obj.insetBottom = tmp20.bottom;
  obj.onScroll = useReactorsOnScrollNative({ channelId, messageId, reactionSelected: reactions[bound], reactors, reactorsHasMore, reactionType: NORMAL });
  closure_131_0 = reactors;
  closure_131_1 = reactorsHasMore;
  let tmpResult = tmp();
  closure_131_2 = tmpResult;
  const items4 = [reactors, reactorsHasMore, tmpResult];
  obj.renderFooter = obj.useCallback(() => {
    if (messageId) {
      const obj = { style: channelId.loadingSpinner, size: "large" };
      let tmp2 = closure_2_17(timestampProducer, obj);
    } else {
      tmp2 = null;
    }
    return tmp2;
  }, items4);
  closure_132_0 = reactors;
  closure_132_1 = messageId;
  closure_132_2 = channelId;
  closure_132_3 = tmp5;
  closure_132_4 = tmp21;
  tmpResult = tmp();
  closure_132_5 = tmpResult;
  const analyticsLocations = tmp19(7162)().analyticsLocations;
  closure_132_6 = analyticsLocations;
  let tmp19Result = tmp19(11257);
  const reactionToProfileEnabled = tmp19Result.useConfig({ location: "MessageReactionsContent" }).reactionToProfileEnabled;
  closure_132_7 = reactionToProfileEnabled;
  const items5 = [reactors, channelId, tmp21, messageId, reactions[bound], tmpResult, analyticsLocations, reactionToProfileEnabled];
  obj.renderItem = obj.useCallback((arg0, arg1) => {
    user = user[arg1];
    const id = user.id;
    const diff = user.length - 1;
    channel = channel.getChannel(NORMAL);
    let guildId = null;
    if (null != channel) {
      guildId = channel.getGuildId();
    }
    let obj2 = messageId(dependencyMap[23]);
    let nickname = obj2.getNickname(guildId, NORMAL, user);
    if (nickname == null) {
      let tmp4Result = tmp4(tmp5[24]);
      nickname = tmp4Result.getGlobalName(user);
    }
    member = null;
    if (null != guildId) {
      member = member.getMember(guildId, id);
    }
    if (burst_count.burst_count > 0) {
      NORMAL = channelId(tmp5[17]).ReactionTypes.BURST;
      let tmp10 = channelId;
    } else {
      NORMAL = channelId(tmp5[17]).ReactionTypes.NORMAL;
      tmp10 = channelId;
    }
    user = { style: closure_5.listRow, children: null };
    tmp4Result = tmp4(tmp5[26]);
    user = { style: closure_5.avatar, size: tmp10(tmp5[27]).AvatarSizes.SMALL, source: null };
    const avatarSource = user.getAvatarSource(guildId);
    let guildMemberAvatarSource = avatarSource;
    if (null != guildId) {
      let avatar;
      if (member != null) {
        avatar = member.avatar;
      }
      guildMemberAvatarSource = avatarSource;
      if (null != avatar) {
        guildMemberAvatarSource = tmp4(tmp5[28]).getGuildMemberAvatarSource(member, user);
        const tmp4Result1 = tmp4(tmp5[28]);
      }
    }
    const obj1 = { leading: closure_1_17(tmp10(dependencyMap[27]).Avatar, user), label: closure_1_17(messageId(dependencyMap[29]), { user, nick: nickname }), trailing: null, onPress: null, onLongPress: null };
    user.source = guildMemberAvatarSource;
    let tmp14Result = null;
    if (closure_4) {
      tmp14Result = null;
      if (tmp10Result.isAndroid()) {
        obj2 = {
          onPress() {
                let options = ReactionActionCreators;
                options = { channelId, messageId, emoji: dependencyMap.emoji, location: ReactionActionCreators.ReactionLocations.MESSAGE, userId: options.id, options: null };
                options = { burst: NORMAL === MessageReactionsTypes.ReactionTypes.BURST };
                options.options = options;
                return options.removeReaction(options);
              },
          children: tmp14(tmp10(tmp5[31]).XSmallIcon, {})
        };
        tmp14Result = tmp14(closure_1_7, obj2);
      }
      tmp10Result = tmp10(tmp5[30]);
    }
    function openProfile() {
      localUser = { userId: id, channelId, messageId, localUser, sourceAnalyticsLocations };
      showUserProfileActionSheetDefault(localUser, "stack");
    }
    obj1.trailing = tmp14Result;
    let tmp21;
    if (closure_7) {
      tmp21 = openProfile;
    }
    obj1.onPress = tmp21;
    obj1.onLongPress = openProfile;
    const items = [closure_1_17(tmp4Result, obj1), ];
    tmp14Result = null;
    if (arg1 !== diff) {
      tmp14Result = tmp14(tmp4(tmp5[32]), {});
    }
    items[1] = tmp14Result;
    user.children = items;
    return closure_1_18(closure_1_9, user);
  }, items5);
  closure_133_0 = channelId;
  closure_133_1 = messageId;
  closure_133_2 = tmp5;
  closure_133_3 = reactors;
  const tmpResult1 = closure_20();
  closure_133_4 = tmpResult1;
  const items6 = [reactors, channelId, messageId, reactions[bound], tmpResult1];
  obj.renderQuickActions = obj.useCallback((arg0, arg1) => {
    const id = burst_count[arg1];
    if (channelId.burst_count > 0) {
      let NORMAL = channelId(dependencyMap[17]).ReactionTypes.BURST;
    } else {
      NORMAL = channelId(dependencyMap[17]).ReactionTypes.NORMAL;
    }
    let obj = { style: buttonRow.buttonRow, children: null };
    obj = { title: null, IconComponent: null, color: null, onPress: null, height: 48 };
    const intl = channelId(dependencyMap[34]).intl;
    obj.title = intl.string(channelId(dependencyMap[34]).t.N86XcP);
    obj.IconComponent = channelId(dependencyMap[31]).XSmallIcon;
    obj.color = messageId(dependencyMap[13]).unsafe_rawColors.RED_400;
    obj.onPress = function onPress() {
      let obj = { channelId, messageId, emoji: channelId.emoji, location: ReactionActionCreators.ReactionLocations.MESSAGE, userId: id.id, options: null };
      obj = { burst: NORMAL === MessageReactionsTypes.ReactionTypes.BURST };
      obj.options = obj;
      return obj.removeReaction(obj);
    };
    obj.children = closure_1_17(messageId(dependencyMap[33]), obj);
    return closure_1_17(closure_1_9, obj);
  }, items6);
  const items7 = [reactors.length];
  obj.sections = items7;
  obj.style = tmp2.container;
  const callback = obj.useCallback(() => {
    c30 = true;
    const Storage = channelId(dependencyMap[55]).Storage;
    const result = Storage.set(MessageReactionsContent_SwipableBounced, true);
  }, []);
  const tmp8Result = tmp8(504);
  const tmp10Result1 = tmp10(1115);
  obj = { scrollable: true, backdropOpacity: tmp10(7784).BACKDROP_OPACITY, backdropChildren: null, header: null, children: null };
  let tmp27Result = null;
  if (NORMAL === tmp10(7763).ReactionTypes.BURST) {
    let obj1 = { style: closure_8.absoluteFill, pointerEvents: "none", children: null };
    let obj2 = { emoji: tmp5.emoji, reactionType: NORMAL, messageId, channelId };
    obj1.children = tmp27(tmp19(7825), obj2);
    tmp27Result = tmp27(closure_9, obj1);
  }
  obj.backdropChildren = tmp27Result;
  tmp27Result = null;
  if (true !== flag) {
    const obj3 = { reactions, reactionSelectedIndex: bound, setReactionSelectedIndex: tmp3[1], messageId, channelId };
    tmp27Result = tmp27(ReactionTabs, obj3);
  }
  obj.header = tmp27Result;
  if (tmp26) {
    const obj4 = { inActionSheet: true, bounceFirstRowOnMount: !c30, onBounceSwipable: callback };
    tmp19Result = tmp19(11263);
    const merged = Object.assign(obj);
    let tmp27Result1 = tmp27(tmp19Result, obj4, name);
  } else {
    const obj5 = { inActionSheet: true };
    const merged1 = Object.assign(obj);
    tmp27Result1 = tmp27(tmp19(7072), obj5, name);
    const tmp19Result1 = tmp19(7072);
  }
  obj.children = tmp27Result1;
  return closure_17(tmp10(7150).BottomSheet, obj);
};