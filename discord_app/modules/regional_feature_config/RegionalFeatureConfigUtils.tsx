// === Module 4172: isFeatureAgeGated ===

// Module 4172 (isFeatureAgeGated)
import initialize from "initialize" /* 589 */;
import closure_2 from "getRegionalFeatureConfig" /* 4173 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/regional_feature_config/RegionalFeatureConfigUtils.tsx");

export const isFeatureAgeGated = function isFeatureAgeGated(arg0) {
  return closure_2.isFeatureAgeGated(arg0);
};
export const useIsFeatureAgeGated = function useIsFeatureAgeGated(AGE_GATED_SPACES) {
  const _require = AGE_GATED_SPACES;
  const items = [closure_2];
  return _require(589).useStateFromStores(items, () => closure_1_2.isFeatureAgeGated(closure_0));
};
export const isSettingTeenByDefault = function isSettingTeenByDefault(arg0) {
  return closure_2.isSettingTeenByDefault(arg0);
};
export const useIsSettingTeenByDefault = function useIsSettingTeenByDefault(GUILD_ACTIVITY_STATUS) {
  const _require = GUILD_ACTIVITY_STATUS;
  const items = [closure_2];
  return _require(589).useStateFromStores(items, () => closure_1_2.isSettingTeenByDefault(closure_0));
};
export const hasAgeGatedFeatures = function hasAgeGatedFeatures() {
  return closure_2.hasAgeGatedFeatures();
};
export const useHasAgeGatedFeatures = function useHasAgeGatedFeatures() {
  const items = [closure_2];
  return initialize.useStateFromStores(items, () => closure_2.hasAgeGatedFeatures());
};
export const hasTeenDefaults = function hasTeenDefaults() {
  return closure_2.hasTeenDefaults();
};
export const useHasTeenDefaults = function useHasTeenDefaults() {
  const items = [closure_2];
  return initialize.useStateFromStores(items, () => closure_2.hasTeenDefaults());
};
export const shouldCollectAppStoreSignal = function shouldCollectAppStoreSignal() {
  return closure_2.shouldCollectAppStoreSignal();
};