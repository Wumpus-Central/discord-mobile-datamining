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
      let closure_0 = tmp3;
      let c3 = 1;
      yield outer1_0(outer1_2[2]).claimPremiumCollectiblesProduct(outer1_0.skuId);
      if (1 === tmp7) {
        c3 = 0;
        const obj2 = { key: "collectible shop claim error", content: null };
        const intl = outer1_0(outer1_2[6]).intl;
        obj2[1] = intl.string(outer1_0(outer1_2[6]).t.CKsXk3);
        v0(outer1_2[5]).open(obj2);
        let c4 = 3;
        const obj6 = v0(outer1_2[5]);
      } else if (arg0 === 1) {
        c4 = 3;
        throw arg1;
      } else if (arg0 !== 2) {
        const obj = v0(outer1_2[3]);
        obj.hideActionSheet();
        const obj1 = v0(outer1_2[4]);
        let obj3 = { product: null, useCategoryImage: true };
        obj3[0] = closure_0;
        obj1.open(obj3);
        obj3 = outer1_0(outer1_2[2]);
        const collectiblesPurchases = obj3.fetchCollectiblesPurchases();
        c3 = 0;
      }
      c3 = 0;
      return arg1;
    }), items)
  };
};