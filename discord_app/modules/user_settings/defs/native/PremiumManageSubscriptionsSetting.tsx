// discord_app/modules/user_settings/defs/native/PremiumManageSubscriptionsSetting.tsx
import util from "../../../../intl/index.native.tsx";
import BlockedPaymentsCountryExperiment from "../../../billing/experiments/BlockedPaymentsCountryExperiment.tsx";
import MapleSyrupExperiments from "../../../premium/experiments/MapleSyrupExperiments.tsx";
import openBlockedPaymentsCountryActionSheetDefault from "../../../billing/native/openBlockedPaymentsCountryActionSheet.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const SettingBuilders = fn(11539);
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
  IconComponent: fn(16878).SubscriptionIcon,
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
  usePredicate: fn(2047).useHasPremiumSubscriptionToDisplay,
  screen: {
    route: fn(1072).UserSettingsSections.PREMIUM_MANAGE_PLAN,
    getComponent() {
      return require("PremiumManagePlanScreen").default;
    },
  },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/PremiumManageSubscriptionsSetting.tsx");

export default route;
