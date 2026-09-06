// === Module 13543: usePremiumPlanSelectStore ===

// Module 13543 (usePremiumPlanSelectStore)
import set from "set" /* 2 */;
import keys from "keys" /* 560 */;

const obj = keys.create(() => ({ isPurchasing: false, purchasingProductId: null }));
const result = set.fileFinishedImporting("modules/premium/native/PremiumPlanSelectStore.tsx");

export const usePremiumPlanSelectStore = obj;
export const setIsPurchasing = function setIsPurchasing(arg0) {
  const _require = arg0;
  let tmp = arg1;
  if (arg1 === undefined) {
    tmp = null;
  }
  dependencyMap = tmp;
  _require(1249).batchUpdates(() => closure_1_2.setState({ isPurchasing: closure_0, purchasingProductId: c1 }));
};