// === Module 1060: ? ===

// Module 1060
import RN_GLOBAL_OBJ from "RN_GLOBAL_OBJ" /* 692 */;
import _mod878 from "module_878" /* 878 */;

require = arg1;
const dependencyMap = arg6;

export const createReleaseFromGlobalReleaseConstants = function createReleaseFromGlobalReleaseConstants() {
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
export const getDefaultRelease = function getDefaultRelease() {
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
  obj = _mod878;
};