// === Module 14343: route ===

// Module 14343 (route)
import getSystemLocale from "getSystemLocale" /* 1236 */;
import getPremiumPlanItem from "getPremiumPlanItem" /* 4039 */;
import noop from "noop" /* 19 */;
import createToggle from "createToggle" /* 10669 */;

require = fn;
{
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["z5YcJ+"]);
  },
  parent: null,
  IconComponent: require("SubscriptionIcon").SubscriptionIcon,
  usePreNavigationAction: function useCanNavigateToPaymentSetting() {
    return React.useCallback(() => {
      const isPaymentsBlocked = callback(table[2]).getIsPaymentsBlocked();
      let flag = !isPaymentsBlocked;
      if (isPaymentsBlocked) {
        callback2(table[3])();
        flag = false;
      }
      return flag;
    }, []);
  },
  usePredicate: function useShowManageSubscriptionsSetting() {
    let hasPremiumSubscriptionToDisplay = getPremiumPlanItem.useHasPremiumSubscriptionToDisplay();
    if (hasPremiumSubscriptionToDisplay) {
      hasPremiumSubscriptionToDisplay = obj2.useMobileNitroManageSubscriptionsSettingsExperiment({ location: "useShowManageSubscriptionsSetting" });
    }
    return hasPremiumSubscriptionToDisplay;
  },
  screen: createToggle
};
createToggle = {
  route: require("ME").UserSettingsSections.PREMIUM_MANAGE_PLAN,
  getComponent() {
    return require(14342) /* PremiumPlanSelectSettingScreen */.default;
  }
};
createToggle = createToggle.createRoute(createToggle);
const result = require("obj132").fileFinishedImporting("modules/user_settings/defs/native/PremiumManageSubscriptionsSetting.tsx");

export default createToggle;