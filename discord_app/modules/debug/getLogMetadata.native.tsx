// discord_app/modules/debug/getLogMetadata.native.tsx
import set from "../../../_runtime/00002_set.js";
import getConstantsAll from "../../utils/native/ClientInfoUtils.tsx";
import DCDDeviceManager from "../../utils/native/DeviceUtils.tsx";

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