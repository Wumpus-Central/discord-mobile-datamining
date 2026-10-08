// === Module 15066: PremiumSetting ===

// Module 15066 (PremiumSetting)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import PremiumUtils from "PremiumUtils" /* 4726 */;
import BlockedPaymentsCountryExperiment from "BlockedPaymentsCountryExperiment" /* 7125 */;
import openBlockedPaymentsCountryActionSheetDefault from "openBlockedPaymentsCountryActionSheet" /* 10470 */;
import MobileNitroManageSubscriptionsSettingsExperiment from "MobileNitroManageSubscriptionsSettingsExperiment" /* 13521 */;
import PremiumTabBadgeDefault from "PremiumTabBadge" /* 15067 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1389 */;
import SubscriptionStore from "SubscriptionStore" /* 4732 */;

require = fn;
const jsx = fn(21).jsx;
fn(558);
const ReactCompilerGating = fn(558);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useCanNavigateToPaymentSetting() {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t() {
      const isPaymentsBlocked = BlockedPaymentsCountryExperiment.getIsPaymentsBlocked();
      let flag = !isPaymentsBlocked;
      if (isPaymentsBlocked) {
        openBlockedPaymentsCountryActionSheetDefault();
        flag = false;
      }
      return flag;
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  return first;
}) : (function useCanNavigateToPaymentSetting() {
  return noop.useCallback(() => {
    const isPaymentsBlocked = BlockedPaymentsCountryExperiment.getIsPaymentsBlocked();
    let flag = !isPaymentsBlocked;
    if (isPaymentsBlocked) {
      openBlockedPaymentsCountryActionSheetDefault();
      flag = false;
    }
    return flag;
  }, []);
});
const SettingBuilders = fn(11262);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function usePremiumSettingTrailing() {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp6 = jsx(PremiumTabBadgeDefault, {});
    cResult[0] = tmp6;
    let first = tmp6;
  } else {
    first = cResult[0];
  }
  return first;
}) : (function usePremiumSettingTrailing() {
  return jsx(PremiumTabBadgeDefault, {});
});
const route = SettingBuilders.createRoute({
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
  IconComponent: fn(9005).NitroWheelIcon,
  usePreNavigationAction: tmp2,
  useTrailing: ReactCompilerGating.isReactCompilerEnabled() ? (function usePremiumSettingTrailing() {
    const cResult = c.c(1);
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp6 = jsx(PremiumTabBadgeDefault, {});
      cResult[0] = tmp6;
      let first = tmp6;
    } else {
      first = cResult[0];
    }
    return first;
  }) : (function usePremiumSettingTrailing() {
    return jsx(PremiumTabBadgeDefault, {});
  }),
  screen: {
    route: fn(1085).UserSettingsSections.PREMIUM,
    getComponent() {
      return require("PremiumSettingScreen").default;
    }
  }
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/PremiumSetting.tsx");

export default route;