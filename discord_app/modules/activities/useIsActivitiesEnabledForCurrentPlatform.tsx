// discord_app/modules/activities/useIsActivitiesEnabledForCurrentPlatform.tsx
const result = require("set").fileFinishedImporting("modules/activities/useIsActivitiesEnabledForCurrentPlatform.tsx");

export const useIsActivitiesEnabledForCurrentPlatform = function useIsActivitiesEnabledForCurrentPlatform() {
  return !require("../../../discord_common/js/shared/lib/PlatformUtils.tsx") /* isTablet */.isTablet;
};
export const getIsActivitiesEnabledForCurrentPlatform = function getIsActivitiesEnabledForCurrentPlatform() {
  return !require("../../../discord_common/js/shared/lib/PlatformUtils.tsx") /* isTablet */.isTablet;
};