// discord_app/modules/gplay/native/GPlayAnalyticsStore.tsx
import set from "set" /* 2 */;
import keys from "keys" /* 644 */;
import { batchUpdates } from "../../../../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx";

let closure_2 = Object.freeze({ analyticsByProductId: {} });
let obj = keys.create(() => closure_2);
const result = set.fileFinishedImporting("modules/gplay/native/GPlayAnalyticsStore.tsx");

export const setGPlayAnalytics = function setGPlayAnalytics(arg0, arg1) {
  const _require = arg0;
  dependencyMap = arg1;
  _batchUpdates.batchUpdates(() => {
    closure_1_3.setState((analyticsByProductId) => {
      obj = { analyticsByProductId: null };
      obj = {};
      const merged = Object.assign(analyticsByProductId.analyticsByProductId);
      obj[closure_0] = closure_1;
      obj[0] = obj;
      return obj;
    });
  });
};
export const deleteGPlayAnalytics = function deleteGPlayAnalytics(arg0) {
  const _require = arg0;
  _batchUpdates.batchUpdates(() => {
    closure_1_3.setState((analyticsByProductId) => {
      analyticsByProductId = {};
      const merged = Object.assign(analyticsByProductId.analyticsByProductId);
      delete tmp2[tmp];
      return { analyticsByProductId };
    });
  });
};
export const useGPlayAnalyticsStore = obj;