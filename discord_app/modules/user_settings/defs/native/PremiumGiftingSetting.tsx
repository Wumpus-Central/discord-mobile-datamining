import noop from "noop";
import { jsx } from "jsxProd";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["jcSP+g"]);
  },
  parent: null,
  IconComponent: require("GiftIcon").GiftIcon,
  usePredicate() {
    return require(3914) /* isPremiumGiftingSupported */.isPremiumGiftingSupported();
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
    let obj = require(12611) /* useEligibleActiveOutboundPromotions */;
    const unseenOutboundPromotions = obj.useUnseenOutboundPromotions();
    obj = { value: unseenOutboundPromotions.length };
    return jsx(require(1297) /* Button */.Badge, { value: unseenOutboundPromotions.length });
  },
  unsearchable: true,
  screen: createToggle
};
createToggle = {
  route: require("ME").UserSettingsSections.PREMIUM_GIFTING,
  getComponent() {
    return require(12697) /* GiftingSectionTitle */.default;
  }
};
createToggle = createToggle.createRoute(createToggle);
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/defs/native/PremiumGiftingSetting.tsx");

export default createToggle;