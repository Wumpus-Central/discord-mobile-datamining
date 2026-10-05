// === Module 8873: GPlayAnalyticsStore ===

// Module 8873 (GPlayAnalyticsStore)
import module_570 from "module_570" /* 570 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, analyticsByProductId, dependencyMap;

let closure_2 = Object.freeze({ analyticsByProductId: {} });
const useGPlayAnalyticsStore = module_570.create(() => closure_2);
const result = size.fileFinishedImporting("modules/gplay/native/GPlayAnalyticsStore.tsx");

export const setGPlayAnalytics = function setGPlayAnalytics(arg0, arg1) {
  let closure_0;
  let closure_1;
  _require = arg0;
  dependencyMap = arg1;
  let obj = require("react-native");
  obj.batchUpdates(() => {
    let obj;
    obj.setState((analyticsByProductId) => {
      let obj2;
      const obj = { analyticsByProductId: obj2 };
      obj2 = {};
      const merged = Object.assign(analyticsByProductId.analyticsByProductId);
      obj2[closure_1_0] = closure_1_1;
      return obj;
    });
  });
};
export const deleteGPlayAnalytics = function deleteGPlayAnalytics(arg0) {
  let closure_0;
  _require = arg0;
  const obj = require("react-native");
  obj.batchUpdates(() => {
    obj.setState((analyticsByProductId) => {
      analyticsByProductId = {};
      const merged = Object.assign(analyticsByProductId.analyticsByProductId);
      delete obj[closure_1_0];
      return { analyticsByProductId };
    });
  });
};
export { useGPlayAnalyticsStore };