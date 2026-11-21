// === Module 12066: PremiumMarketingUtil ===

// Module 12066 (PremiumMarketingUtil)
import router_utils from "router_utils" /* 1098 */;
import LayerActionCreators from "LayerActionCreators" /* 8116 */;
import openUserSettings from "openUserSettings" /* 8194 */;
import Constants from "Constants" /* 1071 */;
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