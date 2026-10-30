// === Module 5688: RegionalFeatureConfigUtils ===

// Module 5688 (RegionalFeatureConfigUtils)
import initialize from "initialize" /* 504 */;
import RegionalFeatureConfigStore from "RegionalFeatureConfigStore" /* 5689 */;

const require = globalThis.__r;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/regional_feature_config/RegionalFeatureConfigUtils.tsx");

export function isFeatureAgeGated(AGE_GATED_SPACES) {
  return RegionalFeatureConfigStore.isFeatureAgeGated(AGE_GATED_SPACES);
}
export function useIsFeatureAgeGated(AGE_GATED_SPACES) {
  _require = AGE_GATED_SPACES;
  const items = [RegionalFeatureConfigStore];
  return require("initialize").useStateFromStores(items, () => RegionalFeatureConfigStore.isFeatureAgeGated(closure_0));
}
export function isSettingTeenByDefault(GUILD_ACTIVITY_STATUS) {
  return RegionalFeatureConfigStore.isSettingTeenByDefault(GUILD_ACTIVITY_STATUS);
}
export function useIsSettingTeenByDefault(GUILD_ACTIVITY_STATUS) {
  _require = GUILD_ACTIVITY_STATUS;
  const items = [RegionalFeatureConfigStore];
  return require("initialize").useStateFromStores(items, () => RegionalFeatureConfigStore.isSettingTeenByDefault(closure_0));
}
export function hasAgeGatedFeatures() {
  return RegionalFeatureConfigStore.hasAgeGatedFeatures();
}
export function useHasAgeGatedFeatures() {
  const items = [RegionalFeatureConfigStore];
  return initialize.useStateFromStores(items, () => RegionalFeatureConfigStore.hasAgeGatedFeatures());
}
export function hasTeenDefaults() {
  return RegionalFeatureConfigStore.hasTeenDefaults();
}
export function useHasTeenDefaults() {
  const items = [RegionalFeatureConfigStore];
  return initialize.useStateFromStores(items, () => RegionalFeatureConfigStore.hasTeenDefaults());
}
export function shouldCollectAppStoreSignal() {
  return RegionalFeatureConfigStore.shouldCollectAppStoreSignal();
}