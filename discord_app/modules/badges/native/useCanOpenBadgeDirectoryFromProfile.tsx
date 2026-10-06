// === Module 10897: useCanOpenBadgeDirectoryFromProfile ===

// Module 10897 (useCanOpenBadgeDirectoryFromProfile)
import react from "react" /* 576 */;
import BadgeManagementExperiment from "BadgeManagementExperiment" /* 10896 */;
import BadgeDirectoryUpdatesExperiment from "BadgeDirectoryUpdatesExperiment" /* 10898 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((location) => {
  let tmp4;
  let tmp6;
  const obj = react;
  const cResult = obj.c(4);
  const _location = location.location;
  if (cResult[0] !== _location) {
    const obj2 = { location: _location };
    cResult[0] = _location;
    cResult[1] = obj2;
    tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  const tmpResult = BadgeManagementExperiment;
  let isBadgeManagementEnabled = tmpResult.useIsBadgeManagementEnabled(tmp4);
  if (cResult[2] !== _location) {
    const obj3 = { location: _location };
    cResult[2] = _location;
    cResult[3] = obj3;
    tmp6 = obj3;
  } else {
    tmp6 = cResult[3];
  }
  const tmpResult2 = BadgeDirectoryUpdatesExperiment;
  if (isBadgeManagementEnabled) {
    isBadgeManagementEnabled = tmpResult2.useIsBadgeDirectoryUpdatesEnabled(tmp6);
  }
  return isBadgeManagementEnabled;
}) : ((location) => {
  const _location = location.location;
  const obj = BadgeManagementExperiment;
  let isBadgeManagementEnabled = obj.useIsBadgeManagementEnabled({ location: _location });
  const obj2 = BadgeDirectoryUpdatesExperiment;
  if (isBadgeManagementEnabled) {
    isBadgeManagementEnabled = obj2.useIsBadgeDirectoryUpdatesEnabled({ location: _location });
  }
  return isBadgeManagementEnabled;
});
const result = size.fileFinishedImporting("modules/badges/native/useCanOpenBadgeDirectoryFromProfile.tsx");

export const useCanOpenBadgeDirectoryFromProfile = tmp2;