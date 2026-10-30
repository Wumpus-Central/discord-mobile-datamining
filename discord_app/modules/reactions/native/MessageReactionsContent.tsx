// === Module 10074: MessageReactionsContent ===

// Module 10074 (MessageReactionsContent)
import _modDef12 from "module_12" /* 12 */;
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1114 */;
import native from "native" /* 1188 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1410 */;
import useWindowDimensions from "useWindowDimensions" /* 1492 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1626 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1995 */;
import UserSettings from "UserSettings" /* 4834 */;
import ColorUtils from "ColorUtils" /* 5006 */;
import timing from "timing" /* 5249 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import HapticUtils from "HapticUtils" /* 5255 */;
import haptics_HapticFeedbackTypesDefault from "haptics/HapticFeedbackTypes" /* 5256 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 5267 */;
import BottomSheetModal from "BottomSheetModal" /* 5270 */;
import BurstReactionAnimationPreviewDefault from "BurstReactionAnimationPreview" /* 5609 */;
import MessageReactionsTypes from "MessageReactionsTypes" /* 5610 */;
import Text_Text from "Text/Text" /* 5619 */;
import FastListDefault from "FastList" /* 7234 */;
import EmojiDefault from "Emoji" /* 7294 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7320 */;
import ReactionActionCreators from "ReactionActionCreators" /* 8397 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8742 */;
import generated_NoResults from "generated/NoResults" /* 8797 */;
import useEmojiColorPalette from "useEmojiColorPalette" /* 10076 */;
import SwipeableFastListDefault from "SwipeableFastList" /* 10080 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5010 */;
import ChannelStore from "ChannelStore" /* 4858 */;
import GuildMemberStore from "GuildMemberStore" /* 4921 */;
import MessageReactionsStore from "MessageReactionsStore" /* 8396 */;
import PermissionStore from "PermissionStore" /* 4941 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5090 */;

const ReactionActionCreatorsAll = ReactionActionCreators;

require = fn;
function useReactors(channelId) {
  channelId = channelId.channelId;
  const messageId = channelId.messageId;
  const reaction = channelId.reaction;
  const reactionType = channelId.reactionType;
  let items = [MessageReactionsStore];
  const items1 = [channelId, messageId, reaction.emoji, reactionType];
  const stateFromStores = channelId(reactionType[15]).useStateFromStores(items, () => {
    const reactions = MessageReactionsStore.getReactions(channelId, messageId, reaction.emoji, limit, reactionType);
    let items;
    if (reactions != null) {
      items = reactions.values();
    }
    if (items == null) {
      items = [];
    }
    return Array.from(items);
  }, items1, messageId(reactionType[17]));
  const obj2 = { reactors: stateFromStores, reactorsHasMore: null };
  if (reactionType === channelId(reactionType[18]).ReactionTypes.VOTE) {
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
    tmp3 = reactionType === channelId(reactionType[18]).ReactionTypes.BURST ? reaction.burst_count : reaction.count;
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
  closure_9 = messageId(reactorsHasMore[20])(() => _modDef12.debounce((AUTO_DISMISS, current) => ref.current(AUTO_DISMISS, current), 16));
  return messageId(reactorsHasMore[20])(() => (nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    return closure_1_9(nativeEvent.contentOffset.y, nativeEvent.contentSize.height);
  });
}
function ReactionTab(arg0) {
  ({ reaction, selected } = arg0);
  const tmp = closure_21();
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
  return closure_1_19(React7, obj5, name);
}
function RemoveAllButton(channelId) {
  ({ reactions: require, reactionSelectedIndex } = channelId);
  channelId = channelId.channelId;
  const messageId = channelId.messageId;
  noop = undefined;
  c6 = undefined;
  let sharedValue1;
  let callback;
  const tmp = closure_21();
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
  const tmp = closure_21();
  const items = [ChannelStore];
  const items1 = [channelId];
  const stateFromStores = channelId(504).useStateFromStores(items, () => ChannelStore.getChannel(channelId), items1);
  const tmp3 = messageId(10077)(stateFromStores);
  dependencyMap = tmp3;
  const reaction = tmp4;
  const items2 = [channelId, messageId, reactions[reactionSelectedIndex], tmp3, flag];
  const obj2 = {
    onPress: noop.useCallback(() => {
      ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(10078, dependencyMap.paths), "ReactionEmojiOptionsActionSheet", { channelId, messageId, reaction, canRemoveReactions, isEmojiPack: flag }, "replaceTopSheet");
    }, items2),
    style: tmp.emojiOptionsButton,
    children: null
  };
  const obj3 = { variant: "text-xs/semibold", color: "text-subtle", children: null };
  const intl = channelId(1114).intl;
  obj3.children = intl.string(channelId(1114).t.pCaYID);
  const items3 = [closure_18(channelId(5619).Text, obj3), ];
  const obj = channelId(504);
  items3[1] = closure_18(channelId(7372).ChevronSmallRightIcon, { color: messageId(575).colors.ICON_SUBTLE, size: "xs" });
  obj2.children = items3;
  return closure_19(closure_7, obj2);
}
function EmojiPackReactionTabActions(arg0) {
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
}
function ReactionTabs(setReactionSelectedIndex) {
  const tmp = closure_21();
  ({ reactions, reactionSelectedIndex } = setReactionSelectedIndex);
  setReactionSelectedIndex = setReactionSelectedIndex.setReactionSelectedIndex;
  const emoji = reactions[reactionSelectedIndex].emoji;
  const obj2 = { style: tmp.reactionTab, children: null };
  const obj4 = { tabs: null, tabStyle: null, tabStyleActive: null, tabStyleSelected: null, tabIndexSelected: null, onSelect: null };
  const obj = setReactionSelectedIndex(7351);
  obj4.tabs = reactions.map((reaction, index) => {
    let str = "normal-";
    if (reaction.burst_count > 0) {
      str = "burst-";
    }
    let str2 = reaction.emoji.id;
    if (str2 == null) {
      str2 = "";
    }
    return collapsedCategories(ReactionTab, { reaction, selected: index === reactionSelectedIndex }, "" + str + str2 + ":" + reaction.emoji.name);
  });
  ({ tab: obj3.tabStyle, tabActive: obj3.tabStyleActive, tabSelected: obj3.tabStyleSelected } = tmp);
  obj4.tabIndexSelected = reactionSelectedIndex;
  obj4.onSelect = function onSelect(arg0) {
    const result = HapticUtils.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
    setReactionSelectedIndex(arg0);
  };
  const items = [closure_18(setReactionSelectedIndex(10079), obj4), closure_18(setReactionSelectedIndex(8175), { outer: true }), ];
  const obj5 = { style: tmp.removeButtonContainer, children: null };
  const obj7 = { style: tmp.emojiTextIdentifier, variant: "eyebrow", color: "text-default", children: null };
  const tmp5 = setReactionSelectedIndex(10079);
  obj7.children = reactionSelectedIndex(4953).getReactionEmojiName(reactions[reactionSelectedIndex].emoji);
  const items1 = [closure_18(reactionSelectedIndex(5619).Text, obj7), ];
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
    tmp4Result = closure_18(EmojiPackReactionTabActions, obj14, name);
  }
  items1[1] = tmp4Result;
  obj5.children = items1;
  items[2] = closure_19(closure_9, obj5);
  obj2.children = items;
  return closure_19(closure_9, obj2);
}
get_ActivityIndicator = fn(17);
({ ActivityIndicator: metroRequire, Platform, Pressable: closure_7, StyleSheet: closure_8, View: closure_9 } = get_ActivityIndicator);
const EmojiSourceDataTypes = fn(6952).EmojiSourceDataTypes;
const Constants = fn(1072);
({ DEFAULT_NUM_REACTION_USERS: closure_16, Permissions: closure_17 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_18, jsxs: closure_19 } = jsxProd);
let closure_20 = ReanimatedRexport.createAnimatedComponent(fn(5619).Text);
const createStyles = fn(5009);
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
let closure_21 = createStyles.createStyles(obj);
const __initData = { code: "function MessageReactionsContentTsx1(){const{useReducedMotion,buttonWidth,withTiming}=this.__closure;return{maxWidth:useReducedMotion?buttonWidth.get():withTiming(buttonWidth.get(),{duration:200})};}" };
const __initData2 = { code: "function MessageReactionsContentTsx2(){const{useReducedMotion,textOpacity,withTiming}=this.__closure;return{opacity:useReducedMotion?textOpacity.get():withTiming(textOpacity.get(),{duration:125}),color:'white',fontSize:14,marginLeft:8,textAlignVertical:'center'};}" };
const MessageReactionsContent_SwipableBounced = "MessageReactionsContent_SwipableBounced";
let Storage = fn(510).Storage;
let closure_32 = Storage.get("MessageReactionsContent_SwipableBounced", false);
const size = fn(2);
let result = size.fileFinishedImporting("modules/reactions/native/MessageReactionsContent.tsx");

export { useReactors };
export { useReactorsOnScrollNative };
export function MessageReactionsEmpty() {
  const tmp = closure_21();
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
}
export function MessageReactionsContent(channelId) {
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
        const emojiEqualsResult = channelId(dependencyMap[16]).emojiEquals(emoji.emoji, messageId);
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
    let NORMAL = channelId(5610).ReactionTypes.VOTE;
    let tmp8 = channelId;
    let tmp10 = channelId;
  } else if (tmp5.burst_count > 0) {
    NORMAL = channelId(5610).ReactionTypes.BURST;
    tmp8 = channelId;
    tmp10 = channelId;
  } else {
    NORMAL = channelId(5610).ReactionTypes.NORMAL;
    tmp8 = channelId;
    tmp10 = channelId;
  }
  let tmp2 = closure_21();
  ({ reactors, reactorsHasMore } = useReactors({ channelId, messageId, reaction: reactions[bound], reactionType: NORMAL }));
  const tmp16 = useReactors({ channelId, messageId, reaction: reactions[bound], reactionType: NORMAL });
  let items = [ChannelStore];
  const items1 = [channelId];
  const stateFromStores = tmp10(504).useStateFromStores(items, () => ChannelStore.getChannel(channelId), items1);
  let tmp10Result = tmp10(504);
  const isActiveChannelOrUnarchivableThread = tmp10(7437).useIsActiveChannelOrUnarchivableThread(stateFromStores);
  closure_130_0 = channelId;
  const tmp10Result3 = tmp10(7437);
  const tmp20 = useSafeAreaInsetsDefault();
  const items2 = [PermissionStore];
  const items3 = [channelId];
  const tmp21 = tmp8(504).useStateFromStores(items2, () => PermissionStore.canWithPartialContext(constants.MANAGE_MESSAGES, { channelId }), items3) && !disableManage && isActiveChannelOrUnarchivableThread;
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
  const tmpResult = closure_21();
  closure_131_2 = tmpResult;
  const items4 = [reactors, reactorsHasMore, tmpResult];
  obj2.renderFooter = noop.useCallback(() => {
    if (messageId) {
      const obj = { style: channelId.loadingSpinner, size: "large" };
      let tmp2 = collapsedCategories(timestampProducer, obj);
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
  const tmpResult3 = closure_21();
  closure_132_5 = tmpResult3;
  const analyticsLocations = useAnalyticsLocationsDefault().analyticsLocations;
  closure_132_6 = analyticsLocations;
  const items5 = [reactors, channelId, tmp21, messageId, reactions[bound], tmpResult3, analyticsLocations];
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
      NORMAL = channelId(dependencyMap[18]).ReactionTypes.BURST;
      let tmp10 = channelId;
    } else {
      NORMAL = channelId(dependencyMap[18]).ReactionTypes.NORMAL;
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
    const obj5 = { leading: closure_1_18(tmp10(dependencyMap[27]).Avatar, obj4), label: closure_1_18(messageId(dependencyMap[29]), { user, nick: nickname }), trailing: null, onPress: null, onLongPress: null };
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
          children: closure_1_18(tmp10(dependencyMap[31]).XSmallIcon, {})
        };
        tmp14Result = closure_1_18(closure_1_7, obj6);
      }
      tmp10Result = tmp10(dependencyMap[30]);
    }
    function openProfile() {
      localUser = { userId: id, channelId, messageId, localUser, sourceAnalyticsLocations };
      showUserProfileActionSheetDefault(localUser, "stack");
    }
    obj5.trailing = tmp14Result;
    obj5.onPress = openProfile;
    obj5.onLongPress = openProfile;
    const items = [closure_1_18(messageId(dependencyMap[26]), obj5), ];
    let tmp14Result2 = null;
    if (arg1 !== diff) {
      tmp14Result2 = closure_1_18(messageId(dependencyMap[32]), {});
    }
    items[1] = tmp14Result2;
    obj2.children = items;
    return closure_1_19(closure_1_9, obj2);
  }, items5);
  closure_133_0 = channelId;
  closure_133_1 = messageId;
  closure_133_2 = tmp5;
  closure_133_3 = reactors;
  const tmpResult4 = closure_21();
  closure_133_4 = tmpResult4;
  const items6 = [reactors, channelId, messageId, reactions[bound], tmpResult4];
  obj2.renderQuickActions = noop.useCallback((arg0, arg1) => {
    const id = burst_count[arg1];
    if (channelId.burst_count > 0) {
      let NORMAL = channelId(dependencyMap[18]).ReactionTypes.BURST;
    } else {
      NORMAL = channelId(dependencyMap[18]).ReactionTypes.NORMAL;
    }
    let obj = { style: buttonRow.buttonRow, children: null };
    let obj2 = { title: null, IconComponent: null, color: null, onPress: null, height: 48 };
    const intl = channelId(dependencyMap[34]).intl;
    obj2.title = intl.string(channelId(dependencyMap[34]).t.N86XcP);
    obj2.IconComponent = channelId(dependencyMap[31]).XSmallIcon;
    obj2.color = messageId(dependencyMap[14]).unsafe_rawColors.RED_400;
    obj2.onPress = function onPress() {
      const obj2 = { channelId, messageId, emoji: channelId.emoji, location: ReactionActionCreators.ReactionLocations.MESSAGE, userId: id.id, options: null };
      const obj = ReactionActionCreators;
      obj2.options = { burst: NORMAL === MessageReactionsTypes.ReactionTypes.BURST };
      return obj.removeReaction(obj2);
    };
    obj.children = closure_1_18(messageId(dependencyMap[33]), obj2);
    return closure_1_18(closure_1_9, obj);
  }, items6);
  const items7 = [reactors.length];
  obj2.sections = items7;
  obj2.style = tmp2.container;
  const callback = noop.useCallback(() => {
    c32 = true;
    const Storage = channelId(dependencyMap[56]).Storage;
    const result = Storage.set(MessageReactionsContent_SwipableBounced, true);
  }, []);
  const tmp8Result = tmp8(504);
  const tmp10Result4 = tmp10(1376);
  let obj3 = { scrollable: true, backdropOpacity: tmp10(4967).BACKDROP_OPACITY, backdropChildren: null, header: null, children: null };
  let tmp27Result = null;
  if (NORMAL === tmp8(5610).ReactionTypes.BURST) {
    let obj4 = { style: closure_8.absoluteFill, pointerEvents: "none", children: null };
    let obj5 = { emoji: tmp5.emoji, reactionType: NORMAL, messageId, channelId };
    obj4.children = closure_18(BurstReactionAnimationPreviewDefault, obj5);
    tmp27Result = closure_18(closure_9, obj4);
  }
  obj3.backdropChildren = tmp27Result;
  let tmp27Result3 = null;
  if (true !== flag) {
    let obj6 = { reactions, reactionSelectedIndex: bound, setReactionSelectedIndex: tmp3[1], messageId, channelId };
    tmp27Result3 = closure_18(ReactionTabs, obj6);
  }
  obj3.header = tmp27Result3;
  if (tmp26) {
    const obj7 = { inActionSheet: true, bounceFirstRowOnMount: !c32, onBounceSwipable: callback };
    const merged = Object.assign(obj2);
    let tmp27Result4 = closure_18(SwipeableFastListDefault, obj7, name);
    const tmp19Result = SwipeableFastListDefault;
  } else {
    const obj8 = { inActionSheet: true };
    const merged1 = Object.assign(obj2);
    tmp27Result4 = closure_18(FastListDefault, obj8, name);
    const tmp19Result2 = FastListDefault;
  }
  obj3.children = tmp27Result4;
  return closure_18(tmp10(5267).BottomSheet, obj3);
}