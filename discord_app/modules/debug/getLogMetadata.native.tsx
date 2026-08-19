// === Module 10138: getLogMetadata ===

// Module 10138 (getLogMetadata)
import obj132 from "obj132" /* 2 */;
import getConstantsAll from "getConstants" /* 1626 */;
import DCDDeviceManager from "DCDDeviceManager" /* 4354 */;

const result = obj132.fileFinishedImporting("modules/debug/getLogMetadata.native.tsx");

export default function getLogMetadata() {
  let obj = getConstantsAll;
  const constants = obj.getConstants();
  obj = { logsUploaded: new Date().toISOString(), Identifier, Version, Manifest, ReleaseChannel, Build, JSBuildNumber: null, DeviceVendorID: null, DeviceInfo: null, systemVersion: null };
  ({ Identifier, Version, Manifest, ReleaseChannel, Build, DeviceVendorID } = constants);
  const date = new Date();
  obj[6] = getConstantsAll.getBuildNumberLabel();
  obj[7] = DeviceVendorID;
  obj[8] = DCDDeviceManager.getDeviceInfo();
  obj[9] = DCDDeviceManager.getSystemVersion();
  return obj;
};