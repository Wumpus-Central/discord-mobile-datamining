// === Module 12535: getLogMetadata ===

// Module 12535 (getLogMetadata)
import react_nativeAll from "react-native" /* 1368 */;
import DeviceUtils from "DeviceUtils" /* 4866 */;
import size from "module_2" /* 2 */;

let constants;

const result = size.fileFinishedImporting("modules/debug/getLogMetadata.native.tsx");

export default function getLogMetadata() {
  let Build;
  let DeviceVendorID;
  let Identifier;
  let Manifest;
  let ReleaseChannel;
  let Version;
  let date;
  let obj4;
  let obj5;
  let obj6;
  const obj = react_nativeAll;
  constants = obj.getConstants();
  const obj2 = { logsUploaded: date.toISOString(), Identifier, Version, Manifest, ReleaseChannel, Build, JSBuildNumber: obj4.getBuildNumberLabel(), DeviceVendorID, DeviceInfo: obj5.getDeviceInfo(), systemVersion: obj6.getSystemVersion() };
  ({ Identifier, Version, Manifest, ReleaseChannel, Build, DeviceVendorID } = constants);
  date = new Date();
  obj4 = react_nativeAll;
  obj5 = DeviceUtils;
  obj6 = DeviceUtils;
  return obj2;
};