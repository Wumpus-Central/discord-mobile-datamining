// discord_app/modules/user_settings/defs/native/PremiumManageSubscriptionsSetting.tsx
import noop from "noop";
import createToggle from "createToggle";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { getPremiumPlanItem } from "../../../../utils/PremiumUtils.tsx";
import { PremiumPlanSelectSettingScreen } from "../../premium/native/PremiumManagePlanScreen.tsx";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    return intl.string(getSystemLocale /* getSystemLocale */.t["z5YcJ+"]);
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
    let hasPremiumSubscriptionToDisplay = getPremiumPlanItem /* getPremiumPlanItem */.useHasPremiumSubscriptionToDisplay();
    const obj = getPremiumPlanItem /* getPremiumPlanItem */;
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
    return PremiumPlanSelectSettingScreen /* PremiumPlanSelectSettingScreen */.default;
  }
};
createToggle = createToggle.createRoute(createToggle);
const result = require("useBlockedPaymentsConfig").fileFinishedImporting("modules/user_settings/defs/native/PremiumManageSubscriptionsSetting.tsx");

export default createToggle;