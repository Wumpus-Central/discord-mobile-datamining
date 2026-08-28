// === Module 10215: getLogMetadata ===

// Module 10215 (getLogMetadata)
import set from "set" /* 2 */;
import getConstantsAll from "getConstants" /* 1626 */;
import DCDDeviceManager from "DCDDeviceManager" /* 4425 */;

const result = set.fileFinishedImporting("modules/debug/getLogMetadata.native.tsx");

export default function getLogMetadata() {
  let obj = getConstantsAll;
  const constants = obj.getConstants();
  obj = { logsUploaded: new Date().toISOString(), Identifier, Version, Manifest, ReleaseChannel, Build, JSBuildNumber: null, DeviceVendorID: null, DeviceInfo: null, systemVersion: null };
  ({ Identifier, Version, Manifest, ReleaseChannel, Build, DeviceVendorID } = constants);
  const date = new Date();
  obj[6] = getConstantsAll.getBuildNumberLabel();
  obj[7] = DeviceVendorID;
  const obj4 = getConstantsAll;
  obj[8] = DCDDeviceManager.getDeviceInfo();
  const obj5 = DCDDeviceManager;
  obj[9] = DCDDeviceManager.getSystemVersion();
  return obj;
};