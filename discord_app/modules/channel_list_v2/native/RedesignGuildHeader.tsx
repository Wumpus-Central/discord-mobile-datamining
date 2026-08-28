// discord_app/modules/channel_list_v2/native/RedesignGuildHeader.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import AccessibilityAnnouncer from "../../../design/shared.tsx";
import getFavoritesAwareGuildName from "../../favorites/FavoritesUtils.tsx";
import getFontScale from "../../screen/native/useFontScale.tsx";
import useIsUsingClientThemeDefault from "../../client_themes/native/useIsUsingClientTheme.tsx";
import map from "../../screen/native/useScaledTextLineHeight.android.tsx";
import tDefault from "../../voice_panel/native/utils/roundToNearestPixel.tsx";
import useIsGameCommunityServerPreviewDefault from "../../lurker_mode/native/useIsGameCommunityServerPreview.tsx";
import useStickyServerHeaderSubtitleDefault from "hooks/useStickyServerHeaderSubtitle.tsx";
import importAllResult from "../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_7 from "../../a11y/AccessibilityStore.tsx";
import closure_8 from "../../action_sheet/native/ActionSheetStore.tsx";
import hairlineWidth from "RedesignChannelListConstants.tsx";
import { GuildFeatures } from "../../../Constants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
function GuildInfoHeader(bannerHeight) {
  ({ guild, scrollPosition } = bannerHeight);
  bannerHeight = bannerHeight.bannerHeight;
  let obj = scrollPosition(4186);
  const fn = function s() {
    let obj = { transform: null };
    obj = { translateY: Math.max(0, scrollPosition.get() - bannerHeight) };
    const items = [obj];
    obj[0] = items;
    return obj;
  };
  fn.__closure = { scrollPosition, bannerHeight };
  fn.__workletHash = 6302330113586;
  fn.__initData = closure_18;
  const animatedStyle = obj.useAnimatedStyle(fn);
  obj1 = scrollPosition(4186);
  const fn2 = function u() {
    let obj = { transform: null };
    obj = { translateY: Math.min(0, scrollPosition.get() - bannerHeight) };
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
  obj = { style: items, children: null };
  items = [animatedStyle, { overflow: "hidden" }];
  const tmp = callback5();
  obj = { style: animatedStyle1, children: null };
  const tmp5 = bannerHeight(4187);
  obj[1] = callback(bannerHeight(5035), { absolute: true, tall: true });
  const items1 = [callback(bannerHeight(4187), obj), ];
  obj1 = { style: tmp.headerWrapper, children: callback(bannerHeight(15654), obj2) };
  obj2 = { guild, showExtraButtons: !isFavoritesGuildIdResult, canOpenGuildActionSheet: !isFavoritesGuildIdResult, showCoachmarks: !isFavoritesGuildIdResult };
  items1[1] = callback(closure_5, obj1);
  obj[1] = items1;
  return callback2(tmp5, obj);
}
function ReanimatedGuildBanner(guild) {
  guild = guild.guild;
  const scrollPosition = guild.scrollPosition;
  let bannerHeight = guild.bannerHeight;
  const bannerWidth = guild.bannerWidth;
  const onPress = guild.onPress;
  closure_5 = undefined;
  bannerHeight = undefined;
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
      let obj = scrollPosition(bannerHeight[30]);
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
    obj1[1] = closure_14(bannerHeight, obj2);
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
  obj = { bannerWrapper: obj, guildBanner: { left: "50%", top: "50%" }, bannerOverlay: null };
  obj = { width: "100%", maxHeight: arg0 * closure_10, aspectRatio: closure_9, overflow: "hidden" };
  obj = {};
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
  return closure_14(closure_5, obj);
});
const result1 = require("set").fileFinishedImporting("modules/channel_list_v2/native/RedesignGuildHeader.tsx");

export default memoResult;
export const useRedesignGuildHeaderHeight = function useRedesignGuildHeaderHeight(id) {
  const tmp3 = useIsUsingClientThemeDefault();
  let isThemeDarkResult = tmp3;
  if (!tmp3) {
    isThemeDarkResult = AccessibilityAnnouncer.isThemeDark(tmp4);
    const obj = AccessibilityAnnouncer;
  }
  const fontScale = getFontScale.useFontScale();
  const obj2 = getFontScale;
  const tmp9 = null != useStickyServerHeaderSubtitleDefault(id);
  const isFavoritesGuildIdResult = getFavoritesAwareGuildName.isFavoritesGuildId(id.id);
  const obj3 = getFavoritesAwareGuildName;
  const tmp11 = useIsGameCommunityServerPreviewDefault(id.id);
  const scaleTextLineHeightResult = map.scaleTextLineHeight("redesign/heading-18/bold", fontScale);
  let num = 0;
  if (isThemeDarkResult) {
    num = 1;
  }
  let tmp7Result = tmp7(4166);
  let num2 = 0;
  const token = tmp7Result.useToken(tmp(712).modules.mobile.CHANNEL_LIST_SUBTITLE_TEXT_STYLE);
  if (!isFavoritesGuildIdResult) {
    num2 = tmp7(4898).SMALL_BUTTON_HEIGHT + closure_11;
  }
  let num3 = 0;
  if (tmp11) {
    num3 = 8 + tmp7(4898).MEDIUM_BUTTON_HEIGHT + 8;
  }
  let num5 = 16;
  if (isFavoritesGuildIdResult) {
    num5 = 12;
  }
  let num6 = 0;
  if (tmp9) {
    tmp7Result = tmp7(9027);
    num6 = tmp7Result.scaleTextLineHeight(token, fontScale);
  }
  let bound = scaleTextLineHeightResult;
  if (isFavoritesGuildIdResult) {
    const _Math = Math;
    bound = Math.max(scaleTextLineHeightResult, tmp7(4898).SMALL_BUTTON_HEIGHT);
  }
  return tDefault(16 + bound + num6 + num2 + num3 + num5 + num);
};