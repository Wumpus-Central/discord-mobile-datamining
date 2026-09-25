// discord_app/modules/channel_list_v2/native/RedesignGuildHeader.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import AvatarUtilsDefault from "../../../utils/AvatarUtils.tsx";
import FavoritesUtils from "../../favorites/FavoritesUtils.tsx";
import useToken from "../../../design/tokens/native/useToken.tsx";
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import REAWorkaroundViewDefault from "../../reanimated/native/REAWorkaroundView.tsx";
import shared from "../../../design/shared.tsx";
import spring from "../../../design/animation/reanimated/spring/spring.tsx";
import springPresets from "../../../design/animation/reanimated/spring/springPresets.tsx";
import ButtonConstants from "../../../design/components/Button/native/ButtonConstants.native.tsx";
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
  const tmp = closure_17();
  const fn = function s() {
    const obj = { transform: null };
    const items = [{ translateY: Math.max(0, scrollPosition.get() - bannerHeight) }];
    obj.transform = items;
    return obj;
  };
  fn.__closure = { scrollPosition, bannerHeight };
  fn.__workletHash = 6302330113586;
  fn.__initData = __initData;
  const animatedStyle = ReanimatedRexport.useAnimatedStyle(fn);
  const fn2 = function u() {
    const obj = { transform: null };
    const items = [{ translateY: Math.min(0, scrollPosition.get() - bannerHeight) }];
    obj.transform = items;
    return obj;
  };
  fn2.__closure = { scrollPosition, bannerHeight };
  fn2.__workletHash = 16710117141903;
  fn2.__initData = __initData2;
  const animatedStyle1 = ReanimatedRexport.useAnimatedStyle(fn2);
  const isFavoritesGuildIdResult = FavoritesUtils.isFavoritesGuildId(guild.id);
  const obj4 = { style: null, children: null };
  let items = [animatedStyle, { overflow: "hidden" }];
  obj4.style = items;
  const obj5 = { style: animatedStyle1, children: null };
  const tmp5 = REAWorkaroundViewDefault;
  obj5.children = map1(ThemedGradientDefault, { absolute: true, tall: true });
  const items1 = [map1(REAWorkaroundViewDefault, obj5)];
  const obj6 = {
    style: tmp.headerWrapper,
    children: map1(ChannelListStickyHeaderDefault, {
      guild,
      showExtraButtons: !isFavoritesGuildIdResult,
      canOpenGuildActionSheet: !isFavoritesGuildIdResult,
      showCoachmarks: !isFavoritesGuildIdResult,
    }),
  };
  items1[1] = map1(hasOwnProperty, obj6);
  obj4.children = items1;
  return closure_1_14(tmp5, obj4);
}
function ReanimatedGuildBanner(guild) {
  guild = guild.guild;
  const scrollPosition = guild.scrollPosition;
  const bannerWidth = guild.bannerWidth;
  const onPress = guild.onPress;
  let bannerHeight;
  let sharedValue;
  const tmp3 = closure_16(scrollPosition(bannerHeight[24])({ ignoreKeyboard: true }).height);
  const guildBanner = tmp3;
  let items = [ActionSheetStore, sharedValue];
  const stateFromStoresObject = guild(bannerHeight[25]).useStateFromStoresObject(items, () => ({
    actionSheetOpen: null != key.getKey(),
    useReducedMotion: sharedValue.useReducedMotion,
  }));
  ({ useReducedMotion, actionSheetOpen } = stateFromStoresObject);
  let tmp17Result = scrollPosition(bannerHeight[13])(guild.id);
  let obj = guild(bannerHeight[25]);
  const isFocused = guild(bannerHeight[26]).useIsFocused();
  const obj2 = guild(bannerHeight[26]);
  sharedValue = guild(bannerHeight[20]).useSharedValue(0);
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
  const obj3 = guild(bannerHeight[20]);
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
  const obj4 = guild(bannerHeight[20]);
  fn.__closure = {
    scrollPosition,
    interpolate: guild(bannerHeight[20]).interpolate,
    maxScrollPosition: bannerHeight,
    bannerHeight,
  };
  fn.__workletHash = 16532496584630;
  fn.__initData = __initData3;
  const animatedStyle = obj4.useAnimatedStyle(fn);
  const obj5 = {
    scrollPosition,
    interpolate: guild(bannerHeight[20]).interpolate,
    maxScrollPosition: bannerHeight,
    bannerHeight,
  };
  class H {
    constructor() {
      obj = { opacity: null };
      obj2 = closure_0(closure_2[20]);
      obj.opacity = obj2.interpolate(closure_7.get(), [0, 1], [0, 0.3]);
      return obj;
    }
  }
  const obj6 = guild(bannerHeight[20]);
  H.__closure = { interpolate: guild(bannerHeight[20]).interpolate, pressed: sharedValue };
  H.__workletHash = 13777976622560;
  H.__initData = __initData4;
  const items4 = [tmp3, bannerWidth, bannerHeight];
  const animatedStyle1 = obj6.useAnimatedStyle(H);
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
    const animatableSourceWithFallback = tmp(tmp2[30]).getAnimatableSourceWithFallback(hasItem, (hasItem) =>
      AvatarUtilsDefault.getGuildBannerSource({ id: guild.id, banner: guild.banner }, hasItem),
    );
    const obj8 = { style: animatedStyle, children: null };
    const obj9 = {
      style: tmp3.bannerWrapper,
      onPress: callback2,
      onPressIn: callback,
      onPressOut: callback1,
      children: null,
    };
    const obj10 = { style: tmp13, source: animatableSourceWithFallback };
    const items5 = [closure_13(tmp(tmp2[31]), obj10), ,];
    const obj11 = { style: null };
    const items6 = [tmp3.bannerOverlay, animatedStyle1];
    obj11.style = items6;
    items5[1] = closure_13(tmp(tmp2[20]).View, obj11);
    if (tmp17Result) {
      tmp17Result = closure_13(tmp(tmp2[32]), {});
    }
    items5[2] = tmp17Result;
    obj9.children = items5;
    obj8.children = closure_14(bannerHeight, obj9);
    return closure_13(tmp(tmp2[20]).View, obj8);
  }
  const obj7 = { interpolate: guild(bannerHeight[20]).interpolate, pressed: sharedValue };
}
get_ActivityIndicator = fn(17);
({ StyleSheet: closure_4, View: hasOwnProperty, Pressable: metroRequire } = get_ActivityIndicator);
const RedesignChannelListConstants = fn(9566);
({
  STICKY_BANNER_ASPECT_RATIO: closure_9,
  BANNER_MAX_HEIGHT_PERCENTAGE: c10,
  SEARCH_BAR_MARGIN_BOTTOM: closure_11,
} = RedesignChannelListConstants);
const GuildFeatures = fn(1074).GuildFeatures;
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
let createStyles = fn(4829);
let closure_15 = createStyles.createStyles(() => ({ guildHeaderWrapper: { zIndex: 5 } }));
createStyles = fn(4829);
let closure_16 = createStyles.createStyles((arg0) => {
  const obj = {
    bannerWrapper: { width: "100%", maxHeight: arg0 * closure_1_10, aspectRatio, overflow: "hidden" },
    guildBanner: { left: "50%", top: "50%" },
    bannerOverlay: null,
  };
  const obj3 = {};
  const merged = Object.assign(absoluteFillObject.absoluteFillObject);
  obj3.backgroundColor = nativeDefault.colors.BLACK;
  obj.bannerOverlay = obj3;
  return obj;
});
createStyles = fn(4829);
let result = createStyles.experimental_createToken((gradient) => {
  if (null != gradient.gradient) {
    let PANEL_BG = nativeDefault.colors.BACKGROUND_BASE_LOW;
  } else {
    PANEL_BG = nativeDefault.colors.PANEL_BG;
  }
  return PANEL_BG;
});
createStyles = fn(4829);
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
  const obj = { style: closure_15().guildHeaderWrapper, preventClipping: true, children: null };
  const items = [
    map1(ReanimatedGuildBanner, { guild, scrollPosition, bannerHeight, bannerWidth: bannerWidth.bannerWidth }),
  ];
  const obj2 = { guild, scrollPosition, bannerHeight: null };
  let num = 0;
  if (null != guild.banner) {
    num = bannerHeight;
  }
  obj2.bannerHeight = num;
  items[1] = map1(GuildInfoHeader, obj2);
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
};
