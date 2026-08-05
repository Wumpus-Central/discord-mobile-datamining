// discord_app/lib/getTimeZone.native.tsx
const result = require("set").fileFinishedImporting("lib/getTimeZone.native.tsx");

export default function getTimeZone() {
  return require("../utils/native/DeviceUtils.tsx") /* DCDDeviceManager */.getTimeZone();
};