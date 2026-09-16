// === Module 8334: FileManagerUtils ===

// Module 8334 (FileManagerUtils)
import LoggerDefault from "Logger" /* 3 */;
import NativeFileModuleDefault from "NativeFileModule" /* 1151 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

const require = fn;
let closure_5 = async function _readFile(arg0) {
  if (c8 === 2) {
    c8 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp7 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
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
          const obj5 = { value, done: true };
          return obj5;
        } else {
          closure_4 = tmp3;
          closure_3 = tmp5;
          closure_131_0 = closure_1;
          closure_131_1 = dependencyMap;
          closure_131_2 = undefined;
          const tmp41 = (function getBaseDirectory(arg0) {
            if ("shared" === arg0) {
              if (!obj.isAndroid()) {
                return closure_1_1(1151).getConstants().SharedDirPath;
              }
              obj = closure_1_0(1364);
            }
            if ("cache" === arg0) {
              let DocumentsDirPath = closure_1_1(1151).getConstants().CacheDirPath;
              const obj4 = closure_1_1(1151);
            } else {
              DocumentsDirPath = closure_1_1(1151).getConstants().DocumentsDirPath;
              const obj3 = closure_1_1(1151);
            }
          })(closure_0);
          closure_131_2 = tmp41;
          if (null == tmp41) {
            c8 = 3;
            return { value: null, done: true };
          } else {
            c7 = 1;
            c8 = 1;
            const obj6 = { value: require("NativeFileModule").fileExists(tmp41 + "/" + closure_1), done: false };
            return obj6;
          }
        }
      } else if (1 === tmp8) {
        if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c8 = 3;
          const obj8 = { value, done: true };
          return obj8;
        } else if (value) {
          c6 = 1;
          c7 = 3;
          c8 = 1;
          const obj9 = { value: closure_132_1(closure_132_2[2]).readFile(closure_131_2 + "/" + closure_131_0, closure_131_1), done: false };
          return obj9;
        } else {
          c8 = 3;
          return { value: null, done: true };
        }
      } else if (2 === tmp8) {
        c6 = 0;
        closure_131_3 = closure_5;
        if (obj3.isAndroid()) {
          closure_132_4.error("Failed to read file from disk", closure_131_3);
          c8 = 3;
          return { value: null, done: true };
        } else {
          throw closure_131_3;
        }
        obj3 = closure_132_0(closure_132_2[3]);
      } else if (arg0 === 1) {
        c8 = 3;
        throw value;
      } else if (arg0 === 2) {
        c6 = 0;
        c8 = 3;
        const obj10 = { value, done: true };
        return obj10;
      } else {
        c6 = 0;
        c8 = 3;
        let obj = { value, done: true };
        return obj;
      }
    } catch (tmp30) {
      closure_5 = tmp30;
      if (tmp4 === c6) {
        c8 = tmp2;
        throw tmp30;
      } else {
        c7 = tmp;
      }
    }
  }
};
let closure_4 = new LoggerDefault("FileManagerUtils");
const size = fn(2);
const result = size.fileFinishedImporting("utils/FileManagerUtils.native.tsx");

export const writeFile = function writeFile(cache, filePathForGif, arg2, utf8) {
  return NativeFileModuleDefault.writeFile(cache, filePathForGif, arg2, utf8).then((result) => {
    let combined = result;
    if (obj.isAndroid()) {
      const _HermesInternal = HermesInternal;
      combined = "file:" + result;
    }
    return combined;
  });
};
export const moveFile = function moveFile(arg0, arg1, arg2) {
  return NativeFileModuleDefault.moveFile(arg0, arg1, arg2);
};
export const removeFile = function removeFile(cache, filePathForGif) {
  return NativeFileModuleDefault.removeFile(cache, filePathForGif);
};
export const clearFolder = function clearFolder(cache, POLL_ATTACHMENT_FOLDER) {
  return NativeFileModuleDefault.clearFolder(cache, POLL_ATTACHMENT_FOLDER);
};
export const readFile = function readFile() {
  const self = this;
  const apply = closure_5.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};