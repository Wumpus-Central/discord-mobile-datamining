// === Module 12547: PremiumMarketingUtil ===

// Module 12547 (PremiumMarketingUtil)
import router_utils from "router_utils" /* 1099 */;
import LayerActionCreators from "LayerActionCreators" /* 8526 */;
import openUserSettings from "openUserSettings" /* 8604 */;
import Constants from "Constants" /* 1072 */;
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