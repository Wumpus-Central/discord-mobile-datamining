// === Module 11932: DoubleTapToReactChatInputBanner ===

// Module 11932 (DoubleTapToReactChatInputBanner)
import react_native from "react-native" /* 17 */;
import useStateFromStores from "useStateFromStores" /* 573 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl4 from "intl" /* 1126 */;
import native from "native" /* 1188 */;
import EmojiConstants from "EmojiConstants" /* 1380 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1402 */;
import asyncRequire from "asyncRequire" /* 1987 */;
import dismissible_content from "dismissible_content" /* 2036 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2048 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4618 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4860 */;
import Text_Text from "Text/Text" /* 4892 */;
import timing from "timing" /* 4897 */;
import Pressables from "Pressables" /* 5916 */;
import XSmallIcon from "XSmallIcon" /* 6024 */;
import EmojiDefault from "Emoji" /* 6632 */;
import canAddNewReactionsDefault from "canAddNewReactions" /* 7641 */;
import _mod11933 from "module_11933" /* 11933 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4885 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import PlatformUtils_mod from "PlatformUtils" /* 1369 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let c10;
let c9;
let num2;
let obj2;
let obj3;
let obj4;
let obj5;
let unpackModuleId;
function DoubleTapToReactChatInputBannerAnimationContainer(channel) {
  let AnimatedPressableHighlight;
  let closure_4;
  let items5;
  let items6;
  let obj10;
  channel = channel.channel;
  const emoji = channel.emoji;
  const markAsDismissed = channel.markAsDismissed;
  let first;
  react = undefined;
  let first1;
  let closure_9;
  const tmp = closure_13();
  let tmp2 = first(react.useState(82), 2);
  first = tmp2[0];
  react = tmp2[1];
  let obj = channel(markAsDismissed[12]);
  const items = [first1];
  const stateFromStores = obj.useStateFromStores(items, () => first1.useReducedMotion);
  const tmp5 = first(react.useState(false), 2);
  first1 = tmp5[0];
  let closure_7 = tmp5[1];
  let obj2 = { type: channel(markAsDismissed[21]).ImpressionTypes.VIEW, name: channel(markAsDismissed[21]).ImpressionNames.DOUBLE_TAP_REACT_UPSELL };
  let tmp7 = emoji(markAsDismissed[20]);
  tmp7(obj2);
  const obj3 = channel(markAsDismissed[22]);
  const sharedValue = obj3.useSharedValue(0);
  const items1 = [sharedValue, first, first1];
  const effect = react.useEffect(() => {
    if (first1) {
      const result = set(0);
    } else {
      const result1 = set(first);
    }
  }, items1);
  const obj4 = channel(markAsDismissed[22]);
  class U {
    constructor() {
      let tmp7;
      const obj = { height: null };
      if (stateFromStores) {
        obj.height = sharedValue.get();
        tmp7 = obj;
      } else {
        const withDelay = ReanimatedRexport.withDelay;
        ReanimatedRexport;
        const withTiming = timing.withTiming;
        const obj2 = { duration: 300, easing: native.DECELERATED_EASING };
        timing;
        const value = sharedValue.get();
        obj.height = withDelay(200, withTiming(value, obj2));
        tmp7 = obj;
      }
      return tmp7;
    }
  }
  U.__closure = { useReducedMotion: stateFromStores, height: sharedValue, withDelay: channel(markAsDismissed[22]).withDelay, withTiming: channel(markAsDismissed[23]).withTiming, DECELERATED_EASING: channel(markAsDismissed[24]).DECELERATED_EASING };
  U.__workletHash = 14971794499123;
  U.__initData = __initData;
  ({ useReducedMotion: stateFromStores, height: sharedValue, withDelay: channel(markAsDismissed[22]).withDelay, withTiming: channel(markAsDismissed[23]).withTiming, DECELERATED_EASING: channel(markAsDismissed[24]).DECELERATED_EASING });
  const animatedStyle = obj4.useAnimatedStyle(U);
  const items2 = [emoji, markAsDismissed];
  const callback = react.useCallback((nativeEvent) => {
    closure_4(nativeEvent.nativeEvent.layout.height);
  }, []);
  const items3 = [markAsDismissed];
  const callback1 = react.useCallback(() => {
    const obj = ActionSheetActionCreatorsDefault;
    const obj2 = { emoji };
    obj.openLazy(asyncRequire(12034, dependencyMap.paths), "DoubleTapToReactActionSheet", obj2);
    markAsDismissed(ContentDismissActionType.TAKE_ACTION);
  }, items2);
  const callback2 = react.useCallback(() => {
    constants(true);
    const timerId = setTimeout(() => {
      markAsDismissed(constants.USER_DISMISS);
    }, 500);
  }, items3);
  const tmp15 = emoji(markAsDismissed[28])(channel.id);
  closure_9 = tmp15;
  const items4 = [tmp15, channel.id, markAsDismissed];
  const effect1 = react.useEffect(() => {
    const tmp2 = null != closure_9 && tmp !== channel.id;
    if (tmp2) {
      markAsDismissed(ContentDismissActionType.AUTO_DISMISS);
    }
  }, items4);
  const obj6 = channel(markAsDismissed[29]);
  const unmountEffect = obj6.useUnmountEffect(() => {
    markAsDismissed(ContentDismissActionType.AUTO_DISMISS);
  });
  const obj7 = { children: items5 };
  items5 = [, ];
  const obj8 = { style: tmp.measurement, onLayout: callback, children: closure_9(closure_14, { emoji, handleDismissBanner: callback2 }) };
  items5[0] = closure_9(stateFromStores, obj8);
  const obj9 = { style: items6, children: closure_9(AnimatedPressableHighlight, obj10) };
  items6 = [animatedStyle, tmp.animatedContainer];
  View = emoji(markAsDismissed[22]).View;
  obj10 = { onPress: callback1, style: tmp.highlight, androidRippleConfig, children: closure_9(closure_14, { emoji, handleDismissBanner: callback2 }) };
  AnimatedPressableHighlight = channel(markAsDismissed[30]).AnimatedPressableHighlight;
  items5[1] = closure_9(View, obj9);
  return closure_10(closure_11, obj7);
}
let react = react_mod;
let View = react_native.View;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
const EMOJI_URL_BASE_SIZE = EmojiConstants.EMOJI_URL_BASE_SIZE;
({ jsx: c9, jsxs: c10, Fragment: unpackModuleId } = Fragment);
const androidRippleConfig = { cornerRadius: 0 };
let createStyles = createStyles_mod;
let obj = { animatedContainer: obj2, measurement: { opacity: 0, position: "absolute" }, container: { display: "flex", flexDirection: "row", alignItems: "center", padding: 12 }, highlight: obj3, text: { marginHorizontal: 12, flex: 1 }, emojiContainer: obj4, emoji: { width: 28, height: 28 }, textEmoji: obj5, header: { flexDirection: "row", alignItems: "center", gap: 6 }, closeButton: { alignSelf: "flex-start" } };
obj2 = { borderTopWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj4 = { borderWidth: 2, borderColor: nativeDefault.colors.BORDER_STRONG, backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT, borderRadius: nativeDefault.radii.md, flexDirection: "row", gap: 8, alignItems: "center", justifyContent: "center", padding: 12 };
let PlatformUtils = PlatformUtils_mod;
let num = 22;
if (PlatformUtils.isIOS()) {
  num = 28;
}
obj5 = { fontSize: num, textAlign: "center", lineHeight: num2, color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
PlatformUtils = PlatformUtils_mod;
num2 = undefined;
if (PlatformUtils.isIOS()) {
  num2 = 32;
}
let closure_13 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let emoji;
  let emojiURL;
  let handleDismissBanner;
  let intl;
  let items1;
  let items2;
  let items3;
  let tmp5;
  let tmp6;
  let useReducedMotion;
  let obj = react2;
  const cResult = obj.c(40);
  ({ emoji, handleDismissBanner } = arg0);
  const tmp4 = closure_13();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    const fn = function s() {
      return useReducedMotion.useReducedMotion;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = useStateFromStores;
  const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  let str = "";
  if (null == emoji.id) {
    str = emoji.surrogates;
  }
  if (cResult[2] === emoji.animated) {
    if (cResult[3] === emoji.id) {
      if (cResult[4] === emoji.url) {
        let tmp9;
        if (cResult[5] === stateFromStores) {
          tmp9 = cResult[6];
        }
        if (cResult[7] === tmp4.emoji) {
          if (cResult[8] === tmp4.textEmoji) {
            if (cResult[9] === str) {
              let tmp14;
              let tmp18;
              if (cResult[10] === tmp9) {
                tmp14 = cResult[11];
              }
              const _Symbol = Symbol;
              if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
                const tmp20 = React4(Text_Text.Text, { variant: "heading-xl/semibold", color: "interactive-text-default", children: "1" });
                cResult[12] = tmp20;
                tmp18 = tmp20;
              } else {
                tmp18 = cResult[12];
              }
              if (cResult[13] === tmp4.emojiContainer) {
                let tmp26;
                let tmp25;
                let tmp30;
                const _Symbol2 = Symbol;
                const text = tmp4.text;
                if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
                  const obj2 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: intl.string(intl4.t["6RUX7d"]) };
                  const Text = Text_Text.Text;
                  intl = intl4.intl;
                  const tmp28 = React4(Text, obj2);
                  const tmp29 = React4(_mod11933.NewBadge, {});
                  cResult[16] = tmp28;
                  cResult[17] = tmp29;
                  tmp26 = tmp29;
                  tmp25 = tmp28;
                } else {
                  tmp25 = cResult[16];
                  tmp26 = cResult[17];
                }
                if (cResult[18] !== tmp4.header) {
                  const obj3 = { style: tmp4.header, children: items1 };
                  items1 = [tmp25, tmp26];
                  const tmp33 = authStore(View, obj3);
                  cResult[18] = tmp4.header;
                  cResult[19] = tmp33;
                  tmp30 = tmp33;
                } else {
                  tmp30 = cResult[19];
                }
                if (cResult[20] !== emoji.name) {
                  const _Symbol3 = Symbol;
                  if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
                    class L {
                      constructor(children, arg1) {
                        const obj = { variant: "text-xs/bold", color: "text-strong", children };
                        return closure_1_9(require("Text/Text").Text, obj, arg1);
                      }
                    }
                    class B {
                      constructor(children, arg1) {
                        const obj = { variant: "text-xs/medium", color: "text-brand", children };
                        return closure_1_9(require("Text/Text").Text, obj, arg1);
                      }
                    }
                    cResult[22] = L;
                    cResult[23] = B;
                  } else {
                    class L {
                      constructor(children, arg1) {
                        const obj = { variant: "text-xs/bold", color: "text-strong", children };
                        return closure_1_9(require("Text/Text").Text, obj, arg1);
                      }
                    }
                    class B {
                      constructor(children, arg1) {
                        const obj = { variant: "text-xs/medium", color: "text-brand", children };
                        return closure_1_9(require("Text/Text").Text, obj, arg1);
                      }
                    }
                  }
                  const intl2 = intl4.intl;
                  const obj5 = { emojiName: emoji.name, emojiNameHook: L, tapHereHook: B };
                  cResult[20] = emoji.name;
                  cResult[21] = intl2.format(intl4.t["5/l2rR"], obj5);
                  const formatResult = intl2.format(intl4.t["5/l2rR"], obj5);
                } else {
                  class L {
                    constructor(children, arg1) {
                      const obj = { variant: "text-xs/bold", color: "text-strong", children };
                      return closure_1_9(require("Text/Text").Text, obj, arg1);
                    }
                  }
                }
                if (cResult[24] !== tmp34) {
                  class L {
                    constructor(children, arg1) {
                      const obj = { variant: "text-xs/bold", color: "text-strong", children };
                      return closure_1_9(require("Text/Text").Text, obj, arg1);
                    }
                  }
                  class B {
                    constructor(children, arg1) {
                      const obj = { variant: "text-xs/medium", color: "text-brand", children };
                      return closure_1_9(require("Text/Text").Text, obj, arg1);
                    }
                  }
                  tmp39[2] = tmp34;
                  cResult[24] = tmp34;
                  cResult[25] = React4(Text_Text.Text, tmp39);
                  const tmp40 = React4(Text_Text.Text, tmp39);
                } else {
                  class L {
                    constructor(children, arg1) {
                      const obj = { variant: "text-xs/bold", color: "text-strong", children };
                      return closure_1_9(require("Text/Text").Text, obj, arg1);
                    }
                  }
                }
                if (cResult[26] === tmp4.text) {
                  class L {
                    constructor(children, arg1) {
                      const obj = { variant: "text-xs/bold", color: "text-strong", children };
                      return closure_1_9(require("Text/Text").Text, obj, arg1);
                    }
                  }
                }
                const obj6 = { style: text, children: items2 };
                items2 = [tmp30, tmp38];
                cResult[26] = tmp4.text;
                cResult[27] = tmp30;
                cResult[28] = tmp38;
                cResult[29] = authStore(View, obj6);
                const tmp44 = authStore(View, obj6);
              }
              const obj7 = { style: tmp4.emojiContainer, children: items3 };
              items3 = [tmp14, tmp18];
              cResult[13] = tmp4.emojiContainer;
              cResult[14] = tmp14;
              cResult[15] = authStore(View, obj7);
              const tmp24 = authStore(View, obj7);
            }
          }
        }
        const obj8 = { style: null, fastImageStyle: null, textEmojiStyle: null, name: str, src: tmp9 };
        ({ emoji: obj4.style, emoji: obj4.fastImageStyle, textEmoji: obj4.textEmojiStyle } = tmp4);
        const tmp17 = React4(EmojiDefault, obj8);
        cResult[7] = tmp4.emoji;
        cResult[8] = tmp4.textEmoji;
        cResult[9] = str;
        cResult[10] = tmp9;
        cResult[11] = tmp17;
        tmp14 = tmp17;
      }
    }
  }
  if (null != emoji.id) {
    class L {
      constructor(children, arg1) {
        const obj = { variant: "text-xs/bold", color: "text-strong", children };
        return closure_1_9(require("Text/Text").Text, obj, arg1);
      }
    }
    class B {
      constructor(children, arg1) {
        const obj = { variant: "text-xs/medium", color: "text-brand", children };
        return closure_1_9(require("Text/Text").Text, obj, arg1);
      }
    }
    const getEmojiURL = tmp11.getEmojiURL;
    const obj9 = { id: emoji.id, animated: tmp12, size: EMOJI_URL_BASE_SIZE };
    if (!stateFromStores) {
      class L {
        constructor(children, arg1) {
          const obj = { variant: "text-xs/bold", color: "text-strong", children };
          return closure_1_9(require("Text/Text").Text, obj, arg1);
        }
      }
    }
    emojiURL = getEmojiURL(obj9);
  } else {
    class L {
      constructor(children, arg1) {
        const obj = { variant: "text-xs/bold", color: "text-strong", children };
        return closure_1_9(require("Text/Text").Text, obj, arg1);
      }
    }
  }
  cResult[2] = emoji.animated;
  cResult[3] = emoji.id;
  cResult[4] = emoji.url;
  cResult[5] = stateFromStores;
  cResult[6] = emojiURL;
  tmp9 = emojiURL;
}) : ((emoji) => {
  let animated;
  let intl;
  let intl2;
  let intl3;
  let items1;
  let items2;
  let items3;
  let items4;
  let obj10;
  let str;
  let url;
  let useReducedMotion;
  emoji = emoji.emoji;
  const handleDismissBanner = emoji.handleDismissBanner;
  const tmp = closure_13();
  let obj = useStateFromStores;
  const items = [AccessibilityStore];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const obj4 = { style: tmp.emoji, fastImageStyle: tmp.emoji, textEmojiStyle: tmp.textEmoji, name: str, src: url };
  str = "";
  const obj2 = { style: tmp.container, children: items2 };
  const obj3 = { style: tmp.emojiContainer, children: items1 };
  const tmp9 = EmojiDefault;
  if (null == emoji.id) {
    str = emoji.surrogates;
  }
  if (null != emoji.id) {
    const obj5 = { id: emoji.id, animated, size: EMOJI_URL_BASE_SIZE };
    animated = !stateFromStores;
    const getEmojiURL = AvatarUtilsDefault.getEmojiURL;
    AvatarUtilsDefault;
    if (!stateFromStores) {
      animated = emoji.animated;
    }
    url = getEmojiURL(obj5);
  } else {
    url = emoji.url;
  }
  items1 = [React4(tmp9, obj4), React4(Text_Text.Text, { variant: "heading-xl/semibold", color: "interactive-text-default", children: "1" })];
  items2 = [authStore(View, obj3), , ];
  const obj6 = { style: tmp.text, children: items4 };
  const obj7 = { style: tmp.header, children: items3 };
  const obj8 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: intl.string(intl4.t["6RUX7d"]) };
  const Text = Text_Text.Text;
  intl = intl4.intl;
  items3 = [React4(Text, obj8), React4(_mod11933.NewBadge, {})];
  items4 = [authStore(View, obj7), ];
  const obj9 = { variant: "text-xs/medium", color: "text-default", children: intl2.format(intl4.t["5/l2rR"], obj10) };
  const Text2 = Text_Text.Text;
  intl2 = intl4.intl;
  obj10 = {
    emojiName: emoji.name,
    emojiNameHook(children, arg1) {
      const obj = { variant: "text-xs/bold", color: "text-strong", children };
      return closure_1_9(require("Text/Text").Text, obj, arg1);
    },
    tapHereHook(children, arg1) {
      const obj = { variant: "text-xs/medium", color: "text-brand", children };
      return closure_1_9(require("Text/Text").Text, obj, arg1);
    }
  };
  items4[1] = React4(Text2, obj9);
  items2[1] = authStore(View, obj6);
  const obj11 = { hitSlop: 8, accessibilityRole: "button", accessibilityLabel: intl3.string(intl4.t.cpT0Cq), onPress: handleDismissBanner, style: tmp.closeButton, children: React4(XSmallIcon.XSmallIcon, { size: "sm", color: "icon-subtle" }) };
  const PressableOpacity = Pressables.PressableOpacity;
  intl3 = intl4.intl;
  items2[2] = React4(PressableOpacity, obj11);
  return authStore(View, obj2);
});
const __initData = { code: "function DoubleTapToReactChatInputBannerTsx1(){const{useReducedMotion,height,withDelay,withTiming,DECELERATED_EASING}=this.__closure;if(useReducedMotion){return{height:height.get()};}return{height:withDelay(200,withTiming(height.get(),{duration:300,easing:DECELERATED_EASING}))};}" };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  let emoji;
  let emojiId;
  let emojiName;
  let tmp = channel;
  let obj = channel(576);
  const cResult = obj.c(4);
  channel = channel.channel;
  const DoubleTapReactionEmoji = channel(2028).DoubleTapReactionEmoji;
  const setting = DoubleTapReactionEmoji.useSetting();
  ({ emojiId, emojiName } = setting);
  let tmp5 = true !== setting.disableDoubleTap;
  if (tmp5) {
    let tmp7 = null != emojiId && "0" !== emojiId;
    if (!tmp7) {
      tmp7 = null != emojiName && "" !== emojiName;
      const tmp8 = null != emojiName && "" !== emojiName;
    }
    let tmp9 = !tmp7;
    if (tmp9) {
      tmp9 = null != channel.lastMessageId && emoji(7641)(channel);
      const tmp10 = null != channel.lastMessageId && emoji(7641)(channel);
    }
    tmp5 = tmp9;
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmpResult = tmp(7638);
    const fallbackDoubleTapDisambiguatedEmoji = tmpResult.getFallbackDoubleTapDisambiguatedEmoji();
    cResult[0] = fallbackDoubleTapDisambiguatedEmoji;
    emoji = fallbackDoubleTapDisambiguatedEmoji;
  } else {
    emoji = cResult[0];
  }
  let tmp14 = null;
  if (null != emoji) {
    let tmp15 = null;
    if (tmp5) {
      let tmp16;
      let tmp17;
      const _Symbol = Symbol;
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [tmp(2036).DismissibleContent.DOUBLE_TAP_TO_REACT_EXPANDED_UPSELL];
        cResult[1] = items;
        tmp16 = items;
      } else {
        tmp16 = cResult[1];
      }
      if (cResult[2] !== channel) {
        const obj2 = {
          contentTypes: tmp16,
          bypassAutoDismiss: true,
          children(arg0) {
                  let markAsDismissed;
                  let visibleContent;
                  ({ visibleContent, markAsDismissed } = arg0);
                  let tmp = null;
                  if (visibleContent === dismissible_content.DismissibleContent.DOUBLE_TAP_TO_REACT_EXPANDED_UPSELL) {
                    const obj = { channel, emoji, markAsDismissed };
                    tmp = React4(DoubleTapToReactChatInputBannerAnimationContainer, obj);
                  }
                  return tmp;
                }
        };
        const tmp20 = closure_9(emoji(10367), obj2);
        cResult[2] = channel;
        cResult[3] = tmp20;
        tmp17 = tmp20;
      } else {
        tmp17 = cResult[3];
      }
      tmp15 = tmp17;
    }
    tmp14 = tmp15;
  }
  return tmp14;
}) : ((channel) => {
  let items1;
  channel = channel.channel;
  let memo1;
  let tmp = channel;
  const DoubleTapReactionEmoji = channel(memo1[31]).DoubleTapReactionEmoji;
  const setting = DoubleTapReactionEmoji.useSetting();
  const items = [channel, setting];
  const memo = react.useMemo(() => {
    let emojiId;
    let emojiName;
    ({ emojiId, emojiName } = setting);
    let tmp = true !== setting.disableDoubleTap;
    if (tmp) {
      let tmp3 = null != emojiId && "0" !== emojiId;
      if (!tmp3) {
        tmp3 = null != emojiName && "" !== emojiName;
        const tmp4 = null != emojiName && "" !== emojiName;
      }
      let tmp5 = !tmp3;
      if (tmp5) {
        tmp5 = null != channel.lastMessageId && canAddNewReactionsDefault(tmp6);
        const tmp7 = null != channel.lastMessageId && canAddNewReactionsDefault(tmp6);
      }
      tmp = tmp5;
    }
    return tmp;
  }, items);
  memo1 = react.useMemo(() => {
    const obj = channel(memo1[33]);
    return obj.getFallbackDoubleTapDisambiguatedEmoji();
  }, []);
  let tmp6 = null;
  if (null != memo1) {
    let tmp7 = null;
    if (memo) {
      let obj = {
        contentTypes: items1,
        bypassAutoDismiss: true,
        children(arg0) {
              let markAsDismissed;
              let visibleContent;
              ({ visibleContent, markAsDismissed } = arg0);
              let tmp = null;
              if (visibleContent === dismissible_content.DismissibleContent.DOUBLE_TAP_TO_REACT_EXPANDED_UPSELL) {
                const obj = { channel, emoji: memo1, markAsDismissed };
                tmp = React4(DoubleTapToReactChatInputBannerAnimationContainer, obj);
              }
              return tmp;
            }
      };
      items1 = [];
      const tmp10 = setting(memo1[35]);
      items1[0] = tmp(memo1[34]).DismissibleContent.DOUBLE_TAP_TO_REACT_EXPANDED_UPSELL;
      tmp7 = closure_9(tmp10, obj);
    }
    tmp6 = tmp7;
  }
  return tmp6;
});
let result = size.fileFinishedImporting("modules/double_tap_to_react/native/DoubleTapToReactChatInputBanner.tsx");

export const DoubleTapToReactChatInputBanner = tmp4;