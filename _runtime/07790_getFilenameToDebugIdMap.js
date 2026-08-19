// _runtime/07790_getFilenameToDebugIdMap.js
const require = arg1;
const dependencyMap = arg6;
function getFilenameToDebugIdMap(arg0) {
  const _require = arg0;
  _sentryDebugIds = _require(_sentryDebugIds[0]).GLOBAL_OBJ._sentryDebugIds;
  if (_sentryDebugIds) {
    const _Object = Object;
    const keys = Object.keys(_sentryDebugIds);
    if (reduced) {
      return reduced;
    }
    reduced = keys.reduce((acc, item, index) => {
      let filename;
      let tmp = obj;
      if (!obj) {
        obj = {};
        tmp = obj;
      }
      if (tmp[item]) {
        acc[tmp2[0]] = tmp2[1];
      } else {
        const arr = callback(item);
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
arg5.getDebugImagesForResources = function getDebugImagesForResources(arg0, arg1) {
  const tmp = getFilenameToDebugIdMap(arg0);
  const items = [];
  if (tmp) {
    const iter = arg1[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp7 = nextResult;
      if (nextResult) {
        let obj = { type: "sourcemap", code_file: null, debug_id: null };
        obj[1] = tmp7;
        obj[2] = tmp[tmp7];
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