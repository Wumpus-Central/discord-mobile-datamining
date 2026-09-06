// === Module 739: ? ===

// Module 739
import _mod698 from "module_698" /* 698 */;

require = arg1;
const dependencyMap = arg6;
function getFilenameToDebugIdMap(arg0) {
  _require = arg0;
  const _sentryDebugIds = require("module_686").GLOBAL_OBJ._sentryDebugIds;
  const _debugIds = require("module_686").GLOBAL_OBJ._debugIds;
  if (!_sentryDebugIds) {
    if (!_debugIds) {
      return {};
    }
  }
  if (_sentryDebugIds) {
    const _Object = Object;
    let keys = Object.keys(_sentryDebugIds);
  } else {
    keys = [];
  }
  if (_debugIds) {
    const _Object2 = Object;
    let keys1 = Object.keys(_debugIds);
  } else {
    keys1 = [];
  }
  if (closure_5) {
    if (keys.length === length) {
      if (keys1.length === length) {
        return closure_5;
      }
    }
  }
  length = keys1.length;
  closure_5 = {};
  if (!closure_2) {
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
      if (tmp5) {
        if (hasOwnProperty) {
          if (tmp3) {
            tmp8[tmp7[0]] = tmp3;
            if (React2) {
              let items = [tmp7[0], ];
              items[1] = tmp3;
              tmp31[tmp2] = items;
            }
            continue;
          }
        }
      }
      if (tmp3) {
        let arr = closure_0(tmp2);
        let diff = arr.length - 1;
        let tmp15 = diff;
        if (0 <= diff) {
          while (true) {
            let tmp18 = tmp13[tmp15];
            let filename;
            if (tmp18 != null) {
              filename = tmp18.filename;
            }
            let tmp20 = filename;
            if (filename) {
              let tmp21 = hasOwnProperty;
              if (hasOwnProperty) {
                if (React2) {
                  break;
                }
              }
            }
            let diff1 = tmp15 - 1;
            tmp15 = diff1;
          }
          tmp21[tmp20] = tmp3;
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
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export const getDebugImagesForResources = function getDebugImagesForResources(arg0, arg1) {
  const tmp = getFilenameToDebugIdMap(arg0);
  const items = [];
  if (tmp) {
    const iter = arg1[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp7 = nextResult;
      let obj = _mod698;
      let result = obj.normalizeStackTracePath(nextResult);
      let tmp11 = result;
      if (result) {
        obj = { type: "sourcemap", code_file: null, debug_id: null };
        obj.code_file = tmp7;
        obj.debug_id = tmp[tmp11];
        let arr = items.push(obj);
      }
      continue;
    }
    return items;
  } else {
    return items;
  }
};
export { getFilenameToDebugIdMap };