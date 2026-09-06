// discord_app/modules/collectibles/native/hooks/useVirtualCurrencyData.tsx
import CollectiblesProductUtils from "../../utils/CollectiblesProductUtils.tsx";
import _mod8850 from "../../../virtual_currency/hooks/index.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/hooks/useVirtualCurrencyData.tsx");

export const useVirtualCurrencyData = function useVirtualCurrencyData(product, canUseShopDiscountsResult) {
  let obj = { product, hasShopDiscount: canUseShopDiscountsResult };
  const productOrbPrice = obj.getProductOrbPrice(obj);
  const balance = _mod8850.useFetchVirtualCurrencyBalance().balance;
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
    }, items),
  };
  return obj;
};
