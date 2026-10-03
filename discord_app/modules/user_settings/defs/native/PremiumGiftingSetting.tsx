// discord_app/modules/user_settings/defs/native/PremiumGiftingSetting.tsx
import c from "../../../../../_runtime/00576_c.js";
import util from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import BillingPlatformUtils from "../../../device/BillingPlatformUtils.tsx";
import BlockedPaymentsCountryExperiment from "../../../billing/experiments/BlockedPaymentsCountryExperiment.tsx";
import openBlockedPaymentsCountryActionSheetDefault from "../../../billing/native/openBlockedPaymentsCountryActionSheet.tsx";
import PromotionsHooks from "../../../premium/promotions/PromotionsHooks.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

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
const SettingBuilders = fn(11129);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(2);
      const unseenOutboundPromotions = PromotionsHooks.useUnseenOutboundPromotions();
      if (cResult[0] !== unseenOutboundPromotions.length) {
        const obj3 = { value: unseenOutboundPromotions.length };
        const tmp6 = jsx(native.Badge, { value: unseenOutboundPromotions.length });
        cResult[0] = unseenOutboundPromotions.length;
        cResult[1] = tmp6;
        let tmp4 = tmp6;
      } else {
        tmp4 = cResult[1];
      }
      return tmp4;
    }
  : () => {
      const unseenOutboundPromotions = PromotionsHooks.useUnseenOutboundPromotions();
      return jsx(native.Badge, { value: unseenOutboundPromotions.length });
    };
const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["jcSP+g"]);
  },
  parent: null,
  IconComponent: fn(10766).GiftIcon,
  usePredicate() {
    return BillingPlatformUtils.isPremiumGiftingSupported();
  },
  usePreNavigationAction: tmp2,
  useTrailing: ReactCompilerGating.isReactCompilerEnabled()
    ? () => {
        const cResult = c.c(2);
        const unseenOutboundPromotions = PromotionsHooks.useUnseenOutboundPromotions();
        if (cResult[0] !== unseenOutboundPromotions.length) {
          const obj3 = { value: unseenOutboundPromotions.length };
          const tmp6 = jsx(native.Badge, { value: unseenOutboundPromotions.length });
          cResult[0] = unseenOutboundPromotions.length;
          cResult[1] = tmp6;
          let tmp4 = tmp6;
        } else {
          tmp4 = cResult[1];
        }
        return tmp4;
      }
    : () => {
        const unseenOutboundPromotions = PromotionsHooks.useUnseenOutboundPromotions();
        return jsx(native.Badge, { value: unseenOutboundPromotions.length });
      },
  unsearchable: true,
  screen: {
    route: fn(1085).UserSettingsSections.PREMIUM_GIFTING,
    getComponent() {
      return require("UserSettingsPremiumGifting").default;
    },
  },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/PremiumGiftingSetting.tsx");

export default route;
