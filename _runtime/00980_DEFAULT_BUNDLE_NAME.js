// === Module 980: DEFAULT_BUNDLE_NAME ===

// Module 980 (DEFAULT_BUNDLE_NAME)
import _mod681 from "module_681" /* 681 */;
import _mod981 from "module_981" /* 981 */;

require = arg1;
const dependencyMap = arg6;

export function getDebugMetadata() {
  if (_mod981.DEFAULT_BUNDLE_NAME) {
    const _sentryDebugIds = _mod681.GLOBAL_OBJ._sentryDebugIds;
    if (_sentryDebugIds) {
      const _Object = Object;
      const keys = Object.keys(_sentryDebugIds);
      if (keys.length) {
        if (keys.length > 1) {
          const debug = _mod681.debug;
          debug.warn("[Profiling] Multiple debug images found, but only one one bundle is supported. Using the first one...");
          return [];
        } else if (keys[0]) {
          if (_sentryDebugIds[keys[0]]) {
            const obj = { code_file: _mod981.DEFAULT_BUNDLE_NAME, debug_id: tmp4, type: "sourcemap" };
            items = [obj];
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
}