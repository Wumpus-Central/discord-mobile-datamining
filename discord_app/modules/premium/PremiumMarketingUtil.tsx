// discord_app/modules/premium/PremiumMarketingUtil.tsx
import set from "../../../_runtime/00002_set.js";
import transitionTo from "../routing/router_utils.tsx";
import pushLayer from "../../actions/LayerActionCreators.tsx";
import openUserSettings from "../user_settings/core/native/openUserSettings.tsx";
import ME from "../../Constants.tsx";

({ Routes: obj1, UserSettingsSections: c3 } = ME);
const result = set.fileFinishedImporting("modules/premium/PremiumMarketingUtil.tsx");

export const navigateToPremiumHomePage = function navigateToPremiumHomePage() {
  openUserSettings.openUserSettings({ screen: constants2.PREMIUM });
};
export const navigateToNitroHomePage = function navigateToNitroHomePage(arg0) {
  if (arg0 != null) {
    arg0();
  }
  pushLayer.popLayer();
  const obj = pushLayer;
  transitionTo.transitionTo(constants.APPLICATION_STORE);
};