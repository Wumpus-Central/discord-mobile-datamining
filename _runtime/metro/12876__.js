// _runtime/metro/12876__.js
import _mod12798 from "12798__.js";

require = arg1;
const dependencyMap = arg6;
function getMetadataForUrl(fn, arg1) {
  (function ensureMetadataStacksAreParsed(fn) {
    if (_mod12798.GLOBAL_OBJ._sentryModuleMetadata) {
      const _Object = Object;
      const keys = Object.keys(_mod12798.GLOBAL_OBJ._sentryModuleMetadata);
      for (const item10026 of keys) {
        let tmp11 = item10026;
        let tmp16 = _mod12798.GLOBAL_OBJ._sentryModuleMetadata[item10026];
        let obj = set;
        if (!set.has(item10026)) {
          let addResult = obj.add(tmp11);
          let obj2 = arg0(tmp11);
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
  })(fn);
  return map.get(arg1);
}
const map = new Map();
const set = new Set();

export const addMetadataToStackFrames = function addMetadataToStackFrames(arg0, exception) {
  closure_0 = arg0;
  try {
    const values = exception.exception.values;
    const item = values.forEach((stacktrace) => {
      if (stacktrace.stacktrace) {
        const tmp = stacktrace.stacktrace.frames || [];
        for (const item10010 of tmp) {
          let tmp4 = item10010;
          if (item10010.filename) {
            if (!tmp4.module_metadata) {
              let tmp9 = getMetadataForUrl(closure_0, tmp4.filename);
              if (tmp9) {
                tmp4.module_metadata = tmp10;
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
    const values = exception.exception.values;
    const item = values.forEach((stacktrace) => {
      if (stacktrace.stacktrace) {
        const tmp3 = stacktrace.stacktrace.frames || [];
        const iter = tmp3[Symbol.iterator]();
        iter.next();
        while (iter !== undefined) {
          delete tmp2[tmp];
          continue;
        }
      }
    });
  } catch (err) {}
};
