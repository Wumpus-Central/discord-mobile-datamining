// discord_app/modules/user_settings/premium/native/ProfileCustomizationTryItOutV2SettingScreen.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import maybeFetchUserProfileDefault from "../../../user_profile/maybeFetchUserProfile.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import UserStore from "../../../../stores/UserStore.tsx";

const require = globalThis.__r;

const require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet } = get_ActivityIndicator);
const Constants = fn(1074);
({ AnalyticEvents: metroRequire, AnalyticsPages: closure_7 } = Constants);
const PremiumUpsellTypes = fn(1374).PremiumUpsellTypes;
const jsx = fn(21).jsx;
const createStyles = fn(4845);
let obj2 = { container: null, headerTitle: null };
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj2.container = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
obj2.headerTitle = { marginTop: nativeDefault.space.PX_8 };
let closure_10 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/user_settings/premium/native/ProfileCustomizationTryItOutV2SettingScreen.tsx",
);

export default function ProfileCustomizationTryItOutV2SettingScreen() {
  const tmp = closure_10();
  _require = tmp;
  const navigation = require("useNavigation").useNavigation();
  let obj = require("useNavigation");
  const tmp2 = _require;
  const tmp5 = navigation;
  const tmp6Result = navigation(sourceAnalyticsLocations[9])(
    navigation(sourceAnalyticsLocations[10]).USER_SETTINGS_TRY_OUT_PREMIUM,
  );
  sourceAnalyticsLocations = tmp6Result.sourceAnalyticsLocations;
  const tmp6 = navigation(sourceAnalyticsLocations[9]);
  const items = [UserStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => currentUser.getCurrentUser());
  const items1 = [stateFromStores];
  const effect = stateFromStores.useEffect(() => {
    if (null != stateFromStores) {
      maybeFetchUserProfileDefault(stateFromStores.id, stateFromStores.getAvatarURL(undefined, 80), {
        dispatchWait: true,
      });
    }
  }, items1);
  const items2 = [sourceAnalyticsLocations];
  const effect1 = stateFromStores.useEffect(() => {
    const obj2 = {
      type: PremiumUpsellTypes.PREMIUM_PROFILE_TRY_IT_OUT,
      location: { page: constants2.USER_SETTINGS },
      location_stack: sourceAnalyticsLocations,
    };
    AnalyticsUtilsDefault.track(constants.PREMIUM_UPSELL_VIEWED, obj2);
  }, items2);
  const items3 = [navigation, tmp];
  const layoutEffect = stateFromStores.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle() {
        const obj = {
          variant: "redesign/heading-18/bold",
          color: "mobile-text-heading-primary",
          lineClamp: 1,
          maxFontSizeMultiplier: 2,
          style: closure_1_0.headerTitle,
          children: null,
        };
        const intl = closure_0(sourceAnalyticsLocations[15]).intl;
        obj.children = intl.string(closure_0(sourceAnalyticsLocations[15]).t.PxUx8e);
        return jsx(closure_0(sourceAnalyticsLocations[14]).Heading, {
          variant: "redesign/heading-18/bold",
          color: "mobile-text-heading-primary",
          lineClamp: 1,
          maxFontSizeMultiplier: 2,
          style: closure_1_0.headerTitle,
          children: null,
        });
      },
    });
  }, items3);
  let tmp12 = null;
  if (null != stateFromStores) {
    const obj3 = { value: tmp6Result.analyticsLocations, children: null };
    const obj4 = { style: tmp.container, children: null };
    const obj5 = { currentUser: stateFromStores };
    obj4.children = jsx(tmp5(tmp3[16]), { currentUser: stateFromStores });
    obj3.children = <closure_4 style={tmp.container}>{null}</closure_4>;
    tmp12 = jsx(tmp2(tmp3[9]).AnalyticsLocationProvider, { value: tmp6Result.analyticsLocations, children: null });
  }
  return tmp12;
}
