// === Module 9366: useIsActivitiesEnabledForCurrentPlatform ===

// Module 9366 (useIsActivitiesEnabledForCurrentPlatform)
import set from "set" /* 2 */;
import isTablet from "isTablet" /* 4707 */;

const result = set.fileFinishedImporting("modules/activities/useIsActivitiesEnabledForCurrentPlatform.tsx");

export const useIsActivitiesEnabledForCurrentPlatform = function useIsActivitiesEnabledForCurrentPlatform() {
  return !isTablet.isTablet;
};
export const getIsActivitiesEnabledForCurrentPlatform = function getIsActivitiesEnabledForCurrentPlatform() {
  return !isTablet.isTablet;
};