// === Module 11628: PremiumMarketingUtil ===

// Module 11628 (PremiumMarketingUtil)
import router_utils from "router_utils" /* 1100 */;
import openUserSettings from "openUserSettings" /* 7396 */;
import LayerActionCreators from "LayerActionCreators" /* 7601 */;
import Constants from "Constants" /* 1074 */;
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