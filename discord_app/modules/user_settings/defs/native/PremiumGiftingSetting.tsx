// === Module 14992: PremiumGiftingSetting ===

// Module 14992 (PremiumGiftingSetting)
import util from "util" /* 1114 */;
import native from "native" /* 1178 */;
import BillingPlatformUtils from "BillingPlatformUtils" /* 4231 */;
import BlockedPaymentsCountryExperiment from "BlockedPaymentsCountryExperiment" /* 7417 */;
import openBlockedPaymentsCountryActionSheetDefault from "openBlockedPaymentsCountryActionSheet" /* 11433 */;
import PromotionsHooks from "PromotionsHooks" /* 13468 */;
import noop from "module_19" /* 19 */;

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
    }
  }
};
SettingBuilders = SettingBuilders.createRoute(SettingBuilders);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/PremiumGiftingSetting.tsx");

export default SettingBuilders;