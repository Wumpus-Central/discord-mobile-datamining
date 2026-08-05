// discord_app/modules/app_analytics/ImpressionStore.tsx
import identity from "identity";

let closure_2 = Object.freeze({ debugTrackedData: null, impressions: [] });
const withEqualityFn = identity.createWithEqualityFn(() => closure_2);
const result = require("encodeProperties").fileFinishedImporting("modules/app_analytics/ImpressionStore.tsx");

export const setCurrentImpression = function setCurrentImpression(arg0) {
  const _require = arg0;
  _require("../../../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx").batchUpdates(() => {
    outer1_3.setState((impressions) => {
      impressions = [];
      impressions[HermesBuiltin.arraySpread(impressions.impressions, 0)] = closure_0;
      return { impressions };
    });
  });
};
export const cleanupImpression = function cleanupImpression(arg0) {
  const _require = arg0;
  _require("../../../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx").batchUpdates(() => {
    outer1_3.setState((impressions) => {
      impressions = impressions.impressions;
      return { impressions: impressions.filter((sequenceId) => sequenceId.sequenceId !== sequenceId.sequenceId) };
    });
  });
};
export const setDebugTrackedData = function setDebugTrackedData(arg0, arg1) {
  const _require = arg0;
  const dependencyMap = arg1;
  _require("../../../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx").batchUpdates(() => {
    outer1_3.setState(() => {
      let obj = { debugTrackedData: null };
      obj = { name: closure_0 };
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
  const item = impressions.forEach((type) => {
    if (type.type === obj(outer1_1[2]).ImpressionTypes.PAGE) {
      obj.page = type.name;
    } else {
      obj.section = type.name;
    }
  });
  return obj;
};
export const getImpressionStack = function getImpressionStack() {
  return withEqualityFn.getState().impressions;
};