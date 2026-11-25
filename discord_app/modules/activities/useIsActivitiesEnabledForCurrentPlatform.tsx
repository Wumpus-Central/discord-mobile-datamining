// === Module 9995: useIsActivitiesEnabledForCurrentPlatform ===

// Module 9995 (useIsActivitiesEnabledForCurrentPlatform)
import shared_PlatformUtils from "shared/PlatformUtils" /* 5771 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/useIsActivitiesEnabledForCurrentPlatform.tsx");

export function useIsActivitiesEnabledForCurrentPlatform() {
  return !shared_PlatformUtils.isTablet;
}
export function getIsActivitiesEnabledForCurrentPlatform() {
  return !shared_PlatformUtils.isTablet;
}