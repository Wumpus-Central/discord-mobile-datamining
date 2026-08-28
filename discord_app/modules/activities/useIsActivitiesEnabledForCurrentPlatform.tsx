// === Module 9384: useIsActivitiesEnabledForCurrentPlatform ===

// Module 9384 (useIsActivitiesEnabledForCurrentPlatform)
import set from "set" /* 2 */;
import isTablet from "isTablet" /* 4720 */;

const result = set.fileFinishedImporting("modules/activities/useIsActivitiesEnabledForCurrentPlatform.tsx");

export const useIsActivitiesEnabledForCurrentPlatform = function useIsActivitiesEnabledForCurrentPlatform() {
  return !isTablet.isTablet;
};
export const getIsActivitiesEnabledForCurrentPlatform = function getIsActivitiesEnabledForCurrentPlatform() {
  return !isTablet.isTablet;
};