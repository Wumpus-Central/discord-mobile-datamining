// === Module 1184: createReleaseFromGlobalReleaseConstants ===

// Module 1184 (createReleaseFromGlobalReleaseConstants)
import RN_GLOBAL_OBJ from "RN_GLOBAL_OBJ" /* 816 */;
import isHermesEnabled from "isHermesEnabled" /* 1002 */;

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
};