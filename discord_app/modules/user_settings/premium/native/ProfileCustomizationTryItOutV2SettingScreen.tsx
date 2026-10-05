// === Module 15697: ProfileCustomizationTryItOutV2SettingScreen ===

// Module 15697 (ProfileCustomizationTryItOutV2SettingScreen)
import nativeDefault from "native" /* 587 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import maybeFetchUserProfileDefault from "maybeFetchUserProfile" /* 7858 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1377 */;

const require = globalThis.__r;

const require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet } = get_ActivityIndicator);
const Constants = fn(1085);
({ AnalyticEvents: metroRequire, AnalyticsPages: closure_7 } = Constants);
const PremiumUpsellTypes = fn(1379).PremiumUpsellTypes;
const jsx = fn(21).jsx;
const createStyles = fn(4890);
let obj2 = { container: null, headerTitle: null };
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj2.container = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
obj2.headerTitle = { marginTop: nativeDefault.space.PX_8 };
let closure_10 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = { marginTop: nativeDefault.space.PX_8 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/premium/native/ProfileCustomizationTryItOutV2SettingScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let AnalyticsLocationProvider = _require;
  let tmp = sourceAnalyticsLocations;
  const cResult = require("c").c(20);
  let tmp3 = closure_10();
  _require = tmp3;
  let obj = require("c");
  const navigation = require("useNavigation").useNavigation();
  let obj2 = require("useNavigation");
  const tmp5 = navigation(sourceAnalyticsLocations[11]);
  ({ analyticsLocations, sourceAnalyticsLocations } = navigation(sourceAnalyticsLocations[11])(navigation(sourceAnalyticsLocations[12]).USER_SETTINGS_TRY_OUT_PREMIUM));
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function l() {
      return currentUser.getCurrentUser();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp7 = items;
    tmp8 = fn;
  } else {
    [tmp7, tmp8] = cResult;
  }
  const result = AnalyticsLocationProvider(tmp[13]);
  const stateFromStores = result.useStateFromStores(tmp7, tmp8);
  if (cResult[2] !== stateFromStores) {
    const fn2 = function h() {
      if (null != stateFromStores) {
        maybeFetchUserProfileDefault(stateFromStores.id, stateFromStores.getAvatarURL(undefined, 80), { dispatchWait: true });
      }
    };
    const items1 = [stateFromStores];
    cResult[2] = stateFromStores;
    cResult[3] = fn2;
    cResult[4] = items1;
    let tmp12 = items1;
    let tmp11 = fn2;
  } else {
    tmp11 = cResult[3];
    tmp12 = cResult[4];
  }
  const effect = stateFromStores.useEffect(tmp11, tmp12);
  if (cResult[5] !== sourceAnalyticsLocations) {
    class P {
      constructor() {
        obj = closure_1(closure_2[15]);
        obj1 = { type: PremiumUpsellTypes.PREMIUM_PROFILE_TRY_IT_OUT, location: null, location_stack: sourceAnalyticsLocations };
        obj4 = { page: AnalyticsPages.USER_SETTINGS };
        obj1.location = obj4;
        trackResult = obj.track(AnalyticEvents.PREMIUM_UPSELL_VIEWED, obj1);
        return;
      }
    }
    const items2 = [sourceAnalyticsLocations];
    cResult[5] = sourceAnalyticsLocations;
    cResult[6] = P;
    cResult[7] = items2;
    let tmp15 = items2;
  } else {
    class P {
      constructor() {
        obj = closure_1(closure_2[15]);
        obj1 = { type: PremiumUpsellTypes.PREMIUM_PROFILE_TRY_IT_OUT, location: null, location_stack: sourceAnalyticsLocations };
        obj4 = { page: AnalyticsPages.USER_SETTINGS };
        obj1.location = obj4;
        trackResult = obj.track(AnalyticEvents.PREMIUM_UPSELL_VIEWED, obj1);
        return;
      }
    }
    tmp15 = cResult[7];
  }
  const effect1 = obj4.useEffect(P, tmp15);
  if (cResult[8] === navigation) {
    class P {
      constructor() {
        obj = closure_1(closure_2[15]);
        obj1 = { type: PremiumUpsellTypes.PREMIUM_PROFILE_TRY_IT_OUT, location: null, location_stack: sourceAnalyticsLocations };
        obj4 = { page: AnalyticsPages.USER_SETTINGS };
        obj1.location = obj4;
        trackResult = obj.track(AnalyticEvents.PREMIUM_UPSELL_VIEWED, obj1);
        return;
      }
    }
    const layoutEffect = obj4.useLayoutEffect(L, items3);
    if (null == stateFromStores) {
      class P {
        constructor() {
          obj = closure_1(closure_2[15]);
          obj1 = { type: PremiumUpsellTypes.PREMIUM_PROFILE_TRY_IT_OUT, location: null, location_stack: sourceAnalyticsLocations };
          obj4 = { page: AnalyticsPages.USER_SETTINGS };
          obj1.location = obj4;
          trackResult = obj.track(AnalyticEvents.PREMIUM_UPSELL_VIEWED, obj1);
          return;
        }
      }
    } else {
      class P {
        constructor() {
          obj = closure_1(closure_2[15]);
          obj1 = { type: PremiumUpsellTypes.PREMIUM_PROFILE_TRY_IT_OUT, location: null, location_stack: sourceAnalyticsLocations };
          obj4 = { page: AnalyticsPages.USER_SETTINGS };
          obj1.location = obj4;
          trackResult = obj.track(AnalyticEvents.PREMIUM_UPSELL_VIEWED, obj1);
          return;
        }
      }
      if (cResult[14] === tmp3.container) {
        class P {
          constructor() {
            obj = closure_1(closure_2[15]);
            obj1 = { type: PremiumUpsellTypes.PREMIUM_PROFILE_TRY_IT_OUT, location: null, location_stack: sourceAnalyticsLocations };
            obj4 = { page: AnalyticsPages.USER_SETTINGS };
            obj1.location = obj4;
            trackResult = obj.track(AnalyticEvents.PREMIUM_UPSELL_VIEWED, obj1);
            return;
          }
        }
        if (cResult[17] === analyticsLocations) {
          class P {
            constructor() {
              obj = closure_1(closure_2[15]);
              obj1 = { type: PremiumUpsellTypes.PREMIUM_PROFILE_TRY_IT_OUT, location: null, location_stack: sourceAnalyticsLocations };
              obj4 = { page: AnalyticsPages.USER_SETTINGS };
              obj1.location = obj4;
              trackResult = obj.track(AnalyticEvents.PREMIUM_UPSELL_VIEWED, obj1);
              return;
            }
          }
        }
        AnalyticsLocationProvider = AnalyticsLocationProvider(tmp[11]).AnalyticsLocationProvider;
        const obj3 = { value: analyticsLocations, children: tmp20 };
        tmp = <AnalyticsLocationProvider value={analyticsLocations}>{tmp20}</AnalyticsLocationProvider>;
        cResult[17] = analyticsLocations;
        cResult[18] = tmp20;
        cResult[19] = tmp;
      }
      const obj5 = { style: tmp3.container, children: tmp19 };
      const tmp23 = <closure_4 style={tmp3.container}>{tmp19}</closure_4>;
      cResult[14] = tmp3.container;
      cResult[15] = tmp19;
      cResult[16] = tmp23;
    }
  }
  class L {
    constructor() {
      obj = {
        headerTitle() {
              const obj = { variant: "redesign/heading-18/bold", color: "mobile-text-heading-primary", lineClamp: 1, maxFontSizeMultiplier: 2, style: closure_1_0.headerTitle, children: null };
              const intl = closure_0(sourceAnalyticsLocations[17]).intl;
              obj.children = intl.string(closure_0(sourceAnalyticsLocations[17]).t.PxUx8e);
              return jsx(closure_0(sourceAnalyticsLocations[16]).Heading, { variant: "redesign/heading-18/bold", color: "mobile-text-heading-primary", lineClamp: 1, maxFontSizeMultiplier: 2, style: closure_1_0.headerTitle, children: null });
            }
      };
      setOptionsResult = closure_1.setOptions(obj);
      return;
    }
  }
  items3 = [navigation, tmp3];
  cResult[8] = navigation;
  cResult[9] = tmp3;
  cResult[10] = L;
  cResult[11] = items3;
  const tmp5Result = navigation(sourceAnalyticsLocations[11])(navigation(sourceAnalyticsLocations[12]).USER_SETTINGS_TRY_OUT_PREMIUM);
}) : (() => {
  const tmp = closure_10();
  _require = tmp;
  const navigation = require("useNavigation").useNavigation();
  let obj = require("useNavigation");
  const tmp2 = _require;
  const tmp5 = navigation;
  const tmp6Result = navigation(sourceAnalyticsLocations[11])(navigation(sourceAnalyticsLocations[12]).USER_SETTINGS_TRY_OUT_PREMIUM);
  sourceAnalyticsLocations = tmp6Result.sourceAnalyticsLocations;
  const tmp6 = navigation(sourceAnalyticsLocations[11]);
  const items = [UserStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => currentUser.getCurrentUser());
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
  const items3 = [navigation, tmp];
  const layoutEffect = stateFromStores.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle() {
        const obj = { variant: "redesign/heading-18/bold", color: "mobile-text-heading-primary", lineClamp: 1, maxFontSizeMultiplier: 2, style: closure_1_0.headerTitle, children: null };
        const intl = closure_0(sourceAnalyticsLocations[17]).intl;
        obj.children = intl.string(closure_0(sourceAnalyticsLocations[17]).t.PxUx8e);
        return jsx(closure_0(sourceAnalyticsLocations[16]).Heading, { variant: "redesign/heading-18/bold", color: "mobile-text-heading-primary", lineClamp: 1, maxFontSizeMultiplier: 2, style: closure_1_0.headerTitle, children: null });
      }
    });
  }, items3);
  let tmp12 = null;
  if (null != stateFromStores) {
    const obj3 = { value: tmp6Result.analyticsLocations, children: null };
    const obj4 = { style: tmp.container, children: null };
    const obj5 = { currentUser: stateFromStores };
    obj4.children = jsx(tmp5(tmp3[18]), { currentUser: stateFromStores });
    obj3.children = <closure_4 style={tmp.container}>{null}</closure_4>;
    tmp12 = jsx(tmp2(tmp3[11]).AnalyticsLocationProvider, { value: tmp6Result.analyticsLocations, children: null });
  }
  return tmp12;
});