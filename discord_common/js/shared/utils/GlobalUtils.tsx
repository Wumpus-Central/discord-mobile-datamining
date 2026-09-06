// === Module 1357: utils/GlobalUtils ===

// Module 1357 (utils/GlobalUtils)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/shared/utils/GlobalUtils.tsx");

export const getGlobalObject = function getGlobalObject() {
  if (typeof globalThis !== "undefined") {
    let _window = globalThis;
  } else {
    const _window2 = window;
    if (typeof window !== "undefined") {
      _window = window;
    } else {
      _window = global;
      if (undefined === global) {
        const _self = self;
        if (typeof self !== "undefined") {
          let _self2 = self;
        } else {
          const _Object = Object;
          _self2 = Object.create(null);
        }
      }
    }
  }
  return _window;
};