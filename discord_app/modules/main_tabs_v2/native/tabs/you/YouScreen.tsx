// discord_app/modules/main_tabs_v2/native/tabs/you/YouScreen.tsx
import useStateFromStores from "../../../../../../discord_common/js/packages/flux/useStateFromStores.tsx";
import react2 from "../../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef683 from "../../../../../../_runtime/metro/00683__.js";
import Constants from "../../../../../Constants.tsx";
import CollectiblesShopConstants from "../../../../collectibles/CollectiblesShopConstants.tsx";
import intl4 from "../../../../../intl/index.native.tsx";
import utils_PlatformUtils from "../../../../../../discord_common/js/shared/utils/PlatformUtils.tsx";
import DismissibleContentConstants from "../../../../dismissible_content/DismissibleContentConstants.tsx";
import RootNavigationRef from "../../../RootNavigationRef.native.tsx";
import Pressables from "../../../../../design/void/Pressables/native/Pressables.tsx";
import Constants2 from "../../../../user_profile/native/Constants.tsx";
import maybeFetchUserProfileDefault from "../../../../user_profile/maybeFetchUserProfile.tsx";
import VisualEffectViewThemedDefault from "../../../../visual_effect_view/native/VisualEffectViewThemed.tsx";
import BackIconWithBadge from "../../shared_components/BackIconWithBadge.tsx";
import YouBannerDecorations from "YouBannerDecorations.tsx";
import _slicedToArray_mod from "../../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../../_runtime/00019_react.js";
import react_native from "../../../../../../_runtime/00017_react-native.js";
import UserProfileStore from "../../../../user_profile/UserProfileStore.tsx";
import LocaleStore from "../../../../user_settings/LocaleStore.tsx";
import UserSettingSearchStore from "../../../../user_settings/UserSettingSearchStore.tsx";
import GuildReadStateStore from "../../../../../stores/GuildReadStateStore.tsx";
import UserStore from "../../../../../stores/UserStore.tsx";
import YouConstants from "YouConstants.tsx";
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import ReanimatedRexport_mod from "../../../../reanimated/ReanimatedRexport.tsx";
import createStyles_mod from "../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../../_runtime/metro/00002__.js";

let dependencyMap, importDefault, nativeID, navigation, paddingTop, scrollEventThrottle;

let ScrollView;
let closure_12;
let closure_14;
let closure_15;
let closure_20;
let closure_21;
let hasOwnProperty;
let map1;
let metroRequire;
function handleBackButtonPress() {
  const obj = RootNavigationRef;
  navigation = obj.getRootNavigationRef();
  if (null != navigation) {
    if (navigation.canGoBack()) {
      navigation.goBack();
    } else {
      navigation.navigate("guilds");
    }
  }
}
function UnconnectedYouScreen(arg0) {
  let UserProfileAnalyticsProvider;
  let _undefined;
  let bannerAnimatedStyle;
  let bannerImageAnimatedStyle;
  let blurAnimatedProps;
  let c2;
  let closure_14;
  let closure_15;
  let contentAnimatedStyle;
  let contentContainerStyle;
  let dimensionStyle;
  let fetchEndedAt;
  let fetchStartedAt;
  let initialTab;
  let intl2;
  let intl3;
  let isLoaded;
  let items1;
  let items10;
  let items11;
  let items12;
  let items13;
  let items14;
  let items15;
  let items16;
  let items17;
  let items18;
  let items19;
  let items20;
  let items21;
  let items9;
  let navigateToCustomStatus;
  let navigateToFriends;
  let navigateToPremium;
  let navigateToProfileCustomization;
  let navigateToSettings;
  let navigateToShop;
  let obj18;
  let obj19;
  let primaryColor;
  let secondaryColor;
  let showBlur;
  let theme;
  let tmp12Result25;
  let tmp3;
  let tmp5Result10;
  let user;
  ({ user, navigateToSettings } = arg0);
  ({ navigateToPremium, navigateToShop } = arg0);
  dependencyMap = undefined;
  _slicedToArray = undefined;
  let rect;
  let sharedValue;
  let bound;
  let first;
  let closure_8;
  let num2;
  let closure_10;
  let closure_11;
  let youSettingsCoachmark;
  let closure_13;
  nativeID = undefined;
  scrollEventThrottle = undefined;
  let closure_16;
  let obj = rect;
  ({ navigateToProfileCustomization, navigateToCustomStatus, navigateToFriends, initialTab } = arg0);
  let tmp = _slicedToArray;
  let tmp2 = _slicedToArray(rect.useState(0), 2);
  [tmp3, c2] = tmp2;
  const callback = rect.useCallback((nativeEvent) => {
    c2(nativeEvent.nativeEvent.layout.width);
  }, []);
  let tmp8;
  const tmp7 = navigateToShop(7913);
  if (tmp3 > 0) {
    tmp8 = tmp3;
  }
  const tmp7Result = tmp7(tmp8);
  _slicedToArray = tmp7Result;
  const tmp10 = closure_23(tmp7Result);
  let obj2 = {
    type: navigateToSettings(1260).ImpressionTypes.VIEW,
    name: navigateToSettings(1260).ImpressionNames.USER_YOU_SCREEN,
  };
  const tmp5Result = navigateToShop(8455);
  tmp5Result(obj2);
  const obj3 = navigateToShop(7868)(user.id);
  rect = navigateToShop(1618)();
  ({ theme, primaryColor, secondaryColor } = navigateToShop(7910)({ user, displayProfile: obj3 }));
  navigateToShop(7910)({ user, displayProfile: obj3 });
  const tmp15 = navigateToShop(4797)();
  const ref = obj.useRef(null);
  let obj4 = navigateToSettings(4618);
  sharedValue = obj4.useSharedValue(0);
  const obj5 = navigateToSettings(4618);
  class Y {
    constructor(contentOffset) {
      const result = sharedValue.set(contentOffset.contentOffset.y);
    }
  }
  Y.__closure = { scrollPosition: sharedValue };
  Y.__workletHash = 952837799380;
  Y.__initData = __initData;
  const animatedScrollHandler = obj5.useAnimatedScrollHandler(Y);
  ({ bannerAnimatedStyle, bannerImageAnimatedStyle, contentAnimatedStyle, blurAnimatedProps, showBlur } =
    navigateToShop(7926)({ scrollPosition: sharedValue, bannerHeight: tmp7Result }));
  navigateToShop(7926)({ scrollPosition: sharedValue, bannerHeight: tmp7Result });
  const isChatBesideChannelList = navigateToShop(4745)().isChatBesideChannelList;
  size = navigateToShop(1484)();
  const height = size.height;
  let num = 0;
  const diff = size.width - rect.right - rect.left;
  if (isChatBesideChannelList) {
    num = 16;
  }
  const diff1 = diff - num;
  bound = diff1;
  if (tmp3 > 0) {
    const _Math = Math;
    bound = Math.min(diff1, tmp3);
  }
  const tmpResult = tmp(obj.useState(false), 2);
  first = tmpResult[0];
  closure_8 = tmpResult[1];
  const GifAutoPlay = navigateToSettings(2028).GifAutoPlay;
  const setting = GifAutoPlay.getSetting();
  const tmp12Result = navigateToSettings(1491);
  const isFocused = tmp12Result.useIsFocused();
  const tmp12Result14 = navigateToSettings(16980);
  const tmp28 = !isFocused && !tmp12Result14.useIsProfileModalTransitioning();
  const ref1 = obj.useRef(Date.now());
  const ref2 = obj.useRef(undefined);
  const ref3 = obj.useRef(false);
  if (isFocused) {
    if (!ref3.current) {
      ref3.current = true;
      const _Date = Date;
      ref2.current = Date.now();
    }
    let bannerURL;
    if (obj3 != null) {
      const obj6 = { canAnimate: setting || first, size: bound };
      bannerURL = obj3.getBannerURL(obj6);
    }
    let source = null;
    if (null != bannerURL) {
      const tmp12Result15 = navigateToSettings(1402);
      source = tmp12Result15.makeSource(bannerURL);
    }
    const tmp12Result16 = navigateToSettings(1402);
    const isAnimatedImageURLResult = tmp12Result16.isAnimatedImageURL(bannerURL);
    let intl = navigateToSettings(1126).intl;
    const obj7 = { username: user.username };
    const formatToPlainStringResult = intl.formatToPlainString(navigateToSettings(1126).t.gVn4uJ, obj7);
    const obj8 = { user, displayProfile: obj3 };
    const tmp12Result17 = navigateToSettings(7930);
    const userProfileBannerBackgroundColor = tmp12Result17.useUserProfileBannerBackgroundColor(obj8);
    let items = [tmp7Result, bound, rect.bottom];
    const tmp38 = navigateToShop(6440)();
    const memo = obj.useMemo(() => {
      let floatingNavBottomMargin;
      let obj2;
      const obj = { dimensionStyle: size, contentContainerStyle: obj2 };
      size = { width: bound, height };
      obj2 = { paddingBottom: floatingNavBottomMargin + nativeDefault.space.PX_64 };
      const obj4 = YouBannerDecorations;
      floatingNavBottomMargin = obj4.getFloatingNavBottomMargin(rect.bottom);
      return obj;
    }, items);
    ({ dimensionStyle, contentContainerStyle } = memo);
    const obj9 = { layout: "YOU_SCREEN", userId: user.id };
    const tmp12Result18 = navigateToSettings(7872);
    const createUserProfileAnalyticsContext = tmp12Result18.useCreateUserProfileAnalyticsContext(obj9);
    const tmp12Result19 = navigateToSettings(5919);
    const isScreenLandscape = tmp12Result19.useIsScreenLandscape();
    let tmp43;
    const tmp5Result7 = navigateToShop(7883);
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
    const tmp5Result1Result = tmp5Result7(tmp43);
    let tmp47;
    const tmp5Result8 = navigateToShop(7895);
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
    const obj10 = {
      skuId: tmp47,
      openedAt: ref2.current,
      analyticsLocations: items1,
      context: createUserProfileAnalyticsContext,
    };
    items1 = [navigateToShop(6688).YOU_SCREEN];
    tmp5Result8(obj10);
    num2 = 0;
    if (null != tmp5Result1Result) {
      num2 = navigateToShop(7907)(tmp5Result1Result, bound).overflowTop;
    }
    const items2 = [num2];
    if (!tmp38) {
      let bound1;
      const tmp12Result20 = navigateToSettings(1370);
      if (!tmp12Result20.isIOS()) {
        const _Math2 = Math;
        bound1 = Math.max(rect.top - num2, youSettingsCoachmark);
      }
      let skuId2;
      if (obj3 != null) {
        const profileEffect = obj3.profileEffect;
        if (profileEffect != null) {
          skuId2 = profileEffect.skuId;
        }
      }
      let tmp89Result2 = null != skuId2;
      const memo1 = obj.useMemo(() => {
        const items = [navigateToSettings(c2[50]).DismissibleContent.WISHLIST_MOBILE_YOU_SCREEN_COACHMARK];
        return items;
      }, []);
      const tmp12Result21 = navigateToSettings(6901);
      const tmpResult4 = tmp(tmp12Result21.useSelectedDismissibleContent(memo1), 2);
      closure_10 = tmp58;
      const items3 = [null != tmpResult4[0]];
      const memo2 = obj.useMemo(() => {
        let intl;
        let intl2;
        let tmp = null;
        if (closure_10) {
          const obj = {
            title: intl.string(intl4.t.epBu6F),
            description: intl2.string(intl4.t["o8+3AX"]),
            avatarSrc: {},
            decorationAsset: "",
            renderImgComponent() {
              return closure_1_20(navigateToShop(_undefined[52]), {
                source: {
                  uri: "https://cdn.discordapp.com/assets/content/1979309f7455b06e0bc1e8f5da89de9934155a0a9a74bfff5b680c82fb45d53f.png",
                },
                style: { width: 80, height: 80 },
              });
            },
          };
          intl = intl4.intl;
          intl2 = intl4.intl;
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
      const obj11 = { disabled: tmp63 };
      const tmp12Result22 = navigateToSettings(16990);
      youSettingsCoachmark = tmp12Result22.useYouSettingsCoachmark(obj11);
      let tmp65 = null != youSettingsCoachmark;
      const tmp12Result23 = navigateToSettings(11594);
      const customTypingIndicatorConfig = tmp12Result23.useCustomTypingIndicatorConfig("YouScreen");
      if ("settings" === customTypingIndicatorConfig.entryPoint) {
        if (customTypingIndicatorConfig.canSet) {
          if (null != obj3) {
            if (!tmp63) {
              let items5;
              if (!tmp65) {
                items5 = [navigateToSettings(2036).DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_PROFILE_COACHMARK];
              }
              const tmp12Result24 = navigateToSettings(6901);
              const tmpResult5 = tmp(tmp12Result24.useSelectedDismissibleContent(items5), 2);
              closure_13 = tmp68;
              const tmp69 =
                tmpResult5[0] ===
                navigateToSettings(2036).DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_PROFILE_COACHMARK;
              nativeID = tmp69;
              scrollEventThrottle = tmp70;
              closure_16 = tmp(obj.useState(false), 2)[1];
              let tmp74Result = null;
              tmp(obj.useState(false), 2);
              if (tmp63 || tmp65 || tmp69) {
                tmp74Result = null;
                if (tmp72) {
                  const LayerScope = navigateToSettings(6658).LayerScope;
                  if (tmp63) {
                    const obj12 = {
                      buttonRef: ref4,
                      markAsDismissed: tmpResult4[1],
                      visible: null != tmpResult4[0],
                      title: null,
                      description: null,
                      avatarSrc: null,
                      decorationAsset: null,
                      renderImgComponent: null,
                      navigateToShop: callback1,
                    };
                    ({
                      title: obj24.title,
                      description: obj24.description,
                      avatarSrc: obj24.avatarSrc,
                      decorationAsset: obj24.decorationAsset,
                      renderImgComponent: obj24.renderImgComponent,
                    } = memo2);
                    tmp63 = closure_20(navigateToShop(16993), obj12);
                  }
                  const items6 = [tmp63, ,];
                  if (tmp65) {
                    const obj13 = { buttonRef: ref5 };
                    const tmp5Result9 = navigateToShop(16990);
                    const merged = Object.assign(youSettingsCoachmark.props);
                    tmp65 = closure_20(tmp5Result9, obj13);
                  }
                  items6[1] = tmp65;
                  let tmp80 = tmp69;
                  if (tmp80) {
                    const obj14 = { targetRef: ref5, visible: tmp69, markAsDismissed: tmpResult5[1], position: "top" };
                    tmp80 = closure_20(navigateToShop(16994), obj14);
                  }
                  const obj15 = { zIndex: 1, children: items6 };
                  items6[2] = tmp80;
                  tmp74Result = closure_21(LayerScope, obj15);
                }
              }
              const items7 = [tmp63 || tmp65 || tmp69];
              const effect = obj.useEffect(() => {
                let closure_0;
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
                navigateToPremium,
                navigateToSettings: callback2,
                navigateToShop: callback1,
                shopButtonRef: ref4,
                settingsButtonRef: ref5,
                paddingBottom: rect.bottom,
              };
              const tmp85 = closure_20(navigateToShop(16981), obj16);
              const LayerScope2 = navigateToSettings(6658).LayerScope;
              const obj17 = {
                theme,
                primaryColor,
                secondaryColor,
                children: closure_20(UserProfileAnalyticsProvider, obj18),
              };
              const ThemeContextProvider = navigateToSettings(4595).ThemeContextProvider;
              obj18 = {
                value: createUserProfileAnalyticsContext,
                openedAt: ref1.current,
                fetchStartedAt,
                fetchEndedAt,
                isLoaded,
                children: closure_21(tmp5Result10, obj19),
              };
              fetchStartedAt = undefined;
              UserProfileAnalyticsProvider = navigateToSettings(7872).UserProfileAnalyticsProvider;
              if (obj3 != null) {
                fetchStartedAt = obj3.fetchStartedAt;
              }
              fetchEndedAt = undefined;
              if (obj3 != null) {
                fetchEndedAt = obj3.fetchEndedAt;
              }
              isLoaded = undefined;
              if (obj3 != null) {
                isLoaded = obj3.isLoaded;
              }
              obj19 = { style: items9, nativeID, children: items10 };
              items9 = [tmp10.container, tmp50];
              let tmp84Result = null != tmp5Result1Result;
              tmp5Result10 = navigateToShop(16995);
              if (tmp84Result) {
                const obj20 = {
                  frame: tmp5Result1Result,
                  profileThemeType: UserProfileThemeTypes.YOU_SCREEN,
                  frameOrder: navigateToSettings(7889).ProfileFrameLayerOrder.BACK,
                  containerWidth: bound,
                };
                const tmp5Result11 = navigateToShop(7903);
                tmp84Result = closure_20(tmp5Result11, obj20);
              }
              items10 = [tmp84Result, , , , ,];
              const obj21 = { gradientHeight: height, bannerHeight: tmp7Result, style: null };
              class Y {
                constructor(contentOffset) {
                  const result = sharedValue.set(contentOffset.contentOffset.y);
                }
              }
              items10[1] = closure_20(navigateToShop(7920), obj21);
              const obj23 = { style: items11, children: items12 };
              items11 = [tmp10.banner, bannerAnimatedStyle];
              let tmp84Result5 = !tmp89Result2;
              const obj22 = {
                contentContainerStyle,
                ref,
                onScroll: animatedScrollHandler,
                onLayout: callback,
                scrollEventThrottle,
                style: tmp10.scrollView,
                children: items18,
              };
              const View = navigateToShop(4618).View;
              if (!tmp89Result2) {
                const obj25 = { paddingTop: bound1 };
                tmp84Result5 = closure_20(closure_27, obj25);
              }
              items12 = [tmp84Result5];
              const obj26 = { style: items13, children: items15 };
              items13 = [dimensionStyle, bannerImageAnimatedStyle];
              const obj27 = { style: items14 };
              items14 = [sharedValue.absoluteFill];
              const obj28 = { backgroundColor: tmp12Result25.int2hex(userProfileBannerBackgroundColor) };
              const View2 = navigateToShop(4618).View;
              items14[1] = obj28;
              tmp12Result25 = navigateToSettings(1103);
              items15 = [closure_20(bound, obj27), ,];
              let tmp101 = null != source;
              const tmp100 = sharedValue;
              if (tmp101) {
                let tmp84Result7;
                if (isAnimatedImageURLResult) {
                  const obj29 = {
                    onPress() {
                      return closure_8(!first);
                    },
                    accessibilityRole: "image",
                    accessibilityLabel: intl2.string(navigateToSettings(1126).t["3fzj/l"]),
                    children: items16,
                  };
                  const PressableOpacity = navigateToSettings(5916).PressableOpacity;
                  intl2 = navigateToSettings(1126).intl;
                  const obj30 = {
                    style: dimensionStyle,
                    accessibilityRole: "image",
                    accessibilityLabel: formatToPlainStringResult,
                    source,
                    paused: tmp28,
                  };
                  items16 = [closure_20(navigateToShop(5981), obj30)];
                  let tmp84Result6 = !tmp32;
                  if (tmp84Result6) {
                    const obj31 = {
                      label: intl3.string(navigateToSettings(1126).t.I5gL2H),
                      style: items17,
                      textStyle: tmp10.gifTagText,
                    };
                    const Caption = navigateToSettings(10395).Caption;
                    intl3 = navigateToSettings(1126).intl;
                    items17 = [tmp10.gifTag];
                    const obj32 = { top: bound1 };
                    items17[1] = obj32;
                    tmp84Result6 = closure_20(Caption, obj31);
                  }
                  items16[1] = tmp84Result6;
                  tmp84Result7 = closure_21(PressableOpacity, obj29);
                } else {
                  const obj33 = {
                    style: dimensionStyle,
                    accessibilityRole: "image",
                    accessibilityLabel: formatToPlainStringResult,
                    source,
                    paused: tmp28,
                  };
                  tmp84Result7 = closure_20(navigateToShop(5981), obj33);
                }
                tmp101 = tmp84Result7;
              }
              items15[1] = tmp101;
              const tmp12Result26 = navigateToSettings(1370);
              let tmp84Result8 = tmp12Result26.isIOS() && showBlur;
              if (tmp84Result8) {
                const obj34 = { animatedProps: blurAnimatedProps, style: tmp100.absoluteFillObject };
                tmp84Result8 = closure_20(VisualEffectViewThemed, obj34);
              }
              items15[2] = tmp84Result8;
              items12[1] = closure_21(View2, obj26);
              items18 = [closure_21(View, obj23), , ,];
              if (tmp89Result2) {
                const obj35 = { pointerEvents: "box-none", style: items19, children: items20 };
                items19 = [tmp10.profileEffectLayer, ,];
                const size1 = { width: bound, height };
                items19[1] = size1;
                items19[2] = bannerAnimatedStyle;
                const View3 = navigateToShop(4618).View;
                const obj36 = { skuId: skuId2, bannerAdjustment: 0, replayOnNavigationFocus: true, paused: tmp28 };
                items20 = [closure_20(navigateToShop(8490), obj36)];
                const obj37 = { paddingTop: bound1 };
                items20[1] = closure_20(closure_27, obj37);
                tmp89Result2 = closure_21(View3, obj35);
              }
              items18[1] = tmp89Result2;
              const obj38 = {
                user,
                userTheme: tmp15,
                scrollViewRef: ref,
                scrollPosition: sharedValue,
                style: items21,
                navigateToProfileCustomization,
                navigateToCustomStatus,
                navigateToFriends,
                navigateToPremium,
                navigateToShop,
                initialTab,
                animateAvatar: !tmp28,
              };
              items21 = [tmp10.content, contentAnimatedStyle];
              items18[2] = closure_20(navigateToShop(16997), obj38);
              items18[3] = closure_20(navigateToSettings(11520).TTIFirstContentfulPaint, { label: "you_screen" });
              items10[2] = closure_21(closure_25, obj22);
              let tmp84Result9 = null != tmp5Result1Result;
              if (tmp84Result9) {
                const obj39 = {
                  frame: tmp5Result1Result,
                  profileThemeType: UserProfileThemeTypes.YOU_SCREEN,
                  frameOrder: navigateToSettings(7889).ProfileFrameLayerOrder.FRONT,
                  containerWidth: bound,
                };
                const tmp5Result12 = navigateToShop(7903);
                tmp84Result9 = closure_20(tmp5Result12, obj39);
              }
              items10[3] = tmp84Result9;
              items10[4] = tmp85;
              items10[5] = tmp74Result;
              const obj40 = { children: closure_20(ThemeContextProvider, obj17) };
              return closure_20(LayerScope2, obj40);
            }
          }
        }
      }
      items5 = [];
    }
    bound1 = youSettingsCoachmark;
  }
  if (!isFocused) {
    ref3.current = false;
  }
}
let _slicedToArray = _slicedToArray_mod;
({ StyleSheet: hasOwnProperty, View: metroRequire, ScrollView } = react_native);
({
  YOU_ACTION_SHEET_TOP_INSET: closure_12,
  YOU_AVATAR_SIZE: map1,
  YOU_SCREEN_ID: closure_14,
  YOU_SCROLL_EVENT_THROTTLE: closure_15,
} = YouConstants);
const UserSettingsSections = Constants.UserSettingsSections;
const constants = CollectiblesShopConstants.CollectiblesMobileShopScreen;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
const UserProfileThemeTypes = Constants2.UserProfileThemeTypes;
({ jsx: closure_20, jsxs: closure_21 } = Fragment);
let ReanimatedRexport = ReanimatedRexport_mod;
const VisualEffectViewThemed = ReanimatedRexport.createAnimatedComponent(VisualEffectViewThemedDefault);
let createStyles = createStyles_mod;
let closure_23 = createStyles.createStyles((minHeight) => {
  let alphaResult;
  let obj4;
  let obj5;
  let obj6;
  let rect;
  let xl1;
  let xl;
  const obj = utils_PlatformUtils;
  if (obj.isIOS()) {
    xl = nativeDefault.radii.xl;
  }
  const obj2 = { borderTopLeftRadius: xl, borderTopRightRadius: xl1 };
  xl1 = undefined;
  const tmpResult = utils_PlatformUtils;
  if (tmpResult.isIOS()) {
    xl1 = nativeDefault.radii.xl;
  }
  const obj3 = {
    container: obj4,
    background: obj5,
    scrollView: obj6,
    profileEffectLayer: { position: "absolute", top: 0, zIndex: 1 },
    banner: { minHeight, position: "absolute", top: 0, maxWidth: "100%" },
    gifTag: rect,
    gifTagText: { color: nativeDefault.unsafe_rawColors.PRIMARY_800, fontSize: 14 },
    content: { marginTop: minHeight, flex: 1, flexGrow: 1 },
  };
  obj4 = { flex: 1, flexGrow: 1, position: "relative" };
  const merged = Object.assign(obj2);
  obj5 = { overflow: "hidden" };
  const merged1 = Object.assign(obj2);
  obj6 = { flex: 1 };
  const merged2 = Object.assign(obj2);
  rect = {
    position: "absolute",
    left: 16,
    right: "auto",
    bottom: "auto",
    marginTop: 8,
    backgroundColor: alphaResult.css(),
  };
  const tmp10 = _modDef683;
  const tmp10Result = tmp10(nativeDefault.unsafe_rawColors.WHITE);
  alphaResult = tmp10Result.alpha(0.9);
  ({ color: nativeDefault.unsafe_rawColors.PRIMARY_800, fontSize: 14 });
  return obj3;
});
createStyles = createStyles_mod;
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
  ({
    position: "absolute",
    marginTop: nativeDefault.space.PX_4,
    left: nativeDefault.space.PX_16,
    zIndex: 99,
    alignItems: "center",
    justifyContent: "center",
  });
  return obj;
});
ReanimatedRexport = ReanimatedRexport_mod;
let closure_25 = ReanimatedRexport.createAnimatedComponent(ScrollView);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_27 = ReactCompilerGating.isReactCompilerEnabled()
  ? (paddingTop) => {
      let tmp11;
      let tmp5;
      let tmp6;
      let tmp9;
      let totalMentionCount;
      const obj = react2;
      const cResult = obj.c(15);
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
      const tmpResult = useStateFromStores;
      const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
      if (cResult[2] !== stateFromStores) {
        let formatToPlainStringResult;
        if (stateFromStores > 0) {
          const intl2 = intl4.intl;
          const obj2 = { mentionCount: stateFromStores };
          formatToPlainStringResult = intl2.formatToPlainString(intl4.t.vxFYaM, obj2);
        } else {
          const intl = intl4.intl;
          formatToPlainStringResult = intl.string(intl4.t["13/7kX"]);
        }
        cResult[2] = stateFromStores;
        cResult[3] = formatToPlainStringResult;
        tmp9 = formatToPlainStringResult;
      } else {
        tmp9 = cResult[3];
      }
      if (cResult[4] !== paddingTop) {
        const obj3 = { top: paddingTop };
        cResult[4] = paddingTop;
        cResult[5] = obj3;
        tmp11 = obj3;
      } else {
        tmp11 = cResult[5];
      }
      if (cResult[6] === tmp4.backButton) {
        let tmp12;
        let tmp13;
        if (cResult[7] === tmp11) {
          tmp12 = cResult[8];
        }
        if (cResult[9] !== stateFromStores) {
          const obj4 = { count: stateFromStores };
          const tmp15 = closure_20(BackIconWithBadge.CloseIconWithBadgeOnSide, obj4);
          cResult[9] = stateFromStores;
          cResult[10] = tmp15;
          tmp13 = tmp15;
        } else {
          tmp13 = cResult[10];
        }
        if (cResult[11] === tmp9) {
          if (cResult[12] === tmp12) {
            let tmp16;
            if (cResult[13] === tmp13) {
              tmp16 = cResult[14];
            }
            return tmp16;
          }
        }
        const obj5 = {
          style: tmp12,
          accessibilityRole: "button",
          accessibilityLabel: tmp9,
          onPress: handleBackButtonPress,
          children: tmp13,
        };
        const tmp19 = closure_20(Pressables.PressableOpacity, obj5);
        cResult[11] = tmp9;
        cResult[12] = tmp12;
        cResult[13] = tmp13;
        cResult[14] = tmp19;
        tmp16 = tmp19;
      }
      const items1 = [tmp4.backButton, tmp11];
      cResult[6] = tmp4.backButton;
      cResult[7] = tmp11;
      cResult[8] = items1;
      tmp12 = items1;
    }
  : (paddingTop) => {
      let formatToPlainStringResult;
      let items1;
      let totalMentionCount;
      paddingTop = paddingTop.paddingTop;
      const items = [GuildReadStateStore];
      const tmp = closure_24();
      const obj = useStateFromStores;
      const stateFromStores = obj.useStateFromStores(items, () => totalMentionCount.getTotalMentionCount());
      if (stateFromStores > 0) {
        const intl2 = intl4.intl;
        const obj2 = { mentionCount: stateFromStores };
        formatToPlainStringResult = intl2.formatToPlainString(intl4.t.vxFYaM, obj2);
      } else {
        const intl = intl4.intl;
        formatToPlainStringResult = intl.string(intl4.t["13/7kX"]);
      }
      const obj3 = {
        style: items1,
        accessibilityRole: "button",
        accessibilityLabel: formatToPlainStringResult,
        onPress: handleBackButtonPress,
        children: closure_20(BackIconWithBadge.CloseIconWithBadgeOnSide, { count: stateFromStores }),
      };
      items1 = [tmp.backButton, { top: paddingTop }];
      const PressableOpacity = Pressables.PressableOpacity;
      return closure_20(PressableOpacity, obj3);
    };
const __initData = {
  code: "function YouScreenTsx1(e){const{scrollPosition}=this.__closure;scrollPosition.set(e.contentOffset.y);}",
};
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (initialTab) => {
      let closure_1;
      let closure_2;
      let constants2;
      let currentUser;
      let id;
      let locale;
      let state;
      let tmp12;
      let tmp22;
      let tmp4;
      let tmp5;
      let tmp7;
      let tmp8;
      let tmp = id;
      let tmp2 = dependencyMap;
      let obj = id(576);
      const cResult = obj.c(31);
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
      const tmpResult = tmp(573);
      const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [LocaleStore];
        class T {
          constructor() {
            return locale.locale;
          }
        }
        cResult[2] = items1;
        cResult[3] = T;
        tmp8 = T;
        tmp7 = items1;
      } else {
        tmp7 = cResult[2];
        tmp8 = cResult[3];
      }
      const tmpResult5 = tmp(573);
      const stateFromStores1 = tmpResult5.useStateFromStores(tmp7, tmp8);
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
            return locale.locale;
          }
        }
        cResult[5] = avatarURL;
        tmp12 = avatarURL;
      } else {
        tmp12 = cResult[5];
      }
      importDefault = tmp12;
      if (cResult[6] === tmp12) {
        let tmp15;
        if (cResult[7] === id) {
          tmp15 = cResult[8];
        }
        if (cResult[9] === tmp12) {
          if (cResult[10] === stateFromStores1) {
            let tmp16;
            let tmp18;
            if (cResult[11] === id) {
              tmp16 = cResult[12];
            }
            const layoutEffect = react.useLayoutEffect(tmp15, tmp16);
            class T {
              constructor() {
                return locale.locale;
              }
            }
            if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
              const items2 = [UserProfileStore];
              class T {
                constructor() {
                  return locale.locale;
                }
              }
              cResult[13] = items2;
              tmp18 = items2;
            } else {
              tmp18 = cResult[13];
            }
            if (cResult[14] !== id) {
              class A {
                constructor() {
                  let firstWishlistId = null;
                  if (null != id) {
                    firstWishlistId = UserProfileStore.getFirstWishlistId(tmp);
                  }
                  return firstWishlistId;
                }
              }
              cResult[14] = id;
              class T {
                constructor() {
                  return locale.locale;
                }
              }
              cResult[15] = A;
            } else {
              class A {
                constructor() {
                  let firstWishlistId = null;
                  if (null != id) {
                    firstWishlistId = UserProfileStore.getFirstWishlistId(tmp);
                  }
                  return firstWishlistId;
                }
              }
            }
            const tmpResult6 = tmp(573);
            const stateFromStores2 = tmpResult6.useStateFromStores(tmp18, A);
            if (cResult[16] === id) {
              let tmp33;
              class A {
                constructor() {
                  let firstWishlistId = null;
                  if (null != id) {
                    firstWishlistId = UserProfileStore.getFirstWishlistId(tmp);
                  }
                  return firstWishlistId;
                }
              }
              const tmpResult7 = tmp(8463);
              const fetchWishlist = tmpResult7.useFetchWishlist(tmp22);
              class T {
                constructor() {
                  return locale.locale;
                }
              }
              if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
                class A {
                  constructor() {
                    let firstWishlistId = null;
                    if (null != id) {
                      firstWishlistId = UserProfileStore.getFirstWishlistId(tmp);
                    }
                    return firstWishlistId;
                  }
                }
                cResult[19] = tmp25;
                class T {
                  constructor() {
                    return locale.locale;
                  }
                }
              } else {
                class A {
                  constructor() {
                    let firstWishlistId = null;
                    if (null != id) {
                      firstWishlistId = UserProfileStore.getFirstWishlistId(tmp);
                    }
                    return firstWishlistId;
                  }
                }
              }
              dependencyMap = tmp24;
              const _Symbol = Symbol;
              if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
                class M {
                  constructor() {
                    const obj = id(dependencyMap[70]);
                    const obj2 = { screen: constants.PREMIUM };
                    obj.openUserSettings(obj2);
                  }
                }
                cResult[20] = M;
                class T {
                  constructor() {
                    return locale.locale;
                  }
                }
              } else {
                class M {
                  constructor() {
                    const obj = id(dependencyMap[70]);
                    const obj2 = { screen: constants.PREMIUM };
                    obj.openUserSettings(obj2);
                  }
                }
              }
              const _Symbol2 = Symbol;
              if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
                class B {
                  constructor() {
                    let items;
                    const tmp = id(dependencyMap[71]);
                    const openCollectiblesShopMobile = tmp.openCollectiblesShopMobile;
                    const obj = {
                      analyticsSource: closure_1(dependencyMap[48]).YOU_SCREEN,
                      analyticsLocations: items,
                      screen: constants2.FEATURED_PAGE,
                    };
                    items = [closure_1(dependencyMap[48]).YOU_SCREEN];
                    const result = openCollectiblesShopMobile(obj);
                  }
                }
                cResult[21] = B;
                class T {
                  constructor() {
                    return locale.locale;
                  }
                }
              } else {
                class B {
                  constructor() {
                    let items;
                    const tmp = id(dependencyMap[71]);
                    const openCollectiblesShopMobile = tmp.openCollectiblesShopMobile;
                    const obj = {
                      analyticsSource: closure_1(dependencyMap[48]).YOU_SCREEN,
                      analyticsLocations: items,
                      screen: constants2.FEATURED_PAGE,
                    };
                    items = [closure_1(dependencyMap[48]).YOU_SCREEN];
                    const result = openCollectiblesShopMobile(obj);
                  }
                }
              }
              const _Symbol3 = Symbol;
              if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
                class B {
                  constructor() {
                    let items;
                    const tmp = id(dependencyMap[71]);
                    const openCollectiblesShopMobile = tmp.openCollectiblesShopMobile;
                    const obj = {
                      analyticsSource: closure_1(dependencyMap[48]).YOU_SCREEN,
                      analyticsLocations: items,
                      screen: constants2.FEATURED_PAGE,
                    };
                    items = [closure_1(dependencyMap[48]).YOU_SCREEN];
                    const result = openCollectiblesShopMobile(obj);
                  }
                }
                cResult[22] = tmp29;
                class T {
                  constructor() {
                    return locale.locale;
                  }
                }
              } else {
                class B {
                  constructor() {
                    let items;
                    const tmp = id(dependencyMap[71]);
                    const openCollectiblesShopMobile = tmp.openCollectiblesShopMobile;
                    const obj = {
                      analyticsSource: closure_1(dependencyMap[48]).YOU_SCREEN,
                      analyticsLocations: items,
                      screen: constants2.FEATURED_PAGE,
                    };
                    items = [closure_1(dependencyMap[48]).YOU_SCREEN];
                    const result = openCollectiblesShopMobile(obj);
                  }
                }
              }
              const _Symbol4 = Symbol;
              if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
                class D {
                  constructor() {
                    let items;
                    const obj = { analyticsLocations: items };
                    const openEditCustomStatusModal = id(dependencyMap[72]).openEditCustomStatusModal;
                    items = [];
                    id(dependencyMap[72]);
                    items[0] = closure_1(dependencyMap[48]).YOU_SCREEN;
                    const result = openEditCustomStatusModal(obj);
                  }
                }
                cResult[23] = D;
                class T {
                  constructor() {
                    return locale.locale;
                  }
                }
              } else {
                class D {
                  constructor() {
                    let items;
                    const obj = { analyticsLocations: items };
                    const openEditCustomStatusModal = id(dependencyMap[72]).openEditCustomStatusModal;
                    items = [];
                    id(dependencyMap[72]);
                    items[0] = closure_1(dependencyMap[48]).YOU_SCREEN;
                    const result = openEditCustomStatusModal(obj);
                  }
                }
              }
              const _Symbol5 = Symbol;
              if (cResult[24] === Symbol.for("react.memo_cache_sentinel")) {
                class H {
                  constructor() {
                    const obj = id(dependencyMap[20]);
                    const rootNavigationRef = obj.getRootNavigationRef();
                    if (null != rootNavigationRef) {
                      if (rootNavigationRef.isReady()) {
                        rootNavigationRef.navigate("friends");
                      }
                    }
                    return false;
                  }
                }
                cResult[24] = H;
                class T {
                  constructor() {
                    return locale.locale;
                  }
                }
              } else {
                class H {
                  constructor() {
                    const obj = id(dependencyMap[20]);
                    const rootNavigationRef = obj.getRootNavigationRef();
                    if (null != rootNavigationRef) {
                      if (rootNavigationRef.isReady()) {
                        rootNavigationRef.navigate("friends");
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
                    const obj = id(dependencyMap[20]);
                    const rootNavigationRef = obj.getRootNavigationRef();
                    if (null != rootNavigationRef) {
                      if (rootNavigationRef.isReady()) {
                        rootNavigationRef.navigate("friends");
                      }
                    }
                    return false;
                  }
                }
                const items3 = [];
                class T {
                  constructor() {
                    return locale.locale;
                  }
                }
                cResult[26] = items3;
                tmp33 = items3;
              } else {
                class H {
                  constructor() {
                    const obj = id(dependencyMap[20]);
                    const rootNavigationRef = obj.getRootNavigationRef();
                    if (null != rootNavigationRef) {
                      if (rootNavigationRef.isReady()) {
                        rootNavigationRef.navigate("friends");
                      }
                    }
                    return false;
                  }
                }
                tmp33 = cResult[26];
              }
              const layoutEffect1 = react.useLayoutEffect(tmp34, tmp33);
              const _Symbol7 = Symbol;
              class I {
                constructor() {
                  const tmp2 = null != id && null != closure_1;
                  if (tmp2) {
                    maybeFetchUserProfileDefault(id, closure_1, { type: "you_screen" });
                  }
                }
              }
              if (tmp36 === Symbol.for("react.memo_cache_sentinel")) {
                class H {
                  constructor() {
                    const obj = id(dependencyMap[20]);
                    const rootNavigationRef = obj.getRootNavigationRef();
                    if (null != rootNavigationRef) {
                      if (rootNavigationRef.isReady()) {
                        rootNavigationRef.navigate("friends");
                      }
                    }
                    return false;
                  }
                }
                tmp38[0] = function scrollToTop() {
                  dependencyMap();
                };
                class T {
                  constructor() {
                    return locale.locale;
                  }
                }
              } else {
                class H {
                  constructor() {
                    const obj = id(dependencyMap[20]);
                    const rootNavigationRef = obj.getRootNavigationRef();
                    if (null != rootNavigationRef) {
                      if (rootNavigationRef.isReady()) {
                        rootNavigationRef.navigate("friends");
                      }
                    }
                    return false;
                  }
                }
              }
              const tmpResult8 = tmp(1491);
              const scrollToTop = tmpResult8.useScrollToTop(react.useRef(tmp38));
              if (null != stateFromStores) {
                class H {
                  constructor() {
                    const obj = id(dependencyMap[20]);
                    const rootNavigationRef = obj.getRootNavigationRef();
                    if (null != rootNavigationRef) {
                      if (rootNavigationRef.isReady()) {
                        rootNavigationRef.navigate("friends");
                      }
                    }
                    return false;
                  }
                }
                class T {
                  constructor() {
                    return locale.locale;
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
                cResult[28] = initialTab;
                cResult[29] = stateFromStores;
                cResult[30] = closure_20(UnconnectedYouScreen, tmp44);
                const tmp45 = closure_20(UnconnectedYouScreen, tmp44);
              }
              return null;
            }
            let obj2 = { wishlistId: stateFromStores2, userId: id };
            cResult[16] = id;
            cResult[17] = stateFromStores2;
            cResult[18] = obj2;
            tmp22 = obj2;
          }
        }
        const items4 = [, ,];
        class T {
          constructor() {
            return locale.locale;
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
          const tmp2 = null != id && null != closure_1;
          if (tmp2) {
            maybeFetchUserProfileDefault(id, closure_1, { type: "you_screen" });
          }
        }
      }
      cResult[6] = tmp12;
      cResult[7] = id;
      cResult[8] = I;
      tmp15 = I;
    }
  : (initialTab) => {
      let constants2;
      let currentUser;
      let locale;
      let state;
      let stateFromStores;
      let memo;
      let navigateToSettings;
      let tmp = stateFromStores;
      let tmp2 = memo;
      initialTab = initialTab.initialTab;
      let obj = stateFromStores(memo[23]);
      let items = [UserStore];
      stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
      let obj2 = stateFromStores(memo[23]);
      const items1 = [LocaleStore];
      let id;
      const stateFromStores1 = obj2.useStateFromStores(items1, () => locale.locale);
      if (stateFromStores != null) {
        id = stateFromStores.id;
      }
      const items2 = [stateFromStores];
      memo = react.useMemo(() => {
        let avatarURL;
        if (stateFromStores != null) {
          avatarURL = stateFromStores.getAvatarURL(null, map1);
        }
        return avatarURL;
      }, items2);
      const items3 = [id, memo, stateFromStores1];
      const layoutEffect = react.useLayoutEffect(() => {
        const tmp2 = null != id && null != memo;
        if (tmp2) {
          maybeFetchUserProfileDefault(id, memo, { type: "you_screen" });
        }
      }, items3);
      const items4 = [UserProfileStore];
      const tmpResult = tmp(tmp2[23]);
      const stateFromStores2 = tmpResult.useStateFromStores(items4, () => {
        let firstWishlistId = null;
        if (null != id) {
          firstWishlistId = UserProfileStore.getFirstWishlistId(tmp);
        }
        return firstWishlistId;
      });
      const tmpResult3 = tmp(tmp2[69]);
      const fetchWishlist = tmpResult3.useFetchWishlist({ wishlistId: stateFromStores2, userId: id });
      navigateToSettings = react.useCallback(() => {
        state.setState({ query: "", isActive: false });
        const obj = stateFromStores(memo[70]);
        obj.openUserSettings();
      }, []);
      const callback1 = react.useCallback(() => {
        const obj = stateFromStores(memo[70]);
        const obj2 = { screen: constants.PREMIUM };
        obj.openUserSettings(obj2);
      }, []);
      const callback2 = react.useCallback(() => {
        let items;
        const tmp = stateFromStores(memo[71]);
        const openCollectiblesShopMobile = tmp.openCollectiblesShopMobile;
        const obj = {
          analyticsSource: id(memo[48]).YOU_SCREEN,
          analyticsLocations: items,
          screen: constants2.FEATURED_PAGE,
        };
        items = [id(memo[48]).YOU_SCREEN];
        const result = openCollectiblesShopMobile(obj);
      }, []);
      const callback3 = react.useCallback((autoFocusElement) => {
        let obj3;
        const obj2 = { screen: constants.PROFILE_CUSTOMIZATION, params: obj3 };
        obj3 = { autoFocusElement };
        const obj = stateFromStores(memo[70]);
        obj.openUserSettings(obj2);
      }, []);
      const callback4 = react.useCallback(() => {
        let items;
        const obj = { analyticsLocations: items };
        const openEditCustomStatusModal = stateFromStores(memo[72]).openEditCustomStatusModal;
        items = [];
        stateFromStores(memo[72]);
        items[0] = id(memo[48]).YOU_SCREEN;
        const result = openEditCustomStatusModal(obj);
      }, []);
      const callback5 = react.useCallback(() => {
        const obj = stateFromStores(memo[20]);
        const rootNavigationRef = obj.getRootNavigationRef();
        if (null != rootNavigationRef) {
          if (rootNavigationRef.isReady()) {
            rootNavigationRef.navigate("friends");
          }
        }
        return false;
      }, []);
      const layoutEffect1 = react.useLayoutEffect(() => {
        const obj = stateFromStores(memo[73]);
        return obj.trackAppUIViewed();
      }, []);
      let obj3 = {
        scrollToTop() {
          callback();
        },
      };
      const tmpResult4 = tmp(tmp2[38]);
      const scrollToTop = tmpResult4.useScrollToTop(react.useRef(obj3));
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
          initialTab,
        };
        tmp18 = closure_20(UnconnectedYouScreen, obj4);
      }
      return tmp18;
    };
let size = size_mod;
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/YouScreen.tsx");

export default tmp5;
