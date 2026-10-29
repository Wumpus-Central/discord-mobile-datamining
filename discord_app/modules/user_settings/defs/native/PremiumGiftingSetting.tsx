// === Module 16792: PremiumGiftingSetting ===

// Module 16792 (PremiumGiftingSetting)
import c from "c" /* 576 */;
import util from "util" /* 1125 */;
import native from "native" /* 1199 */;
import BillingPlatformUtils from "BillingPlatformUtils" /* 2063 */;
import BlockedPaymentsCountryExperiment from "BlockedPaymentsCountryExperiment" /* 7587 */;
import PromotionsHooks from "PromotionsHooks" /* 9582 */;
import openBlockedPaymentsCountryActionSheetDefault from "openBlockedPaymentsCountryActionSheet" /* 11132 */;
import noop from "module_19" /* 19 */;

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
const SettingBuilders = fn(11302);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function usePremiumGiftingSettingTrailing() {
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
}) : (function usePremiumGiftingSettingTrailing() {
  const unseenOutboundPromotions = PromotionsHooks.useUnseenOutboundPromotions();
  return jsx(native.Badge, { value: unseenOutboundPromotions.length });
});
const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["jcSP+g"]);
  },
  parent: null,
  IconComponent: fn(13165).GiftIcon,
  usePredicate() {
    return BillingPlatformUtils.isPremiumGiftingSupported();
  },
  usePreNavigationAction: tmp2,
  useTrailing: ReactCompilerGating.isReactCompilerEnabled() ? (function usePremiumGiftingSettingTrailing() {
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
  }) : (function usePremiumGiftingSettingTrailing() {
    const unseenOutboundPromotions = PromotionsHooks.useUnseenOutboundPromotions();
    return jsx(native.Badge, { value: unseenOutboundPromotions.length });
  }),
  screen: {
    route: fn(1084).UserSettingsSections.PREMIUM_GIFTING,
    getComponent() {
      return require("UserSettingsPremiumGifting").default;
    }
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/PremiumGiftingSetting.tsx");

export default route;