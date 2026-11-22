// === Module 16286: PremiumManageSubscriptionsSetting ===

// Module 16286 (PremiumManageSubscriptionsSetting)
import util from "util" /* 1112 */;
import BlockedPaymentsCountryExperiment from "BlockedPaymentsCountryExperiment" /* 9105 */;
import openBlockedPaymentsCountryActionSheetDefault from "openBlockedPaymentsCountryActionSheet" /* 9312 */;
import MapleSyrupExperiments from "MapleSyrupExperiments" /* 9947 */;
import noop from "module_19" /* 19 */;

require = fn;
const SettingBuilders = fn(11937);
const route = SettingBuilders.createRoute({
  useTitle() {
    const mapleSyrup2Treatment = MapleSyrupExperiments.useMapleSyrup2Treatment("useTitle");
    if ("A" === mapleSyrup2Treatment) {
      const intl3 = util.intl;
      let stringResult = intl3.string(util.t.XFZr3P);
    } else if ("B" === mapleSyrup2Treatment) {
      const intl2 = util.intl;
      stringResult = intl2.string(util.t.Gl5dnA);
    } else {
      const intl = util.intl;
      stringResult = intl.string(util.t["z5YcJ+"]);
    }
    return stringResult;
  },
  parent: null,
  IconComponent: fn(16287).SubscriptionIcon,
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
  usePredicate: fn(2173).useHasPremiumSubscriptionToDisplay,
  screen: {
    route: fn(1071).UserSettingsSections.PREMIUM_MANAGE_PLAN,
    getComponent() {
      return require("PremiumManagePlanScreen").default;
    }
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/PremiumManageSubscriptionsSetting.tsx");

export default route;