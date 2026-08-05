// discord_app/modules/premium/PremiumMarketingUtil.tsx
import ME from "ME";

let c3;
let obj1;
({ Routes: obj1, UserSettingsSections: c3 } = ME);
const result = require("pushLayer").fileFinishedImporting("modules/premium/PremiumMarketingUtil.tsx");

export const navigateToPremiumHomePage = function navigateToPremiumHomePage() {
  require("../user_settings/core/native/openUserSettings.tsx") /* openUserSettings */.openUserSettings({ screen: constants2.PREMIUM });
};
export const navigateToNitroHomePage = function navigateToNitroHomePage(arg0) {
  if (arg0 != null) {
    arg0();
  }
  require("../../actions/LayerActionCreators.tsx") /* pushLayer */.popLayer();
  const obj = require("../../actions/LayerActionCreators.tsx") /* pushLayer */;
  require("../routing/router_utils.tsx") /* transitionTo */.transitionTo(constants.APPLICATION_STORE);
};