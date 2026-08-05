import { DCDDeviceManager } from "../utils/native/DeviceUtils.tsx";
// discord_app/lib/getTimeZone.native.tsx
const result = require("set").fileFinishedImporting("lib/getTimeZone.native.tsx");

export default function getTimeZone() {
  return DCDDeviceManager /* DCDDeviceManager */.getTimeZone();
};