// discord_app/modules/collectibles/native/useHandleClaim.tsx
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../_runtime/metro/00019__.js";

let require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/useHandleClaim.tsx");

export const useHandleClaim = function useHandleClaim(product) {
  product = product.product;
  require = product;
  const stageCollectibleChangeForEditProfile = product.stageCollectibleChangeForEditProfile;
  const obj = { handleClaim: null };
  const items = [product, stageCollectibleChangeForEditProfile];
  obj.handleClaim = noop.useCallback(
    asyncGeneratorStep(async () => {
      let obj3 = tmp3(tmp20[2]);
      await obj3.claimPremiumCollectiblesProduct(product.skuId);
      if (1 === tmp7) {
        c3 = 0;
        const obj2 = { key: "collectible shop claim error", content: null };
        const intl = tmp3(tmp20[6]).intl;
        obj2.content = intl.string(tmp3(tmp20[6]).t.CKsXk3);
        v2(tmp20[5]).open(obj2);
        c4 = 3;
        v2(tmp20[5]);
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 !== 2) {
        v2(tmp20[3]).hideAllActionSheets();
        v2(tmp20[3]);
        obj3 = { product: closure_128_0, useCategoryImage: true, stageCollectibleChangeForEditProfile: closure_128_1 };
        v2(tmp20[4]).open(obj3);
        v2(tmp20[4]);
        const collectiblesPurchases = tmp3(tmp20[2]).fetchCollectiblesPurchases();
        c3 = 0;
        tmp3(tmp20[2]);
      }
      return value;
    }),
    items,
  );
  return obj;
};
