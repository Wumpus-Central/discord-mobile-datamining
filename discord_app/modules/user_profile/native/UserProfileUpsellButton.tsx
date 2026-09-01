// === Module 14248: UserProfileUpsellButton ===

// Module 14248 (UserProfileUpsellButton)
import closure_3 from "noop" /* 19 */;
import ME from "ME" /* 676 */;
import { PremiumUpsellTypes } from "GuildFeatures" /* 1924 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

const require = arg1;
({ AnalyticsPages: c4, UpsellTypes: c5, AnalyticsSections: closure_6, AnalyticEvents: error } = ME);
let closure_10 = createCacheKey.createStyles({ nitroWheel: { marginRight: 2 } });
let result = require("set").fileFinishedImporting("modules/user_profile/native/UserProfileUpsellButton.tsx");

export default function UserProfileUpsellButton(analyticsObject) {
  analyticsObject = analyticsObject.analyticsObject;
  let analyticsLocations;
  analyticsLocations = analyticsLocations(5953)().analyticsLocations;
  let obj = analyticsObject(7191);
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
  obj[3] = jsx(analyticsObject(8096).NitroWheelIcon, { color: "white", size: "sm", style: callback().nitroWheel });
  return jsx(analyticsObject(4928).Button, { color: "white", size: "sm", style: callback().nitroWheel });
};