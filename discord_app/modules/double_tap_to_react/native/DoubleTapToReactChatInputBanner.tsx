// === Module 11457: DoubleTapToReactChatInputBannerInner ===

// Module 11457 (DoubleTapToReactChatInputBannerInner)
import SelectedDismissibleContent from "SelectedDismissibleContent";
import encodeProperties from "encodeProperties";
import { View } from "XSmallIcon";
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import { ContentDismissActionType } from "ContentDismissActionType";
import { EMOJI_URL_BASE_SIZE } from "set";
import jsxProd from "CONFIG_NEVER_ANIMATE_TIMING";
import createCacheKey from "createCacheKey";
import set from "set";
import set from "set";
import set from "get ActivityIndicator";

let c10;
let c9;
let unpackModuleId;
const require = arg1;
function DoubleTapToReactChatInputBannerInner(emoji) {
  emoji = emoji.emoji;
  const tmp = createCacheKey();
  let obj = require(647) /* defaultAreStatesEqual */;
  const items = [maybeApplyNoTextColorForLightCustomTheme];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  obj = { style: tmp.container, children: null };
  obj = { style: tmp.emojiContainer, children: null };
  const obj1 = { style: tmp.emoji, fastImageStyle: tmp.emoji, textEmojiStyle: tmp.textEmoji, name: null, src: null };
  let str = "";
  if (null == emoji.id) {
    str = emoji.surrogates;
  }
  obj1[3] = str;
  if (null != emoji.id) {
    const obj2 = { id: null, animated: null, size: null };
    obj2[0] = emoji.id;
    let animated = !stateFromStores;
    if (!stateFromStores) {
      animated = emoji.animated;
    }
    obj2[1] = animated;
    obj2[2] = EMOJI_URL_BASE_SIZE;
    let url = importDefault(1416).getEmojiURL(obj2);
    const tmp8Result = importDefault(1416);
  } else {
    url = emoji.url;
  }
  obj1[4] = url;
  const items1 = [closure_9(importDefault(5210), obj1), closure_9(require(4189) /* Text */.Text, { variant: "heading-xl/semibold", color: "interactive-text-default", children: "1" })];
  obj[1] = items1;
  const items2 = [closure_10(View, obj), , ];
  const obj3 = { style: tmp.text, children: null };
  const obj4 = { style: tmp.header, children: null };
  const obj5 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
  const intl = tmp2(1236).intl;
  obj5[2] = intl.string(require(1236) /* getSystemLocale */.t["6RUX7d"]);
  const items3 = [closure_9(require(4189) /* Text */.Text, obj5), closure_9(require(11458) /* renderChannelBadge */.NewBadge, {})];
  obj4[1] = items3;
  const items4 = [closure_10(View, obj4), ];
  const obj6 = { variant: "text-xs/medium", color: "text-default", children: null };
  const intl2 = tmp2(1236).intl;
  obj6[2] = intl2.format(require(1236) /* getSystemLocale */.t["5/l2rR"], {
    emojiName: emoji.name,
    emojiNameHook(children) {
      return callback2(callback(4189).Text, { variant: "text-xs/bold", color: "text-strong", children }, arg1);
    },
    tapHereHook(children) {
      return callback2(callback(4189).Text, { variant: "text-xs/medium", color: "text-brand", children }, arg1);
    }
  });
  items4[1] = closure_9(require(4189) /* Text */.Text, obj6);
  obj3[1] = items4;
  items2[1] = closure_10(View, obj3);
  const obj8 = { hitSlop: 8, accessibilityRole: "button", accessibilityLabel: null, onPress: null, style: null, children: null };
  const intl3 = tmp2(1236).intl;
  obj8[2] = intl3.string(require(1236) /* getSystemLocale */.t.cpT0Cq);
  obj8[3] = emoji.handleDismissBanner;
  obj8[4] = tmp.closeButton;
  obj8[5] = closure_9(require(5179) /* XSmallIcon */.XSmallIcon, { size: "sm", color: "icon-subtle" });
  items2[2] = closure_9(require(4721) /* PressableBase */.PressableOpacity, obj8);
  obj[1] = items2;
  return closure_10(View, obj);
}
function DoubleTapToReactChatInputBannerAnimationContainer(channel) {
  channel = channel.channel;
  const emoji = channel.emoji;
  const markAsDismissed = channel.markAsDismissed;
  let first;
  let React;
  let stateFromStores;
  let first1;
  let closure_7;
  let sharedValue;
  let callback;
  const tmp = createCacheKey();
  let tmp2 = first(React.useState(82), 2);
  first = tmp2[0];
  React = tmp2[1];
  let obj = channel(markAsDismissed[10]);
  const items = [first1];
  stateFromStores = obj.useStateFromStores(items, () => first1.useReducedMotion);
  let tmp5 = first(React.useState(false), 2);
  first1 = tmp5[0];
  closure_7 = tmp5[1];
  obj = { type: null, name: null };
  obj[0] = channel(markAsDismissed[19]).ImpressionTypes.VIEW;
  obj[1] = channel(markAsDismissed[19]).ImpressionNames.DOUBLE_TAP_REACT_UPSELL;
  emoji(markAsDismissed[18])(obj);
  let obj2 = channel(markAsDismissed[20]);
  sharedValue = obj2.useSharedValue(0);
  const items1 = [sharedValue, first, first1];
  const effect = React.useEffect(() => {
    if (first1) {
      const result = set(0);
    } else {
      const result1 = set(first);
    }
  }, items1);
  let obj3 = channel(markAsDismissed[20]);
  const fn = function v() {
    let obj = { height: null };
    if (stateFromStores) {
      obj[0] = sharedValue.get();
      let tmp5 = obj;
    } else {
      const obj2 = channel(markAsDismissed[20]);
      obj = { duration: 300, easing: null };
      const value = sharedValue.get();
      obj[1] = channel(markAsDismissed[22]).DECELERATED_EASING;
      obj[0] = obj2.withDelay(200, channel(markAsDismissed[21]).withTiming(value, obj));
      tmp5 = obj;
      const obj3 = channel(markAsDismissed[21]);
    }
    return tmp5;
  };
  obj = { useReducedMotion: stateFromStores, height: sharedValue, withDelay: channel(markAsDismissed[20]).withDelay, withTiming: channel(markAsDismissed[21]).withTiming, DECELERATED_EASING: channel(markAsDismissed[22]).DECELERATED_EASING };
  fn.__closure = obj;
  fn.__workletHash = 14971794499123;
  fn.__initData = closure_15;
  const animatedStyle = obj3.useAnimatedStyle(fn);
  const items2 = [emoji, markAsDismissed];
  callback = React.useCallback((nativeEvent) => {
    callback(nativeEvent.nativeEvent.layout.height);
  }, []);
  const items3 = [markAsDismissed];
  const callback1 = React.useCallback(() => {
    let obj = emoji(markAsDismissed[23]);
    obj = { emoji };
    obj.openLazy(channel(markAsDismissed[25])(markAsDismissed[24], markAsDismissed.paths), "DoubleTapToReactActionSheet", obj);
    markAsDismissed(lib.TAKE_ACTION);
  }, items2);
  const callback2 = React.useCallback(() => {
    lib(true);
    const timerId = setTimeout(() => {
      callback(outer1_7.USER_DISMISS);
    }, 500);
  }, items3);
  const tmp15 = emoji(markAsDismissed[26])(channel.id);
  callback = tmp15;
  const items4 = [tmp15, channel.id, markAsDismissed];
  const effect1 = React.useEffect(() => {
    let tmp2 = null != c9;
    if (tmp2) {
      tmp2 = tmp !== channel.id;
    }
    if (tmp2) {
      markAsDismissed(lib.AUTO_DISMISS);
    }
  }, items4);
  const tmp7 = emoji(markAsDismissed[18]);
  const unmountEffect = channel(markAsDismissed[27]).useUnmountEffect(() => {
    markAsDismissed(lib.AUTO_DISMISS);
  });
  const obj1 = { children: null };
  obj2 = { style: tmp.measurement, onLayout: callback, children: callback(DoubleTapToReactChatInputBannerInner, { emoji, handleDismissBanner: callback2 }) };
  const items5 = [callback(stateFromStores, obj2), ];
  obj3 = { style: items6, children: null };
  items6 = [animatedStyle, tmp.animatedContainer];
  const obj4 = { onPress: callback1, style: tmp.highlight, androidRippleConfig: closure_12, children: null };
  obj4[3] = callback(DoubleTapToReactChatInputBannerInner, { emoji, handleDismissBanner: callback2 });
  obj3[1] = callback(channel(markAsDismissed[28]).AnimatedPressableHighlight, obj4);
  items5[1] = callback(emoji(markAsDismissed[20]).View, obj3);
  obj1[0] = items5;
  return callback2(closure_11, obj1);
}
({ jsx: c9, jsxs: c10, Fragment: unpackModuleId } = jsxProd);
let closure_12 = { cornerRadius: 0 };
createCacheKey = { animatedContainer: null, measurement: null, container: null, highlight: null, text: null, emojiContainer: null, emoji: null, textEmoji: null, header: null, closeButton: null };
createCacheKey = { borderTopWidth: 1, borderColor: require("Themes").colors.BORDER_SUBTLE, overflow: "hidden", backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { opacity: 0, position: "absolute" };
createCacheKey[2] = { display: "flex", flexDirection: "row", alignItems: "center", padding: 12 };
createCacheKey[3] = { backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH };
createCacheKey[4] = { marginHorizontal: 12, flex: 1 };
let obj1 = { backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH };
createCacheKey[5] = { borderWidth: 2, borderColor: require("Themes").colors.BORDER_STRONG, backgroundColor: require("Themes").colors.CARD_BACKGROUND_DEFAULT, borderRadius: require("Themes").radii.md, flexDirection: "row", gap: 8, alignItems: "center", justifyContent: "center", padding: 12 };
createCacheKey[6] = { width: 28, height: 28 };
let num = 22;
if (set.isIOS()) {
  num = 28;
}
let obj3 = { fontSize: num, textAlign: "center", lineHeight: null, color: null };
let num2;
if (set.isIOS()) {
  num2 = 32;
}
obj3[2] = num2;
obj3[3] = require("Themes").colors.INTERACTIVE_TEXT_DEFAULT;
createCacheKey[7] = obj3;
createCacheKey[8] = { flexDirection: "row", alignItems: "center", gap: 6 };
createCacheKey[9] = { alignSelf: "flex-start" };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let closure_15 = { code: "function DoubleTapToReactChatInputBannerTsx1(){const{useReducedMotion,height,withDelay,withTiming,DECELERATED_EASING}=this.__closure;if(useReducedMotion){return{height:height.get()};}return{height:withDelay(200,withTiming(height.get(),{duration:300,easing:DECELERATED_EASING}))};}" };
let result = set.fileFinishedImporting("modules/double_tap_to_react/native/DoubleTapToReactChatInputBanner.tsx");

export const DoubleTapToReactChatInputBanner = function DoubleTapToReactChatInputBanner(channel) {
  channel = channel.channel;
  let setting;
  let memo1;
  const DoubleTapReactionEmoji = channel(memo1[29]).DoubleTapReactionEmoji;
  setting = DoubleTapReactionEmoji.useSetting();
  const items = [channel, setting];
  const memo = React.useMemo(() => {
    let emojiId;
    let emojiName;
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
          tmp7 = setting(memo1[30])(tmp6);
        }
        tmp5 = tmp7;
      }
      tmp = tmp5;
    }
    return tmp;
  }, items);
  memo1 = React.useMemo(() => channel(memo1[31]).getFallbackDoubleTapDisambiguatedEmoji(), []);
  let tmp6 = null;
  if (null != memo1) {
    let tmp7 = null;
    if (memo) {
      let obj = { contentTypes: null, bypassAutoDismiss: true, children: null };
      const items1 = [channel(tmp2[33]).DismissibleContent.DOUBLE_TAP_TO_REACT_EXPANDED_UPSELL];
      obj[0] = items1;
      obj[2] = function children(arg0) {
        let markAsDismissed;
        let visibleContent;
        ({ visibleContent, markAsDismissed } = arg0);
        let tmp = null;
        if (visibleContent === channel(memo1[33]).DismissibleContent.DOUBLE_TAP_TO_REACT_EXPANDED_UPSELL) {
          const obj = { channel: null, emoji: null, markAsDismissed: null };
          obj[0] = channel;
          obj[1] = memo1;
          obj[2] = markAsDismissed;
          tmp = outer1_9(outer1_16, obj);
        }
        return tmp;
      };
      tmp7 = callback(setting(tmp2[32]), obj);
      const tmp10 = setting(tmp2[32]);
    }
    tmp6 = tmp7;
  }
  return tmp6;
};