// discord_app/modules/user_settings/defs/native/PremiumSetting.tsx
import noop from "noop";
import mergeGuildAvatar from "mergeGuildAvatar";
import reset from "reset";
import { jsx } from "jsxProd";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle: function getPremiumSettingTitle() {
    const mobileNitroManageSubscriptionsSettingsExperiment = require("../../../premium/experiments/MobileNitroManageSubscriptionsSettingsExperiment.tsx") /* apexExperiment */.getMobileNitroManageSubscriptionsSettingsExperiment({ location: "PremiumSetting" });
    const obj = require("../../../premium/experiments/MobileNitroManageSubscriptionsSettingsExperiment.tsx") /* apexExperiment */;
    currentUser = currentUser.getCurrentUser();
    const result = require("../../../../utils/PremiumUtils.tsx") /* getPremiumPlanItem */.hasPremiumSubscriptionToDisplay(currentUser, premiumTypeSubscription.getPremiumTypeSubscription());
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
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
    return jsx(require("../../../premium/native/PremiumTabBadge.tsx"), {});
  },
  screen: createToggle
};
createToggle = {
  route: require("ME").UserSettingsSections.PREMIUM,
  getComponent() {
    return require("../../premium/native/PremiumSettingScreen.tsx") /* PremiumScreen */.default;
  }
};
createToggle = createToggle.createRoute(createToggle);
let result = require("reset").fileFinishedImporting("modules/user_settings/defs/native/PremiumSetting.tsx");

export default createToggle;