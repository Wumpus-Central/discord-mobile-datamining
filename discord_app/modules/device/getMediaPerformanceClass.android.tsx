// discord_app/modules/device/getMediaPerformanceClass.android.tsx
import { DCDDeviceManager } from "../../utils/native/DeviceUtils.tsx";
const result = require("set").fileFinishedImporting("modules/device/getMediaPerformanceClass.android.tsx");

export default function getMediaPerformanceClass() {
  return DCDDeviceManager /* DCDDeviceManager */.getDeviceMediaPerformanceClass();
};