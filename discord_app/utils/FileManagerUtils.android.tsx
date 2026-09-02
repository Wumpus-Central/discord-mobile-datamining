// discord_app/utils/FileManagerUtils.android.tsx
import timestampDefault from "../modules/debug/Logger.tsx";
import enforcingDefault from "../../discord_common/js/packages/rtn-codegen/js/NativeFileModule.tsx";
import closure_2 from "../../_runtime/00005_asyncGeneratorStep.js";

function _readFile() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    c7 = 0;
    c8 = 0;
    c6 = 0;
    return (function* (arg0, arg1, arg2) {
      if (c8 === 2) {
        c8 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp7 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c8 = 2;
          if (0 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c8 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_4 = tmp3;
              let logger = tmp5;
              const callback = dependencyMap;
              dependencyMap = closure_2;
              closure_2 = undefined;
              const tmp37 = (function getBaseDirectory(closure_0) {
                if (null == callback(table[2])) {
                  return null;
                } else {
                  if ("cache" === closure_0) {
                    let tmpResult = tmp(tmp2[2]);
                    let DocumentsDirPath = tmpResult.getConstants().CacheDirPath;
                  } else {
                    tmpResult = tmp(tmp2[2]);
                    DocumentsDirPath = tmpResult.getConstants().DocumentsDirPath;
                  }
                  return DocumentsDirPath;
                }
              })(callback);
              closure_2 = tmp37;
              if (null == tmp37) {
                c8 = 3;
                return { value: null, done: true };
              } else {
                c7 = 1;
                c8 = 1;
                obj1 = { value: null, done: false };
                obj1[0] = callback(1270).fileExists(tmp37 + "/" + tmp35);
                return obj1;
              }
              tmp35 = dependencyMap;
            }
          } else if (1 === tmp8) {
            if (arg0 === 1) {
              c8 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c8 = 3;
              let obj2 = { value: null, done: true };
              obj2[0] = arg1;
              return obj2;
            } else if (arg1) {
              c6 = 1;
              obj2 = callback(1270);
              c7 = 3;
              c8 = 1;
              const obj3 = { value: null, done: false };
              obj3[0] = obj2.readFile(closure_2 + "/" + callback, dependencyMap);
              return obj3;
            } else {
              c8 = 3;
              return { value: null, done: true };
            }
          } else if (2 === tmp8) {
            c6 = 0;
            logger = closure_5;
            logger.error("Failed to read file from disk", logger);
            c8 = 3;
            return { value: null, done: true };
          } else if (arg0 === 1) {
            c8 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c6 = 0;
            c8 = 3;
            const obj4 = { value: null, done: true };
            obj4[0] = arg1;
            return obj4;
          } else {
            c6 = 0;
            c8 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
        } catch (tmp25) {
          closure_5 = tmp25;
          if (tmp4 === c6) {
            c8 = tmp2;
            throw tmp25;
          } else {
            c7 = tmp;
          }
        }
      }
    })();
  });
  closure_4 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_3 = new timestampDefault("FileManagerUtils");
const tmp2 = new timestampDefault("FileManagerUtils");
const result = require("set").fileFinishedImporting("utils/FileManagerUtils.android.tsx");

export const writeFile = function writeFile(cache, c5, c6, utf8) {
  const obj = enforcingDefault;
  let nextPromise;
  if (obj != null) {
    nextPromise = obj.writeFile(cache, c5, c6, utf8).then((arg0) => "file:" + arg0);
    const writeFileResult = obj.writeFile(cache, c5, c6, utf8);
  }
  if (nextPromise == null) {
    nextPromise = Promise.reject("RTNFileManager doesn't exist?");
  }
  return nextPromise;
};
export const moveFile = function moveFile(closure_0, closure_02, closure_1) {
  const obj = enforcingDefault;
  let moveFileResult;
  if (obj != null) {
    moveFileResult = obj.moveFile(closure_0, closure_02, closure_1);
  }
  if (moveFileResult == null) {
    moveFileResult = Promise.reject(false);
  }
  return moveFileResult;
};
export const removeFile = function removeFile(cache, closure_1) {
  const obj = enforcingDefault;
  let removeFileResult;
  if (obj != null) {
    removeFileResult = obj.removeFile(cache, closure_1);
  }
  if (removeFileResult == null) {
    removeFileResult = Promise.reject(false);
  }
  return removeFileResult;
};
export const clearFolder = function clearFolder(cache, closure_1_5) {
  const obj = enforcingDefault;
  let clearFolderResult;
  if (obj != null) {
    clearFolderResult = obj.clearFolder(cache, closure_1_5);
  }
  if (clearFolderResult == null) {
    clearFolderResult = Promise.reject(false);
  }
  return clearFolderResult;
};
export const readFile = function readFile(documents, closure_1, utf8) {
  const self = this;
  const apply = _readFile.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
