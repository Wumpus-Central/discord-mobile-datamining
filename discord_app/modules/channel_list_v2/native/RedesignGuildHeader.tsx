// === Module 15395: GuildInfoHeader ===

// Module 15395 (GuildInfoHeader)
import ThemesDefault from "Themes" /* 712 */;
import AccessibilityAnnouncer from "AccessibilityAnnouncer" /* 1363 */;
import getFavoritesAwareGuildName from "getFavoritesAwareGuildName" /* 1913 */;
import map from "map" /* 4097 */;
import MINIMUM_HIT_AREA from "MINIMUM_HIT_AREA" /* 4749 */;
import getFontScale from "getFontScale" /* 4751 */;
import useIsUsingClientThemeDefault from "useIsUsingClientTheme" /* 8502 */;
import map2 from "map" /* 9288 */;
import tDefault from "t" /* 11259 */;
import useIsGameCommunityServerPreviewDefault from "useIsGameCommunityServerPreview" /* 15367 */;
import useStickyServerHeaderSubtitleDefault from "useStickyServerHeaderSubtitle" /* 15396 */;
import importAllResult from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme" /* 4662 */;
import setContent from "setContent" /* 4086 */;
import hairlineWidth from "hairlineWidth" /* 10055 */;
import { GuildFeatures } from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

require = fn;
function GuildInfoHeader(bannerHeight) {
  ({ guild, scrollPosition } = bannerHeight);
  bannerHeight = bannerHeight.bannerHeight;
  let obj = scrollPosition(4115);
  const fn = function s() {
    const obj = { translateY: Math.max(0, scrollPosition.get() - bannerHeight) };
    const items = [obj];
    obj[0] = items;
    return obj;
  };
  fn.__closure = { scrollPosition, bannerHeight };
  fn.__workletHash = 6302330113586;
  fn.__initData = closure_18;
  const animatedStyle = obj.useAnimatedStyle(fn);
  obj1 = scrollPosition(4115);
  const fn2 = function u() {
    const obj = { translateY: Math.min(0, scrollPosition.get() - bannerHeight) };
    const items = [obj];
    obj[0] = items;
    return obj;
  };
  fn2.__closure = { scrollPosition, bannerHeight };
  fn2.__workletHash = 16710117141903;
  fn2.__initData = closure_19;
  const animatedStyle1 = obj1.useAnimatedStyle(fn2);
  let obj2 = scrollPosition(1913);
  const isFavoritesGuildIdResult = obj2.isFavoritesGuildId(guild.id);
  let items = [animatedStyle, { overflow: "hidden" }];
  const tmp = callback5();
  obj = { style: animatedStyle1, children: null };
  const tmp5 = bannerHeight(4116);
  obj[1] = callback(bannerHeight(9091), { absolute: true, tall: true });
  const items1 = [callback(bannerHeight(4116), obj), ];
  obj1 = { style: tmp.headerWrapper, children: callback(bannerHeight(15397), obj2) };
  obj2 = { guild, showExtraButtons: !isFavoritesGuildIdResult, canOpenGuildActionSheet: !isFavoritesGuildIdResult, showCoachmarks: !isFavoritesGuildIdResult };
  items1[1] = callback(closure_5, obj1);
  obj[1] = items1;
  return callback2(tmp5, obj);
}
function ReanimatedGuildBanner(guild) {
  guild = guild.guild;
  const scrollPosition = guild.scrollPosition;
  const bannerWidth = guild.bannerWidth;
  const onPress = guild.onPress;
  let bannerHeight;
  let sharedValue;
  const tmp3 = callback4(scrollPosition(bannerHeight[24])().height);
  closure_5 = tmp3;
  let obj = guild(bannerHeight[25]);
  let items = [closure_8, sharedValue];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ actionSheetOpen: null != key.getKey(), useReducedMotion: sharedValue.useReducedMotion }));
  ({ useReducedMotion, actionSheetOpen } = stateFromStoresObject);
  let tmp17Result = scrollPosition(bannerHeight[13])(guild.id);
  obj1 = guild(bannerHeight[26]);
  const isFocused = obj1.useIsFocused();
  let obj2 = guild(bannerHeight[20]);
  sharedValue = obj2.useSharedValue(0);
  let items1 = [sharedValue];
  let items2 = [sharedValue];
  const callback = bannerWidth.useCallback(() => {
    const result = sharedValue.set(guild(bannerHeight[27]).withSpring(1, guild(bannerHeight[28]).springStandard, "animate-always"));
  }, items1);
  let items3 = [guild, onPress];
  const callback1 = bannerWidth.useCallback(() => {
    const result = sharedValue.set(guild(bannerHeight[27]).withSpring(0, guild(bannerHeight[28]).springStandard, "animate-always"));
  }, items2);
  const callback2 = bannerWidth.useCallback(() => {
    if (onPress != null) {
      tmp();
    }
    scrollPosition(bannerHeight[29])(guild);
  }, items3);
  let obj3 = guild(bannerHeight[20]);
  const fn = function p() {
    const value = scrollPosition.get();
    const obj = { opacity: guild(bannerHeight[20]).interpolate(value, items, [1, 0], "clamp"), transform: null };
    items = [0, bannerHeight];
    if (value >= 0) {
      const tmp2Result = guild(bannerHeight[20]);
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
    obj[1] = items3;
    return obj;
  };
  obj = { scrollPosition, interpolate: guild(bannerHeight[20]).interpolate, maxScrollPosition: bannerHeight, bannerHeight };
  fn.__closure = obj;
  fn.__workletHash = 16532496584630;
  fn.__initData = closure_21;
  const animatedStyle = obj3.useAnimatedStyle(fn);
  class H {
    constructor() {
      obj = { opacity: null };
      obj2 = guild(bannerHeight[20]);
      obj[0] = obj2.interpolate(closure_7.get(), [0, 1], [0, 0.3]);
      return obj;
    }
  }
  obj = { interpolate: guild(bannerHeight[20]).interpolate, pressed: sharedValue };
  H.__closure = obj;
  H.__workletHash = 13777976622560;
  H.__initData = closure_22;
  const items4 = [tmp3, bannerWidth, bannerHeight];
  const animatedStyle1 = guild(bannerHeight[20]).useAnimatedStyle(H);
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
    const animatableSourceWithFallback = tmp(tmp2[30]).getAnimatableSourceWithFallback(hasItem, (hasItem) => {
      scrollPosition(bannerHeight[30]);
      const obj = { id: guild.id, banner: guild.banner };
      return obj.getGuildBannerSource(obj, hasItem);
    });
    obj1 = { style: null, children: null };
    obj1[0] = animatedStyle;
    obj2 = { style: null, onPress: null, onPressIn: null, onPressOut: null, children: null };
    obj2[0] = tmp3.bannerWrapper;
    obj2[1] = callback2;
    obj2[2] = callback;
    obj2[3] = callback1;
    obj3 = { style: null, source: null };
    obj3[0] = tmp13;
    obj3[1] = animatableSourceWithFallback;
    const items5 = [callback(tmp(tmp2[31]), obj3), , ];
    const obj4 = { style: null };
    const items6 = [tmp3.bannerOverlay, animatedStyle1];
    obj4[0] = items6;
    items5[1] = callback(tmp(tmp2[20]).View, obj4);
    if (tmp17Result) {
      tmp17Result = tmp17(tmp(tmp2[32]), {});
    }
    items5[2] = tmp17Result;
    obj2[4] = items5;
    obj1[1] = callback(bannerHeight, obj2);
    return callback(tmp(tmp2[20]).View, obj1);
  }
  const obj6 = guild(bannerHeight[20]);
}
let c3 = importAllResult;
({ StyleSheet: c4, View: c5, Pressable: closure_6 } = get_ActivityIndicator);
({ STICKY_BANNER_ASPECT_RATIO: c9, BANNER_MAX_HEIGHT_PERCENTAGE: c10, SEARCH_BAR_MARGIN_BOTTOM: unpackModuleId } = hairlineWidth);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
let closure_15 = createCacheKey.createStyles(() => ({ guildHeaderWrapper: { zIndex: 5 } }));
let closure_16 = createCacheKey.createStyles((arg0) => {
  const obj = {};
  const merged = Object.assign(absoluteFillObject.absoluteFillObject);
  obj.backgroundColor = ThemesDefault.colors.BLACK;
  obj[2] = obj;
  return obj;
});
let result = createCacheKey.experimental_createToken((gradient) => {
  if (null != gradient.gradient) {
    let PANEL_BG = ThemesDefault.colors.BACKGROUND_BASE_LOW;
  } else {
    PANEL_BG = ThemesDefault.colors.PANEL_BG;
  }
  return PANEL_BG;
});
let closure_17 = createCacheKey.createStyles({ headerWrapper: { backgroundColor: result } });
let closure_18 = { code: "function RedesignGuildHeaderTsx1(){const{scrollPosition,bannerHeight}=this.__closure;return{transform:[{translateY:Math.max(0,scrollPosition.get()-bannerHeight)}]};}" };
let closure_19 = { code: "function RedesignGuildHeaderTsx2(){const{scrollPosition,bannerHeight}=this.__closure;return{transform:[{translateY:Math.min(0,scrollPosition.get()-bannerHeight)}]};}" };
let closure_21 = { code: "function RedesignGuildHeaderTsx3(){const{scrollPosition,interpolate,maxScrollPosition,bannerHeight}=this.__closure;const scrollPosValue=scrollPosition.get();return{opacity:interpolate(scrollPosValue,[0,maxScrollPosition],[1,0],'clamp'),transform:[{translateY:scrollPosValue>=0?interpolate(-scrollPosValue,[0,bannerHeight],[0,-bannerHeight],'clamp'):scrollPosValue/2},{scale:scrollPosValue>=0?1:(bannerHeight-scrollPosValue)/bannerHeight}]};}" };
let closure_22 = { code: "function RedesignGuildHeaderTsx4(){const{interpolate,pressed}=this.__closure;return{opacity:interpolate(pressed.get(),[0,1],[0,0.3])};}" };
const memoResult = importAllResult.memo(function RedesignGuildHeader(bannerWidth) {
  ({ guild, scrollPosition, bannerHeight } = bannerWidth);
  { style: callback3().guildHeaderWrapper, preventClipping: true, children: null };
  const items = [callback(ReanimatedGuildBanner, { guild, scrollPosition, bannerHeight, bannerWidth: bannerWidth.bannerWidth }), ];
  const obj = { guild, scrollPosition, bannerHeight: null };
  let num = 0;
  if (null != guild.banner) {
    num = bannerHeight;
  }
  obj[2] = num;
  items[1] = callback(GuildInfoHeader, obj);
  obj[2] = items;
  return callback(closure_5, obj);
});
const result1 = require("obj132").fileFinishedImporting("modules/channel_list_v2/native/RedesignGuildHeader.tsx");

export default memoResult;
export const useRedesignGuildHeaderHeight = function useRedesignGuildHeaderHeight(id) {
  const tmp3 = useIsUsingClientThemeDefault();
  let isThemeDarkResult = tmp3;
  if (!tmp3) {
    isThemeDarkResult = AccessibilityAnnouncer.isThemeDark(tmp4);
  }
  const fontScale = getFontScale.useFontScale();
  const tmp9 = null != useStickyServerHeaderSubtitleDefault(id);
  const isFavoritesGuildIdResult = getFavoritesAwareGuildName.isFavoritesGuildId(id.id);
  const tmp11 = useIsGameCommunityServerPreviewDefault(id.id);
  const scaleTextLineHeightResult = map2.scaleTextLineHeight("redesign/heading-18/bold", fontScale);
  let num = 0;
  if (isThemeDarkResult) {
    num = 1;
  }
  let tmp7Result = map;
  let num2 = 0;
  const token = tmp7Result.useToken(ThemesDefault.modules.mobile.CHANNEL_LIST_SUBTITLE_TEXT_STYLE);
  if (!isFavoritesGuildIdResult) {
    num2 = MINIMUM_HIT_AREA.SMALL_BUTTON_HEIGHT + closure_11;
  }
  let num3 = 0;
  if (tmp11) {
    num3 = 8 + MINIMUM_HIT_AREA.MEDIUM_BUTTON_HEIGHT + 8;
  }
  let num5 = 16;
  if (isFavoritesGuildIdResult) {
    num5 = 12;
  }
  let num6 = 0;
  if (tmp9) {
    tmp7Result = map2;
    num6 = tmp7Result.scaleTextLineHeight(token, fontScale);
  }
  let bound = scaleTextLineHeightResult;
  if (isFavoritesGuildIdResult) {
    const _Math = Math;
    bound = Math.max(scaleTextLineHeightResult, MINIMUM_HIT_AREA.SMALL_BUTTON_HEIGHT);
  }
  return tDefault(16 + bound + num6 + num2 + num3 + num5 + num);
};