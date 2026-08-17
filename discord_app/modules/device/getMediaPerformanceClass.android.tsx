// discord_app/modules/device/getMediaPerformanceClass.android.tsx
import set from "set" /* 2 */;
import DCDDeviceManager from "DCDDeviceManager" /* 4354 */;

const result = set.fileFinishedImporting("modules/device/getMediaPerformanceClass.android.tsx");

export default function getMediaPerformanceClass() {
  return DCDDeviceManager.getDeviceMediaPerformanceClass();
};