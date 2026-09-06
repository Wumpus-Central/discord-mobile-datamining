// _runtime/metro/01049__.js
import RN_GLOBAL_OBJ from "../00681_RN_GLOBAL_OBJ.js";
import _mod867 from "00867__.js";

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
  obj = _mod867;
};
