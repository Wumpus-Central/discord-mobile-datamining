// === Module 16059: RedesignGuildHeader ===

// Module 16059 (RedesignGuildHeader)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1402 */;
import FavoritesUtils from "FavoritesUtils" /* 2077 */;
import useToken from "useToken" /* 4580 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4612 */;
import REAWorkaroundViewDefault from "REAWorkaroundView" /* 4613 */;
import shared from "shared" /* 4729 */;
import useThemeDefault from "useTheme" /* 4791 */;
import spring from "spring" /* 5597 */;
import springPresets from "springPresets" /* 5598 */;
import ButtonConstants from "ButtonConstants" /* 5600 */;
import useFontScale from "useFontScale" /* 5602 */;
import ThemedGradientDefault from "ThemedGradient" /* 5911 */;
import useIsUsingClientThemeDefault from "useIsUsingClientTheme" /* 7508 */;
import useScaledTextLineHeight from "useScaledTextLineHeight" /* 10723 */;
import roundToNearestPixelDefault from "roundToNearestPixel" /* 10725 */;
import openGuildActionSheetDefault from "openGuildActionSheet" /* 13720 */;
import useIsGameCommunityServerPreviewDefault from "useIsGameCommunityServerPreview" /* 16030 */;
import useStickyServerHeaderSubtitleDefault from "useStickyServerHeaderSubtitle" /* 16060 */;
import ChannelListStickyHeaderDefault from "ChannelListStickyHeader" /* 16061 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 4879 */;
import ActionSheetStore from "ActionSheetStore" /* 4561 */;
import RedesignChannelListConstants from "RedesignChannelListConstants" /* 11697 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import createStyles_mod from "createStyles" /* 4890 */;
import size_mod from "module_2" /* 2 */;

let set;

let c10;
let c9;
let closure_14;
let closure_4;
let hasOwnProperty;
let map1;
let metroRequire;
let unpackModuleId;
({ StyleSheet: closure_4, View: hasOwnProperty, Pressable: metroRequire } = react_native);
({ STICKY_BANNER_ASPECT_RATIO: c9, BANNER_MAX_HEIGHT_PERCENTAGE: c10, SEARCH_BAR_MARGIN_BOTTOM: unpackModuleId } = RedesignChannelListConstants);
const GuildFeatures = Constants.GuildFeatures;
({ jsx: map1, jsxs: closure_14 } = Fragment);
let c15 = "redesign/heading-18/bold";
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const obj = react2;
  const cResult = obj.c(3);
  const tmp4 = useIsUsingClientThemeDefault();
  const tmp5 = useThemeDefault();
  if (cResult[0] === tmp4) {
    let tmp6;
    if (cResult[1] === tmp5) {
      tmp6 = cResult[2];
    }
    return tmp6;
  }
  let isThemeDarkResult = tmp4;
  if (!isThemeDarkResult) {
    const tmpResult = shared;
    isThemeDarkResult = tmpResult.isThemeDark(tmp5);
  }
  cResult[0] = tmp4;
  cResult[1] = tmp5;
  cResult[2] = isThemeDarkResult;
  tmp6 = isThemeDarkResult;
}) : (() => {
  let isThemeDarkResult = useIsUsingClientThemeDefault();
  if (!isThemeDarkResult) {
    const obj = shared;
    isThemeDarkResult = obj.isThemeDark(tmp3);
  }
  return isThemeDarkResult;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((id) => {
  let tmp10;
  const obj = react2;
  const cResult = obj.c(8);
  const tmp4 = closure_16();
  const obj2 = useFontScale;
  const fontScale = obj2.useFontScale();
  const tmp7 = null != useStickyServerHeaderSubtitleDefault(id);
  const obj3 = FavoritesUtils;
  const isFavoritesGuildIdResult = obj3.isFavoritesGuildId(id.id);
  const tmp9 = useIsGameCommunityServerPreviewDefault(id.id);
  if (cResult[0] !== fontScale) {
    const tmpResult = useScaledTextLineHeight;
    const scaleTextLineHeightResult = tmpResult.scaleTextLineHeight(c15, fontScale);
    cResult[0] = fontScale;
    cResult[1] = scaleTextLineHeightResult;
    tmp10 = scaleTextLineHeightResult;
  } else {
    tmp10 = cResult[1];
  }
  let num3 = 0;
  if (tmp4) {
    num3 = 1;
  }
  const tmpResult3 = useToken;
  const token = tmpResult3.useToken(nativeDefault.modules.mobile.CHANNEL_LIST_SUBTITLE_TEXT_STYLE);
  let num4 = 0;
  if (!isFavoritesGuildIdResult) {
    num4 = ButtonConstants.SMALL_BUTTON_HEIGHT + unpackModuleId;
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
      let tmp15;
      let tmp19;
      if (cResult[4] === token) {
        tmp15 = cResult[5];
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
        tmp19 = tmp20;
      } else {
        tmp19 = cResult[7];
      }
      return tmp19;
    }
  }
  let num7 = 0;
  if (tmp7) {
    const tmpResult4 = useScaledTextLineHeight;
    num7 = tmpResult4.scaleTextLineHeight(token, fontScale);
  }
  cResult[2] = fontScale;
  cResult[3] = tmp7;
  cResult[4] = token;
  cResult[5] = num7;
  tmp15 = num7;
}) : ((id) => {
  const tmp = closure_16();
  const obj = useFontScale;
  const fontScale = obj.useFontScale();
  const tmp6 = null != useStickyServerHeaderSubtitleDefault(id);
  const obj2 = FavoritesUtils;
  const isFavoritesGuildIdResult = obj2.isFavoritesGuildId(id.id);
  const tmp8 = useIsGameCommunityServerPreviewDefault(id.id);
  const obj3 = useScaledTextLineHeight;
  const scaleTextLineHeightResult = obj3.scaleTextLineHeight(c15, fontScale);
  let num = 0;
  if (tmp) {
    num = 1;
  }
  let num2 = 0;
  const tmp2Result = useToken;
  const token = tmp2Result.useToken(nativeDefault.modules.mobile.CHANNEL_LIST_SUBTITLE_TEXT_STYLE);
  if (!isFavoritesGuildIdResult) {
    num2 = ButtonConstants.SMALL_BUTTON_HEIGHT + unpackModuleId;
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
    const tmp2Result2 = useScaledTextLineHeight;
    num6 = tmp2Result2.scaleTextLineHeight(token, fontScale);
  }
  let bound = scaleTextLineHeightResult;
  if (isFavoritesGuildIdResult) {
    const _Math = Math;
    bound = Math.max(scaleTextLineHeightResult, ButtonConstants.SMALL_BUTTON_HEIGHT);
  }
  return roundToNearestPixelDefault(16 + bound + num6 + num2 + num3 + num5 + num);
});
let createStyles = createStyles_mod;
let closure_17 = createStyles.createStyles(() => ({ guildHeaderWrapper: { zIndex: 5 } }));
createStyles = createStyles_mod;
let closure_18 = createStyles.createStyles((arg0) => {
  let obj2;
  let obj3;
  const obj = { bannerWrapper: obj2, guildBanner: { left: "50%", top: "50%" }, bannerOverlay: obj3 };
  obj2 = { width: "100%", maxHeight: arg0 * authStore, aspectRatio, overflow: "hidden" };
  obj3 = { backgroundColor: nativeDefault.colors.BLACK };
  const merged = Object.assign(absoluteFillObject.absoluteFillObject);
  return obj;
});
createStyles = createStyles_mod;
let result = createStyles.experimental_createToken((gradient) => {
  let PANEL_BG;
  if (null != gradient.gradient) {
    PANEL_BG = nativeDefault.colors.BACKGROUND_BASE_LOW;
  } else {
    PANEL_BG = nativeDefault.colors.PANEL_BG;
  }
  return PANEL_BG;
});
createStyles = createStyles_mod;
let obj = { headerWrapper: { backgroundColor: result } };
let closure_19 = createStyles.createStyles(obj);
ReactCompilerGating = ReactCompilerGating_mod;
const __initData = { code: "function RedesignGuildHeaderTsx1(){const{scrollPosition,bannerHeight}=this.__closure;return{transform:[{translateY:Math.max(0,scrollPosition.get()-bannerHeight)}]};}" };
const __initData2 = { code: "function RedesignGuildHeaderTsx2(){const{scrollPosition,bannerHeight}=this.__closure;return{transform:[{translateY:Math.min(0,scrollPosition.get()-bannerHeight)}]};}" };
const __initData3 = { code: "function RedesignGuildHeaderTsx3(){const{scrollPosition,bannerHeight}=this.__closure;return{transform:[{translateY:Math.max(0,scrollPosition.get()-bannerHeight)}]};}" };
const __initData4 = { code: "function RedesignGuildHeaderTsx4(){const{scrollPosition,bannerHeight}=this.__closure;return{transform:[{translateY:Math.min(0,scrollPosition.get()-bannerHeight)}]};}" };
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let bannerHeight;
  let bannerWidth;
  let guild;
  let items;
  let scrollPosition;
  const obj = react2;
  const cResult = obj.c(13);
  ({ guild, scrollPosition, bannerHeight, bannerWidth } = arg0);
  const tmp2 = closure_17();
  if (cResult[0] === bannerHeight) {
    if (cResult[1] === bannerWidth) {
      if (cResult[2] === guild) {
        let tmp3;
        if (cResult[3] === scrollPosition) {
          tmp3 = cResult[4];
        }
        let num = 0;
        if (null != guild.banner) {
          num = bannerHeight;
        }
        if (cResult[5] === guild) {
          if (cResult[6] === scrollPosition) {
            let tmp6;
            if (cResult[7] === num) {
              tmp6 = cResult[8];
            }
            if (cResult[9] === tmp2.guildHeaderWrapper) {
              if (cResult[10] === tmp3) {
                let tmp10;
                if (cResult[11] === tmp6) {
                  tmp10 = cResult[12];
                }
                return tmp10;
              }
            }
            const obj2 = { style: tmp2.guildHeaderWrapper, preventClipping: true, children: items };
            items = [tmp3, tmp6];
            const tmp13 = authStore2(hasOwnProperty, obj2);
            cResult[9] = tmp2.guildHeaderWrapper;
            cResult[10] = tmp3;
            cResult[11] = tmp6;
            cResult[12] = tmp13;
            tmp10 = tmp13;
          }
        }
        const obj3 = { guild, scrollPosition, bannerHeight: num };
        const tmp9 = map1(closure_24, obj3);
        cResult[5] = guild;
        cResult[6] = scrollPosition;
        cResult[7] = num;
        cResult[8] = tmp9;
        tmp6 = tmp9;
      }
    }
  }
  const tmp4 = map1(closure_29, { guild, scrollPosition, bannerHeight, bannerWidth });
  cResult[0] = bannerHeight;
  cResult[1] = bannerWidth;
  cResult[2] = guild;
  cResult[3] = scrollPosition;
  cResult[4] = tmp4;
  tmp3 = tmp4;
}) : ((bannerWidth) => {
  let bannerHeight;
  let guild;
  let items;
  let num;
  let scrollPosition;
  ({ guild, scrollPosition, bannerHeight } = bannerWidth);
  bannerWidth = bannerWidth.bannerWidth;
  const obj = { style: closure_17().guildHeaderWrapper, preventClipping: true, children: items };
  items = [map1(closure_29, { guild, scrollPosition, bannerHeight, bannerWidth }), ];
  const obj2 = { guild, scrollPosition, bannerHeight: num };
  num = 0;
  if (null != guild.banner) {
    num = bannerHeight;
  }
  items[1] = map1(closure_24, obj2);
  return authStore2(hasOwnProperty, obj);
}));
ReactCompilerGating = ReactCompilerGating_mod;
let closure_24 = ReactCompilerGating.isReactCompilerEnabled() ? ((bannerHeight) => {
  let guild;
  let items1;
  let scrollPosition;
  let tmp10;
  let tmp11;
  let tmp15;
  let tmp7;
  let tmp9;
  let obj = react2;
  const cResult = obj.c(20);
  ({ guild, scrollPosition } = bannerHeight);
  bannerHeight = bannerHeight.bannerHeight;
  const tmp4 = closure_19();
  const obj2 = ReanimatedRexport;
  const fn = function t() {
    let items;
    const obj = { transform: items };
    items = [{ translateY: Math.max(0, scrollPosition.get() - bannerHeight) }];
    ({ translateY: Math.max(0, scrollPosition.get() - bannerHeight) });
    return obj;
  };
  fn.__closure = { scrollPosition, bannerHeight };
  fn.__workletHash = 6302330113586;
  fn.__initData = __initData;
  const animatedStyle = obj2.useAnimatedStyle(fn);
  const fn2 = function l() {
    let items;
    const obj = { transform: items };
    items = [{ translateY: Math.min(0, scrollPosition.get() - bannerHeight) }];
    ({ translateY: Math.min(0, scrollPosition.get() - bannerHeight) });
    return obj;
  };
  fn2.__closure = { scrollPosition, bannerHeight };
  fn2.__workletHash = 16710117141903;
  fn2.__initData = __initData2;
  const obj3 = ReanimatedRexport;
  const animatedStyle1 = obj3.useAnimatedStyle(fn2);
  if (cResult[0] !== guild.id) {
    const tmpResult = FavoritesUtils;
    const isFavoritesGuildIdResult = tmpResult.isFavoritesGuildId(guild.id);
    cResult[0] = guild.id;
    cResult[1] = isFavoritesGuildIdResult;
    tmp7 = isFavoritesGuildIdResult;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj4 = { overflow: "hidden" };
    cResult[2] = obj4;
    tmp9 = obj4;
  } else {
    tmp9 = cResult[2];
  }
  if (cResult[3] !== animatedStyle) {
    let items = [animatedStyle, tmp9];
    cResult[3] = animatedStyle;
    cResult[4] = items;
    tmp10 = items;
  } else {
    tmp10 = cResult[4];
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp14 = map1(ThemedGradientDefault, { absolute: true, tall: true });
    cResult[5] = tmp14;
    tmp11 = tmp14;
  } else {
    tmp11 = cResult[5];
  }
  if (cResult[6] !== animatedStyle1) {
    const obj5 = { style: animatedStyle1, children: tmp11 };
    const tmp18 = map1(REAWorkaroundViewDefault, obj5);
    cResult[6] = animatedStyle1;
    cResult[7] = tmp18;
    tmp15 = tmp18;
  } else {
    tmp15 = cResult[7];
  }
  if (cResult[8] === guild) {
    if (cResult[9] === !tmp7) {
      if (cResult[10] === !tmp7) {
        let tmp22;
        if (cResult[11] === !tmp7) {
          tmp22 = cResult[12];
        }
        if (cResult[13] === tmp4.headerWrapper) {
          let tmp24;
          if (cResult[14] === tmp22) {
            tmp24 = cResult[15];
          }
          if (cResult[16] === tmp24) {
            if (cResult[17] === tmp10) {
              let tmp28;
              if (cResult[18] === tmp15) {
                tmp28 = cResult[19];
              }
              return tmp28;
            }
          }
          const obj6 = { style: tmp10, children: items1 };
          items1 = [tmp15, tmp24];
          const tmp31 = authStore2(REAWorkaroundViewDefault, obj6);
          cResult[16] = tmp24;
          cResult[17] = tmp10;
          cResult[18] = tmp15;
          cResult[19] = tmp31;
          tmp28 = tmp31;
        }
        const obj7 = { style: tmp4.headerWrapper, children: tmp22 };
        const tmp27 = map1(hasOwnProperty, obj7);
        cResult[13] = tmp4.headerWrapper;
        cResult[14] = tmp22;
        cResult[15] = tmp27;
        tmp24 = tmp27;
      }
    }
  }
  const tmp23 = map1(ChannelListStickyHeaderDefault, { guild, showExtraButtons: !tmp7, canOpenGuildActionSheet: !tmp7, showCoachmarks: !tmp7 });
  cResult[8] = guild;
  cResult[9] = !tmp7;
  cResult[10] = !tmp7;
  cResult[11] = !tmp7;
  cResult[12] = tmp23;
  tmp22 = tmp23;
}) : ((bannerHeight) => {
  let guild;
  let items;
  let items1;
  let obj7;
  let scrollPosition;
  ({ guild, scrollPosition } = bannerHeight);
  bannerHeight = bannerHeight.bannerHeight;
  const tmp = closure_19();
  let obj = ReanimatedRexport;
  const fn = function s() {
    let items;
    const obj = { transform: items };
    items = [{ translateY: Math.max(0, scrollPosition.get() - bannerHeight) }];
    ({ translateY: Math.max(0, scrollPosition.get() - bannerHeight) });
    return obj;
  };
  fn.__closure = { scrollPosition, bannerHeight };
  fn.__workletHash = 10484004701424;
  fn.__initData = __initData3;
  const animatedStyle = obj.useAnimatedStyle(fn);
  const obj2 = ReanimatedRexport;
  const fn2 = function c() {
    let items;
    const obj = { transform: items };
    items = [{ translateY: Math.min(0, scrollPosition.get() - bannerHeight) }];
    ({ translateY: Math.min(0, scrollPosition.get() - bannerHeight) });
    return obj;
  };
  fn2.__closure = { scrollPosition, bannerHeight };
  fn2.__workletHash = 3877270083017;
  fn2.__initData = __initData4;
  const animatedStyle1 = obj2.useAnimatedStyle(fn2);
  const obj3 = FavoritesUtils;
  const isFavoritesGuildIdResult = obj3.isFavoritesGuildId(guild.id);
  const obj4 = { style: items, children: items1 };
  items = [animatedStyle, { overflow: "hidden" }];
  const obj5 = { style: animatedStyle1, children: map1(ThemedGradientDefault, { absolute: true, tall: true }) };
  const tmp5 = REAWorkaroundViewDefault;
  const tmp6 = REAWorkaroundViewDefault;
  items1 = [map1(tmp6, obj5), ];
  const obj6 = { style: tmp.headerWrapper, children: map1(ChannelListStickyHeaderDefault, obj7) };
  obj7 = { guild, showExtraButtons: !isFavoritesGuildIdResult, canOpenGuildActionSheet: !isFavoritesGuildIdResult, showCoachmarks: !isFavoritesGuildIdResult };
  items1[1] = map1(hasOwnProperty, obj6);
  return authStore2(tmp5, obj4);
});
const __initData5 = { code: "function RedesignGuildHeaderTsx5(){const{scrollPosition,interpolate,maxScrollPosition,bannerHeight}=this.__closure;const scrollPosValue=scrollPosition.get();return{opacity:interpolate(scrollPosValue,[0,maxScrollPosition],[1,0],\"clamp\"),transform:[{translateY:scrollPosValue>=0?interpolate(-scrollPosValue,[0,bannerHeight],[0,-bannerHeight],\"clamp\"):scrollPosValue/2},{scale:scrollPosValue>=0?1:(bannerHeight-scrollPosValue)/bannerHeight}]};}" };
const __initData6 = { code: "function RedesignGuildHeaderTsx6(){const{interpolate,pressed}=this.__closure;return{opacity:interpolate(pressed.get(),[0,1],[0,0.3])};}" };
const __initData7 = { code: "function RedesignGuildHeaderTsx7(){const{scrollPosition,interpolate,maxScrollPosition,bannerHeight}=this.__closure;const scrollPosValue=scrollPosition.get();return{opacity:interpolate(scrollPosValue,[0,maxScrollPosition],[1,0],'clamp'),transform:[{translateY:scrollPosValue>=0?interpolate(-scrollPosValue,[0,bannerHeight],[0,-bannerHeight],'clamp'):scrollPosValue/2},{scale:scrollPosValue>=0?1:(bannerHeight-scrollPosValue)/bannerHeight}]};}" };
const __initData8 = { code: "function RedesignGuildHeaderTsx8(){const{interpolate,pressed}=this.__closure;return{opacity:interpolate(pressed.get(),[0,1],[0,0.3])};}" };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_29 = ReactCompilerGating.isReactCompilerEnabled() ? ((guild) => {
  let actionSheetOpen;
  let bannerHeight;
  let bannerWidth;
  let first;
  let key;
  let onPress;
  let tmp7;
  let tmp8;
  let useReducedMotion;
  const tmp = guild;
  let obj = guild(bannerHeight[8]);
  const cResult = obj.c(49);
  guild = guild.guild;
  const scrollPosition = guild.scrollPosition;
  bannerHeight = guild.bannerHeight;
  ({ bannerWidth, onPress } = guild);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = { ignoreKeyboard: true };
    cResult[0] = obj2;
    first = obj2;
  } else {
    first = cResult[0];
  }
  closure_18(scrollPosition(tmp2[26])(first).height);
  const tmp5 = scrollPosition;
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [ActionSheetStore, AccessibilityStore];
    class T {
      constructor() {
        const obj = { actionSheetOpen: null != key.getKey(), useReducedMotion: useReducedMotion.useReducedMotion };
        return obj;
      }
    }
    let num2 = 1;
    cResult[1] = items;
    cResult[2] = T;
    tmp8 = T;
    tmp7 = items;
  } else {
    tmp7 = cResult[1];
    tmp8 = cResult[2];
  }
  const tmpResult = tmp(tmp2[27]);
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(tmp7, tmp8);
  ({ actionSheetOpen, useReducedMotion } = stateFromStoresObject);
  tmp5(bannerHeight[15])(guild.id);
  const tmpResult5 = tmp(bannerHeight[28]);
  const isFocused = tmpResult5.useIsFocused();
  const tmpResult6 = tmp(bannerHeight[22]);
  const sharedValue = tmpResult6.useSharedValue(0);
  if (cResult[3] !== sharedValue) {
    class A {
      constructor() {
        set = sharedValue.set;
        const obj = spring;
        const result = set(obj.withSpring(1, springPresets.springStandard, "animate-always"));
      }
    }
    cResult[3] = sharedValue;
    cResult[4] = A;
    class T {
      constructor() {
        const obj = { actionSheetOpen: null != key.getKey(), useReducedMotion: useReducedMotion.useReducedMotion };
        return obj;
      }
    }
  } else {
    class A {
      constructor() {
        set = sharedValue.set;
        const obj = spring;
        const result = set(obj.withSpring(1, springPresets.springStandard, "animate-always"));
      }
    }
  }
  if (cResult[5] !== sharedValue) {
    class B {
      constructor() {
        set = sharedValue.set;
        const obj = spring;
        const result = set(obj.withSpring(0, springPresets.springStandard, "animate-always"));
      }
    }
    cResult[5] = sharedValue;
    cResult[6] = B;
    class T {
      constructor() {
        const obj = { actionSheetOpen: null != key.getKey(), useReducedMotion: useReducedMotion.useReducedMotion };
        return obj;
      }
    }
  } else {
    class B {
      constructor() {
        set = sharedValue.set;
        const obj = spring;
        const result = set(obj.withSpring(0, springPresets.springStandard, "animate-always"));
      }
    }
  }
  if (cResult[7] === guild) {
    class B {
      constructor() {
        set = sharedValue.set;
        const obj = spring;
        const result = set(obj.withSpring(0, springPresets.springStandard, "animate-always"));
      }
    }
    tmp(bannerHeight[22]);
    class V {
      constructor() {
        let interpolateResult;
        let items;
        let items3;
        let obj2;
        const value = scrollPosition.get();
        const obj = { opacity: obj2.interpolate(value, items, [1, 0], "clamp"), transform: items3 };
        items = [0, bannerHeight];
        obj2 = ReanimatedRexport;
        if (value >= 0) {
          const items1 = [0, bannerHeight];
          const items2 = [0, -bannerHeight];
          const tmp2Result = ReanimatedRexport;
          interpolateResult = tmp2Result.interpolate(-value, items1, items2, "clamp");
        } else {
          interpolateResult = value / 2;
        }
        items3 = [{ translateY: interpolateResult }, ];
        let num2 = 1;
        if (value < 0) {
          num2 = (bannerHeight - value) / bannerHeight;
        }
        items3[1] = { scale: num2 };
        return obj;
      }
    }
    const obj3 = { scrollPosition, interpolate: tmp(bannerHeight[22]).interpolate, maxScrollPosition: bannerHeight, bannerHeight };
    class T {
      constructor() {
        const obj = { actionSheetOpen: null != key.getKey(), useReducedMotion: useReducedMotion.useReducedMotion };
        return obj;
      }
    }
    V.__closure = obj3;
    V.__workletHash = 16869905948656;
    V.__initData = __initData5;
    tmp16(V);
    const tmpResult8 = tmp(bannerHeight[22]);
    class D {
      constructor() {
        let obj2;
        const obj = { opacity: obj2.interpolate(sharedValue.get(), [0, 1], [0, 0.3]) };
        obj2 = ReanimatedRexport;
        return obj;
      }
    }
    const useAnimatedStyle = tmpResult8.useAnimatedStyle;
    D.__closure = { interpolate: tmp(bannerHeight[22]).interpolate, pressed: sharedValue };
    D.__workletHash = 9592007067426;
    D.__initData = __initData6;
    const obj4 = { interpolate: tmp(bannerHeight[22]).interpolate, pressed: sharedValue };
    const animatedStyle = useAnimatedStyle(D);
    let result = bannerWidth / 2 * -1;
    const result1 = bannerHeight / 2 * -1;
    if (cResult[10] === bannerHeight) {
      class B {
        constructor() {
          set = sharedValue.set;
          const obj = spring;
          const result = set(obj.withSpring(0, springPresets.springStandard, "animate-always"));
        }
      }
    }
    size = { width: bannerWidth, height: bannerHeight, marginLeft: result, marginTop: result1 };
    cResult[10] = bannerHeight;
    cResult[11] = bannerWidth;
    cResult[12] = result;
    cResult[13] = result1;
    cResult[14] = size;
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
}) : ((guild) => {
  let actionSheetOpen;
  let items5;
  let items6;
  let key;
  let obj9;
  let tmp19;
  let useReducedMotion;
  guild = guild.guild;
  const scrollPosition = guild.scrollPosition;
  const bannerWidth = guild.bannerWidth;
  const onPress = guild.onPress;
  let bannerHeight;
  let sharedValue;
  const tmp = scrollPosition;
  const tmp3 = closure_18(scrollPosition(bannerHeight[26])({ ignoreKeyboard: true }).height);
  const guildBanner = tmp3;
  let obj = guild(bannerHeight[27]);
  let items = [ActionSheetStore, sharedValue];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const obj = { actionSheetOpen: null != key.getKey(), useReducedMotion: sharedValue.useReducedMotion };
    return obj;
  });
  ({ useReducedMotion, actionSheetOpen } = stateFromStoresObject);
  let tmp17Result = scrollPosition(bannerHeight[15])(guild.id);
  let obj2 = guild(bannerHeight[28]);
  const isFocused = obj2.useIsFocused();
  const obj3 = guild(bannerHeight[22]);
  sharedValue = obj3.useSharedValue(0);
  let items1 = [sharedValue];
  let items2 = [sharedValue];
  const callback = bannerWidth.useCallback(() => {
    set = sharedValue.set;
    const obj = spring;
    const result = set(obj.withSpring(1, springPresets.springStandard, "animate-always"));
  }, items1);
  let items3 = [guild, onPress];
  const callback1 = bannerWidth.useCallback(() => {
    set = sharedValue.set;
    const obj = spring;
    const result = set(obj.withSpring(0, springPresets.springStandard, "animate-always"));
  }, items2);
  const callback2 = bannerWidth.useCallback(() => {
    if (onPress != null) {
      tmp();
    }
    openGuildActionSheetDefault(guild);
  }, items3);
  const fn = function p() {
    let interpolateResult;
    let items;
    let items3;
    let obj2;
    const value = scrollPosition.get();
    const obj = { opacity: obj2.interpolate(value, items, [1, 0], "clamp"), transform: items3 };
    items = [0, bannerHeight];
    obj2 = ReanimatedRexport;
    if (value >= 0) {
      const items1 = [0, bannerHeight];
      const items2 = [0, -bannerHeight];
      const tmp2Result = ReanimatedRexport;
      interpolateResult = tmp2Result.interpolate(-value, items1, items2, "clamp");
    } else {
      interpolateResult = value / 2;
    }
    items3 = [{ translateY: interpolateResult }, ];
    let num2 = 1;
    if (value < 0) {
      num2 = (bannerHeight - value) / bannerHeight;
    }
    items3[1] = { scale: num2 };
    return obj;
  };
  const obj4 = guild(bannerHeight[22]);
  fn.__closure = { scrollPosition, interpolate: guild(bannerHeight[22]).interpolate, maxScrollPosition: bannerHeight, bannerHeight };
  fn.__workletHash = 16730769342770;
  fn.__initData = __initData7;
  ({ scrollPosition, interpolate: guild(bannerHeight[22]).interpolate, maxScrollPosition: bannerHeight, bannerHeight });
  const animatedStyle = obj4.useAnimatedStyle(fn);
  const fn2 = function b() {
    let obj2;
    const obj = { opacity: obj2.interpolate(sharedValue.get(), [0, 1], [0, 0.3]) };
    obj2 = ReanimatedRexport;
    return obj;
  };
  const obj6 = guild(bannerHeight[22]);
  fn2.__closure = { interpolate: guild(bannerHeight[22]).interpolate, pressed: sharedValue };
  fn2.__workletHash = 4829626805612;
  fn2.__initData = __initData8;
  const items4 = [tmp3, bannerWidth, bannerHeight];
  ({ interpolate: guild(bannerHeight[22]).interpolate, pressed: sharedValue });
  const animatedStyle1 = obj6.useAnimatedStyle(fn2);
  if (null == guild.banner) {
    return null;
  } else {
    let hasItem = !useReducedMotion && !actionSheetOpen && isFocused;
    if (hasItem) {
      const features = guild.features;
      hasItem = features.has(GuildFeatures.ANIMATED_BANNER);
    }
    const tmpResult = tmp(tmp2[32]);
    const animatableSourceWithFallback = tmpResult.getAnimatableSourceWithFallback(hasItem, (hasItem) => {
      const obj = AvatarUtilsDefault;
      const obj2 = { id: guild.id, banner: guild.banner };
      return obj.getGuildBannerSource(obj2, hasItem);
    });
    const obj8 = { style: animatedStyle, children: closure_14(tmp19, obj9) };
    obj9 = { style: tmp3.bannerWrapper, onPress: callback2, onPressIn: callback, onPressOut: callback1, children: items5 };
    const View = tmp(tmp2[22]).View;
    const obj10 = { style: tmp13, source: animatableSourceWithFallback };
    items5 = [closure_13(tmp(bannerHeight[33]), obj10), , ];
    const obj11 = { style: items6 };
    items6 = [tmp3.bannerOverlay, animatedStyle1];
    items5[1] = closure_13(tmp(bannerHeight[22]).View, obj11);
    tmp19 = bannerHeight;
    if (tmp17Result) {
      tmp17Result = closure_13(tmp(tmp2[34]), {});
    }
    items5[2] = tmp17Result;
    return closure_13(View, obj8);
  }
});
let size = size_mod;
let result1 = size.fileFinishedImporting("modules/channel_list_v2/native/RedesignGuildHeader.tsx");

export default memoResult;
export const useRedesignGuildHeaderHeight = tmp5;