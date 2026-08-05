// discord_app/modules/user_settings/defs/native/PremiumSetting.tsx
import noop from "noop";
import mergeGuildAvatar from "mergeGuildAvatar";
import reset from "reset";
import { jsx } from "jsxProd";
import createToggle from "createToggle";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { getPremiumPlanItem } from "../../../../utils/PremiumUtils.tsx";
import { apexExperiment } from "../../../premium/experiments/MobileNitroManageSubscriptionsSettingsExperiment.tsx";
import { ThemedTabBadge } from "../../../premium/native/PremiumTabBadge.tsx";
import { PremiumScreen } from "../../premium/native/PremiumSettingScreen.tsx";

const require = arg1;
createToggle = {
  useTitle: function getPremiumSettingTitle() {
    const mobileNitroManageSubscriptionsSettingsExperiment = apexExperiment /* apexExperiment */.getMobileNitroManageSubscriptionsSettingsExperiment({ location: "PremiumSetting" });
    const obj = apexExperiment /* apexExperiment */;
    currentUser = currentUser.getCurrentUser();
    const result = getPremiumPlanItem /* getPremiumPlanItem */.hasPremiumSubscriptionToDisplay(currentUser, premiumTypeSubscription.getPremiumTypeSubscription());
    const intl = getSystemLocale /* getSystemLocale */.intl;
    const string = intl.string;
    if (result) {
      if (mobileNitroManageSubscriptionsSettingsExperiment) {
        let stringResult = string(_4gwVVn);
      } else {
        stringResult = string(_4gwVVn["8jmdON"]);
      }
    } else {
      return string(_4gwVVn["8x0jKT"]);
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
    return jsx(ThemedTabBadge, {});
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
let result = require("reset").fileFinishedImporting("modules/user_settings/defs/native/PremiumSetting.tsx");

export default createToggle;