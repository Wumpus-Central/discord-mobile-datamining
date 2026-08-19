// === Module 14349: route ===

// Module 14349 (route)
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Button from "Button" /* 1297 */;
import isPremiumGiftingSupported from "isPremiumGiftingSupported" /* 4052 */;
import useEligibleActiveOutboundPromotions from "useEligibleActiveOutboundPromotions" /* 12899 */;
import noop from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;
import createToggle from "createToggle" /* 10669 */;

require = fn;
{
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["jcSP+g"]);
  },
  parent: null,
  IconComponent: require("GiftIcon").GiftIcon,
  usePredicate() {
    return isPremiumGiftingSupported.isPremiumGiftingSupported();
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
    let obj = useEligibleActiveOutboundPromotions;
    const unseenOutboundPromotions = obj.useUnseenOutboundPromotions();
    obj = { value: unseenOutboundPromotions.length };
    return jsx(Button.Badge, { value: unseenOutboundPromotions.length });
  },
  unsearchable: true,
  screen: createToggle
};
createToggle = {
  route: require("ME").UserSettingsSections.PREMIUM_GIFTING,
  getComponent() {
    return require(12985) /* GiftingSectionTitle */.default;
  }
};
createToggle = createToggle.createRoute(createToggle);
const result = require("obj132").fileFinishedImporting("modules/user_settings/defs/native/PremiumGiftingSetting.tsx");

export default createToggle;