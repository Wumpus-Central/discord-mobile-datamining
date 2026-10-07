// === Module 13015: useHandleClaim ===

// Module 13015 (useHandleClaim)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;

let require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/useHandleClaim.tsx");

export const useHandleClaim = ReactCompilerGating.isReactCompilerEnabled() ? ((product) => {
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
    await product(7065).claimPremiumCollectiblesProduct(product.skuId);
    if (1 === tmp7) {
      c3 = 0;
      const obj7 = { key: "collectible shop claim error", content: null };
      const intl = product(1126).intl;
      obj7.content = intl.string(product(1126).t.CKsXk3);
      stageCollectibleChangeForEditProfile(4574).open(obj7);
      c4 = 3;
      stageCollectibleChangeForEditProfile(4574);
    } else if (arg0 === 1) {
      c4 = 3;
      throw value;
    } else if (arg0 !== 2) {
      stageCollectibleChangeForEditProfile(4860).hideAllActionSheets();
      stageCollectibleChangeForEditProfile(4860);
      stageCollectibleChangeForEditProfile(10826).open({ product, useCategoryImage: true, stageCollectibleChangeForEditProfile });
      stageCollectibleChangeForEditProfile(10826);
      const collectiblesPurchases = product(7065).fetchCollectiblesPurchases();
      c3 = 0;
      product(7065);
    }
    return value;
  });
  const fn = function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  cResult[0] = product;
  cResult[1] = stageCollectibleChangeForEditProfile;
  cResult[2] = fn;
  tmp2 = fn;
}) : ((product) => {
  product = product.product;
  const require = product;
  const stageCollectibleChangeForEditProfile = product.stageCollectibleChangeForEditProfile;
  const obj = { handleClaim: null };
  const items = [product, stageCollectibleChangeForEditProfile];
  obj.handleClaim = noop.useCallback(asyncGeneratorStep(async () => {
    await tmp3(tmp20[4]).claimPremiumCollectiblesProduct(product.skuId);
    if (1 === tmp7) {
      c3 = 0;
      const obj7 = { key: "collectible shop claim error", content: null };
      const intl = tmp3(tmp20[8]).intl;
      obj7.content = intl.string(tmp3(tmp20[8]).t.CKsXk3);
      v2(tmp20[7]).open(obj7);
      c4 = 3;
      v2(tmp20[7]);
    } else if (arg0 === 1) {
      c4 = 3;
      throw value;
    } else if (arg0 !== 2) {
      v2(tmp20[5]).hideAllActionSheets();
      v2(tmp20[5]);
      v2(tmp20[6]).open({ product: closure_128_0, useCategoryImage: true, stageCollectibleChangeForEditProfile: closure_128_1 });
      v2(tmp20[6]);
      const collectiblesPurchases = tmp3(tmp20[4]).fetchCollectiblesPurchases();
      c3 = 0;
      tmp3(tmp20[4]);
    }
    return value;
  }), items);
  return obj;
});