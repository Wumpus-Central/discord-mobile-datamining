import { isTablet } from "../../../discord_common/js/shared/lib/PlatformUtils.tsx";
// discord_app/modules/activities/useIsActivitiesEnabledForCurrentPlatform.tsx
const result = require("set").fileFinishedImporting("modules/activities/useIsActivitiesEnabledForCurrentPlatform.tsx");

export const useIsActivitiesEnabledForCurrentPlatform = function useIsActivitiesEnabledForCurrentPlatform() {
  return !isTablet /* isTablet */.isTablet;
};
export const getIsActivitiesEnabledForCurrentPlatform = function getIsActivitiesEnabledForCurrentPlatform() {
  return !isTablet /* isTablet */.isTablet;
};