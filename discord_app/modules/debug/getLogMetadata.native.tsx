// discord_app/modules/debug/getLogMetadata.native.tsx
import ClientInfoUtilsAll from "../../utils/native/ClientInfoUtils.tsx";
import DeviceUtils from "../../utils/native/DeviceUtils.tsx";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/debug/getLogMetadata.native.tsx");

export default function getLogMetadata() {
  constants = ClientInfoUtilsAll.getConstants();
  const obj2 = {
    logsUploaded: null,
    Identifier: null,
    Version: null,
    Manifest: null,
    ReleaseChannel: null,
    Build: null,
    JSBuildNumber: null,
    DeviceVendorID: null,
    DeviceInfo: null,
    systemVersion: null,
  };
  ({ Identifier, Version, Manifest, ReleaseChannel, Build, DeviceVendorID } = constants);
  obj2.logsUploaded = new Date().toISOString();
  obj2.Identifier = Identifier;
  obj2.Version = Version;
  obj2.Manifest = Manifest;
  obj2.ReleaseChannel = ReleaseChannel;
  obj2.Build = Build;
  const date = new Date();
  obj2.JSBuildNumber = ClientInfoUtilsAll.getBuildNumberLabel();
  obj2.DeviceVendorID = DeviceVendorID;
  obj2.DeviceInfo = DeviceUtils.getDeviceInfo();
  obj2.systemVersion = DeviceUtils.getSystemVersion();
  return obj2;
}
