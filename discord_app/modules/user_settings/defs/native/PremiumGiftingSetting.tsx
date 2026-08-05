// discord_app/modules/user_settings/defs/native/PremiumGiftingSetting.tsx
import noop from "noop";
import { jsx } from "jsxProd";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t["jcSP+g"]);
  },
  parent: null,
  IconComponent: require("GiftIcon").GiftIcon,
  usePredicate() {
    return require("../../../device/BillingPlatformUtils.tsx") /* isPremiumGiftingSupported */.isPremiumGiftingSupported();
  },
  usePreNavigationAction: function useCanNavigateToPaymentSetting() {
    return React.useCallback(() => {
      const isPaymentsBlocked = callback(table[3]).getIsPaymentsBlocked();
      let flag = !isPaymentsBlocked;
      if (isPaymentsBlocked) {
        callback2(table[4])();
        flag = false;
      }
      return flag;
    }, []);
  },
  useTrailing: function usePremiumGiftingSettingTrailing() {
    let obj = require("../../../premium/promotions/PromotionsHooks.tsx") /* useEligibleActiveOutboundPromotions */;
    const unseenOutboundPromotions = obj.useUnseenOutboundPromotions();
    obj = { value: unseenOutboundPromotions.length };
    return jsx(require("../../../../design/void/native.tsx") /* Button */.Badge, { value: unseenOutboundPromotions.length });
  },
  unsearchable: true,
  screen: createToggle
};
createToggle = {
  route: require("ME").UserSettingsSections.PREMIUM_GIFTING,
  getComponent() {
    return require("../../premium/native/UserSettingsPremiumGifting.tsx") /* GiftingSectionTitle */.default;
  }
};
createToggle = createToggle.createRoute(createToggle);
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/defs/native/PremiumGiftingSetting.tsx");

export default createToggle;