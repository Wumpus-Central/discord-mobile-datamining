// discord_app/modules/app_analytics/ImpressionStore.tsx
import discord_common_AnalyticsUtils from "../../../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx";
import 01254__ from "../../../_runtime/metro/01254__.js";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, dependencyMap;

let closure_2 = Object.freeze({ debugTrackedData: null, impressions: [] });
const withEqualityFn = module_1254.createWithEqualityFn(() => closure_2);
const result = size.fileFinishedImporting("modules/app_analytics/ImpressionStore.tsx");

export const setCurrentImpression = function setCurrentImpression(arg0) {
  let closure_0;
  _require = arg0;
  let obj = require("react-native");
  obj.batchUpdates(() => {
    withEqualityFn.setState((impressions) => {
      let items;
      const obj = { impressions: items };
      items = [];
      items[HermesBuiltin.arraySpread(items, impressions.impressions, 0)] = closure_1_0;
      return obj;
    });
  });
};
export const cleanupImpression = function cleanupImpression(arg0) {
  let closure_0;
  _require = arg0;
  let obj = require("react-native");
  obj.batchUpdates(() => {
    withEqualityFn.setState((impressions) => {
      let sequenceId;
      const obj = { impressions: impressions.filter((sequenceId) => sequenceId.sequenceId !== sequenceId.sequenceId) };
      impressions = impressions.impressions;
      return obj;
    });
  });
};
export const setDebugTrackedData = function setDebugTrackedData(arg0, arg1) {
  let closure_0;
  let closure_1;
  _require = arg0;
  dependencyMap = arg1;
  let obj = require("react-native");
  obj.batchUpdates(() => {
    let name;
    withEqualityFn.setState(() => {
      let obj2;
      const obj = { debugTrackedData: obj2 };
      obj2 = { name };
      const merged = Object.assign(closure_1_1);
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