// _runtime/00995_react-native.js
import _mod693 from "metro/00693__.js";
import react_native from "00996_react-native.js";

export const getDebugMetadata = function getDebugMetadata() {
  if (react_native.DEFAULT_BUNDLE_NAME) {
    const _sentryDebugIds = _mod693.GLOBAL_OBJ._sentryDebugIds;
    if (_sentryDebugIds) {
      const _Object = Object;
      const keys = Object.keys(_sentryDebugIds);
      if (keys.length) {
        if (keys.length > 1) {
          const debug = _mod693.debug;
          debug.warn(
            "[Profiling] Multiple debug images found, but only one one bundle is supported. Using the first one...",
          );
          return [];
        } else if (keys[0]) {
          let items1;
          if (_sentryDebugIds[keys[0]]) {
            const items = [
              { code_file: react_native.DEFAULT_BUNDLE_NAME, debug_id: _sentryDebugIds[keys[0]], type: "sourcemap" },
            ];
            items1 = items;
            const obj = {
              code_file: react_native.DEFAULT_BUNDLE_NAME,
              debug_id: _sentryDebugIds[keys[0]],
              type: "sourcemap",
            };
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
