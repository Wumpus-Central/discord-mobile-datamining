// discord_app/modules/user_profile/native/UserProfileUpsellButton.tsx
import closure_3 from "../../../../_runtime/00019_noop.js";
import ME from "../../../Constants.tsx";
import { PremiumUpsellTypes } from "../../premium/PremiumConstants.tsx";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
({ AnalyticsPages: c4, UpsellTypes: c5, AnalyticsSections: closure_6, AnalyticEvents: error } = ME);
let closure_10 = createCacheKey.createStyles({ nitroWheel: { marginRight: 2 } });
let result = require("set").fileFinishedImporting("modules/user_profile/native/UserProfileUpsellButton.tsx");

export default function UserProfileUpsellButton(analyticsObject) {
  analyticsObject = analyticsObject.analyticsObject;
  let analyticsLocations;
  analyticsLocations = analyticsLocations(5918)().analyticsLocations;
  let obj = analyticsObject(7138);
  let label = obj.useNitroTrialCtaOverride("user_profile_upsell_button");
  const items = [analyticsLocations, analyticsObject];
  const effect = React.useEffect(() => {
    let obj = analyticsLocations(closure_1_2[7]);
    obj = { type: closure_1_8.CUSTOM_PROFILE_SETTINGS_BANNER_BUTTON, location: obj, location_stack: analyticsLocations };
    obj = { page: closure_1_4.USER_SETTINGS, section: closure_1_6.USER_PROFILE, object: analyticsObject };
    obj.track(closure_1_7.PREMIUM_UPSELL_VIEWED, obj);
  }, items);
  obj = {
    onPress() {
      let obj = analyticsLocations(closure_1_2[9]);
      obj = { initialUpsellKey: closure_1_5.CUSTOM_PROFILES, analyticsLocation: obj, analyticsLocations, analyticsProperties: obj1 };
      obj = { page: closure_1_4.USER_SETTINGS, section: closure_1_6.USER_PROFILE, object: analyticsObject };
      const result = obj.handleShowUpsellAlert(obj);
    },
    variant: "active",
    text: null,
    icon: null
  };
  if (label == null) {
    label = analyticsObject.label;
  }
  if (label == null) {
    const intl = tmp3(1236).intl;
    label = intl.string(tmp3(1236).t.pj0XBN);
  }
  obj[2] = label;
  obj = { color: "white", size: "sm", style: callback().nitroWheel };
  obj[3] = jsx(analyticsObject(8042).NitroWheelIcon, { color: "white", size: "sm", style: callback().nitroWheel });
  return jsx(analyticsObject(4893).Button, { color: "white", size: "sm", style: callback().nitroWheel });
};