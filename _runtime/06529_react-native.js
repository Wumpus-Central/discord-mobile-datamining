// _runtime/06529_react-native.js
import react_native from "00017_react-native.js";

let reactNativeVersion;
let tmp;
const constants = react_native.Platform.constants;
if (constants != null) {
  reactNativeVersion = constants.reactNativeVersion;
}
try {
  let InteractionManager;
  let major;
  if (reactNativeVersion != null) {
    major = reactNativeVersion.major;
  }
  if (0 !== major) {
    InteractionManager = react_native.InteractionManager;
  }
  tmp = InteractionManager;
} catch (err) {}
const InteractionManager_export = tmp;

export { InteractionManager_export as InteractionManager };
