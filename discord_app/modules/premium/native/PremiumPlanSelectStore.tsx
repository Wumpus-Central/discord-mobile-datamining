// === Module 13348: PremiumPlanSelectStore ===

// Module 13348 (PremiumPlanSelectStore)
import module_570 from "module_570" /* 570 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

const usePremiumPlanSelectStore = module_570.create(() => ({ isPurchasing: false, purchasingProductId: null }));
const result = size.fileFinishedImporting("modules/premium/native/PremiumPlanSelectStore.tsx");

export { usePremiumPlanSelectStore };
export const setIsPurchasing = function setIsPurchasing(isPurchasing) {
  let purchasingProductId;
  _require = isPurchasing;
  let tmp = arg1;
  if (arg1 === undefined) {
    tmp = null;
  }
  dependencyMap = tmp;
  let obj = require("react-native");
  obj.batchUpdates(() => {
    const obj = { isPurchasing, purchasingProductId };
    return obj.setState(obj);
  });
};