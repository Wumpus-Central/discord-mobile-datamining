// _runtime/07399_getFilenameToDebugIdMap.js
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
    reduced = keys.reduce((arg0, arg1) => {
      let filename;
      let tmp = outer1_2;
      if (!outer1_2) {
        const obj = {};
        outer1_2 = obj;
        tmp = obj;
      }
      if (tmp[arg1]) {
        arg0[tmp2[0]] = tmp2[1];
      } else {
        const arr = callback(arg1);
        let diff = arr.length - 1;
        if (0 <= diff) {
          while (true) {
            let tmp5 = arr[diff];
            let tmp6 = diff;
            filename = tmp5;
            if (tmp5) {
              filename = tmp5.filename;
            }
            let tmp7 = _sentryDebugIds;
            if (filename) {
              if (_sentryDebugIds[arg1]) {
                break;
              }
            }
            diff = diff - 1;
          }
          arg0[filename] = tmp8;
          const items = [filename, tmp8];
          outer1_2[arg1] = items;
        }
      }
      return arg0;
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
        let tmp8 = tmp[tmp7];
      }
      if (nextResult) {
        let obj = { type: "sourcemap", code_file: null, debug_id: null };
        let tmp9 = tmp7;
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