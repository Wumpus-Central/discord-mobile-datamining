import useUserProfileOverscrollStyles from "useUserProfileOverscrollStyles";
import closure_4 from "n";
import get_ActivityIndicator from "PlatformTypes";
import createUserWidgetFromServer from "createUserWidgetFromServer";
import _getSystemLocale from "_getSystemLocale";
import zustandStore from "zustandStore";
import updateGuildUnreadSentinel from "updateGuildUnreadSentinel";
import mergeGuildAvatar from "mergeGuildAvatar";
import YOU_SCREEN_ID from "YOU_SCREEN_ID";
import { UserSettingsSections } from "ME";
import { CollectiblesMobileShopScreen as closure_17 } from "items";
import { ContentDismissActionType } from "ContentDismissActionType";
import { UserProfileThemeTypes } from "ARBITRARY_LARGE_OFFSET";
import jsxProd from "defaultAreStatesEqual";
import module_8388 from "module_8388";
import createCacheKey from "createCacheKey";
import createCacheKey from "createCacheKey";
import importDefaultResult from "module_4054";
import importDefaultResult1 from "module_4054";

let ScrollView;
let c5;
let closure_12;
let closure_14;
let closure_15;
let closure_20;
let closure_21;
let closure_6;
let map1;
const require = arg1;
function handleBackButtonPress() {
  const navigation = require(4045) /* getRootNavigationRef */.getRootNavigationRef();
  if (null != navigation) {
    if (navigation.canGoBack()) {
      navigation.goBack();
    } else {
      navigation.navigate("guilds");
    }
  }
}
function BackButton(paddingTop) {
  let obj = require(647) /* defaultAreStatesEqual */;
  const items = [updateGuildUnreadSentinel];
  const stateFromStores = obj.useStateFromStores(items, () => totalMentionCount.getTotalMentionCount());
  if (stateFromStores > 0) {
    const intl2 = tmp2(1236).intl;
    obj = { mentionCount: null };
    obj[0] = stateFromStores;
    let formatToPlainStringResult = intl2.formatToPlainString(tmp2(1236).t.vxFYaM, obj);
  } else {
    const intl = tmp2(1236).intl;
    formatToPlainStringResult = intl.string(tmp2(1236).t["13/7kX"]);
  }
  obj = { style: items1, accessibilityRole: "button", accessibilityLabel: formatToPlainStringResult, onPress: handleBackButtonPress, children: null };
  items1 = [callback4().backButton, { top: paddingTop.paddingTop }];
  obj[4] = callback2(require(15295) /* IconWithBadge */.CloseIconWithBadgeOnSide, { count: stateFromStores });
  return callback2(require(4721) /* PressableBase */.PressableOpacity, obj);
}
function UnconnectedYouScreen(arg0) {
  let bannerAnimatedStyle;
  let bannerImageAnimatedStyle;
  let blurAnimatedProps;
  let c2;
  let contentAnimatedStyle;
  let contentContainerStyle;
  let dimensionStyle;
  let initialTab;
  let navigateToCustomStatus;
  let navigateToFriends;
  let navigateToPremium;
  let navigateToProfileCustomization;
  let navigateToSettings;
  let navigateToShop;
  let primaryColor;
  let secondaryColor;
  let showBlur;
  let theme;
  let tmp3;
  let user;
  ({ user, navigateToSettings } = arg0);
  ({ navigateToPremium, navigateToShop } = arg0);
  let dependencyMap;
  let callback;
  let rect;
  let sharedValue;
  let bound;
  let first;
  let _getSystemLocale;
  let num2;
  let c10;
  let c11;
  let youSettingsCoachmark;
  let c13;
  let closure_14;
  let obj = rect;
  ({ navigateToProfileCustomization, navigateToCustomStatus, navigateToFriends, initialTab } = arg0);
  let tmp = callback;
  [tmp3, c2] = callback(rect.useState(0), 2);
  callback = rect.useCallback((nativeEvent) => {
    _undefined(nativeEvent.nativeEvent.layout.width);
  }, []);
  let tmp8;
  let tmp2 = callback(rect.useState(0), 2);
  if (tmp3 > 0) {
    tmp8 = tmp3;
  }
  const tmp7Result = navigateToShop(8377)(tmp8);
  callback = tmp7Result;
  const tmp10 = callback3(tmp7Result);
  obj = { type: null, name: null };
  let tmp5Result = tmp5(8436);
  obj[0] = navigateToSettings(503).ImpressionTypes.VIEW;
  obj[1] = navigateToSettings(503).ImpressionNames.USER_YOU_SCREEN;
  tmp5Result(obj);
  let obj2 = tmp5(7987)(user.id);
  rect = tmp5(1581)();
  const tmp7 = navigateToShop(8377);
  ({ theme, primaryColor, secondaryColor } = navigateToShop(8081)({ user, displayProfile: obj2 }));
  const tmp14 = navigateToShop(8081)({ user, displayProfile: obj2 });
  const ref = obj.useRef(null);
  let obj3 = navigateToSettings(4054);
  sharedValue = obj3.useSharedValue(0);
  let obj4 = navigateToSettings(4054);
  class N {
    constructor(arg0) {
      result = USER_YOU_SCREEN.set(arg0.contentOffset.y);
      return;
    }
  }
  N.__closure = { scrollPosition: sharedValue };
  N.__workletHash = 952837799380;
  N.__initData = closure_28;
  const tmp15 = navigateToShop(4129)();
  const animatedScrollHandler = obj4.useAnimatedScrollHandler(N);
  ({ bannerAnimatedStyle, bannerImageAnimatedStyle, contentAnimatedStyle, blurAnimatedProps, showBlur } = navigateToShop(8386)({ scrollPosition: sharedValue, bannerHeight: tmp7Result }));
  const size = tmp5(1474)();
  const height = size.height;
  let num = 0;
  const diff = size.width - rect.right - rect.left;
  if (navigateToShop(4047)().isChatBesideChannelList) {
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
  _getSystemLocale = tmpResult[1];
  const GifAutoPlay = tmp12(3866).GifAutoPlay;
  const setting = GifAutoPlay.getSetting();
  let tmp12Result = tmp12(1481);
  const isFocused = tmp12Result.useIsFocused();
  tmp12Result = tmp12(15637);
  let tmp28 = !isFocused;
  if (!isFocused) {
    tmp28 = !tmp12Result.useIsProfileModalTransitioning();
  }
  const tmp19 = navigateToShop(8386)({ scrollPosition: sharedValue, bannerHeight: tmp7Result });
  const ref2 = obj.useRef(undefined);
  const ref3 = obj.useRef(false);
  if (isFocused) {
    if (!ref3.current) {
      ref3.current = true;
      const _Date = Date;
      ref2.current = Date.now();
    }
    let obj32 = setting;
    if (!setting) {
      obj32 = first;
    }
    let bannerURL;
    if (obj2 != null) {
      obj = { canAnimate: null, size: null };
      obj[0] = obj32;
      obj[1] = bound;
      bannerURL = obj2.getBannerURL(obj);
    }
    let source = null;
    if (null != bannerURL) {
      source = tmp12(1416).makeSource(bannerURL);
      const tmp12Result1 = tmp12(1416);
    }
    const tmp12Result2 = tmp12(1416);
    let intl = tmp12(1236).intl;
    const obj1 = { username: null };
    obj1[0] = user.username;
    const formatToPlainStringResult = intl.formatToPlainString(tmp12(1236).t.gVn4uJ, obj1);
    const isAnimatedImageURLResult = tmp12(1416).isAnimatedImageURL(bannerURL);
    obj2 = { user: null, displayProfile: null };
    obj2[0] = user;
    obj2[1] = obj2;
    let tmp37 = null == obj2;
    const userProfileBannerBackgroundColor = tmp12(7983).useUserProfileBannerBackgroundColor(obj2);
    if (!tmp37) {
      tmp37 = !obj2.isLoaded;
    }
    let items = [tmp7Result, bound, rect.bottom];
    const tmp12Result3 = tmp12(7983);
    const memo = obj.useMemo(() => {
      obj = { dimensionStyle: obj, contentContainerStyle: null };
      obj = { width: bound, height: c3 };
      let num = 0;
      if (obj3.isYouNavFloating()) {
        num = navigateToShop(_undefined[18]).space.PX_64;
      }
      obj[1] = { paddingBottom: rect.bottom + num };
      return obj;
    }, items);
    ({ dimensionStyle, contentContainerStyle } = memo);
    const tmp38 = tmp5(6564)();
    obj3 = { layout: "YOU_SCREEN", userId: null };
    obj3[1] = user.id;
    const createUserProfileAnalyticsContext = tmp12(8111).useCreateUserProfileAnalyticsContext(obj3);
    const tmp12Result4 = tmp12(8111);
    const isScreenLandscape = tmp12(4724).useIsScreenLandscape();
    let tmp43;
    tmp5Result = tmp5(8086);
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
    const tmp12Result5 = tmp12(4724);
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
    obj4 = { skuId: null, openedAt: null, analyticsLocations: null, context: null };
    obj4[0] = tmp47;
    obj4[1] = ref2.current;
    const items1 = [tmp5(5539).YOU_SCREEN];
    obj4[2] = items1;
    obj4[3] = createUserProfileAnalyticsContext;
    tmp5(8370)(obj4);
    num2 = 0;
    if (null != tmp5Result1Result) {
      num2 = tmp5(8100)(tmp5Result1Result, bound).overflowTop;
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
      let tmp86Result = null != skuId2;
      const memo1 = obj.useMemo(() => {
        const items = [navigateToSettings(_undefined[48]).DismissibleContent.WISHLIST_MOBILE_YOU_SCREEN_COACHMARK];
        return items;
      }, []);
      tmp12Result6 = tmp12(501);
      tmpResult = tmp(tmp12(8451).useSelectedDismissibleContent(memo1), 2);
      c10 = tmp58;
      const items3 = [null != tmpResult[0]];
      const memo2 = obj.useMemo(() => {
        let tmp = null;
        if (c10) {
          const obj = { title: null, description: null, avatarSrc: null, decorationAsset: "", renderImgComponent: null };
          const intl = navigateToSettings(_undefined[22]).intl;
          obj[0] = intl.string(navigateToSettings(_undefined[22]).t.epBu6F);
          const intl2 = navigateToSettings(_undefined[22]).intl;
          obj[1] = intl2.string(navigateToSettings(_undefined[22]).t["o8+3AX"]);
          obj[2] = {};
          obj[4] = function renderImgComponent() {
            return callback2(callback(table[50]), { source: { uri: "https://cdn.discordapp.com/assets/content/1979309f7455b06e0bc1e8f5da89de9934155a0a9a74bfff5b680c82fb45d53f.png" }, style: { width: 80, height: 80 } });
          };
          tmp = obj;
        }
        return tmp;
      }, items3);
      const ref4 = obj.useRef(null);
      const ref5 = obj.useRef(null);
      c11 = tmp57;
      const items4 = [tmpResult[1], navigateToShop];
      const callback1 = obj.useCallback(() => {
        navigateToShop();
        _undefined2(outer1_18.TAKE_ACTION);
      }, items4);
      let tmp63 = null != memo2;
      const tmp12Result7 = tmp12(8451);
      const obj5 = { disabled: null };
      obj5[0] = tmp63;
      youSettingsCoachmark = tmp12(15639).useYouSettingsCoachmark(obj5);
      let tmp65 = null != youSettingsCoachmark;
      let tmp66 = tmp63;
      if (!tmp63) {
        tmp66 = tmp65;
      }
      c13 = tmp66;
      const tmp12Result8 = tmp12(15639);
      const tmp12Result9 = tmp12(15638);
      closure_14 = tmp(obj.useState(!tmp12(15638).isYouNavFloating()), 2)[1];
      let tmp70Result = null;
      if (tmp66) {
        tmp70Result = null;
        if (tmp68) {
          if (tmp63) {
            const obj6 = { buttonRef: null, markAsDismissed: null, visible: null, title: null, description: null, avatarSrc: null, decorationAsset: null, renderImgComponent: null, navigateToShop: null };
            obj6[0] = ref4;
            obj6[1] = tmp57;
            obj6[2] = tmp58;
            ({ title: obj24[3], description: obj24[4], avatarSrc: obj24[5], decorationAsset: obj24[6], renderImgComponent: obj24[7] } = memo2);
            obj6[8] = callback1;
            tmp63 = callback2(tmp5(15642), obj6);
          }
          const items5 = [tmp63, ];
          if (tmp65) {
            const obj7 = { buttonRef: null };
            obj7[0] = ref5;
            const merged = Object.assign(youSettingsCoachmark.props);
            tmp65 = callback2(tmp5(15639), obj7);
            const tmp5Result2 = tmp5(15639);
          }
          const obj8 = { zIndex: 1, children: null };
          items5[1] = tmp65;
          obj8[1] = items5;
          tmp70Result = closure_21(tmp12(5506).LayerScope, obj8);
          const tmp70 = closure_21;
        }
      }
      const items6 = [tmp66];
      const effect = obj.useEffect(() => {
        if (c13) {
          if (obj.isYouNavFloating()) {
            const _setTimeout = setTimeout;
            const timeout = setTimeout(() => callback(true), 500);
            return () => clearTimeout(closure_0);
          }
          obj = navigateToSettings(_undefined[41]);
        }
      }, items6);
      const items7 = [navigateToSettings, youSettingsCoachmark];
      callback2 = obj.useCallback(() => {
        if (youSettingsCoachmark != null) {
          const trackSettingsPress = youSettingsCoachmark.trackSettingsPress;
          if (trackSettingsPress != null) {
            trackSettingsPress();
          }
        }
        navigateToSettings();
      }, items7);
      const obj9 = { isLoading: null, navigateToPremium: null, navigateToSettings: null, navigateToShop: null, shopButtonRef: null, settingsButtonRef: null, paddingTop: null, paddingBottom: null, backButton: null };
      obj9[0] = tmp37;
      obj9[1] = navigateToPremium;
      obj9[2] = callback2;
      obj9[3] = callback1;
      obj9[4] = ref4;
      obj9[5] = ref5;
      obj9[6] = bound1;
      const tmpResult1 = tmp(obj.useState(!tmp12(15638).isYouNavFloating()), 2);
      const tmp5Result3 = tmp5(15643);
      let bottom;
      if (tmp12Result10.isYouNavFloating()) {
        bottom = rect.bottom;
      }
      obj9[7] = bottom;
      const obj10 = { paddingTop: null };
      obj10[0] = bound1;
      obj9[8] = callback2(BackButton, obj10);
      let tmp78Result = tmp78(tmp5Result3, obj9);
      const obj11 = { theme: null, primaryColor: null, secondaryColor: null, children: null };
      class N {
        constructor(arg0) {
          result = USER_YOU_SCREEN.set(arg0.contentOffset.y);
          return;
        }
      }
      obj11[1] = primaryColor;
      obj11[2] = secondaryColor;
      const obj12 = { value: null, openedAt: null, fetchStartedAt: null, fetchEndedAt: null, isLoaded: null, children: null };
      obj12[0] = createUserProfileAnalyticsContext;
      obj12[1] = ref1.current;
      let fetchStartedAt;
      if (obj2 != null) {
        fetchStartedAt = obj2.fetchStartedAt;
      }
      obj12[2] = fetchStartedAt;
      let fetchEndedAt;
      if (obj2 != null) {
        fetchEndedAt = obj2.fetchEndedAt;
      }
      obj12[3] = fetchEndedAt;
      let isLoaded;
      if (obj2 != null) {
        isLoaded = obj2.isLoaded;
      }
      obj12[4] = isLoaded;
      const obj13 = { style: null, nativeID: null, children: null };
      const items8 = [tmp10.container, tmp50];
      obj13[0] = items8;
      obj13[1] = closure_14;
      tmp78Result = null != tmp5Result1Result;
      tmp12Result10 = tmp12(15638);
      if (tmp78Result) {
        const obj14 = { frame: null, profileThemeType: null, frameOrder: null, containerWidth: null };
        obj14[0] = tmp5Result1Result;
        obj14[1] = UserProfileThemeTypes.YOU_SCREEN;
        obj14[2] = tmp12(8092).ProfileFrameLayerOrder.BACK;
        obj14[3] = bound;
        tmp78Result = tmp78(tmp5(8101), obj14);
        const tmp5Result5 = tmp5(8101);
      }
      const items9 = [tmp78Result, , , , , , ];
      const obj15 = { gradientHeight: null, bannerHeight: null, style: null };
      obj15[0] = height;
      obj15[1] = tmp7Result;
      obj15[2] = tmp10.background;
      items9[1] = callback2(tmp5(8383), obj15);
      const tmp5Result4 = tmp5(15651);
      const isYouNavFloatingResult = tmp12(15638).isYouNavFloating();
      let tmp93 = !isYouNavFloatingResult;
      if (!isYouNavFloatingResult) {
        tmp93 = tmp70Result;
      }
      items9[2] = tmp93;
      const obj16 = { contentContainerStyle: null, ref: null, onScroll: null, onLayout: null, scrollEventThrottle: null, style: null, children: null };
      obj16[0] = contentContainerStyle;
      obj16[1] = ref;
      obj16[2] = animatedScrollHandler;
      obj16[3] = callback;
      obj16[4] = closure_15;
      obj16[5] = tmp10.scrollView;
      const obj17 = { style: null, children: null };
      const items10 = [tmp10.banner, bannerAnimatedStyle];
      obj17[0] = items10;
      let tmp96 = !tmp86Result;
      if (!tmp86Result) {
        let tmp78Result1 = tmp78Result;
        if (tmp12Result12.isYouNavFloating()) {
          const obj18 = { paddingTop: null };
          obj18[0] = bound1;
          tmp78Result1 = tmp78(tmp81, obj18);
        }
        tmp96 = tmp78Result1;
        tmp12Result12 = tmp12(15638);
      }
      const items11 = [tmp96, ];
      const obj19 = { style: null, children: null };
      const items12 = [dimensionStyle, bannerImageAnimatedStyle];
      obj19[0] = items12;
      const obj20 = { style: null };
      const items13 = [sharedValue.absoluteFill, ];
      const obj21 = { backgroundColor: null };
      const tmp12Result11 = tmp12(15638);
      const tmp94 = closure_25;
      const tmp99 = sharedValue;
      obj21[0] = tmp12(688).int2hex(userProfileBannerBackgroundColor);
      items13[1] = obj21;
      obj20[0] = items13;
      const items14 = [callback2(bound, obj20), , ];
      tmp = null != source;
      if (!tmp) {
        items14[1] = tmp;
        tmp = tmp12(501).isIOS() && showBlur;
        if (tmp) {
          tmp = module_8388;
          const obj22 = { animatedProps: null, style: null };
          obj22[0] = blurAnimatedProps;
          obj22[1] = tmp99.absoluteFillObject;
          tmp = tmp78(module_8388, obj22);
        }
        items14[2] = tmp;
        obj19[1] = items14;
        items11[1] = tmp86(tmp5(4054).View, obj19);
        obj17[1] = items11;
        const items15 = [tmp86(tmp5(4054).View, obj17), , , ];
        if (tmp86Result) {
          const obj23 = { pointerEvents: "box-none", style: null, children: null };
          const items16 = [tmp10.profileEffectLayer, , ];
          const obj24 = { width: null, height: null };
          obj24[0] = bound;
          obj24[1] = height;
          items16[1] = obj24;
          items16[2] = bannerAnimatedStyle;
          obj23[1] = items16;
          const obj25 = { skuId: null, bannerAdjustment: 0, replayOnNavigationFocus: true, paused: null };
          obj25[0] = skuId2;
          obj25[3] = tmp28;
          const items17 = [tmp78(tmp5(8063), obj25), ];
          tmp = tmp78Result;
          if (tmp12Result15.isYouNavFloating()) {
            const obj26 = { paddingTop: null };
            obj26[0] = bound1;
            tmp = tmp78(tmp81, obj26);
          }
          items17[1] = tmp;
          obj23[2] = items17;
          tmp86Result = tmp86(tmp5(4054).View, obj23);
          tmp12Result15 = tmp12(15638);
        }
        items15[1] = tmp86Result;
        const obj27 = { user: null, userTheme: null, scrollViewRef: null, style: null, navigateToProfileCustomization: null, navigateToCustomStatus: null, navigateToFriends: null, navigateToPremium: null, navigateToShop: null, initialTab: null, animateAvatar: null };
        obj27[0] = user;
        obj27[1] = tmp15;
        obj27[2] = ref;
        const items18 = [tmp10.content, contentAnimatedStyle];
        obj27[3] = items18;
        obj27[4] = navigateToProfileCustomization;
        obj27[5] = navigateToCustomStatus;
        obj27[6] = navigateToFriends;
        obj27[7] = navigateToPremium;
        obj27[8] = navigateToShop;
        obj27[9] = initialTab;
        obj27[10] = !tmp28;
        items15[2] = tmp78(tmp5(15653), obj27);
        items15[3] = tmp78(tmp12(10061).TTIFirstContentfulPaint, { label: "you_screen" });
        obj16[6] = items15;
        items9[3] = tmp86(tmp94, obj16);
        tmp = null != tmp5Result1Result;
        if (tmp) {
          const obj28 = { frame: null, profileThemeType: null, frameOrder: null, containerWidth: null };
          obj28[0] = tmp5Result1Result;
          tmp = UserProfileThemeTypes;
          obj28[1] = UserProfileThemeTypes.YOU_SCREEN;
          tmp = tmp5(8101);
          obj28[2] = tmp12(8092).ProfileFrameLayerOrder.FRONT;
          obj28[3] = bound;
          tmp = tmp78(tmp, obj28);
        }
        items9[4] = tmp;
        const tmp12Result14 = tmp12(501);
        tmp = tmp12(15638).isYouNavFloating() && tmp78Result;
        items9[5] = tmp;
        const tmp12Result16 = tmp12(15638);
        tmp = tmp12(15638).isYouNavFloating() && tmp70Result;
        const obj29 = { children: null };
        items9[6] = tmp;
        obj13[2] = items9;
        obj12[5] = tmp86(tmp5Result4, obj13);
        obj11[3] = tmp78(tmp12(8111).UserProfileAnalyticsProvider, obj12);
        obj29[0] = tmp78(tmp12(3905).ThemeContextProvider, obj11);
        return tmp78(tmp12(5506).LayerScope, obj29);
      } else if (isAnimatedImageURLResult) {
        const obj30 = { onPress: null, accessibilityRole: "image", accessibilityLabel: null, children: null };
        obj30[0] = function onPress() {
          return callback(!first);
        };
        let intl2 = tmp12(1236).intl;
        obj30[2] = intl2.string(tmp12(1236).t["3fzj/l"]);
        const obj31 = { style: null, accessibilityRole: "image", accessibilityLabel: null, source: null, paused: null };
        obj31[0] = dimensionStyle;
        obj31[2] = formatToPlainStringResult;
        obj31[3] = source;
        obj31[4] = tmp28;
        const items19 = [tmp78(tmp5(5145), obj31), ];
        tmp = !obj32;
        if (!obj32) {
          obj32 = { label: null, style: null, textStyle: null };
          const intl3 = tmp12(1236).intl;
          obj32[0] = intl3.string(tmp12(1236).t.I5gL2H);
          const items20 = [tmp10.gifTag, ];
          dimensionStyle = { top: null };
          dimensionStyle[0] = bound1;
          items20[1] = dimensionStyle;
          obj32[1] = items20;
          obj32[2] = tmp10.gifTagText;
          tmp = tmp78(tmp12(8107).Caption, obj32);
        }
        items19[1] = tmp;
        obj30[3] = items19;
        tmp = tmp86(tmp12(4721).PressableOpacity, obj30);
      } else {
        const obj33 = { style: null, accessibilityRole: "image", accessibilityLabel: null, source: null, paused: null };
        obj33[0] = dimensionStyle;
        obj33[2] = formatToPlainStringResult;
        obj33[3] = source;
        obj33[4] = tmp28;
        tmp = tmp78(tmp5(5145), obj33);
      }
      const tmp12Result13 = tmp12(688);
    }
    bound1 = youSettingsCoachmark;
    const tmp5Result1 = tmp5(8370);
  }
  if (!isFocused) {
    ref3.current = false;
  }
}
({ StyleSheet: c5, View: closure_6, ScrollView } = get_ActivityIndicator);
({ YOU_ACTION_SHEET_TOP_INSET: closure_12, YOU_AVATAR_SIZE: map1, YOU_SCREEN_ID: closure_14, YOU_SCROLL_EVENT_THROTTLE: closure_15 } = YOU_SCREEN_ID);
({ jsx: closure_20, jsxs: closure_21 } = jsxProd);
let closure_23 = createCacheKey.createStyles((marginTop) => {
  let obj = require(501) /* PlatformTypes */;
  let xl;
  if (obj.isIOS()) {
    xl = importDefault(712).radii.xl;
  }
  obj = { borderTopLeftRadius: xl, borderTopRightRadius: null };
  let xl1;
  if (tmpResult.isIOS()) {
    xl1 = importDefault(712).radii.xl;
  }
  obj[1] = xl1;
  obj = { container: null, background: null, scrollView: null, profileEffectLayer: null, banner: null, gifTag: null, gifTagText: null, content: null };
  const merged = Object.assign(obj);
  obj[0] = { flex: 1, flexGrow: 1, position: "relative" };
  const merged1 = Object.assign(obj);
  obj[1] = { overflow: "hidden" };
  const merged2 = Object.assign(obj);
  obj[2] = { flex: 1 };
  obj[3] = { position: "absolute", top: 0, zIndex: 1 };
  obj[4] = { minHeight: marginTop, position: "absolute", top: 0, maxWidth: "100%" };
  const obj4 = { position: "absolute", left: 16, right: "auto", bottom: "auto", marginTop: 8, backgroundColor: null };
  const obj1 = { flex: 1, flexGrow: 1, position: "relative" };
  const obj2 = { overflow: "hidden" };
  const obj3 = { flex: 1 };
  const tmp = require;
  tmpResult = require(501) /* PlatformTypes */;
  const tmp10 = importDefault(689);
  const tmp10Result = importDefault(689)(importDefault(712).unsafe_rawColors.WHITE);
  obj4[5] = importDefault(689)(importDefault(712).unsafe_rawColors.WHITE).alpha(0.9).css();
  obj[5] = obj4;
  const alphaResult = importDefault(689)(importDefault(712).unsafe_rawColors.WHITE).alpha(0.9);
  obj[6] = { color: importDefault(712).unsafe_rawColors.PRIMARY_800, fontSize: 14 };
  obj[7] = { marginTop, flex: 1, flexGrow: 1 };
  return obj;
});
let closure_24 = createCacheKey.createStyles(() => {
  let obj = { backButton: null };
  obj = { position: "absolute", marginTop: importDefault(712).space.PX_4, left: importDefault(712).space.PX_16, zIndex: 99, alignItems: "center", justifyContent: "center" };
  obj[0] = obj;
  return obj;
});
let closure_25 = require("module_4054").createAnimatedComponent(ScrollView);
let closure_28 = { code: "function YouScreenTsx1(e){const{scrollPosition}=this.__closure;scrollPosition.set(e.contentOffset.y);}" };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/YouScreen.tsx");

export default function YouScreen(initialTab) {
  let stateFromStores;
  let id;
  let memo;
  let callback;
  let obj = stateFromStores(memo[21]);
  let items = [mergeGuildAvatar];
  stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const items1 = [_getSystemLocale];
  id = undefined;
  const stateFromStores1 = stateFromStores(memo[21]).useStateFromStores(items1, () => locale.locale);
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  const items2 = [stateFromStores];
  memo = React.useMemo(() => {
    let avatarURL;
    if (stateFromStores != null) {
      avatarURL = stateFromStores.getAvatarURL(null, outer1_13);
    }
    return avatarURL;
  }, items2);
  const items3 = [id, memo, stateFromStores1];
  const layoutEffect = React.useLayoutEffect(() => {
    let tmp2 = null != id;
    if (tmp2) {
      tmp2 = null != memo;
    }
    if (tmp2) {
      id(memo[65])(id, memo, { type: "you_screen" });
    }
  }, items3);
  let tmpResult = tmp(tmp2[21]);
  const items4 = [createUserWidgetFromServer];
  const stateFromStores2 = tmpResult.useStateFromStores(items4, () => {
    let firstWishlistId = null;
    if (null != id) {
      firstWishlistId = outer1_7.getFirstWishlistId(tmp);
    }
    return firstWishlistId;
  });
  tmpResult = tmp(tmp2[66]);
  const fetchWishlist = tmpResult.useFetchWishlist({ wishlistId: stateFromStores2, userId: id });
  callback = React.useCallback(() => {
    state.setState({ query: "", isActive: false });
    stateFromStores(memo[67]).openUserSettings();
  }, []);
  const callback1 = React.useCallback(() => {
    let obj = stateFromStores(memo[67]);
    obj = { screen: constants.PREMIUM };
    obj.openUserSettings(obj);
  }, []);
  const callback2 = React.useCallback(() => {
    let obj = stateFromStores(memo[68]);
    obj = { analyticsSource: id(memo[46]).YOU_SCREEN, analyticsLocations: null, screen: null };
    const items = [id(memo[46]).YOU_SCREEN];
    obj[1] = items;
    obj[2] = constants2.FEATURED_PAGE;
    const result = obj.openCollectiblesShopMobile(obj);
  }, []);
  const callback3 = React.useCallback((autoFocusElement) => {
    let obj = stateFromStores(memo[67]);
    obj = { screen: constants.PROFILE_CUSTOMIZATION, params: obj };
    obj = { autoFocusElement };
    obj.openUserSettings(obj);
  }, []);
  const callback4 = React.useCallback(() => {
    let obj = stateFromStores(memo[69]);
    obj = { analyticsLocations: null };
    const items = [id(memo[46]).YOU_SCREEN];
    obj[0] = items;
    const result = obj.openEditCustomStatusModal(obj);
  }, []);
  const callback5 = React.useCallback(() => {
    const rootNavigationRef = stateFromStores(memo[20]).getRootNavigationRef();
    if (null != rootNavigationRef) {
      if (rootNavigationRef.isReady()) {
        rootNavigationRef.navigate("friends");
      }
    }
    return false;
  }, []);
  const layoutEffect1 = React.useLayoutEffect(() => stateFromStores(memo[70]).trackAppUIViewed(), []);
  const obj2 = stateFromStores(memo[21]);
  obj = {
    scrollToTop() {
      callback();
    }
  };
  const scrollToTop = stateFromStores(memo[36]).useScrollToTop(React.useRef(obj));
  let tmp18 = null;
  if (null != stateFromStores) {
    obj = { user: null, navigateToSettings: null, navigateToPremium: null, navigateToProfileCustomization: null, navigateToCustomStatus: null, navigateToFriends: null, navigateToShop: null, initialTab: null };
    obj[0] = stateFromStores;
    obj[1] = callback;
    obj[2] = callback1;
    obj[3] = callback3;
    obj[4] = callback4;
    obj[5] = callback5;
    obj[6] = callback2;
    obj[7] = initialTab.initialTab;
    tmp18 = callback2(UnconnectedYouScreen, obj);
  }
  return tmp18;
};