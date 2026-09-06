// === Module 10195: getLogMetadata ===

// Module 10195 (getLogMetadata)
import ClientInfoUtilsAll from "ClientInfoUtils" /* 1364 */;
import DeviceUtils from "DeviceUtils" /* 4539 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/debug/getLogMetadata.native.tsx");

export default function getLogMetadata() {
  let obj = ClientInfoUtilsAll;
  constants = obj.getConstants();
  obj = { logsUploaded: new Date().toISOString(), Identifier, Version, Manifest, ReleaseChannel, Build, JSBuildNumber: null, DeviceVendorID: null, DeviceInfo: null, systemVersion: null };
  ({ Identifier, Version, Manifest, ReleaseChannel, Build, DeviceVendorID } = constants);
  const date = new Date();
  obj.JSBuildNumber = ClientInfoUtilsAll.getBuildNumberLabel();
  obj.DeviceVendorID = DeviceVendorID;
  obj.DeviceInfo = DeviceUtils.getDeviceInfo();
  obj.systemVersion = DeviceUtils.getSystemVersion();
  return obj;
};