// === Module 6358: react-native ===

// Module 6358 (react-native)
import react_native from "react-native" /* 17 */;

const constants = react_native.Platform.constants;
let reactNativeVersion;
if (constants != null) {
  reactNativeVersion = constants.reactNativeVersion;
}

export const isRN083OrAbove = () => {
  let tmp2 = reactNativeVersion;
  if (tmp2) {
    tmp2 = reactNativeVersion.major > 0 || reactNativeVersion.minor >= 83;
    const tmp3 = reactNativeVersion.major > 0 || reactNativeVersion.minor >= 83;
  }
  return tmp2;
};