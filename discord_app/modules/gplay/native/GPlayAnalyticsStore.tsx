// discord_app/modules/gplay/native/GPlayAnalyticsStore.tsx
import keys from "keys";

let closure_2 = Object.freeze({ analyticsByProductId: {} });
let obj = keys.create(() => closure_2);
const result = require("set").fileFinishedImporting("modules/gplay/native/GPlayAnalyticsStore.tsx");

export const setGPlayAnalytics = function setGPlayAnalytics(arg0, arg1) {
  const _require = arg0;
  const dependencyMap = arg1;
  _require("../../../../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx").batchUpdates(() => {
    outer1_3.setState((analyticsByProductId) => {
      let obj = { analyticsByProductId: null };
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
  _require("../../../../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx").batchUpdates(() => {
    outer1_3.setState((analyticsByProductId) => {
      analyticsByProductId = {};
      const merged = Object.assign(analyticsByProductId.analyticsByProductId);
      delete tmp2[tmp];
      return { analyticsByProductId };
    });
  });
};
export const useGPlayAnalyticsStore = obj;