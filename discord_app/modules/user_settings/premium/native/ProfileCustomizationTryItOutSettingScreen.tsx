// === Module 15803: ProfileCustomizationTryItOutSettingScreen ===

// Module 15803 (ProfileCustomizationTryItOutSettingScreen)
import ThemesDefault from "Themes" /* 576 */;
import closure_3 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_6 from "mergeGuildAvatar" /* 1371 */;
import ME from "ME" /* 1074 */;
import { PremiumUpsellTypes } from "GuildFeatures" /* 1373 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;

const require = arg1;
({ View: c4, ActivityIndicator: c5, StyleSheet } = get_ActivityIndicator);
({ AnalyticEvents: error, AnalyticsPages: closure_8 } = ME);
createCacheKey = { container: null, activityIndicator: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWER };
const merged = Object.assign(StyleSheet.absoluteFillObject);
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { height: "100%", alignItems: "center", justifyContent: "center" };
let closure_11 = createCacheKey.createStyles(createCacheKey);
let result = require("set").fileFinishedImporting("modules/user_settings/premium/native/ProfileCustomizationTryItOutSettingScreen.tsx");

export default function ProfileCustomizationTryItOutSettingScreen() {
  let tmp = callback();
  const tmp2 = stateFromStores;
  const tmp4 = stateFromStores(categories[8]);
  ({ analyticsLocations, sourceAnalyticsLocations } = stateFromStores(categories[8])(stateFromStores(categories[9]).USER_SETTINGS_TRY_OUT_PREMIUM));
  let obj = sourceAnalyticsLocations(categories[10]);
  const items = [visibleEffectOrder];
  stateFromStores = obj.useStateFromStores(items, () => visibleEffectOrder.getCurrentUser());
  const tmp8 = stateFromStores(categories[11])();
  categories = tmp8.categories;
  const tmp9 = stateFromStores(categories[12])({ isTryItOut: true, analyticsLocations });
  const pendingAvatarDecoration = tmp9.pendingAvatarDecoration;
  const setPendingAvatarDecoration = tmp9.setPendingAvatarDecoration;
  const items1 = [stateFromStores];
  const effect = pendingAvatarDecoration.useEffect(() => {
    if (null != stateFromStores) {
      stateFromStores(categories[13])(obj.id, obj.getAvatarURL(undefined, 80), { dispatchWait: true });
      const tmp3 = stateFromStores(categories[13]);
    }
  }, items1);
  const items2 = [pendingAvatarDecoration, setPendingAvatarDecoration, categories];
  const effect1 = pendingAvatarDecoration.useEffect(() => {
    if (undefined === pendingAvatarDecoration) {
      const avatarDecorationsFromCategories = sourceAnalyticsLocations(categories[14]).getAvatarDecorationsFromCategories(categories);
      const _Math = Math;
      const _Math2 = Math;
      setPendingAvatarDecoration(avatarDecorationsFromCategories[Math.floor(Math, Math.random(Math) * avatarDecorationsFromCategories.length)]);
      const obj = sourceAnalyticsLocations(categories[14]);
    }
  }, items2);
  obj1 = sourceAnalyticsLocations(categories[15]);
  const visibleFontOrder = obj1.useVisibleFontOrder();
  let obj2 = sourceAnalyticsLocations(categories[16]);
  visibleEffectOrder = obj2.useVisibleEffectOrder();
  const items3 = [visibleFontOrder, visibleEffectOrder];
  const effect2 = pendingAvatarDecoration.useEffect(() => {
    const obj = sourceAnalyticsLocations(categories[17]);
    const result = obj.setTryItOutDisplayNameStyles(sourceAnalyticsLocations(categories[18]).generateRandomDisplayNameStyles(visibleFontOrder, visibleEffectOrder));
  }, items3);
  const items4 = [sourceAnalyticsLocations];
  const effect3 = pendingAvatarDecoration.useEffect(() => {
    let obj = stateFromStores(categories[19]);
    obj = { type: closure_1_9.PREMIUM_PROFILE_TRY_IT_OUT, location: obj, location_stack: sourceAnalyticsLocations };
    obj = { page: closure_1_8.USER_SETTINGS };
    obj.track(closure_1_7.PREMIUM_UPSELL_VIEWED, obj);
  }, items4);
  if (null == stateFromStores) {
    return null;
  } else if (tmp8.isFetching) {
    obj = { style: null, children: null };
    obj[0] = tmp.activityIndicator;
    tmp = visibleFontOrder;
    obj[1] = <visibleFontOrder animating size="large" />;
    let tmp18 = <setPendingAvatarDecoration style={null}>{null}</setPendingAvatarDecoration>;
  } else if (undefined !== pendingAvatarDecoration) {
    obj = { value: null, children: null };
    obj[0] = analyticsLocations;
    obj1 = { style: null, children: null };
    obj1[0] = tmp.container;
    obj2 = { currentUser: null, isTryItOut: true };
    obj2[0] = stateFromStores;
    obj1[1] = jsx(tmp2(tmp3[20]), { currentUser: null, isTryItOut: true });
    obj[1] = <setPendingAvatarDecoration style={null}>{null}</setPendingAvatarDecoration>;
    tmp18 = jsx(sourceAnalyticsLocations(tmp3[8]).AnalyticsLocationProvider, { value: null, children: null });
  }
};