// discord_app/modules/game_profile/hooks/useGameProfileMediaDimensions.tsx
import privDefault from "../../../../_runtime/01451_priv.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

function getCachedDimensions() {
  const map = new Map();
  const item = closure_2.forEach((item, index) => map.set(index, item));
  return map;
}
let closure_2 = new privDefault({ max: 100 });
let size = fn(2);
let result = size.fileFinishedImporting("modules/game_profile/hooks/useGameProfileMediaDimensions.tsx");

export function useGameProfileMediaDimensions(width) {
  _slicedToArray = width;
  const tmp = _slicedToArray(noop.useState(getCachedDimensions), 2);
  noop = tmp[1];
  const obj = { dimensions: tmp[0], recordDimensions: null };
  const items = [width];
  obj.recordDimensions = noop.useCallback((arg0, width) => {
    closure_0 = arg0;
    let tmp2;
    if (Number.isFinite(width.width)) {
      const _Number = Number;
      if (Number.isFinite(width.height)) {
        if (width.width > 0) {
          if (width.height > 0) {
            tmp2 = width;
            if (null != tmp) {
              const _Math = Math;
              let result = tmp / Math.max(width.width, width.height);
              let size = { width: null, height: null };
              const _Math2 = Math;
              const _Math3 = Math;
              size.width = Math.max(1, Math.round(width.width * result));
              const _Math4 = Math;
              const _Math5 = Math;
              size.height = Math.max(1, Math.round(width.height * result));
              tmp2 = size;
            }
          }
        }
      }
    }
    if (null != tmp2) {
      value = closure_2.get(arg0);
      if (value == null) {
        value = tmp2;
      }
      closure_1 = value;
      const result1 = closure_2.set(arg0, value);
      closure_1((get) => {
        const size = get.get(closure_0);
        width = undefined;
        if (size != null) {
          width = size.width;
        }
        if (width !== value.width) {
          const _Map = Map;
          const map = new Map(get);
          let result = map.set(closure_0, value);
        } else {
          result = get;
        }
        return result;
      });
    }
  }, items);
  return obj;
}
