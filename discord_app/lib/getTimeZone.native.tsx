// discord_app/lib/getTimeZone.native.tsx
import set from "../../_runtime/00002_set.js";
import DCDDeviceManager from "../utils/native/DeviceUtils.tsx";

const result = set.fileFinishedImporting("lib/getTimeZone.native.tsx");

export default function getTimeZone() {
  return DCDDeviceManager.getTimeZone();
}
