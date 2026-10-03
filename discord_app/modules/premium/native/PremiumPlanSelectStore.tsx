// discord_app/modules/premium/native/PremiumPlanSelectStore.tsx
import 00570__ from "../../../../_runtime/metro/00570__.js";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;

const usePremiumPlanSelectStore = module_570.create(() => ({ isPurchasing: false, purchasingProductId: null }));
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