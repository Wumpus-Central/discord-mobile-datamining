// === Module 16773: getTimeZone ===

// Module 16773 (getTimeZone)
import set from "set" /* 2 */;
import DCDDeviceManager from "DCDDeviceManager" /* 4424 */;

const result = set.fileFinishedImporting("lib/getTimeZone.native.tsx");

export default function getTimeZone() {
  return DCDDeviceManager.getTimeZone();
};