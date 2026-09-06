// === Module 7026: ? ===

// Module 7026
import _mod17 from "module_17" /* 17 */;

const constants = _mod17.Platform.constants;
if (constants != null) {
  const reactNativeVersion = constants.reactNativeVersion;
}
try {
  let major;
  if (reactNativeVersion != null) {
    major = reactNativeVersion.major;
  }
  if (0 !== major) {
    const InteractionManager = _mod17.InteractionManager;
  }
  exports.InteractionManager = InteractionManager;
} catch (err) {
}