// discord_app/modules/user_settings/defs/native/PremiumManageSubscriptionsSetting.tsx
import c from "../../../../../_runtime/00576_c.js";
import util from "../../../../intl/index.native.tsx";
import PremiumUtils from "../../../../utils/PremiumUtils.tsx";
import BlockedPaymentsCountryExperiment from "../../../billing/experiments/BlockedPaymentsCountryExperiment.tsx";
import openBlockedPaymentsCountryActionSheetDefault from "../../../billing/native/openBlockedPaymentsCountryActionSheet.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
fn(558);
const ReactCompilerGating = fn(558);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useCanNavigateToPaymentSetting() {
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
    }
  : function useCanNavigateToPaymentSetting() {
      return noop.useCallback(() => {
        const isPaymentsBlocked = BlockedPaymentsCountryExperiment.getIsPaymentsBlocked();
        let flag = !isPaymentsBlocked;
        if (isPaymentsBlocked) {
          openBlockedPaymentsCountryActionSheetDefault();
          flag = false;
        }
        return flag;
      }, []);
    };
const SettingBuilders = fn(11262);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useShowManageSubscriptionsSetting() {
      const cResult = c.c(1);
      let hasPremiumSubscriptionToDisplay = PremiumUtils.useHasPremiumSubscriptionToDisplay();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj3 = { location: "useShowManageSubscriptionsSetting" };
        cResult[0] = obj3;
        let first = obj3;
      } else {
        first = cResult[0];
      }
      if (hasPremiumSubscriptionToDisplay) {
        hasPremiumSubscriptionToDisplay = tmpResult.useMobileNitroManageSubscriptionsSettingsExperiment(first);
      }
      return hasPremiumSubscriptionToDisplay;
    }
  : function useShowManageSubscriptionsSetting() {
      let hasPremiumSubscriptionToDisplay = PremiumUtils.useHasPremiumSubscriptionToDisplay();
      if (hasPremiumSubscriptionToDisplay) {
        hasPremiumSubscriptionToDisplay = obj2.useMobileNitroManageSubscriptionsSettingsExperiment({
          location: "useShowManageSubscriptionsSetting",
        });
      }
      return hasPremiumSubscriptionToDisplay;
    };
const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["z5YcJ+"]);
  },
  parent: null,
  IconComponent: fn(15073).SubscriptionIcon,
  usePreNavigationAction: tmp2,
  usePredicate: ReactCompilerGating.isReactCompilerEnabled()
    ? function useShowManageSubscriptionsSetting() {
        const cResult = c.c(1);
        let hasPremiumSubscriptionToDisplay = PremiumUtils.useHasPremiumSubscriptionToDisplay();
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const obj3 = { location: "useShowManageSubscriptionsSetting" };
          cResult[0] = obj3;
          let first = obj3;
        } else {
          first = cResult[0];
        }
        if (hasPremiumSubscriptionToDisplay) {
          hasPremiumSubscriptionToDisplay = tmpResult.useMobileNitroManageSubscriptionsSettingsExperiment(first);
        }
        return hasPremiumSubscriptionToDisplay;
      }
    : function useShowManageSubscriptionsSetting() {
        let hasPremiumSubscriptionToDisplay = PremiumUtils.useHasPremiumSubscriptionToDisplay();
        if (hasPremiumSubscriptionToDisplay) {
          hasPremiumSubscriptionToDisplay = obj2.useMobileNitroManageSubscriptionsSettingsExperiment({
            location: "useShowManageSubscriptionsSetting",
          });
        }
        return hasPremiumSubscriptionToDisplay;
      },
  screen: {
    route: fn(1085).UserSettingsSections.PREMIUM_MANAGE_PLAN,
    getComponent() {
      return require("PremiumManagePlanScreen").default;
    },
  },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/PremiumManageSubscriptionsSetting.tsx");

export default route;
