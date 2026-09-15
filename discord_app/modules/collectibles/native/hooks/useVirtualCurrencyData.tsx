// === Module 13287: useVirtualCurrencyData ===

// Module 13287 (useVirtualCurrencyData)
import CollectiblesProductUtils from "CollectiblesProductUtils" /* 7660 */;
import _mod8978 from "module_8978" /* 8978 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/hooks/useVirtualCurrencyData.tsx");

export const useVirtualCurrencyData = function useVirtualCurrencyData(product, canUseShopDiscountsResult) {
  const productOrbPrice = CollectiblesProductUtils.getProductOrbPrice({ product, hasShopDiscount: canUseShopDiscountsResult });
  const obj2 = { product, hasShopDiscount: canUseShopDiscountsResult };
  const balance = _mod8978.useFetchVirtualCurrencyBalance().balance;
  const items = [productOrbPrice, balance];
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
};