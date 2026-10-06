// _runtime/metro/12659__.js
import _mod12581 from "12581__.js";

function getMetadataForUrl(fn, arg1) {
  function ensureMetadataStacksAreParsed(fn) {
    if (_mod12581.GLOBAL_OBJ._sentryModuleMetadata) {
      const _Object = Object;
      const keys = Object.keys(_mod12581.GLOBAL_OBJ._sentryModuleMetadata);
      for (const item10026 of keys) {
        let tmp16 = _mod12581.GLOBAL_OBJ._sentryModuleMetadata[item10026];
        if (!set.has(item10026)) {
          let addResult = set.add(item10026);
          let obj2 = fn(item10026);
          let reversed = obj2.reverse();
          for (const item10050 of reversed) {
            if (item10050.filename) {
              let result = map.set(tmp22.filename, tmp16);
              obj3.return();
              break;
            }
            continue;
          }
        }
        continue;
      }
    }
  }
  ensureMetadataStacksAreParsed(fn);
  return map.get(arg1);
}
const map = new Map();
const set = new Set();

export const addMetadataToStackFrames = function addMetadataToStackFrames(arg0, exception) {
  let closure_0 = arg0;
  try {
    let tmp = exception;
    const values = exception.exception.values;
    const item = values.forEach((stacktrace) => {
      if (stacktrace.stacktrace) {
        const tmp = stacktrace.stacktrace.frames || [];
        for (const item10010 of tmp) {
          if (item10010.filename) {
            if (!item10010.module_metadata) {
              let tmp9 = getMetadataForUrl(closure_0, item10010.filename);
              if (tmp9) {
                item10010.module_metadata = tmp10;
              }
            }
          }
          continue;
        }
      }
    });
  } catch (err) {}
};
export { getMetadataForUrl };
export const stripMetadataFromStackFrames = function stripMetadataFromStackFrames(exception) {
  try {
    let tmp = exception;
    const values = exception.exception.values;
    const item = values.forEach((stacktrace) => {
      if (stacktrace.stacktrace) {
        const tmp = stacktrace.stacktrace.frames || [];
        const iter = tmp[Symbol.iterator]();
        while (iter !== undefined) {
          delete iter.next()[`module_metadata`];
          continue;
        }
      }
    });
  } catch (err) {}
};
