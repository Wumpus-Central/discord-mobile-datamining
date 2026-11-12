// === Module 10367: useVirtualCurrencyData ===

// Module 10367 (useVirtualCurrencyData)
import CollectiblesProductUtils from "CollectiblesProductUtils" /* 8430 */;
import _mod10368 from "module_10368" /* 10368 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/hooks/useVirtualCurrencyData.tsx");

export function useVirtualCurrencyData(product, canUseShopDiscountsResult) {
  const productOrbPrice = CollectiblesProductUtils.getProductOrbPrice({ product, hasShopDiscount: canUseShopDiscountsResult });
  const obj2 = { product, hasShopDiscount: canUseShopDiscountsResult };
  const balance = _mod10368.useFetchVirtualCurrencyBalance().balance;
  items = [productOrbPrice, balance];
  return {
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
}