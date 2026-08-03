// === Module 3872: isFeatureAgeGated ===

// Module 3872 (isFeatureAgeGated)
import getRegionalFeatureConfig from "getRegionalFeatureConfig";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/regional_feature_config/RegionalFeatureConfigUtils.tsx");

export const isFeatureAgeGated = function isFeatureAgeGated(arg0) {
  return getRegionalFeatureConfig.isFeatureAgeGated(arg0);
};
export const useIsFeatureAgeGated = function useIsFeatureAgeGated(AGE_GATED_SPACES) {
  const _require = AGE_GATED_SPACES;
  const items = [getRegionalFeatureConfig];
  return _require(589).useStateFromStores(items, () => outer1_2.isFeatureAgeGated(closure_0));
};
export const isSettingTeenByDefault = function isSettingTeenByDefault(arg0) {
  return getRegionalFeatureConfig.isSettingTeenByDefault(arg0);
};
export const useIsSettingTeenByDefault = function useIsSettingTeenByDefault(GUILD_ACTIVITY_STATUS) {
  const _require = GUILD_ACTIVITY_STATUS;
  const items = [getRegionalFeatureConfig];
  return _require(589).useStateFromStores(items, () => outer1_2.isSettingTeenByDefault(closure_0));
};
export const hasAgeGatedFeatures = function hasAgeGatedFeatures() {
  return getRegionalFeatureConfig.hasAgeGatedFeatures();
};
export const useHasAgeGatedFeatures = function useHasAgeGatedFeatures() {
  const items = [getRegionalFeatureConfig];
  return require(589) /* initialize */.useStateFromStores(items, () => getRegionalFeatureConfig.hasAgeGatedFeatures());
};
export const hasTeenDefaults = function hasTeenDefaults() {
  return getRegionalFeatureConfig.hasTeenDefaults();
};
export const useHasTeenDefaults = function useHasTeenDefaults() {
  const items = [getRegionalFeatureConfig];
  return require(589) /* initialize */.useStateFromStores(items, () => getRegionalFeatureConfig.hasTeenDefaults());
};
export const shouldCollectAppStoreSignal = function shouldCollectAppStoreSignal() {
  return getRegionalFeatureConfig.shouldCollectAppStoreSignal();
};