// === Module 15035: PremiumSetting ===

// Module 15035 (PremiumSetting)
import util from "util" /* 1114 */;
import PremiumUtils from "PremiumUtils" /* 4264 */;
import BlockedPaymentsCountryExperiment from "BlockedPaymentsCountryExperiment" /* 7490 */;
import openBlockedPaymentsCountryActionSheetDefault from "openBlockedPaymentsCountryActionSheet" /* 11527 */;
import MobileNitroManageSubscriptionsSettingsExperiment from "MobileNitroManageSubscriptionsSettingsExperiment" /* 13448 */;
import PremiumTabBadgeDefault from "PremiumTabBadge" /* 15036 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1371 */;
import SubscriptionStore from "SubscriptionStore" /* 4270 */;

require = fn;
const jsx = fn(21).jsx;
fn(11562);
let SettingBuilders = {
  useTitle: function getPremiumSettingTitle() {
    const mobileNitroManageSubscriptionsSettingsExperiment = MobileNitroManageSubscriptionsSettingsExperiment.getMobileNitroManageSubscriptionsSettingsExperiment({ location: "PremiumSetting" });
    const currentUser = UserStore.getCurrentUser();
    const result = PremiumUtils.hasPremiumSubscriptionToDisplay(currentUser, SubscriptionStore.getPremiumTypeSubscription());
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
  IconComponent: fn(8753).NitroWheelIcon,
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
    }
  }
};
SettingBuilders = SettingBuilders.createRoute(SettingBuilders);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/PremiumSetting.tsx");

export default SettingBuilders;