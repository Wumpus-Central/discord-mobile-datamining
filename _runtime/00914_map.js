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
      let item = values.forEach((item, index) => {
        const stacktrace = item.stacktrace;
        if (stacktrace != null) {
          const frames = stacktrace.frames;
          if (frames != null) {
            item = frames.forEach((item, index) => {
              if (item.filename) {
                if (!item.module_metadata) {
                  (function ensureMetadataStacksAreParsed(closure_0) {
                    if (callback(821).GLOBAL_OBJ._sentryModuleMetadata) {
                      const _Object = Object;
                      const keys = Object.keys(callback(821).GLOBAL_OBJ._sentryModuleMetadata);
                      for (const item10026 of keys) {
                        let tmp16 = callback(821).GLOBAL_OBJ._sentryModuleMetadata[item10026];
                        if (!set.has(item10026)) {
                          let addResult = set.add(item10026);
                          let obj2 = arg0(item10026);
                          let reversed = obj2.reverse();
                          for (const item10050 of reversed) {
                            if (item10050.filename) {
                              let result = closure_2.set(tmp22.filename, tmp16);
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
                  const value = closure_1_2.get(item.filename);
                  if (value) {
                    item.module_metadata = value;
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
arg5.getFilenameToMetadataMap = function getFilenameToMetadataMap(fn) {
  const obj = {};
  if (_mod821.GLOBAL_OBJ._sentryModuleMetadata) {
    const _Object = Object;
    const keys = Object.keys(_mod821.GLOBAL_OBJ._sentryModuleMetadata);
    for (const item10026 of keys) {
      let tmp15 = _mod821.GLOBAL_OBJ._sentryModuleMetadata[item10026];
      let obj2 = arg0(item10026);
      let reversed = obj2.reverse();
      for (const item10043 of reversed) {
        if (item10043.filename) {
          obj[tmp19.filename] = tmp15;
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
};
arg5.getMetadataForUrl = function getMetadataForUrl(closure_0) {
  (function ensureMetadataStacksAreParsed(closure_0) {
    if (callback(821).GLOBAL_OBJ._sentryModuleMetadata) {
      const _Object = Object;
      const keys = Object.keys(callback(821).GLOBAL_OBJ._sentryModuleMetadata);
      for (const item10026 of keys) {
        let tmp16 = callback(821).GLOBAL_OBJ._sentryModuleMetadata[item10026];
        if (!set.has(item10026)) {
          let addResult = set.add(item10026);
          let obj2 = arg0(item10026);
          let reversed = obj2.reverse();
          for (const item10050 of reversed) {
            if (item10050.filename) {
              let result = closure_2.set(tmp22.filename, tmp16);
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
      let item = values.forEach((item, index) => {
        const stacktrace = item.stacktrace;
        if (stacktrace != null) {
          const frames = stacktrace.frames;
          if (frames != null) {
            item = frames.forEach((item, index) => {
              delete tmp[tmp2];
            });
          }
        }
      });
    }
  }
};