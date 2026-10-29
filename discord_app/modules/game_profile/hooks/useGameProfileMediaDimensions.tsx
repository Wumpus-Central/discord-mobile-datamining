// === Module 9351: useGameProfileMediaDimensions ===

// Module 9351 (useGameProfileMediaDimensions)
import privDefault from "priv" /* 1457 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
function getCachedDimensions() {
  const map = new Map();
  const item = closure_4.forEach((item, index) => map.set(index, item));
  return map;
}
let closure_4 = new privDefault({ max: 100 });
const ReactCompilerGating = fn(558);
let tmp2 = new privDefault({ max: 100 });
let size = fn(2);
let result = size.fileFinishedImporting("modules/game_profile/hooks/useGameProfileMediaDimensions.tsx");

export const useGameProfileMediaDimensions = ReactCompilerGating.isReactCompilerEnabled() ? (function useGameProfileMediaDimensions(arg0) {
  _require = arg0;
  const cResult = require("c").c(5);
  const obj = require("c");
  [tmp3, dependencyMap] = noop.useState(getCachedDimensions);
  if (cResult[0] !== arg0) {
    const fn = function h(arg0, width) {
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
        value = closure_4.get(arg0);
        if (value == null) {
          value = tmp2;
        }
        closure_1 = value;
        const result1 = closure_4.set(arg0, value);
        dependencyMap((get) => {
          const size = get.get(closure_0);
          let width;
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
    };
    cResult[0] = arg0;
    cResult[1] = fn;
    let tmp4 = fn;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] === tmp3) {
    if (cResult[3] === tmp4) {
      let tmp5 = cResult[4];
    }
    return tmp5;
  }
  const obj2 = { dimensions: tmp3, recordDimensions: tmp4 };
  cResult[2] = tmp3;
  cResult[3] = tmp4;
  cResult[4] = obj2;
  tmp5 = obj2;
}) : (function useGameProfileMediaDimensions(arg0) {
  closure_0 = arg0;
  const tmp = _slicedToArray(noop.useState(getCachedDimensions), 2);
  closure_1 = tmp[1];
  const obj = { dimensions: tmp[0], recordDimensions: null };
  const items = [arg0];
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
      value = closure_4.get(arg0);
      if (value == null) {
        value = tmp2;
      }
      closure_1 = value;
      const result1 = closure_4.set(arg0, value);
      closure_1((get) => {
        const size = get.get(closure_0);
        let width;
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
});