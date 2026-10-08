// discord_app/modules/double_tap_to_react/native/DoubleTapToReactChatInputBanner.tsx
import useStateFromStores from "../../../../discord_common/js/packages/flux/useStateFromStores.tsx";
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import native from "../../../design/void/native.tsx";
import AvatarUtilsDefault from "../../../utils/AvatarUtils.tsx";
import asyncRequireImpl from "../../../../_runtime/01999_asyncRequireImpl.js";
import dismissible_content from "../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import timing from "../../../design/animation/reanimated/timing/timing.tsx";
import Pressables from "../../../design/void/Pressables/native/Pressables.tsx";
import XSmallIcon from "../../../design/components/Icon/native/redesign/generated/XSmallIcon.tsx";
import EmojiDefault from "../../emojis/native/Emoji.tsx";
import canAddNewReactionsDefault from "../../reactions/canAddNewReactions.tsx";
import renderChannelBadge from "../../channel_list_v2/native/components/index.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";

require = fn;
function DoubleTapToReactChatInputBannerAnimationContainer(channel) {
  channel = channel.channel;
  const emoji = channel.emoji;
  const markAsDismissed = channel.markAsDismissed;
  let first;
  noop = undefined;
  let first1;
  closure_9 = undefined;
  const tmp = closure_13();
  let tmp2 = first(noop.useState(82), 2);
  first = tmp2[0];
  noop = tmp2[1];
  const items = [first1];
  const stateFromStores = channel(markAsDismissed[12]).useStateFromStores(items, () => first1.useReducedMotion);
  let tmp5 = first(noop.useState(false), 2);
  first1 = tmp5[0];
  closure_7 = tmp5[1];
  let obj2 = { type: null, name: null };
  let obj = channel(markAsDismissed[12]);
  obj2.type = channel(markAsDismissed[21]).ImpressionTypes.VIEW;
  obj2.name = channel(markAsDismissed[21]).ImpressionNames.DOUBLE_TAP_REACT_UPSELL;
  emoji(markAsDismissed[20])(obj2);
  const tmp7 = emoji(markAsDismissed[20]);
  const sharedValue = channel(markAsDismissed[22]).useSharedValue(0);
  const items1 = [sharedValue, first, first1];
  const effect = noop.useEffect(() => {
    if (first1) {
      const result = set(0);
    } else {
      const result1 = set(first);
    }
  }, items1);
  let obj3 = channel(markAsDismissed[22]);
  class U {
    constructor() {
      obj = { height: null };
      if (closure_5) {
        tmp6 = closure_8;
        obj.height = closure_8.get();
        tmp5 = obj;
      } else {
        tmp = closure_0;
        tmp2 = closure_2;
        obj2 = closure_0(closure_2[22]);
        obj3 = closure_0(closure_2[23]);
        tmp3 = closure_8;
        obj1 = { duration: 300, easing: null };
        value = closure_8.get();
        obj1.easing = closure_0(closure_2[24]).DECELERATED_EASING;
        num = 200;
        obj.height = obj2.withDelay(200, obj3.withTiming(value, obj1));
        tmp5 = obj;
      }
      return tmp5;
    }
  }
  let obj4 = channel(markAsDismissed[22]);
  U.__closure = {
    useReducedMotion: stateFromStores,
    height: sharedValue,
    withDelay: channel(markAsDismissed[22]).withDelay,
    withTiming: channel(markAsDismissed[23]).withTiming,
    DECELERATED_EASING: channel(markAsDismissed[24]).DECELERATED_EASING,
  };
  U.__workletHash = 14971794499123;
  U.__initData = __initData;
  const animatedStyle = obj4.useAnimatedStyle(U);
  const items2 = [emoji, markAsDismissed];
  const callback = noop.useCallback((nativeEvent) => {
    closure_4(nativeEvent.nativeEvent.layout.height);
  }, []);
  const items3 = [markAsDismissed];
  const callback1 = noop.useCallback(() => {
    ActionSheetActionCreatorsDefault.openLazy(
      asyncRequireImpl(12107, dependencyMap.paths),
      "DoubleTapToReactActionSheet",
      { emoji },
    );
    markAsDismissed(ContentDismissActionType.TAKE_ACTION);
  }, items2);
  const callback2 = noop.useCallback(() => {
    constants(true);
    const timerId = setTimeout(() => {
      markAsDismissed(constants.USER_DISMISS);
    }, 500);
  }, items3);
  const tmp15 = emoji(markAsDismissed[28])(channel.id);
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
  const obj5 = {
    useReducedMotion: stateFromStores,
    height: sharedValue,
    withDelay: channel(markAsDismissed[22]).withDelay,
    withTiming: channel(markAsDismissed[23]).withTiming,
    DECELERATED_EASING: channel(markAsDismissed[24]).DECELERATED_EASING,
  };
  const unmountEffect = channel(markAsDismissed[29]).useUnmountEffect(() => {
    markAsDismissed(ContentDismissActionType.AUTO_DISMISS);
  });
  const obj7 = { children: null };
  const obj6 = channel(markAsDismissed[29]);
  const items5 = [
    closure_9(stateFromStores, {
      style: tmp.measurement,
      onLayout: callback,
      children: closure_9(closure_14, { emoji, handleDismissBanner: callback2 }),
    }),
  ];
  const obj9 = { style: null, children: null };
  const items6 = [animatedStyle, tmp.animatedContainer];
  obj9.style = items6;
  const obj8 = {
    style: tmp.measurement,
    onLayout: callback,
    children: closure_9(closure_14, { emoji, handleDismissBanner: callback2 }),
  };
  obj9.children = closure_9(channel(markAsDismissed[30]).AnimatedPressableHighlight, {
    onPress: callback1,
    style: tmp.highlight,
    androidRippleConfig,
    children: closure_9(closure_14, { emoji, handleDismissBanner: callback2 }),
  });
  items5[1] = closure_9(emoji(markAsDismissed[22]).View, obj9);
  obj7.children = items5;
  return closure_10(closure_11, obj7);
}
const View = fn(17).View;
const ContentDismissActionType = fn(2060).ContentDismissActionType;
const EMOJI_URL_BASE_SIZE = fn(1392).EMOJI_URL_BASE_SIZE;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10, Fragment: closure_11 } = jsxProd);
const androidRippleConfig = { cornerRadius: 0 };
const createStyles = fn(5090);
let obj2 = {
  animatedContainer: {
    borderTopWidth: 1,
    borderColor: nativeDefault.colors.BORDER_SUBTLE,
    overflow: "hidden",
    backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  },
  measurement: { opacity: 0, position: "absolute" },
  container: { display: "flex", flexDirection: "row", alignItems: "center", padding: 12 },
  highlight: null,
  text: null,
  emojiContainer: null,
  emoji: null,
  textEmoji: null,
  header: null,
  closeButton: null,
};
let obj3 = {
  borderTopWidth: 1,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  overflow: "hidden",
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
};
obj2.highlight = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj2.text = { marginHorizontal: 12, flex: 1 };
let obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj2.emojiContainer = {
  borderWidth: 2,
  borderColor: nativeDefault.colors.BORDER_STRONG,
  backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT,
  borderRadius: nativeDefault.radii.md,
  flexDirection: "row",
  gap: 8,
  alignItems: "center",
  justifyContent: "center",
  padding: 12,
};
obj2.emoji = { width: 28, height: 28 };
let PlatformUtils = fn(1381);
let num = 22;
if (PlatformUtils.isIOS()) {
  num = 28;
}
let obj7 = { fontSize: num, textAlign: "center", lineHeight: null, color: null };
PlatformUtils = fn(1381);
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
let ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled()
  ? function DoubleTapToReactChatInputBannerInner(arg0) {
      const cResult = c.c(40);
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
      const stateFromStores = useStateFromStores.useStateFromStores(tmp5, tmp6);
      let str = "";
      if (null == emoji.id) {
        str = emoji.surrogates;
      }
      if (cResult[2] === emoji.animated) {
        if (cResult[3] === emoji.id) {
          if (cResult[4] === emoji.url) {
            if (cResult[5] === stateFromStores) {
              if (cResult[7] === tmp4.emoji) {
                if (cResult[8] === tmp4.textEmoji) {
                  if (cResult[9] === str) {
                    if (cResult[10] === tmp9) {
                      let tmp13 = cResult[11];
                    }
                    const _Symbol = Symbol;
                    if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
                      const tmp19 = options(Text_Text.Text, {
                        variant: "heading-xl/semibold",
                        color: "interactive-text-default",
                        children: "1",
                      });
                      cResult[12] = tmp19;
                      let tmp17 = tmp19;
                    } else {
                      tmp17 = cResult[12];
                    }
                    if (cResult[13] === tmp4.emojiContainer) {
                      const _Symbol2 = Symbol;
                      if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
                        const obj2 = {
                          variant: "text-md/semibold",
                          color: "mobile-text-heading-primary",
                          children: null,
                        };
                        const intl = util.intl;
                        obj2.children = intl.string(util.t["6RUX7d"]);
                        const tmp27 = options(Text_Text.Text, obj2);
                        const tmp28 = options(renderChannelBadge.NewBadge, {});
                        cResult[16] = tmp27;
                        cResult[17] = tmp28;
                        let tmp25 = tmp28;
                        let tmp24 = tmp27;
                      } else {
                        tmp24 = cResult[16];
                        tmp25 = cResult[17];
                      }
                      if (cResult[18] !== tmp4.header) {
                        const obj4 = { style: tmp4.header, children: null };
                        const items1 = [tmp24, tmp25];
                        obj4.children = items1;
                        const tmp32 = collapsed(View, obj4);
                        cResult[18] = tmp4.header;
                        cResult[19] = tmp32;
                        let tmp29 = tmp32;
                      } else {
                        tmp29 = cResult[19];
                      }
                      if (cResult[20] !== emoji.name) {
                        const _Symbol3 = Symbol;
                        if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
                          class B {
                            constructor(arg0, arg1) {
                              obj = { variant: "text-xs/bold", color: "text-strong", children: arg0 };
                              return closure_1_9(closure_1_0(closure_1_2[15]).Text, obj, arg1);
                            }
                          }
                          class L {
                            constructor(arg0, arg1) {
                              obj = { variant: "text-xs/medium", color: "text-brand", children: arg0 };
                              return closure_1_9(closure_1_0(closure_1_2[15]).Text, obj, arg1);
                            }
                          }
                          cResult[22] = B;
                          cResult[23] = L;
                        } else {
                          class B {
                            constructor(arg0, arg1) {
                              obj = { variant: "text-xs/bold", color: "text-strong", children: arg0 };
                              return closure_1_9(closure_1_0(closure_1_2[15]).Text, obj, arg1);
                            }
                          }
                          class L {
                            constructor(arg0, arg1) {
                              obj = { variant: "text-xs/medium", color: "text-brand", children: arg0 };
                              return closure_1_9(closure_1_0(closure_1_2[15]).Text, obj, arg1);
                            }
                          }
                        }
                        const intl2 = util.intl;
                        const obj6 = { emojiName: emoji.name, emojiNameHook: B, tapHereHook: L };
                        const formatResult = intl2.format(util.t["5/l2rR"], obj6);
                        emoji = emoji.name;
                        cResult[20] = emoji;
                        cResult[21] = formatResult;
                      } else {
                        class B {
                          constructor(arg0, arg1) {
                            obj = { variant: "text-xs/bold", color: "text-strong", children: arg0 };
                            return closure_1_9(closure_1_0(closure_1_2[15]).Text, obj, arg1);
                          }
                        }
                        class L {
                          constructor(arg0, arg1) {
                            obj = { variant: "text-xs/medium", color: "text-brand", children: arg0 };
                            return closure_1_9(closure_1_0(closure_1_2[15]).Text, obj, arg1);
                          }
                        }
                        if (cResult[26] === tmp4.text) {
                          class B {
                            constructor(arg0, arg1) {
                              obj = { variant: "text-xs/bold", color: "text-strong", children: arg0 };
                              return closure_1_9(closure_1_0(closure_1_2[15]).Text, obj, arg1);
                            }
                          }
                        }
                        const obj7 = { style: tmp4.text, children: null };
                        const items2 = [tmp29, tmp37];
                        obj7.children = items2;
                        const tmp41 = collapsed(View, obj7);
                        cResult[26] = tmp4.text;
                        cResult[27] = tmp29;
                        cResult[28] = tmp37;
                        cResult[29] = tmp41;
                      }
                    }
                    const obj8 = { style: tmp4.emojiContainer, children: null };
                    const items3 = [tmp13, tmp17];
                    obj8.children = items3;
                    const tmp23 = collapsed(View, obj8);
                    cResult[13] = tmp4.emojiContainer;
                    cResult[14] = tmp13;
                    cResult[15] = tmp23;
                  }
                }
              }
              const obj9 = { style: null, fastImageStyle: null, textEmojiStyle: null, name: null, src: null };
              ({ emoji: obj5.style, emoji: obj5.fastImageStyle, textEmoji: obj5.textEmojiStyle } = tmp4);
              obj9.name = str;
              obj9.src = cResult[6];
              const tmp16 = options(EmojiDefault, obj9);
              cResult[7] = tmp4.emoji;
              cResult[8] = tmp4.textEmoji;
              cResult[9] = str;
              cResult[10] = cResult[6];
              cResult[11] = tmp16;
              tmp13 = tmp16;
            }
          }
        }
      }
      if (null != emoji.id) {
        class B {
          constructor(arg0, arg1) {
            obj = { variant: "text-xs/bold", color: "text-strong", children: arg0 };
            return closure_1_9(closure_1_0(closure_1_2[15]).Text, obj, arg1);
          }
        }
        class L {
          constructor(arg0, arg1) {
            obj = { variant: "text-xs/medium", color: "text-brand", children: arg0 };
            return closure_1_9(closure_1_0(closure_1_2[15]).Text, obj, arg1);
          }
        }
        const obj10 = { id: emoji.id, animated: null, size: null };
        if (!stateFromStores) {
          class B {
            constructor(arg0, arg1) {
              obj = { variant: "text-xs/bold", color: "text-strong", children: arg0 };
              return closure_1_9(closure_1_0(closure_1_2[15]).Text, obj, arg1);
            }
          }
        }
        obj10.animated = !stateFromStores;
        obj10.size = EMOJI_URL_BASE_SIZE;
        const emojiURL = obj3.getEmojiURL(obj10);
        const tmp11 = !stateFromStores;
      } else {
        class B {
          constructor(arg0, arg1) {
            obj = { variant: "text-xs/bold", color: "text-strong", children: arg0 };
            return closure_1_9(closure_1_0(closure_1_2[15]).Text, obj, arg1);
          }
        }
      }
      cResult[2] = emoji.animated;
      cResult[3] = emoji.id;
      cResult[4] = emoji.url;
      cResult[5] = stateFromStores;
      cResult[6] = emojiURL;
      const tmpResult = useStateFromStores;
    }
  : function DoubleTapToReactChatInputBannerInner(emoji) {
      emoji = emoji.emoji;
      const tmp = closure_13();
      const items = [AccessibilityStore];
      const stateFromStores = useStateFromStores.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
      const obj2 = { style: tmp.container, children: null };
      const obj3 = { style: tmp.emojiContainer, children: null };
      const obj4 = {
        style: tmp.emoji,
        fastImageStyle: tmp.emoji,
        textEmojiStyle: tmp.textEmoji,
        name: null,
        src: null,
      };
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
      const items1 = [
        options(EmojiDefault, obj4),
        options(Text_Text.Text, { variant: "heading-xl/semibold", color: "interactive-text-default", children: "1" }),
      ];
      obj3.children = items1;
      const items2 = [collapsed(View, obj3), ,];
      const obj6 = { style: tmp.text, children: null };
      const obj7 = { style: tmp.header, children: null };
      const obj8 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
      const intl = util.intl;
      obj8.children = intl.string(util.t["6RUX7d"]);
      const items3 = [options(Text_Text.Text, obj8), options(renderChannelBadge.NewBadge, {})];
      obj7.children = items3;
      const items4 = [collapsed(View, obj7)];
      const obj9 = { variant: "text-xs/medium", color: "text-default", children: null };
      const intl2 = util.intl;
      obj9.children = intl2.format(util.t["5/l2rR"], {
        emojiName: emoji.name,
        emojiNameHook(children, arg1) {
          return closure_1_9(
            require("Text/Text").Text,
            { variant: "text-xs/bold", color: "text-strong", children },
            arg1,
          );
        },
        tapHereHook(children, arg1) {
          return closure_1_9(
            require("Text/Text").Text,
            { variant: "text-xs/medium", color: "text-brand", children },
            arg1,
          );
        },
      });
      items4[1] = options(Text_Text.Text, obj9);
      obj6.children = items4;
      items2[1] = collapsed(View, obj6);
      const obj11 = {
        hitSlop: 8,
        accessibilityRole: "button",
        accessibilityLabel: null,
        onPress: null,
        style: null,
        children: null,
      };
      const intl3 = util.intl;
      obj11.accessibilityLabel = intl3.string(util.t.cpT0Cq);
      obj11.onPress = emoji.handleDismissBanner;
      obj11.style = tmp.closeButton;
      obj11.children = options(XSmallIcon.XSmallIcon, { size: "sm", color: "icon-subtle" });
      items2[2] = options(Pressables.PressableOpacity, obj11);
      obj2.children = items2;
      return collapsed(View, obj2);
    };
const __initData = {
  code: "function DoubleTapToReactChatInputBannerTsx1(){const{useReducedMotion,height,withDelay,withTiming,DECELERATED_EASING}=this.__closure;if(useReducedMotion){return{height:height.get()};}return{height:withDelay(200,withTiming(height.get(),{duration:300,easing:DECELERATED_EASING}))};}",
};
ReactCompilerGating = fn(558);
let obj5 = {
  borderWidth: 2,
  borderColor: nativeDefault.colors.BORDER_STRONG,
  backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT,
  borderRadius: nativeDefault.radii.md,
  flexDirection: "row",
  gap: 8,
  alignItems: "center",
  justifyContent: "center",
  padding: 12,
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/double_tap_to_react/native/DoubleTapToReactChatInputBanner.tsx");

export const DoubleTapToReactChatInputBanner = ReactCompilerGating.isReactCompilerEnabled()
  ? function DoubleTapToReactChatInputBanner(channel) {
      let tmp2 = dependencyMap;
      const cResult = channel(576).c(4);
      channel = channel.channel;
      const DoubleTapReactionEmoji = channel(2040).DoubleTapReactionEmoji;
      const setting = DoubleTapReactionEmoji.useSetting();
      ({ emojiId, emojiName } = setting);
      let tmp5 = true !== setting.disableDoubleTap;
      if (tmp5) {
        let tmp7 = null != emojiId;
        if (tmp7) {
          tmp7 = "0" !== emojiId;
        }
        if (!tmp7) {
          let tmp8 = null != emojiName;
          if (tmp8) {
            tmp8 = "" !== emojiName;
          }
          tmp7 = tmp8;
        }
        let tmp9 = !tmp7;
        if (!tmp7) {
          let tmp10 = null != channel.lastMessageId;
          if (tmp10) {
            tmp10 = emoji(7962)(channel);
          }
          tmp9 = tmp10;
        }
        tmp5 = tmp9;
      }
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fallbackDoubleTapDisambiguatedEmoji = tmp(7959).getFallbackDoubleTapDisambiguatedEmoji();
        cResult[0] = fallbackDoubleTapDisambiguatedEmoji;
        emoji = fallbackDoubleTapDisambiguatedEmoji;
        const tmpResult = tmp(7959);
      } else {
        emoji = cResult[0];
      }
      let tmp14 = null;
      if (null != emoji) {
        if (!tmp5) {
          tmp14 = null;
        } else {
          const _Symbol = Symbol;
          if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
            const items = [tmp(2048).DismissibleContent.DOUBLE_TAP_TO_REACT_EXPANDED_UPSELL];
            cResult[1] = items;
            let tmp16 = items;
          } else {
            tmp16 = cResult[1];
          }
          if (cResult[2] !== channel) {
            const obj2 = {
              contentTypes: tmp16,
              bypassAutoDismiss: true,
              children(arg0) {
                ({ visibleContent, markAsDismissed } = arg0);
                let tmp = null;
                if (visibleContent === dismissible_content.DismissibleContent.DOUBLE_TAP_TO_REACT_EXPANDED_UPSELL) {
                  const obj = { channel, emoji, markAsDismissed };
                  tmp = options(DoubleTapToReactChatInputBannerAnimationContainer, obj);
                }
                return tmp;
              },
            };
            tmp2 = closure_9(emoji(9964), obj2);
            cResult[2] = channel;
            cResult[3] = tmp2;
          }
        }
      }
      return tmp14;
    }
  : function DoubleTapToReactChatInputBanner(channel) {
      channel = channel.channel;
      let memo1;
      const DoubleTapReactionEmoji = channel(memo1[31]).DoubleTapReactionEmoji;
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
      memo1 = noop.useMemo(() => channel(memo1[33]).getFallbackDoubleTapDisambiguatedEmoji(), []);
      let tmp6 = null;
      if (null != memo1) {
        let tmp7 = null;
        if (memo) {
          let obj = { contentTypes: null, bypassAutoDismiss: true, children: null };
          const items1 = [channel(tmp2[34]).DismissibleContent.DOUBLE_TAP_TO_REACT_EXPANDED_UPSELL];
          obj.contentTypes = items1;
          obj.children = function children(arg0) {
            ({ visibleContent, markAsDismissed } = arg0);
            let tmp = null;
            if (visibleContent === dismissible_content.DismissibleContent.DOUBLE_TAP_TO_REACT_EXPANDED_UPSELL) {
              const obj = { channel, emoji: memo1, markAsDismissed };
              tmp = options(DoubleTapToReactChatInputBannerAnimationContainer, obj);
            }
            return tmp;
          };
          tmp7 = closure_9(setting(tmp2[35]), obj);
          const tmp10 = setting(tmp2[35]);
        }
        tmp6 = tmp7;
      }
      return tmp6;
    };
