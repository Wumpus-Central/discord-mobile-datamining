// === Module 11198: PremiumMarketingUtil ===

// Module 11198 (PremiumMarketingUtil)
import router_utils from "router_utils" /* 1114 */;
import openUserSettings from "openUserSettings" /* 7439 */;
import LayerActionCreators from "LayerActionCreators" /* 7639 */;
import Constants from "Constants" /* 1087 */;
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