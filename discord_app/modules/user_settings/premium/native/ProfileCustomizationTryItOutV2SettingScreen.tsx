// === Module 16107: ProfileCustomizationTryItOutV2SettingScreen ===

// Module 16107 (ProfileCustomizationTryItOutV2SettingScreen)
import nativeDefault from "native" /* 587 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import maybeFetchUserProfileDefault from "maybeFetchUserProfile" /* 8295 */;
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
const createStyles = fn(5091);
let obj2 = { container: null, headerContent: null };
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj2.container = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
obj2.headerContent = { marginTop: nativeDefault.space.PX_8 };
let closure_10 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = { marginTop: nativeDefault.space.PX_8 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/premium/native/ProfileCustomizationTryItOutV2SettingScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ProfileCustomizationTryItOutV2SettingScreen() {
  const cResult = require("c").c(22);
  const tmp4 = closure_10();
  _require = tmp4;
  let obj = require("c");
  const tmp = _require;
  const navigation = require("useNavigation").useNavigation();
  let obj2 = require("useNavigation");
  const settingNavigationRoute = require("useSettingNavigationRoute").useSettingNavigationRoute();
  const obj3 = require("useSettingNavigationRoute");
  const tmp7 = navigation;
  const tmp8 = navigation(sourceAnalyticsLocations[12]);
  ({ analyticsLocations, sourceAnalyticsLocations } = navigation(sourceAnalyticsLocations[12])(navigation(sourceAnalyticsLocations[13]).USER_SETTINGS_TRY_OUT_PREMIUM));
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function o() {
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
  const stateFromStores = tmp(sourceAnalyticsLocations[14]).useStateFromStores(tmp10, tmp11);
  const tmp14 = tmp7(sourceAnalyticsLocations[15])();
  closure_4 = tmp14;
  if (cResult[2] !== stateFromStores) {
    const fn2 = function f() {
      if (null != stateFromStores) {
        maybeFetchUserProfileDefault(stateFromStores.id, stateFromStores.getAvatarURL(undefined, 80), { dispatchWait: true });
      }
    };
    const items1 = [stateFromStores];
    cResult[2] = stateFromStores;
    cResult[3] = fn2;
    cResult[4] = items1;
    let tmp16 = items1;
    let tmp15 = fn2;
  } else {
    tmp15 = cResult[3];
    tmp16 = cResult[4];
  }
  const effect = stateFromStores.useEffect(tmp15, tmp16);
  if (cResult[5] !== sourceAnalyticsLocations) {
    class I {
      constructor() {
        obj = closure_1(closure_2[17]);
        obj1 = { type: PremiumUpsellTypes.PREMIUM_PROFILE_TRY_IT_OUT, location: null, location_stack: sourceAnalyticsLocations };
        obj4 = { page: AnalyticsPages.USER_SETTINGS };
        obj1.location = obj4;
        trackResult = obj.track(AnalyticEvents.PREMIUM_UPSELL_VIEWED, obj1);
        return;
      }
    }
    const items2 = [sourceAnalyticsLocations];
    cResult[5] = sourceAnalyticsLocations;
    cResult[6] = I;
    cResult[7] = items2;
    let tmp19 = items2;
  } else {
    class I {
      constructor() {
        obj = closure_1(closure_2[17]);
        obj1 = { type: PremiumUpsellTypes.PREMIUM_PROFILE_TRY_IT_OUT, location: null, location_stack: sourceAnalyticsLocations };
        obj4 = { page: AnalyticsPages.USER_SETTINGS };
        obj1.location = obj4;
        trackResult = obj.track(AnalyticEvents.PREMIUM_UPSELL_VIEWED, obj1);
        return;
      }
    }
    tmp19 = cResult[7];
  }
  const effect1 = stateFromStores.useEffect(I, tmp19);
  if (cResult[8] === navigation) {
    class I {
      constructor() {
        obj = closure_1(closure_2[17]);
        obj1 = { type: PremiumUpsellTypes.PREMIUM_PROFILE_TRY_IT_OUT, location: null, location_stack: sourceAnalyticsLocations };
        obj4 = { page: AnalyticsPages.USER_SETTINGS };
        obj1.location = obj4;
        trackResult = obj.track(AnalyticEvents.PREMIUM_UPSELL_VIEWED, obj1);
        return;
      }
    }
  }
  class O {
    constructor() {
      obj = {
        headerTitle() {
              const obj = { variant: "redesign/heading-18/bold", color: "mobile-text-heading-primary", lineClamp: 1, maxFontSizeMultiplier: 2, style: closure_1_0.headerContent, children: null };
              const intl = closure_0(sourceAnalyticsLocations[19]).intl;
              obj.children = intl.string(closure_0(sourceAnalyticsLocations[19]).t.PxUx8e);
              return jsx(closure_0(sourceAnalyticsLocations[18]).Heading, { variant: "redesign/heading-18/bold", color: "mobile-text-heading-primary", lineClamp: 1, maxFontSizeMultiplier: 2, style: closure_1_0.headerContent, children: null });
            },
        headerRight() {
              const obj = { onPress, accessibilityRole: "button", accessibilityLabel: null, accessibilityHint: null, hitSlop: null, style: null, children: null };
              const intl = closure_0(sourceAnalyticsLocations[19]).intl;
              obj.accessibilityLabel = intl.string(closure_0(sourceAnalyticsLocations[19]).t.VzqqFC);
              const intl2 = closure_0(sourceAnalyticsLocations[19]).intl;
              obj.accessibilityHint = intl2.string(closure_0(sourceAnalyticsLocations[19]).t.bBRdiB);
              obj.hitSlop = { top: 8, bottom: 8, left: 8, right: 8 };
              obj.style = closure_1_0.headerContent;
              obj.children = jsx(closure_0(sourceAnalyticsLocations[21]).DiceIcon, { size: "md", color: navigation(sourceAnalyticsLocations[7]).colors.ICON_STRONG });
              return jsx(closure_0(sourceAnalyticsLocations[20]).PressableOpacity, { onPress, accessibilityRole: "button", accessibilityLabel: null, accessibilityHint: null, hitSlop: null, style: null, children: null });
            }
      };
      setOptionsResult = closure_1.setOptions(obj);
      return;
    }
  }
  const items3 = [navigation, tmp14, tmp4];
  cResult[8] = navigation;
  cResult[9] = tmp14;
  cResult[10] = tmp4;
  cResult[11] = O;
  cResult[12] = items3;
  const tmpResult = tmp(sourceAnalyticsLocations[14]);
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
  const items = [UserStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => currentUser.getCurrentUser());
  const tmp10 = navigation(sourceAnalyticsLocations[15])();
  closure_4 = tmp10;
  const items1 = [stateFromStores];
  const effect = stateFromStores.useEffect(() => {
    if (null != stateFromStores) {
      maybeFetchUserProfileDefault(stateFromStores.id, stateFromStores.getAvatarURL(undefined, 80), { dispatchWait: true });
    }
  }, items1);
  const items2 = [sourceAnalyticsLocations];
  const effect1 = stateFromStores.useEffect(() => {
    const obj2 = { type: PremiumUpsellTypes.PREMIUM_PROFILE_TRY_IT_OUT, location: { page: constants2.USER_SETTINGS }, location_stack: sourceAnalyticsLocations };
    AnalyticsUtilsDefault.track(constants.PREMIUM_UPSELL_VIEWED, obj2);
  }, items2);
  const items3 = [navigation, tmp10, tmp];
  const layoutEffect = stateFromStores.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle() {
        const obj = { variant: "redesign/heading-18/bold", color: "mobile-text-heading-primary", lineClamp: 1, maxFontSizeMultiplier: 2, style: closure_1_0.headerContent, children: null };
        const intl = closure_0(sourceAnalyticsLocations[19]).intl;
        obj.children = intl.string(closure_0(sourceAnalyticsLocations[19]).t.PxUx8e);
        return jsx(closure_0(sourceAnalyticsLocations[18]).Heading, { variant: "redesign/heading-18/bold", color: "mobile-text-heading-primary", lineClamp: 1, maxFontSizeMultiplier: 2, style: closure_1_0.headerContent, children: null });
      },
      headerRight() {
        const obj = { onPress, accessibilityRole: "button", accessibilityLabel: null, accessibilityHint: null, hitSlop: null, style: null, children: null };
        const intl = closure_0(sourceAnalyticsLocations[19]).intl;
        obj.accessibilityLabel = intl.string(closure_0(sourceAnalyticsLocations[19]).t.VzqqFC);
        const intl2 = closure_0(sourceAnalyticsLocations[19]).intl;
        obj.accessibilityHint = intl2.string(closure_0(sourceAnalyticsLocations[19]).t.bBRdiB);
        obj.hitSlop = { top: 8, bottom: 8, left: 8, right: 8 };
        obj.style = closure_1_0.headerContent;
        obj.children = jsx(closure_0(sourceAnalyticsLocations[21]).DiceIcon, { size: "md", color: navigation(sourceAnalyticsLocations[7]).colors.ICON_STRONG });
        return jsx(closure_0(sourceAnalyticsLocations[20]).PressableOpacity, { onPress, accessibilityRole: "button", accessibilityLabel: null, accessibilityHint: null, hitSlop: null, style: null, children: null });
      }
    });
  }, items3);
  let tmp15Result = null;
  if (null != stateFromStores) {
    const obj4 = { value: tmp7Result.analyticsLocations, children: null };
    const obj5 = { style: tmp.container, children: null };
    const obj6 = { currentUser: stateFromStores, initialTarget: null };
    const params = settingNavigationRoute.params;
    let initialTarget;
    if (params != null) {
      initialTarget = params.initialTarget;
    }
    obj6.initialTarget = initialTarget;
    obj5.children = jsx(tmp6(tmp3[22]), { currentUser: stateFromStores, initialTarget: null });
    obj4.children = <closure_4 style={tmp.container}>{null}</closure_4>;
    tmp15Result = jsx(tmp2(tmp3[12]).AnalyticsLocationProvider, { value: tmp7Result.analyticsLocations, children: null });
    const tmp6Result = tmp6(tmp3[22]);
  }
  return tmp15Result;
});