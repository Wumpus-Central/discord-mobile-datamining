// === Module 7273: AttachmentFile ===

// Module 7273 (AttachmentFile)
import LoggerDefault from "Logger" /* 3 */;
import _modDef38 from "module_38" /* 38 */;
import UploadPlatform from "UploadPlatform" /* 7247 */;
import utils_UploadUtils from "utils/UploadUtils" /* 7274 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let c1, c2, closure_5, file, filename;

let obj = function _getAttachmentFile() {
  obj = _asyncToGenerator(async (arg0, arg1) => {
    const item = arg0;
    let closure_1 = arg1;
    let c7 = 0;
    let c8 = 0;
    let c6 = 0;
    return (async (arg0, value) => {
      let obj10;
      let obj11;
      if (c8 === 2) {
        c8 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let _var;
          c8 = 2;
          if (0 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              return { value, done: true };
            } else {
              _var = undefined;
              file = undefined;
              filename = undefined;
              const tmp45 = _modDef38;
              tmp45(item.item.platform === UploadPlatform.UploadPlatform.REACT_NATIVE, "Upload must be in the React Native format");
              c6 = 1;
              c7 = 2;
              c8 = 1;
              const obj4 = { value: obj11.getFileInfo(item, closure_1), done: false };
              obj11 = utils_UploadUtils;
              return obj4;
            }
          } else if (1 === c7) {
            c6 = 0;
            closure_132_4.error("Failed to get attachment file", closure_5);
            throw closure_5;
          } else if (2 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 0;
              c8 = 3;
              return { value, done: true };
            } else {
              file = value;
              const obj9 = closure_132_0(closure_132_2[5]);
              filename = obj9.getAttachmentPayload(item, closure_1, file.name);
              c6 = 2;
              c7 = 4;
              c8 = 1;
              const obj6 = { value: obj10.getFileSize(file.uri), done: false };
              obj10 = closure_132_0(closure_132_2[4]);
              return obj6;
            }
          } else {
            if (3 === c7) {
              c6 = 1;
            } else if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 0;
              c8 = 3;
              return { value, done: true };
            } else {
              _var = value;
              c6 = 1;
            }
            filename = filename.filename;
            const obj7 = { file, uri: file.uri, name: _var, fileSize: _var };
            _var = filename;
            if (filename == null) {
              _var = "";
            }
            c6 = 0;
            c8 = 3;
            return { value: obj7, done: true };
          }
        } catch (tmp22) {
          closure_5 = tmp22;
          if (0 === c6) {
            c8 = 3;
            throw tmp22;
          } else if (1 === tmp24) {
            c7 = 1;
          } else {
            c7 = 3;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _cancelGetAttachmentFile() {
  obj = _asyncToGenerator(async (arg0) => {
    let obj2;
    let closure_0 = arg0;
    if (c1 === 2) {
      c1 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
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
            const obj4 = { value, done: true };
            return obj4;
          } else {
            c2 = 1;
            c1 = 1;
            const obj5 = { value: obj2.cancelGetFileInfo(closure_0), done: false };
            obj2 = utils_UploadUtils;
            return obj5;
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
          return { value: "IconComponent", done: null };
        }
      } catch (tmp7) {
        c1 = 3;
        throw tmp7;
      }
    }
  });
  return obj(...arguments);
};
const tmp2 = new LoggerDefault("AttachmentFile");
const logger = tmp2;
const result = size.fileFinishedImporting("utils/AttachmentFile.native.tsx");

export const getAttachmentFile = function getAttachmentFile() {
  return obj(...arguments);
};
export const cancelGetAttachmentFile = function cancelGetAttachmentFile() {
  return obj(...arguments);
};
export const fileIsInAppDir = function fileIsInAppDir(uri) {
  const replaced = uri.replace(/^file:\/\//, "");
  try {
    obj = utils_UploadUtils;
    let startsWithResult = "" !== obj.getAppDir();
    if (startsWithResult) {
      const startsWith = replaced.startsWith;
      const tmp2Result = utils_UploadUtils;
      startsWithResult = startsWith(tmp2Result.getAppDir());
    }
    return startsWithResult;
  } catch (tmp5) {
    logger.error("Failed to get app dir", tmp5);
    return false;
  }
};