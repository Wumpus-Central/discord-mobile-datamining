// discord_app/modules/main_tabs_v2/native/tabs/you/YouScreen.tsx
import useStateFromStores from "../../../../../../discord_common/js/packages/flux/useStateFromStores.tsx";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef672 from "../../../../../../_runtime/metro/00672__.js";
import util from "../../../../../intl/index.native.tsx";
import utils_PlatformUtils from "../../../../../../discord_common/js/shared/utils/PlatformUtils.tsx";
import RootNavigationRef from "../../../RootNavigationRef.native.tsx";
import Pressables from "../../../../../design/void/Pressables/native/Pressables.tsx";
import maybeFetchUserProfileDefault from "../../../../user_profile/maybeFetchUserProfile.tsx";
import VisualEffectViewThemedDefault from "../../../../visual_effect_view/native/VisualEffectViewThemed.tsx";
import BackIconWithBadge from "../../shared_components/BackIconWithBadge.tsx";
import YouBannerDecorations from "YouBannerDecorations.tsx";
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
function BackButton(paddingTop) {
  const tmp = closure_24();
  const items = [GuildReadStateStore];
  const stateFromStores = useStateFromStores.useStateFromStores(items, () => totalMentionCount.getTotalMentionCount());
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
    children: closure_1_20(BackIconWithBadge.CloseIconWithBadgeOnSide, { count: stateFromStores }),
  };
  const items1 = [tmp.backButton, { top: paddingTop.paddingTop }];
  obj3.style = items1;
  return closure_1_20(Pressables.PressableOpacity, obj3);
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
  const tmp7Result = navigateToShop(8574)(tmp8);
  _slicedToArray = tmp7Result;
  const tmp10 = closure_23(tmp7Result);
  let obj2 = { type: null, name: null };
  const tmp7 = navigateToShop(8574);
  obj2.type = navigateToSettings(1249).ImpressionTypes.VIEW;
  obj2.name = navigateToSettings(1249).ImpressionNames.USER_YOU_SCREEN;
  navigateToShop(9124)(obj2);
  const obj3 = navigateToShop(8530)(user.id);
  rect = navigateToShop(1612)();
  const tmp5Result = navigateToShop(9124);
  ({ theme, primaryColor, secondaryColor } = navigateToShop(8571)({ user, displayProfile: obj3 }));
  const tmp14 = navigateToShop(8571)({ user, displayProfile: obj3 });
  const ref = rect.useRef(null);
  const tmp15 = navigateToShop(4761)();
  sharedValue = navigateToSettings(4559).useSharedValue(0);
  const obj4 = navigateToSettings(4559);
  class N {
    constructor(arg0) {
      result = closure_5.set(arg0.contentOffset.y);
      return;
    }
  }
  N.__closure = { scrollPosition: sharedValue };
  N.__workletHash = 952837799380;
  N.__initData = __initData;
  const obj5 = navigateToSettings(4559);
  const animatedScrollHandler = navigateToSettings(4559).useAnimatedScrollHandler(N);
  ({ bannerAnimatedStyle, bannerImageAnimatedStyle, contentAnimatedStyle, blurAnimatedProps, showBlur } =
    navigateToShop(8587)({ scrollPosition: sharedValue, bannerHeight: tmp7Result }));
  let size = navigateToShop(1478)();
  const height = size.height;
  let num = 0;
  const diff = size.width - rect.right - rect.left;
  if (navigateToShop(4687)().isChatBesideChannelList) {
    num = 16;
  }
  const diff1 = diff - num;
  bound = diff1;
  if (tmp3 > 0) {
    const _Math = Math;
    bound = Math.min(diff1, tmp3);
  }
  [first, closure_8] = rect.useState(false);
  const GifAutoPlay = navigateToSettings(2020).GifAutoPlay;
  const setting = GifAutoPlay.getSetting();
  const tmp19 = navigateToShop(8587)({ scrollPosition: sharedValue, bannerHeight: tmp7Result });
  const isFocused = navigateToSettings(1485).useIsFocused();
  const tmp12Result = navigateToSettings(1485);
  let tmp28 = !isFocused;
  if (!isFocused) {
    tmp28 = !tmp12Result14.useIsProfileModalTransitioning();
  }
  tmp12Result14 = navigateToSettings(17332);
  const ref2 = rect.useRef(undefined);
  const ref3 = rect.useRef(false);
  if (isFocused) {
    if (!ref3.current) {
      ref3.current = true;
      const _Date = Date;
      ref2.current = Date.now();
    }
    let obj37 = setting;
    if (!setting) {
      obj37 = first;
    }
    let bannerURL;
    if (obj3 != null) {
      const obj6 = { canAnimate: obj37, size: bound };
      bannerURL = obj3.getBannerURL(obj6);
    }
    let source = null;
    if (null != bannerURL) {
      source = navigateToSettings(1397).makeSource(bannerURL);
      const tmp12Result15 = navigateToSettings(1397);
    }
    const tmp12Result16 = navigateToSettings(1397);
    let intl = navigateToSettings(1115).intl;
    const obj7 = { username: user.username };
    const formatToPlainStringResult = intl.formatToPlainString(navigateToSettings(1115).t.gVn4uJ, obj7);
    const isAnimatedImageURLResult = navigateToSettings(1397).isAnimatedImageURL(bannerURL);
    const obj8 = { user, displayProfile: obj3 };
    let tmp37 = null == obj3;
    const userProfileBannerBackgroundColor = navigateToSettings(8591).useUserProfileBannerBackgroundColor(obj8);
    if (!tmp37) {
      tmp37 = !obj3.isLoaded;
    }
    let items = [tmp7Result, bound, rect.bottom];
    const tmp12Result17 = navigateToSettings(8591);
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
    const tmp38 = navigateToShop(7274)();
    const obj9 = { layout: "YOU_SCREEN", userId: user.id };
    const createUserProfileAnalyticsContext = navigateToSettings(8534).useCreateUserProfileAnalyticsContext(obj9);
    const tmp12Result18 = navigateToSettings(8534);
    const isScreenLandscape = navigateToSettings(5428).useIsScreenLandscape();
    let tmp43;
    const tmp12Result19 = navigateToSettings(5428);
    if (!isScreenLandscape) {
      let skuId;
      if (obj3 != null) {
        const profileFrame = obj3.profileFrame;
        if (profileFrame != null) {
          skuId = profileFrame.skuId;
        }
      }
      tmp43 = skuId;
    }
    const tmp5Result1Result = navigateToShop(8545)(tmp43);
    let tmp47;
    const tmp5Result7 = navigateToShop(8545);
    if (!isScreenLandscape) {
      let skuId1;
      if (obj3 != null) {
        const profileFrame2 = obj3.profileFrame;
        if (profileFrame2 != null) {
          skuId1 = profileFrame2.skuId;
        }
      }
      tmp47 = skuId1;
    }
    const obj10 = { skuId: tmp47, openedAt: ref2.current, analyticsLocations: null, context: null };
    const items1 = [navigateToShop(7513).YOU_SCREEN];
    obj10.analyticsLocations = items1;
    obj10.context = createUserProfileAnalyticsContext;
    navigateToShop(8557)(obj10);
    num2 = 0;
    if (null != tmp5Result1Result) {
      num2 = navigateToShop(8568)(tmp5Result1Result, bound).overflowTop;
    }
    const items2 = [num2];
    if (!tmp38) {
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
      let tmp89Result = null != skuId2;
      const memo1 = obj.useMemo(() => {
        const items = [navigateToSettings(_undefined[48]).DismissibleContent.WISHLIST_MOBILE_YOU_SCREEN_COACHMARK];
        return items;
      }, []);
      tmp12Result20 = navigateToSettings(1365);
      const tmpResult4 = tmp(navigateToSettings(7716).useSelectedDismissibleContent(memo1), 2);
      closure_10 = tmp58;
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
            return closure_1_20(navigateToShop(_undefined[50]), {
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
      closure_11 = tmp57;
      const items4 = [tmpResult4[1], navigateToShop];
      const callback1 = obj.useCallback(() => {
        navigateToShop();
        closure_11(ContentDismissActionType.TAKE_ACTION);
      }, items4);
      let tmp63 = null != memo2;
      const tmp12Result21 = navigateToSettings(7716);
      const obj11 = { disabled: tmp63 };
      youSettingsCoachmark = navigateToSettings(17341).useYouSettingsCoachmark(obj11);
      let tmp65 = null != youSettingsCoachmark;
      const tmp12Result22 = navigateToSettings(17341);
      const customTypingIndicatorConfig = navigateToSettings(12300).useCustomTypingIndicatorConfig("YouScreen");
      if ("settings" === customTypingIndicatorConfig.entryPoint) {
        if (customTypingIndicatorConfig.canSet) {
          if (null != obj3) {
            if (!tmp63) {
              if (!tmp65) {
                let items5 = [
                  navigateToSettings(2028).DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_PROFILE_COACHMARK,
                ];
              }
              const tmpResult5 = tmp(navigateToSettings(7716).useSelectedDismissibleContent(items5), 2);
              closure_13 = tmp68;
              const tmp69 =
                tmpResult5[0] ===
                navigateToSettings(2028).DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_PROFILE_COACHMARK;
              nativeID = tmp69;
              let tmp70 = tmp63;
              if (!tmp63) {
                tmp70 = tmp65;
              }
              if (!tmp70) {
                tmp70 = tmp69;
              }
              scrollEventThrottle = tmp70;
              const tmp12Result24 = navigateToSettings(7716);
              closure_16 = tmp(obj.useState(false), 2)[1];
              let tmp74Result = null;
              if (tmp70) {
                tmp74Result = null;
                if (tmp72) {
                  if (tmp63) {
                    const obj12 = {
                      buttonRef: ref4,
                      markAsDismissed: tmp57,
                      visible: tmp58,
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
                    tmp63 = closure_20(navigateToShop(17344), obj12);
                  }
                  const items6 = [tmp63, ,];
                  if (tmp65) {
                    const obj13 = { buttonRef: ref5 };
                    const merged = Object.assign(youSettingsCoachmark.props);
                    tmp65 = closure_20(navigateToShop(17341), obj13);
                    const tmp5Result9 = navigateToShop(17341);
                  }
                  items6[1] = tmp65;
                  let tmp80 = tmp69;
                  if (tmp69) {
                    const obj14 = { targetRef: ref5, visible: tmp69, markAsDismissed: tmp68, position: "top" };
                    tmp80 = closure_20(navigateToShop(17345), obj14);
                  }
                  const obj15 = { zIndex: 1, children: null };
                  items6[2] = tmp80;
                  obj15.children = items6;
                  tmp74Result = closure_21(navigateToSettings(7487).LayerScope, obj15);
                }
              }
              const items7 = [tmp70];
              const effect = obj.useEffect(() => {
                if (closure_15) {
                  const _setTimeout = setTimeout;
                  const timeout = setTimeout(() => closure_1_16(true), 500);
                  return () => clearTimeout(closure_0);
                }
              }, items7);
              const items8 = [navigateToSettings, youSettingsCoachmark, tmp69, tmpResult5[1]];
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
                isLoading: tmp37,
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
              const items9 = [tmp10.container, tmp50];
              obj19.style = items9;
              obj19.nativeID = nativeID;
              let tmp84Result = null != tmp5Result1Result;
              const tmp85 = closure_20(navigateToShop(17333), obj16);
              if (tmp84Result) {
                const obj20 = {
                  frame: tmp5Result1Result,
                  profileThemeType: UserProfileThemeTypes.YOU_SCREEN,
                  frameOrder: navigateToSettings(8551).ProfileFrameLayerOrder.BACK,
                  containerWidth: bound,
                };
                tmp84Result = closure_20(navigateToShop(8565), obj20);
                const tmp5Result11 = navigateToShop(8565);
              }
              const items10 = [tmp84Result, , , , ,];
              class N {
                constructor(arg0) {
                  result = closure_5.set(arg0.contentOffset.y);
                  return;
                }
              }
              tmp95[0] = height;
              tmp95[1] = tmp7Result;
              tmp95[2] = tmp10.background;
              items10[1] = closure_20(navigateToShop(8581), tmp95);
              const obj21 = {
                contentContainerStyle,
                ref,
                onScroll: animatedScrollHandler,
                onLayout: callback,
                scrollEventThrottle,
                style: tmp10.scrollView,
                children: null,
              };
              const obj22 = { style: null, children: null };
              const items11 = [tmp10.banner, bannerAnimatedStyle];
              obj22.style = items11;
              let tmp84Result5 = !tmp89Result;
              if (!tmp89Result) {
                const obj23 = { paddingTop: bound1 };
                tmp84Result5 = closure_20(BackButton, obj23);
              }
              const items12 = [tmp84Result5];
              const obj24 = { style: null, children: null };
              const items13 = [dimensionStyle, bannerImageAnimatedStyle];
              obj24.style = items13;
              const obj26 = { style: null };
              const items14 = [sharedValue.absoluteFill];
              const obj27 = { backgroundColor: null };
              const tmp101 = sharedValue;
              const tmp5Result10 = navigateToShop(17346);
              obj27.backgroundColor = navigateToSettings(1092).int2hex(userProfileBannerBackgroundColor);
              items14[1] = obj27;
              obj26.style = items14;
              const items15 = [closure_20(bound, obj26), ,];
              if (null == source) {
                items15[1] = tmp102;
                let tmp84Result6 = navigateToSettings(1365).isIOS() && showBlur;
                if (tmp84Result6) {
                  const obj28 = { animatedProps: blurAnimatedProps, style: tmp101.absoluteFillObject };
                  tmp84Result6 = closure_20(VisualEffectViewThemed, obj28);
                }
                items15[2] = tmp84Result6;
                obj24.children = items15;
                items12[1] = closure_21(navigateToShop(4559).View, obj24);
                obj22.children = items12;
                const items16 = [closure_21(navigateToShop(4559).View, obj22), , ,];
                if (tmp89Result) {
                  const obj29 = { pointerEvents: "box-none", style: null, children: null };
                  const items17 = [tmp10.profileEffectLayer, ,];
                  const size1 = { width: bound, height };
                  items17[1] = size1;
                  items17[2] = bannerAnimatedStyle;
                  obj29.style = items17;
                  const obj30 = { skuId: skuId2, bannerAdjustment: 0, replayOnNavigationFocus: true, paused: tmp28 };
                  const items18 = [closure_20(navigateToShop(9158), obj30)];
                  const obj31 = { paddingTop: bound1 };
                  items18[1] = closure_20(BackButton, obj31);
                  obj29.children = items18;
                  tmp89Result = closure_21(navigateToShop(4559).View, obj29);
                }
                items16[1] = tmp89Result;
                const obj32 = {
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
                obj32.style = items19;
                obj32.navigateToProfileCustomization = navigateToProfileCustomization;
                obj32.navigateToCustomStatus = navigateToCustomStatus;
                obj32.navigateToFriends = navigateToFriends;
                obj32.navigateToPremium = navigateToPremium;
                obj32.navigateToShop = navigateToShop;
                obj32.initialTab = initialTab;
                obj32.animateAvatar = !tmp28;
                items16[2] = closure_20(navigateToShop(17348), obj32);
                items16[3] = closure_20(navigateToSettings(12232).TTIFirstContentfulPaint, { label: "you_screen" });
                obj21.children = items16;
                items10[2] = closure_21(closure_25, obj21);
                let tmp84Result7 = null != tmp5Result1Result;
                if (tmp84Result7) {
                  const obj33 = {
                    frame: tmp5Result1Result,
                    profileThemeType: UserProfileThemeTypes.YOU_SCREEN,
                    frameOrder: navigateToSettings(8551).ProfileFrameLayerOrder.FRONT,
                    containerWidth: bound,
                  };
                  tmp84Result7 = closure_20(navigateToShop(8565), obj33);
                  const tmp5Result12 = navigateToShop(8565);
                }
                const obj34 = { children: null };
                items10[3] = tmp84Result7;
                items10[4] = tmp85;
                items10[5] = tmp74Result;
                obj19.children = items10;
                obj18.children = closure_21(tmp5Result10, obj19);
                obj17.children = closure_20(navigateToSettings(8534).UserProfileAnalyticsProvider, obj18);
                obj34.children = closure_20(navigateToSettings(4533).ThemeContextProvider, obj17);
                return closure_20(navigateToSettings(7487).LayerScope, obj34);
              } else if (isAnimatedImageURLResult) {
                const obj35 = {
                  onPress() {
                    return closure_8(!first);
                  },
                  accessibilityRole: "image",
                  accessibilityLabel: null,
                  children: null,
                };
                let intl2 = navigateToSettings(1115).intl;
                obj35.accessibilityLabel = intl2.string(navigateToSettings(1115).t["3fzj/l"]);
                const obj36 = {
                  style: dimensionStyle,
                  accessibilityRole: "image",
                  accessibilityLabel: formatToPlainStringResult,
                  source,
                  paused: tmp28,
                };
                const items20 = [closure_20(navigateToShop(5890), obj36)];
                let tmp84Result8 = !obj37;
                if (!obj37) {
                  obj37 = { label: null, style: null, textStyle: null };
                  const intl3 = navigateToSettings(1115).intl;
                  obj37.label = intl3.string(navigateToSettings(1115).t.I5gL2H);
                  const items21 = [tmp10.gifTag];
                  dimensionStyle = { top: bound1 };
                  items21[1] = dimensionStyle;
                  obj37.style = items21;
                  obj37.textStyle = tmp10.gifTagText;
                  tmp84Result8 = closure_20(navigateToSettings(10993).Caption, obj37);
                }
                items20[1] = tmp84Result8;
                obj35.children = items20;
                let tmp89Result2 = closure_21(navigateToSettings(5425).PressableOpacity, obj35);
              } else {
                const obj38 = {
                  style: dimensionStyle,
                  accessibilityRole: "image",
                  accessibilityLabel: formatToPlainStringResult,
                  source,
                  paused: tmp28,
                };
                tmp89Result2 = closure_20(navigateToShop(5890), obj38);
              }
              const tmp12Result25 = navigateToSettings(1092);
            }
          }
        }
      }
      items5 = [];
      const tmp12Result23 = navigateToSettings(12300);
    }
    bound1 = youSettingsCoachmark;
    const tmp5Result8 = navigateToShop(8557);
  }
  if (!isFocused) {
    ref3.current = false;
  }
  ref1 = rect.useRef(Date.now());
}
get_ActivityIndicator = fn(17);
({ StyleSheet: hasOwnProperty, View: metroRequire, ScrollView } = get_ActivityIndicator);
const YouConstants = fn(16773);
({
  YOU_ACTION_SHEET_TOP_INSET: closure_12,
  YOU_AVATAR_SIZE: map1,
  YOU_SCREEN_ID: closure_14,
  YOU_SCROLL_EVENT_THROTTLE: closure_15,
} = YouConstants);
const UserSettingsSections = fn(1074).UserSettingsSections;
let closure_17 = fn(1076).CollectiblesMobileShopScreen;
const ContentDismissActionType = fn(2039).ContentDismissActionType;
const UserProfileThemeTypes = fn(7539).UserProfileThemeTypes;
const jsxProd = fn(21);
({ jsx: closure_20, jsxs: closure_21 } = jsxProd);
let ReanimatedRexport = ReanimatedRexport_mod;
const VisualEffectViewThemed = ReanimatedRexport.createAnimatedComponent(VisualEffectViewThemedDefault);
let createStyles = fn(4827);
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
  const tmp10Result = _modDef672(nativeDefault.unsafe_rawColors.WHITE);
  rect.backgroundColor = _modDef672(nativeDefault.unsafe_rawColors.WHITE).alpha(0.9).css();
  obj3.gifTag = rect;
  const alphaResult = _modDef672(nativeDefault.unsafe_rawColors.WHITE).alpha(0.9);
  obj3.gifTagText = { color: nativeDefault.unsafe_rawColors.PRIMARY_800, fontSize: 14 };
  obj3.content = { marginTop: minHeight, flex: 1, flexGrow: 1 };
  return obj3;
});
createStyles = fn(4827);
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
const __initData = {
  code: "function YouScreenTsx1(e){const{scrollPosition}=this.__closure;scrollPosition.set(e.contentOffset.y);}",
};
let size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/YouScreen.tsx");

export default function YouScreen(initialTab) {
  let stateFromStores;
  let memo;
  let navigateToSettings;
  let items = [UserStore];
  stateFromStores = stateFromStores(memo[21]).useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj = stateFromStores(memo[21]);
  const items1 = [LocaleStore];
  let id;
  const stateFromStores1 = stateFromStores(memo[21]).useStateFromStores(items1, () => locale.locale);
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
  let obj2 = stateFromStores(memo[21]);
  const items4 = [UserProfileStore];
  const stateFromStores2 = stateFromStores(memo[21]).useStateFromStores(items4, () => {
    let firstWishlistId = null;
    if (null != id) {
      firstWishlistId = UserProfileStore.getFirstWishlistId(tmp);
    }
    return firstWishlistId;
  });
  const tmpResult = stateFromStores(memo[21]);
  const fetchWishlist = stateFromStores(memo[67]).useFetchWishlist({ wishlistId: stateFromStores2, userId: id });
  navigateToSettings = noop.useCallback(() => {
    state.setState({ query: "", isActive: false });
    stateFromStores(memo[68]).openUserSettings();
  }, []);
  const callback1 = noop.useCallback(() => {
    stateFromStores(memo[68]).openUserSettings({ screen: constants.PREMIUM });
  }, []);
  const callback2 = noop.useCallback(() => {
    const obj2 = { analyticsSource: id(memo[46]).YOU_SCREEN, analyticsLocations: null, screen: null };
    const items = [id(memo[46]).YOU_SCREEN];
    obj2.analyticsLocations = items;
    obj2.screen = constants2.FEATURED_PAGE;
    const result = stateFromStores(memo[69]).openCollectiblesShopMobile(obj2);
  }, []);
  const callback3 = noop.useCallback((autoFocusElement) => {
    const obj2 = { screen: constants.PROFILE_CUSTOMIZATION, params: { autoFocusElement } };
    stateFromStores(memo[68]).openUserSettings(obj2);
  }, []);
  const callback4 = noop.useCallback(() => {
    const obj2 = { analyticsLocations: null };
    const items = [id(memo[46]).YOU_SCREEN];
    obj2.analyticsLocations = items;
    const result = stateFromStores(memo[70]).openEditCustomStatusModal(obj2);
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
  const layoutEffect1 = noop.useLayoutEffect(() => stateFromStores(memo[71]).trackAppUIViewed(), []);
  const tmpResult3 = stateFromStores(memo[67]);
  const scrollToTop = stateFromStores(memo[36]).useScrollToTop(
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
}
