// === Module 13171: hasPerformanceForKrispFullband ===

// Module 13171 (hasPerformanceForKrispFullband)
import obj132 from "obj132" /* 2 */;
import getMediaPerformanceClassDefault from "getMediaPerformanceClass" /* 5418 */;

const result = obj132.fileFinishedImporting("modules/device/hasPerformanceForKrispFullband.tsx");

export default function hasPerformanceForKrispFullband() {
  const tmp = getMediaPerformanceClassDefault();
  let tmp2 = null === tmp;
  if (!tmp2) {
    tmp2 = tmp >= 31;
  }
  return tmp2;
};