// discord_app/modules/debug/getLogMetadata.native.tsx
import react_nativeAll from "../../utils/native/ClientInfoUtils.tsx";
import DeviceUtils from "../../utils/native/DeviceUtils.tsx";
import size from "../../../_runtime/metro/00002__.js";

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
  const obj2 = {
    logsUploaded: date.toISOString(),
    Identifier,
    Version,
    Manifest,
    ReleaseChannel,
    Build,
    JSBuildNumber: obj4.getBuildNumberLabel(),
    DeviceVendorID,
    DeviceInfo: obj5.getDeviceInfo(),
    systemVersion: obj6.getSystemVersion(),
  };
  ({ Identifier, Version, Manifest, ReleaseChannel, Build, DeviceVendorID } = constants);
  date = new Date();
  obj4 = react_nativeAll;
  obj5 = DeviceUtils;
  obj6 = DeviceUtils;
  return obj2;
}
