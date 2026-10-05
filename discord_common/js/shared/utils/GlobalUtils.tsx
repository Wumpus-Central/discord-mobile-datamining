// discord_common/js/shared/utils/GlobalUtils.tsx
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("../discord_common/js/shared/utils/GlobalUtils.tsx");

export const getGlobalObject = function getGlobalObject() {
  let _window;
  if (typeof globalThis !== "undefined") {
    _window = globalThis;
  } else {
    const _window2 = window;
    if (typeof window !== "undefined") {
      _window = window;
    } else {
      _window = global;
      if (undefined === global) {
        let _self2;
        const _self = self;
        if (typeof self !== "undefined") {
          _self2 = self;
        } else {
          const _Object = Object;
          _self2 = Object.create(null);
        }
        _window = _self2;
      }
    }
  }
  return _window;
};
