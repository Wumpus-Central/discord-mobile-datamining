// discord_app/modules/activities/useIsActivitiesEnabledForCurrentPlatform.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import isTablet from "../../../discord_common/js/shared/lib/PlatformUtils.tsx";

const result = obj132.fileFinishedImporting("modules/activities/useIsActivitiesEnabledForCurrentPlatform.tsx");

export const useIsActivitiesEnabledForCurrentPlatform = function useIsActivitiesEnabledForCurrentPlatform() {
  return !isTablet.isTablet;
};
export const getIsActivitiesEnabledForCurrentPlatform = function getIsActivitiesEnabledForCurrentPlatform() {
  return !isTablet.isTablet;
};