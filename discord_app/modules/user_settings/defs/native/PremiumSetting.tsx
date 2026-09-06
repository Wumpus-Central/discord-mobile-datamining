// discord_app/modules/user_settings/defs/native/PremiumSetting.tsx
import util from "../../../../intl/index.native.tsx";
import PremiumUtils from "../../../../utils/PremiumUtils.tsx";
import BlockedPaymentsCountryExperiment from "../../../billing/experiments/BlockedPaymentsCountryExperiment.tsx";
import openBlockedPaymentsCountryActionSheetDefault from "../../../billing/native/openBlockedPaymentsCountryActionSheet.tsx";
import MobileNitroManageSubscriptionsSettingsExperiment from "../../../premium/experiments/MobileNitroManageSubscriptionsSettingsExperiment.tsx";
import PremiumTabBadgeDefault from "../../../premium/native/PremiumTabBadge.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import UserStore from "../../../../stores/UserStore.tsx";
import SubscriptionStore from "../../../../stores/billing/SubscriptionStore.tsx";

require = fn;
const jsx = fn(21).jsx;
fn(11468);
let SettingBuilders = {
  useTitle: function getPremiumSettingTitle() {
    const mobileNitroManageSubscriptionsSettingsExperiment =
      MobileNitroManageSubscriptionsSettingsExperiment.getMobileNitroManageSubscriptionsSettingsExperiment({
        location: "PremiumSetting",
      });
    const currentUser = UserStore.getCurrentUser();
    const result = PremiumUtils.hasPremiumSubscriptionToDisplay(
      currentUser,
      SubscriptionStore.getPremiumTypeSubscription(),
    );
    const intl = util.intl;
    const string = intl.string;
    let t = util.t;
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
  IconComponent: fn(8662).NitroWheelIcon,
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
  useTrailing: function usePremiumSettingTrailing() {
    return jsx(PremiumTabBadgeDefault, {});
  },
  screen: {
    route: fn(1074).UserSettingsSections.PREMIUM,
    getComponent() {
      return require("PremiumSettingScreen").default;
    },
  },
};
SettingBuilders = SettingBuilders.createRoute(SettingBuilders);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/PremiumSetting.tsx");

export default SettingBuilders;
