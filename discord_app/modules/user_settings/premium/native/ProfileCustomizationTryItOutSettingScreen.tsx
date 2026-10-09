// === Module 16110: ProfileCustomizationTryItOutSettingScreen ===

// Module 16110 (ProfileCustomizationTryItOutSettingScreen)
import nativeDefault from "native" /* 587 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import DisplayNameStylesUtils from "DisplayNameStylesUtils" /* 1407 */;
import CollectiblesUtils from "CollectiblesUtils" /* 7269 */;
import UserProfileActionCreators from "UserProfileActionCreators" /* 8275 */;
import maybeFetchUserProfileDefault from "maybeFetchUserProfile" /* 8295 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1390 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, ActivityIndicator: hasOwnProperty, StyleSheet } = get_ActivityIndicator);
const Constants = fn(1085);
({ AnalyticEvents: closure_7, AnalyticsPages: closure_8 } = Constants);
const PremiumUpsellTypes = fn(1392).PremiumUpsellTypes;
const jsx = fn(21).jsx;
const createStyles = fn(5091);
let obj2 = { container: null, activityIndicator: null };
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj2.container = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
obj2.activityIndicator = { height: "100%", alignItems: "center", justifyContent: "center" };
let closure_11 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/premium/native/ProfileCustomizationTryItOutSettingScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ProfileCustomizationTryItOutSettingScreen() {
  const cResult = sourceAnalyticsLocations(categories[9]).c(30);
  closure_11();
  let obj = sourceAnalyticsLocations(categories[9]);
  const tmp6 = stateFromStores(categories[10]);
  ({ analyticsLocations, sourceAnalyticsLocations } = stateFromStores(categories[10])(stateFromStores(categories[11]).USER_SETTINGS_TRY_OUT_PREMIUM));
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function o() {
      return currentUser.getCurrentUser();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp8 = items;
    tmp9 = fn;
  } else {
    [tmp8, tmp9] = cResult;
  }
  const tmp6Result = stateFromStores(categories[10])(stateFromStores(categories[11]).USER_SETTINGS_TRY_OUT_PREMIUM);
  stateFromStores = sourceAnalyticsLocations(categories[12]).useStateFromStores(tmp8, tmp9);
  const tmpResult = sourceAnalyticsLocations(categories[12]);
  categories = stateFromStores(categories[13])().categories;
  if (cResult[2] !== analyticsLocations) {
    let obj2 = { isTryItOut: true, analyticsLocations };
    cResult[2] = analyticsLocations;
    cResult[3] = obj2;
    let tmp13 = obj2;
  } else {
    tmp13 = cResult[3];
  }
  const tmp14 = stateFromStores(categories[14])(tmp13);
  const pendingAvatarDecoration = tmp14.pendingAvatarDecoration;
  const setPendingAvatarDecoration = tmp14.setPendingAvatarDecoration;
  if (cResult[4] !== stateFromStores) {
    class A {
      constructor() {
        obj = closure_1;
        if (null != closure_1) {
          tmp = closure_1;
          tmp2 = closure_2;
          num = 80;
          tmp3 = closure_1(closure_2[15]);
          tmp3Result = tmp3(obj.id, obj.getAvatarURL(undefined, 80), { dispatchWait: true });
        }
        return;
      }
    }
    const items1 = [stateFromStores];
    cResult[4] = stateFromStores;
    cResult[5] = A;
    cResult[6] = items1;
    let tmp16 = items1;
  } else {
    class A {
      constructor() {
        obj = closure_1;
        if (null != closure_1) {
          tmp = closure_1;
          tmp2 = closure_2;
          num = 80;
          tmp3 = closure_1(closure_2[15]);
          tmp3Result = tmp3(obj.id, obj.getAvatarURL(undefined, 80), { dispatchWait: true });
        }
        return;
      }
    }
    tmp16 = cResult[6];
  }
  const effect = pendingAvatarDecoration.useEffect(A, tmp16);
  if (cResult[7] === categories) {
    class A {
      constructor() {
        obj = closure_1;
        if (null != closure_1) {
          tmp = closure_1;
          tmp2 = closure_2;
          num = 80;
          tmp3 = closure_1(closure_2[15]);
          tmp3Result = tmp3(obj.id, obj.getAvatarURL(undefined, 80), { dispatchWait: true });
        }
        return;
      }
    }
  }
  class M {
    constructor() {
      if (undefined === pendingAvatarDecoration) {
        tmp = closure_0;
        tmp2 = closure_2;
        obj = closure_0(closure_2[16]);
        tmp3 = categories;
        avatarDecorationsFromCategories = obj.getAvatarDecorationsFromCategories(categories);
        tmp4 = closure_4;
        tmp5 = globalThis;
        _Math = Math;
        _Math2 = Math;
        tmp6 = closure_4(avatarDecorationsFromCategories[Math.floor(Math, Math.random(Math) * avatarDecorationsFromCategories.length)]);
      }
      return;
    }
  }
  const items2 = [pendingAvatarDecoration, setPendingAvatarDecoration, categories];
  cResult[7] = categories;
  cResult[8] = pendingAvatarDecoration;
  cResult[9] = setPendingAvatarDecoration;
  cResult[10] = M;
  cResult[11] = items2;
  const tmp12 = stateFromStores(categories[13])();
}) : (function ProfileCustomizationTryItOutSettingScreen() {
  let tmp = closure_11();
  const tmp2 = stateFromStores;
  const tmp4 = stateFromStores(categories[10]);
  ({ analyticsLocations, sourceAnalyticsLocations } = stateFromStores(categories[10])(stateFromStores(categories[11]).USER_SETTINGS_TRY_OUT_PREMIUM));
  const tmp4Result = stateFromStores(categories[10])(stateFromStores(categories[11]).USER_SETTINGS_TRY_OUT_PREMIUM);
  const items = [visibleEffectOrder];
  stateFromStores = sourceAnalyticsLocations(categories[12]).useStateFromStores(items, () => visibleEffectOrder.getCurrentUser());
  const tmp8 = stateFromStores(categories[13])();
  categories = tmp8.categories;
  const tmp9 = stateFromStores(categories[14])({ isTryItOut: true, analyticsLocations });
  const pendingAvatarDecoration = tmp9.pendingAvatarDecoration;
  const setPendingAvatarDecoration = tmp9.setPendingAvatarDecoration;
  const items1 = [stateFromStores];
  const effect = pendingAvatarDecoration.useEffect(() => {
    if (null != stateFromStores) {
      maybeFetchUserProfileDefault(stateFromStores.id, stateFromStores.getAvatarURL(undefined, 80), { dispatchWait: true });
    }
  }, items1);
  const items2 = [pendingAvatarDecoration, setPendingAvatarDecoration, categories];
  const effect1 = pendingAvatarDecoration.useEffect(() => {
    if (undefined === pendingAvatarDecoration) {
      const avatarDecorationsFromCategories = CollectiblesUtils.getAvatarDecorationsFromCategories(categories);
      const _Math = Math;
      const _Math2 = Math;
      setPendingAvatarDecoration(avatarDecorationsFromCategories[Math.floor(Math, Math.random(Math) * avatarDecorationsFromCategories.length)]);
    }
  }, items2);
  let obj = sourceAnalyticsLocations(categories[12]);
  const visibleFontOrder = sourceAnalyticsLocations(categories[17]).useVisibleFontOrder();
  let obj2 = sourceAnalyticsLocations(categories[17]);
  visibleEffectOrder = sourceAnalyticsLocations(categories[18]).useVisibleEffectOrder();
  const items3 = [visibleFontOrder, visibleEffectOrder];
  const effect2 = pendingAvatarDecoration.useEffect(() => {
    const obj = UserProfileActionCreators;
    const result = obj.setTryItOutDisplayNameStyles(DisplayNameStylesUtils.generateRandomDisplayNameStyles(visibleFontOrder, visibleEffectOrder));
  }, items3);
  const items4 = [sourceAnalyticsLocations];
  const effect3 = pendingAvatarDecoration.useEffect(() => {
    const obj2 = { type: PremiumUpsellTypes.PREMIUM_PROFILE_TRY_IT_OUT, location: { page: constants2.USER_SETTINGS }, location_stack: sourceAnalyticsLocations };
    AnalyticsUtilsDefault.track(constants.PREMIUM_UPSELL_VIEWED, obj2);
  }, items4);
  if (null == stateFromStores) {
    return null;
  } else if (tmp8.isFetching) {
    const obj4 = { style: tmp.activityIndicator, children: null };
    tmp = visibleFontOrder;
    obj4.children = <visibleFontOrder animating size="large" />;
    let tmp18 = <setPendingAvatarDecoration style={tmp.activityIndicator}>{null}</setPendingAvatarDecoration>;
  } else if (undefined !== pendingAvatarDecoration) {
    const obj5 = { value: analyticsLocations, children: null };
    const obj6 = { style: tmp.container, children: null };
    const obj7 = { currentUser: stateFromStores, isTryItOut: true };
    obj6.children = jsx(tmp2(tmp3[22]), { currentUser: stateFromStores, isTryItOut: true });
    obj5.children = <setPendingAvatarDecoration style={tmp.container}>{null}</setPendingAvatarDecoration>;
    tmp18 = jsx(sourceAnalyticsLocations(tmp3[10]).AnalyticsLocationProvider, { value: analyticsLocations, children: null });
  }
  const obj3 = sourceAnalyticsLocations(categories[18]);
});