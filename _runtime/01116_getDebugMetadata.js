// === Module 1116: getDebugMetadata ===

// Module 1116 (getDebugMetadata)
import DEFAULT_BUNDLE_NAME from "DEFAULT_BUNDLE_NAME" /* 1117 */;

require = arg1;
const dependencyMap = arg6;
arg5.getDebugMetadata = function getDebugMetadata() {
  if (DEFAULT_BUNDLE_NAME.DEFAULT_BUNDLE_NAME) {
    const _sentryDebugIds = tmp(814).GLOBAL_OBJ._sentryDebugIds;
    if (_sentryDebugIds) {
      const _Object = Object;
      const keys = Object.keys(_sentryDebugIds);
      if (keys.length) {
        if (keys.length > 1) {
          const debug = tmp(814).debug;
          debug.warn("[Profiling] Multiple debug images found, but only one one bundle is supported. Using the first one...");
          return [];
        } else if (keys[0]) {
          if (_sentryDebugIds[keys[0]]) {
            const obj = { code_file: null, debug_id: null, type: "sourcemap" };
            obj[0] = tmp(1117).DEFAULT_BUNDLE_NAME;
            obj[1] = tmp4;
            const items = [obj];
            let items1 = items;
          } else {
            items1 = [];
          }
          return items1;
        } else {
          return [];
        }
      } else {
        return [];
      }
    } else {
      return [];
    }
  } else {
    return [];
  }
};