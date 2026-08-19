// discord_app/modules/user_settings/defs/native/PremiumSetting.tsx
import getSystemLocale from "../../../../intl/index.native.tsx";
import getPremiumPlanItem from "../../../../utils/PremiumUtils.tsx";
import apexExperiment from "../../../premium/experiments/MobileNitroManageSubscriptionsSettingsExperiment.tsx";
import ThemedTabBadgeDefault from "../../../premium/native/PremiumTabBadge.tsx";
import noop from "../../../../../_runtime/00019_noop.js";
import mergeGuildAvatar from "../../../../stores/UserStore.tsx";
import reset from "../../../../stores/billing/SubscriptionStore.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";
import { PremiumScreen } from "../../premium/native/PremiumSettingScreen.tsx";

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
    return PremiumScreen /* PremiumScreen */.default;
  }
};
createToggle = createToggle.createRoute(createToggle);
let result = require("obj132").fileFinishedImporting("modules/user_settings/defs/native/PremiumSetting.tsx");

export default createToggle;