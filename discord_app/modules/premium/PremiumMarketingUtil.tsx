// discord_app/modules/premium/PremiumMarketingUtil.tsx
import ME from "ME";
import { pushLayer } from "../../actions/LayerActionCreators.tsx";
import { transitionTo } from "../routing/router_utils.tsx";
import { openUserSettings } from "../user_settings/core/native/openUserSettings.tsx";

let c3;
let obj1;
({ Routes: obj1, UserSettingsSections: c3 } = ME);
const result = require("pushLayer").fileFinishedImporting("modules/premium/PremiumMarketingUtil.tsx");

export const navigateToPremiumHomePage = function navigateToPremiumHomePage() {
  openUserSettings /* openUserSettings */.openUserSettings({ screen: constants2.PREMIUM });
};
export const navigateToNitroHomePage = function navigateToNitroHomePage(arg0) {
  if (arg0 != null) {
    arg0();
  }
  pushLayer /* pushLayer */.popLayer();
  const obj = pushLayer /* pushLayer */;
  transitionTo /* transitionTo */.transitionTo(constants.APPLICATION_STORE);
};