// === Module 13543: PremiumPlanSelectStore ===

// Module 13543 (PremiumPlanSelectStore)
import module_560 from "module_560" /* 560 */;
import size from "module_2" /* 2 */;

const usePremiumPlanSelectStore = module_560.create(() => ({ isPurchasing: false, purchasingProductId: null }));
const result = size.fileFinishedImporting("modules/premium/native/PremiumPlanSelectStore.tsx");

export { usePremiumPlanSelectStore };
export const setIsPurchasing = function setIsPurchasing(isPurchasing) {
  _require = isPurchasing;
  let tmp = arg1;
  if (arg1 === undefined) {
    tmp = null;
  }
  dependencyMap = tmp;
  require("ReactBatchUpdates").batchUpdates(() => {
    const obj = { isPurchasing, purchasingProductId };
    return obj.setState(obj);
  });
};