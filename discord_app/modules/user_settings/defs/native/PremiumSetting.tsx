// === Module 16832: PremiumSetting ===

// Module 16832 (PremiumSetting)
import util from "util" /* 1114 */;
import PremiumUtils from "PremiumUtils" /* 2048 */;
import BlockedPaymentsCountryExperiment from "BlockedPaymentsCountryExperiment" /* 7595 */;
import openBlockedPaymentsCountryActionSheetDefault from "openBlockedPaymentsCountryActionSheet" /* 11337 */;
import PremiumTabBadgeDefault from "PremiumTabBadge" /* 16833 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1384 */;
import SubscriptionStore from "SubscriptionStore" /* 2053 */;

require = fn;
const jsx = fn(21).jsx;
const SettingBuilders = fn(11505);
const route = SettingBuilders.createRoute({
  useTitle: function getPremiumSettingTitle() {
    const currentUser = UserStore.getCurrentUser();
    const result = PremiumUtils.hasPremiumSubscriptionToDisplay(currentUser, SubscriptionStore.getPremiumTypeSubscription());
    const intl = util.intl;
    const string = intl.string;
    const t = util.t;
    if (result) {
      let stringResult = string(t["4gwVVn"]);
    } else {
      stringResult = string(t["8x0jKT"]);
    }
    return stringResult;
  },
  parent: null,
  IconComponent: fn(9506).NitroWheelIcon,
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
    route: fn(1072).UserSettingsSections.PREMIUM,
    getComponent() {
      return require("PremiumSettingScreen").default;
    }
  }
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/PremiumSetting.tsx");

export default route;