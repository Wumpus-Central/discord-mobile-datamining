// discord_app/modules/device/getMediaPerformanceClass.android.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import DCDDeviceManager from "../../utils/native/DeviceUtils.tsx";

const result = obj132.fileFinishedImporting("modules/device/getMediaPerformanceClass.android.tsx");

export default function getMediaPerformanceClass() {
  return DCDDeviceManager.getDeviceMediaPerformanceClass();
};