// discord_app/modules/user_settings/premium/native/ProfileCustomizationTryItOutSettingScreen.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import DisplayNameStylesUtils from "../../../display_name_styles/DisplayNameStylesUtils.tsx";
import CollectiblesUtils from "../../../collectibles/CollectiblesUtils.tsx";
import UserProfileActionCreators from "../../../user_profile/UserProfileActionCreators.tsx";
import maybeFetchUserProfileDefault from "../../../user_profile/maybeFetchUserProfile.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import UserStore from "../../../../stores/UserStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, ActivityIndicator: hasOwnProperty, StyleSheet } = get_ActivityIndicator);
const Constants = fn(1074);
({ AnalyticEvents: closure_7, AnalyticsPages: closure_8 } = Constants);
const PremiumUpsellTypes = fn(1373).PremiumUpsellTypes;
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { container: null, activityIndicator: null };
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
const merged = Object.assign(StyleSheet.absoluteFillObject);
createStyles.container = createStyles;
createStyles.activityIndicator = { height: "100%", alignItems: "center", justifyContent: "center" };
let closure_11 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/user_settings/premium/native/ProfileCustomizationTryItOutSettingScreen.tsx",
);

export default function ProfileCustomizationTryItOutSettingScreen() {
  let tmp = closure_11();
  const tmp2 = stateFromStores;
  const tmp4 = stateFromStores(categories[8]);
  ({ analyticsLocations, sourceAnalyticsLocations } = stateFromStores(categories[8])(
    stateFromStores(categories[9]).USER_SETTINGS_TRY_OUT_PREMIUM,
  ));
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
      maybeFetchUserProfileDefault(obj.id, obj.getAvatarURL(undefined, 80), { dispatchWait: true });
    }
  }, items1);
  const items2 = [pendingAvatarDecoration, setPendingAvatarDecoration, categories];
  const effect1 = pendingAvatarDecoration.useEffect(() => {
    if (undefined === pendingAvatarDecoration) {
      const avatarDecorationsFromCategories = CollectiblesUtils.getAvatarDecorationsFromCategories(categories);
      const _Math = Math;
      const _Math2 = Math;
      setPendingAvatarDecoration(
        avatarDecorationsFromCategories[Math.floor(Math, Math.random(Math) * avatarDecorationsFromCategories.length)],
      );
    }
  }, items2);
  let obj1 = sourceAnalyticsLocations(categories[15]);
  const visibleFontOrder = obj1.useVisibleFontOrder();
  let obj2 = sourceAnalyticsLocations(categories[16]);
  visibleEffectOrder = obj2.useVisibleEffectOrder();
  const items3 = [visibleFontOrder, visibleEffectOrder];
  const effect2 = pendingAvatarDecoration.useEffect(() => {
    const obj = UserProfileActionCreators;
    const result = obj.setTryItOutDisplayNameStyles(
      DisplayNameStylesUtils.generateRandomDisplayNameStyles(visibleFontOrder, visibleEffectOrder),
    );
  }, items3);
  const items4 = [sourceAnalyticsLocations];
  const effect3 = pendingAvatarDecoration.useEffect(() => {
    let obj = {
      type: PremiumUpsellTypes.PREMIUM_PROFILE_TRY_IT_OUT,
      location: null,
      location_stack: sourceAnalyticsLocations,
    };
    obj = { page: constants2.USER_SETTINGS };
    obj.location = obj;
    obj.track(constants.PREMIUM_UPSELL_VIEWED, obj);
  }, items4);
  if (null == stateFromStores) {
    return null;
  } else if (tmp8.isFetching) {
    obj = { style: tmp.activityIndicator, children: null };
    tmp = visibleFontOrder;
    obj.children = <visibleFontOrder animating size="large" />;
    let tmp18 = <setPendingAvatarDecoration style={tmp.activityIndicator}>{null}</setPendingAvatarDecoration>;
  } else if (undefined !== pendingAvatarDecoration) {
    obj = { value: analyticsLocations, children: null };
    obj1 = { style: tmp.container, children: null };
    obj2 = { currentUser: stateFromStores, isTryItOut: true };
    obj1.children = jsx(tmp2(tmp3[20]), { currentUser: stateFromStores, isTryItOut: true });
    obj.children = <setPendingAvatarDecoration style={tmp.container}>{null}</setPendingAvatarDecoration>;
    tmp18 = jsx(sourceAnalyticsLocations(tmp3[8]).AnalyticsLocationProvider, {
      value: analyticsLocations,
      children: null,
    });
  }
}
