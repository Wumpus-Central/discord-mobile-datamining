// === Module 697: getGlobalObject ===

// Module 697 (getGlobalObject)
const result = require("set").fileFinishedImporting("../discord_common/js/shared/utils/GlobalUtils.tsx");

export const getGlobalObject = function getGlobalObject() {
  if (typeof globalThis === "pack") {
    let _window = globalThis;
  } else {
    const _window2 = window;
    if (typeof window === "pack") {
      _window = window;
    } else {
      _window = global;
      if (undefined === global) {
        const _self = self;
        if (typeof self === "pack") {
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