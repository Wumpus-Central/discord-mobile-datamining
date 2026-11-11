// === Module 18352: ProfileCustomizationTryItOutSettingScreen ===

// Module 18352 (ProfileCustomizationTryItOutSettingScreen)
import nativeDefault from "native" /* 575 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import DisplayNameStylesUtils from "DisplayNameStylesUtils" /* 1393 */;
import maybeFetchUserProfileDefault from "maybeFetchUserProfile" /* 8417 */;
import CollectiblesUtils from "CollectiblesUtils" /* 8431 */;
import UserProfileActionCreators from "UserProfileActionCreators" /* 9333 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1385 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, ActivityIndicator: hasOwnProperty, StyleSheet } = get_ActivityIndicator);
const Constants = fn(1072);
({ AnalyticEvents: metroImportDefault, AnalyticsPages: closure_8 } = Constants);
const EFFECT_ORDER = fn(1394).EFFECT_ORDER;
const PremiumUpsellTypes = fn(1387).PremiumUpsellTypes;
const jsx = fn(21).jsx;
const createStyles = fn(5243);
let obj2 = { container: null, activityIndicator: null };
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj2.container = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
obj2.activityIndicator = { height: "100%", alignItems: "center", justifyContent: "center" };
let closure_12 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/premium/native/ProfileCustomizationTryItOutSettingScreen.tsx");

export default function ProfileCustomizationTryItOutSettingScreen() {
  let tmp = closure_12();
  const tmp2 = stateFromStores;
  const tmp4 = stateFromStores(categories[9]);
  ({ analyticsLocations, sourceAnalyticsLocations } = stateFromStores(categories[9])(stateFromStores(categories[10]).USER_SETTINGS_TRY_OUT_PREMIUM));
  const tmp4Result = stateFromStores(categories[9])(stateFromStores(categories[10]).USER_SETTINGS_TRY_OUT_PREMIUM);
  items = [UserStore];
  stateFromStores = sourceAnalyticsLocations(categories[11]).useStateFromStores(items, () => currentUser.getCurrentUser());
  const tmp8 = stateFromStores(categories[12])();
  categories = tmp8.categories;
  const tmp9 = stateFromStores(categories[13])({ isTryItOut: true, analyticsLocations });
  const pendingAvatarDecoration = tmp9.pendingAvatarDecoration;
  const setPendingAvatarDecoration = tmp9.setPendingAvatarDecoration;
  const items1 = [stateFromStores];
  const effect = pendingAvatarDecoration.useEffect(() => {
    if (null != stateFromStores) {
      maybeFetchUserProfileDefault(stateFromStores.id, stateFromStores.getAvatarURL(undefined, 80), {});
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
  let obj = sourceAnalyticsLocations(categories[11]);
  const visibleFontOrder = sourceAnalyticsLocations(categories[16]).useVisibleFontOrder();
  const items3 = [visibleFontOrder];
  const effect2 = pendingAvatarDecoration.useEffect(() => {
    const obj = UserProfileActionCreators;
    const result = obj.setTryItOutDisplayNameStyles(DisplayNameStylesUtils.generateRandomDisplayNameStyles(visibleFontOrder, EFFECT_ORDER));
  }, items3);
  const items4 = [sourceAnalyticsLocations];
  const effect3 = pendingAvatarDecoration.useEffect(() => {
    const obj2 = { type: PremiumUpsellTypes.PREMIUM_PROFILE_TRY_IT_OUT, location: { page: constants2.USER_SETTINGS }, location_stack: sourceAnalyticsLocations };
    AnalyticsUtilsDefault.track(constants.PREMIUM_UPSELL_VIEWED, obj2);
  }, items4);
  if (null == stateFromStores) {
    return null;
  } else if (tmp8.isFetching) {
    const obj3 = { style: tmp.activityIndicator, children: null };
    tmp = visibleFontOrder;
    obj3.children = <visibleFontOrder animating size="large" />;
    let tmp17 = <setPendingAvatarDecoration style={tmp.activityIndicator}>{null}</setPendingAvatarDecoration>;
  } else if (undefined !== pendingAvatarDecoration) {
    const obj4 = { value: analyticsLocations, children: null };
    const obj5 = { style: tmp.container, children: null };
    const obj6 = { currentUser: stateFromStores, isTryItOut: true };
    obj5.children = jsx(tmp2(tmp3[20]), { currentUser: stateFromStores, isTryItOut: true });
    obj4.children = <setPendingAvatarDecoration style={tmp.container}>{null}</setPendingAvatarDecoration>;
    tmp17 = jsx(sourceAnalyticsLocations(tmp3[9]).AnalyticsLocationProvider, { value: analyticsLocations, children: null });
  }
  let obj2 = sourceAnalyticsLocations(categories[16]);
};