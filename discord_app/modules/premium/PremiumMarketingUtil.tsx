// === Module 11393: PremiumMarketingUtil ===

// Module 11393 (PremiumMarketingUtil)
import router_utils from "router_utils" /* 1111 */;
import openUserSettings from "openUserSettings" /* 7549 */;
import LayerActionCreators from "LayerActionCreators" /* 7748 */;
import Constants from "Constants" /* 1084 */;
import size from "module_2" /* 2 */;

({ Routes: c2, UserSettingsSections: c3 } = Constants);
const result = size.fileFinishedImporting("modules/premium/PremiumMarketingUtil.tsx");

export function navigateToPremiumHomePage() {
  openUserSettings.openUserSettings({ screen: constants2.PREMIUM });
}
export function navigateToNitroHomePage(fn) {
  if (fn != null) {
    fn();
  }
  LayerActionCreators.popLayer();
  router_utils.transitionTo(constants.APPLICATION_STORE);
}