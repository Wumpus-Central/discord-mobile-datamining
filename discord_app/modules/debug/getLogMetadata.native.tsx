// === Module 10369: getLogMetadata ===

// Module 10369 (getLogMetadata)
const result = require("set").fileFinishedImporting("modules/debug/getLogMetadata.native.tsx");

export default function getLogMetadata() {
  let Build;
  let DeviceVendorID;
  let Identifier;
  let Manifest;
  let ReleaseChannel;
  let Version;
  let obj = importAll(1578);
  const constants = obj.getConstants();
  obj = { logsUploaded: null, Identifier: null, Version: null, Manifest: null, ReleaseChannel: null, Build: null, JSBuildNumber: null, DeviceVendorID: null, DeviceInfo: null, systemVersion: null };
  ({ Identifier, Version, Manifest, ReleaseChannel, Build, DeviceVendorID } = constants);
  obj[0] = new Date().toISOString();
  obj[1] = Identifier;
  obj[2] = Version;
  obj[3] = Manifest;
  obj[4] = ReleaseChannel;
  obj[5] = Build;
  const date = new Date();
  obj[6] = importAll(1578).getBuildNumberLabel();
  obj[7] = DeviceVendorID;
  const obj4 = importAll(1578);
  obj[8] = require(4173) /* DCDDeviceManager */.getDeviceInfo();
  const obj5 = require(4173) /* DCDDeviceManager */;
  obj[9] = require(4173) /* DCDDeviceManager */.getSystemVersion();
  return obj;
};