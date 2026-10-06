// === Module 15711: ProfileCustomizationTryItOutV2SettingScreen ===

// Module 15711 (ProfileCustomizationTryItOutV2SettingScreen)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import PremiumConstants from "PremiumConstants" /* 1379 */;
import maybeFetchUserProfileDefault from "maybeFetchUserProfile" /* 7869 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import UserStore from "UserStore" /* 1377 */;
import Constants from "Constants" /* 1085 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, navigation;

let StyleSheet;
let closure_4;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
({ View: closure_4, StyleSheet } = react_native);
({ AnalyticEvents: metroRequire, AnalyticsPages: metroImportDefault } = Constants);
const PremiumUpsellTypes = PremiumConstants.PremiumUpsellTypes;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { container: obj2, headerContent: obj3 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
createStyles = createStyles.createStyles;
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3 = { marginTop: nativeDefault.space.PX_8 };
let closure_10 = createStyles(obj);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let analyticsLocations;
  let closure_0;
  let currentUser;
  let sourceAnalyticsLocations;
  let tmp10;
  let tmp15;
  let tmp18;
  let tmp9;
  let obj = require("react");
  const cResult = obj.c(21);
  const tmp4 = closure_10();
  const tmp = _require;
  _require = tmp4;
  let obj2 = require("useNavigation");
  navigation = obj2.useNavigation();
  const tmp7 = navigation(sourceAnalyticsLocations[11]);
  const tmp7Result = tmp7(navigation(sourceAnalyticsLocations[12]).USER_SETTINGS_TRY_OUT_PREMIUM);
  ({ analyticsLocations, sourceAnalyticsLocations } = tmp7Result);
  const tmp6 = navigation;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function l() {
      return currentUser.getCurrentUser();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp10 = fn;
    tmp9 = items;
  } else {
    [tmp9, tmp10] = cResult;
  }
  const tmpResult = tmp(sourceAnalyticsLocations[13]);
  const stateFromStores = tmpResult.useStateFromStores(tmp9, tmp10);
  const tmp13 = tmp6(sourceAnalyticsLocations[14])();
  let closure_4 = tmp13;
  if (cResult[2] !== stateFromStores) {
    class T {
      constructor() {
        if (null != stateFromStores) {
          const tmp3 = maybeFetchUserProfileDefault;
          tmp3(stateFromStores.id, stateFromStores.getAvatarURL(undefined, 80), { dispatchWait: true });
        }
      }
    }
    const items1 = [stateFromStores];
    cResult[2] = stateFromStores;
    cResult[3] = T;
    cResult[4] = items1;
    tmp15 = items1;
  } else {
    class T {
      constructor() {
        if (null != stateFromStores) {
          const tmp3 = maybeFetchUserProfileDefault;
          tmp3(stateFromStores.id, stateFromStores.getAvatarURL(undefined, 80), { dispatchWait: true });
        }
      }
    }
    tmp15 = cResult[4];
  }
  const effect = stateFromStores.useEffect(T, tmp15);
  const obj4 = stateFromStores;
  if (cResult[5] !== sourceAnalyticsLocations) {
    class T {
      constructor() {
        if (null != stateFromStores) {
          const tmp3 = maybeFetchUserProfileDefault;
          tmp3(stateFromStores.id, stateFromStores.getAvatarURL(undefined, 80), { dispatchWait: true });
        }
      }
    }
    const items2 = [sourceAnalyticsLocations];
    cResult[5] = sourceAnalyticsLocations;
    cResult[6] = tmp19;
    cResult[7] = items2;
    tmp18 = items2;
  } else {
    class T {
      constructor() {
        if (null != stateFromStores) {
          const tmp3 = maybeFetchUserProfileDefault;
          tmp3(stateFromStores.id, stateFromStores.getAvatarURL(undefined, 80), { dispatchWait: true });
        }
      }
    }
    tmp18 = cResult[7];
  }
  const effect1 = obj4.useEffect(tmp19, tmp18);
  if (cResult[8] === navigation) {
    class T {
      constructor() {
        if (null != stateFromStores) {
          const tmp3 = maybeFetchUserProfileDefault;
          tmp3(stateFromStores.id, stateFromStores.getAvatarURL(undefined, 80), { dispatchWait: true });
        }
      }
    }
  }
  const fn2 = function v() {
    let onPress;
    const obj = {
      headerTitle() {
        const Heading = closure_0(sourceAnalyticsLocations[17]).Heading;
        const intl = closure_0(sourceAnalyticsLocations[18]).intl;
        return <Heading variant="redesign/heading-18/bold" color="mobile-text-heading-primary" lineClamp={1} maxFontSizeMultiplier={2} style={closure_1_0.headerContent}>{intl.string(closure_0(sourceAnalyticsLocations[18]).t.PxUx8e)}</Heading>;
      },
      headerRight() {
        const PressableOpacity = closure_0(sourceAnalyticsLocations[19]).PressableOpacity;
        const intl = closure_0(sourceAnalyticsLocations[18]).intl;
        const intl2 = closure_0(sourceAnalyticsLocations[18]).intl;
        ({ size: "md", color: navigation(sourceAnalyticsLocations[7]).colors.ICON_STRONG });
        const DiceIcon = closure_0(sourceAnalyticsLocations[20]).DiceIcon;
        return <PressableOpacity onPress={onPress} accessibilityRole="button" accessibilityLabel={intl.string(closure_0(sourceAnalyticsLocations[18]).t.VzqqFC)} accessibilityHint={intl2.string(closure_0(sourceAnalyticsLocations[18]).t.bBRdiB)} hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }} style={closure_1_0.headerContent}>{null}</PressableOpacity>;
      }
    };
    navigation.setOptions(obj);
  };
  const items3 = [navigation, tmp13, tmp4];
  cResult[8] = navigation;
  cResult[9] = tmp13;
  cResult[10] = tmp4;
  cResult[11] = fn2;
  cResult[12] = items3;
}) : (() => {
  let closure_0;
  let currentUser;
  let sourceAnalyticsLocations;
  const tmp = closure_10();
  _require = tmp;
  let tmp3 = sourceAnalyticsLocations;
  let obj = require("useNavigation");
  navigation = obj.useNavigation();
  const tmp6 = navigation(sourceAnalyticsLocations[11]);
  const tmp6Result = tmp6(navigation(sourceAnalyticsLocations[12]).USER_SETTINGS_TRY_OUT_PREMIUM);
  sourceAnalyticsLocations = tmp6Result.sourceAnalyticsLocations;
  const analyticsLocations = tmp6Result.analyticsLocations;
  let obj2 = require("get initialized");
  const items = [UserStore];
  const stateFromStores = obj2.useStateFromStores(items, () => currentUser.getCurrentUser());
  const tmp9 = navigation(sourceAnalyticsLocations[14])();
  let closure_4 = tmp9;
  const items1 = [stateFromStores];
  const effect = stateFromStores.useEffect(() => {
    if (null != stateFromStores) {
      const tmp3 = maybeFetchUserProfileDefault;
      tmp3(stateFromStores.id, stateFromStores.getAvatarURL(undefined, 80), { dispatchWait: true });
    }
  }, items1);
  const items2 = [sourceAnalyticsLocations];
  const effect1 = stateFromStores.useEffect(() => {
    let obj3;
    const obj2 = { type: PremiumUpsellTypes.PREMIUM_PROFILE_TRY_IT_OUT, location: obj3, location_stack: sourceAnalyticsLocations };
    obj3 = { page: metroImportDefault.USER_SETTINGS };
    const obj = AnalyticsUtilsDefault;
    obj.track(metroRequire.PREMIUM_UPSELL_VIEWED, obj2);
  }, items2);
  const items3 = [navigation, tmp9, tmp];
  const layoutEffect = stateFromStores.useLayoutEffect(() => {
    let onPress;
    const obj = {
      headerTitle() {
        const Heading = closure_0(sourceAnalyticsLocations[17]).Heading;
        const intl = closure_0(sourceAnalyticsLocations[18]).intl;
        return <Heading variant="redesign/heading-18/bold" color="mobile-text-heading-primary" lineClamp={1} maxFontSizeMultiplier={2} style={closure_1_0.headerContent}>{intl.string(closure_0(sourceAnalyticsLocations[18]).t.PxUx8e)}</Heading>;
      },
      headerRight() {
        const PressableOpacity = closure_0(sourceAnalyticsLocations[19]).PressableOpacity;
        const intl = closure_0(sourceAnalyticsLocations[18]).intl;
        const intl2 = closure_0(sourceAnalyticsLocations[18]).intl;
        ({ size: "md", color: navigation(sourceAnalyticsLocations[7]).colors.ICON_STRONG });
        const DiceIcon = closure_0(sourceAnalyticsLocations[20]).DiceIcon;
        return <PressableOpacity onPress={onPress} accessibilityRole="button" accessibilityLabel={intl.string(closure_0(sourceAnalyticsLocations[18]).t.VzqqFC)} accessibilityHint={intl2.string(closure_0(sourceAnalyticsLocations[18]).t.bBRdiB)} hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }} style={closure_1_0.headerContent}>{null}</PressableOpacity>;
      }
    };
    navigation.setOptions(obj);
  }, items3);
  let tmp13 = null;
  const tmp2 = _require;
  if (null != stateFromStores) {
    const AnalyticsLocationProvider = tmp2(tmp3[11]).AnalyticsLocationProvider;
    tmp13 = <AnalyticsLocationProvider value={analyticsLocations}>{null}</AnalyticsLocationProvider>;
  }
  return tmp13;
});
const result = size.fileFinishedImporting("modules/user_settings/premium/native/ProfileCustomizationTryItOutV2SettingScreen.tsx");

export default tmp6;