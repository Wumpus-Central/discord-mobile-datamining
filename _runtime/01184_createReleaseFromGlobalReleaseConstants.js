// _runtime/01184_createReleaseFromGlobalReleaseConstants.js
const require = arg1;
const dependencyMap = arg6;
arg5.createReleaseFromGlobalReleaseConstants = function createReleaseFromGlobalReleaseConstants() {
  let name;
  let version;
  const SENTRY_RELEASE = require(816) /* RN_GLOBAL_OBJ */.RN_GLOBAL_OBJ.SENTRY_RELEASE;
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
  let name;
  let version;
  if (!obj.notWeb()) {
    const SENTRY_RELEASE = tmp(816).RN_GLOBAL_OBJ.SENTRY_RELEASE;
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
  obj = require(1002) /* isHermesEnabled */;
  tmp = require;
};