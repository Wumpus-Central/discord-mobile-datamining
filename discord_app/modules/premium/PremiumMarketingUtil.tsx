// discord_app/modules/premium/PremiumMarketingUtil.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import transitionTo from "../routing/router_utils.tsx";
import pushLayer from "../../actions/LayerActionCreators.tsx";
import openUserSettings from "../user_settings/core/native/openUserSettings.tsx";
import ME from "../../Constants.tsx";

({ Routes: obj1, UserSettingsSections: c3 } = ME);
const result = obj132.fileFinishedImporting("modules/premium/PremiumMarketingUtil.tsx");

export const navigateToPremiumHomePage = function navigateToPremiumHomePage() {
  openUserSettings.openUserSettings({ screen: constants2.PREMIUM });
};
export const navigateToNitroHomePage = function navigateToNitroHomePage(fn) {
  if (fn != null) {
    fn();
  }
  pushLayer.popLayer();
  transitionTo.transitionTo(constants.APPLICATION_STORE);
};