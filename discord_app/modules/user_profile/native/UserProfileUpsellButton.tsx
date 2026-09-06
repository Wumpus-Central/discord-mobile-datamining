// discord_app/modules/user_profile/native/UserProfileUpsellButton.tsx
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import PremiumUpsellUtilsDefault from "../../../utils/native/PremiumUpsellUtils.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const require = fn;
const Constants = fn(1074);
({
  AnalyticsPages: closure_4,
  UpsellTypes: hasOwnProperty,
  AnalyticsSections: metroRequire,
  AnalyticEvents: closure_7,
} = Constants);
const PremiumUpsellTypes = fn(1373).PremiumUpsellTypes;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_10 = createStyles.createStyles({ nitroWheel: { marginRight: 2 } });
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileUpsellButton.tsx");

export default function UserProfileUpsellButton(analyticsObject) {
  analyticsObject = analyticsObject.analyticsObject;
  let analyticsLocations;
  analyticsLocations = analyticsLocations(7162)().analyticsLocations;
  let obj = analyticsObject(7446);
  let label = obj.useNitroTrialCtaOverride("user_profile_upsell_button");
  const items = [analyticsLocations, analyticsObject];
  const effect = noop.useEffect(() => {
    let obj = {
      type: PremiumUpsellTypes.CUSTOM_PROFILE_SETTINGS_BANNER_BUTTON,
      location: null,
      location_stack: analyticsLocations,
    };
    obj = { page: constants.USER_SETTINGS, section: constants3.USER_PROFILE, object: analyticsObject };
    obj.location = obj;
    obj.track(constants4.PREMIUM_UPSELL_VIEWED, obj);
  }, items);
  obj = {
    onPress() {
      let obj = {
        initialUpsellKey: constants2.CUSTOM_PROFILES,
        analyticsLocation: null,
        analyticsLocations,
        analyticsProperties: null,
      };
      obj = { page: constants.USER_SETTINGS, section: constants3.USER_PROFILE, object: analyticsObject };
      obj.analyticsLocation = obj;
      obj.analyticsProperties = { type: PremiumUpsellTypes.CUSTOM_PROFILE_UPSELL };
      const result = obj.handleShowUpsellAlert(obj);
    },
    variant: "active",
    text: null,
    icon: null,
  };
  if (label == null) {
    label = analyticsObject.label;
  }
  if (label == null) {
    const intl = tmp3(1114).intl;
    label = intl.string(tmp3(1114).t.pj0XBN);
  }
  obj.text = label;
  obj = { color: "white", size: "sm", style: closure_10().nitroWheel };
  obj.icon = jsx(analyticsObject(8662).NitroWheelIcon, { color: "white", size: "sm", style: closure_10().nitroWheel });
  return jsx(analyticsObject(4975).Button, { color: "white", size: "sm", style: closure_10().nitroWheel });
}
