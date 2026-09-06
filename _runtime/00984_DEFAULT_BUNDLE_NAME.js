// === Module 984: DEFAULT_BUNDLE_NAME ===

// Module 984 (DEFAULT_BUNDLE_NAME)
import _mod682 from "module_682" /* 682 */;
import _mod985 from "module_985" /* 985 */;

require = arg1;
const dependencyMap = arg6;

export const getDebugMetadata = function getDebugMetadata() {
  if (_mod985.DEFAULT_BUNDLE_NAME) {
    const _sentryDebugIds = _mod682.GLOBAL_OBJ._sentryDebugIds;
    if (_sentryDebugIds) {
      const _Object = Object;
      const keys = Object.keys(_sentryDebugIds);
      if (keys.length) {
        if (keys.length > 1) {
          const debug = _mod682.debug;
          debug.warn("[Profiling] Multiple debug images found, but only one one bundle is supported. Using the first one...");
          return [];
        } else if (keys[0]) {
          if (_sentryDebugIds[keys[0]]) {
            const obj = { code_file: _mod985.DEFAULT_BUNDLE_NAME, debug_id: tmp4, type: "sourcemap" };
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