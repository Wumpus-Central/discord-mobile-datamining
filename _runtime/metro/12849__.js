// === Module 12849: ? ===

// Module 12849
const require = arg1;
const dependencyMap = arg6;
function getFilenameToDebugIdMap(arg0) {
  _require = arg0;
  _sentryDebugIds = require("module_12798").GLOBAL_OBJ._sentryDebugIds;
  if (_sentryDebugIds) {
    const _Object = Object;
    const keys = Object.keys(_sentryDebugIds);
    if (reduced) {
      return reduced;
    }
    reduced = keys.reduce((acc, item) => {
      let filename;
      let tmp = obj;
      if (!obj) {
        obj = {};
        tmp = obj;
      }
      if (tmp[item]) {
        acc[tmp2[0]] = tmp2[1];
      } else {
        const arr = closure_0(item);
        let diff = arr.length - 1;
        if (0 <= diff) {
          while (true) {
            let tmp5 = arr[diff];
            filename = tmp5;
            if (tmp5) {
              filename = tmp5.filename;
            }
            if (filename) {
              if (_sentryDebugIds[item]) {
                break;
              }
            }
            diff = diff - 1;
          }
          acc[filename] = tmp8;
          const items = [filename, tmp8];
          obj[item] = items;
        }
      }
      return acc;
    }, {});
  } else {
    return {};
  }
}

export const getDebugImagesForResources = function getDebugImagesForResources(arg0, arg1) {
  const tmp = getFilenameToDebugIdMap(arg0);
  const items = [];
  if (tmp) {
    const iter = arg1[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp7 = nextResult;
      if (nextResult) {
        obj = { type: "sourcemap", code_file: null, debug_id: null };
        obj.code_file = tmp7;
        obj.debug_id = tmp[tmp7];
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