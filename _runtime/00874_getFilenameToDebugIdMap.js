import { createStackParser } from "00833_createStackParser.js";
import { 00821__ } from "metro/00821__.js";
// _runtime/00874_getFilenameToDebugIdMap.js
const require = arg1;
const dependencyMap = arg6;
function getFilenameToDebugIdMap(arg0) {
  const _require = arg0;
  const _sentryDebugIds = _00821__.GLOBAL_OBJ._sentryDebugIds;
  const _debugIds = _00821__.GLOBAL_OBJ._debugIds;
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
  length = keys.length;
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
      if (closure_2 != null) {
        let tmp6 = nextResult;
        tmp5 = tmp4[tmp2];
      }
      let tmp7 = tmp5;
      if (tmp5) {
        if (closure_5) {
          let tmp9 = tmp3;
          if (tmp3) {
            let tmp29 = tmp5;
            let tmp30 = tmp3;
            tmp8[tmp7[0]] = tmp3;
            if (closure_2) {
              let tmp32 = nextResult;
              let tmp33 = tmp5;
              let items = [tmp7[0], ];
              let tmp34 = tmp3;
              items[1] = tmp3;
              tmp31[tmp2] = items;
            }
            continue;
          }
        }
      }
      let tmp10 = tmp3;
      if (tmp3) {
        let tmp11 = callback;
        let tmp12 = nextResult;
        let arr = callback(tmp2);
        let diff = arr.length - 1;
        let tmp15 = diff;
        if (0 <= diff) {
          while (true) {
            let tmp16 = arr;
            let tmp17 = tmp15;
            let tmp18 = tmp13[tmp15];
            let filename;
            if (tmp18 != null) {
              filename = tmp18.filename;
            }
            let tmp20 = filename;
            if (filename) {
              let tmp21 = closure_5;
              if (closure_5) {
                let tmp22 = closure_2;
                if (closure_2) {
                  break;
                }
              }
            }
            let tmp23 = tmp15;
            let diff1 = tmp15 - 1;
            tmp15 = diff1;
          }
          let tmp25 = filename;
          let tmp26 = tmp3;
          tmp21[tmp20] = tmp3;
          let tmp27 = closure_2;
          let tmp28 = nextResult;
          let items1 = [tmp20, tmp3];
          closure_2[tmp2] = items1;
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
arg5.getDebugImagesForResources = function getDebugImagesForResources(arg0, arg1) {
  const tmp = getFilenameToDebugIdMap(arg0);
  const items = [];
  if (tmp) {
    const iter = arg1[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp8 = require;
      let tmp9 = dependencyMap;
      let tmp7 = nextResult;
      let obj = createStackParser /* createStackParser */;
      let result = obj.normalizeStackTracePath(nextResult);
      let tmp11 = result;
      if (result) {
        let tmp12 = tmp[tmp11];
      }
      if (result) {
        obj = { type: "sourcemap", code_file: null, debug_id: null };
        let tmp13 = nextResult;
        obj[1] = tmp7;
        let tmp14 = tmp11;
        obj[2] = tmp[tmp11];
        let arr = items.push(obj);
      }
      continue;
    }
    return items;
  } else {
    return items;
  }
};
arg5.getFilenameToDebugIdMap = getFilenameToDebugIdMap;