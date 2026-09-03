// === Module 12804: useHandleClaim ===

// Module 12804 (useHandleClaim)
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "noop" /* 19 */;

let require = arg1;
const result = require("set").fileFinishedImporting("modules/collectibles/native/useHandleClaim.tsx");

export const useHandleClaim = function useHandleClaim(product) {
  product = product.product;
  require = product;
  const items = [product];
  return {
    handleClaim: React.useCallback(callback(function*() {
      closure_0 = tmp3;
      c3 = 1;
      yield closure_1_0(closure_1_2[2]).claimPremiumCollectiblesProduct(closure_1_0.skuId);
      if (1 === tmp7) {
        c3 = 0;
        const obj2 = { key: "collectible shop claim error", content: null };
        const intl = closure_1_0(closure_1_2[6]).intl;
        obj2[1] = intl.string(closure_1_0(closure_1_2[6]).t.CKsXk3);
        v0(closure_1_2[5]).open(obj2);
        c4 = 3;
        const obj6 = v0(closure_1_2[5]);
      } else if (arg0 === 1) {
        c4 = 3;
        throw arg1;
      } else if (arg0 !== 2) {
        const obj = v0(closure_1_2[3]);
        obj.hideActionSheet();
        obj1 = v0(closure_1_2[4]);
        let obj3 = { product: null, useCategoryImage: true };
        obj3[0] = closure_0;
        obj1.open(obj3);
        obj3 = closure_1_0(closure_1_2[2]);
        const collectiblesPurchases = obj3.fetchCollectiblesPurchases();
        c3 = 0;
      }
      c3 = 0;
      return arg1;
    }), items)
  };
};