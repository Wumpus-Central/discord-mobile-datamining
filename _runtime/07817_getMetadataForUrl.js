// _runtime/07817_getMetadataForUrl.js
const require = arg1;
const dependencyMap = arg6;
function getMetadataForUrl(arg0, arg1) {
  (function ensureMetadataStacksAreParsed(arg0) {
    if (callback(7739).GLOBAL_OBJ._sentryModuleMetadata) {
      const _Object = Object;
      const keys = Object.keys(callback(7739).GLOBAL_OBJ._sentryModuleMetadata);
      for (const item10026 of keys) {
        let tmp11 = item10026;
        let tmp12 = callback;
        let tmp13 = callback;
        let tmp14 = dependencyMap;
        let tmp15 = dependencyMap;
        let tmp16 = callback(7739).GLOBAL_OBJ._sentryModuleMetadata[item10026];
        let obj = set;
        if (!set.has(item10026)) {
          let tmp17 = item10026;
          let addResult = obj.add(tmp11);
          let obj2 = arg0(tmp11);
          let reversed = obj2.reverse();
          let tmp20 = reversed;
          let tmp21 = reversed;
          for (const item10050 of reversed) {
            if (item10050.filename) {
              let tmp23 = closure_2;
              let tmp24 = item10050;
              let tmp25 = tmp16;
              let result = closure_2.set(tmp22.filename, tmp16);
              let tmp27 = obj3;
              obj3.return();
              break;
            }
            continue;
          }
        }
        continue;
      }
    }
  })(arg0);
  return map.get(arg1);
}
const map = new Map();
const set = new Set();
arg5.addMetadataToStackFrames = function addMetadataToStackFrames(arg0, exception) {
  let closure_0 = arg0;
  try {
    const values = exception.exception.values;
    const item = values.forEach((stacktrace) => {
      if (stacktrace.stacktrace) {
        const tmp = stacktrace.stacktrace.frames || [];
        for (const item10010 of tmp) {
          let tmp4 = item10010;
          if (item10010.filename) {
            let tmp5 = item10010;
            if (!tmp4.module_metadata) {
              let tmp6 = outer1_4;
              let tmp7 = closure_0;
              let tmp8 = item10010;
              let tmp9 = outer1_4(closure_0, tmp4.filename);
              if (tmp9) {
                let tmp11 = item10010;
                let tmp12 = tmp9;
                tmp4.module_metadata = tmp10;
              }
            }
          }
          continue;
        }
      }
    });
  } catch (err) {
  }
};
arg5.getMetadataForUrl = getMetadataForUrl;
arg5.stripMetadataFromStackFrames = function stripMetadataFromStackFrames(exception) {
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
  } catch (err) {
  }
};