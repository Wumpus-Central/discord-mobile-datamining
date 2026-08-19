// === Module 8699: useIsActivitiesEnabledForCurrentPlatform ===

// Module 8699 (useIsActivitiesEnabledForCurrentPlatform)
import obj132 from "obj132" /* 2 */;
import isTablet from "isTablet" /* 4383 */;

const result = obj132.fileFinishedImporting("modules/activities/useIsActivitiesEnabledForCurrentPlatform.tsx");

export const useIsActivitiesEnabledForCurrentPlatform = function useIsActivitiesEnabledForCurrentPlatform() {
  return !isTablet.isTablet;
};
export const getIsActivitiesEnabledForCurrentPlatform = function getIsActivitiesEnabledForCurrentPlatform() {
  return !isTablet.isTablet;
};