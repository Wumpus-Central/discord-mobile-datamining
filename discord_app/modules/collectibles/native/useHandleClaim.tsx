// discord_app/modules/collectibles/native/useHandleClaim.tsx
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../_runtime/metro/00019__.js";

let require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/useHandleClaim.tsx");

export const useHandleClaim = ReactCompilerGating.isReactCompilerEnabled()
  ? function useHandleClaim(product) {
      const cResult = require("c").c(5);
      product = product.product;
      _require = product;
      const stageCollectibleChangeForEditProfile = product.stageCollectibleChangeForEditProfile;
      if (cResult[0] === product) {
        if (cResult[1] === stageCollectibleChangeForEditProfile) {
          let tmp2 = cResult[2];
        }
        if (cResult[3] !== tmp2) {
          const obj2 = { handleClaim: tmp2 };
          cResult[3] = tmp2;
          cResult[4] = obj2;
          let tmp3 = obj2;
        } else {
          tmp3 = cResult[4];
        }
        return tmp3;
      }
      _require = asyncGeneratorStep(async () => {
        const product = tmp3;
        await product(7262).claimPremiumCollectiblesProduct(product.skuId);
        if (1 === tmp7) {
          c3 = 0;
          const obj7 = { text: null };
          const intl = product(1126).intl;
          obj7.text = intl.string(product(1126).t.CKsXk3);
          stageCollectibleChangeForEditProfile(4809).open("collectible shop claim error", obj7);
          c4 = 3;
          stageCollectibleChangeForEditProfile(4809);
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 !== 2) {
          stageCollectibleChangeForEditProfile(5056).hideAllActionSheets();
          stageCollectibleChangeForEditProfile(5056);
          stageCollectibleChangeForEditProfile(12770).open({
            product,
            useCategoryImage: true,
            stageCollectibleChangeForEditProfile,
          });
          stageCollectibleChangeForEditProfile(12770);
          const collectiblesPurchases = product(7262).fetchCollectiblesPurchases();
          c3 = 0;
          product(7262);
        }
        return value;
      });
      function t1() {
        const self = this;
        const apply = closure_0.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      }
      cResult[0] = product;
      cResult[1] = stageCollectibleChangeForEditProfile;
      cResult[2] = t1;
      tmp2 = t1;
    }
  : function useHandleClaim(product) {
      product = product.product;
      const require = product;
      const stageCollectibleChangeForEditProfile = product.stageCollectibleChangeForEditProfile;
      const obj = { handleClaim: null };
      const items = [product, stageCollectibleChangeForEditProfile];
      obj.handleClaim = noop.useCallback(
        asyncGeneratorStep(async () => {
          await tmp3(tmp20[4]).claimPremiumCollectiblesProduct(product.skuId);
          if (1 === tmp7) {
            c3 = 0;
            const obj7 = { text: null };
            const intl = tmp3(tmp20[8]).intl;
            obj7.text = intl.string(tmp3(tmp20[8]).t.CKsXk3);
            v2(tmp20[7]).open("collectible shop claim error", obj7);
            c4 = 3;
            v2(tmp20[7]);
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 !== 2) {
            v2(tmp20[5]).hideAllActionSheets();
            v2(tmp20[5]);
            v2(tmp20[6]).open({
              product: closure_128_0,
              useCategoryImage: true,
              stageCollectibleChangeForEditProfile: closure_128_1,
            });
            v2(tmp20[6]);
            const collectiblesPurchases = tmp3(tmp20[4]).fetchCollectiblesPurchases();
            c3 = 0;
            tmp3(tmp20[4]);
          }
          return value;
        }),
        items,
      );
      return obj;
    };
