// === Module 11390: MessageReactionsContent ===

// Module 11390 (MessageReactionsContent)
import _modDef12 from "module_12" /* 12 */;
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import native from "native" /* 1176 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1396 */;
import useWindowDimensions from "useWindowDimensions" /* 1477 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1611 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import UserSettings from "UserSettings" /* 1935 */;
import ColorUtils from "ColorUtils" /* 4486 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4603 */;
import HapticUtils from "HapticUtils" /* 4604 */;
import haptics_HapticFeedbackTypesDefault from "haptics/HapticFeedbackTypes" /* 4605 */;
import Text_Text from "Text/Text" /* 4632 */;
import timing from "timing" /* 4637 */;
import BottomSheetModal from "BottomSheetModal" /* 6728 */;
import FastListDefault from "FastList" /* 7175 */;
import EmojiDefault from "Emoji" /* 7233 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 7253 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7265 */;
import MessageReactionsTypes from "MessageReactionsTypes" /* 7865 */;
import ReactionActionCreators from "ReactionActionCreators" /* 7866 */;
import BurstReactionAnimationPreviewDefault from "BurstReactionAnimationPreview" /* 7927 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8296 */;
import generated_NoResults from "generated/NoResults" /* 8348 */;
import ReactionToProfileExperimentDefault from "ReactionToProfileExperiment" /* 11391 */;
import useEmojiColorPalette from "useEmojiColorPalette" /* 11393 */;
import SwipeableFastListDefault from "SwipeableFastList" /* 11397 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4628 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import GuildMemberStore from "GuildMemberStore" /* 2021 */;
import MessageReactionsStore from "MessageReactionsStore" /* 7864 */;
import PermissionStore from "PermissionStore" /* 4275 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4373 */;

const ReactionActionCreatorsAll = ReactionActionCreators;

require = fn;
function useReactors(channelId) {
  channelId = channelId.channelId;
  const messageId = channelId.messageId;
  const reaction = channelId.reaction;
  const reactionType = channelId.reactionType;
  let items = [MessageReactionsStore];
  const items1 = [channelId, messageId, reaction.emoji, reactionType];
  const stateFromStores = channelId(reactionType[14]).useStateFromStores(items, () => {
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
  const obj2 = { reactors: stateFromStores, reactorsHasMore: null };
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
  obj2.reactorsHasMore = tmp3 > stateFromStores.length;
  return obj2;
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
  closure_9 = messageId(reactorsHasMore[19])(() => _modDef12.debounce((AUTO_DISMISS, current) => ref.current(AUTO_DISMISS, current), 16));
  return messageId(reactorsHasMore[19])(() => (nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    return closure_1_9(nativeEvent.contentOffset.y, nativeEvent.contentSize.height);
  });
}
function ReactionTab(arg0) {
  ({ reaction, selected } = arg0);
  const tmp = closure_20();
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
  const items4 = [closure_1_17(EmojiDefault, obj8), ];
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
  obj5.children = items4;
  let name = emoji.id;
  if (name == null) {
    name = emoji.name;
  }
  return collapsedCategories(React7, obj5, name);
}
function RemoveAllButton(channelId) {
  ({ reactions: require, reactionSelectedIndex } = channelId);
  channelId = channelId.channelId;
  const messageId = channelId.messageId;
  noop = undefined;
  c6 = undefined;
  let sharedValue1;
  let callback;
  const tmp = closure_20();
  const items = [ChannelStore];
  const items1 = [channelId];
  const stateFromStores = require("initialize").useStateFromStores(items, () => ChannelStore.getChannel(channelId), items1);
  const useReducedMotion = AccessibilityStore.useReducedMotion;
  let obj = require("initialize");
  const tmp6 = reactionSelectedIndex(messageId[39])(stateFromStores);
  [c5, c6] = useReducedMotion(noop.useState(true), 2);
  const tmp7 = useReducedMotion(noop.useState(true), 2);
  const sharedValue = require("ReanimatedRexport").useSharedValue(64);
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
  const obj3 = require("ReanimatedRexport");
  S.__closure = { useReducedMotion, buttonWidth: sharedValue, withTiming: require("timing").withTiming };
  S.__workletHash = 16499689496895;
  S.__initData = __initData;
  const animatedStyle = obj3.useAnimatedStyle(S);
  const obj4 = { useReducedMotion, buttonWidth: sharedValue, withTiming: require("timing").withTiming };
  sharedValue1 = require("ReanimatedRexport").useSharedValue(0);
  const obj5 = require("ReanimatedRexport");
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
  const obj6 = require("ReanimatedRexport");
  T.__closure = { useReducedMotion, textOpacity: sharedValue1, withTiming: require("timing").withTiming };
  T.__workletHash = 8698187840986;
  T.__initData = __initData2;
  const items2 = [sharedValue, sharedValue1];
  const animatedStyle1 = obj6.useAnimatedStyle(T);
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
    const obj10 = { color: reactionSelectedIndex(tmp3[13]).unsafe_rawColors.WHITE, size: "sm" };
    const items5 = [closure_17(require("TrashIcon").TrashIcon, obj10), ];
    const obj11 = { style: animatedStyle1, variant: "text-sm/semibold", color: "text-overlay-light", children: null };
    const intl = require("util").intl;
    obj11.children = intl.string(require("util").t["zx/e4P"]);
    items5[1] = closure_17(closure_19, obj11);
    obj9.children = items5;
    obj8.children = closure_18(reactionSelectedIndex(tmp3[10]).View, obj9);
    tmp14 = closure_17(sharedValue, obj8);
  }
  return tmp14;
}
function EmojiOptionsButton(channelId) {
  channelId = channelId.channelId;
  const messageId = channelId.messageId;
  ({ reactions, reactionSelectedIndex } = channelId);
  const tmp = closure_20();
  const items = [ChannelStore];
  const items1 = [channelId];
  const stateFromStores = channelId(504).useStateFromStores(items, () => ChannelStore.getChannel(channelId), items1);
  const tmp3 = messageId(11394)(stateFromStores);
  const canRemoveReactions = tmp3;
  dependencyMap = tmp4;
  const items2 = [channelId, messageId, reactions[reactionSelectedIndex], tmp3];
  const obj2 = {
    onPress: noop.useCallback(() => {
      ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11395, dependencyMap.paths), "ReactionEmojiOptionsActionSheet", { channelId, messageId, reaction, canRemoveReactions }, "replaceTopSheet");
    }, items2),
    style: tmp.emojiOptionsButton,
    children: null
  };
  const obj3 = { variant: "text-xs/semibold", color: "text-subtle", children: null };
  const intl = channelId(1114).intl;
  obj3.children = intl.string(channelId(1114).t.pCaYID);
  const items3 = [closure_17(channelId(4632).Text, obj3), ];
  const obj = channelId(504);
  items3[1] = closure_17(channelId(7312).ChevronSmallRightIcon, { color: messageId(576).colors.ICON_SUBTLE, size: "xs" });
  obj2.children = items3;
  return closure_18(closure_7, obj2);
}
function ReactionTabs(setReactionSelectedIndex) {
  const tmp = closure_20();
  ({ reactions, reactionSelectedIndex } = setReactionSelectedIndex);
  setReactionSelectedIndex = setReactionSelectedIndex.setReactionSelectedIndex;
  const obj2 = { style: tmp.reactionTab, children: null };
  const obj4 = { tabs: null, tabStyle: null, tabStyleActive: null, tabStyleSelected: null, tabIndexSelected: null, onSelect: null, initialNumTabsToRender: null };
  const obj = setReactionSelectedIndex(7291);
  obj4.tabs = reactions.map((reaction, index) => {
    let str = reaction.emoji.id;
    if (str == null) {
      str = "";
    }
    return closure_2_17(ReactionTab, { reaction, selected: index === reactionSelectedIndex }, "" + str + ":" + reaction.emoji.name);
  });
  ({ tab: obj3.tabStyle, tabActive: obj3.tabStyleActive, tabSelected: obj3.tabStyleSelected } = tmp);
  obj4.tabIndexSelected = reactionSelectedIndex;
  obj4.onSelect = function onSelect(arg0) {
    const result = HapticUtils.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
    setReactionSelectedIndex(arg0);
  };
  obj4.initialNumTabsToRender = reactionSelectedIndex(4287).MAX_REACTIONS;
  const items = [closure_17(setReactionSelectedIndex(11396), obj4), closure_17(setReactionSelectedIndex(8722), { outer: true }), ];
  const obj5 = { style: tmp.removeButtonContainer, children: null };
  const obj7 = { style: tmp.emojiTextIdentifier, variant: "eyebrow", color: "text-default", children: null };
  const tmp5 = setReactionSelectedIndex(11396);
  obj7.children = reactionSelectedIndex(4287).getReactionEmojiName(reactions[reactionSelectedIndex].emoji);
  const items1 = [closure_17(reactionSelectedIndex(4632).Text, obj7), ];
  const obj12 = {};
  const obj6 = reactionSelectedIndex(4287);
  const merged = Object.assign(setReactionSelectedIndex);
  items1[1] = closure_17(obj.useExperiment({ location: "ReactionTabs" }, { autoTrackExposure: false }).tidaWebformEnabled ? EmojiOptionsButton : RemoveAllButton, obj12);
  obj5.children = items1;
  items[2] = closure_18(closure_9, obj5);
  obj2.children = items;
  return closure_18(closure_9, obj2);
}
get_ActivityIndicator = fn(17);
({ ActivityIndicator: metroRequire, Platform, Pressable: closure_7, StyleSheet: closure_8, View: closure_9 } = get_ActivityIndicator);
const Constants = fn(1074);
({ DEFAULT_NUM_REACTION_USERS: closure_15, Permissions: closure_16 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_17, jsxs: closure_18 } = jsxProd);
let closure_19 = ReanimatedRexport.createAnimatedComponent(fn(4632).Text);
const createStyles = fn(4636);
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
obj.removeAllButton = { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_CRITICAL, borderRadius: nativeDefault.radii.xxl, height: 32, overflow: "hidden", minWidth: 42, marginRight: 20, display: "flex", flexDirection: "row", alignItems: "center", paddingHorizontal: 12 };
let obj9 = { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_CRITICAL, borderRadius: nativeDefault.radii.xxl, height: 32, overflow: "hidden", minWidth: 42, marginRight: 20, display: "flex", flexDirection: "row", alignItems: "center", paddingHorizontal: 12 };
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
  const obj2 = { scrollable: true, startHeight: 338 + tmp2.bottom, children: null };
  const obj3 = { style: tmp.containerEmpty, children: null };
  const obj4 = { source: generated_NoResults.useNoResultsSource(), title: null, body: null };
  const intl = util.intl;
  obj4.title = intl.string(util.t.HmPOrp);
  const intl2 = util.intl;
  obj4.body = intl2.string(util.t["pTJ5J/"]);
  obj3.children = closure_1_17(native.RefreshEmptyState, obj4);
  obj2.children = closure_1_17(BottomSheetModal.BottomSheetView, obj3);
  return closure_1_17(Sheet_BottomSheet.BottomSheet, obj2);
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
    let NORMAL = channelId(7865).ReactionTypes.VOTE;
    let tmp8 = channelId;
    let tmp10 = channelId;
  } else if (tmp5.burst_count > 0) {
    NORMAL = channelId(7865).ReactionTypes.BURST;
    tmp8 = channelId;
    tmp10 = channelId;
  } else {
    NORMAL = channelId(7865).ReactionTypes.NORMAL;
    tmp8 = channelId;
    tmp10 = channelId;
  }
  let tmp2 = closure_20();
  ({ reactors, reactorsHasMore } = useReactors({ channelId, messageId, reaction: reactions[bound], reactionType: NORMAL }));
  const tmp16 = useReactors({ channelId, messageId, reaction: reactions[bound], reactionType: NORMAL });
  let items = [ChannelStore];
  const items1 = [channelId];
  const stateFromStores = tmp10(504).useStateFromStores(items, () => ChannelStore.getChannel(channelId), items1);
  let tmp10Result = tmp10(504);
  const isActiveChannelOrUnarchivableThread = tmp10(7372).useIsActiveChannelOrUnarchivableThread(stateFromStores);
  closure_130_0 = channelId;
  const tmp10Result3 = tmp10(7372);
  const tmp20 = useSafeAreaInsetsDefault();
  const items2 = [PermissionStore];
  const items3 = [channelId];
  let tmp21 = tmp8(504).useStateFromStores(items2, () => PermissionStore.canWithPartialContext(constants.MANAGE_MESSAGES, { channelId }), items3) && !disableManage && isActiveChannelOrUnarchivableThread;
  let name = tmp5.emoji.id;
  if (name == null) {
    name = tmp5.emoji.name;
  }
  let obj2 = { accessibilityLabel: null, footerSize: 48, insetBottom: null, onScroll: null, renderFooter: null, renderItem: null, renderQuickActions: null, itemSize: 48, sections: null, style: null };
  let intl = tmp10(1114).intl;
  obj2.accessibilityLabel = intl.string(tmp10(1114).t.gHp0C4);
  obj2.insetBottom = tmp20.bottom;
  obj2.onScroll = useReactorsOnScrollNative({ channelId, messageId, reactionSelected: reactions[bound], reactors, reactorsHasMore, reactionType: NORMAL });
  closure_131_0 = reactors;
  closure_131_1 = reactorsHasMore;
  const tmpResult = closure_20();
  closure_131_2 = tmpResult;
  const items4 = [reactors, reactorsHasMore, tmpResult];
  obj2.renderFooter = noop.useCallback(() => {
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
  const tmpResult3 = closure_20();
  closure_132_5 = tmpResult3;
  const analyticsLocations = useAnalyticsLocationsDefault().analyticsLocations;
  closure_132_6 = analyticsLocations;
  const tmp8Result = tmp8(504);
  const reactionToProfileEnabled = ReactionToProfileExperimentDefault.useConfig({ location: "MessageReactionsContent" }).reactionToProfileEnabled;
  closure_132_7 = reactionToProfileEnabled;
  const items5 = [reactors, channelId, tmp21, messageId, reactions[bound], tmpResult3, analyticsLocations, reactionToProfileEnabled];
  obj2.renderItem = noop.useCallback((arg0, arg1) => {
    user = user[arg1];
    const id = user.id;
    const diff = user.length - 1;
    channel = channel.getChannel(NORMAL);
    let guildId = null;
    if (null != channel) {
      guildId = channel.getGuildId();
    }
    let nickname = messageId(dependencyMap[23]).getNickname(guildId, NORMAL, user);
    if (nickname == null) {
      nickname = messageId(dependencyMap[24]).getGlobalName(user);
      const tmp4Result = messageId(dependencyMap[24]);
    }
    member = null;
    if (null != guildId) {
      member = member.getMember(guildId, id);
    }
    if (burst_count.burst_count > 0) {
      NORMAL = channelId(dependencyMap[17]).ReactionTypes.BURST;
      let tmp10 = channelId;
    } else {
      NORMAL = channelId(dependencyMap[17]).ReactionTypes.NORMAL;
      tmp10 = channelId;
    }
    let obj2 = { style: closure_5.listRow, children: null };
    const obj3 = messageId(dependencyMap[23]);
    const obj4 = { style: closure_5.avatar, size: tmp10(dependencyMap[27]).AvatarSizes.SMALL, source: null };
    const avatarSource = user.getAvatarSource(guildId);
    let guildMemberAvatarSource = avatarSource;
    if (null != guildId) {
      let avatar;
      if (member != null) {
        avatar = member.avatar;
      }
      guildMemberAvatarSource = avatarSource;
      if (null != avatar) {
        guildMemberAvatarSource = messageId(dependencyMap[28]).getGuildMemberAvatarSource(member, user);
        const tmp4Result4 = messageId(dependencyMap[28]);
      }
    }
    const obj5 = { leading: closure_1_17(tmp10(dependencyMap[27]).Avatar, obj4), label: closure_1_17(messageId(dependencyMap[29]), { user, nick: nickname }), trailing: null, onPress: null, onLongPress: null };
    obj4.source = guildMemberAvatarSource;
    let tmp14Result = null;
    if (closure_4) {
      tmp14Result = null;
      if (tmp10Result.isAndroid()) {
        const obj6 = {
          onPress() {
                obj = ReactionActionCreators;
                const obj2 = { channelId, messageId, emoji: dependencyMap.emoji, location: ReactionActionCreators.ReactionLocations.MESSAGE, userId: obj.id, options: { burst: NORMAL === MessageReactionsTypes.ReactionTypes.BURST } };
                return obj.removeReaction(obj2);
              },
          children: closure_1_17(tmp10(dependencyMap[31]).XSmallIcon, {})
        };
        tmp14Result = closure_1_17(closure_1_7, obj6);
      }
      tmp10Result = tmp10(dependencyMap[30]);
    }
    function openProfile() {
      localUser = { userId: id, channelId, messageId, localUser, sourceAnalyticsLocations };
      showUserProfileActionSheetDefault(localUser, "stack");
    }
    obj5.trailing = tmp14Result;
    let tmp21;
    if (closure_7) {
      tmp21 = openProfile;
    }
    obj5.onPress = tmp21;
    obj5.onLongPress = openProfile;
    const items = [closure_1_17(messageId(dependencyMap[26]), obj5), ];
    let tmp14Result2 = null;
    if (arg1 !== diff) {
      tmp14Result2 = closure_1_17(messageId(dependencyMap[32]), {});
    }
    items[1] = tmp14Result2;
    obj2.children = items;
    return closure_1_18(closure_1_9, obj2);
  }, items5);
  closure_133_0 = channelId;
  closure_133_1 = messageId;
  closure_133_2 = tmp5;
  closure_133_3 = reactors;
  const tmpResult4 = closure_20();
  closure_133_4 = tmpResult4;
  const items6 = [reactors, channelId, messageId, reactions[bound], tmpResult4];
  obj2.renderQuickActions = noop.useCallback((arg0, arg1) => {
    const id = burst_count[arg1];
    if (channelId.burst_count > 0) {
      let NORMAL = channelId(dependencyMap[17]).ReactionTypes.BURST;
    } else {
      NORMAL = channelId(dependencyMap[17]).ReactionTypes.NORMAL;
    }
    let obj = { style: buttonRow.buttonRow, children: null };
    let obj2 = { title: null, IconComponent: null, color: null, onPress: null, height: 48 };
    const intl = channelId(dependencyMap[34]).intl;
    obj2.title = intl.string(channelId(dependencyMap[34]).t.N86XcP);
    obj2.IconComponent = channelId(dependencyMap[31]).XSmallIcon;
    obj2.color = messageId(dependencyMap[13]).unsafe_rawColors.RED_400;
    obj2.onPress = function onPress() {
      const obj2 = { channelId, messageId, emoji: channelId.emoji, location: ReactionActionCreators.ReactionLocations.MESSAGE, userId: id.id, options: null };
      const obj = ReactionActionCreators;
      obj2.options = { burst: NORMAL === MessageReactionsTypes.ReactionTypes.BURST };
      return obj.removeReaction(obj2);
    };
    obj.children = closure_1_17(messageId(dependencyMap[33]), obj2);
    return closure_1_17(closure_1_9, obj);
  }, items6);
  const items7 = [reactors.length];
  obj2.sections = items7;
  obj2.style = tmp2.container;
  const callback = noop.useCallback(() => {
    c30 = true;
    const Storage = channelId(dependencyMap[55]).Storage;
    const result = Storage.set(MessageReactionsContent_SwipableBounced, true);
  }, []);
  const tmp19Result = ReactionToProfileExperimentDefault;
  const tmp10Result4 = tmp10(1363);
  let obj3 = { scrollable: true, backdropOpacity: tmp10(7886).BACKDROP_OPACITY, backdropChildren: null, header: null, children: null };
  let tmp27Result = null;
  if (NORMAL === tmp10(7865).ReactionTypes.BURST) {
    let obj4 = { style: closure_8.absoluteFill, pointerEvents: "none", children: null };
    let obj5 = { emoji: tmp5.emoji, reactionType: NORMAL, messageId, channelId };
    obj4.children = closure_17(BurstReactionAnimationPreviewDefault, obj5);
    tmp27Result = closure_17(closure_9, obj4);
  }
  obj3.backdropChildren = tmp27Result;
  let tmp27Result3 = null;
  if (true !== flag) {
    let obj6 = { reactions, reactionSelectedIndex: bound, setReactionSelectedIndex: tmp3[1], messageId, channelId };
    tmp27Result3 = closure_17(ReactionTabs, obj6);
  }
  obj3.header = tmp27Result3;
  if (tmp26) {
    const obj7 = { inActionSheet: true, bounceFirstRowOnMount: !c30, onBounceSwipable: callback };
    const merged = Object.assign(obj2);
    let tmp27Result4 = closure_17(SwipeableFastListDefault, obj7, name);
    const tmp19Result3 = SwipeableFastListDefault;
  } else {
    const obj8 = { inActionSheet: true };
    const merged1 = Object.assign(obj2);
    tmp27Result4 = closure_17(FastListDefault, obj8, name);
    const tmp19Result4 = FastListDefault;
  }
  obj3.children = tmp27Result4;
  return closure_17(tmp10(7253).BottomSheet, obj3);
};