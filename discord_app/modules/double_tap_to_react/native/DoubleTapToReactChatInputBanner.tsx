// === Module 14069: DoubleTapToReactChatInputBanner ===

// Module 14069 (DoubleTapToReactChatInputBanner)
import useStateFromStores from "useStateFromStores" /* 563 */;
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1411 */;
import _modDef1652 from "module_1652" /* 1652 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2123 */;
import dismissible_content from "dismissible_content" /* 4976 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5384 */;
import Text_Text from "Text/Text" /* 5763 */;
import useTrackImpressionDefault from "useTrackImpression" /* 6166 */;
import usePreviousDefault from "usePrevious" /* 6870 */;
import Pressables from "Pressables" /* 7124 */;
import XSmallIcon from "XSmallIcon" /* 7198 */;
import EmojiDefault from "Emoji" /* 7439 */;
import canAddNewReactionsDefault from "canAddNewReactions" /* 8575 */;
import renderChannelBadge from "renderChannelBadge" /* 14070 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5144 */;

require = fn;
function DoubleTapToReactChatInputBannerInner(emoji) {
  emoji = emoji.emoji;
  const tmp = closure_13();
  items = [AccessibilityStore];
  const stateFromStores = useStateFromStores.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const obj2 = { style: tmp.container, children: null };
  const obj3 = { style: tmp.emojiContainer, children: null };
  const obj4 = { style: tmp.emoji, fastImageStyle: tmp.emoji, textEmojiStyle: tmp.textEmoji, name: null, src: null };
  let str = "";
  if (null == emoji.id) {
    str = emoji.surrogates;
  }
  obj4.name = str;
  if (null != emoji.id) {
    const obj5 = { id: emoji.id, animated: null, size: null };
    let animated = !stateFromStores;
    if (!stateFromStores) {
      animated = emoji.animated;
    }
    obj5.animated = animated;
    obj5.size = EMOJI_URL_BASE_SIZE;
    let url = AvatarUtilsDefault.getEmojiURL(obj5);
    const tmp8Result = AvatarUtilsDefault;
  } else {
    url = emoji.url;
  }
  obj4.src = url;
  const items1 = [React6(EmojiDefault, obj4), React6(Text_Text.Text, { variant: "heading-xl/semibold", color: "interactive-text-default", children: "1" })];
  obj3.children = items1;
  const items2 = [closure_1_10(View, obj3), , ];
  const obj6 = { style: tmp.text, children: null };
  const obj7 = { style: tmp.header, children: null };
  const obj8 = { variant: "body-md/semibold", color: "mobile-text-heading-primary", children: null };
  const intl = util.intl;
  obj8.children = intl.string(util.t["6RUX7d"]);
  const items3 = [React6(Text_Text.Text, obj8), React6(renderChannelBadge.NewBadge, {})];
  obj7.children = items3;
  const items4 = [closure_1_10(View, obj7), ];
  const obj9 = { variant: "body-xs/medium", color: "text-default", children: null };
  const intl2 = util.intl;
  obj9.children = intl2.format(util.t["5/l2rR"], {
    emojiName: emoji.name,
    emojiNameHook(children, arg1) {
      return closure_1_9(require("Text/Text").Text, { variant: "body-xs/semibold", color: "text-strong", children }, arg1);
    },
    tapHereHook(children, arg1) {
      return closure_1_9(require("Text/Text").Text, { variant: "body-xs/medium", color: "text-brand", children }, arg1);
    }
  });
  items4[1] = React6(Text_Text.Text, obj9);
  obj6.children = items4;
  items2[1] = closure_1_10(View, obj6);
  const obj11 = { hitSlop: 8, accessibilityRole: "button", accessibilityLabel: null, onPress: null, style: null, children: null };
  const intl3 = util.intl;
  obj11.accessibilityLabel = intl3.string(util.t.cpT0Cq);
  obj11.onPress = emoji.handleDismissBanner;
  obj11.style = tmp.closeButton;
  obj11.children = React6(XSmallIcon.XSmallIcon, { size: "sm", color: "icon-subtle" });
  items2[2] = React6(Pressables.PressableOpacity, obj11);
  obj2.children = items2;
  return closure_1_10(View, obj2);
}
function DoubleTapToReactChatInputBannerAnimationContainer(channel) {
  channel = channel.channel;
  _require = channel;
  const emoji = channel.emoji;
  const markAsDismissed = channel.markAsDismissed;
  easing = undefined;
  first1 = undefined;
  closure_6 = undefined;
  closure_8 = undefined;
  const tmp = closure_13();
  [first, easing] = easing.useState(82);
  items = [closure_6];
  const stateFromStores = require("useStateFromStores").useStateFromStores(items, () => closure_6.useReducedMotion);
  [first1, closure_6] = easing.useState(false);
  const obj3 = { type: null, name: null };
  let obj2 = require("useStateFromStores");
  obj3.type = require("discord_common/AnalyticsUtils").ImpressionTypes.VIEW;
  obj3.name = require("discord_common/AnalyticsUtils").ImpressionNames.DOUBLE_TAP_REACT_UPSELL;
  useTrackImpressionDefault(obj3);
  const sharedValue = require("module_1652").useSharedValue(0);
  const items1 = [sharedValue, first, first1];
  const effect = easing.useEffect(() => {
    if (first1) {
      const result = set(0);
    } else {
      const result1 = set(c3);
    }
  }, items1);
  const obj4 = require("module_1652");
  const items2 = [closure_15, stateFromStores, sharedValue, require("module_1652").withDelay, require("timing/timing").withTiming, require("native").DECELERATED_EASING];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  easing = undefined;
  [tmp14, tmp15, tmp16, tmp17, tmp18, tmp19] = items2;
  class DoubleTapToReactChatInputBannerTsx1 {
    constructor() {
      obj = { height: null };
      if (closure_0) {
        tmp6 = closure_1;
        obj.height = closure_1.get();
        tmp5 = obj;
      } else {
        tmp = closure_2;
        tmp2 = closure_3;
        tmp3 = closure_1;
        obj1 = { duration: 300, easing: null };
        tmp4 = closure_4;
        obj1.easing = closure_4;
        num = 200;
        obj.height = closure_2(200, closure_3(closure_1.get(), obj1));
        tmp5 = obj;
      }
      return tmp5;
    }
  }
  const items3 = [tmp15, tmp16, tmp17, tmp18, tmp19];
  DoubleTapToReactChatInputBannerTsx1.__closure = items3;
  DoubleTapToReactChatInputBannerTsx1.__workletHash = 11366133549482;
  DoubleTapToReactChatInputBannerTsx1.__initData = tmp14;
  const animatedStyle = require("module_1652").useAnimatedStyle(DoubleTapToReactChatInputBannerTsx1);
  const items4 = [emoji, markAsDismissed];
  const callback = obj.useCallback((nativeEvent) => {
    easing(nativeEvent.nativeEvent.layout.height);
  }, []);
  const items5 = [markAsDismissed];
  const callback1 = obj.useCallback(() => {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(14171, dependencyMap.paths), "DoubleTapToReactActionSheet", { emoji });
    _undefined2(ContentDismissActionType.TAKE_ACTION);
  }, items4);
  const callback2 = obj.useCallback(() => {
    closure_6(true);
    const timerId = setTimeout(() => {
      _undefined2(sharedValue.USER_DISMISS);
    }, 500);
  }, items5);
  const tmp24 = usePreviousDefault(channel.id);
  closure_8 = tmp24;
  const items6 = [tmp24, channel.id, markAsDismissed];
  const effect1 = obj.useEffect(() => {
    let tmp2 = null != closure_8;
    if (tmp2) {
      tmp2 = tmp !== _undefined.id;
    }
    if (tmp2) {
      _undefined2(ContentDismissActionType.AUTO_DISMISS);
    }
  }, items6);
  const obj5 = require("module_1652");
  const unmountEffect = require("hooks/useMountEffect").useUnmountEffect(() => {
    _undefined2(ContentDismissActionType.AUTO_DISMISS);
  });
  const obj6 = { children: null };
  const tmp4Result = require("hooks/useMountEffect");
  const items7 = [closure_9(first1, { style: tmp.measurement, onLayout: callback, children: closure_9(DoubleTapToReactChatInputBannerInner, { emoji, handleDismissBanner: callback2 }) }), ];
  const obj8 = { style: null, children: null };
  const items8 = [animatedStyle, tmp.animatedContainer];
  obj8.style = items8;
  const obj7 = { style: tmp.measurement, onLayout: callback, children: closure_9(DoubleTapToReactChatInputBannerInner, { emoji, handleDismissBanner: callback2 }) };
  obj8.children = closure_9(require("native").AnimatedPressableHighlight, { onPress: callback1, style: tmp.highlight, androidRippleConfig, children: closure_9(DoubleTapToReactChatInputBannerInner, { emoji, handleDismissBanner: callback2 }) });
  items7[1] = closure_9(_modDef1652.View, obj8);
  obj6.children = items7;
  return closure_10(closure_11, obj6);
}
const View = fn(17).View;
const ContentDismissActionType = fn(4989).ContentDismissActionType;
const EMOJI_URL_BASE_SIZE = fn(1388).EMOJI_URL_BASE_SIZE;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: closure_10, Fragment: closure_11 } = jsxProd);
const androidRippleConfig = { cornerRadius: 0 };
const createStyles = fn(5143);
let obj2 = { animatedContainer: { borderTopWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH }, measurement: { opacity: 0, position: "absolute" }, container: { display: "flex", flexDirection: "row", alignItems: "center", padding: 12 }, highlight: null, text: null, emojiContainer: null, emoji: null, textEmoji: null, header: null, closeButton: null };
let obj3 = { borderTopWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj2.highlight = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj2.text = { marginHorizontal: 12, flex: 1 };
let obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj2.emojiContainer = { borderWidth: 2, borderColor: nativeDefault.colors.BORDER_STRONG, backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT, borderRadius: nativeDefault.radii.md, flexDirection: "row", gap: 8, alignItems: "center", justifyContent: "center", padding: 12 };
obj2.emoji = { width: 28, height: 28 };
let PlatformUtils = fn(1377);
let num = 22;
if (PlatformUtils.isIOS()) {
  num = 28;
}
let obj7 = { fontSize: num, textAlign: "center", lineHeight: null, color: null };
PlatformUtils = fn(1377);
let num2;
if (PlatformUtils.isIOS()) {
  num2 = 32;
}
obj7.lineHeight = num2;
obj7.color = nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT;
obj2.textEmoji = obj7;
obj2.header = { flexDirection: "row", alignItems: "center", gap: 6 };
obj2.closeButton = { alignSelf: "flex-start" };
let closure_13 = createStyles.createStyles(obj2);
let closure_15 = { code: "(function DoubleTapToReactChatInputBannerTsx1(){let[useReducedMotion,height,withDelay,withTiming,DECELERATED_EASING]=this.__closure;if(useReducedMotion){return{height:height.get()};}return{height:withDelay(200,withTiming(height.get(),{duration:300,easing:DECELERATED_EASING}))};})" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/double_tap_to_react/native/DoubleTapToReactChatInputBanner.tsx");

export function DoubleTapToReactChatInputBanner(channel) {
  channel = channel.channel;
  let memo1;
  const DoubleTapReactionEmoji = channel(memo1[29]).DoubleTapReactionEmoji;
  const setting = DoubleTapReactionEmoji.useSetting();
  items = [channel, setting];
  const memo = noop.useMemo(() => {
    ({ emojiId, emojiName } = setting);
    let tmp = true !== setting.disableDoubleTap;
    if (tmp) {
      let tmp3 = null != emojiId;
      if (tmp3) {
        tmp3 = "0" !== emojiId;
      }
      if (!tmp3) {
        let tmp4 = null != emojiName;
        if (tmp4) {
          tmp4 = "" !== emojiName;
        }
        tmp3 = tmp4;
      }
      let tmp5 = !tmp3;
      if (!tmp3) {
        let tmp7 = null != channel.lastMessageId;
        if (tmp7) {
          tmp7 = canAddNewReactionsDefault(tmp6);
        }
        tmp5 = tmp7;
      }
      tmp = tmp5;
    }
    return tmp;
  }, items);
  memo1 = noop.useMemo(() => channel(memo1[31]).getFallbackDoubleTapDisambiguatedEmoji(), []);
  let tmp6 = null;
  if (null != memo1) {
    let tmp7 = null;
    if (memo) {
      let obj = { contentTypes: null, bypassAutoDismiss: true, children: null };
      const items1 = [channel(tmp2[33]).DismissibleContent.DOUBLE_TAP_TO_REACT_EXPANDED_UPSELL];
      obj.contentTypes = items1;
      obj.children = function children(arg0) {
        ({ visibleContent, markAsDismissed } = arg0);
        let tmp = null;
        if (visibleContent === dismissible_content.DismissibleContent.DOUBLE_TAP_TO_REACT_EXPANDED_UPSELL) {
          const obj = { channel, emoji: memo1, markAsDismissed };
          tmp = React6(DoubleTapToReactChatInputBannerAnimationContainer, obj);
        }
        return tmp;
      };
      tmp7 = closure_9(setting(tmp2[32]), obj);
      const tmp10 = setting(tmp2[32]);
    }
    tmp6 = tmp7;
  }
  return tmp6;
}