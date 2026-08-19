// discord_app/modules/reactions/native/MessageReactionsContent.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../intl/index.native.tsx";
import Button from "../../../design/void/native.tsx";
import getAvatarURLDefault from "../../../utils/AvatarUtils.tsx";
import useSafeAreaInsetsDefault from "../../safe_area/useSafeAreaInsets.native.tsx";
import explicitContentFromProto from "../../user_settings/UserSettings.tsx";
import hexToRgba from "../../../utils/ColorUtils.tsx";
import Text from "../../../design/components/Text/native/Text.tsx";
import EmojiDefault from "../../emojis/native/Emoji.tsx";
import Background from "../../../design/components/Sheet/native/BottomSheet.native.tsx";
import BottomSheetModal from "../../../../_runtime/06952_BottomSheetModal.js";
import getNoResultsSource from "../../../design/components/Illustration/native/redesign/generated/NoResults.tsx";
import useEmojiColorPalette from "../../emojis/hooks/useEmojiColorPalette.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import noop from "../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import maybeApplyNoTextColorForLightCustomTheme from "../../a11y/AccessibilityStore.tsx";
import ensureGuildLoaded from "../../../stores/ChannelStore.tsx";
import trackCommunicationDisabled from "../../../stores/GuildMemberStore.tsx";
import reactionKey from "../../../stores/MessageReactionsStore.tsx";
import getUncachedChannelPermissions from "../../../stores/PermissionStore.tsx";
import ME from "../../../Constants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";
import importDefaultResult from "../../reanimated/ReanimatedRexport.tsx";
import { Storage } from "../../../../discord_common/js/packages/storage/Storage.tsx";

require = fn;
function useReactors(channelId) {
  channelId = channelId.channelId;
  const messageId = channelId.messageId;
  const reaction = channelId.reaction;
  const reactionType = channelId.reactionType;
  let obj = channelId(reactionType[14]);
  let items = [closure_13];
  const items1 = [channelId, messageId, reaction.emoji, reactionType];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const reactions = closure_1_13.getReactions(channelId, messageId, reaction.emoji, closure_1_15, reactionType);
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
  obj[1] = tmp3 > stateFromStores.length;
  return obj;
}
function useReactorsOnScrollNative(channelId) {
  channelId = channelId.channelId;
  const messageId = channelId.messageId;
  const reactionSelected = channelId.reactionSelected;
  ({ reactors, reactorsHasMore } = channelId);
  const reactionType = channelId.reactionType;
  let React;
  let callback;
  closure_8 = undefined;
  closure_9 = undefined;
  React = React.useRef(false);
  let id = null;
  if (reactors.length > 0) {
    id = reactors[reactors.length - 1].id;
  }
  const items = [channelId, messageId, reactionSelected, reactorsHasMore, id, reactionType];
  callback = obj.useCallback((arg0, arg1) => {
    let tmp = arg0 / arg1 > 0.75 && reactorsHasMore;
    if (tmp) {
      tmp = !ref.current;
    }
    if (tmp) {
      ref.current = true;
      reactionSelected(reactorsHasMore[18]);
      const obj = { channelId: null, messageId: null, emoji: null, limit: null, after: null, type: null };
      obj[0] = channelId;
      obj[1] = messageId;
      obj[2] = reactionSelected.emoji;
      obj[3] = closure_1_15;
      obj[4] = id;
      obj[5] = reactionType;
      const reactors = obj.getReactors(obj);
      reactors.then((result) => {
        closure_5.current = false;
      });
    }
  }, items);
  closure_8 = obj.useRef(callback);
  const items1 = [callback];
  const effect = obj.useEffect(() => {
    closure_8.current = callback;
  }, items1);
  closure_9 = messageId(reactorsHasMore[19])(() => messageId(reactorsHasMore[20]).debounce((closure_1_1, current) => ref.current(messageId, current), 16));
  return messageId(reactorsHasMore[19])(() => (nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    return callback(nativeEvent.contentOffset.y, nativeEvent.contentSize.height);
  });
}
function ReactionTab(arg0) {
  ({ reaction, selected } = arg0);
  const tmp = callback4();
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
    obj = { color: null };
    obj[0] = emojiColorPalette.accentColor;
    tmp7 = obj;
  }
  let tmp8 = null;
  if (null != emojiColorPalette) {
    obj = { backgroundColor: null };
    let tmp3Result = hexToRgba;
    obj[0] = tmp3Result.hexOpacityToRgba(emojiColorPalette.backgroundColor, emojiColorPalette.opacity);
    tmp8 = obj;
  }
  const emoji = reaction.emoji;
  tmp3Result = initialize;
  const items = [closure_10];
  const stateFromStores = tmp3Result.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const AnimateEmoji = explicitContentFromProto.AnimateEmoji;
  let emojiURL;
  if (null != emoji.id) {
    obj1 = { id: null, animated: null, size: 48 };
    ({ id: obj7[0], animated } = emoji);
    if (animated) {
      animated = !stateFromStores;
    }
    if (animated) {
      animated = tmp10;
    }
    obj1[1] = animated;
    emojiURL = getAvatarURLDefault.getEmojiURL(obj1);
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
  const items2 = [, ];
  ({ emoji: arr4[0], emojiText: arr4[1] } = tmp);
  const items3 = [, ];
  ({ emoji: arr5[0], emojiImage: arr5[1] } = tmp);
  const items4 = [callback2(EmojiDefault, { src: emojiURL, name: emoji.name, textEmojiStyle: items2, fastImageStyle: items3 }), ];
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
  items4[1] = callback2(Text.Text, { variant: "text-md/bold", style: items5, children: reaction.burst_count > 0 ? reaction.burst_count : reaction.count });
  obj2[4] = items4;
  let name = emoji.id;
  if (name == null) {
    name = emoji.name;
  }
  return callback2(closure_9, obj2, name);
}
function RemoveAllButton(channelId) {
  ({ reactions: require, reactionSelectedIndex } = channelId);
  channelId = channelId.channelId;
  const messageId = channelId.messageId;
  let useReducedMotion;
  let React;
  c6 = undefined;
  let sharedValue1;
  let callback;
  let obj = require(messageId[14]);
  const items = [closure_11];
  const items1 = [channelId];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_11.getChannel(channelId), items1);
  useReducedMotion = useReducedMotion.useReducedMotion;
  const tmp = callback4();
  const tmp6 = reactionSelectedIndex(messageId[39])(stateFromStores);
  [c5, c6] = useReducedMotion(React.useState(true), 2);
  obj1 = require(messageId[10]);
  const sharedValue = obj1.useSharedValue(64);
  let obj2 = require(messageId[10]);
  class S {
    constructor() {
      if (useReducedMotion) {
        tmp5 = closure_7;
        value = closure_7.get();
      } else {
        tmp = reactions;
        tmp2 = messageId;
        obj = reactions(messageId[40]);
        tmp3 = closure_7;
        value = obj.withTiming(closure_7.get(), { duration: 200 });
      }
      return { maxWidth: value };
    }
  }
  obj = { useReducedMotion, buttonWidth: sharedValue, withTiming: require(messageId[40]).withTiming };
  S.__closure = obj;
  S.__workletHash = 16499689496895;
  S.__initData = closure_24;
  const animatedStyle = obj2.useAnimatedStyle(S);
  let obj4 = require(messageId[10]);
  sharedValue1 = obj4.useSharedValue(0);
  const tmp7 = useReducedMotion(React.useState(true), 2);
  class T {
    constructor() {
      if (useReducedMotion) {
        tmp5 = closure_8;
        value = closure_8.get();
      } else {
        tmp = reactions;
        tmp2 = messageId;
        obj = reactions(messageId[40]);
        tmp3 = closure_8;
        value = obj.withTiming(closure_8.get(), { duration: 125 });
      }
      return { opacity: value, color: "white", fontSize: 14, marginLeft: 8, textAlignVertical: "center" };
    }
  }
  obj = { useReducedMotion, textOpacity: sharedValue1, withTiming: require(messageId[40]).withTiming };
  T.__closure = obj;
  T.__workletHash = 8698187840986;
  T.__initData = closure_25;
  const items2 = [sharedValue, sharedValue1];
  const animatedStyle1 = require(messageId[10]).useAnimatedStyle(T);
  callback = React.useCallback(() => {
    _undefined(true);
    const result = sharedValue.set(32);
    const result1 = sharedValue1.set(0);
  }, items2);
  const items3 = [reactionSelectedIndex, callback];
  const effect = React.useEffect(() => {
    callback();
  }, items3);
  let tmp14 = null;
  if (tmp6) {
    obj1 = { onPress: null, children: null };
    obj1[0] = function onPress() {
      if (c5) {
        _undefined(false);
        const result = sharedValue.set(require(messageId[41]).getWindowDimensions().width);
        const result1 = sharedValue1.set(1);
        const obj2 = require(messageId[41]);
      } else {
        channelId(messageId[18]).removeEmojiReactions(channelId, messageId, table[reactionSelectedIndex].emoji);
        callback();
        const obj = channelId(messageId[18]);
      }
    };
    obj2 = { style: null, children: null };
    const items4 = [tmp.removeAllButton, animatedStyle];
    obj2[0] = items4;
    const obj3 = { color: null, size: "sm" };
    obj3[0] = reactionSelectedIndex(tmp3[13]).unsafe_rawColors.WHITE;
    const items5 = [callback2(require(tmp3[42]).TrashIcon, obj3), ];
    obj4 = { style: null, variant: "text-sm/semibold", color: "text-overlay-light", children: null };
    obj4[0] = animatedStyle1;
    const intl = require(tmp3[34]).intl;
    obj4[3] = intl.string(require(tmp3[34]).t["zx/e4P"]);
    items5[1] = callback2(closure_19, obj4);
    obj2[1] = items5;
    obj1[1] = callback3(reactionSelectedIndex(tmp3[10]).View, obj2);
    tmp14 = callback2(sharedValue, obj1);
  }
  return tmp14;
}
function EmojiOptionsButton(channelId) {
  channelId = channelId.channelId;
  const messageId = channelId.messageId;
  ({ reactions, reactionSelectedIndex } = channelId);
  let obj = channelId(589);
  const items = [closure_11];
  const items1 = [channelId];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_11.getChannel(channelId), items1);
  const tmp3 = messageId(10462)(stateFromStores);
  closure_2 = tmp3;
  dependencyMap = tmp4;
  const items2 = [channelId, messageId, reactions[reactionSelectedIndex], tmp3];
  {
    onPress: React.useCallback(() => {
      messageId(paths[43]);
      const obj = { channelId, messageId, reaction: paths, canRemoveReactions: closure_2 };
      obj.openLazy(channelId(paths[45])(paths[44], paths.paths), "ReactionEmojiOptionsActionSheet", obj, "replaceTopSheet");
    }, items2),
    style: callback4().emojiOptionsButton,
    children: null
  };
  obj = { variant: "text-xs/semibold", color: "text-subtle", children: null };
  const intl = channelId(1236).intl;
  obj[2] = intl.string(channelId(1236).t.pCaYID);
  const items3 = [callback2(channelId(4734).Text, obj), ];
  const tmp = callback4();
  items3[1] = callback2(channelId(6685).ChevronSmallRightIcon, { color: messageId(712).colors.ICON_SUBTLE, size: "xs" });
  obj[2] = items3;
  return callback3(closure_7, obj);
}
function ReactionTabs(setReactionSelectedIndex) {
  const tmp = callback4();
  ({ reactions, reactionSelectedIndex } = setReactionSelectedIndex);
  setReactionSelectedIndex = setReactionSelectedIndex.setReactionSelectedIndex;
  setReactionSelectedIndex(7166);
  const obj = {
    tabs: reactions.map((item, index) => {
      let str = item.emoji.id;
      if (str == null) {
        str = "";
      }
      return closure_1_17(ReactionTab, { reaction: item, selected: index === reactionSelectedIndex }, "" + str + ":" + item.emoji.name);
    }),
    tabStyle: null,
    tabStyleActive: null,
    tabStyleSelected: null,
    tabIndexSelected: reactionSelectedIndex,
    onSelect(arg0) {
      const result = reactionSelectedIndex(dependencyMap[49]).triggerHapticFeedback(setReactionSelectedIndex(dependencyMap[50]).IMPACT_LIGHT);
      setReactionSelectedIndex(arg0);
    },
    initialNumTabsToRender: reactionSelectedIndex(4032).MAX_REACTIONS
  };
  ({ tab: obj3[1], tabActive: obj3[2], tabSelected: obj3[3] } = tmp);
  const items = [callback2(setReactionSelectedIndex(10464), obj), callback2(setReactionSelectedIndex(7693), { outer: true }), ];
  obj1 = { style: tmp.removeButtonContainer, children: null };
  const obj2 = { style: tmp.emojiTextIdentifier, variant: "eyebrow", color: "text-default", children: null };
  const tmp5 = setReactionSelectedIndex(10464);
  obj2[3] = reactionSelectedIndex(4032).getReactionEmojiName(reactions[reactionSelectedIndex].emoji);
  const items1 = [callback2(reactionSelectedIndex(4734).Text, obj2), ];
  const obj3 = {};
  const obj6 = reactionSelectedIndex(4032);
  const merged = Object.assign(setReactionSelectedIndex);
  items1[1] = callback2(obj.useExperiment({ location: "ReactionTabs" }, { autoTrackExposure: false }).tidaWebformEnabled ? EmojiOptionsButton : RemoveAllButton, obj3);
  obj1[1] = items1;
  items[2] = callback2(closure_9, obj1);
  obj[1] = items;
  return callback2(closure_9, obj);
}
({ ActivityIndicator: closure_6, Platform, Pressable: error, StyleSheet: closure_8, View: c9 } = get_ActivityIndicator);
({ DEFAULT_NUM_REACTION_USERS: closure_15, Permissions: closure_16 } = ME);
({ jsx: closure_17, jsxs: closure_18 } = jsxProd);
let closure_19 = importDefaultResult.createAnimatedComponent(require("Text").Text);
let obj = { padding: 32, borderTopLeftRadius: ThemesDefault.radii.sm, borderTopRightRadius: ThemesDefault.radii.sm };
obj[1] = obj;
const createCacheKey = { height: 48, backgroundColor: ThemesDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
obj[2] = createCacheKey;
obj[3] = { flexDirection: "row", alignItems: "center", borderRadius: ThemesDefault.radii.sm, padding: 8, marginTop: 8 };
obj[4] = { backgroundColor: ThemesDefault.colors.INTERACTIVE_BACKGROUND_SELECTED };
obj[5] = { padding: 0, marginHorizontal: 8, marginBottom: 8 };
obj[6] = { borderBottomColor: "transparent" };
obj[7] = { borderRadius: ThemesDefault.radii.sm };
obj[8] = { display: "flex", flexDirection: "column" };
obj[9] = { display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" };
obj[10] = { flexDirection: "row", alignItems: "center", marginRight: ThemesDefault.space.PX_16, gap: 2 };
obj[11] = { backgroundColor: ThemesDefault.colors.BACKGROUND_FEEDBACK_CRITICAL, borderRadius: ThemesDefault.radii.xxl, height: 32, overflow: "hidden", minWidth: 42, marginRight: 20, display: "flex", flexDirection: "row", alignItems: "center", paddingHorizontal: 12 };
obj[12] = { color: ThemesDefault.colors.INTERACTIVE_TEXT_DEFAULT };
obj[13] = { color: ThemesDefault.colors.INTERACTIVE_TEXT_ACTIVE };
obj[14] = { marginRight: 8 };
obj[15] = { lineHeight: 24, fontSize: 20, textAlign: "center", color: ThemesDefault.colors.INTERACTIVE_TEXT_DEFAULT };
obj[16] = { resizeMode: "contain", width: 24, height: 24 };
obj[17] = { padding: 16 };
obj[18] = { marginRight: 10 };
obj[19] = { flexDirection: "row", justifyContent: "flex-end", alignItems: "center" };
obj[20] = { height: 48, padding: 6 };
let closure_20 = createCacheKey.createStyles(obj);
let closure_24 = { code: "function MessageReactionsContentTsx1(){const{useReducedMotion,buttonWidth,withTiming}=this.__closure;return{maxWidth:useReducedMotion?buttonWidth.get():withTiming(buttonWidth.get(),{duration:200})};}" };
let closure_25 = { code: "function MessageReactionsContentTsx2(){const{useReducedMotion,textOpacity,withTiming}=this.__closure;return{opacity:useReducedMotion?textOpacity.get():withTiming(textOpacity.get(),{duration:125}),color:'white',fontSize:14,marginLeft:8,textAlignVertical:'center'};}" };
const MessageReactionsContent_SwipableBounced = "MessageReactionsContent_SwipableBounced";
let closure_30 = Storage.get("MessageReactionsContent_SwipableBounced", false);
let result = require("obj132").fileFinishedImporting("modules/reactions/native/MessageReactionsContent.tsx");

export { useReactors };
export { useReactorsOnScrollNative };
export const MessageReactionsEmpty = function MessageReactionsEmpty() {
  const tmp = callback4();
  const tmp2 = useSafeAreaInsetsDefault();
  const obj = { style: tmp.containerEmpty, children: null };
  obj1 = { source: obj.useNoResultsSource(), title: null, body: null };
  const intl = getSystemLocale.intl;
  obj1[1] = intl.string(getSystemLocale.t.HmPOrp);
  const intl2 = getSystemLocale.intl;
  obj1[2] = intl2.string(getSystemLocale.t["pTJ5J/"]);
  obj[1] = callback2(Button.RefreshEmptyState, obj1);
  obj[2] = callback2(BottomSheetModal.BottomSheetView, obj);
  return callback2(Background.BottomSheet, obj);
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
  closure_2 = undefined;
  channelId = reactions;
  messageId = channelId.emoji;
  if (isSelectedBurst === undefined) {
    isSelectedBurst = false;
  }
  closure_2 = isSelectedBurst;
  let obj = React;
  let tmp3 = callback(React.useState(() => {
    if (null == messageId) {
      return 0;
    } else {
      const findIndexResult = channelId.findIndex((item, index) => {
        const emojiEqualsResult = channelId(reactors[15]).emojiEquals(item.emoji, closure_1);
        let num = item.burst_count;
        if (num == null) {
          num = 0;
        }
        let tmp2 = num > 0;
        if (closure_2) {
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
    let NORMAL = channelId(reactors[17]).ReactionTypes.VOTE;
    let tmp8 = channelId;
    let tmp9 = reactors;
    let tmp10 = channelId;
    let tmp11 = reactors;
  } else if (tmp5.burst_count > 0) {
    NORMAL = channelId(reactors[17]).ReactionTypes.BURST;
    tmp8 = channelId;
    tmp9 = reactors;
    tmp10 = channelId;
    tmp11 = reactors;
  } else {
    NORMAL = channelId(reactors[17]).ReactionTypes.NORMAL;
    tmp8 = channelId;
    tmp9 = reactors;
    tmp10 = channelId;
    tmp11 = reactors;
  }
  let tmp2 = callback4();
  ({ reactors, reactorsHasMore } = useReactors({ channelId, messageId, reaction: reactions[bound], reactionType: NORMAL }));
  let tmp10Result = tmp10(tmp11[14]);
  let items = [closure_11];
  const items1 = [channelId];
  const stateFromStores = tmp10Result.useStateFromStores(items, () => closure_1_11.getChannel(channelId), items1);
  tmp10Result = tmp10(tmp11[56]);
  const isActiveChannelOrUnarchivableThread = tmp10Result.useIsActiveChannelOrUnarchivableThread(stateFromStores);
  const tmp16 = useReactors({ channelId, messageId, reaction: reactions[bound], reactionType: NORMAL });
  const tmp20 = messageId(tmp11[51])();
  const items2 = [closure_14];
  const items3 = [channelId];
  let tmp21 = tmp8(tmp9[14]).useStateFromStores(items2, () => closure_1_14.canWithPartialContext(closure_1_16.MANAGE_MESSAGES, { channelId }), items3) && !disableManage && isActiveChannelOrUnarchivableThread;
  let name = tmp5.emoji.id;
  if (name == null) {
    name = tmp5.emoji.name;
  }
  obj = { accessibilityLabel: null, footerSize: 48, insetBottom: null, onScroll: null, renderFooter: null, renderItem: null, renderQuickActions: null, itemSize: 48, sections: null, style: null };
  let intl = tmp10(tmp11[34]).intl;
  obj[0] = intl.string(tmp10(tmp11[34]).t.gHp0C4);
  obj[2] = tmp20.bottom;
  obj[3] = useReactorsOnScrollNative({ channelId, messageId, reactionSelected: reactions[bound], reactors, reactorsHasMore, reactionType: NORMAL });
  messageId = reactorsHasMore;
  let tmpResult = callback4();
  const items4 = [reactors, reactorsHasMore, tmpResult];
  obj[4] = obj.useCallback(() => {
    if (messageId) {
      const obj = { style: null, size: "large" };
      obj[0] = closure_2.loadingSpinner;
      let tmp2 = closure_1_17(analyticsLocations, obj);
    } else {
      tmp2 = null;
    }
    return tmp2;
  }, items4);
  channelId = reactors;
  reactors = tmp5;
  tmpResult = callback4();
  React = tmpResult;
  const analyticsLocations = tmp19(tmp9[21])().analyticsLocations;
  let tmp19Result = tmp19(tmp9[22]);
  const reactionToProfileEnabled = tmp19Result.useConfig({ location: "MessageReactionsContent" }).reactionToProfileEnabled;
  const items5 = [reactors, channelId, tmp21, messageId, reactions[bound], tmpResult, analyticsLocations, reactionToProfileEnabled];
  obj[5] = obj.useCallback((arg0, arg1) => {
    obj = obj[arg1];
    const id = obj.id;
    const diff = obj.length - 1;
    const channel = closure_1_11.getChannel(NORMAL);
    let guildId = null;
    if (null != channel) {
      guildId = channel.getGuildId();
    }
    let obj2 = messageId(reactors[23]);
    let nickname = obj2.getNickname(guildId, NORMAL, obj);
    if (nickname == null) {
      let tmp4Result = messageId(reactors[24]);
      nickname = tmp4Result.getGlobalName(obj);
    }
    let member = null;
    if (null != guildId) {
      member = closure_1_12.getMember(guildId, id);
    }
    if (reactors.burst_count > 0) {
      NORMAL = channelId(reactors[17]).ReactionTypes.BURST;
      let tmp10 = channelId;
    } else {
      NORMAL = channelId(reactors[17]).ReactionTypes.NORMAL;
      tmp10 = channelId;
    }
    tmp4Result = messageId(reactors[26]);
    obj = { style: closure_5.avatar, size: tmp10(reactors[27]).AvatarSizes.SMALL, source: null };
    const avatarSource = obj.getAvatarSource(guildId);
    let guildMemberAvatarSource = avatarSource;
    if (null != guildId) {
      let avatar;
      if (member != null) {
        avatar = member.avatar;
      }
      guildMemberAvatarSource = avatarSource;
      if (null != avatar) {
        guildMemberAvatarSource = messageId(reactors[28]).getGuildMemberAvatarSource(member, obj);
        const tmp4Result1 = messageId(reactors[28]);
      }
    }
    obj1 = { leading: closure_1_17(tmp10(reactors[27]).Avatar, obj), label: closure_1_17(messageId(reactors[29]), { user: obj, nick: nickname }), trailing: null, onPress: null, onLongPress: null };
    obj[2] = guildMemberAvatarSource;
    let tmp14Result = null;
    if (closure_4) {
      tmp14Result = null;
      if (tmp10Result.isAndroid()) {
        obj2 = { onPress: null, children: null };
        obj2[0] = function onPress() {
          obj = channelId(reactors[18]);
          { channelId: NORMAL, messageId: id, emoji: closure_1_3.emoji, location: channelId(reactors[18]).ReactionLocations.MESSAGE, userId: obj.id, options: null };
          obj = { burst: NORMAL === channelId(reactors[17]).ReactionTypes.BURST };
          obj[5] = obj;
          return obj.removeReaction(obj);
        };
        obj2[1] = closure_1_17(tmp10(reactors[31]).XSmallIcon, {});
        tmp14Result = closure_1_17(reactionToProfileEnabled, obj2);
      }
      tmp10Result = tmp10(reactors[30]);
    }
    function openProfile() {
      obj = { userId: id, channelId: NORMAL, messageId: id, localUser: obj, sourceAnalyticsLocations: analyticsLocations };
      messageId(reactors[25])(obj);
    }
    obj1[2] = tmp14Result;
    let tmp21;
    if (reactionToProfileEnabled) {
      tmp21 = openProfile;
    }
    obj1[3] = tmp21;
    obj1[4] = openProfile;
    const items = [closure_1_17(tmp4Result, obj1), ];
    tmp14Result = null;
    if (arg1 !== diff) {
      tmp14Result = closure_1_17(messageId(reactors[32]), {});
    }
    items[1] = tmp14Result;
    obj[1] = items;
    return closure_1_18(closure_1_9, obj);
  }, items5);
  closure_2 = tmp5;
  const tmpResult1 = callback4();
  const items6 = [reactors, channelId, messageId, reactions[bound], tmpResult1];
  obj[6] = obj.useCallback((arg0, arg1) => {
    closure_0 = reactors[arg1];
    if (closure_2.burst_count > 0) {
      let NORMAL = channelId(reactors[17]).ReactionTypes.BURST;
    } else {
      NORMAL = channelId(reactors[17]).ReactionTypes.NORMAL;
    }
    let obj = { title: null, IconComponent: null, color: null, onPress: null, height: 48 };
    const intl = channelId(reactors[34]).intl;
    obj[0] = intl.string(channelId(reactors[34]).t.N86XcP);
    obj[1] = channelId(reactors[31]).XSmallIcon;
    obj[2] = messageId(reactors[13]).unsafe_rawColors.RED_400;
    obj[3] = function onPress() {
      channelId(reactors[18]);
      { channelId: id, messageId: NORMAL, emoji: closure_1_2.emoji, location: channelId(reactors[18]).ReactionLocations.MESSAGE, userId: id.id, options: null };
      const obj = { burst: NORMAL === channelId(reactors[17]).ReactionTypes.BURST };
      obj[5] = obj;
      return obj.removeReaction(obj);
    };
    obj[1] = closure_1_17(messageId(reactors[33]), obj);
    return closure_1_17(closure_1_9, obj);
  }, items6);
  const items7 = [reactors.length];
  obj[8] = items7;
  obj[9] = tmp2.container;
  callback = obj.useCallback(() => {
    c30 = true;
    const Storage = channelId(reactors[55]).Storage;
    const result = Storage.set(closure_29, true);
  }, []);
  const tmp8Result = tmp8(tmp9[14]);
  const tmp10Result1 = tmp10(tmp11[30]);
  obj = { scrollable: true, backdropOpacity: tmp10(tmp11[57]).BACKDROP_OPACITY, backdropChildren: null, header: null, children: null };
  let tmp27Result = null;
  if (NORMAL === tmp10(tmp11[17]).ReactionTypes.BURST) {
    obj1 = { style: null, pointerEvents: "none", children: null };
    obj1[0] = absoluteFill.absoluteFill;
    let obj2 = { emoji: null, reactionType: null, messageId: null, channelId: null };
    obj2[0] = tmp5.emoji;
    obj2[1] = NORMAL;
    obj2[2] = messageId;
    obj2[3] = channelId;
    obj1[2] = callback(tmp19(tmp11[58]), obj2);
    tmp27Result = callback(closure_9, obj1);
  }
  obj[2] = tmp27Result;
  tmp27Result = null;
  if (true !== flag) {
    const obj3 = { reactions: null, reactionSelectedIndex: null, setReactionSelectedIndex: null, messageId: null, channelId: null };
    obj3[0] = reactions;
    obj3[1] = bound;
    obj3[2] = tmp3[1];
    obj3[3] = messageId;
    obj3[4] = channelId;
    tmp27Result = callback(ReactionTabs, obj3);
  }
  obj[3] = tmp27Result;
  if (tmp26) {
    const obj4 = { inActionSheet: true, bounceFirstRowOnMount: null, onBounceSwipable: null };
    obj4[1] = !closure_30;
    obj4[2] = callback;
    tmp19Result = tmp19(tmp11[59]);
    const merged = Object.assign(obj);
    let tmp27Result1 = callback(tmp19Result, obj4, name);
  } else {
    const obj5 = { inActionSheet: true };
    const merged1 = Object.assign(obj);
    tmp27Result1 = callback(tmp19(tmp11[60]), obj5, name);
    const tmp19Result1 = tmp19(tmp11[60]);
  }
  obj[4] = tmp27Result1;
  return callback(tmp10(tmp11[53]).BottomSheet, obj);
};