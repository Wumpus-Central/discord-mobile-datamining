// === Module 7348: getMediaPerformanceClass ===

// Module 7348 (getMediaPerformanceClass)
import set from "set" /* 2 */;
import DCDDeviceManager from "DCDDeviceManager" /* 4424 */;

const result = set.fileFinishedImporting("modules/device/getMediaPerformanceClass.android.tsx");

export default function getMediaPerformanceClass() {
  return DCDDeviceManager.getDeviceMediaPerformanceClass();
};