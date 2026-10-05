// === Module 4868: MobileNativeUpdateConstants ===

// Module 4868 (MobileNativeUpdateConstants)
import PlatformUtils from "PlatformUtils" /* 1369 */;
import URLUtilsDefault from "URLUtils" /* 1371 */;
import module_4461 from "module_4461" /* 4461 */;
import react_native_mod from "react-native" /* 1368 */;
import size from "module_2" /* 2 */;

let tmp3 = null;
const durationResult = module_4461.duration(6, "hours");
if (undefined !== process.env.INTERNAL_UPDATE_URL) {
  const _process = process;
  tmp3 = null;
  if ("" !== process.env.INTERNAL_UPDATE_URL) {
    let toURLSafeResult;
    const _module = PlatformUtils;
    if (_module.isIOS()) {
      const _process2 = process;
      const importDefaultResult1 = URLUtilsDefault;
      toURLSafeResult = importDefaultResult1.toURLSafe(process.env.INTERNAL_UPDATE_URL);
    } else {
      const _module1 = PlatformUtils;
      toURLSafeResult = null;
    }
    tmp3 = toURLSafeResult;
  }
}
let react_native = react_native_mod;
react_native = react_native.getConstants();
let Build;
const _parseInt = parseInt;
if (react_native != null) {
  Build = react_native.Build;
}
const _parseIntResult = _parseInt(Build);
let tmp8 = null;
if (!Number.isNaN(_parseIntResult)) {
  tmp8 = null;
  if (0 !== _parseIntResult) {
    tmp8 = null;
    if (123456 !== _parseIntResult) {
      tmp8 = null;
      if (1234567890 !== _parseIntResult) {
        tmp8 = _parseIntResult;
      }
    }
  }
}
react_native = react_native_mod;
react_native = react_native.getConstants();
let Version;
if (react_native != null) {
  Version = react_native.Version;
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
      tmp11 = { url: tmp3, currentBuild: tmp8, currentVersion: Version };
      const obj = { url: tmp3, currentBuild: tmp8, currentVersion: Version };
    }
  }
}
const result = size.fileFinishedImporting("modules/mobile_native_updater/MobileNativeUpdateConstants.tsx");

export const UPDATE_CHECK_INTERVAL = durationResult;
export const UPDATE_CONFIG = tmp11;