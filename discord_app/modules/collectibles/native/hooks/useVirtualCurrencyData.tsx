// === Module 13248: useVirtualCurrencyData ===

// Module 13248 (useVirtualCurrencyData)
import CollectiblesProductUtils from "CollectiblesProductUtils" /* 7626 */;
import _mod8940 from "module_8940" /* 8940 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/hooks/useVirtualCurrencyData.tsx");

export const useVirtualCurrencyData = function useVirtualCurrencyData(product, canUseShopDiscountsResult) {
  let obj = { product, hasShopDiscount: canUseShopDiscountsResult };
  const productOrbPrice = obj.getProductOrbPrice(obj);
  const balance = _mod8940.useFetchVirtualCurrencyBalance().balance;
  const items = [productOrbPrice, balance];
  obj = {
    price: productOrbPrice,
    balance,
    canAfford: noop.useMemo(() => {
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