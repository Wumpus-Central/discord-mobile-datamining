// discord_common/js/shared/utils/GlobalUtils.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";

const result = obj132.fileFinishedImporting("../discord_common/js/shared/utils/GlobalUtils.tsx");

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