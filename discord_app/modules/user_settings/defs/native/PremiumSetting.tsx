// discord_app/modules/user_settings/defs/native/PremiumSetting.tsx
import c from "../../../../../_runtime/00576_c.js";
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
fn(558);
const ReactCompilerGating = fn(558);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
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
  : () =>
      noop.useCallback(() => {
        const isPaymentsBlocked = BlockedPaymentsCountryExperiment.getIsPaymentsBlocked();
        let flag = !isPaymentsBlocked;
        if (isPaymentsBlocked) {
          openBlockedPaymentsCountryActionSheetDefault();
          flag = false;
        }
        return flag;
      }, []);
const SettingBuilders = fn(11142);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp6 = jsx(PremiumTabBadgeDefault, {});
        cResult[0] = tmp6;
        let first = tmp6;
      } else {
        first = cResult[0];
      }
      return first;
    }
  : () => jsx(PremiumTabBadgeDefault, {});
const route = SettingBuilders.createRoute({
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
  IconComponent: fn(8346).NitroWheelIcon,
  usePreNavigationAction: tmp2,
  useTrailing: ReactCompilerGating.isReactCompilerEnabled()
    ? () => {
        const cResult = c.c(1);
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp6 = jsx(PremiumTabBadgeDefault, {});
          cResult[0] = tmp6;
          let first = tmp6;
        } else {
          first = cResult[0];
        }
        return first;
      }
    : () => jsx(PremiumTabBadgeDefault, {}),
  screen: {
    route: fn(1085).UserSettingsSections.PREMIUM,
    getComponent() {
      return require("PremiumSettingScreen").default;
    },
  },
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/PremiumSetting.tsx");

export default route;
