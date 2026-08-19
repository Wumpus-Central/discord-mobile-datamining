// discord_app/lib/getTimeZone.native.tsx
import obj132 from "../../_runtime/00002_obj132.js";
import DCDDeviceManager from "../utils/native/DeviceUtils.tsx";

const result = obj132.fileFinishedImporting("lib/getTimeZone.native.tsx");

export default function getTimeZone() {
  return DCDDeviceManager.getTimeZone();
};