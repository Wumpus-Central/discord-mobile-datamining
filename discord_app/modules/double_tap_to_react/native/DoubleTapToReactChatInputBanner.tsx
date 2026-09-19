// === Module 12542: DoubleTapToReactChatInputBanner ===

// Module 12542 (DoubleTapToReactChatInputBanner)
import useStateFromStores from "useStateFromStores" /* 563 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import native from "native" /* 1177 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1397 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import dismissible_content from "dismissible_content" /* 2027 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4492 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4723 */;
import Text_Text from "Text/Text" /* 4752 */;
import timing from "timing" /* 4757 */;
import Pressables from "Pressables" /* 5334 */;
import XSmallIcon from "XSmallIcon" /* 5892 */;
import EmojiDefault from "Emoji" /* 7370 */;
import canAddNewReactionsDefault from "canAddNewReactions" /* 8228 */;
import renderChannelBadge from "renderChannelBadge" /* 12543 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4748 */;

require = fn;
function DoubleTapToReactChatInputBannerInner(emoji) {
  emoji = emoji.emoji;
  const tmp = closure_13();
  const items = [AccessibilityStore];
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
  const items1 = [React7(EmojiDefault, obj4), React7(Text_Text.Text, { variant: "heading-xl/semibold", color: "interactive-text-default", children: "1" })];
  obj3.children = items1;
  const items2 = [closure_1_10(View, obj3), , ];
  const obj6 = { style: tmp.text, children: null };
  const obj7 = { style: tmp.header, children: null };
  const obj8 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
  const intl = util.intl;
  obj8.children = intl.string(util.t["6RUX7d"]);
  const items3 = [React7(Text_Text.Text, obj8), React7(renderChannelBadge.NewBadge, {})];
  obj7.children = items3;
  const items4 = [closure_1_10(View, obj7), ];
  const obj9 = { variant: "text-xs/medium", color: "text-default", children: null };
  const intl2 = util.intl;
  obj9.children = intl2.format(util.t["5/l2rR"], {
    emojiName: emoji.name,
    emojiNameHook(children, arg1) {
      return closure_1_9(Text_Text.Text, { variant: "text-xs/bold", color: "text-strong", children }, arg1);
    },
    tapHereHook(children, arg1) {
      return closure_1_9(Text_Text.Text, { variant: "text-xs/medium", color: "text-brand", children }, arg1);
    }
  });
  items4[1] = React7(Text_Text.Text, obj9);
  obj6.children = items4;
  items2[1] = closure_1_10(View, obj6);
  const obj11 = { hitSlop: 8, accessibilityRole: "button", accessibilityLabel: null, onPress: null, style: null, children: null };
  const intl3 = util.intl;
  obj11.accessibilityLabel = intl3.string(util.t.cpT0Cq);
  obj11.onPress = emoji.handleDismissBanner;
  obj11.style = tmp.closeButton;
  obj11.children = React7(XSmallIcon.XSmallIcon, { size: "sm", color: "icon-subtle" });
  items2[2] = React7(Pressables.PressableOpacity, obj11);
  obj2.children = items2;
  return closure_1_10(View, obj2);
}
function DoubleTapToReactChatInputBannerAnimationContainer(channel) {
  channel = channel.channel;
  const emoji = channel.emoji;
  const markAsDismissed = channel.markAsDismissed;
  let first;
  noop = undefined;
  let first1;
  const tmp = closure_13();
  let tmp2 = first(noop.useState(82), 2);
  first = tmp2[0];
  noop = tmp2[1];
  const items = [first1];
  const stateFromStores = channel(markAsDismissed[10]).useStateFromStores(items, () => first1.useReducedMotion);
  let tmp5 = first(noop.useState(false), 2);
  first1 = tmp5[0];
  closure_7 = tmp5[1];
  let obj2 = { type: null, name: null };
  let obj = channel(markAsDismissed[10]);
  obj2.type = channel(markAsDismissed[19]).ImpressionTypes.VIEW;
  obj2.name = channel(markAsDismissed[19]).ImpressionNames.DOUBLE_TAP_REACT_UPSELL;
  emoji(markAsDismissed[18])(obj2);
  const tmp7 = emoji(markAsDismissed[18]);
  const sharedValue = channel(markAsDismissed[20]).useSharedValue(0);
  const items1 = [sharedValue, first, first1];
  const effect = noop.useEffect(() => {
    if (first1) {
      const result = set(0);
    } else {
      const result1 = set(first);
    }
  }, items1);
  let obj3 = channel(markAsDismissed[20]);
  const fn = function v() {
    const obj = { height: null };
    if (stateFromStores) {
      obj.height = sharedValue.get();
      let tmp5 = obj;
    } else {
      const obj2 = ReanimatedRexport;
      const obj4 = { duration: 300, easing: null };
      value = sharedValue.get();
      obj4.easing = native.DECELERATED_EASING;
      obj.height = obj2.withDelay(200, timing.withTiming(value, obj4));
      tmp5 = obj;
    }
    return tmp5;
  };
  let obj4 = channel(markAsDismissed[20]);
  fn.__closure = { useReducedMotion: stateFromStores, height: sharedValue, withDelay: channel(markAsDismissed[20]).withDelay, withTiming: channel(markAsDismissed[21]).withTiming, DECELERATED_EASING: channel(markAsDismissed[22]).DECELERATED_EASING };
  fn.__workletHash = 14971794499123;
  fn.__initData = __initData;
  const animatedStyle = obj4.useAnimatedStyle(fn);
  const items2 = [emoji, markAsDismissed];
  const callback = noop.useCallback((nativeEvent) => {
    closure_4(nativeEvent.nativeEvent.layout.height);
  }, []);
  const items3 = [markAsDismissed];
  const callback1 = noop.useCallback(() => {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(12633, dependencyMap.paths), "DoubleTapToReactActionSheet", { emoji });
    markAsDismissed(ContentDismissActionType.TAKE_ACTION);
  }, items2);
  const callback2 = noop.useCallback(() => {
    constants(true);
    const timerId = setTimeout(() => {
      markAsDismissed(constants.USER_DISMISS);
    }, 500);
  }, items3);
  const tmp15 = emoji(markAsDismissed[26])(channel.id);
  closure_9 = tmp15;
  const items4 = [tmp15, channel.id, markAsDismissed];
  const effect1 = noop.useEffect(() => {
    let tmp2 = null != closure_9;
    if (tmp2) {
      tmp2 = tmp !== channel.id;
    }
    if (tmp2) {
      markAsDismissed(ContentDismissActionType.AUTO_DISMISS);
    }
  }, items4);
  const obj5 = { useReducedMotion: stateFromStores, height: sharedValue, withDelay: channel(markAsDismissed[20]).withDelay, withTiming: channel(markAsDismissed[21]).withTiming, DECELERATED_EASING: channel(markAsDismissed[22]).DECELERATED_EASING };
  const unmountEffect = channel(markAsDismissed[27]).useUnmountEffect(() => {
    markAsDismissed(ContentDismissActionType.AUTO_DISMISS);
  });
  const obj7 = { children: null };
  const obj6 = channel(markAsDismissed[27]);
  const items5 = [closure_9(stateFromStores, { style: tmp.measurement, onLayout: callback, children: closure_9(DoubleTapToReactChatInputBannerInner, { emoji, handleDismissBanner: callback2 }) }), ];
  const obj9 = { style: null, children: null };
  const items6 = [animatedStyle, tmp.animatedContainer];
  obj9.style = items6;
  const obj8 = { style: tmp.measurement, onLayout: callback, children: closure_9(DoubleTapToReactChatInputBannerInner, { emoji, handleDismissBanner: callback2 }) };
  obj9.children = closure_9(channel(markAsDismissed[28]).AnimatedPressableHighlight, { onPress: callback1, style: tmp.highlight, androidRippleConfig, children: closure_9(DoubleTapToReactChatInputBannerInner, { emoji, handleDismissBanner: callback2 }) });
  items5[1] = closure_9(emoji(markAsDismissed[20]).View, obj9);
  obj7.children = items5;
  return closure_10(closure_11, obj7);
}
const View = fn(17).View;
const ContentDismissActionType = fn(2038).ContentDismissActionType;
const EMOJI_URL_BASE_SIZE = fn(1375).EMOJI_URL_BASE_SIZE;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10, Fragment: closure_11 } = jsxProd);
const androidRippleConfig = { cornerRadius: 0 };
const createStyles = fn(4756);
let obj2 = { animatedContainer: { borderTopWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH }, measurement: { opacity: 0, position: "absolute" }, container: { display: "flex", flexDirection: "row", alignItems: "center", padding: 12 }, highlight: null, text: null, emojiContainer: null, emoji: null, textEmoji: null, header: null, closeButton: null };
let obj3 = { borderTopWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj2.highlight = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj2.text = { marginHorizontal: 12, flex: 1 };
let obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj2.emojiContainer = { borderWidth: 2, borderColor: nativeDefault.colors.BORDER_STRONG, backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT, borderRadius: nativeDefault.radii.md, flexDirection: "row", gap: 8, alignItems: "center", justifyContent: "center", padding: 12 };
obj2.emoji = { width: 28, height: 28 };
let PlatformUtils = fn(1364);
let num = 22;
if (PlatformUtils.isIOS()) {
  num = 28;
}
let obj7 = { fontSize: num, textAlign: "center", lineHeight: null, color: null };
PlatformUtils = fn(1364);
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
const __initData = { code: "function DoubleTapToReactChatInputBannerTsx1(){const{useReducedMotion,height,withDelay,withTiming,DECELERATED_EASING}=this.__closure;if(useReducedMotion){return{height:height.get()};}return{height:withDelay(200,withTiming(height.get(),{duration:300,easing:DECELERATED_EASING}))};}" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/double_tap_to_react/native/DoubleTapToReactChatInputBanner.tsx");

export const DoubleTapToReactChatInputBanner = function DoubleTapToReactChatInputBanner(channel) {
  channel = channel.channel;
  let memo1;
  const DoubleTapReactionEmoji = channel(memo1[29]).DoubleTapReactionEmoji;
  const setting = DoubleTapReactionEmoji.useSetting();
  const items = [channel, setting];
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
          tmp = React7(DoubleTapToReactChatInputBannerAnimationContainer, obj);
        }
        return tmp;
      };
      tmp7 = closure_9(setting(tmp2[32]), obj);
      const tmp10 = setting(tmp2[32]);
    }
    tmp6 = tmp7;
  }
  return tmp6;
};