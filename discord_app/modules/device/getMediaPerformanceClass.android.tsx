// discord_app/modules/device/getMediaPerformanceClass.android.tsx
import set from "../../../_runtime/00002_set.js";
import DCDDeviceManager from "../../utils/native/DeviceUtils.tsx";

const result = set.fileFinishedImporting("modules/device/getMediaPerformanceClass.android.tsx");

export default function getMediaPerformanceClass() {
  return DCDDeviceManager.getDeviceMediaPerformanceClass();
}
