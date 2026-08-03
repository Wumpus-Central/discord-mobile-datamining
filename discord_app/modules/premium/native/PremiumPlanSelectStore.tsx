import keys from "keys";

const obj = keys.create(() => ({ isPurchasing: false, purchasingProductId: null }));
const result = require("set").fileFinishedImporting("modules/premium/native/PremiumPlanSelectStore.tsx");

export const usePremiumPlanSelectStore = obj;
export const setIsPurchasing = function setIsPurchasing(arg0) {
  const _require = arg0;
  let tmp = arg1;
  if (arg1 === undefined) {
    tmp = null;
  }
  const dependencyMap = tmp;
  _require(705).batchUpdates(() => outer1_2.setState({ isPurchasing: closure_0, purchasingProductId: closure_1 }));
};