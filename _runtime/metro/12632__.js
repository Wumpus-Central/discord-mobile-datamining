// _runtime/metro/12632__.js
const require = globalThis.__r;
let _require, obj;

function getFilenameToDebugIdMap(arg0) {
  let _sentryDebugIds;
  let closure_0;
  let length;
  let reduced;
  _require = arg0;
  _sentryDebugIds = require("12581__.js").GLOBAL_OBJ._sentryDebugIds;
  if (_sentryDebugIds) {
    let tmp = globalThis;
    const _Object = Object;
    const keys = Object.keys(_sentryDebugIds);
    const tmp2 = reduced;
    if (tmp2) {
      return reduced;
    }
    reduced = keys.reduce((acc, item) => {
      let tmp7;
      let tmp9;
      let tmp = obj;
      if (!tmp) {
        obj = {};
        tmp = obj;
      }
      if (tmp[item]) {
        acc[tmp[item][0]] = tmp[item][1];
      } else {
        const arr = closure_0(item);
        let diff = arr.length - 1;
        if (0 <= diff) {
          while (true) {
            let tmp5 = arr[diff];
            tmp7 = tmp5 && tmp5.filename;
            tmp9 = _sentryDebugIds[item];
            if (tmp7) {
              if (tmp9) {
                break;
              }
            }
            diff = diff - 1;
          }
          acc[tmp7] = tmp9;
          const items = [tmp7, tmp9];
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
    let nextResult = iter.next();
    while (iter !== undefined) {
      let tmp7 = nextResult;
      if (tmp7) {
        nextResult = tmp[tmp7];
      }
      if (nextResult) {
        obj = { type: "sourcemap", code_file: tmp7, debug_id: tmp[tmp7] };
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
