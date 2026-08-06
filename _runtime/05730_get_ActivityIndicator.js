// _runtime/05730_get_ActivityIndicator.js
const constants = require("get ActivityIndicator").Platform.constants;
if (constants != null) {
  const reactNativeVersion = constants.reactNativeVersion;
}
try {
  let major;
  if (reactNativeVersion != null) {
    major = reactNativeVersion.major;
  }
  if (0 !== major) {
    const InteractionManager = require("get ActivityIndicator").InteractionManager;
  }
  exports.InteractionManager = InteractionManager;
} catch (err) {
}