// === Module 9606: GPlayAnalyticsStore ===

// Module 9606 (GPlayAnalyticsStore)
import module_560 from "module_560" /* 560 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let closure_2 = Object.freeze({ analyticsByProductId: {} });
const useGPlayAnalyticsStore = module_560.create(() => closure_2);
const result = size.fileFinishedImporting("modules/gplay/native/GPlayAnalyticsStore.tsx");

export const setGPlayAnalytics = function setGPlayAnalytics(arg0, arg1) {
  _require = arg0;
  dependencyMap = arg1;
  require("ReactBatchUpdates").batchUpdates(() => {
    obj.setState((analyticsByProductId) => {
      const obj = { analyticsByProductId: null };
      const obj2 = {};
      const merged = Object.assign(analyticsByProductId.analyticsByProductId);
      obj2[closure_1_0] = closure_1_1;
      obj.analyticsByProductId = obj2;
      return obj;
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