// discord_app/modules/user_settings/defs/native/PremiumManageSubscriptionsSetting.tsx
import util from "../../../../intl/index.native.tsx";
import PremiumUtils from "../../../../utils/PremiumUtils.tsx";
import BlockedPaymentsCountryExperiment from "../../../billing/experiments/BlockedPaymentsCountryExperiment.tsx";
import openBlockedPaymentsCountryActionSheetDefault from "../../../billing/native/openBlockedPaymentsCountryActionSheet.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
fn(11468);
let SettingBuilders = {
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["z5YcJ+"]);
  },
  parent: null,
  IconComponent: fn(14987).SubscriptionIcon,
  usePreNavigationAction: function useCanNavigateToPaymentSetting() {
    return noop.useCallback(() => {
      const isPaymentsBlocked = BlockedPaymentsCountryExperiment.getIsPaymentsBlocked();
      let flag = !isPaymentsBlocked;
      if (isPaymentsBlocked) {
        openBlockedPaymentsCountryActionSheetDefault();
        flag = false;
      }
      return flag;
    }, []);
  },
  usePredicate: function useShowManageSubscriptionsSetting() {
    let hasPremiumSubscriptionToDisplay = PremiumUtils.useHasPremiumSubscriptionToDisplay();
    if (hasPremiumSubscriptionToDisplay) {
      hasPremiumSubscriptionToDisplay = obj2.useMobileNitroManageSubscriptionsSettingsExperiment({
        location: "useShowManageSubscriptionsSetting",
      });
    }
    return hasPremiumSubscriptionToDisplay;
  },
  screen: {
    route: fn(1074).UserSettingsSections.PREMIUM_MANAGE_PLAN,
    getComponent() {
      return require("PremiumManagePlanScreen").default;
    },
  },
};
SettingBuilders = SettingBuilders.createRoute(SettingBuilders);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/PremiumManageSubscriptionsSetting.tsx");

export default SettingBuilders;
