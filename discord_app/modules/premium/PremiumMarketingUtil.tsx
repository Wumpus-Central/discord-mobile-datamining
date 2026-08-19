// === Module 12320: navigateToPremiumHomePage ===

// Module 12320 (navigateToPremiumHomePage)
import obj132 from "obj132" /* 2 */;
import transitionTo from "transitionTo" /* 1222 */;
import pushLayer from "pushLayer" /* 5353 */;
import openUserSettings from "openUserSettings" /* 7360 */;
import ME from "ME" /* 676 */;

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