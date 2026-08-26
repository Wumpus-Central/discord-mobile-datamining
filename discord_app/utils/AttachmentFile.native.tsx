// === Module 5028: _getAttachmentFile ===

// Module 5028 (_getAttachmentFile)
import timestampDefault from "timestamp" /* 3 */;
import openImagePickerUnhandled from "openImagePickerUnhandled" /* 5029 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;

require = arg1;
function _getAttachmentFile() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c7 = 0;
    c8 = 0;
    c6 = 0;
    return (function*(arg0, arg1) {
      if (c8 === 2) {
        c8 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
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
              let logger = tmp3;
              closure_3 = tmp7;
              dependencyMap = undefined;
              closure_3 = undefined;
              logger = undefined;
              callback(closure_1_2[2])(lib.item.platform === lib(closure_1_2[3]).UploadPlatform.REACT_NATIVE, "Upload must be in the React Native format");
              c6 = 1;
              const tmp49 = callback(closure_1_2[2]);
              c7 = 2;
              c8 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = lib(closure_1_2[4]).getFileInfo(lib, callback);
              return obj1;
            }
          } else if (1 === tmp7) {
            c6 = 0;
            logger.error("Failed to get attachment file", closure_5);
            c8 = 3;
            const obj2 = { value: null, done: true };
            obj2[0] = undefined;
            return obj2;
          } else if (2 === tmp7) {
            if (arg0 === 1) {
              c8 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 0;
              c8 = 3;
              const obj3 = { value: null, done: true };
              obj3[0] = arg1;
              return obj3;
            } else {
              closure_3 = arg1;
              logger = lib(5021).getAttachmentPayload(lib, callback, closure_3.name);
              c6 = 2;
              const obj10 = lib(5021);
              c7 = 4;
              c8 = 1;
              const obj4 = { value: null, done: false };
              obj4[0] = lib(5029).getFileSize(closure_3.uri);
              return obj4;
            }
          } else {
            if (3 === tmp7) {
              c6 = 1;
            } else if (arg0 === 1) {
              c8 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 0;
              c8 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              dependencyMap = arg1;
              c6 = 1;
            }
            const obj5 = { file: null, uri: null, name: null, fileSize: null };
            obj5[0] = closure_3;
            obj5[1] = closure_3.uri;
            const filename = logger.filename;
            dependencyMap = filename;
            if (filename == null) {
              dependencyMap = "";
            }
            obj5[2] = dependencyMap;
            obj5[3] = dependencyMap;
            c6 = 0;
            c8 = 3;
            const obj6 = { value: null, done: true };
            obj6[0] = obj5;
            return obj6;
          }
        } catch (tmp24) {
          closure_5 = tmp24;
          if (tmp4 === c6) {
            c8 = tmp2;
            throw tmp24;
          } else if (tmp === tmp26) {
            c7 = tmp;
          } else {
            c7 = tmp2;
          }
        }
      }
    })();
  });
  closure_5 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _cancelGetAttachmentFile() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c2 = 0;
    c1 = 0;
    return (function*(arg0) {
      if (c1 === 2) {
        c1 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
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
          c1 = 2;
          if (0 === table) {
            if (arg0 === 1) {
              c1 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c1 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              obj1 = callback(table[4]);
              table = 1;
              c1 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = obj1.cancelGetFileInfo(callback);
              return obj1;
            }
          } else if (arg0 === 1) {
            c1 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c1 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            c1 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp8) {
          c1 = tmp;
          throw tmp8;
        }
      }
    })();
  });
  closure_6 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_4 = new timestampDefault("AttachmentFile");
const tmp2 = new timestampDefault("AttachmentFile");
const result = require("set").fileFinishedImporting("utils/AttachmentFile.native.tsx");

export const getAttachmentFile = function getAttachmentFile(arg0, c0) {
  const self = this;
  const apply = _getAttachmentFile.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const cancelGetAttachmentFile = function cancelGetAttachmentFile(found) {
  const self = this;
  const apply = _cancelGetAttachmentFile.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fileIsInAppDir = function fileIsInAppDir(uri) {
  const replaced = uri.replace(/^file:\/\//, "");
  try {
    let startsWithResult = "" !== openImagePickerUnhandled.getAppDir();
    if (startsWithResult) {
      startsWithResult = replaced.startsWith(openImagePickerUnhandled.getAppDir());
      const tmpResult = openImagePickerUnhandled;
    }
    return startsWithResult;
  } catch (tmp4) {
    logger.error("Failed to get app dir", tmp4);
    return false;
  }
};