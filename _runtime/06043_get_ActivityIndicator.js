// _runtime/06043_get_ActivityIndicator.js
import get_ActivityIndicator from "00017_get_ActivityIndicator.js";

const constants = get_ActivityIndicator.Platform.constants;
if (constants != null) {
  const reactNativeVersion = constants.reactNativeVersion;
}
try {
  let major;
  if (reactNativeVersion != null) {
    major = reactNativeVersion.major;
  }
  if (0 !== major) {
    const InteractionManager = get_ActivityIndicator.InteractionManager;
  }
  exports.InteractionManager = InteractionManager;
} catch (err) {}
