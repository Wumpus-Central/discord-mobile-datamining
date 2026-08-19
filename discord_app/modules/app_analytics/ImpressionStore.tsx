// === Module 699: withEqualityFn ===

// Module 699 (withEqualityFn)
import obj132 from "obj132" /* 2 */;
import identity from "identity" /* 700 */;

let closure_2 = Object.freeze({ debugTrackedData: null, impressions: [] });
const withEqualityFn = identity.createWithEqualityFn(() => closure_2);
const result = obj132.fileFinishedImporting("modules/app_analytics/ImpressionStore.tsx");

export const setCurrentImpression = function setCurrentImpression(arg0) {
  const _require = arg0;
  _require(705).batchUpdates(() => {
    withEqualityFn.setState((impressions) => {
      impressions = [];
      impressions[HermesBuiltin.arraySpread(impressions.impressions, 0)] = closure_0;
      return { impressions };
    });
  });
};
export const cleanupImpression = function cleanupImpression(arg0) {
  const _require = arg0;
  _require(705).batchUpdates(() => {
    withEqualityFn.setState((impressions) => {
      impressions = impressions.impressions;
      return { impressions: impressions.filter((item, index) => item.sequenceId !== sequenceId.sequenceId) };
    });
  });
};
export const setDebugTrackedData = function setDebugTrackedData(arg0, arg1) {
  const _require = arg0;
  dependencyMap = arg1;
  _require(705).batchUpdates(() => {
    withEqualityFn.setState(() => {
      const obj = { name: closure_0 };
      const merged = Object.assign(closure_1);
      obj[0] = obj;
      return obj;
    });
  });
};
export const useImpressionStore = withEqualityFn;
export const getLocation = function getLocation() {
  const obj = {};
  const impressions = withEqualityFn.getState().impressions;
  const item = impressions.forEach((item, index) => {
    if (item.type === obj(dependencyMap[2]).ImpressionTypes.PAGE) {
      obj.page = item.name;
    } else {
      obj.section = item.name;
    }
  });
  return obj;
};
export const getImpressionStack = function getImpressionStack() {
  return withEqualityFn.getState().impressions;
};