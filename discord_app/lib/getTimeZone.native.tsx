// discord_app/lib/getTimeZone.native.tsx
import DeviceUtils from "../utils/native/DeviceUtils.tsx";
import size from "../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("lib/getTimeZone.native.tsx");

export default function getTimeZone() {
  return DeviceUtils.getTimeZone();
}
