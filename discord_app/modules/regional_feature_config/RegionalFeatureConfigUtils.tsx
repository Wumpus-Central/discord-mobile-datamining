// === Module 5580: RegionalFeatureConfigUtils ===

// Module 5580 (RegionalFeatureConfigUtils)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import RegionalFeatureConfigStore from "RegionalFeatureConfigStore" /* 5104 */;

require = fn;
fn(558);
let ReactCompilerGating = fn(558);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [RegionalFeatureConfigStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function u() {
      return RegionalFeatureConfigStore.isFeatureAgeGated(closure_0);
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = require("c");
  return require("initialize").useStateFromStores(first, tmp6);
}) : ((arg0) => {
  _require = arg0;
  const items = [RegionalFeatureConfigStore];
  return require("initialize").useStateFromStores(items, () => RegionalFeatureConfigStore.isFeatureAgeGated(closure_0));
});
ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [RegionalFeatureConfigStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function u() {
      return RegionalFeatureConfigStore.isSettingTeenByDefault(closure_0);
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = require("c");
  return require("initialize").useStateFromStores(first, tmp6);
}) : ((arg0) => {
  _require = arg0;
  const items = [RegionalFeatureConfigStore];
  return require("initialize").useStateFromStores(items, () => RegionalFeatureConfigStore.isSettingTeenByDefault(closure_0));
});
ReactCompilerGating = fn(558);
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
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
  return initialize.useStateFromStores(tmp4, tmp5);
}) : (() => {
  const items = [RegionalFeatureConfigStore];
  return initialize.useStateFromStores(items, () => RegionalFeatureConfigStore.hasAgeGatedFeatures());
});
const size = fn(2);
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
export const useHasTeenDefaults = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
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
  return initialize.useStateFromStores(tmp4, tmp5);
}) : (() => {
  const items = [RegionalFeatureConfigStore];
  return initialize.useStateFromStores(items, () => RegionalFeatureConfigStore.hasTeenDefaults());
});
export const shouldCollectAppStoreSignal = function shouldCollectAppStoreSignal() {
  return RegionalFeatureConfigStore.shouldCollectAppStoreSignal();
};