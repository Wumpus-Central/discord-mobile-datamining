// discord_app/modules/collectibles/native/useHandleClaim.tsx
import dispatcher from "dispatcher";
import noop from "noop";

let require = arg1;
const result = require("openCollectiblesShop").fileFinishedImporting("modules/collectibles/native/useHandleClaim.tsx");

export const useHandleClaim = function useHandleClaim(product) {
  product = product.product;
  const require = product;
  const items = [product];
  return {
    handleClaim: React.useCallback(callback(function*() {
      if (c4 === 2) {
        c4 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c4 = 2;
          if (0 === v0) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let closure_0 = tmp3;
              let c3 = 1;
              v0 = 2;
              c4 = 1;
              let obj1 = { value: null, done: false };
              obj1[0] = outer1_0(outer1_2[2]).claimPremiumCollectiblesProduct(outer1_0.skuId);
              return obj1;
            }
          } else {
            if (1 === tmp7) {
              c3 = 0;
              const obj2 = { key: "collectible shop claim error", content: null };
              const intl = outer1_0(outer1_2[6]).intl;
              obj2[1] = intl.string(outer1_0(outer1_2[6]).t.CKsXk3);
              v0(outer1_2[5]).open(obj2);
              c4 = 3;
              const obj6 = v0(outer1_2[5]);
            } else if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              obj = v0(outer1_2[3]);
              obj.hideActionSheet();
              obj1 = v0(outer1_2[4]);
              let obj3 = { product: null, useCategoryImage: true };
              obj3[0] = closure_0;
              obj1.open(obj3);
              obj3 = outer1_0(outer1_2[2]);
              const collectiblesPurchases = obj3.fetchCollectiblesPurchases();
              c3 = 0;
            }
            c3 = 0;
            c4 = 3;
            const obj4 = { value: null, done: true };
            obj4[0] = arg1;
            return obj4;
          }
        } catch (tmp31) {
          let closure_2 = tmp31;
          if (tmp4 === c3) {
            c4 = tmp2;
            throw tmp31;
          } else {
            v0 = tmp;
          }
        }
      }
    }), items)
  };
};