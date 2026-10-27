// === Module 11302: PremiumMarketingUtil ===

// Module 11302 (PremiumMarketingUtil)
import router_utils from "router_utils" /* 1111 */;
import openUserSettings from "openUserSettings" /* 7491 */;
import LayerActionCreators from "LayerActionCreators" /* 7691 */;
import Constants from "Constants" /* 1084 */;
import size from "module_2" /* 2 */;

({ Routes: c2, UserSettingsSections: c3 } = Constants);
const result = size.fileFinishedImporting("modules/premium/PremiumMarketingUtil.tsx");

export const navigateToPremiumHomePage = function navigateToPremiumHomePage() {
  openUserSettings.openUserSettings({ screen: constants2.PREMIUM });
};
export const navigateToNitroHomePage = function navigateToNitroHomePage(fn) {
  if (fn != null) {
    fn();
  }
  LayerActionCreators.popLayer();
  router_utils.transitionTo(constants.APPLICATION_STORE);
};