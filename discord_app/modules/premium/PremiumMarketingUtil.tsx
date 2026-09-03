// === Module 12762: navigateToPremiumHomePage ===

// Module 12762 (navigateToPremiumHomePage)
import set from "set" /* 2 */;
import transitionTo from "transitionTo" /* 1219 */;
import openUserSettings from "openUserSettings" /* 6255 */;
import pushLayer from "pushLayer" /* 7342 */;
import ME from "ME" /* 673 */;

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