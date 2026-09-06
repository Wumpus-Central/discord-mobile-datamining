// === Module 5137: AttachmentFile ===

// Module 5137 (AttachmentFile)
import LoggerDefault from "Logger" /* 3 */;
import _modDef38 from "module_38" /* 38 */;
import Upload from "Upload" /* 5128 */;
import utils_UploadUtils from "utils/UploadUtils" /* 5138 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

require = fn;
let closure_5 = async function _getAttachmentFile(arg0, arg1) {
  let item = arg0;
  closure_1 = arg1;
  c7 = 0;
  c8 = 0;
  c6 = 0;
  return (async (arg0, value) => {
    if (c8 === 2) {
      c8 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
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
            closure_3 = tmp7;
            closure_131_0 = item;
            closure_131_1 = closure_1;
            closure_131_2 = undefined;
            closure_131_3 = undefined;
            let attachmentPayload;
            _modDef38(item.item.platform === Upload.UploadPlatform.REACT_NATIVE, "Upload must be in the React Native format");
            c6 = 1;
            c7 = 2;
            c8 = 1;
            const obj1 = { value: utils_UploadUtils.getFileInfo(item, closure_1), done: false };
            return obj1;
          }
        } else if (1 === tmp7) {
          c6 = 0;
          closure_131_5 = closure_5;
          closure_132_4.error("Failed to get attachment file", closure_131_5);
          c8 = 3;
          const obj2 = { value: undefined, done: true };
          return obj2;
        } else if (2 === tmp7) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 0;
            c8 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_131_3 = value;
            attachmentPayload = closure_132_0(closure_132_2[5]).getAttachmentPayload(closure_131_0, closure_131_1, closure_131_3.name);
            c6 = 2;
            const obj10 = closure_132_0(closure_132_2[5]);
            c7 = 4;
            c8 = 1;
            const obj4 = { value: closure_132_0(closure_132_2[4]).getFileSize(closure_131_3.uri), done: false };
            return obj4;
          }
        } else {
          if (3 === tmp7) {
            c6 = 1;
          } else if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 0;
            c8 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_131_2 = value;
            c6 = 1;
          }
          const obj5 = { file: closure_131_3, uri: closure_131_3.uri, name: null, fileSize: null };
          const filename = attachmentPayload.filename;
          name = filename;
          if (filename == null) {
            name = "";
          }
          obj5.name = name;
          obj5.fileSize = closure_131_2;
          c6 = 0;
          c8 = 3;
          const obj6 = { value: obj5, done: true };
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
};
let closure_6 = async function _cancelGetAttachmentFile(arg0) {
  if (c1 === 2) {
    c1 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
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
      c1 = 2;
      if (0 === c2) {
        if (arg0 === 1) {
          c1 = 3;
          throw value;
        } else if (arg0 === 2) {
          c1 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          let obj1 = utils_UploadUtils;
          c2 = 1;
          c1 = 1;
          obj1 = { value: null, done: false };
          obj1.value = obj1.cancelGetFileInfo(closure_0);
          return obj1;
        }
      } else if (arg0 === 1) {
        c1 = 3;
        throw value;
      } else if (arg0 === 2) {
        c1 = 3;
        obj = { value, done: true };
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
};
const logger = new LoggerDefault("AttachmentFile");
const size = fn(2);
const result = size.fileFinishedImporting("utils/AttachmentFile.native.tsx");

export const getAttachmentFile = function getAttachmentFile() {
  const self = this;
  const apply = closure_5.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const cancelGetAttachmentFile = function cancelGetAttachmentFile() {
  const self = this;
  const apply = closure_6.apply;
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
    let startsWithResult = "" !== utils_UploadUtils.getAppDir();
    if (startsWithResult) {
      startsWithResult = replaced.startsWith(utils_UploadUtils.getAppDir());
      const tmpResult = utils_UploadUtils;
    }
    return startsWithResult;
  } catch (tmp4) {
    logger.error("Failed to get app dir", tmp4);
    return false;
  }
};