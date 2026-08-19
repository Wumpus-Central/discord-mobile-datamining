// === Module 14337: route ===

// Module 14337 (route)
import getSystemLocale from "getSystemLocale" /* 1236 */;
import getPremiumPlanItem from "getPremiumPlanItem" /* 4039 */;
import apexExperiment from "apexExperiment" /* 12850 */;
import ThemedTabBadgeDefault from "ThemedTabBadge" /* 14338 */;
import noop from "noop" /* 19 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;
import reset from "reset" /* 4045 */;
import { jsx } from "jsxProd" /* 21 */;
import createToggle from "createToggle" /* 10669 */;

require = fn;
{
  useTitle: function getPremiumSettingTitle() {
    const mobileNitroManageSubscriptionsSettingsExperiment = apexExperiment.getMobileNitroManageSubscriptionsSettingsExperiment({ location: "PremiumSetting" });
    currentUser = currentUser.getCurrentUser();
    const result = getPremiumPlanItem.hasPremiumSubscriptionToDisplay(currentUser, premiumTypeSubscription.getPremiumTypeSubscription());
    const intl = getSystemLocale.intl;
    const string = intl.string;
    let t = getSystemLocale.t;
    if (result) {
      if (mobileNitroManageSubscriptionsSettingsExperiment) {
        t = t["4gwVVn"];
        let stringResult = string(t);
      } else {
        stringResult = string(t["8jmdON"]);
      }
    } else {
      return string(t["8x0jKT"]);
    }
  },
  parent: null,
  IconComponent: require("NitroWheelIcon").NitroWheelIcon,
  usePreNavigationAction: function useCanNavigateToPaymentSetting() {
    return React.useCallback(() => {
      const isPaymentsBlocked = callback(table[8]).getIsPaymentsBlocked();
      let flag = !isPaymentsBlocked;
      if (isPaymentsBlocked) {
        callback2(table[9])();
        flag = false;
      }
      return flag;
    }, []);
  },
  useTrailing: function usePremiumSettingTrailing() {
    return jsx(ThemedTabBadgeDefault, {});
  },
  screen: createToggle
};
createToggle = {
  route: require("ME").UserSettingsSections.PREMIUM,
  getComponent() {
    return require(14340) /* PremiumScreen */.default;
  }
};
createToggle = createToggle.createRoute(createToggle);
let result = require("obj132").fileFinishedImporting("modules/user_settings/defs/native/PremiumSetting.tsx");

export default createToggle;