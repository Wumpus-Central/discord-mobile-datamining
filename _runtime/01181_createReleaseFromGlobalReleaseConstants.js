// _runtime/01181_createReleaseFromGlobalReleaseConstants.js
import RN_GLOBAL_OBJ from "00813_RN_GLOBAL_OBJ.js";
import isHermesEnabled from "00999_isHermesEnabled.js";

require = arg1;
const dependencyMap = arg6;
arg5.createReleaseFromGlobalReleaseConstants = function createReleaseFromGlobalReleaseConstants() {
  const SENTRY_RELEASE = RN_GLOBAL_OBJ.RN_GLOBAL_OBJ.SENTRY_RELEASE;
  if (SENTRY_RELEASE) {
    ({ name, version } = SENTRY_RELEASE);
    if (name) {
      if (version) {
        const _HermesInternal = HermesInternal;
        return "" + name + "@" + version;
      }
    }
  }
};
arg5.getDefaultRelease = function getDefaultRelease() {
  if (!obj.notWeb()) {
    const SENTRY_RELEASE = RN_GLOBAL_OBJ.RN_GLOBAL_OBJ.SENTRY_RELEASE;
    let combined;
    if (SENTRY_RELEASE) {
      ({ name, version } = SENTRY_RELEASE);
      if (name) {
        if (version) {
          const _HermesInternal = HermesInternal;
          combined = "" + name + "@" + version;
        }
      }
    }
    return combined;
  }
  obj = isHermesEnabled;
  const tmp = require;
};
