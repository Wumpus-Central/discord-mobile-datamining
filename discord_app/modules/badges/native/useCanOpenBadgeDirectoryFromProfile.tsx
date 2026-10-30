// discord_app/modules/badges/native/useCanOpenBadgeDirectoryFromProfile.tsx
import BadgeManagementExperiment from "../BadgeManagementExperiment.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/badges/native/useCanOpenBadgeDirectoryFromProfile.tsx");

export function useCanOpenBadgeDirectoryFromProfile(location) {
  const _location = location.location;
  let isBadgeManagementEnabled = BadgeManagementExperiment.useIsBadgeManagementEnabled({ location: _location });
  if (isBadgeManagementEnabled) {
    isBadgeManagementEnabled = obj2.useIsBadgeDirectoryUpdatesEnabled({ location: _location });
  }
  return isBadgeManagementEnabled;
}
