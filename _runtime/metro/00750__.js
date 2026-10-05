// _runtime/metro/00750__.js
import UNKNOWN_FUNCTION from "../00709_UNKNOWN_FUNCTION.js";

const require = globalThis.__r;
let _require, closure_2, closure_5;

function getFilenameToDebugIdMap(arg0) {
  let closure_0;
  let keys;
  let keys1;
  let length;
  _require = arg0;
  const _sentryDebugIds = require("00697__.js").GLOBAL_OBJ._sentryDebugIds;
  const _debugIds = require("00697__.js").GLOBAL_OBJ._debugIds;
  if (!_sentryDebugIds) {
    if (!_debugIds) {
      return {};
    }
  }
  if (_sentryDebugIds) {
    const _Object = Object;
    keys = Object.keys(_sentryDebugIds);
  } else {
    keys = [];
  }
  if (_debugIds) {
    let tmp2 = globalThis;
    const _Object2 = Object;
    keys1 = Object.keys(_debugIds);
  } else {
    keys1 = [];
  }
  let tmp3 = closure_5;
  if (tmp3) {
    const tmp4 = length;
    if (keys.length === length) {
      let tmp5 = length;
      if (keys1.length === length) {
        let tmp9 = closure_5;
        return closure_5;
      }
    }
  }
  length = keys1.length;
  closure_5 = {};
  let tmp6 = closure_2;
  if (!tmp6) {
    closure_2 = {};
  }
  function processDebugIds(keys, _debugIds) {
    const iter = keys[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp2 = nextResult;
      let tmp3 = _debugIds[nextResult];
      let tmp5;
      if (React2 != null) {
        tmp5 = tmp4[tmp2];
      }
      let tmp7 = tmp5;
      if (tmp7) {
        if (hasOwnProperty) {
          let tmp9 = tmp3;
          if (tmp9) {
            tmp8[tmp7[0]] = tmp3;
            if (React2) {
              let items = [tmp7[0]];
              items[1] = tmp3;
              tmp31[tmp2] = items;
            }
            continue;
          }
        }
      }
      let tmp10 = tmp3;
      if (tmp10) {
        let arr = closure_0(tmp2);
        let diff = arr.length - 1;
        let tmp15 = diff;
        if (0 <= diff) {
          let tmp20;
          while (true) {
            let tmp18 = tmp13[tmp15];
            let filename;
            if (tmp18 != null) {
              filename = tmp18.filename;
            }
            tmp20 = filename;
            if (tmp20) {
              if (hasOwnProperty) {
                if (React2) {
                  break;
                }
              }
            }
            let diff1 = tmp15 - 1;
            tmp15 = diff1;
          }
          hasOwnProperty[tmp20] = tmp3;
          let items1 = [tmp20, tmp3];
          React2[tmp2] = items1;
        }
      }
    }
  }
  if (_sentryDebugIds) {
    processDebugIds(keys, _sentryDebugIds);
  }
  if (_debugIds) {
    processDebugIds(keys1, _debugIds);
  }
  return closure_5;
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const getDebugImagesForResources = function getDebugImagesForResources(arg0, arg1) {
  const tmp = getFilenameToDebugIdMap(arg0);
  const items = [];
  if (tmp) {
    const iter = arg1[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp7 = nextResult;
      let obj = UNKNOWN_FUNCTION;
      let result = obj.normalizeStackTracePath(nextResult);
      let tmp11 = result;
      if (tmp11) {
        result = tmp[tmp11];
      }
      if (result) {
        let obj2 = { type: "sourcemap", code_file: tmp7, debug_id: tmp[tmp11] };
        let arr = items.push(obj2);
      }
      continue;
    }
    return items;
  } else {
    return items;
  }
};
export { getFilenameToDebugIdMap };
