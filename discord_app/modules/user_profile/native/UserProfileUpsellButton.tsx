// === Module 14008: UserProfileUpsellButton ===

// Module 14008 (UserProfileUpsellButton)
import noop from "noop" /* 19 */;
import ME from "ME" /* 676 */;
import { PremiumUpsellTypes } from "GuildFeatures" /* 1924 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

const require = fn;
({ AnalyticsPages: c4, UpsellTypes: c5, AnalyticsSections: closure_6, AnalyticEvents: error } = ME);
let closure_10 = createCacheKey.createStyles({ nitroWheel: { marginRight: 2 } });
let result = require("obj132").fileFinishedImporting("modules/user_profile/native/UserProfileUpsellButton.tsx");

export default function UserProfileUpsellButton(analyticsObject) {
  analyticsObject = analyticsObject.analyticsObject;
  let analyticsLocations;
  analyticsLocations = analyticsLocations(7139)().analyticsLocations;
  let obj = analyticsObject(7417);
  let label = obj.useNitroTrialCtaOverride("user_profile_upsell_button");
  const items = [analyticsLocations, analyticsObject];
  const effect = React.useEffect(() => {
    let obj = analyticsLocations(dependencyMap[7]);
    obj = { page: closure_1_4.USER_SETTINGS, section: closure_1_6.USER_PROFILE, object: analyticsObject };
    obj.track(closure_1_7.PREMIUM_UPSELL_VIEWED, obj);
  }, items);
  obj = {
    onPress() {
      let obj = analyticsLocations(dependencyMap[9]);
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
  obj[3] = jsx(analyticsObject(7988).NitroWheelIcon, { color: "white", size: "sm", style: callback().nitroWheel });
  return jsx(analyticsObject(4745).Button, { color: "white", size: "sm", style: callback().nitroWheel });
};