// === Module 10436: useVirtualCurrencyData ===

// Module 10436 (useVirtualCurrencyData)
import CollectiblesProductUtils from "CollectiblesProductUtils" /* 8496 */;
import _mod10437 from "module_10437" /* 10437 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/hooks/useVirtualCurrencyData.tsx");

export function useVirtualCurrencyData(product, canUseShopDiscountsResult) {
  const productOrbPrice = CollectiblesProductUtils.getProductOrbPrice({ product, hasShopDiscount: canUseShopDiscountsResult });
  const obj2 = { product, hasShopDiscount: canUseShopDiscountsResult };
  const balance = _mod10437.useFetchVirtualCurrencyBalance().balance;
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