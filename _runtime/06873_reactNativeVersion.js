// === Module 6873: reactNativeVersion ===

// Module 6873 (reactNativeVersion)
import _mod17 from "module_17" /* 17 */;

const constants = _mod17.Platform.constants;
let reactNativeVersion;
if (constants != null) {
  reactNativeVersion = constants.reactNativeVersion;
}

export const isRN083OrAbove = () => {
  let tmp2 = reactNativeVersion;
  if (reactNativeVersion) {
    let tmp3 = reactNativeVersion.major > 0;
    if (!tmp3) {
      tmp3 = reactNativeVersion.minor >= 83;
    }
    tmp2 = tmp3;
  }
  return tmp2;
};