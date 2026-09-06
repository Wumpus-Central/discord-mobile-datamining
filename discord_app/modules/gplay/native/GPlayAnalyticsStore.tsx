// discord_app/modules/gplay/native/GPlayAnalyticsStore.tsx
import 00560__ from "../../../../_runtime/metro/00560__.js";
import size from "../../../../_runtime/metro/00002__.js";

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