import importAllResult from "createCacheKey";
import get_ActivityIndicator from "MINIMUM_HIT_AREA";
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import setContent from "setContent";
import initialize from "initialize";
import hairlineWidth from "hairlineWidth";
import { GuildFeatures } from "ME";
import jsxProd from "View";
import createCacheKey from "createCacheKey";
import createCacheKey from "createCacheKey";
import createCacheKey from "createCacheKey";
import createCacheKey from "createCacheKey";

let c10;
let c4;
let c5;
let closure_12;
let closure_14;
let closure_15;
let closure_6;
let unpackModuleId;
const require = arg1;
function GuildInfoHeader(bannerHeight) {
  let guild;
  let scrollPosition;
  ({ guild, scrollPosition } = bannerHeight);
  bannerHeight = bannerHeight.bannerHeight;
  let obj = scrollPosition(4054);
  const fn = function o() {
    let obj = { transform: null };
    obj = { translateY: Math.max(0, scrollPosition.get() - bannerHeight) };
    const items = [obj];
    obj[0] = items;
    return obj;
  };
  fn.__closure = { scrollPosition, bannerHeight };
  fn.__workletHash = 6302330113586;
  fn.__initData = closure_19;
  const animatedStyle = obj.useAnimatedStyle(fn);
  let obj1 = scrollPosition(4054);
  const fn2 = function u() {
    let obj = { transform: null };
    obj = { translateY: Math.min(0, scrollPosition.get() - bannerHeight) };
    const items = [obj];
    obj[0] = items;
    return obj;
  };
  fn2.__closure = { scrollPosition, bannerHeight };
  fn2.__workletHash = 16710117141903;
  fn2.__initData = closure_20;
  const animatedStyle1 = obj1.useAnimatedStyle(fn2);
  let obj2 = scrollPosition(1865);
  const isFavoritesGuildIdResult = obj2.isFavoritesGuildId(guild.id);
  obj = { style: items, children: null };
  items = [animatedStyle, { overflow: "hidden" }];
  const tmp = callback5();
  obj = { style: animatedStyle1, children: null };
  const tmp5 = bannerHeight(4055);
  obj[1] = callback(bannerHeight(4723), { absolute: true, tall: true });
  const items1 = [callback(bannerHeight(4055), obj), ];
  obj1 = { style: tmp.headerWrapper, children: callback(bannerHeight(15140), obj2) };
  obj2 = { guild, showExtraButtons: !isFavoritesGuildIdResult, canOpenGuildActionSheet: !isFavoritesGuildIdResult, showCoachmarks: !isFavoritesGuildIdResult };
  items1[1] = callback(closure_5, obj1);
  obj[1] = items1;
  return callback2(tmp5, obj);
}
function ReanimatedGuildBanner(guild) {
  let actionSheetOpen;
  let isLurking;
  let useReducedMotion;
  guild = guild.guild;
  const scrollPosition = guild.scrollPosition;
  let bannerHeight = guild.bannerHeight;
  const bannerWidth = guild.bannerWidth;
  const onPress = guild.onPress;
  let c5;
  bannerHeight = undefined;
  let sharedValue;
  const tmp3 = callback4(scrollPosition(bannerHeight[24])().height);
  c5 = tmp3;
  let obj = guild(bannerHeight[25]);
  let items = [setContent, sharedValue, initialize];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ actionSheetOpen: null != outer1_8.getKey(), useReducedMotion: sharedValue.useReducedMotion, isLurking: outer1_9.isLurking(guild.id) }));
  ({ useReducedMotion, isLurking, actionSheetOpen } = stateFromStoresObject);
  let obj1 = guild(bannerHeight[26]);
  let obj2 = guild(bannerHeight[27]);
  const isFocused = obj2.useIsFocused();
  let obj3 = guild(bannerHeight[20]);
  sharedValue = obj3.useSharedValue(0);
  let items1 = [sharedValue];
  let items2 = [sharedValue];
  const callback = bannerWidth.useCallback(() => {
    const result = sharedValue.set(guild(bannerHeight[28]).withSpring(1, guild(bannerHeight[29]).springStandard, "animate-always"));
  }, items1);
  let items3 = [guild, onPress];
  const callback1 = bannerWidth.useCallback(() => {
    const result = sharedValue.set(guild(bannerHeight[28]).withSpring(0, guild(bannerHeight[29]).springStandard, "animate-always"));
  }, items2);
  const callback2 = bannerWidth.useCallback(() => {
    if (onPress != null) {
      tmp();
    }
    scrollPosition(bannerHeight[30])(guild);
  }, items3);
  let obj4 = guild(bannerHeight[20]);
  class H {
    constructor() {
      value = scrollPosition.get();
      obj = { opacity: null, transform: null };
      tmp2 = guild;
      tmp3 = bannerHeight;
      obj2 = guild(bannerHeight[20]);
      items = [0];
      items[1] = bannerHeight;
      obj[0] = obj2.interpolate(value, items, [1, 0], "clamp");
      if (value >= 0) {
        tmp2Result = tmp2(tmp3[20]);
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
      obj[1] = items3;
      return obj;
    }
  }
  obj = { scrollPosition, interpolate: guild(bannerHeight[20]).interpolate, maxScrollPosition: bannerHeight, bannerHeight };
  H.__closure = obj;
  H.__workletHash = 16532496584630;
  H.__initData = closure_22;
  const animatedStyle = obj4.useAnimatedStyle(H);
  const fn = function b() {
    const obj = { opacity: null };
    obj[0] = guild(bannerHeight[20]).interpolate(sharedValue.get(), [0, 1], [0, 0.3]);
    return obj;
  };
  obj = { interpolate: guild(bannerHeight[20]).interpolate, pressed: sharedValue };
  fn.__closure = obj;
  fn.__workletHash = 13777976622560;
  fn.__initData = closure_23;
  const items4 = [tmp3, bannerWidth, bannerHeight];
  const animatedStyle1 = guild(bannerHeight[20]).useAnimatedStyle(fn);
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
    const animatableSourceWithFallback = tmp(tmp2[31]).getAnimatableSourceWithFallback(hasItem, (hasItem) => {
      let obj = scrollPosition(bannerHeight[31]);
      obj = { id: guild.id, banner: guild.banner };
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
    obj3[0] = tmp12;
    obj3[1] = animatableSourceWithFallback;
    const items5 = [callback(tmp(tmp2[32]), obj3), , ];
    obj4 = { style: null };
    const items6 = [tmp3.bannerOverlay, animatedStyle1];
    obj4[0] = items6;
    items5[1] = callback(tmp(tmp2[20]).View, obj4);
    if (isLurking) {
      isLurking = obj1.useMobileLurkerServerPreview("RedesignGuildHeader").enabled;
    }
    if (isLurking) {
      isLurking = tmp16(tmp(tmp2[33]), {});
    }
    items5[2] = isLurking;
    obj2[4] = items5;
    obj1[1] = closure_15(bannerHeight, obj2);
    return callback(tmp(tmp2[20]).View, obj1);
  }
  const obj7 = guild(bannerHeight[20]);
}
let c3 = importAllResult;
({ StyleSheet: c4, View: c5, Pressable: closure_6 } = get_ActivityIndicator);
({ STICKY_BANNER_ASPECT_RATIO: c10, BANNER_MAX_HEIGHT_PERCENTAGE: unpackModuleId, SEARCH_BAR_MARGIN_BOTTOM: closure_12 } = hairlineWidth);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
let closure_16 = createCacheKey.createStyles(() => ({ guildHeaderWrapper: { zIndex: 5 } }));
let closure_17 = createCacheKey.createStyles((arg0) => {
  obj = { bannerWrapper: obj, guildBanner: { left: "50%", top: "50%" }, bannerOverlay: null };
  obj = { width: "100%", maxHeight: arg0 * closure_11, aspectRatio: closure_10, overflow: "hidden" };
  obj = {};
  const merged = Object.assign(absoluteFillObject.absoluteFillObject);
  obj.backgroundColor = importDefault(712).colors.BLACK;
  obj[2] = obj;
  return obj;
});
let result = createCacheKey.experimental_createToken((gradient) => {
  if (null != gradient.gradient) {
    let PANEL_BG = importDefault(712).colors.BACKGROUND_BASE_LOW;
  } else {
    PANEL_BG = importDefault(712).colors.PANEL_BG;
  }
  return PANEL_BG;
});
let closure_18 = createCacheKey.createStyles({ headerWrapper: { backgroundColor: result } });
let closure_19 = { code: "function RedesignGuildHeaderTsx1(){const{scrollPosition,bannerHeight}=this.__closure;return{transform:[{translateY:Math.max(0,scrollPosition.get()-bannerHeight)}]};}" };
let closure_20 = { code: "function RedesignGuildHeaderTsx2(){const{scrollPosition,bannerHeight}=this.__closure;return{transform:[{translateY:Math.min(0,scrollPosition.get()-bannerHeight)}]};}" };
let closure_22 = { code: "function RedesignGuildHeaderTsx3(){const{scrollPosition,interpolate,maxScrollPosition,bannerHeight}=this.__closure;const scrollPosValue=scrollPosition.get();return{opacity:interpolate(scrollPosValue,[0,maxScrollPosition],[1,0],'clamp'),transform:[{translateY:scrollPosValue>=0?interpolate(-scrollPosValue,[0,bannerHeight],[0,-bannerHeight],'clamp'):scrollPosValue/2},{scale:scrollPosValue>=0?1:(bannerHeight-scrollPosValue)/bannerHeight}]};}" };
let closure_23 = { code: "function RedesignGuildHeaderTsx4(){const{interpolate,pressed}=this.__closure;return{opacity:interpolate(pressed.get(),[0,1],[0,0.3])};}" };
const memoResult = importAllResult.memo(function RedesignGuildHeader(bannerWidth) {
  let bannerHeight;
  let guild;
  let scrollPosition;
  ({ guild, scrollPosition, bannerHeight } = bannerWidth);
  let obj = { style: callback3().guildHeaderWrapper, preventClipping: true, children: null };
  const items = [callback(ReanimatedGuildBanner, { guild, scrollPosition, bannerHeight, bannerWidth: bannerWidth.bannerWidth }), ];
  obj = { guild, scrollPosition, bannerHeight: null };
  let num = 0;
  if (null != guild.banner) {
    num = bannerHeight;
  }
  obj[2] = num;
  items[1] = callback(GuildInfoHeader, obj);
  obj[2] = items;
  return closure_15(closure_5, obj);
});
const result1 = require("maybeApplyNoTextColorForLightCustomTheme").fileFinishedImporting("modules/channel_list_v2/native/RedesignGuildHeader.tsx");

export default memoResult;
export const useRedesignGuildHeaderHeight = function useRedesignGuildHeaderHeight(id) {
  let isThemeDarkResult = importDefault(8834)();
  if (!isThemeDarkResult) {
    isThemeDarkResult = require(4039) /* AccessibilityAnnouncer */.isThemeDark(tmp4);
    const obj = require(4039) /* AccessibilityAnnouncer */;
  }
  const fontScale = require(4610) /* getFontScale */.useFontScale();
  const obj2 = require(4610) /* getFontScale */;
  const tmp8 = null != importDefault(15139)(id);
  const isFavoritesGuildIdResult = require(1865) /* getFavoritesAwareGuildName */.isFavoritesGuildId(id.id);
  const obj3 = require(1865) /* getFavoritesAwareGuildName */;
  const scaleTextLineHeightResult = require(9925) /* map */.scaleTextLineHeight("redesign/heading-18/bold", fontScale);
  let num = 0;
  if (isThemeDarkResult) {
    num = 1;
  }
  let tmp6Result = tmp6(3897);
  let num2 = 0;
  const token = tmp6Result.useToken(tmp(712).modules.mobile.CHANNEL_LIST_SUBTITLE_TEXT_STYLE);
  if (!isFavoritesGuildIdResult) {
    num2 = tmp6(4608).SMALL_BUTTON_HEIGHT + closure_12;
  }
  let num3 = 16;
  if (isFavoritesGuildIdResult) {
    num3 = 12;
  }
  let num4 = 0;
  if (tmp8) {
    tmp6Result = tmp6(9925);
    num4 = tmp6Result.scaleTextLineHeight(token, fontScale);
  }
  let bound = scaleTextLineHeightResult;
  if (isFavoritesGuildIdResult) {
    const _Math = Math;
    bound = Math.max(scaleTextLineHeightResult, tmp6(4608).SMALL_BUTTON_HEIGHT);
  }
  return importDefault(9927)(16 + bound + num4 + num2 + num3 + num);
};