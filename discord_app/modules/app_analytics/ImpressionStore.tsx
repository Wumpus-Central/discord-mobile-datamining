// discord_app/modules/app_analytics/ImpressionStore.tsx
import discord_common_AnalyticsUtils from "../../../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx";
import identity from "../../../_runtime/metro/01243__.js";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;

let closure_2 = Object.freeze({ debugTrackedData: null, impressions: [] });
const withEqualityFn = identity.createWithEqualityFn(() => closure_2);
const result = size.fileFinishedImporting("modules/app_analytics/ImpressionStore.tsx");

export const setCurrentImpression = function setCurrentImpression(arg0) {
  _require = arg0;
  require("ReactBatchUpdates").batchUpdates(() => {
    withEqualityFn.setState((impressions) => {
      const obj = { impressions: null };
      const items = [];
      items[HermesBuiltin.arraySpread(impressions.impressions, 0)] = closure_1_0;
      obj.impressions = items;
      return obj;
    });
  });
};
export const cleanupImpression = function cleanupImpression(arg0) {
  _require = arg0;
  require("ReactBatchUpdates").batchUpdates(() => {
    withEqualityFn.setState((impressions) => {
      const obj = { impressions: null };
      impressions = impressions.impressions;
      obj.impressions = impressions.filter((sequenceId) => sequenceId.sequenceId !== sequenceId.sequenceId);
      return obj;
    });
  });
};
export const setDebugTrackedData = function setDebugTrackedData(arg0, arg1) {
  _require = arg0;
  dependencyMap = arg1;
  require("ReactBatchUpdates").batchUpdates(() => {
    withEqualityFn.setState(() => {
      const obj = { debugTrackedData: null };
      const merged = Object.assign(closure_1_1);
      obj.debugTrackedData = { name };
      return obj;
    });
  });
};
export const useImpressionStore = withEqualityFn;
export const getLocation = function getLocation() {
  const obj = {};
  const impressions = withEqualityFn.getState().impressions;
  const item = impressions.forEach((type) => {
    if (type.type === discord_common_AnalyticsUtils.ImpressionTypes.PAGE) {
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
