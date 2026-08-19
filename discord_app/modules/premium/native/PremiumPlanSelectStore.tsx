// discord_app/modules/premium/native/PremiumPlanSelectStore.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import keys from "../../../../_runtime/00644_keys.js";

const obj = keys.create(() => ({ isPurchasing: false, purchasingProductId: null }));
const result = obj132.fileFinishedImporting("modules/premium/native/PremiumPlanSelectStore.tsx");

export const usePremiumPlanSelectStore = obj;
export const setIsPurchasing = function setIsPurchasing(arg0) {
  const _require = arg0;
  let tmp = arg1;
  if (arg1 === undefined) {
    tmp = null;
  }
  dependencyMap = tmp;
  require("../../../../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx").batchUpdates(() => closure_1_2.setState({ isPurchasing: closure_0, purchasingProductId: c1 }));
};