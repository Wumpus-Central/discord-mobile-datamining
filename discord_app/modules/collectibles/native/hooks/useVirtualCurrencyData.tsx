// discord_app/modules/collectibles/native/hooks/useVirtualCurrencyData.tsx
import react2 from "../../../../../_runtime/00576_react.js";
import CollectiblesProductUtils from "../../utils/CollectiblesProductUtils.tsx";
import _mod8541 from "../../../virtual_currency/hooks/index.tsx";
import react from "../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (product, hasShopDiscount) => {
      const obj = react2;
      const cResult = obj.c(7);
      if (cResult[0] === hasShopDiscount) {
        let tmp4;
        if (cResult[1] === product) {
          tmp4 = cResult[2];
        }
        const tmpResult = _mod8541;
        const balance = tmpResult.useFetchVirtualCurrencyBalance().balance;
        let tmp7 = null;
        if (null != tmp4) {
          tmp7 = null;
          if (null != balance) {
            tmp7 = tmp4.amount <= balance;
          }
        }
        if (cResult[3] === balance) {
          if (cResult[4] === tmp7) {
            let tmp8;
            if (cResult[5] === tmp4) {
              tmp8 = cResult[6];
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
      }
      const obj3 = { product, hasShopDiscount };
      const tmpResult2 = CollectiblesProductUtils;
      const productOrbPrice = tmpResult2.getProductOrbPrice(obj3);
      cResult[0] = hasShopDiscount;
      cResult[1] = product;
      cResult[2] = productOrbPrice;
      tmp4 = productOrbPrice;
    }
  : (product, hasShopDiscount) => {
      const obj = CollectiblesProductUtils;
      const obj2 = { product, hasShopDiscount };
      const productOrbPrice = obj.getProductOrbPrice(obj2);
      const obj3 = _mod8541;
      const balance = obj3.useFetchVirtualCurrencyBalance().balance;
      const items = [productOrbPrice, balance];
      const obj4 = {
        price: productOrbPrice,
        balance,
        canAfford: react.useMemo(() => {
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
      return obj4;
    };
const result = size.fileFinishedImporting("modules/collectibles/native/hooks/useVirtualCurrencyData.tsx");

export const useVirtualCurrencyData = tmp2;
