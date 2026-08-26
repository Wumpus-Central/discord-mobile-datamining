// === Module 16213: handleBackButtonPress ===

// Module 16213 (handleBackButtonPress)
import PlatformTypes from "PlatformTypes" /* 501 */;
import defaultAreStatesEqual from "defaultAreStatesEqual" /* 647 */;
import nDefault from "n" /* 689 */;
import ThemesDefault from "Themes" /* 712 */;
import getRootNavigationRef from "getRootNavigationRef" /* 4299 */;
import PressableBase from "PressableBase" /* 5015 */;
import _modDef8989 from "module_8989" /* 8989 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_7 from "createUserWidgetFromServer" /* 7293 */;
import closure_8 from "_getSystemLocale" /* 1996 */;
import closure_9 from "zustandStore" /* 14169 */;
import closure_10 from "updateGuildUnreadSentinel" /* 7308 */;
import closure_11 from "mergeGuildAvatar" /* 1922 */;
import YOU_SCREEN_ID from "YOU_SCREEN_ID" /* 15809 */;
import { UserSettingsSections } from "ME" /* 676 */;
import { CollectiblesMobileShopScreen as closure_17 } from "items" /* 678 */;
import { ContentDismissActionType } from "ContentDismissActionType" /* 1388 */;
import { UserProfileThemeTypes } from "ARBITRARY_LARGE_OFFSET" /* 5948 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4444 */;
import importDefaultResult from "module_4184" /* 4184 */;

require = arg1;
function handleBackButtonPress() {
  const navigation = getRootNavigationRef.getRootNavigationRef();
  if (null != navigation) {
    if (navigation.canGoBack()) {
      navigation.goBack();
    } else {
      navigation.navigate("guilds");
    }
  }
}
function BackButton(paddingTop) {
  let obj = defaultAreStatesEqual;
  const items = [closure_10];
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
  obj = { style: items1, accessibilityRole: "button", accessibilityLabel: formatToPlainStringResult, onPress: handleBackButtonPress, children: callback2(tmp2(15839).CloseIconWithBadgeOnSide, { count: stateFromStores }) };
  items1 = [callback4().backButton, { top: paddingTop.paddingTop }];
  return callback2(PressableBase.PressableOpacity, obj);
}
function UnconnectedYouScreen(arg0) {
  ({ user, navigateToSettings } = arg0);
  ({ navigateToPremium, navigateToShop } = arg0);
  dependencyMap = undefined;
  let callback;
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
  closure_14 = undefined;
  closure_15 = undefined;
  closure_16 = undefined;
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
  const tmp7Result = navigateToShop(9040)(tmp8);
  callback = tmp7Result;
  const tmp10 = callback3(tmp7Result);
  obj = { type: null, name: null };
  let tmp5Result = tmp5(9565);
  obj[0] = navigateToSettings(503).ImpressionTypes.VIEW;
  obj[1] = navigateToSettings(503).ImpressionNames.USER_YOU_SCREEN;
  tmp5Result(obj);
  let obj2 = tmp5(8529)(user.id);
  rect = tmp5(1629)();
  const tmp7 = navigateToShop(9040);
  ({ theme, primaryColor, secondaryColor } = navigateToShop(9038)({ user, displayProfile: obj2 }));
  const tmp14 = navigateToShop(9038)({ user, displayProfile: obj2 });
  const ref = obj.useRef(null);
  let obj3 = navigateToSettings(4184);
  sharedValue = obj3.useSharedValue(0);
  let obj4 = navigateToSettings(4184);
  const fn = function w(contentOffset) {
    const result = sharedValue.set(contentOffset.contentOffset.y);
  };
  fn.__closure = { scrollPosition: sharedValue };
  fn.__workletHash = 952837799380;
  fn.__initData = closure_28;
  const tmp15 = navigateToShop(4379)();
  const animatedScrollHandler = obj4.useAnimatedScrollHandler(fn);
  ({ bannerAnimatedStyle, bannerImageAnimatedStyle, contentAnimatedStyle, blurAnimatedProps, showBlur } = navigateToShop(9052)({ scrollPosition: sharedValue, bannerHeight: tmp7Result }));
  const size = tmp5(1494)();
  const height = size.height;
  let num = 0;
  const diff = size.width - rect.right - rect.left;
  if (navigateToShop(4301)().isChatBesideChannelList) {
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
  const GifAutoPlay = tmp12(4134).GifAutoPlay;
  const setting = GifAutoPlay.getSetting();
  let tmp12Result = tmp12(1501);
  const isFocused = tmp12Result.useIsFocused();
  tmp12Result = tmp12(16214);
  let tmp28 = !isFocused;
  if (!isFocused) {
    tmp28 = !tmp12Result.useIsProfileModalTransitioning();
  }
  const tmp19 = navigateToShop(9052)({ scrollPosition: sharedValue, bannerHeight: tmp7Result });
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
      source = tmp12(1435).makeSource(bannerURL);
      const tmp12Result1 = tmp12(1435);
    }
    const tmp12Result2 = tmp12(1435);
    let intl = tmp12(1236).intl;
    obj1 = { username: null };
    obj1[0] = user.username;
    const formatToPlainStringResult = intl.formatToPlainString(tmp12(1236).t.gVn4uJ, obj1);
    const isAnimatedImageURLResult = tmp12(1435).isAnimatedImageURL(bannerURL);
    obj2 = { user: null, displayProfile: null };
    obj2[0] = user;
    obj2[1] = obj2;
    let tmp37 = null == obj2;
    const userProfileBannerBackgroundColor = tmp12(8524).useUserProfileBannerBackgroundColor(obj2);
    if (!tmp37) {
      tmp37 = !obj2.isLoaded;
    }
    let items = [tmp7Result, bound, rect.bottom];
    const tmp12Result3 = tmp12(8524);
    const memo = obj.useMemo(() => {
      obj = { dimensionStyle: obj, contentContainerStyle: null };
      obj = { width: bound, height: closure_3 };
      obj = { paddingBottom: rect.bottom + navigateToShop(_undefined[18]).space.PX_64 };
      obj[1] = obj;
      return obj;
    }, items);
    ({ dimensionStyle, contentContainerStyle } = memo);
    const tmp38 = tmp5(7852)();
    obj3 = { layout: "YOU_SCREEN", userId: null };
    obj3[1] = user.id;
    const createUserProfileAnalyticsContext = tmp12(9003).useCreateUserProfileAnalyticsContext(obj3);
    const tmp12Result4 = tmp12(9003);
    const isScreenLandscape = tmp12(5018).useIsScreenLandscape();
    let tmp43;
    tmp5Result = tmp5(9012);
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
    const tmp12Result5 = tmp12(5018);
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
    const items1 = [tmp5(5920).YOU_SCREEN];
    obj4[2] = items1;
    obj4[3] = createUserProfileAnalyticsContext;
    tmp5(9025)(obj4);
    num2 = 0;
    if (null != tmp5Result1Result) {
      num2 = tmp5(9035)(tmp5Result1Result, bound).overflowTop;
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
      tmp12Result6 = tmp12(501);
      tmpResult = tmp(tmp12(6197).useSelectedDismissibleContent(memo1), 2);
      closure_10 = tmp58;
      const items3 = [null != tmpResult[0]];
      const memo2 = obj.useMemo(() => {
        let tmp = null;
        if (closure_10) {
          const obj = { title: null, description: null, avatarSrc: null, decorationAsset: "", renderImgComponent: null };
          const intl = navigateToSettings(_undefined[22]).intl;
          obj[0] = intl.string(navigateToSettings(_undefined[22]).t.epBu6F);
          const intl2 = navigateToSettings(_undefined[22]).intl;
          obj[1] = intl2.string(navigateToSettings(_undefined[22]).t["o8+3AX"]);
          obj[2] = {};
          obj[4] = function renderImgComponent() {
            return callback2(callback(table[49]), { source: { uri: "https://cdn.discordapp.com/assets/content/1979309f7455b06e0bc1e8f5da89de9934155a0a9a74bfff5b680c82fb45d53f.png" }, style: { width: 80, height: 80 } });
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
        callback2(closure_1_18.TAKE_ACTION);
      }, items4);
      let tmp63 = null != memo2;
      const tmp12Result7 = tmp12(6197);
      const obj5 = { disabled: null };
      obj5[0] = tmp63;
      youSettingsCoachmark = tmp12(16215).useYouSettingsCoachmark(obj5);
      let tmp65 = null != youSettingsCoachmark;
      const tmp12Result8 = tmp12(16215);
      const customTypingIndicatorConfig = tmp12(11607).useCustomTypingIndicatorConfig("YouScreen");
      if ("settings" === customTypingIndicatorConfig.entryPoint) {
        if (customTypingIndicatorConfig.canSet) {
          if (null != obj2) {
            if (!tmp63) {
              if (!tmp65) {
                let items5 = [tmp12(1377).DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_PROFILE_COACHMARK];
              }
              const tmpResult1 = tmp(tmp12(6197).useSelectedDismissibleContent(items5), 2);
              closure_13 = tmp68;
              const tmp69 = tmpResult1[0] === tmp12(1377).DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_PROFILE_COACHMARK;
              closure_14 = tmp69;
              let tmp70 = tmp63;
              if (!tmp63) {
                tmp70 = tmp65;
              }
              if (!tmp70) {
                tmp70 = tmp69;
              }
              closure_15 = tmp70;
              const tmp12Result10 = tmp12(6197);
              closure_16 = tmp(obj.useState(false), 2)[1];
              let tmp74Result = null;
              if (tmp70) {
                tmp74Result = null;
                if (tmp72) {
                  if (tmp63) {
                    const obj6 = { buttonRef: null, markAsDismissed: null, visible: null, title: null, description: null, avatarSrc: null, decorationAsset: null, renderImgComponent: null, navigateToShop: null };
                    obj6[0] = ref4;
                    obj6[1] = tmp57;
                    obj6[2] = tmp58;
                    ({ title: obj25[3], description: obj25[4], avatarSrc: obj25[5], decorationAsset: obj25[6], renderImgComponent: obj25[7] } = memo2);
                    obj6[8] = callback1;
                    tmp63 = callback2(tmp5(16218), obj6);
                  }
                  const items6 = [tmp63, , ];
                  if (tmp65) {
                    const obj7 = { buttonRef: null };
                    obj7[0] = ref5;
                    const merged = Object.assign(youSettingsCoachmark.props);
                    tmp65 = callback2(tmp5(16215), obj7);
                    const tmp5Result2 = tmp5(16215);
                  }
                  items6[1] = tmp65;
                  let tmp80 = tmp69;
                  if (tmp69) {
                    const obj8 = { targetRef: null, visible: null, markAsDismissed: null, position: "top" };
                    obj8[0] = ref5;
                    obj8[1] = tmp69;
                    obj8[2] = tmp68;
                    tmp80 = callback2(tmp5(16219), obj8);
                  }
                  const obj9 = { zIndex: 1, children: null };
                  items6[2] = tmp80;
                  obj9[1] = items6;
                  tmp74Result = closure_21(tmp12(5887).LayerScope, obj9);
                  const tmp74 = closure_21;
                }
              }
              const items7 = [tmp70];
              const effect = obj.useEffect(() => {
                if (closure_15) {
                  const _setTimeout = setTimeout;
                  const timeout = setTimeout(() => callback(true), 500);
                  return () => clearTimeout(closure_0);
                }
              }, items7);
              const items8 = [navigateToSettings, youSettingsCoachmark, tmp69, tmpResult1[1]];
              callback2 = obj.useCallback(() => {
                if (youSettingsCoachmark != null) {
                  const trackSettingsPress = youSettingsCoachmark.trackSettingsPress;
                  if (trackSettingsPress != null) {
                    trackSettingsPress();
                  }
                }
                if (closure_14) {
                  callback3(closure_1_18.TAKE_ACTION);
                }
                navigateToSettings();
              }, items8);
              const obj10 = { isLoading: null, navigateToPremium: null, navigateToSettings: null, navigateToShop: null, shopButtonRef: null, settingsButtonRef: null, paddingBottom: null };
              obj10[0] = tmp37;
              obj10[1] = navigateToPremium;
              obj10[2] = callback2;
              obj10[3] = callback1;
              obj10[4] = ref4;
              obj10[5] = ref5;
              obj10[6] = rect.bottom;
              const tmpResult2 = tmp(obj.useState(false), 2);
              const obj11 = { theme: null, primaryColor: null, secondaryColor: null, children: null };
              obj11[0] = theme;
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
              const items9 = [tmp10.container, tmp50];
              obj13[0] = items9;
              obj13[1] = closure_14;
              let tmp84Result = null != tmp5Result1Result;
              const tmp85 = callback2(tmp5(16220), obj10);
              if (tmp84Result) {
                const obj14 = { frame: null, profileThemeType: null, frameOrder: null, containerWidth: null };
                obj14[0] = tmp5Result1Result;
                obj14[1] = UserProfileThemeTypes.YOU_SCREEN;
                obj14[2] = tmp12(9018).ProfileFrameLayerOrder.BACK;
                obj14[3] = bound;
                tmp84Result = tmp84(tmp5(9032), obj14);
                const tmp5Result4 = tmp5(9032);
              }
              const items10 = [tmp84Result, , , , , ];
              const obj15 = { gradientHeight: null, bannerHeight: null, style: null };
              obj15[0] = height;
              obj15[1] = tmp7Result;
              obj15[2] = tmp10.background;
              items10[1] = callback2(tmp5(9046), obj15);
              const obj16 = { contentContainerStyle: null, ref: null, onScroll: null, onLayout: null, scrollEventThrottle: null, style: null, children: null };
              obj16[0] = contentContainerStyle;
              obj16[1] = ref;
              obj16[2] = animatedScrollHandler;
              obj16[3] = callback;
              obj16[4] = closure_15;
              obj16[5] = tmp10.scrollView;
              const obj17 = { style: null, children: null };
              const items11 = [tmp10.banner, bannerAnimatedStyle];
              obj17[0] = items11;
              tmp84Result = !tmp89Result;
              if (!tmp89Result) {
                const obj18 = { paddingTop: null };
                obj18[0] = bound1;
                tmp84Result = tmp84(BackButton, obj18);
              }
              const items12 = [tmp84Result, ];
              const obj19 = { style: null, children: null };
              const items13 = [dimensionStyle, bannerImageAnimatedStyle];
              obj19[0] = items13;
              const obj20 = { style: null };
              const items14 = [sharedValue.absoluteFill, ];
              const obj21 = { backgroundColor: null };
              tmp = sharedValue;
              const tmp5Result3 = tmp5(16228);
              const tmp95 = closure_25;
              obj21[0] = tmp12(688).int2hex(userProfileBannerBackgroundColor);
              items14[1] = obj21;
              obj20[0] = items14;
              const items15 = [callback2(bound, obj20), , ];
              tmp = null != source;
              if (!tmp) {
                items15[1] = tmp;
                tmp = tmp12(501).isIOS() && showBlur;
                if (tmp) {
                  tmp = closure_22;
                  const obj22 = { animatedProps: null, style: null };
                  obj22[0] = blurAnimatedProps;
                  obj22[1] = tmp.absoluteFillObject;
                  tmp = tmp84(closure_22, obj22);
                }
                items15[2] = tmp;
                obj19[1] = items15;
                items12[1] = tmp89(tmp5(4184).View, obj19);
                obj17[1] = items12;
                const items16 = [tmp89(tmp5(4184).View, obj17), , , ];
                if (tmp89Result) {
                  const obj23 = { pointerEvents: "box-none", style: null, children: null };
                  const items17 = [tmp10.profileEffectLayer, , ];
                  const obj24 = { width: null, height: null };
                  obj24[0] = bound;
                  obj24[1] = height;
                  items17[1] = obj24;
                  items17[2] = bannerAnimatedStyle;
                  obj23[1] = items17;
                  const obj25 = { skuId: null, bannerAdjustment: 0, replayOnNavigationFocus: true, paused: null };
                  obj25[0] = skuId2;
                  obj25[3] = tmp28;
                  const items18 = [tmp84(tmp5(9594), obj25), ];
                  tmp = BackButton;
                  const obj26 = { paddingTop: null };
                  obj26[0] = bound1;
                  items18[1] = tmp84(BackButton, obj26);
                  obj23[2] = items18;
                  tmp89Result = tmp89(tmp5(4184).View, obj23);
                }
                items16[1] = tmp89Result;
                const obj27 = { user: null, userTheme: null, scrollViewRef: null, style: null, navigateToProfileCustomization: null, navigateToCustomStatus: null, navigateToFriends: null, navigateToPremium: null, navigateToShop: null, initialTab: null, animateAvatar: null };
                obj27[0] = user;
                obj27[1] = tmp15;
                obj27[2] = ref;
                const items19 = [tmp10.content, contentAnimatedStyle];
                obj27[3] = items19;
                obj27[4] = navigateToProfileCustomization;
                obj27[5] = navigateToCustomStatus;
                obj27[6] = navigateToFriends;
                obj27[7] = navigateToPremium;
                obj27[8] = navigateToShop;
                obj27[9] = initialTab;
                obj27[10] = !tmp28;
                items16[2] = tmp84(tmp5(16230), obj27);
                items16[3] = tmp84(tmp12(11528).TTIFirstContentfulPaint, { label: "you_screen" });
                obj16[6] = items16;
                items10[2] = tmp89(tmp95, obj16);
                tmp = null != tmp5Result1Result;
                if (tmp) {
                  const obj28 = { frame: null, profileThemeType: null, frameOrder: null, containerWidth: null };
                  obj28[0] = tmp5Result1Result;
                  tmp = UserProfileThemeTypes;
                  obj28[1] = UserProfileThemeTypes.YOU_SCREEN;
                  tmp = tmp5(9032);
                  obj28[2] = tmp12(9018).ProfileFrameLayerOrder.FRONT;
                  obj28[3] = bound;
                  tmp = tmp84(tmp, obj28);
                }
                const obj29 = { children: null };
                items10[3] = tmp;
                items10[4] = tmp85;
                items10[5] = tmp74Result;
                obj13[2] = items10;
                obj12[5] = tmp89(tmp5Result3, obj13);
                obj11[3] = tmp84(tmp12(9003).UserProfileAnalyticsProvider, obj12);
                obj29[0] = tmp84(tmp12(4172).ThemeContextProvider, obj11);
                return tmp84(tmp12(5887).LayerScope, obj29);
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
                const items20 = [tmp84(tmp5(5440), obj31), ];
                tmp = !obj32;
                if (!obj32) {
                  obj32 = { label: null, style: null, textStyle: null };
                  const intl3 = tmp12(1236).intl;
                  obj32[0] = intl3.string(tmp12(1236).t.I5gL2H);
                  const items21 = [tmp10.gifTag, ];
                  dimensionStyle = { top: null };
                  dimensionStyle[0] = bound1;
                  items21[1] = dimensionStyle;
                  obj32[1] = items21;
                  obj32[2] = tmp10.gifTagText;
                  tmp = tmp84(tmp12(10242).Caption, obj32);
                }
                items20[1] = tmp;
                obj30[3] = items20;
                tmp = tmp89(tmp12(5015).PressableOpacity, obj30);
              } else {
                const obj33 = { style: null, accessibilityRole: "image", accessibilityLabel: null, source: null, paused: null };
                obj33[0] = dimensionStyle;
                obj33[2] = formatToPlainStringResult;
                obj33[3] = source;
                obj33[4] = tmp28;
                tmp = tmp84(tmp5(5440), obj33);
              }
              const tmp12Result11 = tmp12(688);
            }
          }
        }
      }
      items5 = [];
      const tmp12Result9 = tmp12(11607);
    }
    bound1 = youSettingsCoachmark;
    const tmp5Result1 = tmp5(9025);
  }
  if (!isFocused) {
    ref3.current = false;
  }
}
({ StyleSheet: c5, View: closure_6, ScrollView } = get_ActivityIndicator);
({ YOU_ACTION_SHEET_TOP_INSET: closure_12, YOU_AVATAR_SIZE: map1, YOU_SCREEN_ID: closure_14, YOU_SCROLL_EVENT_THROTTLE: closure_15 } = YOU_SCREEN_ID);
({ jsx: closure_20, jsxs: closure_21 } = jsxProd);
let closure_22 = importDefaultResult.createAnimatedComponent(_modDef8989);
let closure_23 = createCacheKey.createStyles((marginTop) => {
  let obj = PlatformTypes;
  let xl;
  if (obj.isIOS()) {
    xl = ThemesDefault.radii.xl;
  }
  obj = { borderTopLeftRadius: xl, borderTopRightRadius: null };
  let xl1;
  if (tmpResult.isIOS()) {
    xl1 = ThemesDefault.radii.xl;
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
  obj1 = { flex: 1, flexGrow: 1, position: "relative" };
  const obj2 = { overflow: "hidden" };
  const obj3 = { flex: 1 };
  const tmp = require;
  tmpResult = PlatformTypes;
  const tmp10 = nDefault;
  const tmp10Result = nDefault(ThemesDefault.unsafe_rawColors.WHITE);
  obj4[5] = nDefault(ThemesDefault.unsafe_rawColors.WHITE).alpha(0.9).css();
  obj[5] = obj4;
  const alphaResult = nDefault(ThemesDefault.unsafe_rawColors.WHITE).alpha(0.9);
  obj[6] = { color: ThemesDefault.unsafe_rawColors.PRIMARY_800, fontSize: 14 };
  obj[7] = { marginTop, flex: 1, flexGrow: 1 };
  return obj;
});
let closure_24 = createCacheKey.createStyles(() => {
  let obj = { backButton: null };
  obj = { position: "absolute", marginTop: ThemesDefault.space.PX_4, left: ThemesDefault.space.PX_16, zIndex: 99, alignItems: "center", justifyContent: "center" };
  obj[0] = obj;
  return obj;
});
let closure_25 = importDefaultResult.createAnimatedComponent(ScrollView);
let closure_28 = { code: "function YouScreenTsx1(e){const{scrollPosition}=this.__closure;scrollPosition.set(e.contentOffset.y);}" };
const importDefaultResult1 = importDefaultResult;
let result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/YouScreen.tsx");

export default function YouScreen(initialTab) {
  let stateFromStores;
  let id;
  let memo;
  let callback;
  let obj = stateFromStores(memo[21]);
  let items = [closure_11];
  stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const items1 = [closure_8];
  id = undefined;
  const stateFromStores1 = stateFromStores(memo[21]).useStateFromStores(items1, () => locale.locale);
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  const items2 = [stateFromStores];
  memo = React.useMemo(() => {
    let avatarURL;
    if (stateFromStores != null) {
      avatarURL = stateFromStores.getAvatarURL(null, closure_1_13);
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
      id(memo[66])(id, memo, { type: "you_screen" });
    }
  }, items3);
  let tmpResult = tmp(tmp2[21]);
  const items4 = [closure_7];
  const stateFromStores2 = tmpResult.useStateFromStores(items4, () => {
    let firstWishlistId = null;
    if (null != id) {
      firstWishlistId = closure_1_7.getFirstWishlistId(tmp);
    }
    return firstWishlistId;
  });
  tmpResult = tmp(tmp2[67]);
  const fetchWishlist = tmpResult.useFetchWishlist({ wishlistId: stateFromStores2, userId: id });
  callback = React.useCallback(() => {
    state.setState({ query: "", isActive: false });
    stateFromStores(memo[68]).openUserSettings();
  }, []);
  const callback1 = React.useCallback(() => {
    let obj = stateFromStores(memo[68]);
    obj = { screen: constants.PREMIUM };
    obj.openUserSettings(obj);
  }, []);
  const callback2 = React.useCallback(() => {
    let obj = stateFromStores(memo[69]);
    obj = { analyticsSource: id(memo[45]).YOU_SCREEN, analyticsLocations: null, screen: null };
    const items = [id(memo[45]).YOU_SCREEN];
    obj[1] = items;
    obj[2] = constants2.FEATURED_PAGE;
    const result = obj.openCollectiblesShopMobile(obj);
  }, []);
  const callback3 = React.useCallback((autoFocusElement) => {
    let obj = stateFromStores(memo[68]);
    obj = { screen: constants.PROFILE_CUSTOMIZATION, params: obj };
    obj = { autoFocusElement };
    obj.openUserSettings(obj);
  }, []);
  const callback4 = React.useCallback(() => {
    let obj = stateFromStores(memo[70]);
    obj = { analyticsLocations: null };
    const items = [id(memo[45]).YOU_SCREEN];
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
  const layoutEffect1 = React.useLayoutEffect(() => stateFromStores(memo[71]).trackAppUIViewed(), []);
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