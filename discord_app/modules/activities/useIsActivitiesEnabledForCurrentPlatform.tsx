// discord_app/modules/activities/useIsActivitiesEnabledForCurrentPlatform.tsx
import set from "../../../_runtime/00002_set.js";
import isTablet from "../../../discord_common/js/shared/lib/PlatformUtils.tsx";

const result = set.fileFinishedImporting("modules/activities/useIsActivitiesEnabledForCurrentPlatform.tsx");

export const useIsActivitiesEnabledForCurrentPlatform = function useIsActivitiesEnabledForCurrentPlatform() {
  return !isTablet.isTablet;
};
export const getIsActivitiesEnabledForCurrentPlatform = function getIsActivitiesEnabledForCurrentPlatform() {
  return !isTablet.isTablet;
};
