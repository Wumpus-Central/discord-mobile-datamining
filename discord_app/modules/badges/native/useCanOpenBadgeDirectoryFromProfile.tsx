// === Module 10884: useCanOpenBadgeDirectoryFromProfile ===

// Module 10884 (useCanOpenBadgeDirectoryFromProfile)
import c from "c" /* 576 */;
import BadgeManagementExperiment from "BadgeManagementExperiment" /* 10883 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/badges/native/useCanOpenBadgeDirectoryFromProfile.tsx");

export const useCanOpenBadgeDirectoryFromProfile = ReactCompilerGating.isReactCompilerEnabled() ? ((location) => {
  const cResult = c.c(4);
  const _location = location.location;
  if (cResult[0] !== _location) {
    const obj2 = { location: _location };
    cResult[0] = _location;
    cResult[1] = obj2;
    let tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  let isBadgeManagementEnabled = BadgeManagementExperiment.useIsBadgeManagementEnabled(tmp4);
  if (cResult[2] !== _location) {
    const obj3 = { location: _location };
    cResult[2] = _location;
    cResult[3] = obj3;
    let tmp6 = obj3;
  } else {
    tmp6 = cResult[3];
  }
  const tmpResult = BadgeManagementExperiment;
  if (isBadgeManagementEnabled) {
    isBadgeManagementEnabled = tmpResult2.useIsBadgeDirectoryUpdatesEnabled(tmp6);
  }
  return isBadgeManagementEnabled;
}) : ((location) => {
  const _location = location.location;
  let isBadgeManagementEnabled = BadgeManagementExperiment.useIsBadgeManagementEnabled({ location: _location });
  if (isBadgeManagementEnabled) {
    isBadgeManagementEnabled = obj2.useIsBadgeDirectoryUpdatesEnabled({ location: _location });
  }
  return isBadgeManagementEnabled;
});