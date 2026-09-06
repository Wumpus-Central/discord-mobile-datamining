// discord_app/modules/user_settings/defs/native/PremiumGiftingSetting.tsx
import util from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import BillingPlatformUtils from "../../../device/BillingPlatformUtils.tsx";
import BlockedPaymentsCountryExperiment from "../../../billing/experiments/BlockedPaymentsCountryExperiment.tsx";
import openBlockedPaymentsCountryActionSheetDefault from "../../../billing/native/openBlockedPaymentsCountryActionSheet.tsx";
import PromotionsHooks from "../../../premium/promotions/PromotionsHooks.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
fn(11468);
let SettingBuilders = {
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["jcSP+g"]);
  },
  parent: null,
  IconComponent: fn(11030).GiftIcon,
  usePredicate() {
    return BillingPlatformUtils.isPremiumGiftingSupported();
  },
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
  useTrailing: function usePremiumGiftingSettingTrailing() {
    let obj = PromotionsHooks;
    const unseenOutboundPromotions = obj.useUnseenOutboundPromotions();
    obj = { value: unseenOutboundPromotions.length };
    return jsx(native.Badge, { value: unseenOutboundPromotions.length });
  },
  unsearchable: true,
  screen: {
    route: fn(1074).UserSettingsSections.PREMIUM_GIFTING,
    getComponent() {
      return require("UserSettingsPremiumGifting").default;
    },
  },
};
SettingBuilders = SettingBuilders.createRoute(SettingBuilders);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/PremiumGiftingSetting.tsx");

export default SettingBuilders;
