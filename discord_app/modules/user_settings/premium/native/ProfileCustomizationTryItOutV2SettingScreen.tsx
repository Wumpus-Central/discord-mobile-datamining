// === Module 16169: ProfileCustomizationTryItOutV2SettingScreen ===

// Module 16169 (ProfileCustomizationTryItOutV2SettingScreen)
import nativeDefault from "native" /* 587 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import maybeFetchUserProfileDefault from "maybeFetchUserProfile" /* 8311 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1390 */;

const require = globalThis.__r;

const require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet } = get_ActivityIndicator);
const Constants = fn(1085);
({ AnalyticEvents: metroRequire, AnalyticsPages: closure_7 } = Constants);
const PremiumUpsellTypes = fn(1392).PremiumUpsellTypes;
const jsx = fn(21).jsx;
const createStyles = fn(5092);
let obj2 = { container: null, headerContent: null };
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj2.container = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
obj2.headerContent = { marginTop: nativeDefault.space.PX_8 };
let closure_10 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
const obj4 = { marginTop: nativeDefault.space.PX_8 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/premium/native/ProfileCustomizationTryItOutV2SettingScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ProfileCustomizationTryItOutV2SettingScreen() {
  const cResult = require("c").c(23);
  const tmp4 = closure_10();
  _require = tmp4;
  let obj = require("c");
  const navigation = require("useNavigation").useNavigation();
  let obj2 = require("useNavigation");
  const settingNavigationRoute = require("useSettingNavigationRoute").useSettingNavigationRoute();
  const obj3 = require("useSettingNavigationRoute");
  const tmp7 = navigation;
  const tmp8 = navigation(sourceAnalyticsLocations[12]);
  ({ analyticsLocations, sourceAnalyticsLocations } = navigation(sourceAnalyticsLocations[12])(navigation(sourceAnalyticsLocations[13]).USER_SETTINGS_TRY_OUT_PREMIUM));
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [currentUser];
    let fn = function o() {
      return currentUser.getCurrentUser();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp10 = items;
    tmp11 = fn;
  } else {
    [tmp10, tmp11] = cResult;
  }
  const tmp8Result = navigation(sourceAnalyticsLocations[12])(navigation(sourceAnalyticsLocations[13]).USER_SETTINGS_TRY_OUT_PREMIUM);
  const stateFromStores = require("initialize").useStateFromStores(tmp10, tmp11);
  const tmpResult = require("initialize");
  const shuffleButtonLocation = require("UserProfilePremiumTryItOutMobileRefreshExperiment").useTryItOutMobileRefreshConfig("ProfileCustomizationTryItOutV2SettingScreen").shuffleButtonLocation;
  const tmp14 = tmp7(sourceAnalyticsLocations[16])();
  currentUser = tmp14;
  if (cResult[2] !== stateFromStores) {
    class I {
      constructor() {
        obj = closure_3;
        if (null != closure_3) {
          tmp = closure_1;
          tmp2 = closure_2;
          num = 80;
          tmp3 = closure_1(closure_2[17]);
          tmp3Result = tmp3(obj.id, obj.getAvatarURL(undefined, 80), {});
        }
        return;
      }
    }
    const items1 = [stateFromStores];
    cResult[2] = stateFromStores;
    cResult[3] = I;
    cResult[4] = items1;
    let tmp16 = items1;
  } else {
    class I {
      constructor() {
        obj = closure_3;
        if (null != closure_3) {
          tmp = closure_1;
          tmp2 = closure_2;
          num = 80;
          tmp3 = closure_1(closure_2[17]);
          tmp3Result = tmp3(obj.id, obj.getAvatarURL(undefined, 80), {});
        }
        return;
      }
    }
    tmp16 = cResult[4];
  }
  const effect = stateFromStores.useEffect(I, tmp16);
  if (cResult[5] !== sourceAnalyticsLocations) {
    class U {
      constructor() {
        obj = closure_1(closure_2[18]);
        obj1 = { type: PremiumUpsellTypes.PREMIUM_PROFILE_TRY_IT_OUT, location: null, location_stack: sourceAnalyticsLocations };
        obj4 = { page: AnalyticsPages.USER_SETTINGS };
        obj1.location = obj4;
        trackResult = obj.track(AnalyticEvents.PREMIUM_UPSELL_VIEWED, obj1);
        return;
      }
    }
    const items2 = [sourceAnalyticsLocations];
    cResult[5] = sourceAnalyticsLocations;
    cResult[6] = U;
    cResult[7] = items2;
    let tmp19 = items2;
  } else {
    class U {
      constructor() {
        obj = closure_1(closure_2[18]);
        obj1 = { type: PremiumUpsellTypes.PREMIUM_PROFILE_TRY_IT_OUT, location: null, location_stack: sourceAnalyticsLocations };
        obj4 = { page: AnalyticsPages.USER_SETTINGS };
        obj1.location = obj4;
        trackResult = obj.track(AnalyticEvents.PREMIUM_UPSELL_VIEWED, obj1);
        return;
      }
    }
    tmp19 = cResult[7];
  }
  const effect1 = stateFromStores.useEffect(U, tmp19);
  if (cResult[8] === navigation) {
    class U {
      constructor() {
        obj = closure_1(closure_2[18]);
        obj1 = { type: PremiumUpsellTypes.PREMIUM_PROFILE_TRY_IT_OUT, location: null, location_stack: sourceAnalyticsLocations };
        obj4 = { page: AnalyticsPages.USER_SETTINGS };
        obj1.location = obj4;
        trackResult = obj.track(AnalyticEvents.PREMIUM_UPSELL_VIEWED, obj1);
        return;
      }
    }
  }
  const fn2 = function v() {
    let obj = {
      headerTitle() {
        const obj = { variant: "redesign/heading-18/bold", color: "mobile-text-heading-primary", lineClamp: 1, maxFontSizeMultiplier: 2, style: closure_1_0.headerContent, children: null };
        const intl = closure_0(sourceAnalyticsLocations[20]).intl;
        obj.children = intl.string(closure_0(sourceAnalyticsLocations[20]).t.PxUx8e);
        return jsx(closure_0(sourceAnalyticsLocations[19]).Heading, { variant: "redesign/heading-18/bold", color: "mobile-text-heading-primary", lineClamp: 1, maxFontSizeMultiplier: 2, style: closure_1_0.headerContent, children: null });
      },
      headerRight: null
    };
    let fn;
    if ("inline" !== shuffleButtonLocation) {
      fn = () => {
        const obj = { onPress, accessibilityRole: "button", accessibilityLabel: null, accessibilityHint: null, hitSlop: null, style: null, children: null };
        const intl = closure_0(sourceAnalyticsLocations[20]).intl;
        obj.accessibilityLabel = intl.string(closure_0(sourceAnalyticsLocations[20]).t.VzqqFC);
        const intl2 = closure_0(sourceAnalyticsLocations[20]).intl;
        obj.accessibilityHint = intl2.string(closure_0(sourceAnalyticsLocations[20]).t.bBRdiB);
        obj.hitSlop = { top: 8, bottom: 8, left: 8, right: 8 };
        obj.style = closure_1_0.headerContent;
        obj.children = jsx(closure_0(sourceAnalyticsLocations[22]).DiceIcon, { size: "md", color: navigation(sourceAnalyticsLocations[7]).colors.ICON_STRONG });
        return jsx(closure_0(sourceAnalyticsLocations[21]).PressableOpacity, { onPress, accessibilityRole: "button", accessibilityLabel: null, accessibilityHint: null, hitSlop: null, style: null, children: null });
      };
    }
    obj.headerRight = fn;
    navigation.setOptions(obj);
  };
  const items3 = [navigation, tmp14, shuffleButtonLocation, tmp4];
  cResult[8] = navigation;
  cResult[9] = tmp14;
  cResult[10] = shuffleButtonLocation;
  cResult[11] = tmp4;
  cResult[12] = fn2;
  cResult[13] = items3;
  const tmpResult2 = require("UserProfilePremiumTryItOutMobileRefreshExperiment");
}) : (function ProfileCustomizationTryItOutV2SettingScreen() {
  const tmp = closure_10();
  _require = tmp;
  const navigation = require("useNavigation").useNavigation();
  let obj = require("useNavigation");
  const tmp2 = _require;
  const settingNavigationRoute = require("useSettingNavigationRoute").useSettingNavigationRoute();
  let obj2 = require("useSettingNavigationRoute");
  const tmp6 = navigation;
  const tmp7Result = navigation(sourceAnalyticsLocations[12])(navigation(sourceAnalyticsLocations[13]).USER_SETTINGS_TRY_OUT_PREMIUM);
  sourceAnalyticsLocations = tmp7Result.sourceAnalyticsLocations;
  const tmp7 = navigation(sourceAnalyticsLocations[12]);
  const items = [currentUser];
  const stateFromStores = require("initialize").useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj3 = require("initialize");
  const shuffleButtonLocation = require("UserProfilePremiumTryItOutMobileRefreshExperiment").useTryItOutMobileRefreshConfig("ProfileCustomizationTryItOutV2SettingScreen").shuffleButtonLocation;
  const tmp10 = navigation(sourceAnalyticsLocations[16])();
  currentUser = tmp10;
  const items1 = [stateFromStores];
  const effect = stateFromStores.useEffect(() => {
    if (null != stateFromStores) {
      maybeFetchUserProfileDefault(stateFromStores.id, stateFromStores.getAvatarURL(undefined, 80), {});
    }
  }, items1);
  const items2 = [sourceAnalyticsLocations];
  const effect1 = stateFromStores.useEffect(() => {
    const obj2 = { type: PremiumUpsellTypes.PREMIUM_PROFILE_TRY_IT_OUT, location: { page: constants2.USER_SETTINGS }, location_stack: sourceAnalyticsLocations };
    AnalyticsUtilsDefault.track(constants.PREMIUM_UPSELL_VIEWED, obj2);
  }, items2);
  const items3 = [navigation, tmp10, shuffleButtonLocation, tmp];
  const layoutEffect = stateFromStores.useLayoutEffect(() => {
    let obj = {
      headerTitle() {
        const obj = { variant: "redesign/heading-18/bold", color: "mobile-text-heading-primary", lineClamp: 1, maxFontSizeMultiplier: 2, style: closure_1_0.headerContent, children: null };
        const intl = closure_0(sourceAnalyticsLocations[20]).intl;
        obj.children = intl.string(closure_0(sourceAnalyticsLocations[20]).t.PxUx8e);
        return jsx(closure_0(sourceAnalyticsLocations[19]).Heading, { variant: "redesign/heading-18/bold", color: "mobile-text-heading-primary", lineClamp: 1, maxFontSizeMultiplier: 2, style: closure_1_0.headerContent, children: null });
      },
      headerRight: null
    };
    let fn;
    if ("inline" !== shuffleButtonLocation) {
      fn = () => {
        const obj = { onPress, accessibilityRole: "button", accessibilityLabel: null, accessibilityHint: null, hitSlop: null, style: null, children: null };
        const intl = closure_0(sourceAnalyticsLocations[20]).intl;
        obj.accessibilityLabel = intl.string(closure_0(sourceAnalyticsLocations[20]).t.VzqqFC);
        const intl2 = closure_0(sourceAnalyticsLocations[20]).intl;
        obj.accessibilityHint = intl2.string(closure_0(sourceAnalyticsLocations[20]).t.bBRdiB);
        obj.hitSlop = { top: 8, bottom: 8, left: 8, right: 8 };
        obj.style = closure_1_0.headerContent;
        obj.children = jsx(closure_0(sourceAnalyticsLocations[22]).DiceIcon, { size: "md", color: navigation(sourceAnalyticsLocations[7]).colors.ICON_STRONG });
        return jsx(closure_0(sourceAnalyticsLocations[21]).PressableOpacity, { onPress, accessibilityRole: "button", accessibilityLabel: null, accessibilityHint: null, hitSlop: null, style: null, children: null });
      };
    }
    obj.headerRight = fn;
    navigation.setOptions(obj);
  }, items3);
  let tmp15Result = null;
  if (null != stateFromStores) {
    const obj5 = { value: tmp7Result.analyticsLocations, children: null };
    const obj6 = { style: tmp.container, children: null };
    const obj7 = { currentUser: stateFromStores, initialTarget: null };
    const params = settingNavigationRoute.params;
    let initialTarget;
    if (params != null) {
      initialTarget = params.initialTarget;
    }
    obj7.initialTarget = initialTarget;
    obj6.children = jsx(tmp6(tmp3[23]), { currentUser: stateFromStores, initialTarget: null });
    obj5.children = <shuffleButtonLocation style={tmp.container}>{null}</shuffleButtonLocation>;
    tmp15Result = jsx(tmp2(tmp3[12]).AnalyticsLocationProvider, { value: tmp7Result.analyticsLocations, children: null });
    const tmp6Result = tmp6(tmp3[23]);
  }
  return tmp15Result;
});