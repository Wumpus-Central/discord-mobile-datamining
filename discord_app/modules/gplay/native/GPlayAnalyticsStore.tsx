// discord_app/modules/gplay/native/GPlayAnalyticsStore.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import keys from "../../../../_runtime/00644_keys.js";

let closure_2 = Object.freeze({ analyticsByProductId: {} });
let obj = keys.create(() => closure_2);
const result = obj132.fileFinishedImporting("modules/gplay/native/GPlayAnalyticsStore.tsx");

export const setGPlayAnalytics = function setGPlayAnalytics(arg0, arg1) {
  const _require = arg0;
  dependencyMap = arg1;
  require("../../../../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx").batchUpdates(() => {
    obj.setState((analyticsByProductId) => {
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
  require("../../../../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx").batchUpdates(() => {
    obj.setState((analyticsByProductId) => {
      analyticsByProductId = {};
      const merged = Object.assign(analyticsByProductId.analyticsByProductId);
      delete tmp2[tmp];
      return { analyticsByProductId };
    });
  });
};
export const useGPlayAnalyticsStore = obj;