// === Module 14115: hasPerformanceForKrispFullband ===

// Module 14115 (hasPerformanceForKrispFullband)
import getMediaPerformanceClassDefault from "getMediaPerformanceClass" /* 7744 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/device/hasPerformanceForKrispFullband.tsx");

export default function hasPerformanceForKrispFullband() {
  const tmp = getMediaPerformanceClassDefault();
  let tmp2 = null === tmp;
  if (!tmp2) {
    tmp2 = tmp >= 31;
  }
  return tmp2;
};