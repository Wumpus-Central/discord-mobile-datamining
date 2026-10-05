// === Module 5580: RegionalFeatureConfigUtils ===

// Module 5580 (RegionalFeatureConfigUtils)
import get_initialized from "get initialized" /* 504 */;
import react from "react" /* 576 */;
import RegionalFeatureConfigStore from "RegionalFeatureConfigStore" /* 5104 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let first;
  let tmp6;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(3);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [RegionalFeatureConfigStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function u() {
      return RegionalFeatureConfigStore.isFeatureAgeGated(closure_0);
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStores(first, tmp6);
}) : ((arg0) => {
  let closure_0;
  _require = arg0;
  const items = [RegionalFeatureConfigStore];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => RegionalFeatureConfigStore.isFeatureAgeGated(closure_0));
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let first;
  let tmp6;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(3);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [RegionalFeatureConfigStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function u() {
      return RegionalFeatureConfigStore.isSettingTeenByDefault(closure_0);
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStores(first, tmp6);
}) : ((arg0) => {
  let closure_0;
  _require = arg0;
  const items = [RegionalFeatureConfigStore];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => RegionalFeatureConfigStore.isSettingTeenByDefault(closure_0));
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp4;
  let tmp5;
  const obj = react;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [RegionalFeatureConfigStore];
    const fn = function s() {
      return RegionalFeatureConfigStore.hasAgeGatedFeatures();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  return tmpResult.useStateFromStores(tmp4, tmp5);
}) : (() => {
  const items = [RegionalFeatureConfigStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => RegionalFeatureConfigStore.hasAgeGatedFeatures());
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp4;
  let tmp5;
  const obj = react;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [RegionalFeatureConfigStore];
    const fn = function s() {
      return RegionalFeatureConfigStore.hasTeenDefaults();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  return tmpResult.useStateFromStores(tmp4, tmp5);
}) : (() => {
  const items = [RegionalFeatureConfigStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => RegionalFeatureConfigStore.hasTeenDefaults());
});
const result = size.fileFinishedImporting("modules/regional_feature_config/RegionalFeatureConfigUtils.tsx");

export const isFeatureAgeGated = function isFeatureAgeGated(AGE_GATED_SPACES) {
  return RegionalFeatureConfigStore.isFeatureAgeGated(AGE_GATED_SPACES);
};
export const useIsFeatureAgeGated = tmp2;
export const isSettingTeenByDefault = function isSettingTeenByDefault(GUILD_ACTIVITY_STATUS) {
  return RegionalFeatureConfigStore.isSettingTeenByDefault(GUILD_ACTIVITY_STATUS);
};
export const useIsSettingTeenByDefault = tmp3;
export const hasAgeGatedFeatures = function hasAgeGatedFeatures() {
  return RegionalFeatureConfigStore.hasAgeGatedFeatures();
};
export const useHasAgeGatedFeatures = tmp4;
export const hasTeenDefaults = function hasTeenDefaults() {
  return RegionalFeatureConfigStore.hasTeenDefaults();
};
export const useHasTeenDefaults = tmp5;
export const shouldCollectAppStoreSignal = function shouldCollectAppStoreSignal() {
  return RegionalFeatureConfigStore.shouldCollectAppStoreSignal();
};