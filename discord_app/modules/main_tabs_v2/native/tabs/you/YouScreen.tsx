// === Module 19167: YouScreen ===

// Module 19167 (YouScreen)
import useStateFromStores from "useStateFromStores" /* 563 */;
import nativeDefault from "native" /* 575 */;
import _modDef671 from "module_671" /* 671 */;
import util from "util" /* 1113 */;
import utils_PlatformUtils from "utils/PlatformUtils" /* 1357 */;
import RootNavigationRef from "RootNavigationRef" /* 5325 */;
import Pressables from "Pressables" /* 7124 */;
import maybeFetchUserProfileDefault from "maybeFetchUserProfile" /* 8904 */;
import VisualEffectViewThemedDefault from "VisualEffectViewThemed" /* 8964 */;
import YouBannerDecorations from "YouBannerDecorations" /* 9780 */;
import BackIconWithBadge from "BackIconWithBadge" /* 18777 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserProfileStore from "UserProfileStore" /* 7917 */;
import LocaleStore from "LocaleStore" /* 2191 */;
import UserSettingSearchStore from "UserSettingSearchStore" /* 16860 */;
import GuildReadStateStore from "GuildReadStateStore" /* 7024 */;
import UserStore from "UserStore" /* 1385 */;
import module_1652_mod from "module_1652" /* 1652 */;

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
  const tmp = closure_25();
  items = [GuildReadStateStore];
  const stateFromStores = useStateFromStores.useStateFromStores(items, () => totalMentionCount.getTotalMentionCount());
  if (stateFromStores > 0) {
    const intl2 = util.intl;
    const obj2 = { mentionCount: stateFromStores };
    let formatToPlainStringResult = intl2.formatToPlainString(util.t.vxFYaM, obj2);
  } else {
    const intl = util.intl;
    formatToPlainStringResult = intl.string(util.t["13/7kX"]);
  }
  const obj3 = { style: null, accessibilityRole: "button", accessibilityLabel: formatToPlainStringResult, onPress: handleBackButtonPress, children: guild(BackIconWithBadge.CloseIconWithBadgeOnSide, { count: stateFromStores }) };
  const items1 = [tmp.backButton, { top: paddingTop.paddingTop }];
  obj3.style = items1;
  return guild(Pressables.PressableOpacity, obj3);
}
function UnconnectedYouScreen(arg0) {
  ({ user, navigateToSettings } = arg0);
  _require = navigateToSettings;
  ({ navigateToPremium, navigateToShop } = arg0);
  let rect;
  let first;
  noop = undefined;
  let num3;
  closure_6 = undefined;
  closure_7 = undefined;
  let youSettingsCoachmark;
  closure_9 = undefined;
  closure_10 = undefined;
  closure_11 = undefined;
  closure_12 = undefined;
  let tmp2 = rect;
  ({ navigateToProfileCustomization, navigateToCustomStatus, navigateToFriends, initialTab } = arg0);
  const tmp3 = navigateToShop(rect[25])();
  ({ ref, width } = tmp3);
  let num = 0;
  if (undefined !== width) {
    num = width;
  }
  let tmp5;
  if (num > 0) {
    tmp5 = num;
  }
  const tmpResultResult = navigateToShop(tmp2[26])(tmp5);
  const tmp7 = closure_24();
  let obj = { type: null, name: null };
  const tmpResult = navigateToShop(tmp2[26]);
  obj.type = require("discord_common/AnalyticsUtils").ImpressionTypes.VIEW;
  obj.name = require("discord_common/AnalyticsUtils").ImpressionNames.USER_YOU_SCREEN;
  navigateToShop(tmp2[27])(obj);
  let obj2 = navigateToShop(tmp2[29])(user.id);
  rect = navigateToShop(tmp2[30])();
  const tmpResult8 = navigateToShop(tmp2[27]);
  ({ theme, primaryColor, secondaryColor } = navigateToShop(tmp2[31])({ user, displayProfile: obj2 }));
  const tmp11 = navigateToShop(tmp2[31])({ user, displayProfile: obj2 });
  const tmp12 = navigateToShop(tmp2[32])();
  const sharedValue = require("module_1652").useSharedValue(0);
  const obj3 = require("module_1652");
  items = [closure_29, sharedValue];
  _require = undefined;
  [tmp14, tmp15] = items;
  class YouScreenTsx1 {
    constructor(arg0) {
      result = closure_0.set(arg0.contentOffset.y);
      return;
    }
  }
  const items1 = [tmp15];
  YouScreenTsx1.__closure = items1;
  YouScreenTsx1.__workletHash = 11467832296045;
  YouScreenTsx1.__initData = tmp14;
  const obj4 = require("module_1652");
  const animatedScrollHandler = require("module_1652").useAnimatedScrollHandler(YouScreenTsx1);
  ({ bannerAnimatedStyle, bannerImageAnimatedStyle, contentAnimatedStyle, blurAnimatedProps, showBlur } = navigateToShop(tmp2[33])({ scrollPosition: sharedValue, bannerHeight: tmpResultResult }));
  const size = navigateToShop(tmp2[35])();
  const height = size.height;
  let num2 = 0;
  const diff = size.width - rect.right - rect.left;
  if (navigateToShop(tmp2[34])().isChatBesideChannelList) {
    num2 = 16;
  }
  const diff1 = diff - num2;
  let bound = diff1;
  if (num > 0) {
    const _Math = Math;
    bound = Math.min(diff1, num);
  }
  const tmp23 = first(noop.useState(false), 2);
  first = tmp23[0];
  noop = tmp23[1];
  const GifAutoPlay = tmp9(tmp2[36]).GifAutoPlay;
  const setting = GifAutoPlay.getSetting();
  const tmp17 = navigateToShop(tmp2[33])({ scrollPosition: sharedValue, bannerHeight: tmpResultResult });
  const isFocused = require("Link").useIsFocused();
  const tmp9Result = require("Link");
  let tmp27 = !isFocused;
  if (!isFocused) {
    tmp27 = !tmp9Result14.useIsProfileModalTransitioning();
  }
  tmp9Result14 = require("profileModalTransition");
  const ref2 = noop.useRef(undefined);
  const ref3 = noop.useRef(false);
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
    if (obj2 != null) {
      const obj6 = { canAnimate: obj38, size: bound };
      bannerURL = obj2.getBannerURL(obj6);
    }
    let source = null;
    if (null != bannerURL) {
      source = tmp9(tmp2[39]).makeSource(bannerURL);
      const tmp9Result15 = tmp9(tmp2[39]);
    }
    const tmp9Result16 = tmp9(tmp2[39]);
    let intl = tmp9(tmp2[22]).intl;
    const obj7 = { username: user.username };
    const formatToPlainStringResult = intl.formatToPlainString(tmp9(tmp2[22]).t.gVn4uJ, obj7);
    const isAnimatedImageURLResult = tmp9(tmp2[39]).isAnimatedImageURL(bannerURL);
    const obj8 = { user, displayProfile: obj2 };
    const userProfileBannerBackgroundColor = tmp9(tmp2[40]).useUserProfileBannerBackgroundColor(obj8);
    const items2 = [rect.bottom];
    const tmp9Result17 = tmp9(tmp2[40]);
    const memo = obj5.useMemo(() => {
      const obj = { dimensionStyle: absoluteFill.absoluteFill, contentContainerStyle: null };
      const obj2 = { paddingBottom: null };
      const floatingNavBottomMargin = YouBannerDecorations.getFloatingNavBottomMargin(rect.bottom);
      obj2.paddingBottom = floatingNavBottomMargin + nativeDefault.space.PX_64;
      obj.contentContainerStyle = obj2;
      return obj;
    }, items2);
    ({ dimensionStyle, contentContainerStyle } = memo);
    const tmp37 = navigateToShop(tmp2[41])();
    const obj9 = { layout: "YOU_SCREEN", userId: user.id };
    const createUserProfileAnalyticsContext = tmp9(tmp2[43]).useCreateUserProfileAnalyticsContext(obj9);
    const tmp9Result18 = tmp9(tmp2[43]);
    const isScreenLandscape = tmp9(tmp2[44]).useIsScreenLandscape();
    let tmp42;
    const tmp9Result19 = tmp9(tmp2[44]);
    if (!isScreenLandscape) {
      let skuId;
      if (obj2 != null) {
        const profileFrame = obj2.profileFrame;
        if (profileFrame != null) {
          skuId = profileFrame.skuId;
        }
      }
      tmp42 = skuId;
    }
    const tmpResult2Result = navigateToShop(tmp2[45])(tmp42);
    let tmp46;
    const tmpResult9 = navigateToShop(tmp2[45]);
    if (!isScreenLandscape) {
      let skuId1;
      if (obj2 != null) {
        const profileFrame2 = obj2.profileFrame;
        if (profileFrame2 != null) {
          skuId1 = profileFrame2.skuId;
        }
      }
      tmp46 = skuId1;
    }
    const obj10 = { skuId: tmp46, openedAt: ref2.current, analyticsLocations: null, context: null };
    const items3 = [navigateToShop(tmp2[47]).YOU_SCREEN];
    obj10.analyticsLocations = items3;
    obj10.context = createUserProfileAnalyticsContext;
    navigateToShop(tmp2[46])(obj10);
    num3 = 0;
    if (null != tmpResult2Result) {
      num3 = navigateToShop(tmp2[48])(tmpResult2Result, bound).overflowTop;
    }
    const items4 = [num3];
    if (!tmp37) {
      if (!tmp9Result20.isIOS()) {
        const _Math2 = Math;
        let bound1 = Math.max(rect.top - num3, closure_12);
      }
      let skuId2;
      if (obj2 != null) {
        const profileEffect = obj2.profileEffect;
        if (profileEffect != null) {
          skuId2 = profileEffect.skuId;
        }
      }
      let tmp88Result = null != skuId2;
      const memo1 = obj5.useMemo(() => {
        items = [_undefined(rect[49]).DismissibleContent.WISHLIST_MOBILE_YOU_SCREEN_COACHMARK];
        return items;
      }, []);
      tmp9Result20 = tmp9(tmp2[17]);
      const tmp22Result = tmp22(tmp9(tmp2[50]).useSelectedDismissibleContent(memo1), 2);
      closure_6 = tmp57;
      const items5 = [null != tmp22Result[0]];
      const memo2 = obj5.useMemo(() => {
        let tmp = null;
        if (closure_6) {
          const obj = { title: null, description: null, avatarSrc: null, decorationAsset: "", renderImgComponent: null };
          const intl = util.intl;
          obj.title = intl.string(util.t.epBu6F);
          const intl2 = util.intl;
          obj.description = intl2.string(util.t["o8+3AX"]);
          obj.avatarSrc = {};
          obj.renderImgComponent = function renderImgComponent() {
            return closure_1_21(navigateToShop(rect[51]), { source: { uri: "https://cdn.discordapp.com/assets/content/1979309f7455b06e0bc1e8f5da89de9934155a0a9a74bfff5b680c82fb45d53f.png" }, style: { width: 80, height: 80 } });
          };
          tmp = obj;
        }
        return tmp;
      }, items5);
      const ref4 = obj5.useRef(null);
      const ref5 = obj5.useRef(null);
      closure_7 = tmp56;
      const items6 = [tmp22Result[1], navigateToShop];
      const callback = obj5.useCallback(() => {
        navigateToShop();
        closure_7(ContentDismissActionType.TAKE_ACTION);
      }, items6);
      let tmp62 = null != memo2;
      const tmp9Result21 = tmp9(tmp2[50]);
      const obj11 = { disabled: tmp62 };
      youSettingsCoachmark = tmp9(tmp2[52]).useYouSettingsCoachmark(obj11);
      let tmp64 = null != youSettingsCoachmark;
      const tmp9Result22 = tmp9(tmp2[52]);
      const customTypingIndicatorConfig = tmp9(tmp2[53]).useCustomTypingIndicatorConfig("YouScreen");
      if ("settings" === customTypingIndicatorConfig.entryPoint) {
        if (customTypingIndicatorConfig.canSet) {
          if (null != obj2) {
            if (!tmp62) {
              if (!tmp64) {
                let items7 = [tmp9(tmp2[49]).DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_PROFILE_COACHMARK];
              }
              const tmp22Result3 = tmp22(tmp9(tmp2[50]).useSelectedDismissibleContent(items7), 2);
              closure_9 = tmp67;
              const tmp68 = tmp22Result3[0] === tmp9(tmp2[49]).DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_PROFILE_COACHMARK;
              closure_10 = tmp68;
              let tmp69 = tmp62;
              if (!tmp62) {
                tmp69 = tmp64;
              }
              if (!tmp69) {
                tmp69 = tmp68;
              }
              closure_11 = tmp69;
              const tmp9Result24 = tmp9(tmp2[50]);
              closure_12 = tmp22(obj5.useState(false), 2)[1];
              let tmp73Result = null;
              if (tmp69) {
                tmp73Result = null;
                if (tmp71) {
                  if (tmp62) {
                    const obj12 = { buttonRef: ref4, markAsDismissed: tmp56, visible: tmp57, title: null, description: null, avatarSrc: null, decorationAsset: null, renderImgComponent: null, navigateToShop: null };
                    ({ title: obj25.title, description: obj25.description, avatarSrc: obj25.avatarSrc, decorationAsset: obj25.decorationAsset, renderImgComponent: obj25.renderImgComponent } = memo2);
                    obj12.navigateToShop = callback;
                    tmp62 = closure_21(navigateToShop(tmp2[55]), obj12);
                  }
                  const items8 = [tmp62, , ];
                  if (tmp64) {
                    const obj13 = { buttonRef: ref5 };
                    const merged = Object.assign(youSettingsCoachmark.props);
                    tmp64 = closure_21(navigateToShop(tmp2[52]), obj13);
                    const tmpResult11 = navigateToShop(tmp2[52]);
                  }
                  items8[1] = tmp64;
                  let tmp79 = tmp68;
                  if (tmp68) {
                    const obj14 = { targetRef: ref5, visible: tmp68, markAsDismissed: tmp67, position: "top" };
                    tmp79 = closure_21(navigateToShop(tmp2[56]), obj14);
                  }
                  const obj15 = { zIndex: 1, children: null };
                  items8[2] = tmp79;
                  obj15.children = items8;
                  tmp73Result = closure_22(tmp9(tmp2[54]).LayerScope, obj15);
                }
              }
              const items9 = [tmp69];
              const effect = obj5.useEffect(() => {
                if (closure_11) {
                  const _setTimeout = setTimeout;
                  const timeout = setTimeout(() => closure_1_12(true), 500);
                  return () => clearTimeout(closure_0);
                }
              }, items9);
              const items10 = [navigateToSettings, youSettingsCoachmark, tmp68, tmp22Result3[1]];
              const callback1 = obj5.useCallback(() => {
                if (youSettingsCoachmark != null) {
                  const trackSettingsPress = youSettingsCoachmark.trackSettingsPress;
                  if (trackSettingsPress != null) {
                    trackSettingsPress();
                  }
                }
                if (closure_10) {
                  closure_9(ContentDismissActionType.TAKE_ACTION);
                }
                _undefined();
              }, items10);
              const obj16 = { navigateToPremium, navigateToSettings: callback1, navigateToShop: callback, shopButtonRef: ref4, settingsButtonRef: ref5, paddingBottom: rect.bottom };
              const tmp22Result4 = tmp22(obj5.useState(false), 2);
              const obj17 = { theme, primaryColor, secondaryColor, children: null };
              const obj18 = { value: createUserProfileAnalyticsContext, openedAt: ref1.current, fetchStartedAt: null, fetchEndedAt: null, isLoaded: null, children: null };
              let fetchStartedAt;
              if (obj2 != null) {
                fetchStartedAt = obj2.fetchStartedAt;
              }
              obj18.fetchStartedAt = fetchStartedAt;
              let fetchEndedAt;
              if (obj2 != null) {
                fetchEndedAt = obj2.fetchEndedAt;
              }
              obj18.fetchEndedAt = fetchEndedAt;
              let isLoaded;
              if (obj2 != null) {
                isLoaded = obj2.isLoaded;
              }
              obj18.isLoaded = isLoaded;
              const obj19 = { style: null, nativeID: null, children: null };
              const items11 = [tmp7.container, tmp49];
              obj19.style = items11;
              obj19.nativeID = nativeID;
              let tmp83Result = null != tmpResult2Result;
              const tmp84 = closure_21(navigateToShop(tmp2[42]), obj16);
              if (tmp83Result) {
                const obj20 = { frame: tmpResult2Result, profileThemeType: constants.YOU_SCREEN, frameOrder: tmp9(tmp2[60]).ProfileFrameLayerOrder.BACK, containerWidth: bound };
                tmp83Result = closure_21(navigateToShop(tmp2[59]), obj20);
                const tmpResult13 = navigateToShop(tmp2[59]);
              }
              const items12 = [, , , , , ];
              class YouScreenTsx1 {
                constructor(arg0) {
                  result = closure_0.set(arg0.contentOffset.y);
                  return;
                }
              }
              const obj21 = { gradientHeight: height, bannerHeight: tmpResultResult, style: tmp7.background };
              items12[1] = closure_21(navigateToShop(tmp2[61]), obj21);
              const obj22 = { contentContainerStyle, ref, onScroll: animatedScrollHandler, onLayout: tmp3.onLayout, scrollEventThrottle, style: tmp7.scrollView, children: null };
              const obj23 = { style: null, children: null };
              const items13 = [tmp7.banner, bannerAnimatedStyle];
              obj23.style = items13;
              let tmp83Result5 = !tmp88Result;
              if (!tmp88Result) {
                const obj24 = { paddingTop: bound1 };
                tmp83Result5 = closure_21(BackButton, obj24);
              }
              const items14 = [tmp83Result5, ];
              const obj26 = { style: null, children: null };
              const items15 = [dimensionStyle, bannerImageAnimatedStyle];
              obj26.style = items15;
              const obj27 = { style: null };
              const items16 = [num3.absoluteFill, ];
              const obj28 = { backgroundColor: null };
              const tmp99 = num3;
              const tmpResult12 = navigateToShop(tmp2[58]);
              obj28.backgroundColor = tmp9(tmp2[62]).int2hex(userProfileBannerBackgroundColor);
              items16[1] = obj28;
              obj27.style = items16;
              const items17 = [closure_21(closure_6, obj27), , ];
              if (null == source) {
                items17[1] = tmp100;
                let tmp83Result6 = tmp9(tmp2[17]).isIOS() && showBlur;
                if (tmp83Result6) {
                  const obj29 = { animatedProps: blurAnimatedProps, style: tmp99.absoluteFillObject };
                  tmp83Result6 = closure_21(VisualEffectViewThemed, obj29);
                }
                items17[2] = tmp83Result6;
                obj26.children = items17;
                items14[1] = closure_22(navigateToShop(tmp2[14]).View, obj26);
                obj23.children = items14;
                const items18 = [closure_22(navigateToShop(tmp2[14]).View, obj23), , , ];
                if (tmp88Result) {
                  const obj30 = { pointerEvents: "box-none", style: null, children: null };
                  const items19 = [tmp7.profileEffectLayer, , ];
                  const size1 = { width: "100%", height };
                  items19[1] = size1;
                  items19[2] = bannerAnimatedStyle;
                  obj30.style = items19;
                  const obj31 = { skuId: skuId2, bannerAdjustment: 0, replayOnNavigationFocus: true, paused: tmp27 };
                  const items20 = [closure_21(navigateToShop(tmp2[64]), obj31), ];
                  const obj32 = { paddingTop: bound1 };
                  items20[1] = closure_21(BackButton, obj32);
                  obj30.children = items20;
                  tmp88Result = closure_22(navigateToShop(tmp2[14]).View, obj30);
                }
                items18[1] = tmp88Result;
                const obj33 = { user, userTheme: tmp12, scrollViewRef: ref, scrollPosition: sharedValue, style: null, navigateToProfileCustomization: null, navigateToCustomStatus: null, navigateToFriends: null, navigateToPremium: null, navigateToShop: null, initialTab: null, animateAvatar: null };
                const items21 = [tmp7.content, contentAnimatedStyle];
                obj33.style = items21;
                obj33.navigateToProfileCustomization = navigateToProfileCustomization;
                obj33.navigateToCustomStatus = navigateToCustomStatus;
                obj33.navigateToFriends = navigateToFriends;
                obj33.navigateToPremium = navigateToPremium;
                obj33.navigateToShop = navigateToShop;
                obj33.initialTab = initialTab;
                obj33.animateAvatar = !tmp27;
                items18[2] = closure_21(navigateToShop(tmp2[65]), obj33);
                items18[3] = closure_21(tmp9(tmp2[66]).TTIFirstContentfulPaint, { label: "you_screen" });
                obj22.children = items18;
                items12[2] = closure_22(closure_26, obj22);
                let tmp83Result7 = null != tmpResult2Result;
                if (tmp83Result7) {
                  const obj34 = { frame: tmpResult2Result, profileThemeType: constants.YOU_SCREEN, frameOrder: tmp9(tmp2[60]).ProfileFrameLayerOrder.FRONT, containerWidth: bound };
                  tmp83Result7 = closure_21(navigateToShop(tmp2[59]), obj34);
                  const tmpResult14 = navigateToShop(tmp2[59]);
                }
                const obj35 = { children: null };
                items12[3] = tmp83Result7;
                items12[4] = tmp84;
                items12[5] = tmp73Result;
                obj19.children = items12;
                obj18.children = closure_22(tmpResult12, obj19);
                obj17.children = closure_21(tmp9(tmp2[43]).UserProfileAnalyticsProvider, obj18);
                obj35.children = closure_21(tmp9(tmp2[57]).ThemeContextProvider, obj17);
                return closure_21(tmp9(tmp2[54]).LayerScope, obj35);
              } else if (isAnimatedImageURLResult) {
                const obj36 = {
                  style: dimensionStyle,
                  onPress() {
                                  return closure_4(!first);
                                },
                  accessibilityRole: "image",
                  accessibilityLabel: null,
                  children: null
                };
                let intl2 = tmp9(tmp2[22]).intl;
                obj36.accessibilityLabel = intl2.string(tmp9(tmp2[22]).t["3fzj/l"]);
                const obj37 = { style: dimensionStyle, accessibilityRole: "image", accessibilityLabel: formatToPlainStringResult, source, paused: tmp27 };
                const items22 = [closure_21(navigateToShop(tmp2[51]), obj37), ];
                let tmp83Result8 = !obj38;
                if (!obj38) {
                  obj38 = { label: null, style: null, textStyle: null };
                  const intl3 = tmp9(tmp2[22]).intl;
                  obj38.label = intl3.string(tmp9(tmp2[22]).t.I5gL2H);
                  const items23 = [tmp7.gifTag, ];
                  dimensionStyle = { top: bound1 };
                  items23[1] = dimensionStyle;
                  obj38.style = items23;
                  obj38.textStyle = tmp7.gifTagText;
                  tmp83Result8 = closure_21(tmp9(tmp2[63]).Caption, obj38);
                }
                items22[1] = tmp83Result8;
                obj36.children = items22;
                let tmp88Result2 = closure_22(tmp9(tmp2[23]).PressableOpacity, obj36);
              } else {
                const obj39 = { style: dimensionStyle, accessibilityRole: "image", accessibilityLabel: formatToPlainStringResult, source, paused: tmp27 };
                tmp88Result2 = closure_21(navigateToShop(tmp2[51]), obj39);
              }
              const tmp9Result25 = tmp9(tmp2[62]);
            }
          }
        }
      }
      items7 = [];
      const tmp9Result23 = tmp9(tmp2[53]);
    }
    bound1 = closure_12;
    const tmpResult10 = navigateToShop(tmp2[46]);
  }
  if (!isFocused) {
    ref3.current = false;
  }
  ref1 = noop.useRef(Date.now());
}
get_ActivityIndicator = fn(17);
({ StyleSheet: hasOwnProperty, View: closure_6, ScrollView } = get_ActivityIndicator);
const YouConstants = fn(18743);
({ YOU_ACTION_SHEET_TOP_INSET: closure_12, YOU_AVATAR_SIZE: map1, YOU_SCREEN_ID: closure_14, YOU_SCROLL_EVENT_THROTTLE: closure_15 } = YouConstants);
const UserSettingsSections = fn(1072).UserSettingsSections;
let closure_17 = fn(1074).CollectiblesMobileShopScreen;
const ContentDismissActionType = fn(4989).ContentDismissActionType;
const Constants = fn(7515);
({ BANNER_ASPECT_RATIO: closure_19, UserProfileThemeTypes: closure_20 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_21, jsxs: closure_22 } = jsxProd);
let module_1652 = module_1652_mod;
const VisualEffectViewThemed = module_1652.createAnimatedComponent(VisualEffectViewThemedDefault);
let createStyles = fn(5143);
let closure_24 = createStyles.createStyles(() => {
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
  const obj3 = { container: null, background: null, scrollView: null, profileEffectLayer: null, banner: null, gifTag: null, gifTagText: null, content: null };
  const merged = Object.assign(obj2);
  obj3.container = { flex: 1, flexGrow: 1, position: "relative" };
  const merged1 = Object.assign(obj2);
  obj3.background = { overflow: "hidden" };
  const merged2 = Object.assign(obj2);
  obj3.scrollView = { flex: 1 };
  obj3.profileEffectLayer = { position: "absolute", top: 0, zIndex: 1 };
  obj3.banner = { width: "100%", aspectRatio };
  const rect = { position: "absolute", left: 16, right: "auto", bottom: "auto", marginTop: 8, backgroundColor: null };
  const obj4 = { flex: 1, flexGrow: 1, position: "relative" };
  const obj5 = { overflow: "hidden" };
  const obj6 = { flex: 1 };
  const obj7 = { width: "100%", aspectRatio };
  tmpResult = utils_PlatformUtils;
  const tmp10Result = _modDef671(nativeDefault.unsafe_rawColors.WHITE);
  rect.backgroundColor = _modDef671(nativeDefault.unsafe_rawColors.WHITE).alpha(0.9).css();
  obj3.gifTag = rect;
  const alphaResult = _modDef671(nativeDefault.unsafe_rawColors.WHITE).alpha(0.9);
  obj3.gifTagText = { color: nativeDefault.unsafe_rawColors.PRIMARY_800, fontSize: 14 };
  obj3.content = { flex: 1, flexGrow: 1 };
  return obj3;
});
createStyles = fn(5143);
let closure_25 = createStyles.createStyles(() => {
  const obj = { backButton: { position: "absolute", marginTop: nativeDefault.space.PX_4, left: nativeDefault.space.PX_16, zIndex: 99, alignItems: "center", justifyContent: "center" } };
  return obj;
});
let module_1652 = module_1652_mod;
let closure_26 = module_1652.createAnimatedComponent(ScrollView);
let closure_29 = { code: "(function YouScreenTsx1(e){let[scrollPosition]=this.__closure;scrollPosition.set(e.contentOffset.y);})" };
let size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/YouScreen.tsx");

export default function YouScreen(initialTab) {
  let stateFromStores;
  let memo;
  let navigateToSettings;
  items = [UserStore];
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
      avatarURL = stateFromStores.getAvatarURL(null, state);
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
  const fetchWishlist = stateFromStores(memo[68]).useFetchWishlist({ wishlistId: stateFromStores2, userId: id });
  navigateToSettings = noop.useCallback(() => {
    state.setState({ query: "", isActive: false });
    stateFromStores(memo[69]).openUserSettings();
  }, []);
  const callback1 = noop.useCallback(() => {
    stateFromStores(memo[69]).openUserSettings({ screen: constants.PREMIUM });
  }, []);
  const callback2 = noop.useCallback(() => {
    const obj2 = { analyticsSource: id(memo[47]).YOU_SCREEN, analyticsLocations: null, screen: null };
    items = [id(memo[47]).YOU_SCREEN];
    obj2.analyticsLocations = items;
    obj2.screen = constants2.FEATURED_PAGE;
    const result = stateFromStores(memo[70]).openCollectiblesShopMobile(obj2);
  }, []);
  const callback3 = noop.useCallback((autoFocusElement) => {
    const obj2 = { screen: constants.PROFILE_CUSTOMIZATION, params: { autoFocusElement } };
    stateFromStores(memo[69]).openUserSettings(obj2);
  }, []);
  const callback4 = noop.useCallback(() => {
    const obj2 = { analyticsLocations: null };
    items = [id(memo[47]).YOU_SCREEN];
    obj2.analyticsLocations = items;
    const result = stateFromStores(memo[71]).openEditCustomStatusModal(obj2);
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
  const layoutEffect1 = noop.useLayoutEffect(() => stateFromStores(memo[72]).trackAppUIViewed(), []);
  const tmpResult3 = stateFromStores(memo[68]);
  const scrollToTop = stateFromStores(memo[37]).useScrollToTop(noop.useRef({
    scrollToTop() {
      callback();
    }
  }));
  let tmp18 = null;
  if (null != stateFromStores) {
    const obj4 = { user: stateFromStores, navigateToSettings, navigateToPremium: callback1, navigateToProfileCustomization: callback3, navigateToCustomStatus: callback4, navigateToFriends: callback5, navigateToShop: callback2, initialTab: initialTab.initialTab };
    tmp18 = closure_21(UnconnectedYouScreen, obj4);
  }
  return tmp18;
};