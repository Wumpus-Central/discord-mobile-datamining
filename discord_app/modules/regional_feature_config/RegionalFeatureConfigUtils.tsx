// === Module 5423: RegionalFeatureConfigUtils ===

// Module 5423 (RegionalFeatureConfigUtils)
import initialize from "initialize" /* 504 */;
import RegionalFeatureConfigStore from "RegionalFeatureConfigStore" /* 4775 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/regional_feature_config/RegionalFeatureConfigUtils.tsx");

export const isFeatureAgeGated = function isFeatureAgeGated(arg0) {
  return RegionalFeatureConfigStore.isFeatureAgeGated(arg0);
};
export const useIsFeatureAgeGated = function useIsFeatureAgeGated(AGE_GATED_SPACES) {
  _require = AGE_GATED_SPACES;
  const items = [RegionalFeatureConfigStore];
  return require("initialize").useStateFromStores(items, () => RegionalFeatureConfigStore.isFeatureAgeGated(closure_0));
};
export const isSettingTeenByDefault = function isSettingTeenByDefault(arg0) {
  return RegionalFeatureConfigStore.isSettingTeenByDefault(arg0);
};
export const useIsSettingTeenByDefault = function useIsSettingTeenByDefault(GUILD_ACTIVITY_STATUS) {
  _require = GUILD_ACTIVITY_STATUS;
  const items = [RegionalFeatureConfigStore];
  return require("initialize").useStateFromStores(items, () => RegionalFeatureConfigStore.isSettingTeenByDefault(closure_0));
};
export const hasAgeGatedFeatures = function hasAgeGatedFeatures() {
  return RegionalFeatureConfigStore.hasAgeGatedFeatures();
};
export const useHasAgeGatedFeatures = function useHasAgeGatedFeatures() {
  const items = [RegionalFeatureConfigStore];
  return initialize.useStateFromStores(items, () => RegionalFeatureConfigStore.hasAgeGatedFeatures());
};
export const hasTeenDefaults = function hasTeenDefaults() {
  return RegionalFeatureConfigStore.hasTeenDefaults();
};
export const useHasTeenDefaults = function useHasTeenDefaults() {
  const items = [RegionalFeatureConfigStore];
  return initialize.useStateFromStores(items, () => RegionalFeatureConfigStore.hasTeenDefaults());
};
export const shouldCollectAppStoreSignal = function shouldCollectAppStoreSignal() {
  return RegionalFeatureConfigStore.shouldCollectAppStoreSignal();
};