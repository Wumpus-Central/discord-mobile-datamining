// === Module 7876: FileManagerUtils ===

// Module 7876 (FileManagerUtils)
import LoggerDefault from "Logger" /* 3 */;
import react_nativeDefault from "react-native" /* 1162 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let c7, c8, closure_5;

let obj = function _readFile() {
  obj = _asyncToGenerator(async (arg0, arg1, arg2) => {
    function getBaseDirectory(arg0) {
      let DocumentsDirPath;
      if ("shared" === arg0) {
        let SharedDirPath;
        obj = closure_1_0(closure_1_2[3]);
        if (!obj.isAndroid()) {
          const obj2 = closure_1_1(closure_1_2[2]);
          SharedDirPath = obj2.getConstants().SharedDirPath;
        }
        return SharedDirPath;
      }
      if ("cache" === arg0) {
        const obj4 = closure_1_1(closure_1_2[2]);
        DocumentsDirPath = obj4.getConstants().CacheDirPath;
      } else {
        const obj3 = closure_1_1(closure_1_2[2]);
        DocumentsDirPath = obj3.getConstants().DocumentsDirPath;
      }
      SharedDirPath = DocumentsDirPath;
    }
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    if (c8 === 2) {
      c8 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c6;
      try {
        let fileExistsResult;
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
            closure_4 = tmp;
            closure_0 = closure_1;
            closure_1 = closure_2;
            const tmp36 = getBaseDirectory(closure_0);
            closure_2 = tmp36;
            const tmp34 = closure_1;
            if (null == tmp36) {
              c8 = 3;
              return { value: null, done: true };
            } else {
              const obj7 = react_nativeDefault;
              fileExistsResult = obj7.fileExists(tmp36 + "/" + tmp34);
              c7 = 1;
              c8 = 1;
              const obj6 = { value: fileExistsResult, done: false };
              return obj6;
            }
          }
        } else if (1 === c7) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            const obj8 = { value, done: true };
            return obj8;
          } else if (value) {
            c6 = 1;
            let obj4 = closure_132_1(closure_132_2[2]);
            fileExistsResult = obj4.readFile(closure_2 + "/" + closure_0, closure_1);
            c7 = 3;
            c8 = 1;
            const obj9 = { value: fileExistsResult, done: false };
            return obj9;
          } else {
            c8 = 3;
            return { value: null, done: true };
          }
        } else if (2 === c7) {
          c6 = 0;
          let closure_3 = closure_5;
          let obj3 = closure_132_0(closure_132_2[3]);
          fileExistsResult = obj3.isAndroid();
          if (fileExistsResult) {
            closure_132_4.error("Failed to read file from disk", closure_3);
            c8 = 3;
            return { value: null, done: true };
          } else {
            fileExistsResult = closure_3;
            throw closure_3;
          }
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
          obj = { value, done: true };
          return obj;
        }
      } catch (tmp26) {
        closure_5 = tmp26;
        if (0 === c6) {
          c8 = 3;
          throw tmp26;
        } else {
          c7 = 2;
        }
      }
    }
  });
  return obj(...arguments);
};
let closure_4 = new LoggerDefault("FileManagerUtils");
const tmp2 = new LoggerDefault("FileManagerUtils");
const result = size.fileFinishedImporting("utils/FileManagerUtils.native.tsx");

export const writeFile = function writeFile(cache, combined2, value, utf8) {
  obj = react_nativeDefault;
  const writeFileResult = obj.writeFile(cache, combined2, value, utf8);
  return writeFileResult.then((result) => {
    let combined = result;
    obj = PlatformUtils;
    if (obj.isAndroid()) {
      const _HermesInternal = HermesInternal;
      combined = "file:" + result;
    }
    return combined;
  });
};
export const moveFile = function moveFile(arg0, arg1, arg2) {
  obj = react_nativeDefault;
  return obj.moveFile(arg0, arg1, arg2);
};
export const removeFile = function removeFile(cache, filePathForGif) {
  obj = react_nativeDefault;
  return obj.removeFile(cache, filePathForGif);
};
export const clearFolder = function clearFolder(cache, c5) {
  obj = react_nativeDefault;
  return obj.clearFolder(cache, c5);
};
export const readFile = function readFile() {
  return obj(...arguments);
};