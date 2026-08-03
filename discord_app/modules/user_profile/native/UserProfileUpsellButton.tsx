// === Module 13713: UserProfileUpsellButton ===

// Module 13713 (UserProfileUpsellButton)
import noop from "noop";
import ME from "ME";
import { PremiumUpsellTypes } from "GuildFeatures";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

let c4;
let c5;
let closure_6;
let error;
const require = arg1;
({ AnalyticsPages: c4, UpsellTypes: c5, AnalyticsSections: closure_6, AnalyticEvents: error } = ME);
let closure_10 = createCacheKey.createStyles({ nitroWheel: { marginRight: 2 } });
let result = require("GuildFeatures").fileFinishedImporting("modules/user_profile/native/UserProfileUpsellButton.tsx");

export default function UserProfileUpsellButton(analyticsObject) {
  analyticsObject = analyticsObject.analyticsObject;
  let analyticsLocations;
  analyticsLocations = analyticsLocations(5519)().analyticsLocations;
  let obj = analyticsObject(6244);
  let label = obj.useNitroTrialCtaOverride("user_profile_upsell_button");
  const items = [analyticsLocations, analyticsObject];
  const effect = React.useEffect(() => {
    let obj = analyticsLocations(outer1_2[7]);
    obj = { type: outer1_8.CUSTOM_PROFILE_SETTINGS_BANNER_BUTTON, location: obj, location_stack: analyticsLocations };
    obj = { page: outer1_4.USER_SETTINGS, section: outer1_6.USER_PROFILE, object: analyticsObject };
    obj.track(outer1_7.PREMIUM_UPSELL_VIEWED, obj);
  }, items);
  obj = {
    onPress() {
      let obj = analyticsLocations(outer1_2[9]);
      obj = { initialUpsellKey: outer1_5.CUSTOM_PROFILES, analyticsLocation: obj, analyticsLocations, analyticsProperties: obj1 };
      obj = { page: outer1_4.USER_SETTINGS, section: outer1_6.USER_PROFILE, object: analyticsObject };
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
  obj[3] = jsx(analyticsObject(6630).NitroWheelIcon, { color: "white", size: "sm", style: callback().nitroWheel });
  return jsx(analyticsObject(4604).Button, { color: "white", size: "sm", style: callback().nitroWheel });
};