// discord_app/modules/premium/PremiumMarketingUtil.tsx
import ME from "ME";

let c3;
let obj1;
({ Routes: obj1, UserSettingsSections: c3 } = ME);
const result = require("pushLayer").fileFinishedImporting("modules/premium/PremiumMarketingUtil.tsx");

export const navigateToPremiumHomePage = function navigateToPremiumHomePage() {
  require(6614) /* openUserSettings */.openUserSettings({ screen: constants2.PREMIUM });
};
export const navigateToNitroHomePage = function navigateToNitroHomePage(arg0) {
  if (arg0 != null) {
    arg0();
  }
  require(5848) /* pushLayer */.popLayer();
  const obj = require(5848) /* pushLayer */;
  require(1222) /* transitionTo */.transitionTo(constants.APPLICATION_STORE);
};