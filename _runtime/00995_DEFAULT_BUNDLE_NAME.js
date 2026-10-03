// === Module 995: DEFAULT_BUNDLE_NAME ===

// Module 995 (DEFAULT_BUNDLE_NAME)
import _mod693 from "module_693" /* 693 */;
import _mod996 from "module_996" /* 996 */;

require = arg1;
const dependencyMap = arg6;

export const getDebugMetadata = function getDebugMetadata() {
  if (_mod996.DEFAULT_BUNDLE_NAME) {
    const _sentryDebugIds = _mod693.GLOBAL_OBJ._sentryDebugIds;
    if (_sentryDebugIds) {
      const _Object = Object;
      const keys = Object.keys(_sentryDebugIds);
      if (keys.length) {
        if (keys.length > 1) {
          const debug = _mod693.debug;
          debug.warn("[Profiling] Multiple debug images found, but only one one bundle is supported. Using the first one...");
          return [];
        } else if (keys[0]) {
          if (_sentryDebugIds[keys[0]]) {
            const obj = { code_file: _mod996.DEFAULT_BUNDLE_NAME, debug_id: tmp4, type: "sourcemap" };
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