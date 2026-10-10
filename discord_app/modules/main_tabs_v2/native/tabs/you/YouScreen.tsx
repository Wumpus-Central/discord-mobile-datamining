// discord_app/modules/main_tabs_v2/native/tabs/you/YouScreen.tsx
import useStateFromStores from "../../../../../../discord_common/js/packages/flux/useStateFromStores.tsx";
import c from "../../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef683 from "../../../../../../_runtime/metro/00683__.js";
import util from "../../../../../intl/index.native.tsx";
import utils_PlatformUtils from "../../../../../../discord_common/js/shared/utils/PlatformUtils.tsx";
import RootNavigationRef from "../../../RootNavigationRef.native.tsx";
import Pressables from "../../../../../design/void/Pressables/native/Pressables.tsx";
import maybeFetchUserProfileDefault from "../../../../user_profile/maybeFetchUserProfile.tsx";
import VisualEffectViewThemedDefault from "../../../../visual_effect_view/native/VisualEffectViewThemed.tsx";
import YouBannerDecorations from "YouBannerDecorations.tsx";
import BackIconWithBadge from "../../shared_components/BackIconWithBadge.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";
import UserProfileStore from "../../../../user_profile/UserProfileStore.tsx";
import LocaleStore from "../../../../user_settings/LocaleStore.tsx";
import UserSettingSearchStore from "../../../../user_settings/UserSettingSearchStore.tsx";
import GuildReadStateStore from "../../../../../stores/GuildReadStateStore.tsx";
import UserStore from "../../../../../stores/UserStore.tsx";
import ReanimatedRexport_mod from "../../../../reanimated/ReanimatedRexport.tsx";

require = fn;
function handleBackButtonPress() {
  const navigation = RootNavigationRef.getRootNavigationRef();
  if (null != navigation) {
    if (navigation.canGoBack()) {
      navigation.goBack();
    } else {
      navigation.navigate("guilds");
    }
  }
}
function UnconnectedYouScreen(arg0) {
  ({ user, navigateToSettings } = arg0);
  ({ navigateToPremium, navigateToShop } = arg0);
  dependencyMap = undefined;
  _slicedToArray = undefined;
  let rect;
  let sharedValue;
  let bound;
  first = undefined;
  closure_8 = undefined;
  let num2;
  closure_10 = undefined;
  closure_11 = undefined;
  let youSettingsCoachmark;
  closure_13 = undefined;
  nativeID = undefined;
  scrollEventThrottle = undefined;
  closure_16 = undefined;
  ({ navigateToProfileCustomization, navigateToCustomStatus, navigateToFriends, initialTab } = arg0);
  [tmp3, c2] = rect.useState(0);
  const callback = rect.useCallback((nativeEvent) => {
    _undefined(nativeEvent.nativeEvent.layout.width);
  }, []);
  let tmp8;
  let tmp2 = _slicedToArray(rect.useState(0), 2);
  if (tmp3 > 0) {
    tmp8 = tmp3;
  }
  const tmp7Result = navigateToShop(8356)(tmp8);
  _slicedToArray = tmp7Result;
  const tmp10 = closure_23(tmp7Result);
  let obj2 = { type: null, name: null };
  const tmp7 = navigateToShop(8356);
  obj2.type = navigateToSettings(1273).ImpressionTypes.VIEW;
  obj2.name = navigateToSettings(1273).ImpressionNames.USER_YOU_SCREEN;
  navigateToShop(8971)(obj2);
  const obj3 = navigateToShop(8310)(user.id);
  rect = navigateToShop(1631)();
  const tmp5Result = navigateToShop(8971);
  ({ theme, primaryColor, secondaryColor } = navigateToShop(8353)({ user, displayProfile: obj3 }));
  const tmp14 = navigateToShop(8353)({ user, displayProfile: obj3 });
  const ref = rect.useRef(null);
  const tmp15 = navigateToShop(5031)();
  sharedValue = navigateToSettings(4850).useSharedValue(0);
  const obj4 = navigateToSettings(4850);
  class Y {
    constructor(arg0) {
      result = closure_5.set(arg0.contentOffset.y);
      return;
    }
  }
  Y.__closure = { scrollPosition: sharedValue };
  Y.__workletHash = 952837799380;
  Y.__initData = __initData;
  const obj5 = navigateToSettings(4850);
  const animatedScrollHandler = navigateToSettings(4850).useAnimatedScrollHandler(Y);
  ({ bannerAnimatedStyle, bannerImageAnimatedStyle, contentAnimatedStyle, blurAnimatedProps, showBlur } =
    navigateToShop(8369)({ scrollPosition: sharedValue, bannerHeight: tmp7Result }));
  let size = navigateToShop(1497)();
  let num = 0;
  const diff = size.width - rect.right - rect.left;
  if (navigateToShop(4979)().isChatBesideChannelList) {
    num = 16;
  }
  const diff1 = diff - num;
  bound = diff1;
  if (tmp3 > 0) {
    const _Math = Math;
    bound = Math.min(diff1, tmp3);
  }
  [first, closure_8] = rect.useState(false);
  const GifAutoPlay = navigateToSettings(2041).GifAutoPlay;
  const setting = GifAutoPlay.getSetting();
  const tmp19 = navigateToShop(8369)({ scrollPosition: sharedValue, bannerHeight: tmp7Result });
  const isFocused = navigateToSettings(1504).useIsFocused();
  const tmp12Result = navigateToSettings(1504);
  let tmp28 = !isFocused;
  if (!isFocused) {
    tmp28 = !tmp12Result14.useIsProfileModalTransitioning();
  }
  tmp12Result14 = navigateToSettings(17487);
  const ref2 = rect.useRef(undefined);
  const ref3 = rect.useRef(false);
  if (isFocused) {
    if (!ref3.current) {
      ref3.current = true;
      const _Date = Date;
      ref2.current = Date.now();
    }
    let obj38 = setting;
    if (!setting) {
      obj38 = first;
    }
    let bannerURL;
    if (obj3 != null) {
      const obj6 = { canAnimate: obj38, size: bound };
      bannerURL = obj3.getBannerURL(obj6);
    }
    let source = null;
    if (null != bannerURL) {
      source = navigateToSettings(1415).makeSource(bannerURL);
      const tmp12Result15 = navigateToSettings(1415);
    }
    const tmp12Result16 = navigateToSettings(1415);
    let intl = navigateToSettings(1126).intl;
    const obj7 = { username: user.username };
    const formatToPlainStringResult = intl.formatToPlainString(navigateToSettings(1126).t.gVn4uJ, obj7);
    const isAnimatedImageURLResult = navigateToSettings(1415).isAnimatedImageURL(bannerURL);
    const obj8 = { user, displayProfile: obj3 };
    const userProfileBannerBackgroundColor = navigateToSettings(8373).useUserProfileBannerBackgroundColor(obj8);
    let items = [tmp7Result, bound, rect.bottom];
    const tmp12Result17 = navigateToSettings(8373);
    const memo = obj.useMemo(() => {
      const obj = { dimensionStyle: null, contentContainerStyle: null };
      const size = { width: bound, height };
      obj.dimensionStyle = size;
      const obj2 = { paddingBottom: null };
      const floatingNavBottomMargin = YouBannerDecorations.getFloatingNavBottomMargin(rect.bottom);
      obj2.paddingBottom = floatingNavBottomMargin + nativeDefault.space.PX_64;
      obj.contentContainerStyle = obj2;
      return obj;
    }, items);
    ({ dimensionStyle, contentContainerStyle } = memo);
    const tmp37 = navigateToShop(6626)();
    const obj9 = { layout: "YOU_SCREEN", userId: user.id };
    const createUserProfileAnalyticsContext = navigateToSettings(8314).useCreateUserProfileAnalyticsContext(obj9);
    const tmp12Result18 = navigateToSettings(8314);
    const isScreenLandscape = navigateToSettings(8326).useIsScreenLandscape();
    let tmp42;
    const tmp12Result19 = navigateToSettings(8326);
    if (!isScreenLandscape) {
      let skuId;
      if (obj3 != null) {
        const profileFrame = obj3.profileFrame;
        if (profileFrame != null) {
          skuId = profileFrame.skuId;
        }
      }
      tmp42 = skuId;
    }
    const tmp5Result1Result = navigateToShop(8327)(tmp42);
    let tmp46;
    const tmp5Result7 = navigateToShop(8327);
    if (!isScreenLandscape) {
      let skuId1;
      if (obj3 != null) {
        const profileFrame2 = obj3.profileFrame;
        if (profileFrame2 != null) {
          skuId1 = profileFrame2.skuId;
        }
      }
      tmp46 = skuId1;
    }
    const obj10 = { skuId: tmp46, openedAt: ref2.current, analyticsLocations: null, context: null };
    const items1 = [navigateToShop(6878).YOU_SCREEN];
    obj10.analyticsLocations = items1;
    obj10.context = createUserProfileAnalyticsContext;
    navigateToShop(8339)(obj10);
    num2 = 0;
    if (null != tmp5Result1Result) {
      num2 = navigateToShop(8350)(tmp5Result1Result, bound).overflowTop;
    }
    const items2 = [num2];
    if (!tmp37) {
      if (!tmp12Result20.isIOS()) {
        const _Math2 = Math;
        let bound1 = Math.max(rect.top - num2, youSettingsCoachmark);
      }
      let skuId2;
      if (obj3 != null) {
        const profileEffect = obj3.profileEffect;
        if (profileEffect != null) {
          skuId2 = profileEffect.skuId;
        }
      }
      let tmp88Result = null != skuId2;
      const memo1 = obj.useMemo(() => {
        const items = [navigateToSettings(_undefined[50]).DismissibleContent.WISHLIST_MOBILE_YOU_SCREEN_COACHMARK];
        return items;
      }, []);
      tmp12Result20 = navigateToSettings(1383);
      const tmpResult4 = tmp(navigateToSettings(7099).useSelectedDismissibleContent(memo1), 2);
      closure_10 = tmp57;
      const items3 = [null != tmpResult4[0]];
      const memo2 = obj.useMemo(() => {
        let tmp = null;
        if (closure_10) {
          const obj = {
            title: null,
            description: null,
            avatarSrc: null,
            decorationAsset: "",
            renderImgComponent: null,
          };
          const intl = util.intl;
          obj.title = intl.string(util.t.epBu6F);
          const intl2 = util.intl;
          obj.description = intl2.string(util.t["o8+3AX"]);
          obj.avatarSrc = {};
          obj.renderImgComponent = function renderImgComponent() {
            return closure_1_20(navigateToShop(_undefined[52]), {
              source: {
                uri: "https://cdn.discordapp.com/assets/content/1979309f7455b06e0bc1e8f5da89de9934155a0a9a74bfff5b680c82fb45d53f.png",
              },
              style: { width: 80, height: 80 },
            });
          };
          tmp = obj;
        }
        return tmp;
      }, items3);
      const ref4 = obj.useRef(null);
      const ref5 = obj.useRef(null);
      closure_11 = tmp56;
      const items4 = [tmpResult4[1], navigateToShop];
      const callback1 = obj.useCallback(() => {
        navigateToShop();
        closure_11(ContentDismissActionType.TAKE_ACTION);
      }, items4);
      let tmp62 = null != memo2;
      const tmp12Result21 = navigateToSettings(7099);
      const obj11 = { disabled: tmp62 };
      youSettingsCoachmark = navigateToSettings(17488).useYouSettingsCoachmark(obj11);
      let tmp64 = null != youSettingsCoachmark;
      const tmp12Result22 = navigateToSettings(17488);
      const customTypingIndicatorConfig = navigateToSettings(11639).useCustomTypingIndicatorConfig("YouScreen");
      if ("settings" === customTypingIndicatorConfig.entryPoint) {
        if (customTypingIndicatorConfig.canSet) {
          if (null != obj3) {
            if (!tmp62) {
              if (!tmp64) {
                let items5 = [
                  navigateToSettings(2049).DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_PROFILE_COACHMARK,
                ];
              }
              const tmpResult5 = tmp(navigateToSettings(7099).useSelectedDismissibleContent(items5), 2);
              closure_13 = tmp67;
              const tmp68 =
                tmpResult5[0] ===
                navigateToSettings(2049).DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_PROFILE_COACHMARK;
              nativeID = tmp68;
              let tmp69 = tmp62;
              if (!tmp62) {
                tmp69 = tmp64;
              }
              if (!tmp69) {
                tmp69 = tmp68;
              }
              scrollEventThrottle = tmp69;
              const tmp12Result24 = navigateToSettings(7099);
              closure_16 = tmp(obj.useState(false), 2)[1];
              let tmp73Result = null;
              if (tmp69) {
                tmp73Result = null;
                if (tmp71) {
                  if (tmp62) {
                    const obj12 = {
                      buttonRef: ref4,
                      markAsDismissed: tmp56,
                      visible: tmp57,
                      title: null,
                      description: null,
                      avatarSrc: null,
                      decorationAsset: null,
                      renderImgComponent: null,
                      navigateToShop: null,
                    };
                    ({
                      title: obj25.title,
                      description: obj25.description,
                      avatarSrc: obj25.avatarSrc,
                      decorationAsset: obj25.decorationAsset,
                      renderImgComponent: obj25.renderImgComponent,
                    } = memo2);
                    obj12.navigateToShop = callback1;
                    tmp62 = closure_20(navigateToShop(17491), obj12);
                  }
                  const items6 = [tmp62, ,];
                  if (tmp64) {
                    const obj13 = { buttonRef: ref5 };
                    const merged = Object.assign(youSettingsCoachmark.props);
                    tmp64 = closure_20(navigateToShop(17488), obj13);
                    const tmp5Result9 = navigateToShop(17488);
                  }
                  items6[1] = tmp64;
                  let tmp79 = tmp68;
                  if (tmp68) {
                    const obj14 = { targetRef: ref5, visible: tmp68, markAsDismissed: tmp67, position: "top" };
                    tmp79 = closure_20(navigateToShop(17492), obj14);
                  }
                  const obj15 = { zIndex: 1, children: null };
                  items6[2] = tmp79;
                  obj15.children = items6;
                  tmp73Result = closure_21(navigateToSettings(6845).LayerScope, obj15);
                }
              }
              const items7 = [tmp69];
              const effect = obj.useEffect(() => {
                if (closure_15) {
                  const _setTimeout = setTimeout;
                  const timeout = setTimeout(() => closure_1_16(true), 500);
                  return () => clearTimeout(closure_0);
                }
              }, items7);
              const items8 = [navigateToSettings, youSettingsCoachmark, tmp68, tmpResult5[1]];
              const callback2 = obj.useCallback(() => {
                if (youSettingsCoachmark != null) {
                  const trackSettingsPress = youSettingsCoachmark.trackSettingsPress;
                  if (trackSettingsPress != null) {
                    trackSettingsPress();
                  }
                }
                if (closure_14) {
                  closure_13(ContentDismissActionType.TAKE_ACTION);
                }
                navigateToSettings();
              }, items8);
              const obj16 = {
                navigateToPremium,
                navigateToSettings: callback2,
                navigateToShop: callback1,
                shopButtonRef: ref4,
                settingsButtonRef: ref5,
                paddingBottom: rect.bottom,
              };
              const tmpResult6 = tmp(obj.useState(false), 2);
              const obj17 = { theme, primaryColor, secondaryColor, children: null };
              const obj18 = {
                value: createUserProfileAnalyticsContext,
                openedAt: ref1.current,
                fetchStartedAt: null,
                fetchEndedAt: null,
                isLoaded: null,
                children: null,
              };
              let fetchStartedAt;
              if (obj3 != null) {
                fetchStartedAt = obj3.fetchStartedAt;
              }
              obj18.fetchStartedAt = fetchStartedAt;
              let fetchEndedAt;
              if (obj3 != null) {
                fetchEndedAt = obj3.fetchEndedAt;
              }
              obj18.fetchEndedAt = fetchEndedAt;
              let isLoaded;
              if (obj3 != null) {
                isLoaded = obj3.isLoaded;
              }
              obj18.isLoaded = isLoaded;
              const obj19 = { style: null, nativeID: null, children: null };
              const items9 = [tmp10.container, tmp49];
              obj19.style = items9;
              obj19.nativeID = nativeID;
              let tmp83Result = null != tmp5Result1Result;
              const tmp84 = closure_20(navigateToShop(9119), obj16);
              if (tmp83Result) {
                const obj20 = {
                  frame: tmp5Result1Result,
                  profileThemeType: UserProfileThemeTypes.YOU_SCREEN,
                  frameOrder: navigateToSettings(8333).ProfileFrameLayerOrder.BACK,
                  containerWidth: bound,
                };
                tmp83Result = closure_20(navigateToShop(8346), obj20);
                const tmp5Result11 = navigateToShop(8346);
              }
              const items10 = [tmp83Result, , , , ,];
              const obj21 = { gradientHeight: null, bannerHeight: null, style: null };
              class Y {
                constructor(arg0) {
                  result = closure_5.set(arg0.contentOffset.y);
                  return;
                }
              }
              obj21.bannerHeight = tmp7Result;
              obj21.style = tmp10.background;
              items10[1] = closure_20(navigateToShop(8363), obj21);
              const obj22 = {
                contentContainerStyle,
                ref,
                onScroll: animatedScrollHandler,
                onLayout: callback,
                scrollEventThrottle,
                style: tmp10.scrollView,
                children: null,
              };
              const obj23 = { style: null, children: null };
              const items11 = [tmp10.banner, bannerAnimatedStyle];
              obj23.style = items11;
              let tmp83Result5 = !tmp88Result;
              if (!tmp88Result) {
                const obj24 = { paddingTop: bound1 };
                tmp83Result5 = closure_20(closure_27, obj24);
              }
              const items12 = [tmp83Result5];
              const obj26 = { style: null, children: null };
              const items13 = [dimensionStyle, bannerImageAnimatedStyle];
              obj26.style = items13;
              const obj27 = { style: null };
              const items14 = [sharedValue.absoluteFill];
              const obj28 = { backgroundColor: null };
              const tmp5Result10 = navigateToShop(17493);
              const tmp99 = sharedValue;
              obj28.backgroundColor = navigateToSettings(1103).int2hex(userProfileBannerBackgroundColor);
              items14[1] = obj28;
              obj27.style = items14;
              const items15 = [closure_20(bound, obj27), ,];
              if (null == source) {
                items15[1] = tmp100;
                let tmp83Result6 = navigateToSettings(1383).isIOS() && showBlur;
                if (tmp83Result6) {
                  const obj29 = { animatedProps: blurAnimatedProps, style: tmp99.absoluteFillObject };
                  tmp83Result6 = closure_20(VisualEffectViewThemed, obj29);
                }
                items15[2] = tmp83Result6;
                obj26.children = items15;
                items12[1] = closure_21(navigateToShop(4850).View, obj26);
                obj23.children = items12;
                const items16 = [closure_21(navigateToShop(4850).View, obj23), , ,];
                if (tmp88Result) {
                  const obj30 = { pointerEvents: "box-none", style: null, children: null };
                  const items17 = [tmp10.profileEffectLayer, ,];
                  const size1 = { width: bound, height: size.height };
                  items17[1] = size1;
                  items17[2] = bannerAnimatedStyle;
                  obj30.style = items17;
                  const obj31 = { skuId: skuId2, bannerAdjustment: 0, replayOnNavigationFocus: true, paused: tmp28 };
                  const items18 = [closure_20(navigateToShop(9004), obj31)];
                  const obj32 = { paddingTop: bound1 };
                  items18[1] = closure_20(closure_27, obj32);
                  obj30.children = items18;
                  tmp88Result = closure_21(navigateToShop(4850).View, obj30);
                }
                items16[1] = tmp88Result;
                const obj33 = {
                  user,
                  userTheme: tmp15,
                  scrollViewRef: ref,
                  scrollPosition: sharedValue,
                  style: null,
                  navigateToProfileCustomization: null,
                  navigateToCustomStatus: null,
                  navigateToFriends: null,
                  navigateToPremium: null,
                  navigateToShop: null,
                  initialTab: null,
                  animateAvatar: null,
                };
                const items19 = [tmp10.content, contentAnimatedStyle];
                obj33.style = items19;
                obj33.navigateToProfileCustomization = navigateToProfileCustomization;
                obj33.navigateToCustomStatus = navigateToCustomStatus;
                obj33.navigateToFriends = navigateToFriends;
                obj33.navigateToPremium = navigateToPremium;
                obj33.navigateToShop = navigateToShop;
                obj33.initialTab = initialTab;
                obj33.animateAvatar = !tmp28;
                items16[2] = closure_20(navigateToShop(17495), obj33);
                items16[3] = closure_20(navigateToSettings(11492).TTIFirstContentfulPaint, { label: "you_screen" });
                obj22.children = items16;
                items10[2] = closure_21(closure_25, obj22);
                let tmp83Result7 = null != tmp5Result1Result;
                if (tmp83Result7) {
                  const obj34 = {
                    frame: tmp5Result1Result,
                    profileThemeType: UserProfileThemeTypes.YOU_SCREEN,
                    frameOrder: navigateToSettings(8333).ProfileFrameLayerOrder.FRONT,
                    containerWidth: bound,
                  };
                  tmp83Result7 = closure_20(navigateToShop(8346), obj34);
                  const tmp5Result12 = navigateToShop(8346);
                }
                const obj35 = { children: null };
                items10[3] = tmp83Result7;
                items10[4] = tmp84;
                items10[5] = tmp73Result;
                obj19.children = items10;
                obj18.children = closure_21(tmp5Result10, obj19);
                obj17.children = closure_20(navigateToSettings(8314).UserProfileAnalyticsProvider, obj18);
                obj35.children = closure_20(navigateToSettings(4827).ThemeContextProvider, obj17);
                return closure_20(navigateToSettings(6845).LayerScope, obj35);
              } else if (isAnimatedImageURLResult) {
                const obj36 = {
                  onPress() {
                    return closure_8(!first);
                  },
                  accessibilityRole: "image",
                  accessibilityLabel: null,
                  children: null,
                };
                let intl2 = navigateToSettings(1126).intl;
                obj36.accessibilityLabel = intl2.string(navigateToSettings(1126).t["3fzj/l"]);
                const obj37 = {
                  style: dimensionStyle,
                  accessibilityRole: "image",
                  accessibilityLabel: formatToPlainStringResult,
                  source,
                  paused: tmp28,
                };
                const items20 = [closure_20(navigateToShop(6156), obj37)];
                let tmp83Result8 = !obj38;
                if (!obj38) {
                  obj38 = { label: null, style: null, textStyle: null };
                  const intl3 = navigateToSettings(1126).intl;
                  obj38.label = intl3.string(navigateToSettings(1126).t.I5gL2H);
                  const items21 = [tmp10.gifTag];
                  dimensionStyle = { top: bound1 };
                  items21[1] = dimensionStyle;
                  obj38.style = items21;
                  obj38.textStyle = tmp10.gifTagText;
                  tmp83Result8 = closure_20(navigateToSettings(10040).Caption, obj38);
                }
                items20[1] = tmp83Result8;
                obj36.children = items20;
                let tmp88Result2 = closure_21(navigateToSettings(6184).PressableOpacity, obj36);
              } else {
                const obj39 = {
                  style: dimensionStyle,
                  accessibilityRole: "image",
                  accessibilityLabel: formatToPlainStringResult,
                  source,
                  paused: tmp28,
                };
                tmp88Result2 = closure_20(navigateToShop(6156), obj39);
              }
              const tmp12Result25 = navigateToSettings(1103);
            }
          }
        }
      }
      items5 = [];
      const tmp12Result23 = navigateToSettings(11639);
    }
    bound1 = youSettingsCoachmark;
    const tmp5Result8 = navigateToShop(8339);
  }
  if (!isFocused) {
    ref3.current = false;
  }
  ref1 = rect.useRef(Date.now());
}
get_ActivityIndicator = fn(17);
({ StyleSheet: hasOwnProperty, View: metroRequire, ScrollView } = get_ActivityIndicator);
const YouConstants = fn(16806);
({
  YOU_ACTION_SHEET_TOP_INSET: closure_12,
  YOU_AVATAR_SIZE: map1,
  YOU_SCREEN_ID: closure_14,
  YOU_SCROLL_EVENT_THROTTLE: closure_15,
} = YouConstants);
const UserSettingsSections = fn(1085).UserSettingsSections;
const constants = fn(1087).CollectiblesMobileShopScreen;
const ContentDismissActionType = fn(2062).ContentDismissActionType;
const UserProfileThemeTypes = fn(6904).UserProfileThemeTypes;
const jsxProd = fn(21);
({ jsx: closure_20, jsxs: closure_21 } = jsxProd);
let ReanimatedRexport = ReanimatedRexport_mod;
const VisualEffectViewThemed = ReanimatedRexport.createAnimatedComponent(VisualEffectViewThemedDefault);
let createStyles = fn(5092);
let closure_23 = createStyles.createStyles((minHeight) => {
  let xl;
  if (obj.isIOS()) {
    xl = nativeDefault.radii.xl;
  }
  const obj2 = { borderTopLeftRadius: xl, borderTopRightRadius: null };
  obj = utils_PlatformUtils;
  let xl1;
  if (tmpResult.isIOS()) {
    xl1 = nativeDefault.radii.xl;
  }
  obj2.borderTopRightRadius = xl1;
  const obj3 = {
    container: null,
    background: null,
    scrollView: null,
    profileEffectLayer: null,
    banner: null,
    gifTag: null,
    gifTagText: null,
    content: null,
  };
  const merged = Object.assign(obj2);
  obj3.container = { flex: 1, flexGrow: 1, position: "relative" };
  const merged1 = Object.assign(obj2);
  obj3.background = { overflow: "hidden" };
  const merged2 = Object.assign(obj2);
  obj3.scrollView = { flex: 1 };
  obj3.profileEffectLayer = { position: "absolute", top: 0, zIndex: 1 };
  obj3.banner = { minHeight, position: "absolute", top: 0, maxWidth: "100%" };
  const rect = { position: "absolute", left: 16, right: "auto", bottom: "auto", marginTop: 8, backgroundColor: null };
  const obj4 = { flex: 1, flexGrow: 1, position: "relative" };
  const obj5 = { overflow: "hidden" };
  const obj6 = { flex: 1 };
  tmpResult = utils_PlatformUtils;
  const tmp10Result = _modDef683(nativeDefault.unsafe_rawColors.WHITE);
  rect.backgroundColor = _modDef683(nativeDefault.unsafe_rawColors.WHITE).alpha(0.9).css();
  obj3.gifTag = rect;
  const alphaResult = _modDef683(nativeDefault.unsafe_rawColors.WHITE).alpha(0.9);
  obj3.gifTagText = { color: nativeDefault.unsafe_rawColors.PRIMARY_800, fontSize: 14 };
  obj3.content = { marginTop: minHeight, flex: 1, flexGrow: 1 };
  return obj3;
});
createStyles = fn(5092);
let closure_24 = createStyles.createStyles(() => {
  const obj = {
    backButton: {
      position: "absolute",
      marginTop: nativeDefault.space.PX_4,
      left: nativeDefault.space.PX_16,
      zIndex: 99,
      alignItems: "center",
      justifyContent: "center",
    },
  };
  return obj;
});
let ReanimatedRexport = ReanimatedRexport_mod;
let closure_25 = ReanimatedRexport.createAnimatedComponent(ScrollView);
let ReactCompilerGating = fn(558);
let closure_27 = ReactCompilerGating.isReactCompilerEnabled()
  ? function BackButton(paddingTop) {
      const cResult = c.c(15);
      paddingTop = paddingTop.paddingTop;
      const tmp4 = closure_24();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildReadStateStore];
        const fn = function o() {
          return totalMentionCount.getTotalMentionCount();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp5 = items;
        tmp6 = fn;
      } else {
        [tmp5, tmp6] = cResult;
      }
      const stateFromStores = useStateFromStores.useStateFromStores(tmp5, tmp6);
      if (cResult[2] !== stateFromStores) {
        if (stateFromStores > 0) {
          const intl2 = util.intl;
          const obj2 = { mentionCount: stateFromStores };
          let formatToPlainStringResult = intl2.formatToPlainString(util.t.vxFYaM, obj2);
        } else {
          const intl = util.intl;
          formatToPlainStringResult = intl.string(util.t["13/7kX"]);
        }
        cResult[2] = stateFromStores;
        cResult[3] = formatToPlainStringResult;
      } else {
        if (cResult[4] !== paddingTop) {
          const obj3 = { top: paddingTop };
          cResult[4] = paddingTop;
          cResult[5] = obj3;
          let tmp12 = obj3;
        } else {
          tmp12 = cResult[5];
        }
        if (cResult[6] === tmp4.backButton) {
          if (cResult[7] === tmp12) {
            let tmp13 = cResult[8];
          }
          if (cResult[9] !== stateFromStores) {
            const obj4 = { count: stateFromStores };
            const tmp16 = constants2(BackIconWithBadge.CloseIconWithBadgeOnSide, obj4);
            cResult[9] = stateFromStores;
            cResult[10] = tmp16;
            let tmp14 = tmp16;
          } else {
            tmp14 = cResult[10];
          }
          if (cResult[11] === tmp9) {
            if (cResult[12] === tmp13) {
              if (cResult[13] === tmp14) {
                let tmp17 = cResult[14];
              }
              return tmp17;
            }
          }
          const obj5 = {
            style: tmp13,
            accessibilityRole: "button",
            accessibilityLabel: tmp9,
            onPress: handleBackButtonPress,
            children: tmp14,
          };
          const tmp20 = constants2(Pressables.PressableOpacity, obj5);
          cResult[11] = tmp9;
          cResult[12] = tmp13;
          cResult[13] = tmp14;
          cResult[14] = tmp20;
          tmp17 = tmp20;
        }
        const items1 = [tmp4.backButton, tmp12];
        cResult[6] = tmp4.backButton;
        cResult[7] = tmp12;
        cResult[8] = items1;
        tmp13 = items1;
      }
      const tmpResult = useStateFromStores;
    }
  : function BackButton(paddingTop) {
      const tmp = closure_24();
      const items = [GuildReadStateStore];
      const stateFromStores = useStateFromStores.useStateFromStores(items, () =>
        totalMentionCount.getTotalMentionCount(),
      );
      if (stateFromStores > 0) {
        const intl2 = util.intl;
        const obj2 = { mentionCount: stateFromStores };
        let formatToPlainStringResult = intl2.formatToPlainString(util.t.vxFYaM, obj2);
      } else {
        const intl = util.intl;
        formatToPlainStringResult = intl.string(util.t["13/7kX"]);
      }
      const obj3 = {
        style: null,
        accessibilityRole: "button",
        accessibilityLabel: formatToPlainStringResult,
        onPress: handleBackButtonPress,
        children: constants2(BackIconWithBadge.CloseIconWithBadgeOnSide, { count: stateFromStores }),
      };
      const items1 = [tmp.backButton, { top: paddingTop.paddingTop }];
      obj3.style = items1;
      return constants2(Pressables.PressableOpacity, obj3);
    };
const __initData = {
  code: "function YouScreenTsx1(e){const{scrollPosition}=this.__closure;scrollPosition.set(e.contentOffset.y);}",
};
ReactCompilerGating = fn(558);
let size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/YouScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function YouScreen(initialTab) {
      const cResult = id(576).c(31);
      initialTab = initialTab.initialTab;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [UserStore];
        const fn = function n() {
          return currentUser.getCurrentUser();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const obj = id(576);
      const stateFromStores = id(573).useStateFromStores(tmp4, tmp5);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [LocaleStore];
        class T {
          constructor() {
            return closure_1_8.locale;
          }
        }
        cResult[2] = items1;
        cResult[3] = T;
        let tmp8 = T;
        let tmp7 = items1;
      } else {
        tmp7 = cResult[2];
        tmp8 = cResult[3];
      }
      const tmpResult = id(573);
      const stateFromStores1 = id(573).useStateFromStores(tmp7, tmp8);
      id = undefined;
      if (stateFromStores != null) {
        id = stateFromStores.id;
      }
      if (cResult[4] !== stateFromStores) {
        let avatarURL;
        if (stateFromStores != null) {
          avatarURL = stateFromStores.getAvatarURL(null, closure_13);
        }
        class T {
          constructor() {
            return closure_1_8.locale;
          }
        }
        cResult[5] = avatarURL;
        let tmp12 = avatarURL;
      } else {
        tmp12 = cResult[5];
      }
      importDefault = tmp12;
      if (cResult[6] === tmp12) {
        if (cResult[7] === id) {
          let tmp15 = cResult[8];
        }
        if (cResult[9] === tmp12) {
          if (cResult[10] === stateFromStores1) {
            if (cResult[11] === id) {
              let tmp16 = cResult[12];
            }
            const layoutEffect = noop.useLayoutEffect(tmp15, tmp16);
            class T {
              constructor() {
                return closure_1_8.locale;
              }
            }
            if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
              const items2 = [UserProfileStore];
              class T {
                constructor() {
                  return closure_1_8.locale;
                }
              }
              cResult[13] = items2;
              let tmp18 = items2;
            } else {
              tmp18 = cResult[13];
            }
            if (cResult[14] !== id) {
              class A {
                constructor() {
                  firstWishlistId = null;
                  if (null != id) {
                    tmp3 = closure_7;
                    firstWishlistId = closure_7.getFirstWishlistId(tmp);
                  }
                  return firstWishlistId;
                }
              }
              cResult[14] = id;
              class T {
                constructor() {
                  return closure_1_8.locale;
                }
              }
              cResult[15] = A;
            } else {
              class A {
                constructor() {
                  firstWishlistId = null;
                  if (null != id) {
                    tmp3 = closure_7;
                    firstWishlistId = closure_7.getFirstWishlistId(tmp);
                  }
                  return firstWishlistId;
                }
              }
            }
            const stateFromStores2 = tmp(573).useStateFromStores(tmp18, A);
            if (cResult[16] === id) {
              class A {
                constructor() {
                  firstWishlistId = null;
                  if (null != id) {
                    tmp3 = closure_7;
                    firstWishlistId = closure_7.getFirstWishlistId(tmp);
                  }
                  return firstWishlistId;
                }
              }
              const fetchWishlist = tmp(8979).useFetchWishlist(tmp22);
              class T {
                constructor() {
                  return closure_1_8.locale;
                }
              }
              if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
                class A {
                  constructor() {
                    firstWishlistId = null;
                    if (null != id) {
                      tmp3 = closure_7;
                      firstWishlistId = closure_7.getFirstWishlistId(tmp);
                    }
                    return firstWishlistId;
                  }
                }
                cResult[19] = tmp25;
                class T {
                  constructor() {
                    return closure_1_8.locale;
                  }
                }
              } else {
                class A {
                  constructor() {
                    firstWishlistId = null;
                    if (null != id) {
                      tmp3 = closure_7;
                      firstWishlistId = closure_7.getFirstWishlistId(tmp);
                    }
                    return firstWishlistId;
                  }
                }
              }
              dependencyMap = tmp24;
              const _Symbol = Symbol;
              if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
                class B {
                  constructor() {
                    obj = id(closure_2[70]);
                    obj1 = { screen: closure_1_16.PREMIUM };
                    openUserSettingsResult = obj.openUserSettings(obj1);
                    return;
                  }
                }
                cResult[20] = B;
                class T {
                  constructor() {
                    return closure_1_8.locale;
                  }
                }
              } else {
                class B {
                  constructor() {
                    obj = id(closure_2[70]);
                    obj1 = { screen: closure_1_16.PREMIUM };
                    openUserSettingsResult = obj.openUserSettings(obj1);
                    return;
                  }
                }
              }
              const _Symbol2 = Symbol;
              if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
                class N {
                  constructor() {
                    obj = id(closure_2[71]);
                    obj1 = {
                      analyticsSource: closure_1(closure_2[48]).YOU_SCREEN,
                      analyticsLocations: null,
                      screen: null,
                    };
                    items = [];
                    items[0] = closure_1(closure_2[48]).YOU_SCREEN;
                    obj1.analyticsLocations = items;
                    obj1.screen = closure_1_17.FEATURED_PAGE;
                    result = obj.openCollectiblesShopMobile(obj1);
                    return;
                  }
                }
                cResult[21] = N;
                class T {
                  constructor() {
                    return closure_1_8.locale;
                  }
                }
              } else {
                class N {
                  constructor() {
                    obj = id(closure_2[71]);
                    obj1 = {
                      analyticsSource: closure_1(closure_2[48]).YOU_SCREEN,
                      analyticsLocations: null,
                      screen: null,
                    };
                    items = [];
                    items[0] = closure_1(closure_2[48]).YOU_SCREEN;
                    obj1.analyticsLocations = items;
                    obj1.screen = closure_1_17.FEATURED_PAGE;
                    result = obj.openCollectiblesShopMobile(obj1);
                    return;
                  }
                }
              }
              const _Symbol3 = Symbol;
              if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
                class N {
                  constructor() {
                    obj = id(closure_2[71]);
                    obj1 = {
                      analyticsSource: closure_1(closure_2[48]).YOU_SCREEN,
                      analyticsLocations: null,
                      screen: null,
                    };
                    items = [];
                    items[0] = closure_1(closure_2[48]).YOU_SCREEN;
                    obj1.analyticsLocations = items;
                    obj1.screen = closure_1_17.FEATURED_PAGE;
                    result = obj.openCollectiblesShopMobile(obj1);
                    return;
                  }
                }
                cResult[22] = tmp29;
                class T {
                  constructor() {
                    return closure_1_8.locale;
                  }
                }
              } else {
                class N {
                  constructor() {
                    obj = id(closure_2[71]);
                    obj1 = {
                      analyticsSource: closure_1(closure_2[48]).YOU_SCREEN,
                      analyticsLocations: null,
                      screen: null,
                    };
                    items = [];
                    items[0] = closure_1(closure_2[48]).YOU_SCREEN;
                    obj1.analyticsLocations = items;
                    obj1.screen = closure_1_17.FEATURED_PAGE;
                    result = obj.openCollectiblesShopMobile(obj1);
                    return;
                  }
                }
              }
              const _Symbol4 = Symbol;
              if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
                class D {
                  constructor() {
                    obj = id(closure_2[72]);
                    obj1 = { analyticsLocations: null };
                    items = [];
                    items[0] = closure_1(closure_2[48]).YOU_SCREEN;
                    obj1.analyticsLocations = items;
                    result = obj.openEditCustomStatusModal(obj1);
                    return;
                  }
                }
                cResult[23] = D;
                class T {
                  constructor() {
                    return closure_1_8.locale;
                  }
                }
              } else {
                class D {
                  constructor() {
                    obj = id(closure_2[72]);
                    obj1 = { analyticsLocations: null };
                    items = [];
                    items[0] = closure_1(closure_2[48]).YOU_SCREEN;
                    obj1.analyticsLocations = items;
                    result = obj.openEditCustomStatusModal(obj1);
                    return;
                  }
                }
              }
              const _Symbol5 = Symbol;
              if (cResult[24] === Symbol.for("react.memo_cache_sentinel")) {
                class H {
                  constructor() {
                    obj = id(closure_2[20]);
                    rootNavigationRef = obj.getRootNavigationRef();
                    if (null != rootNavigationRef) {
                      if (rootNavigationRef.isReady()) {
                        str = "friends";
                        navigateResult = rootNavigationRef.navigate("friends");
                        return;
                      }
                    }
                    return false;
                  }
                }
                cResult[24] = H;
                class T {
                  constructor() {
                    return closure_1_8.locale;
                  }
                }
              } else {
                class H {
                  constructor() {
                    obj = id(closure_2[20]);
                    rootNavigationRef = obj.getRootNavigationRef();
                    if (null != rootNavigationRef) {
                      if (rootNavigationRef.isReady()) {
                        str = "friends";
                        navigateResult = rootNavigationRef.navigate("friends");
                        return;
                      }
                    }
                    return false;
                  }
                }
              }
              const _Symbol6 = Symbol;
              if (cResult[25] === Symbol.for("react.memo_cache_sentinel")) {
                class H {
                  constructor() {
                    obj = id(closure_2[20]);
                    rootNavigationRef = obj.getRootNavigationRef();
                    if (null != rootNavigationRef) {
                      if (rootNavigationRef.isReady()) {
                        str = "friends";
                        navigateResult = rootNavigationRef.navigate("friends");
                        return;
                      }
                    }
                    return false;
                  }
                }
                const items3 = [];
                class T {
                  constructor() {
                    return closure_1_8.locale;
                  }
                }
                cResult[26] = items3;
                let tmp33 = items3;
              } else {
                class H {
                  constructor() {
                    obj = id(closure_2[20]);
                    rootNavigationRef = obj.getRootNavigationRef();
                    if (null != rootNavigationRef) {
                      if (rootNavigationRef.isReady()) {
                        str = "friends";
                        navigateResult = rootNavigationRef.navigate("friends");
                        return;
                      }
                    }
                    return false;
                  }
                }
                tmp33 = cResult[26];
              }
              const layoutEffect1 = noop.useLayoutEffect(tmp34, tmp33);
              const _Symbol7 = Symbol;
              class I {
                constructor() {
                  tmp2 = null != id;
                  tmp = id;
                  if (tmp2) {
                    tmp3 = closure_1;
                    tmp2 = null != closure_1;
                  }
                  if (tmp2) {
                    tmp4 = closure_1;
                    tmp5 = closure_2;
                    tmp6 = closure_1;
                    tmp7 = closure_1(closure_2[68])(tmp, closure_1, { type: "you_screen" });
                  }
                  return;
                }
              }
              if (tmp36 === Symbol.for("react.memo_cache_sentinel")) {
                class H {
                  constructor() {
                    obj = id(closure_2[20]);
                    rootNavigationRef = obj.getRootNavigationRef();
                    if (null != rootNavigationRef) {
                      if (rootNavigationRef.isReady()) {
                        str = "friends";
                        navigateResult = rootNavigationRef.navigate("friends");
                        return;
                      }
                    }
                    return false;
                  }
                }
                tmp38[0] = function scrollToTop() {
                  tmp24();
                };
                class T {
                  constructor() {
                    return closure_1_8.locale;
                  }
                }
              } else {
                class H {
                  constructor() {
                    obj = id(closure_2[20]);
                    rootNavigationRef = obj.getRootNavigationRef();
                    if (null != rootNavigationRef) {
                      if (rootNavigationRef.isReady()) {
                        str = "friends";
                        navigateResult = rootNavigationRef.navigate("friends");
                        return;
                      }
                    }
                    return false;
                  }
                }
              }
              const tmpResult7 = tmp(8979);
              const scrollToTop = tmp(1504).useScrollToTop(noop.useRef(tmp38));
              if (null == stateFromStores) {
                class H {
                  constructor() {
                    obj = id(closure_2[20]);
                    rootNavigationRef = obj.getRootNavigationRef();
                    if (null != rootNavigationRef) {
                      if (rootNavigationRef.isReady()) {
                        str = "friends";
                        navigateResult = rootNavigationRef.navigate("friends");
                        return;
                      }
                    }
                    return false;
                  }
                }
              } else {
                class H {
                  constructor() {
                    obj = id(closure_2[20]);
                    rootNavigationRef = obj.getRootNavigationRef();
                    if (null != rootNavigationRef) {
                      if (rootNavigationRef.isReady()) {
                        str = "friends";
                        navigateResult = rootNavigationRef.navigate("friends");
                        return;
                      }
                    }
                    return false;
                  }
                }
                class T {
                  constructor() {
                    return closure_1_8.locale;
                  }
                }
                tmp44[0] = stateFromStores;
                tmp44[1] = tmp24;
                tmp44[2] = tmp26;
                tmp44[3] = tmp28;
                tmp44[4] = tmp30;
                tmp44[5] = tmp31;
                tmp44[6] = tmp27;
                tmp44[7] = initialTab;
                const tmp45 = closure_20(UnconnectedYouScreen, tmp44);
                cResult[28] = initialTab;
                cResult[29] = stateFromStores;
                cResult[30] = tmp45;
              }
              const tmpResult8 = tmp(1504);
            }
            let obj2 = { wishlistId: stateFromStores2, userId: id };
            cResult[16] = id;
            cResult[17] = stateFromStores2;
            cResult[18] = obj2;
            tmp22 = obj2;
            const tmpResult6 = tmp(573);
          }
        }
        const items4 = [, ,];
        class T {
          constructor() {
            return closure_1_8.locale;
          }
        }
        items4[1] = tmp12;
        items4[2] = stateFromStores1;
        cResult[9] = tmp12;
        cResult[10] = stateFromStores1;
        cResult[11] = id;
        cResult[12] = items4;
        tmp16 = items4;
      }
      class I {
        constructor() {
          tmp2 = null != id;
          tmp = id;
          if (tmp2) {
            tmp3 = closure_1;
            tmp2 = null != closure_1;
          }
          if (tmp2) {
            tmp4 = closure_1;
            tmp5 = closure_2;
            tmp6 = closure_1;
            tmp7 = closure_1(closure_2[68])(tmp, closure_1, { type: "you_screen" });
          }
          return;
        }
      }
      cResult[6] = tmp12;
      cResult[7] = id;
      cResult[8] = I;
      tmp15 = I;
      const tmpResult5 = id(573);
    }
  : function YouScreen(initialTab) {
      let stateFromStores;
      let memo;
      let navigateToSettings;
      let items = [UserStore];
      stateFromStores = stateFromStores(memo[23]).useStateFromStores(items, () => currentUser.getCurrentUser());
      const obj = stateFromStores(memo[23]);
      const items1 = [LocaleStore];
      let id;
      const stateFromStores1 = stateFromStores(memo[23]).useStateFromStores(items1, () => locale.locale);
      if (stateFromStores != null) {
        id = stateFromStores.id;
      }
      const items2 = [stateFromStores];
      memo = noop.useMemo(() => {
        let avatarURL;
        if (stateFromStores != null) {
          avatarURL = stateFromStores.getAvatarURL(null, map1);
        }
        return avatarURL;
      }, items2);
      const items3 = [id, memo, stateFromStores1];
      const layoutEffect = noop.useLayoutEffect(() => {
        let tmp2 = null != id;
        if (tmp2) {
          tmp2 = null != memo;
        }
        if (tmp2) {
          maybeFetchUserProfileDefault(id, memo, { type: "you_screen" });
        }
      }, items3);
      let obj2 = stateFromStores(memo[23]);
      const items4 = [UserProfileStore];
      const stateFromStores2 = stateFromStores(memo[23]).useStateFromStores(items4, () => {
        let firstWishlistId = null;
        if (null != id) {
          firstWishlistId = UserProfileStore.getFirstWishlistId(tmp);
        }
        return firstWishlistId;
      });
      const tmpResult = stateFromStores(memo[23]);
      const fetchWishlist = stateFromStores(memo[69]).useFetchWishlist({ wishlistId: stateFromStores2, userId: id });
      navigateToSettings = noop.useCallback(() => {
        state.setState({ query: "", isActive: false });
        stateFromStores(memo[70]).openUserSettings();
      }, []);
      const callback1 = noop.useCallback(() => {
        stateFromStores(memo[70]).openUserSettings({ screen: constants.PREMIUM });
      }, []);
      const callback2 = noop.useCallback(() => {
        const obj2 = { analyticsSource: id(memo[48]).YOU_SCREEN, analyticsLocations: null, screen: null };
        const items = [id(memo[48]).YOU_SCREEN];
        obj2.analyticsLocations = items;
        obj2.screen = constants2.FEATURED_PAGE;
        const result = stateFromStores(memo[71]).openCollectiblesShopMobile(obj2);
      }, []);
      const callback3 = noop.useCallback((autoFocusElement) => {
        const obj2 = { screen: constants.PROFILE_CUSTOMIZATION, params: { autoFocusElement } };
        stateFromStores(memo[70]).openUserSettings(obj2);
      }, []);
      const callback4 = noop.useCallback(() => {
        const obj2 = { analyticsLocations: null };
        const items = [id(memo[48]).YOU_SCREEN];
        obj2.analyticsLocations = items;
        const result = stateFromStores(memo[72]).openEditCustomStatusModal(obj2);
      }, []);
      const callback5 = noop.useCallback(() => {
        const rootNavigationRef = stateFromStores(memo[20]).getRootNavigationRef();
        if (null != rootNavigationRef) {
          if (rootNavigationRef.isReady()) {
            rootNavigationRef.navigate("friends");
          }
        }
        return false;
      }, []);
      const layoutEffect1 = noop.useLayoutEffect(() => stateFromStores(memo[73]).trackAppUIViewed(), []);
      const tmpResult3 = stateFromStores(memo[69]);
      const scrollToTop = stateFromStores(memo[38]).useScrollToTop(
        noop.useRef({
          scrollToTop() {
            callback();
          },
        }),
      );
      let tmp18 = null;
      if (null != stateFromStores) {
        const obj4 = {
          user: stateFromStores,
          navigateToSettings,
          navigateToPremium: callback1,
          navigateToProfileCustomization: callback3,
          navigateToCustomStatus: callback4,
          navigateToFriends: callback5,
          navigateToShop: callback2,
          initialTab: initialTab.initialTab,
        };
        tmp18 = closure_20(UnconnectedYouScreen, obj4);
      }
      return tmp18;
    };
