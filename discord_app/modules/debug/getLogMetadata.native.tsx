// discord_app/modules/debug/getLogMetadata.native.tsx
import ClientInfoUtilsAll from "../../utils/native/ClientInfoUtils.tsx";
import DeviceUtils from "../../utils/native/DeviceUtils.tsx";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/debug/getLogMetadata.native.tsx");

export default function getLogMetadata() {
  let obj = ClientInfoUtilsAll;
  constants = obj.getConstants();
  obj = {
    logsUploaded: new Date().toISOString(),
    Identifier,
    Version,
    Manifest,
    ReleaseChannel,
    Build,
    JSBuildNumber: null,
    DeviceVendorID: null,
    DeviceInfo: null,
    systemVersion: null,
  };
  ({ Identifier, Version, Manifest, ReleaseChannel, Build, DeviceVendorID } = constants);
  const date = new Date();
  obj.JSBuildNumber = ClientInfoUtilsAll.getBuildNumberLabel();
  obj.DeviceVendorID = DeviceVendorID;
  obj.DeviceInfo = DeviceUtils.getDeviceInfo();
  obj.systemVersion = DeviceUtils.getSystemVersion();
  return obj;
}
