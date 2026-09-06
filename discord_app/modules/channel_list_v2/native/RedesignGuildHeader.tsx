// discord_app/modules/channel_list_v2/native/RedesignGuildHeader.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import AvatarUtilsDefault from "../../../utils/AvatarUtils.tsx";
import FavoritesUtils from "../../favorites/FavoritesUtils.tsx";
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import REAWorkaroundViewDefault from "../../reanimated/native/REAWorkaroundView.tsx";
import shared from "../../../design/shared.tsx";
import spring from "../../../design/animation/reanimated/spring/spring.tsx";
import springPresets from "../../../design/animation/reanimated/spring/springPresets.tsx";
import useFontScale from "../../screen/native/useFontScale.tsx";
import ThemedGradientDefault from "../../client_themes/native/ThemedGradient.tsx";
import useIsUsingClientThemeDefault from "../../client_themes/native/useIsUsingClientTheme.tsx";
import useScaledTextLineHeight from "../../screen/native/useScaledTextLineHeight.android.tsx";
import roundToNearestPixelDefault from "../../voice_panel/native/utils/roundToNearestPixel.tsx";
import openGuildActionSheetDefault from "../../guild_action_sheet/native/openGuildActionSheet.tsx";
import useIsGameCommunityServerPreviewDefault from "../../lurker_mode/native/useIsGameCommunityServerPreview.tsx";
import useStickyServerHeaderSubtitleDefault from "hooks/useStickyServerHeaderSubtitle.tsx";
import ChannelListStickyHeaderDefault from "components/ChannelListStickyHeader.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";
import ActionSheetStore from "../../action_sheet/native/ActionSheetStore.tsx";

require = fn;
function GuildInfoHeader(bannerHeight) {
  ({ guild, scrollPosition } = bannerHeight);
  bannerHeight = bannerHeight.bannerHeight;
  let obj = ReanimatedRexport;
  const fn = function s() {
    let obj = { transform: null };
    obj = { translateY: Math.max(0, scrollPosition.get() - bannerHeight) };
    const items = [obj];
    obj.transform = items;
    return obj;
  };
  fn.__closure = { scrollPosition, bannerHeight };
  fn.__workletHash = 6302330113586;
  fn.__initData = __initData;
  const animatedStyle = obj.useAnimatedStyle(fn);
  let obj1 = ReanimatedRexport;
  const fn2 = function u() {
    let obj = { transform: null };
    obj = { translateY: Math.min(0, scrollPosition.get() - bannerHeight) };
    const items = [obj];
    obj.transform = items;
    return obj;
  };
  fn2.__closure = { scrollPosition, bannerHeight };
  fn2.__workletHash = 16710117141903;
  fn2.__initData = __initData2;
  const animatedStyle1 = obj1.useAnimatedStyle(fn2);
  let obj2 = FavoritesUtils;
  const isFavoritesGuildIdResult = obj2.isFavoritesGuildId(guild.id);
  obj = { style: null, children: null };
  let items = [animatedStyle, { overflow: "hidden" }];
  obj.style = items;
  const tmp = closure_17();
  obj = { style: animatedStyle1, children: null };
  const tmp5 = REAWorkaroundViewDefault;
  obj.children = map1(ThemedGradientDefault, { absolute: true, tall: true });
  const items1 = [map1(REAWorkaroundViewDefault, obj)];
  obj1 = { style: tmp.headerWrapper, children: null };
  obj2 = {
    guild,
    showExtraButtons: !isFavoritesGuildIdResult,
    canOpenGuildActionSheet: !isFavoritesGuildIdResult,
    showCoachmarks: !isFavoritesGuildIdResult,
  };
  obj1.children = map1(ChannelListStickyHeaderDefault, obj2);
  items1[1] = map1(hasOwnProperty, obj1);
  obj.children = items1;
  return closure_1_14(tmp5, obj);
}
function ReanimatedGuildBanner(guild) {
  guild = guild.guild;
  const scrollPosition = guild.scrollPosition;
  const bannerWidth = guild.bannerWidth;
  const onPress = guild.onPress;
  let bannerHeight;
  let sharedValue;
  const tmp3 = closure_16(scrollPosition(bannerHeight[24])().height);
  const guildBanner = tmp3;
  let obj = guild(bannerHeight[25]);
  let items = [ActionSheetStore, sharedValue];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({
    actionSheetOpen: null != key.getKey(),
    useReducedMotion: sharedValue.useReducedMotion,
  }));
  ({ useReducedMotion, actionSheetOpen } = stateFromStoresObject);
  let tmp17Result = scrollPosition(bannerHeight[13])(guild.id);
  let obj1 = guild(bannerHeight[26]);
  const isFocused = obj1.useIsFocused();
  let obj2 = guild(bannerHeight[20]);
  sharedValue = obj2.useSharedValue(0);
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
  let obj3 = guild(bannerHeight[20]);
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
    const items3 = [{ translateY: interpolateResult }];
    let num2 = 1;
    if (value < 0) {
      num2 = (bannerHeight - value) / bannerHeight;
    }
    items3[1] = { scale: num2 };
    obj.transform = items3;
    return obj;
  };
  obj = {
    scrollPosition,
    interpolate: guild(bannerHeight[20]).interpolate,
    maxScrollPosition: bannerHeight,
    bannerHeight,
  };
  fn.__closure = obj;
  fn.__workletHash = 16532496584630;
  fn.__initData = __initData3;
  const animatedStyle = obj3.useAnimatedStyle(fn);
  class H {
    constructor() {
      obj = { opacity: null };
      obj2 = closure_0(closure_2[20]);
      obj.opacity = obj2.interpolate(closure_7.get(), [0, 1], [0, 0.3]);
      return obj;
    }
  }
  obj = { interpolate: guild(bannerHeight[20]).interpolate, pressed: sharedValue };
  H.__closure = obj;
  H.__workletHash = 13777976622560;
  H.__initData = __initData4;
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
      const obj = { id: guild.id, banner: guild.banner };
      return obj.getGuildBannerSource(obj, hasItem);
    });
    obj1 = { style: animatedStyle, children: null };
    obj2 = {
      style: tmp3.bannerWrapper,
      onPress: callback2,
      onPressIn: callback,
      onPressOut: callback1,
      children: null,
    };
    obj3 = { style: tmp13, source: animatableSourceWithFallback };
    const items5 = [closure_13(tmp(tmp2[31]), obj3), ,];
    const obj4 = { style: null };
    const items6 = [tmp3.bannerOverlay, animatedStyle1];
    obj4.style = items6;
    items5[1] = closure_13(tmp(tmp2[20]).View, obj4);
    if (tmp17Result) {
      tmp17Result = tmp17(tmp(tmp2[32]), {});
    }
    items5[2] = tmp17Result;
    obj2.children = items5;
    obj1.children = closure_14(bannerHeight, obj2);
    return closure_13(tmp(tmp2[20]).View, obj1);
  }
  const obj6 = guild(bannerHeight[20]);
}
get_ActivityIndicator = fn(17);
({ StyleSheet: closure_4, View: hasOwnProperty, Pressable: metroRequire } = get_ActivityIndicator);
const RedesignChannelListConstants = fn(10118);
({
  STICKY_BANNER_ASPECT_RATIO: closure_9,
  BANNER_MAX_HEIGHT_PERCENTAGE: c10,
  SEARCH_BAR_MARGIN_BOTTOM: closure_11,
} = RedesignChannelListConstants);
const GuildFeatures = fn(1074).GuildFeatures;
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
let createStyles = fn(4560);
let closure_15 = createStyles.createStyles(() => ({ guildHeaderWrapper: { zIndex: 5 } }));
createStyles = fn(4560);
let closure_16 = createStyles.createStyles((arg0) => {
  let obj = { bannerWrapper: null, guildBanner: { left: "50%", top: "50%" }, bannerOverlay: null };
  obj = { width: "100%", maxHeight: arg0 * closure_1_10, aspectRatio, overflow: "hidden" };
  obj.bannerWrapper = obj;
  obj = {};
  const merged = Object.assign(absoluteFillObject.absoluteFillObject);
  obj.backgroundColor = nativeDefault.colors.BLACK;
  obj.bannerOverlay = obj;
  return obj;
});
createStyles = fn(4560);
let result = createStyles.experimental_createToken((gradient) => {
  if (null != gradient.gradient) {
    let PANEL_BG = nativeDefault.colors.BACKGROUND_BASE_LOW;
  } else {
    PANEL_BG = nativeDefault.colors.PANEL_BG;
  }
  return PANEL_BG;
});
createStyles = fn(4560);
let closure_17 = createStyles.createStyles({ headerWrapper: { backgroundColor: result } });
const __initData = {
  code: "function RedesignGuildHeaderTsx1(){const{scrollPosition,bannerHeight}=this.__closure;return{transform:[{translateY:Math.max(0,scrollPosition.get()-bannerHeight)}]};}",
};
const __initData2 = {
  code: "function RedesignGuildHeaderTsx2(){const{scrollPosition,bannerHeight}=this.__closure;return{transform:[{translateY:Math.min(0,scrollPosition.get()-bannerHeight)}]};}",
};
const __initData3 = {
  code: "function RedesignGuildHeaderTsx3(){const{scrollPosition,interpolate,maxScrollPosition,bannerHeight}=this.__closure;const scrollPosValue=scrollPosition.get();return{opacity:interpolate(scrollPosValue,[0,maxScrollPosition],[1,0],'clamp'),transform:[{translateY:scrollPosValue>=0?interpolate(-scrollPosValue,[0,bannerHeight],[0,-bannerHeight],'clamp'):scrollPosValue/2},{scale:scrollPosValue>=0?1:(bannerHeight-scrollPosValue)/bannerHeight}]};}",
};
const __initData4 = {
  code: "function RedesignGuildHeaderTsx4(){const{interpolate,pressed}=this.__closure;return{opacity:interpolate(pressed.get(),[0,1],[0,0.3])};}",
};
let size = fn(2);
const result1 = size.fileFinishedImporting("modules/channel_list_v2/native/RedesignGuildHeader.tsx");

export default noop.memo(function RedesignGuildHeader(bannerWidth) {
  ({ guild, scrollPosition, bannerHeight } = bannerWidth);
  let obj = { style: closure_15().guildHeaderWrapper, preventClipping: true, children: null };
  const items = [
    map1(ReanimatedGuildBanner, { guild, scrollPosition, bannerHeight, bannerWidth: bannerWidth.bannerWidth }),
  ];
  obj = { guild, scrollPosition, bannerHeight: null };
  let num = 0;
  if (null != guild.banner) {
    num = bannerHeight;
  }
  obj.bannerHeight = num;
  items[1] = map1(GuildInfoHeader, obj);
  obj.children = items;
  return closure_1_14(hasOwnProperty, obj);
});
export const useRedesignGuildHeaderHeight = function useRedesignGuildHeaderHeight(id) {
  const tmp3 = useIsUsingClientThemeDefault();
  let isThemeDarkResult = tmp3;
  if (!tmp3) {
    isThemeDarkResult = shared.isThemeDark(tmp4);
  }
  const fontScale = useFontScale.useFontScale();
  const tmp9 = null != useStickyServerHeaderSubtitleDefault(id);
  const isFavoritesGuildIdResult = FavoritesUtils.isFavoritesGuildId(id.id);
  const tmp11 = useIsGameCommunityServerPreviewDefault(id.id);
  const scaleTextLineHeightResult = useScaledTextLineHeight.scaleTextLineHeight("redesign/heading-18/bold", fontScale);
  let num = 0;
  if (isThemeDarkResult) {
    num = 1;
  }
  let tmp7Result = tmp7(4262);
  let num2 = 0;
  const token = tmp7Result.useToken(tmp(576).modules.mobile.CHANNEL_LIST_SUBTITLE_TEXT_STYLE);
  if (!isFavoritesGuildIdResult) {
    num2 = tmp7(4980).SMALL_BUTTON_HEIGHT + closure_1_11;
  }
  let num3 = 0;
  if (tmp11) {
    num3 = 8 + tmp7(4980).MEDIUM_BUTTON_HEIGHT + 8;
  }
  let num5 = 16;
  if (isFavoritesGuildIdResult) {
    num5 = 12;
  }
  let num6 = 0;
  if (tmp9) {
    tmp7Result = tmp7(10119);
    num6 = tmp7Result.scaleTextLineHeight(token, fontScale);
  }
  let bound = scaleTextLineHeightResult;
  if (isFavoritesGuildIdResult) {
    const _Math = Math;
    bound = Math.max(scaleTextLineHeightResult, tmp7(4980).SMALL_BUTTON_HEIGHT);
  }
  return roundToNearestPixelDefault(16 + bound + num6 + num2 + num3 + num5 + num);
};
