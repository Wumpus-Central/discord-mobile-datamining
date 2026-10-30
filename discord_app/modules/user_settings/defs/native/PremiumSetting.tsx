// discord_app/modules/user_settings/defs/native/PremiumSetting.tsx
import util from "../../../../intl/index.native.tsx";
import PremiumUtils from "../../../../utils/PremiumUtils.tsx";
import BlockedPaymentsCountryExperiment from "../../../billing/experiments/BlockedPaymentsCountryExperiment.tsx";
import openBlockedPaymentsCountryActionSheetDefault from "../../../billing/native/openBlockedPaymentsCountryActionSheet.tsx";
import PremiumTabBadgeDefault from "../../../premium/native/PremiumTabBadge.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import UserStore from "../../../../stores/UserStore.tsx";
import SubscriptionStore from "../../../../stores/billing/SubscriptionStore.tsx";

require = fn;
const jsx = fn(21).jsx;
const SettingBuilders = fn(11505);
const route = SettingBuilders.createRoute({
  useTitle: function getPremiumSettingTitle() {
    const currentUser = UserStore.getCurrentUser();
    const result = PremiumUtils.hasPremiumSubscriptionToDisplay(
      currentUser,
      SubscriptionStore.getPremiumTypeSubscription(),
    );
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
    },
  },
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/PremiumSetting.tsx");

export default route;
