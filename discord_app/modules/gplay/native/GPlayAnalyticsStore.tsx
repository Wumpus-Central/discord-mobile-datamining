// === Module 9368: GPlayAnalyticsStore ===

// Module 9368 (GPlayAnalyticsStore)
import module_560 from "module_560" /* 560 */;
import size from "module_2" /* 2 */;

let closure_2 = Object.freeze({ analyticsByProductId: {} });
const useGPlayAnalyticsStore = module_560.create(() => closure_2);
const result = size.fileFinishedImporting("modules/gplay/native/GPlayAnalyticsStore.tsx");

export const setGPlayAnalytics = function setGPlayAnalytics(arg0, arg1) {
  _require = arg0;
  dependencyMap = arg1;
  require("ReactBatchUpdates").batchUpdates(() => {
    obj.setState((analyticsByProductId) => {
      analyticsByProductId = { analyticsByProductId: null };
      analyticsByProductId = {};
      const merged = Object.assign(analyticsByProductId.analyticsByProductId);
      analyticsByProductId[closure_1_0] = closure_1_1;
      analyticsByProductId.analyticsByProductId = analyticsByProductId;
      return analyticsByProductId;
    });
  });
};
export const deleteGPlayAnalytics = function deleteGPlayAnalytics(arg0) {
  _require = arg0;
  require("ReactBatchUpdates").batchUpdates(() => {
    obj.setState((analyticsByProductId) => {
      analyticsByProductId = {};
      const merged = Object.assign(analyticsByProductId.analyticsByProductId);
      delete tmp2[tmp];
      return { analyticsByProductId };
    });
  });
};
export { useGPlayAnalyticsStore };