// discord_app/modules/collectibles/native/hooks/useVirtualCurrencyData.tsx
import c from "../../../../../_runtime/00576_c.js";
import CollectiblesProductUtils from "../../utils/CollectiblesProductUtils.tsx";
import _mod9060 from "../../../virtual_currency/hooks/index.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/hooks/useVirtualCurrencyData.tsx");

export const useVirtualCurrencyData = ReactCompilerGating.isReactCompilerEnabled()
  ? function useVirtualCurrencyData(product, hasShopDiscount) {
      const cResult = c.c(7);
      if (cResult[0] === hasShopDiscount) {
        if (cResult[1] === product) {
          let tmp4 = cResult[2];
        }
        const balance = _mod9060.useFetchVirtualCurrencyBalance().balance;
        let tmp7 = null;
        if (null != tmp4) {
          tmp7 = null;
          if (null != balance) {
            tmp7 = tmp4.amount <= balance;
          }
        }
        if (cResult[3] === balance) {
          if (cResult[4] === tmp7) {
            if (cResult[5] === tmp4) {
              let tmp8 = cResult[6];
            }
            return tmp8;
          }
        }
        const obj2 = { price: tmp4, balance, canAfford: tmp7 };
        cResult[3] = balance;
        cResult[4] = tmp7;
        cResult[5] = tmp4;
        cResult[6] = obj2;
        tmp8 = obj2;
        const tmpResult = _mod9060;
      }
      const productOrbPrice = CollectiblesProductUtils.getProductOrbPrice({ product, hasShopDiscount });
      cResult[0] = hasShopDiscount;
      cResult[1] = product;
      cResult[2] = productOrbPrice;
      tmp4 = productOrbPrice;
      const obj3 = { product, hasShopDiscount };
      const tmpResult2 = CollectiblesProductUtils;
    }
  : function useVirtualCurrencyData(product, hasShopDiscount) {
      const productOrbPrice = CollectiblesProductUtils.getProductOrbPrice({ product, hasShopDiscount });
      const obj2 = { product, hasShopDiscount };
      const balance = _mod9060.useFetchVirtualCurrencyBalance().balance;
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
        }, items),
      };
    };
