// === Module 14127: UserProfileUpsellButton ===

// Module 14127 (UserProfileUpsellButton)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import PremiumUpsellUtilsDefault from "PremiumUpsellUtils" /* 8606 */;
import noop from "module_19" /* 19 */;

const require = fn;
const Constants = fn(1074);
({ AnalyticsPages: closure_4, UpsellTypes: hasOwnProperty, AnalyticsSections: metroRequire, AnalyticEvents: closure_7 } = Constants);
const PremiumUpsellTypes = fn(1374).PremiumUpsellTypes;
const jsx = fn(21).jsx;
const createStyles = fn(4829);
let closure_10 = createStyles.createStyles({ nitroWheel: { marginRight: 2 } });
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileUpsellButton.tsx");

export default function UserProfileUpsellButton(analyticsObject) {
  analyticsObject = analyticsObject.analyticsObject;
  let analyticsLocations;
  analyticsLocations = analyticsLocations(6578)().analyticsLocations;
  const tmp = closure_10();
  let label = analyticsObject(6861).useNitroTrialCtaOverride("user_profile_upsell_button");
  const items = [analyticsLocations, analyticsObject];
  const effect = noop.useEffect(() => {
    const obj2 = { type: PremiumUpsellTypes.CUSTOM_PROFILE_SETTINGS_BANNER_BUTTON, location: { page: constants.USER_SETTINGS, section: constants3.USER_PROFILE, object: analyticsObject }, location_stack: analyticsLocations };
    AnalyticsUtilsDefault.track(constants4.PREMIUM_UPSELL_VIEWED, obj2);
  }, items);
  let obj2 = {
    onPress() {
      const obj2 = { initialUpsellKey: constants2.CUSTOM_PROFILES, analyticsLocation: { page: constants.USER_SETTINGS, section: constants3.USER_PROFILE, object: analyticsObject }, analyticsLocations, analyticsProperties: { type: PremiumUpsellTypes.CUSTOM_PROFILE_UPSELL } };
      const result = PremiumUpsellUtilsDefault.handleShowUpsellAlert(obj2);
    },
    variant: "active",
    text: null,
    icon: null
  };
  if (label == null) {
    label = analyticsObject.label;
  }
  if (label == null) {
    const intl = tmp3(1115).intl;
    label = intl.string(tmp3(1115).t.pj0XBN);
  }
  obj2.text = label;
  obj2.icon = jsx(analyticsObject(8114).NitroWheelIcon, { color: "white", size: "sm", style: tmp.nitroWheel });
  return jsx(analyticsObject(5274).Button, {
    onPress() {
      const obj2 = { initialUpsellKey: constants2.CUSTOM_PROFILES, analyticsLocation: { page: constants.USER_SETTINGS, section: constants3.USER_PROFILE, object: analyticsObject }, analyticsLocations, analyticsProperties: { type: PremiumUpsellTypes.CUSTOM_PROFILE_UPSELL } };
      const result = PremiumUpsellUtilsDefault.handleShowUpsellAlert(obj2);
    },
    variant: "active",
    text: null,
    icon: null
  });
};