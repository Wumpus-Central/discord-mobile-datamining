// === Module 18727: RedesignGuildHeader ===

// Module 18727 (RedesignGuildHeader)
import nativeDefault from "native" /* 575 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1411 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1493 */;
import _mod1652 from "module_1652" /* 1652 */;
import FavoritesUtils from "FavoritesUtils" /* 5117 */;
import shared from "shared" /* 5250 */;
import useToken from "useToken" /* 5839 */;
import spring_spring from "spring/spring" /* 5876 */;
import springPresets from "springPresets" /* 5877 */;
import ButtonConstants from "ButtonConstants" /* 5879 */;
import useFontScale from "useFontScale" /* 5881 */;
import useScaledTextLineHeight from "useScaledTextLineHeight" /* 5998 */;
import useIsUsingClientThemeDefault from "useIsUsingClientTheme" /* 8995 */;
import ThemedGradientDefault from "ThemedGradient" /* 10204 */;
import roundToNearestPixelDefault from "roundToNearestPixel" /* 10509 */;
import openGuildActionSheetDefault from "openGuildActionSheet" /* 16229 */;
import useIsGameCommunityServerPreviewDefault from "useIsGameCommunityServerPreview" /* 18700 */;
import useStickyServerHeaderSubtitleDefault from "useStickyServerHeaderSubtitle" /* 18728 */;
import ChannelListStickyHeaderDefault from "ChannelListStickyHeader" /* 18729 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5244 */;
import ActionSheetStore from "ActionSheetStore" /* 5490 */;

const _modDef1652 = _mod1652;

require = fn;
function GuildInfoHeader(arg0) {
  ({ guild, scrollPosition, bannerHeight } = arg0);
  const tmp = closure_17();
  items = [closure_18, scrollPosition, bannerHeight];
  c0 = undefined;
  c1 = undefined;
  [tmp4, tmp5, tmp6] = items;
  class RedesignGuildHeaderTsx1 {
    constructor() {
      obj = { transform: null };
      obj1 = { translateY: Math.max(0, closure_0.get() - closure_1) };
      items = [];
      items[0] = obj1;
      obj.transform = items;
      return obj;
    }
  }
  const items1 = [tmp5, tmp6];
  RedesignGuildHeaderTsx1.__closure = items1;
  RedesignGuildHeaderTsx1.__workletHash = 13966142429483;
  RedesignGuildHeaderTsx1.__initData = tmp4;
  const animatedStyle = _mod1652.useAnimatedStyle(RedesignGuildHeaderTsx1);
  const items2 = [closure_19, scrollPosition, bannerHeight];
  c0 = undefined;
  c1 = undefined;
  [tmp8, tmp9, tmp10] = items2;
  class RedesignGuildHeaderTsx2 {
    constructor() {
      obj = { transform: null };
      obj1 = { translateY: Math.min(0, closure_0.get() - closure_1) };
      items = [];
      items[0] = obj1;
      obj.transform = items;
      return obj;
    }
  }
  const items3 = [tmp9, tmp10];
  RedesignGuildHeaderTsx2.__closure = items3;
  RedesignGuildHeaderTsx2.__workletHash = 1812402588726;
  RedesignGuildHeaderTsx2.__initData = tmp8;
  const animatedStyle1 = _mod1652.useAnimatedStyle(RedesignGuildHeaderTsx2);
  const tmp2Result = _mod1652;
  const isFavoritesGuildIdResult = FavoritesUtils.isFavoritesGuildId(guild.id);
  const obj2 = { style: null, children: null };
  const items4 = [animatedStyle, { overflow: "hidden" }];
  obj2.style = items4;
  const tmp2Result2 = FavoritesUtils;
  const items5 = [state(_modDef1652.View, { style: animatedStyle1, children: state(ThemedGradientDefault, { absolute: true, tall: true }) }), ];
  const obj4 = { style: tmp.headerWrapper, children: state(ChannelListStickyHeaderDefault, { guild, showExtraButtons: !isFavoritesGuildIdResult, canOpenGuildActionSheet: !isFavoritesGuildIdResult, showCoachmarks: !isFavoritesGuildIdResult }) };
  items5[1] = state(hasOwnProperty, obj4);
  obj2.children = items5;
  return gesture(_modDef1652.View, obj2);
}
function ReanimatedGuildBanner(guild) {
  guild = guild.guild;
  _require = guild;
  const bannerHeight = guild.bannerHeight;
  const bannerWidth = guild.bannerWidth;
  const onPress = guild.onPress;
  noop = onPress;
  const tmp3 = closure_16(useWindowDimensionsDefault({ ignoreKeyboard: true }).height);
  const guildBanner = tmp3;
  items = [ActionSheetStore, AccessibilityStore];
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(items, () => ({ actionSheetOpen: null != key.getKey(), useReducedMotion: useReducedMotion.useReducedMotion }));
  ({ useReducedMotion, actionSheetOpen } = stateFromStoresObject);
  let tmp28Result = useIsGameCommunityServerPreviewDefault(guild.id);
  let obj = require("initialize");
  const isFocused = require("Link").useIsFocused();
  const obj2 = require("Link");
  const sharedValue = require("module_1652").useSharedValue(0);
  let items1 = [sharedValue];
  let items2 = [sharedValue];
  const callback = noop.useCallback(() => {
    const result = sharedValue.set(spring_spring.withSpring(1, springPresets.springStandard, "animate-always"));
  }, items1);
  let items3 = [guild, onPress];
  const callback1 = noop.useCallback(() => {
    const result = sharedValue.set(spring_spring.withSpring(0, springPresets.springStandard, "animate-always"));
  }, items2);
  const callback2 = noop.useCallback(() => {
    if (c3 != null) {
      tmp();
    }
    openGuildActionSheetDefault(c0);
  }, items3);
  const obj3 = require("module_1652");
  const items4 = [closure_21, guild.scrollPosition, require("module_1652").interpolate, bannerHeight, bannerHeight];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  noop = undefined;
  [tmp12, tmp13, tmp14, tmp15, tmp16] = items4;
  class RedesignGuildHeaderTsx3 {
    constructor() {
      value = closure_0.get();
      obj = { opacity: null, transform: null };
      items = [0];
      items[1] = closure_2;
      tmp2 = closure_1;
      obj.opacity = closure_1(value, items, [1, 0], "clamp");
      if (value >= 0) {
        tmp4 = closure_3;
        items1 = [0];
        items1[1] = closure_3;
        items2 = [0];
        items2[1] = -closure_3;
        tmp5 = items1;
        tmp6 = items2;
        str = "clamp";
        tmp2Result = tmp2(-value, items1, items2, "clamp");
      } else {
        num = 2;
        tmp2Result = value / 2;
      }
      items3 = [, ];
      items3[0] = { translateY: tmp2Result };
      num2 = 1;
      if (value < 0) {
        tmp7 = closure_3;
        num2 = (closure_3 - value) / closure_3;
      }
      items3[1] = { scale: num2 };
      obj.transform = items3;
      return obj;
    }
  }
  const items5 = [tmp13, tmp14, tmp15, tmp16];
  RedesignGuildHeaderTsx3.__closure = items5;
  RedesignGuildHeaderTsx3.__workletHash = 15340906770479;
  RedesignGuildHeaderTsx3.__initData = tmp12;
  const animatedStyle = require("module_1652").useAnimatedStyle(RedesignGuildHeaderTsx3);
  const obj4 = require("module_1652");
  const items6 = [closure_22, require("module_1652").interpolate, sharedValue];
  _require = undefined;
  importDefault = undefined;
  [tmp18, tmp19, tmp20] = items6;
  class RedesignGuildHeaderTsx4 {
    constructor() {
      obj = { opacity: closure_0(closure_1.get(), [0, 1], [0, 0.3]) };
      return obj;
    }
  }
  const items7 = [tmp19, tmp20];
  RedesignGuildHeaderTsx4.__closure = items7;
  RedesignGuildHeaderTsx4.__workletHash = 5027618291385;
  RedesignGuildHeaderTsx4.__initData = tmp18;
  const items8 = [tmp3, bannerWidth, bannerHeight];
  const animatedStyle1 = require("module_1652").useAnimatedStyle(RedesignGuildHeaderTsx4);
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
    const animatableSourceWithFallback = tmp(1411).getAnimatableSourceWithFallback(hasItem, (hasItem) => AvatarUtilsDefault.getGuildBannerSource({ id: _undefined.id, banner: _undefined.banner }, hasItem));
    const obj5 = { style: animatedStyle, children: null };
    const obj6 = { style: tmp3.bannerWrapper, accessibilityRole: "button", accessibilityLabel: guild.name, accessibilityHint: null, onPress: null, onPressIn: null, onPressOut: null, children: null };
    const intl = tmp4(1113).intl;
    obj6.accessibilityHint = intl.string(tmp4(1113).t["Gpyp/e"]);
    obj6.onPress = callback2;
    obj6.onPressIn = callback;
    obj6.onPressOut = callback1;
    const obj7 = { style: tmp22, source: animatableSourceWithFallback };
    const items9 = [closure_13(tmp(5957), obj7), ];
    const obj8 = { style: null };
    const items10 = [tmp3.bannerOverlay, animatedStyle1];
    obj8.style = items10;
    items9[1] = closure_13(tmp(1652).View, obj8);
    obj6.children = items9;
    const items11 = [closure_14(closure_6, obj6), ];
    if (tmp28Result) {
      tmp28Result = closure_13(tmp(18770), {});
    }
    items11[1] = tmp28Result;
    obj5.children = items11;
    return closure_14(tmp(1652).View, obj5);
  }
  const tmp4Result = require("module_1652");
}
get_ActivityIndicator = fn(17);
({ StyleSheet: closure_4, View: hasOwnProperty, Pressable: closure_6 } = get_ActivityIndicator);
const RedesignChannelListConstants = fn(5997);
({ STICKY_BANNER_ASPECT_RATIO: closure_9, BANNER_MAX_HEIGHT_PERCENTAGE: closure_10, SEARCH_BAR_MARGIN_BOTTOM: closure_11 } = RedesignChannelListConstants);
const GuildFeatures = fn(1072).GuildFeatures;
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
let createStyles = fn(5243);
let closure_15 = createStyles.createStyles(() => ({ guildHeaderWrapper: { zIndex: 5 } }));
createStyles = fn(5243);
let closure_16 = createStyles.createStyles((arg0) => {
  const obj = { bannerWrapper: { width: "100%", maxHeight: arg0 * closure_1_10, aspectRatio, overflow: "hidden" }, guildBanner: { left: "50%", top: "50%" }, bannerOverlay: null };
  const obj3 = {};
  const merged = Object.assign(absoluteFillObject.absoluteFillObject);
  obj3.backgroundColor = nativeDefault.colors.BLACK;
  obj.bannerOverlay = obj3;
  return obj;
});
createStyles = fn(5243);
let result = createStyles.experimental_createToken((gradient) => {
  if (null != gradient.gradient) {
    let PANEL_BG = nativeDefault.colors.BACKGROUND_BASE_LOW;
  } else {
    PANEL_BG = nativeDefault.colors.PANEL_BG;
  }
  return PANEL_BG;
});
createStyles = fn(5243);
let closure_17 = createStyles.createStyles({ headerWrapper: { backgroundColor: result } });
let closure_18 = { code: "(function RedesignGuildHeaderTsx1(){let[scrollPosition,bannerHeight]=this.__closure;return{transform:[{translateY:Math.max(0,scrollPosition.get()-bannerHeight)}]};})" };
let closure_19 = { code: "(function RedesignGuildHeaderTsx2(){let[scrollPosition,bannerHeight]=this.__closure;return{transform:[{translateY:Math.min(0,scrollPosition.get()-bannerHeight)}]};})" };
let closure_21 = { code: "(function RedesignGuildHeaderTsx3(){let[scrollPosition,interpolate,maxScrollPosition,bannerHeight]=this.__closure;const scrollPosValue=scrollPosition.get();return{opacity:interpolate(scrollPosValue,[0,maxScrollPosition],[1,0],'clamp'),transform:[{translateY:scrollPosValue>=0?interpolate(-scrollPosValue,[0,bannerHeight],[0,-bannerHeight],'clamp'):scrollPosValue/2},{scale:scrollPosValue>=0?1:(bannerHeight-scrollPosValue)/bannerHeight}]};})" };
let closure_22 = { code: "(function RedesignGuildHeaderTsx4(){let[interpolate,pressed]=this.__closure;return{opacity:interpolate(pressed.get(),[0,1],[0,0.3])};})" };
let size = fn(2);
const result1 = size.fileFinishedImporting("modules/channel_list_v2/native/RedesignGuildHeader.tsx");

export default noop.memo(function RedesignGuildHeader(bannerWidth) {
  ({ guild, scrollPosition, bannerHeight } = bannerWidth);
  const obj = { style: closure_15().guildHeaderWrapper, preventClipping: true, children: null };
  items = [state(ReanimatedGuildBanner, { guild, scrollPosition, bannerHeight, bannerWidth: bannerWidth.bannerWidth }), ];
  const obj2 = { guild, scrollPosition, bannerHeight: null };
  let num = 0;
  if (null != guild.banner) {
    num = bannerHeight;
  }
  obj2.bannerHeight = num;
  items[1] = state(GuildInfoHeader, obj2);
  obj.children = items;
  return gesture(hasOwnProperty, obj);
});
export function useRedesignGuildHeaderHeight(id) {
  const tmp3 = useIsUsingClientThemeDefault();
  let isThemeDarkResult = tmp3;
  if (!tmp3) {
    isThemeDarkResult = shared.isThemeDark(tmp4);
  }
  const fontScale = useFontScale.useFontScale();
  const tmp9 = null != useStickyServerHeaderSubtitleDefault(id);
  const isFavoritesGuildIdResult = FavoritesUtils.isFavoritesGuildId(id.id);
  const tmp11 = useIsGameCommunityServerPreviewDefault(id.id);
  const scaleTextLineHeightResult = useScaledTextLineHeight.scaleTextLineHeight("heading-md/semibold", fontScale);
  let num = 0;
  if (isThemeDarkResult) {
    num = 1;
  }
  let num2 = 0;
  const token = useToken.useToken(nativeDefault.modules.mobile.CHANNEL_LIST_SUBTITLE_TEXT_STYLE);
  if (!isFavoritesGuildIdResult) {
    num2 = ButtonConstants.SMALL_BUTTON_HEIGHT + closure_1_11;
  }
  let num3 = 0;
  if (tmp11) {
    num3 = 8 + ButtonConstants.MEDIUM_BUTTON_HEIGHT + 8;
  }
  let num5 = 16;
  if (isFavoritesGuildIdResult) {
    num5 = 12;
  }
  let num6 = 0;
  if (tmp9) {
    num6 = useScaledTextLineHeight.scaleTextLineHeight(token, fontScale);
    const tmp7Result2 = useScaledTextLineHeight;
  }
  let bound = scaleTextLineHeightResult;
  if (isFavoritesGuildIdResult) {
    const _Math = Math;
    bound = Math.max(scaleTextLineHeightResult, ButtonConstants.SMALL_BUTTON_HEIGHT);
  }
  return roundToNearestPixelDefault(16 + bound + num6 + num2 + num3 + num5 + num);
}