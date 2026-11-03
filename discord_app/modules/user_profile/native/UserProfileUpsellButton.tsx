// === Module 16592: UserProfileUpsellButton ===

// Module 16592 (UserProfileUpsellButton)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import PremiumUpsellUtilsDefault from "PremiumUpsellUtils" /* 9917 */;
import noop from "module_19" /* 19 */;

const require = fn;
const Constants = fn(1072);
({ AnalyticsPages: closure_4, UpsellTypes: hasOwnProperty, AnalyticsSections: metroRequire, AnalyticEvents: closure_7 } = Constants);
const PremiumUpsellTypes = fn(1387).PremiumUpsellTypes;
const jsx = fn(21).jsx;
const createStyles = fn(5141);
let closure_10 = createStyles.createStyles({ nitroWheel: { marginRight: 2 } });
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileUpsellButton.tsx");

export default function UserProfileUpsellButton(analyticsObject) {
  analyticsObject = analyticsObject.analyticsObject;
  let analyticsLocations;
  analyticsLocations = analyticsLocations(7446)().analyticsLocations;
  const tmp = closure_10();
  let label = analyticsObject(7750).useNitroTrialCtaOverride("user_profile_upsell_button");
  items = [analyticsLocations, analyticsObject];
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
    const intl = tmp3(1113).intl;
    label = intl.string(tmp3(1113).t.pj0XBN);
  }
  obj2.text = label;
  obj2.icon = jsx(analyticsObject(9656).NitroWheelIcon, { color: "white", size: "sm", style: tmp.nitroWheel });
  return jsx(analyticsObject(5754).Button, {
    onPress() {
      const obj2 = { initialUpsellKey: constants2.CUSTOM_PROFILES, analyticsLocation: { page: constants.USER_SETTINGS, section: constants3.USER_PROFILE, object: analyticsObject }, analyticsLocations, analyticsProperties: { type: PremiumUpsellTypes.CUSTOM_PROFILE_UPSELL } };
      const result = PremiumUpsellUtilsDefault.handleShowUpsellAlert(obj2);
    },
    variant: "active",
    text: null,
    icon: null
  });
};