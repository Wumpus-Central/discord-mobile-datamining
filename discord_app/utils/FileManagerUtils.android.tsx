// discord_app/utils/FileManagerUtils.android.tsx
import LoggerDefault from "../modules/debug/Logger.tsx";
import NativeFileModuleDefault from "../../discord_common/js/packages/rtn-codegen/js/NativeFileModule.tsx";
import asyncGeneratorStep from "../../_runtime/00005_asyncGeneratorStep.js";

let closure_4 = async function _readFile(arg0) {
  if (c8 === 2) {
    c8 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp7 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
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
          throw value;
        } else if (arg0 === 2) {
          c8 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_4 = tmp3;
          closure_3 = tmp5;
          closure_131_0 = dependencyMap;
          closure_131_1 = closure_2;
          closure_131_2 = undefined;
          const tmp36 = (function getBaseDirectory(arg0) {
            if (null == closure_1_0(dependencyMap[2])) {
              return null;
            } else {
              if ("cache" === arg0) {
                let tmpResult = closure_1_0(dependencyMap[2]);
                let DocumentsDirPath = tmpResult.getConstants().CacheDirPath;
              } else {
                tmpResult = closure_1_0(dependencyMap[2]);
                DocumentsDirPath = tmpResult.getConstants().DocumentsDirPath;
              }
              return DocumentsDirPath;
            }
          })(closure_0);
          closure_131_2 = tmp36;
          if (null == tmp36) {
            c8 = 3;
            return { value: null, done: true };
          } else {
            c7 = 1;
            c8 = 1;
            const obj1 = { value: NativeFileModuleDefault.fileExists(tmp36 + "/" + dependencyMap), done: false };
            return obj1;
          }
        }
      } else if (1 === tmp8) {
        if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c8 = 3;
          let obj2 = { value, done: true };
          return obj2;
        } else if (value) {
          c6 = 1;
          obj2 = closure_132_0(closure_132_1[2]);
          c7 = 3;
          c8 = 1;
          const obj3 = { value: obj2.readFile(closure_131_2 + "/" + closure_131_0, closure_131_1), done: false };
          return obj3;
        } else {
          c8 = 3;
          return { value: null, done: true };
        }
      } else if (2 === tmp8) {
        c6 = 0;
        closure_131_3 = closure_5;
        closure_132_3.error("Failed to read file from disk", closure_131_3);
        c8 = 3;
        return { value: null, done: true };
      } else if (arg0 === 1) {
        c8 = 3;
        throw value;
      } else if (arg0 === 2) {
        c6 = 0;
        c8 = 3;
        const obj4 = { value, done: true };
        return obj4;
      } else {
        c6 = 0;
        c8 = 3;
        obj = { value, done: true };
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
};
let closure_3 = new LoggerDefault("FileManagerUtils");
const size = fn(2);
const result = size.fileFinishedImporting("utils/FileManagerUtils.android.tsx");

export const writeFile = function writeFile(cache, filePathForGif, arg2, utf8) {
  const obj = NativeFileModuleDefault;
  let nextPromise;
  if (obj != null) {
    nextPromise = obj.writeFile(cache, filePathForGif, arg2, utf8).then((result) => "file:" + result);
    const writeFileResult = obj.writeFile(cache, filePathForGif, arg2, utf8);
  }
  if (nextPromise == null) {
    nextPromise = Promise.reject("RTNFileManager doesn't exist?");
  }
  return nextPromise;
};
export const moveFile = function moveFile(arg0, arg1, arg2) {
  const obj = NativeFileModuleDefault;
  let moveFileResult;
  if (obj != null) {
    moveFileResult = obj.moveFile(arg0, arg1, arg2);
  }
  if (moveFileResult == null) {
    moveFileResult = Promise.reject(false);
  }
  return moveFileResult;
};
export const removeFile = function removeFile(cache, filePathForGif) {
  const obj = NativeFileModuleDefault;
  let removeFileResult;
  if (obj != null) {
    removeFileResult = obj.removeFile(cache, filePathForGif);
  }
  if (removeFileResult == null) {
    removeFileResult = Promise.reject(false);
  }
  return removeFileResult;
};
export const clearFolder = function clearFolder(cache, POLL_ATTACHMENT_FOLDER) {
  const obj = NativeFileModuleDefault;
  let clearFolderResult;
  if (obj != null) {
    clearFolderResult = obj.clearFolder(cache, POLL_ATTACHMENT_FOLDER);
  }
  if (clearFolderResult == null) {
    clearFolderResult = Promise.reject(false);
  }
  return clearFolderResult;
};
export const readFile = function readFile() {
  const self = this;
  const apply = closure_4.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
