// discord_app/modules/device/getMediaPerformanceClass.android.tsx
import DeviceUtils from "../../utils/native/DeviceUtils.tsx";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/device/getMediaPerformanceClass.android.tsx");

export default function getMediaPerformanceClass() {
  return DeviceUtils.getDeviceMediaPerformanceClass();
}
