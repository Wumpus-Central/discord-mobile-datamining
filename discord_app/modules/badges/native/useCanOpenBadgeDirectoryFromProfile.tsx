// === Module 9863: useCanOpenBadgeDirectoryFromProfile ===

// Module 9863 (useCanOpenBadgeDirectoryFromProfile)
import BadgeManagementExperiment from "BadgeManagementExperiment" /* 9862 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/badges/native/useCanOpenBadgeDirectoryFromProfile.tsx");

export function useCanOpenBadgeDirectoryFromProfile(location) {
  const _location = location.location;
  let isBadgeManagementEnabled = BadgeManagementExperiment.useIsBadgeManagementEnabled({ location: _location });
  if (isBadgeManagementEnabled) {
    isBadgeManagementEnabled = obj2.useIsBadgeDirectoryUpdatesEnabled({ location: _location });
  }
  return isBadgeManagementEnabled;
}