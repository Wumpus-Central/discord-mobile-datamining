// === Module 16622: getTimeZone ===

// Module 16622 (getTimeZone)
import set from "set" /* 2 */;
import DCDDeviceManager from "DCDDeviceManager" /* 4359 */;

const result = set.fileFinishedImporting("lib/getTimeZone.native.tsx");

export default function getTimeZone() {
  return DCDDeviceManager.getTimeZone();
};