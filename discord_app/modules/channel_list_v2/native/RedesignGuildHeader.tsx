// === Module 16358: RedesignGuildHeader ===

// Module 16358 (RedesignGuildHeader)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1414 */;
import FavoritesUtils from "FavoritesUtils" /* 2089 */;
import useToken from "useToken" /* 4778 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4810 */;
import REAWorkaroundViewDefault from "REAWorkaroundView" /* 4811 */;
import shared from "shared" /* 4929 */;
import useThemeDefault from "useTheme" /* 4991 */;
import spring from "spring" /* 5374 */;
import springPresets from "springPresets" /* 5378 */;
import ButtonConstants from "ButtonConstants" /* 5380 */;
import useFontScale from "useFontScale" /* 5382 */;
import useIsUsingClientThemeDefault from "useIsUsingClientTheme" /* 9242 */;
import ThemedGradientDefault from "ThemedGradient" /* 10211 */;
import useScaledTextLineHeight from "useScaledTextLineHeight" /* 10490 */;
import roundToNearestPixelDefault from "roundToNearestPixel" /* 11596 */;
import openGuildActionSheetDefault from "openGuildActionSheet" /* 13960 */;
import useIsGameCommunityServerPreviewDefault from "useIsGameCommunityServerPreview" /* 16329 */;
import useStickyServerHeaderSubtitleDefault from "useStickyServerHeaderSubtitle" /* 16359 */;
import ChannelListStickyHeaderDefault from "ChannelListStickyHeader" /* 16360 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5079 */;
import ActionSheetStore from "ActionSheetStore" /* 4759 */;

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet: closure_4, View: hasOwnProperty, Pressable: metroRequire } = get_ActivityIndicator);
const RedesignChannelListConstants = fn(11776);
({ STICKY_BANNER_ASPECT_RATIO: closure_9, BANNER_MAX_HEIGHT_PERCENTAGE: c10, SEARCH_BAR_MARGIN_BOTTOM: closure_11 } = RedesignChannelListConstants);
const GuildFeatures = fn(1085).GuildFeatures;
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
let c15 = "redesign/heading-18/bold";
let ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? (function useShouldShowBorder() {
  const cResult = c.c(3);
  const tmp4 = useIsUsingClientThemeDefault();
  const tmp5 = useThemeDefault();
  if (cResult[0] === tmp4) {
    if (cResult[1] === tmp5) {
      let tmp6 = cResult[2];
    }
    return tmp6;
  }
  let isThemeDarkResult = tmp4;
  if (!tmp4) {
    isThemeDarkResult = shared.isThemeDark(tmp5);
    const tmpResult = shared;
  }
  cResult[0] = tmp4;
  cResult[1] = tmp5;
  cResult[2] = isThemeDarkResult;
  tmp6 = isThemeDarkResult;
}) : (function useShouldShowBorder() {
  let isThemeDarkResult = useIsUsingClientThemeDefault();
  if (!isThemeDarkResult) {
    isThemeDarkResult = shared.isThemeDark(tmp3);
  }
  return isThemeDarkResult;
});
fn(558);
let createStyles = fn(5090);
let closure_17 = createStyles.createStyles(() => ({ guildHeaderWrapper: { zIndex: 5 } }));
createStyles = fn(5090);
let closure_18 = createStyles.createStyles((arg0) => {
  const obj = { bannerWrapper: { width: "100%", maxHeight: arg0 * collapsed, aspectRatio, overflow: "hidden" }, guildBanner: { left: "50%", top: "50%" }, bannerOverlay: null };
  const obj3 = {};
  const merged = Object.assign(absoluteFillObject.absoluteFillObject);
  obj3.backgroundColor = nativeDefault.colors.BLACK;
  obj.bannerOverlay = obj3;
  return obj;
});
createStyles = fn(5090);
let result = createStyles.experimental_createToken((gradient) => {
  if (null != gradient.gradient) {
    let PANEL_BG = nativeDefault.colors.BACKGROUND_BASE_LOW;
  } else {
    PANEL_BG = nativeDefault.colors.PANEL_BG;
  }
  return PANEL_BG;
});
createStyles = fn(5090);
let closure_19 = createStyles.createStyles({ headerWrapper: { backgroundColor: result } });
ReactCompilerGating = fn(558);
const __initData = { code: "function RedesignGuildHeaderTsx1(){const{scrollPosition,bannerHeight}=this.__closure;return{transform:[{translateY:Math.max(0,scrollPosition.get()-bannerHeight)}]};}" };
const __initData2 = { code: "function RedesignGuildHeaderTsx2(){const{scrollPosition,bannerHeight}=this.__closure;return{transform:[{translateY:Math.min(0,scrollPosition.get()-bannerHeight)}]};}" };
const __initData3 = { code: "function RedesignGuildHeaderTsx3(){const{scrollPosition,bannerHeight}=this.__closure;return{transform:[{translateY:Math.max(0,scrollPosition.get()-bannerHeight)}]};}" };
const __initData4 = { code: "function RedesignGuildHeaderTsx4(){const{scrollPosition,bannerHeight}=this.__closure;return{transform:[{translateY:Math.min(0,scrollPosition.get()-bannerHeight)}]};}" };
let obj = { headerWrapper: { backgroundColor: result } };
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function useRedesignGuildHeaderHeight(id) {
  const cResult = c.c(8);
  const tmp4 = closure_16();
  const fontScale = useFontScale.useFontScale();
  const tmp7 = null != useStickyServerHeaderSubtitleDefault(id);
  const isFavoritesGuildIdResult = FavoritesUtils.isFavoritesGuildId(id.id);
  if (cResult[0] !== fontScale) {
    const scaleTextLineHeightResult = useScaledTextLineHeight.scaleTextLineHeight(c15, fontScale);
    cResult[0] = fontScale;
    cResult[1] = scaleTextLineHeightResult;
    let tmp10 = scaleTextLineHeightResult;
    const tmpResult = useScaledTextLineHeight;
  } else {
    tmp10 = cResult[1];
  }
  let num3 = 0;
  if (tmp4) {
    num3 = 1;
  }
  const tmp9 = useIsGameCommunityServerPreviewDefault(id.id);
  const token = useToken.useToken(nativeDefault.modules.mobile.CHANNEL_LIST_SUBTITLE_TEXT_STYLE);
  let num4 = 0;
  if (!isFavoritesGuildIdResult) {
    num4 = ButtonConstants.SMALL_BUTTON_HEIGHT + closure_1_11;
  }
  let num5 = 0;
  if (tmp9) {
    num5 = 8 + ButtonConstants.MEDIUM_BUTTON_HEIGHT + 8;
  }
  let num6 = 16;
  if (isFavoritesGuildIdResult) {
    num6 = 12;
  }
  if (cResult[2] === fontScale) {
    if (cResult[3] === tmp7) {
      if (cResult[4] === token) {
        let tmp15 = cResult[5];
      }
      let bound = tmp10;
      if (isFavoritesGuildIdResult) {
        const _Math = Math;
        bound = Math.max(tmp10, ButtonConstants.SMALL_BUTTON_HEIGHT);
      }
      const sum = 16 + bound + tmp15 + num4 + num5 + num6 + num3;
      if (cResult[6] !== sum) {
        const tmp20 = roundToNearestPixelDefault(sum);
        cResult[6] = sum;
        cResult[7] = tmp20;
        let tmp19 = tmp20;
      } else {
        tmp19 = cResult[7];
      }
      return tmp19;
    }
  }
  let num7 = 0;
  if (tmp7) {
    num7 = useScaledTextLineHeight.scaleTextLineHeight(token, fontScale);
    const tmpResult4 = useScaledTextLineHeight;
  }
  cResult[2] = fontScale;
  cResult[3] = tmp7;
  cResult[4] = token;
  cResult[5] = num7;
  tmp15 = num7;
  const tmpResult3 = useToken;
}) : (function useRedesignGuildHeaderHeight(id) {
  const tmp = closure_16();
  const fontScale = useFontScale.useFontScale();
  const tmp6 = null != useStickyServerHeaderSubtitleDefault(id);
  const isFavoritesGuildIdResult = FavoritesUtils.isFavoritesGuildId(id.id);
  const tmp8 = useIsGameCommunityServerPreviewDefault(id.id);
  const scaleTextLineHeightResult = useScaledTextLineHeight.scaleTextLineHeight(c15, fontScale);
  let num = 0;
  if (tmp) {
    num = 1;
  }
  let num2 = 0;
  const token = useToken.useToken(nativeDefault.modules.mobile.CHANNEL_LIST_SUBTITLE_TEXT_STYLE);
  if (!isFavoritesGuildIdResult) {
    num2 = ButtonConstants.SMALL_BUTTON_HEIGHT + closure_1_11;
  }
  let num3 = 0;
  if (tmp8) {
    num3 = 8 + ButtonConstants.MEDIUM_BUTTON_HEIGHT + 8;
  }
  let num5 = 16;
  if (isFavoritesGuildIdResult) {
    num5 = 12;
  }
  let num6 = 0;
  if (tmp6) {
    num6 = useScaledTextLineHeight.scaleTextLineHeight(token, fontScale);
    const tmp2Result2 = useScaledTextLineHeight;
  }
  let bound = scaleTextLineHeightResult;
  if (isFavoritesGuildIdResult) {
    const _Math = Math;
    bound = Math.max(scaleTextLineHeightResult, ButtonConstants.SMALL_BUTTON_HEIGHT);
  }
  return roundToNearestPixelDefault(16 + bound + num6 + num2 + num3 + num5 + num);
});
ReactCompilerGating = fn(558);
let closure_24 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildInfoHeader(bannerHeight) {
  const cResult = c.c(20);
  ({ guild, scrollPosition } = bannerHeight);
  bannerHeight = bannerHeight.bannerHeight;
  const tmp4 = closure_19();
  const fn = function t() {
    const obj = { transform: null };
    const items = [{ translateY: Math.max(0, scrollPosition.get() - bannerHeight) }];
    obj.transform = items;
    return obj;
  };
  fn.__closure = { scrollPosition, bannerHeight };
  fn.__workletHash = 6302330113586;
  fn.__initData = __initData;
  const animatedStyle = ReanimatedRexport.useAnimatedStyle(fn);
  const fn2 = function l() {
    const obj = { transform: null };
    const items = [{ translateY: Math.min(0, scrollPosition.get() - bannerHeight) }];
    obj.transform = items;
    return obj;
  };
  fn2.__closure = { scrollPosition, bannerHeight };
  fn2.__workletHash = 16710117141903;
  fn2.__initData = __initData2;
  const animatedStyle1 = ReanimatedRexport.useAnimatedStyle(fn2);
  if (cResult[0] !== guild.id) {
    const isFavoritesGuildIdResult = FavoritesUtils.isFavoritesGuildId(guild.id);
    cResult[0] = guild.id;
    cResult[1] = isFavoritesGuildIdResult;
    let tmp7 = isFavoritesGuildIdResult;
    const tmpResult = FavoritesUtils;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj4 = { overflow: "hidden" };
    cResult[2] = obj4;
    let tmp9 = obj4;
  } else {
    tmp9 = cResult[2];
  }
  if (cResult[3] !== animatedStyle) {
    let items = [animatedStyle, tmp9];
    cResult[3] = animatedStyle;
    cResult[4] = items;
    let tmp10 = items;
  } else {
    tmp10 = cResult[4];
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp14 = closure_1_13(ThemedGradientDefault, { absolute: true, tall: true });
    cResult[5] = tmp14;
    let tmp11 = tmp14;
  } else {
    tmp11 = cResult[5];
  }
  if (cResult[6] !== animatedStyle1) {
    const obj5 = { style: animatedStyle1, children: tmp11 };
    const tmp18 = closure_1_13(REAWorkaroundViewDefault, obj5);
    cResult[6] = animatedStyle1;
    cResult[7] = tmp18;
    let tmp15 = tmp18;
  } else {
    tmp15 = cResult[7];
  }
  if (cResult[8] === guild) {
    if (cResult[9] === tmp19) {
      if (cResult[10] === tmp20) {
        if (cResult[11] === tmp21) {
          let tmp22 = cResult[12];
        }
        if (cResult[13] === tmp4.headerWrapper) {
          if (cResult[14] === tmp22) {
            let tmp24 = cResult[15];
          }
          if (cResult[16] === tmp24) {
            if (cResult[17] === tmp10) {
              if (cResult[18] === tmp15) {
                let tmp28 = cResult[19];
              }
              return tmp28;
            }
          }
          const obj6 = { style: tmp10, children: null };
          const items1 = [tmp15, tmp24];
          obj6.children = items1;
          const tmp31 = state(REAWorkaroundViewDefault, obj6);
          cResult[16] = tmp24;
          cResult[17] = tmp10;
          cResult[18] = tmp15;
          cResult[19] = tmp31;
          tmp28 = tmp31;
        }
        const obj7 = { style: tmp4.headerWrapper, children: tmp22 };
        const tmp27 = closure_1_13(hasOwnProperty, obj7);
        cResult[13] = tmp4.headerWrapper;
        cResult[14] = tmp22;
        cResult[15] = tmp27;
        tmp24 = tmp27;
      }
    }
  }
  const tmp23 = closure_1_13(ChannelListStickyHeaderDefault, { guild, showExtraButtons: !tmp7, canOpenGuildActionSheet: !tmp7, showCoachmarks: !tmp7 });
  cResult[8] = guild;
  cResult[9] = !tmp7;
  cResult[10] = !tmp7;
  cResult[11] = !tmp7;
  cResult[12] = tmp23;
  tmp22 = tmp23;
}) : (function GuildInfoHeader(bannerHeight) {
  ({ guild, scrollPosition } = bannerHeight);
  bannerHeight = bannerHeight.bannerHeight;
  const tmp = closure_19();
  const fn = function s() {
    const obj = { transform: null };
    const items = [{ translateY: Math.max(0, scrollPosition.get() - bannerHeight) }];
    obj.transform = items;
    return obj;
  };
  fn.__closure = { scrollPosition, bannerHeight };
  fn.__workletHash = 10484004701424;
  fn.__initData = __initData3;
  const animatedStyle = ReanimatedRexport.useAnimatedStyle(fn);
  const fn2 = function c() {
    const obj = { transform: null };
    const items = [{ translateY: Math.min(0, scrollPosition.get() - bannerHeight) }];
    obj.transform = items;
    return obj;
  };
  fn2.__closure = { scrollPosition, bannerHeight };
  fn2.__workletHash = 3877270083017;
  fn2.__initData = __initData4;
  const animatedStyle1 = ReanimatedRexport.useAnimatedStyle(fn2);
  const isFavoritesGuildIdResult = FavoritesUtils.isFavoritesGuildId(guild.id);
  const obj4 = { style: null, children: null };
  let items = [animatedStyle, { overflow: "hidden" }];
  obj4.style = items;
  const obj5 = { style: animatedStyle1, children: null };
  const tmp5 = REAWorkaroundViewDefault;
  obj5.children = __initData2(ThemedGradientDefault, { absolute: true, tall: true });
  const items1 = [__initData2(REAWorkaroundViewDefault, obj5), ];
  const obj6 = { style: tmp.headerWrapper, children: __initData2(ChannelListStickyHeaderDefault, { guild, showExtraButtons: !isFavoritesGuildIdResult, canOpenGuildActionSheet: !isFavoritesGuildIdResult, showCoachmarks: !isFavoritesGuildIdResult }) };
  items1[1] = __initData2(hasOwnProperty, obj6);
  obj4.children = items1;
  return state(tmp5, obj4);
});
const __initData5 = { code: "function RedesignGuildHeaderTsx5(){const{scrollPosition,interpolate,maxScrollPosition,bannerHeight}=this.__closure;const scrollPosValue=scrollPosition.get();return{opacity:interpolate(scrollPosValue,[0,maxScrollPosition],[1,0],\"clamp\"),transform:[{translateY:scrollPosValue>=0?interpolate(-scrollPosValue,[0,bannerHeight],[0,-bannerHeight],\"clamp\"):scrollPosValue/2},{scale:scrollPosValue>=0?1:(bannerHeight-scrollPosValue)/bannerHeight}]};}" };
const __initData6 = { code: "function RedesignGuildHeaderTsx6(){const{interpolate,pressed}=this.__closure;return{opacity:interpolate(pressed.get(),[0,1],[0,0.3])};}" };
const __initData7 = { code: "function RedesignGuildHeaderTsx7(){const{scrollPosition,interpolate,maxScrollPosition,bannerHeight}=this.__closure;const scrollPosValue=scrollPosition.get();return{opacity:interpolate(scrollPosValue,[0,maxScrollPosition],[1,0],'clamp'),transform:[{translateY:scrollPosValue>=0?interpolate(-scrollPosValue,[0,bannerHeight],[0,-bannerHeight],'clamp'):scrollPosValue/2},{scale:scrollPosValue>=0?1:(bannerHeight-scrollPosValue)/bannerHeight}]};}" };
const __initData8 = { code: "function RedesignGuildHeaderTsx8(){const{interpolate,pressed}=this.__closure;return{opacity:interpolate(pressed.get(),[0,1],[0,0.3])};}" };
ReactCompilerGating = fn(558);
let closure_29 = ReactCompilerGating.isReactCompilerEnabled() ? (function ReanimatedGuildBanner(guild) {
  const cResult = guild(bannerHeight[8]).c(49);
  guild = guild.guild;
  const scrollPosition = guild.scrollPosition;
  bannerHeight = guild.bannerHeight;
  ({ bannerWidth, onPress } = guild);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { ignoreKeyboard: true };
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  closure_18(scrollPosition(bannerHeight[26])(first).height);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [ActionSheetStore, AccessibilityStore];
    class T {
      constructor() {
        obj = { actionSheetOpen: null != closure_1_8.getKey(), useReducedMotion: closure_1_7.useReducedMotion };
        return obj;
      }
    }
    cResult[1] = items;
    cResult[2] = T;
    let tmp8 = T;
    let tmp7 = items;
  } else {
    tmp7 = cResult[1];
    tmp8 = cResult[2];
  }
  let obj = guild(bannerHeight[8]);
  const tmp5 = scrollPosition;
  const stateFromStoresObject = guild(bannerHeight[27]).useStateFromStoresObject(tmp7, tmp8);
  ({ actionSheetOpen, useReducedMotion } = stateFromStoresObject);
  tmp5(bannerHeight[15])(guild.id);
  const tmpResult = guild(bannerHeight[27]);
  const isFocused = guild(bannerHeight[28]).useIsFocused();
  const tmpResult5 = guild(bannerHeight[28]);
  const sharedValue = guild(bannerHeight[22]).useSharedValue(0);
  if (cResult[3] !== sharedValue) {
    class G {
      constructor() {
        obj = closure_0(closure_2[29]);
        result = closure_5.set(obj.withSpring(1, closure_0(closure_2[30]).springStandard, "animate-always"));
        return;
      }
    }
    cResult[3] = sharedValue;
    cResult[4] = G;
    class T {
      constructor() {
        obj = { actionSheetOpen: null != closure_1_8.getKey(), useReducedMotion: closure_1_7.useReducedMotion };
        return obj;
      }
    }
  } else {
    class G {
      constructor() {
        obj = closure_0(closure_2[29]);
        result = closure_5.set(obj.withSpring(1, closure_0(closure_2[30]).springStandard, "animate-always"));
        return;
      }
    }
  }
  if (cResult[5] !== sharedValue) {
    class O {
      constructor() {
        obj = closure_0(closure_2[29]);
        result = closure_5.set(obj.withSpring(0, closure_0(closure_2[30]).springStandard, "animate-always"));
        return;
      }
    }
    cResult[5] = sharedValue;
    cResult[6] = O;
    class T {
      constructor() {
        obj = { actionSheetOpen: null != closure_1_8.getKey(), useReducedMotion: closure_1_7.useReducedMotion };
        return obj;
      }
    }
  } else {
    class O {
      constructor() {
        obj = closure_0(closure_2[29]);
        result = closure_5.set(obj.withSpring(0, closure_0(closure_2[30]).springStandard, "animate-always"));
        return;
      }
    }
  }
  if (cResult[7] === guild) {
    class O {
      constructor() {
        obj = closure_0(closure_2[29]);
        result = closure_5.set(obj.withSpring(0, closure_0(closure_2[30]).springStandard, "animate-always"));
        return;
      }
    }
    tmp(tmp2[22]);
    class V {
      constructor() {
        value = scrollPosition.get();
        obj = { opacity: null, transform: null };
        tmp2 = closure_0;
        tmp3 = closure_2;
        obj2 = closure_0(closure_2[22]);
        items = [0];
        items[1] = bannerHeight;
        obj.opacity = obj2.interpolate(value, items, [1, 0], "clamp");
        if (value >= 0) {
          tmp2Result = tmp2(tmp3[22]);
          tmp5 = bannerHeight;
          items1 = [0];
          items1[1] = bannerHeight;
          items2 = [0];
          items2[1] = -bannerHeight;
          tmp6 = tmp2Result;
          tmp7 = items1;
          tmp8 = items2;
          str = "clamp";
          interpolateResult = tmp2Result.interpolate(-value, items1, items2, "clamp");
        } else {
          num = 2;
          interpolateResult = value / 2;
        }
        items3 = [, ];
        items3[0] = { translateY: interpolateResult };
        num2 = 1;
        if (value < 0) {
          tmp9 = bannerHeight;
          num2 = (bannerHeight - value) / bannerHeight;
        }
        items3[1] = { scale: num2 };
        obj.transform = items3;
        return obj;
      }
    }
    const obj3 = { scrollPosition, interpolate: null, maxScrollPosition: null, bannerHeight: null };
    class T {
      constructor() {
        obj = { actionSheetOpen: null != closure_1_8.getKey(), useReducedMotion: closure_1_7.useReducedMotion };
        return obj;
      }
    }
    obj3.interpolate = tmp(tmp2[22]).interpolate;
    obj3.maxScrollPosition = bannerHeight;
    obj3.bannerHeight = bannerHeight;
    V.__closure = obj3;
    V.__workletHash = 16869905948656;
    V.__initData = __initData5;
    tmp16(V);
    class D {
      constructor() {
        obj = { opacity: null };
        obj2 = closure_0(closure_2[22]);
        obj.opacity = obj2.interpolate(closure_5.get(), [0, 1], [0, 0.3]);
        return obj;
      }
    }
    const obj4 = { interpolate: tmp(tmp2[22]).interpolate, pressed: sharedValue };
    D.__closure = obj4;
    D.__workletHash = 9592007067426;
    D.__initData = __initData6;
    const animatedStyle = tmp(tmp2[22]).useAnimatedStyle(D);
    let result = bannerWidth / 2 * -1;
    const result1 = bannerHeight / 2 * -1;
    if (cResult[10] === bannerHeight) {
      class O {
        constructor() {
          obj = closure_0(closure_2[29]);
          result = closure_5.set(obj.withSpring(0, closure_0(closure_2[30]).springStandard, "animate-always"));
          return;
        }
      }
    }
    const size = { width: bannerWidth, height: bannerHeight, marginLeft: result, marginTop: result1 };
    cResult[10] = bannerHeight;
    cResult[11] = bannerWidth;
    cResult[12] = result;
    cResult[13] = result1;
    cResult[14] = size;
    const tmpResult8 = tmp(tmp2[22]);
  }
  const fn = function k() {
    if (onPress != null) {
      tmp();
    }
    openGuildActionSheetDefault(guild);
  };
  cResult[7] = guild;
  cResult[8] = onPress;
  cResult[9] = fn;
  const tmpResult6 = guild(bannerHeight[22]);
}) : (function ReanimatedGuildBanner(guild) {
  guild = guild.guild;
  const scrollPosition = guild.scrollPosition;
  const bannerWidth = guild.bannerWidth;
  const onPress = guild.onPress;
  let bannerHeight;
  let sharedValue;
  const tmp3 = closure_18(scrollPosition(bannerHeight[26])({ ignoreKeyboard: true }).height);
  const guildBanner = tmp3;
  let items = [ActionSheetStore, sharedValue];
  const stateFromStoresObject = guild(bannerHeight[27]).useStateFromStoresObject(items, () => ({ actionSheetOpen: null != key.getKey(), useReducedMotion: sharedValue.useReducedMotion }));
  ({ useReducedMotion, actionSheetOpen } = stateFromStoresObject);
  let tmp17Result = scrollPosition(bannerHeight[15])(guild.id);
  let obj = guild(bannerHeight[27]);
  const isFocused = guild(bannerHeight[28]).useIsFocused();
  const obj2 = guild(bannerHeight[28]);
  sharedValue = guild(bannerHeight[22]).useSharedValue(0);
  let items1 = [sharedValue];
  let items2 = [sharedValue];
  const callback = bannerWidth.useCallback(() => {
    const result = sharedValue.set(spring.withSpring(1, springPresets.springStandard, "animate-always"));
  }, items1);
  let items3 = [guild, onPress];
  const callback1 = bannerWidth.useCallback(() => {
    const result = sharedValue.set(spring.withSpring(0, springPresets.springStandard, "animate-always"));
  }, items2);
  const callback2 = bannerWidth.useCallback(() => {
    if (onPress != null) {
      tmp();
    }
    openGuildActionSheetDefault(guild);
  }, items3);
  const obj3 = guild(bannerHeight[22]);
  const fn = function p() {
    value = scrollPosition.get();
    const obj = { opacity: null, transform: null };
    const items = [0, bannerHeight];
    obj.opacity = ReanimatedRexport.interpolate(value, items, [1, 0], "clamp");
    if (value >= 0) {
      const tmp2Result = ReanimatedRexport;
      const items1 = [0, bannerHeight];
      const items2 = [0, -bannerHeight];
      let interpolateResult = tmp2Result.interpolate(-value, items1, items2, "clamp");
    } else {
      interpolateResult = value / 2;
    }
    const items3 = [{ translateY: interpolateResult }, ];
    let num2 = 1;
    if (value < 0) {
      num2 = (bannerHeight - value) / bannerHeight;
    }
    items3[1] = { scale: num2 };
    obj.transform = items3;
    return obj;
  };
  const obj4 = guild(bannerHeight[22]);
  fn.__closure = { scrollPosition, interpolate: guild(bannerHeight[22]).interpolate, maxScrollPosition: bannerHeight, bannerHeight };
  fn.__workletHash = 16730769342770;
  fn.__initData = __initData7;
  const animatedStyle = obj4.useAnimatedStyle(fn);
  const obj5 = { scrollPosition, interpolate: guild(bannerHeight[22]).interpolate, maxScrollPosition: bannerHeight, bannerHeight };
  const fn2 = function b() {
    const obj = { opacity: ReanimatedRexport.interpolate(sharedValue.get(), [0, 1], [0, 0.3]) };
    return obj;
  };
  const obj6 = guild(bannerHeight[22]);
  fn2.__closure = { interpolate: guild(bannerHeight[22]).interpolate, pressed: sharedValue };
  fn2.__workletHash = 4829626805612;
  fn2.__initData = __initData8;
  const items4 = [tmp3, bannerWidth, bannerHeight];
  const animatedStyle1 = obj6.useAnimatedStyle(fn2);
  if (null == guild.banner) {
    return null;
  } else {
    let hasItem = !useReducedMotion;
    if (!useReducedMotion) {
      hasItem = !actionSheetOpen;
    }
    if (hasItem) {
      hasItem = isFocused;
    }
    if (hasItem) {
      const features = guild.features;
      hasItem = features.has(GuildFeatures.ANIMATED_BANNER);
    }
    const animatableSourceWithFallback = tmp(tmp2[32]).getAnimatableSourceWithFallback(hasItem, (hasItem) => AvatarUtilsDefault.getGuildBannerSource({ id: guild.id, banner: guild.banner }, hasItem));
    const obj8 = { style: animatedStyle, children: null };
    const obj9 = { style: tmp3.bannerWrapper, onPress: callback2, onPressIn: callback, onPressOut: callback1, children: null };
    const obj10 = { style: tmp13, source: animatableSourceWithFallback };
    const items5 = [closure_13(tmp(tmp2[33]), obj10), , ];
    const obj11 = { style: null };
    const items6 = [tmp3.bannerOverlay, animatedStyle1];
    obj11.style = items6;
    items5[1] = closure_13(tmp(tmp2[22]).View, obj11);
    if (tmp17Result) {
      tmp17Result = closure_13(tmp(tmp2[34]), {});
    }
    items5[2] = tmp17Result;
    obj9.children = items5;
    obj8.children = closure_14(bannerHeight, obj9);
    return closure_13(tmp(tmp2[22]).View, obj8);
  }
  const obj7 = { interpolate: guild(bannerHeight[22]).interpolate, pressed: sharedValue };
});
let size = fn(2);
let result1 = size.fileFinishedImporting("modules/channel_list_v2/native/RedesignGuildHeader.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function RedesignGuildHeader(arg0) {
  const cResult = c.c(13);
  ({ guild, scrollPosition, bannerHeight, bannerWidth } = arg0);
  const tmp2 = closure_17();
  if (cResult[0] === bannerHeight) {
    if (cResult[1] === bannerWidth) {
      if (cResult[2] === guild) {
        if (cResult[3] === scrollPosition) {
          let tmp3 = cResult[4];
        }
        let num = 0;
        if (null != guild.banner) {
          num = bannerHeight;
        }
        if (cResult[5] === guild) {
          if (cResult[6] === scrollPosition) {
            if (cResult[7] === num) {
              let tmp6 = cResult[8];
            }
            if (cResult[9] === tmp2.guildHeaderWrapper) {
              if (cResult[10] === tmp3) {
                if (cResult[11] === tmp6) {
                  let tmp10 = cResult[12];
                }
                return tmp10;
              }
            }
            const obj2 = { style: tmp2.guildHeaderWrapper, preventClipping: true, children: null };
            const items = [tmp3, tmp6];
            obj2.children = items;
            const tmp13 = state(hasOwnProperty, obj2);
            cResult[9] = tmp2.guildHeaderWrapper;
            cResult[10] = tmp3;
            cResult[11] = tmp6;
            cResult[12] = tmp13;
            tmp10 = tmp13;
          }
        }
        const obj3 = { guild, scrollPosition, bannerHeight: num };
        const tmp9 = __initData2(closure_24, obj3);
        cResult[5] = guild;
        cResult[6] = scrollPosition;
        cResult[7] = num;
        cResult[8] = tmp9;
        tmp6 = tmp9;
      }
    }
  }
  const tmp4 = __initData2(closure_29, { guild, scrollPosition, bannerHeight, bannerWidth });
  cResult[0] = bannerHeight;
  cResult[1] = bannerWidth;
  cResult[2] = guild;
  cResult[3] = scrollPosition;
  cResult[4] = tmp4;
  tmp3 = tmp4;
}) : (function RedesignGuildHeader(bannerWidth) {
  ({ guild, scrollPosition, bannerHeight } = bannerWidth);
  const obj = { style: closure_17().guildHeaderWrapper, preventClipping: true, children: null };
  const items = [__initData2(closure_29, { guild, scrollPosition, bannerHeight, bannerWidth: bannerWidth.bannerWidth }), ];
  const obj2 = { guild, scrollPosition, bannerHeight: null };
  let num = 0;
  if (null != guild.banner) {
    num = bannerHeight;
  }
  obj2.bannerHeight = num;
  items[1] = __initData2(closure_24, obj2);
  obj.children = items;
  return state(hasOwnProperty, obj);
}));
export const useRedesignGuildHeaderHeight = tmp5;