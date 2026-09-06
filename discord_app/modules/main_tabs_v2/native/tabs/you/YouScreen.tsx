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
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";
import UserProfileStore from "../../../../user_profile/UserProfileStore.tsx";
import LocaleStore from "../../../../user_settings/LocaleStore.tsx";
import UserSettingSearchStore from "../../../../user_settings/UserSettingSearchStore.tsx";
import GuildReadStateStore from "../../../../../stores/GuildReadStateStore.tsx";
import UserStore from "../../../../../stores/UserStore.tsx";
import ReanimatedRexport from "../../../../reanimated/ReanimatedRexport.tsx";

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
  let obj = useStateFromStores;
  const items = [GuildReadStateStore];
  const stateFromStores = obj.useStateFromStores(items, () => totalMentionCount.getTotalMentionCount());
  if (stateFromStores > 0) {
    const intl2 = tmp2(1114).intl;
    obj = { mentionCount: stateFromStores };
    let formatToPlainStringResult = intl2.formatToPlainString(tmp2(1114).t.vxFYaM, obj);
  } else {
    const intl = tmp2(1114).intl;
    formatToPlainStringResult = intl.string(tmp2(1114).t["13/7kX"]);
  }
  obj = {
    style: null,
    accessibilityRole: "button",
    accessibilityLabel: formatToPlainStringResult,
    onPress: handleBackButtonPress,
    children: closure_1_20(tmp2(16403).CloseIconWithBadgeOnSide, { count: stateFromStores }),
  };
  const items1 = [closure_24().backButton, { top: paddingTop.paddingTop }];
  obj.style = items1;
  return closure_1_20(Pressables.PressableOpacity, obj);
}
function UnconnectedYouScreen(arg0) {
  ({ user, navigateToSettings } = arg0);
  ({ navigateToPremium, navigateToShop } = arg0);
  dependencyMap = undefined;
  _slicedToArray = undefined;
  let rect;
  let sharedValue;
  let bound;
  let first;
  closure_8 = undefined;
  let num2;
  closure_10 = undefined;
  closure_11 = undefined;
  let youSettingsCoachmark;
  closure_13 = undefined;
  nativeID = undefined;
  scrollEventThrottle = undefined;
  closure_16 = undefined;
  let obj = rect;
  ({ navigateToProfileCustomization, navigateToCustomStatus, navigateToFriends, initialTab } = arg0);
  [tmp3, c2] = _slicedToArray(rect.useState(0), 2);
  const callback = rect.useCallback((nativeEvent) => {
    _undefined(nativeEvent.nativeEvent.layout.width);
  }, []);
  let tmp8;
  let tmp2 = _slicedToArray(rect.useState(0), 2);
  if (tmp3 > 0) {
    tmp8 = tmp3;
  }
  const tmp7Result = navigateToShop(8230)(tmp8);
  _slicedToArray = tmp7Result;
  const tmp10 = closure_23(tmp7Result);
  obj = { type: null, name: null };
  let tmp5Result = tmp5(8768);
  obj.type = navigateToSettings(1250).ImpressionTypes.VIEW;
  obj.name = navigateToSettings(1250).ImpressionNames.USER_YOU_SCREEN;
  tmp5Result(obj);
  let obj2 = tmp5(8186)(user.id);
  rect = tmp5(1611)();
  const tmp7 = navigateToShop(8230);
  ({ theme, primaryColor, secondaryColor } = navigateToShop(8227)({ user, displayProfile: obj2 }));
  const tmp14 = navigateToShop(8227)({ user, displayProfile: obj2 });
  const ref = obj.useRef(null);
  let obj3 = navigateToSettings(4296);
  sharedValue = obj3.useSharedValue(0);
  let obj4 = navigateToSettings(4296);
  const fn = function w(contentOffset) {
    const result = sharedValue.set(contentOffset.contentOffset.y);
  };
  fn.__closure = { scrollPosition: sharedValue };
  fn.__workletHash = 952837799380;
  fn.__initData = __initData;
  const tmp15 = navigateToShop(4495)();
  const animatedScrollHandler = obj4.useAnimatedScrollHandler(fn);
  ({ bannerAnimatedStyle, bannerImageAnimatedStyle, contentAnimatedStyle, blurAnimatedProps, showBlur } =
    navigateToShop(8243)({ scrollPosition: sharedValue, bannerHeight: tmp7Result }));
  let size = tmp5(1477)();
  const height = size.height;
  let num = 0;
  const diff = size.width - rect.right - rect.left;
  if (navigateToShop(4420)().isChatBesideChannelList) {
    num = 16;
  }
  const diff1 = diff - num;
  bound = diff1;
  if (tmp3 > 0) {
    const _Math = Math;
    bound = Math.min(diff1, tmp3);
  }
  let tmpResult = tmp(obj.useState(false), 2);
  first = tmpResult[0];
  closure_8 = tmpResult[1];
  const GifAutoPlay = tmp12(1935).GifAutoPlay;
  const setting = GifAutoPlay.getSetting();
  let tmp12Result = tmp12(1484);
  const isFocused = tmp12Result.useIsFocused();
  tmp12Result = tmp12(16784);
  let tmp28 = !isFocused;
  if (!isFocused) {
    tmp28 = !tmp12Result.useIsProfileModalTransitioning();
  }
  const tmp19 = navigateToShop(8243)({ scrollPosition: sharedValue, bannerHeight: tmp7Result });
  const ref2 = obj.useRef(undefined);
  const ref3 = obj.useRef(false);
  if (isFocused) {
    if (!ref3.current) {
      ref3.current = true;
      const _Date = Date;
      ref2.current = Date.now();
    }
    let obj31 = setting;
    if (!setting) {
      obj31 = first;
    }
    let bannerURL;
    if (obj2 != null) {
      obj = { canAnimate: obj31, size: bound };
      bannerURL = obj2.getBannerURL(obj);
    }
    let source = null;
    if (null != bannerURL) {
      source = tmp12(1396).makeSource(bannerURL);
      const tmp12Result1 = tmp12(1396);
    }
    const tmp12Result2 = tmp12(1396);
    let intl = tmp12(1114).intl;
    const obj1 = { username: user.username };
    const formatToPlainStringResult = intl.formatToPlainString(tmp12(1114).t.gVn4uJ, obj1);
    const isAnimatedImageURLResult = tmp12(1396).isAnimatedImageURL(bannerURL);
    obj2 = { user, displayProfile: null };
    obj2.displayProfile = obj2;
    let tmp37 = null == obj2;
    const userProfileBannerBackgroundColor = tmp12(8247).useUserProfileBannerBackgroundColor(obj2);
    if (!tmp37) {
      tmp37 = !obj2.isLoaded;
    }
    let items = [tmp7Result, bound, rect.bottom];
    const tmp12Result3 = tmp12(8247);
    const memo = obj.useMemo(() => {
      let obj = { dimensionStyle: null, contentContainerStyle: null };
      const size = { width: bound, height };
      obj.dimensionStyle = size;
      obj = { paddingBottom: rect.bottom + nativeDefault.space.PX_64 };
      obj.contentContainerStyle = obj;
      return obj;
    }, items);
    ({ dimensionStyle, contentContainerStyle } = memo);
    const tmp38 = tmp5(6945)();
    obj3 = { layout: "YOU_SCREEN", userId: user.id };
    const createUserProfileAnalyticsContext = tmp12(8190).useCreateUserProfileAnalyticsContext(obj3);
    const tmp12Result4 = tmp12(8190);
    const isScreenLandscape = tmp12(5126).useIsScreenLandscape();
    let tmp43;
    tmp5Result = tmp5(8201);
    if (!isScreenLandscape) {
      let skuId;
      if (obj2 != null) {
        const profileFrame = obj2.profileFrame;
        if (profileFrame != null) {
          skuId = profileFrame.skuId;
        }
      }
      tmp43 = skuId;
    }
    const tmp5Result1Result = tmp5Result(tmp43, "YouScreen");
    let tmp47;
    const tmp12Result5 = tmp12(5126);
    if (!isScreenLandscape) {
      let skuId1;
      if (obj2 != null) {
        const profileFrame2 = obj2.profileFrame;
        if (profileFrame2 != null) {
          skuId1 = profileFrame2.skuId;
        }
      }
      tmp47 = skuId1;
    }
    obj4 = { skuId: tmp47, openedAt: ref2.current, analyticsLocations: null, context: null };
    const items1 = [tmp5(7182).YOU_SCREEN];
    obj4.analyticsLocations = items1;
    obj4.context = createUserProfileAnalyticsContext;
    tmp5(8214)(obj4);
    num2 = 0;
    if (null != tmp5Result1Result) {
      num2 = tmp5(8224)(tmp5Result1Result, bound).overflowTop;
    }
    const items2 = [num2];
    if (!tmp38) {
      if (!tmp12Result6.isIOS()) {
        const _Math2 = Math;
        let bound1 = Math.max(rect.top - num2, youSettingsCoachmark);
      }
      let skuId2;
      if (obj2 != null) {
        const profileEffect = obj2.profileEffect;
        if (profileEffect != null) {
          skuId2 = profileEffect.skuId;
        }
      }
      let tmp89Result = null != skuId2;
      const memo1 = obj.useMemo(() => {
        const items = [navigateToSettings(_undefined[47]).DismissibleContent.WISHLIST_MOBILE_YOU_SCREEN_COACHMARK];
        return items;
      }, []);
      tmp12Result6 = tmp12(1116);
      tmpResult = tmp(tmp12(7388).useSelectedDismissibleContent(memo1), 2);
      closure_10 = tmp58;
      const items3 = [null != tmpResult[0]];
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
            return closure_1_20(navigateToShop(_undefined[49]), {
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
      const items4 = [tmpResult[1], navigateToShop];
      const callback1 = obj.useCallback(() => {
        navigateToShop();
        closure_11(ContentDismissActionType.TAKE_ACTION);
      }, items4);
      let tmp63 = null != memo2;
      const tmp12Result7 = tmp12(7388);
      const obj5 = { disabled: tmp63 };
      youSettingsCoachmark = tmp12(16785).useYouSettingsCoachmark(obj5);
      let tmp65 = null != youSettingsCoachmark;
      const tmp12Result8 = tmp12(16785);
      const customTypingIndicatorConfig = tmp12(11967).useCustomTypingIndicatorConfig("YouScreen");
      if ("settings" === customTypingIndicatorConfig.entryPoint) {
        if (customTypingIndicatorConfig.canSet) {
          if (null != obj2) {
            if (!tmp63) {
              if (!tmp65) {
                let items5 = [tmp12(1943).DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_PROFILE_COACHMARK];
              }
              const tmpResult1 = tmp(tmp12(7388).useSelectedDismissibleContent(items5), 2);
              closure_13 = tmp68;
              const tmp69 =
                tmpResult1[0] === tmp12(1943).DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_PROFILE_COACHMARK;
              nativeID = tmp69;
              let tmp70 = tmp63;
              if (!tmp63) {
                tmp70 = tmp65;
              }
              if (!tmp70) {
                tmp70 = tmp69;
              }
              scrollEventThrottle = tmp70;
              const tmp12Result10 = tmp12(7388);
              closure_16 = tmp(obj.useState(false), 2)[1];
              let tmp74Result = null;
              if (tmp70) {
                tmp74Result = null;
                if (tmp72) {
                  if (tmp63) {
                    const obj6 = {
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
                    obj6.navigateToShop = callback1;
                    tmp63 = closure_20(tmp5(16788), obj6);
                  }
                  const items6 = [tmp63, ,];
                  if (tmp65) {
                    const obj7 = { buttonRef: ref5 };
                    const merged = Object.assign(youSettingsCoachmark.props);
                    tmp65 = closure_20(tmp5(16785), obj7);
                    const tmp5Result2 = tmp5(16785);
                  }
                  items6[1] = tmp65;
                  let tmp80 = tmp69;
                  if (tmp69) {
                    const obj8 = { targetRef: ref5, visible: tmp69, markAsDismissed: tmp68, position: "top" };
                    tmp80 = closure_20(tmp5(16789), obj8);
                  }
                  const obj9 = { zIndex: 1, children: null };
                  items6[2] = tmp80;
                  obj9.children = items6;
                  tmp74Result = closure_21(tmp12(7156).LayerScope, obj9);
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
              const items8 = [navigateToSettings, youSettingsCoachmark, tmp69, tmpResult1[1]];
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
              const obj10 = {
                isLoading: tmp37,
                navigateToPremium,
                navigateToSettings: callback2,
                navigateToShop: callback1,
                shopButtonRef: ref4,
                settingsButtonRef: ref5,
                paddingBottom: rect.bottom,
              };
              const tmpResult2 = tmp(obj.useState(false), 2);
              const obj11 = { theme, primaryColor, secondaryColor, children: null };
              const obj12 = {
                value: createUserProfileAnalyticsContext,
                openedAt: ref1.current,
                fetchStartedAt: null,
                fetchEndedAt: null,
                isLoaded: null,
                children: null,
              };
              let fetchStartedAt;
              if (obj2 != null) {
                fetchStartedAt = obj2.fetchStartedAt;
              }
              obj12.fetchStartedAt = fetchStartedAt;
              let fetchEndedAt;
              if (obj2 != null) {
                fetchEndedAt = obj2.fetchEndedAt;
              }
              obj12.fetchEndedAt = fetchEndedAt;
              let isLoaded;
              if (obj2 != null) {
                isLoaded = obj2.isLoaded;
              }
              obj12.isLoaded = isLoaded;
              const obj13 = { style: null, nativeID: null, children: null };
              const items9 = [tmp10.container, tmp50];
              obj13.style = items9;
              obj13.nativeID = nativeID;
              let tmp84Result = null != tmp5Result1Result;
              const tmp85 = closure_20(tmp5(16790), obj10);
              if (tmp84Result) {
                const obj14 = {
                  frame: tmp5Result1Result,
                  profileThemeType: UserProfileThemeTypes.YOU_SCREEN,
                  frameOrder: tmp12(8207).ProfileFrameLayerOrder.BACK,
                  containerWidth: bound,
                };
                tmp84Result = tmp84(tmp5(8221), obj14);
                const tmp5Result4 = tmp5(8221);
              }
              const items10 = [tmp84Result, , , , ,];
              const obj15 = { gradientHeight: height, bannerHeight: tmp7Result, style: tmp10.background };
              items10[1] = closure_20(tmp5(8237), obj15);
              const obj16 = {
                contentContainerStyle,
                ref,
                onScroll: animatedScrollHandler,
                onLayout: callback,
                scrollEventThrottle,
                style: tmp10.scrollView,
                children: null,
              };
              const obj17 = { style: null, children: null };
              const items11 = [tmp10.banner, bannerAnimatedStyle];
              obj17.style = items11;
              tmp84Result = !tmp89Result;
              if (!tmp89Result) {
                const obj18 = { paddingTop: bound1 };
                tmp84Result = tmp84(BackButton, obj18);
              }
              const items12 = [tmp84Result];
              const obj19 = { style: null, children: null };
              const items13 = [dimensionStyle, bannerImageAnimatedStyle];
              obj19.style = items13;
              const obj20 = { style: null };
              const items14 = [sharedValue.absoluteFill];
              const obj21 = { backgroundColor: null };
              const tmp100 = sharedValue;
              const tmp5Result3 = tmp5(16798);
              const tmp95 = closure_25;
              obj21.backgroundColor = tmp12(1091).int2hex(userProfileBannerBackgroundColor);
              items14[1] = obj21;
              obj20.style = items14;
              const items15 = [closure_20(bound, obj20), ,];
              if (null == source) {
                items15[1] = tmp101;
                let tmp84Result1 = tmp12(1116).isIOS() && showBlur;
                if (tmp84Result1) {
                  const obj22 = { animatedProps: blurAnimatedProps, style: tmp100.absoluteFillObject };
                  tmp84Result1 = tmp84(VisualEffectViewThemed, obj22);
                }
                items15[2] = tmp84Result1;
                obj19.children = items15;
                items12[1] = tmp89(tmp5(4296).View, obj19);
                obj17.children = items12;
                const items16 = [tmp89(tmp5(4296).View, obj17), , ,];
                if (tmp89Result) {
                  const obj23 = { pointerEvents: "box-none", style: null, children: null };
                  const items17 = [tmp10.profileEffectLayer, ,];
                  size = { width: bound, height };
                  items17[1] = size;
                  items17[2] = bannerAnimatedStyle;
                  obj23.style = items17;
                  const obj24 = { skuId: skuId2, bannerAdjustment: 0, replayOnNavigationFocus: true, paused: tmp28 };
                  const items18 = [tmp84(tmp5(8801), obj24)];
                  const obj25 = { paddingTop: bound1 };
                  items18[1] = tmp84(BackButton, obj25);
                  obj23.children = items18;
                  tmp89Result = tmp89(tmp5(4296).View, obj23);
                }
                items16[1] = tmp89Result;
                const obj26 = {
                  user,
                  userTheme: tmp15,
                  scrollViewRef: ref,
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
                obj26.style = items19;
                obj26.navigateToProfileCustomization = navigateToProfileCustomization;
                obj26.navigateToCustomStatus = navigateToCustomStatus;
                obj26.navigateToFriends = navigateToFriends;
                obj26.navigateToPremium = navigateToPremium;
                obj26.navigateToShop = navigateToShop;
                obj26.initialTab = initialTab;
                obj26.animateAvatar = !tmp28;
                items16[2] = tmp84(tmp5(16800), obj26);
                items16[3] = tmp84(tmp12(11896).TTIFirstContentfulPaint, { label: "you_screen" });
                obj16.children = items16;
                items10[2] = tmp89(tmp95, obj16);
                let tmp84Result2 = null != tmp5Result1Result;
                if (tmp84Result2) {
                  const obj27 = {
                    frame: tmp5Result1Result,
                    profileThemeType: UserProfileThemeTypes.YOU_SCREEN,
                    frameOrder: tmp12(8207).ProfileFrameLayerOrder.FRONT,
                    containerWidth: bound,
                  };
                  tmp84Result2 = tmp84(tmp5(8221), obj27);
                  const tmp5Result5 = tmp5(8221);
                }
                const obj28 = { children: null };
                items10[3] = tmp84Result2;
                items10[4] = tmp85;
                items10[5] = tmp74Result;
                obj13.children = items10;
                obj12.children = tmp89(tmp5Result3, obj13);
                obj11.children = tmp84(tmp12(8190).UserProfileAnalyticsProvider, obj12);
                obj28.children = tmp84(tmp12(4271).ThemeContextProvider, obj11);
                return tmp84(tmp12(7156).LayerScope, obj28);
              } else if (isAnimatedImageURLResult) {
                const obj29 = {
                  onPress() {
                    return closure_8(!first);
                  },
                  accessibilityRole: "image",
                  accessibilityLabel: null,
                  children: null,
                };
                let intl2 = tmp12(1114).intl;
                obj29.accessibilityLabel = intl2.string(tmp12(1114).t["3fzj/l"]);
                const obj30 = {
                  style: dimensionStyle,
                  accessibilityRole: "image",
                  accessibilityLabel: formatToPlainStringResult,
                  source,
                  paused: tmp28,
                };
                const items20 = [tmp84(tmp5(5587), obj30)];
                let tmp84Result3 = !obj31;
                if (!obj31) {
                  obj31 = { label: null, style: null, textStyle: null };
                  const intl3 = tmp12(1114).intl;
                  obj31.label = intl3.string(tmp12(1114).t.I5gL2H);
                  const items21 = [tmp10.gifTag];
                  dimensionStyle = { top: bound1 };
                  items21[1] = dimensionStyle;
                  obj31.style = items21;
                  obj31.textStyle = tmp10.gifTagText;
                  tmp84Result3 = tmp84(tmp12(10651).Caption, obj31);
                }
                items20[1] = tmp84Result3;
                obj29.children = items20;
                tmp89Result = tmp89(tmp12(5123).PressableOpacity, obj29);
              } else {
                const obj32 = {
                  style: dimensionStyle,
                  accessibilityRole: "image",
                  accessibilityLabel: formatToPlainStringResult,
                  source,
                  paused: tmp28,
                };
                tmp89Result = tmp84(tmp5(5587), obj32);
              }
              const tmp12Result11 = tmp12(1091);
            }
          }
        }
      }
      items5 = [];
      const tmp12Result9 = tmp12(11967);
    }
    bound1 = youSettingsCoachmark;
    const tmp5Result1 = tmp5(8214);
  }
  if (!isFocused) {
    ref3.current = false;
  }
}
get_ActivityIndicator = fn(17);
({ StyleSheet: hasOwnProperty, View: metroRequire, ScrollView } = get_ActivityIndicator);
const YouConstants = fn(16370);
({
  YOU_ACTION_SHEET_TOP_INSET: closure_12,
  YOU_AVATAR_SIZE: map1,
  YOU_SCREEN_ID: closure_14,
  YOU_SCROLL_EVENT_THROTTLE: closure_15,
} = YouConstants);
const UserSettingsSections = fn(1074).UserSettingsSections;
let closure_17 = fn(1076).CollectiblesMobileShopScreen;
const ContentDismissActionType = fn(1954).ContentDismissActionType;
const UserProfileThemeTypes = fn(7208).UserProfileThemeTypes;
const jsxProd = fn(21);
({ jsx: closure_20, jsxs: closure_21 } = jsxProd);
const VisualEffectViewThemed = ReanimatedRexport.createAnimatedComponent(VisualEffectViewThemedDefault);
let createStyles = fn(4560);
let closure_23 = createStyles.createStyles((minHeight) => {
  let obj = utils_PlatformUtils;
  let xl;
  if (obj.isIOS()) {
    xl = nativeDefault.radii.xl;
  }
  obj = { borderTopLeftRadius: xl, borderTopRightRadius: null };
  let xl1;
  if (tmpResult.isIOS()) {
    xl1 = nativeDefault.radii.xl;
  }
  obj.borderTopRightRadius = xl1;
  obj = {
    container: null,
    background: null,
    scrollView: null,
    profileEffectLayer: null,
    banner: null,
    gifTag: null,
    gifTagText: null,
    content: null,
  };
  const merged = Object.assign(obj);
  obj.container = { flex: 1, flexGrow: 1, position: "relative" };
  const merged1 = Object.assign(obj);
  obj.background = { overflow: "hidden" };
  const merged2 = Object.assign(obj);
  obj.scrollView = { flex: 1 };
  obj.profileEffectLayer = { position: "absolute", top: 0, zIndex: 1 };
  obj.banner = { minHeight, position: "absolute", top: 0, maxWidth: "100%" };
  const rect = { position: "absolute", left: 16, right: "auto", bottom: "auto", marginTop: 8, backgroundColor: null };
  const obj1 = { flex: 1, flexGrow: 1, position: "relative" };
  const obj2 = { overflow: "hidden" };
  const obj3 = { flex: 1 };
  tmpResult = utils_PlatformUtils;
  const tmp10Result = _modDef672(nativeDefault.unsafe_rawColors.WHITE);
  rect.backgroundColor = _modDef672(nativeDefault.unsafe_rawColors.WHITE).alpha(0.9).css();
  obj.gifTag = rect;
  const alphaResult = _modDef672(nativeDefault.unsafe_rawColors.WHITE).alpha(0.9);
  obj.gifTagText = { color: nativeDefault.unsafe_rawColors.PRIMARY_800, fontSize: 14 };
  obj.content = { marginTop: minHeight, flex: 1, flexGrow: 1 };
  return obj;
});
createStyles = fn(4560);
let closure_24 = createStyles.createStyles(() => {
  let obj = { backButton: null };
  obj = {
    position: "absolute",
    marginTop: nativeDefault.space.PX_4,
    left: nativeDefault.space.PX_16,
    zIndex: 99,
    alignItems: "center",
    justifyContent: "center",
  };
  obj.backButton = obj;
  return obj;
});
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
  let obj = stateFromStores(memo[21]);
  let items = [UserStore];
  stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
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
  let tmpResult = tmp(tmp2[21]);
  const items4 = [UserProfileStore];
  const stateFromStores2 = tmpResult.useStateFromStores(items4, () => {
    let firstWishlistId = null;
    if (null != id) {
      firstWishlistId = UserProfileStore.getFirstWishlistId(tmp);
    }
    return firstWishlistId;
  });
  tmpResult = tmp(tmp2[67]);
  const fetchWishlist = tmpResult.useFetchWishlist({ wishlistId: stateFromStores2, userId: id });
  navigateToSettings = noop.useCallback(() => {
    state.setState({ query: "", isActive: false });
    stateFromStores(memo[68]).openUserSettings();
  }, []);
  const callback1 = noop.useCallback(() => {
    stateFromStores(memo[68]);
    const obj = { screen: constants.PREMIUM };
    obj.openUserSettings(obj);
  }, []);
  const callback2 = noop.useCallback(() => {
    stateFromStores(memo[69]);
    const obj = { analyticsSource: id(memo[45]).YOU_SCREEN, analyticsLocations: null, screen: null };
    const items = [id(memo[45]).YOU_SCREEN];
    obj.analyticsLocations = items;
    obj.screen = constants2.FEATURED_PAGE;
    const result = obj.openCollectiblesShopMobile(obj);
  }, []);
  const callback3 = noop.useCallback((autoFocusElement) => {
    stateFromStores(memo[68]);
    let obj = { screen: constants.PROFILE_CUSTOMIZATION, params: null };
    obj = { autoFocusElement };
    obj.params = obj;
    obj.openUserSettings(obj);
  }, []);
  const callback4 = noop.useCallback(() => {
    stateFromStores(memo[70]);
    const obj = { analyticsLocations: null };
    const items = [id(memo[45]).YOU_SCREEN];
    obj.analyticsLocations = items;
    const result = obj.openEditCustomStatusModal(obj);
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
  const obj2 = stateFromStores(memo[21]);
  obj = {
    scrollToTop() {
      callback();
    },
  };
  const scrollToTop = stateFromStores(memo[36]).useScrollToTop(noop.useRef(obj));
  let tmp18 = null;
  if (null != stateFromStores) {
    obj = {
      user: stateFromStores,
      navigateToSettings,
      navigateToPremium: callback1,
      navigateToProfileCustomization: callback3,
      navigateToCustomStatus: callback4,
      navigateToFriends: callback5,
      navigateToShop: callback2,
      initialTab: initialTab.initialTab,
    };
    tmp18 = closure_20(UnconnectedYouScreen, obj);
  }
  return tmp18;
}
