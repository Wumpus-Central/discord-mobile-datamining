// === Module 6042: get ActivityIndicator ===

// Module 6042 (get ActivityIndicator)
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

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
} catch (err) {
}