// discord_app/modules/collectibles/native/hooks/useVirtualCurrencyData.tsx
import noop from "noop";

const require = arg1;
const result = require("module_9468").fileFinishedImporting("modules/collectibles/native/hooks/useVirtualCurrencyData.tsx");

export const useVirtualCurrencyData = function useVirtualCurrencyData(product, canUseShopDiscountsResult) {
  let obj = productOrbPrice(balance[1]);
  obj = { product, hasShopDiscount: canUseShopDiscountsResult };
  productOrbPrice = obj.getProductOrbPrice(obj);
  balance = productOrbPrice(balance[2]).useFetchVirtualCurrencyBalance().balance;
  const items = [productOrbPrice, balance];
  obj = {
    price: productOrbPrice,
    balance,
    canAfford: React.useMemo(() => {
      let tmp2 = null;
      if (null != productOrbPrice) {
        tmp2 = null;
        if (null != balance) {
          tmp2 = tmp.amount <= tmp3;
        }
      }
      return tmp2;
    }, items)
  };
  return obj;
};