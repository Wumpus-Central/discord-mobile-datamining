// _runtime/metro/07026__.js
import _mod17 from "00017__.js";

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
} catch (err) {}
