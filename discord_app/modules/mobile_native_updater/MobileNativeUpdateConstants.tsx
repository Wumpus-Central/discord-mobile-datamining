// discord_app/modules/mobile_native_updater/MobileNativeUpdateConstants.tsx
import URLUtilsDefault from "../../utils/URLUtils.tsx";
import hooks from "../../../_runtime/metro/04153__.js";

let tmp3 = null;
if (undefined !== process.env.INTERNAL_UPDATE_URL) {
  const _process = process;
  tmp3 = null;
  if ("" !== process.env.INTERNAL_UPDATE_URL) {
    if (obj2.isIOS()) {
      const _process2 = process;
      let toURLSafeResult = URLUtilsDefault.toURLSafe(process.env.INTERNAL_UPDATE_URL);
      const importDefaultResult1 = URLUtilsDefault;
    } else {
      toURLSafeResult = null;
      const obj3 = fn(1115);
    }
    tmp3 = toURLSafeResult;
    obj2 = fn(1115);
  }
}
let ClientInfoUtils = fn(1364);
ClientInfoUtils = ClientInfoUtils.getConstants();
let Build;
if (ClientInfoUtils != null) {
  Build = ClientInfoUtils.Build;
}
const parsed = parseInt(Build);
let tmp8 = null;
if (!Number.isNaN(parsed)) {
  tmp8 = null;
  if (0 !== parsed) {
    tmp8 = null;
    if (123456 !== parsed) {
      tmp8 = null;
      if (1234567890 !== parsed) {
        tmp8 = parsed;
      }
    }
  }
}
ClientInfoUtils = fn(1364);
ClientInfoUtils = ClientInfoUtils.getConstants();
let Version;
if (ClientInfoUtils != null) {
  Version = ClientInfoUtils.Version;
}
if (Version == null) {
  Version = null;
}
let tmp11 = null;
if (null !== tmp3) {
  tmp11 = null;
  if (null !== tmp8) {
    tmp11 = null;
    if (null !== Version) {
      const obj = { url: tmp3, currentBuild: tmp8, currentVersion: Version };
      tmp11 = obj;
    }
  }
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/mobile_native_updater/MobileNativeUpdateConstants.tsx");

export const UPDATE_CHECK_INTERVAL = hooks.duration(6, "hours");
export const UPDATE_CONFIG = tmp11;
