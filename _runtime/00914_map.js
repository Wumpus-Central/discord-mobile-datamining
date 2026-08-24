// === Module 914: map ===

// Module 914 (map)
import _mod821 from "module_821" /* 821 */;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
const map = new Map();
const set = new Set();
arg5.addMetadataToStackFrames = function addMetadataToStackFrames(arg0, exception) {
  closure_0 = arg0;
  exception = exception.exception;
  if (exception != null) {
    const values = exception.values;
    if (values != null) {
      let item = values.forEach((stacktrace) => {
        stacktrace = stacktrace.stacktrace;
        if (stacktrace != null) {
          const frames = stacktrace.frames;
          if (frames != null) {
            const item = frames.forEach((filename) => {
              if (filename.filename) {
                if (!filename.module_metadata) {
                  (function ensureMetadataStacksAreParsed(closure_0) {
                    if (callback(821).GLOBAL_OBJ._sentryModuleMetadata) {
                      const _Object = Object;
                      const keys = Object.keys(callback(821).GLOBAL_OBJ._sentryModuleMetadata);
                      for (const item10026 of keys) {
                        let tmp11 = item10026;
                        let tmp12 = callback;
                        let tmp13 = callback;
                        let tmp14 = dependencyMap;
                        let tmp15 = dependencyMap;
                        let tmp16 = callback(821).GLOBAL_OBJ._sentryModuleMetadata[item10026];
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
                  })(closure_0);
                  const value = closure_1_2.get(filename.filename);
                  if (value) {
                    filename.module_metadata = value;
                  }
                }
              }
            });
          }
        }
      });
    }
  }
};
arg5.getFilenameToMetadataMap = function getFilenameToMetadataMap(arg0) {
  const obj = {};
  if (_mod821.GLOBAL_OBJ._sentryModuleMetadata) {
    const _Object = Object;
    const keys = Object.keys(_mod821.GLOBAL_OBJ._sentryModuleMetadata);
    for (const item10026 of keys) {
      let tmp11 = require;
      let tmp12 = require;
      let tmp13 = dependencyMap;
      let tmp14 = dependencyMap;
      let tmp15 = _mod821.GLOBAL_OBJ._sentryModuleMetadata[item10026];
      let obj2 = arg0(item10026);
      let reversed = obj2.reverse();
      let tmp17 = reversed;
      let tmp18 = reversed;
      for (const item10043 of reversed) {
        if (item10043.filename) {
          let tmp20 = item10043;
          let tmp21 = tmp15;
          obj[tmp19.filename] = tmp15;
          let tmp22 = obj3;
          obj3.return();
          break;
        }
        continue;
      }
      continue;
    }
    return obj;
  } else {
    return obj;
  }
  const tmp = require;
  const tmp2 = require;
  const tmp3 = dependencyMap;
};
arg5.getMetadataForUrl = function getMetadataForUrl(closure_0) {
  (function ensureMetadataStacksAreParsed(closure_0) {
    if (callback(821).GLOBAL_OBJ._sentryModuleMetadata) {
      const _Object = Object;
      const keys = Object.keys(callback(821).GLOBAL_OBJ._sentryModuleMetadata);
      for (const item10026 of keys) {
        let tmp11 = item10026;
        let tmp12 = callback;
        let tmp13 = callback;
        let tmp14 = dependencyMap;
        let tmp15 = dependencyMap;
        let tmp16 = callback(821).GLOBAL_OBJ._sentryModuleMetadata[item10026];
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
  })(closure_0);
  return map.get(arg1);
};
arg5.stripMetadataFromStackFrames = function stripMetadataFromStackFrames(exception) {
  exception = exception.exception;
  if (exception != null) {
    const values = exception.values;
    if (values != null) {
      let item = values.forEach((stacktrace) => {
        stacktrace = stacktrace.stacktrace;
        if (stacktrace != null) {
          const frames = stacktrace.frames;
          if (frames != null) {
            const item = frames.forEach((arg0) => {
              delete tmp[tmp2];
            });
          }
        }
      });
    }
  }
};