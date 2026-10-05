// === Module 16722: conjurePickedFiles ===

// Module 16722 (conjurePickedFiles)
import UploadPlatform from "UploadPlatform" /* 7247 */;
import UploadDefault from "Upload" /* 7269 */;
import utils_UploadUtils from "utils/UploadUtils" /* 7274 */;
import ImagePickerDefault from "ImagePicker" /* 7285 */;
import conjureAttachmentDrafts from "conjureAttachmentDrafts" /* 16723 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

require = fn;
let closure_4 = async function _pickConjurePhotos() {
  c3 = 0;
  c4 = 0;
  return (async (arg0, value) => {
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
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
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_2 = tmp2;
            closure_130_0 = undefined;
            const obj5 = { mediaType, selectionLimit, skipProcessing: true };
            c3 = 1;
            c4 = 1;
            const obj6 = { value: ImagePickerDefault.launchImageLibraryAsync(obj5), done: false };
            return obj6;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          let obj = { value, done: true };
          return obj;
        } else {
          closure_130_0 = value;
          if (!closure_130_0.didCancel) {
            if (null != closure_130_0.assets) {
              const assets = closure_130_0.assets;
              const mapped = assets.map((uri) => {
                const obj = { uri: uri.uri, name: null, contentType: null, size: null };
                ({ uri, fileName } = uri);
                if (null == fileName) {
                  const parts = uri.split("/");
                  let str3 = parts.at(-1);
                  if (str3 == null) {
                    str3 = "attachment";
                  }
                  fileName = str3;
                }
                obj.name = fileName;
                let str4 = uri.mimeType;
                if (str4 == null) {
                  str4 = uri.fileType;
                }
                if (str4 == null) {
                  str4 = uri.type;
                }
                if (str4 == null) {
                  str4 = "application/octet-stream";
                }
                obj.contentType = str4;
                return obj;
              });
            }
            c4 = 3;
          }
          const items = [];
        }
      } catch (tmp18) {
        c4 = tmp;
        throw tmp18;
      }
    }
  })();
};
function readFile() {
  const self = this;
  const apply = closure_6.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_6 = async function _readFile() {
  let combined = _require;
  if (_require.startsWith("/")) {
    const _HermesInternal = HermesInternal;
    combined = "file://" + _require;
  }
  await fetch(combined);
  return value.blob();
};
let closure_7 = async function _uploadConjurePickedFile(arg0, arg1) {
  closure_0 = arg0;
  let uri = arg1;
  c11 = 0;
  c12 = 0;
  return (async (arg0, value) => {
    if (c12 === 2) {
      c12 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c12 = 2;
        if (0 === c11) {
          if (arg0 === 1) {
            c12 = 3;
            throw value;
          } else if (arg0 === 2) {
            c12 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_5 = tmp2;
            closure_6 = tmp5;
            closure_134_0 = closure_0;
            closure_134_1 = uri;
            closure_134_2 = undefined;
            closure_134_3 = undefined;
            let type;
            const obj5 = { platform: UploadPlatform.UploadPlatform.REACT_NATIVE, uri: null, originalUri: null, filename: null };
            ({ uri: obj14.uri, uri: obj14.originalUri, name: obj14.filename } = uri);
            const tmp492 = new UploadDefault(obj5);
            if (tmp492.isImage) {
              c11 = 2;
              c12 = 1;
              const obj6 = { value: utils_UploadUtils.getFileInfo(tmp492), done: false };
              return obj6;
            } else {
              const tmp57Result2 = conjureAttachmentDrafts;
              closure_7 = tmp57Result2;
              uploadConjureAttachment = tmp57Result2.uploadConjureAttachment;
              closure_9 = closure_0;
              c11 = 1;
              c12 = 1;
              const obj7 = { value: readFile(uri.uri), done: false };
              return obj7;
            }
          }
        } else if (1 === tmp5) {
          if (arg0 === 1) {
            c12 = 3;
            throw value;
          } else if (arg0 === 2) {
            c12 = 3;
            const obj8 = { value, done: true };
            return obj8;
          } else {
            c12 = 3;
            const obj9 = { value: uploadConjureAttachment(closure_9, value, closure_134_1.name, closure_134_1.contentType), done: true };
            return obj9;
          }
        } else if (2 === tmp5) {
          if (arg0 === 1) {
            c12 = 3;
            throw value;
          } else if (arg0 === 2) {
            c12 = 3;
            const obj10 = { value, done: true };
            return obj10;
          } else {
            closure_134_2 = value;
            name = closure_134_2.name;
            if (name == null) {
              name = closure_134_1.name;
            }
            closure_134_3 = name;
            const obj11 = { uri: closure_134_2.uri, overrideFilename: closure_134_3 };
            type = closure_133_0(closure_133_2[6]).getFile(obj11).type;
            const tmp24 = closure_133_0(closure_133_2[4]);
            closure_10 = tmp24;
            uploadConjureAttachment = tmp24.uploadConjureAttachment;
            closure_3 = closure_134_0;
            c11 = 3;
            c12 = 1;
            const obj12 = { value: closure_133_5(closure_134_2.uri), done: false };
            return obj12;
          }
        } else if (arg0 === 1) {
          c12 = 3;
          throw value;
        } else if (arg0 === 2) {
          c12 = 3;
          const obj13 = { value, done: true };
          return obj13;
        } else {
          c12 = 3;
          const obj = { value: uploadConjureAttachment(closure_3, value, closure_134_3, type), done: true };
          return obj;
        }
      } catch (tmp37) {
        c12 = tmp;
        throw tmp37;
      }
    }
  })();
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/chat/native/conjurePickedFiles.tsx");

export const pickedName = function pickedName(uri, name) {
  let tmp = name;
  if (null == name) {
    const parts = uri.split("/");
    let str3 = parts.at(-1);
    if (str3 == null) {
      str3 = "attachment";
    }
    tmp = str3;
  }
  return tmp;
};
export const pickConjurePhotos = function pickConjurePhotos() {
  const self = this;
  const apply = closure_4.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const uploadConjurePickedFile = function uploadConjurePickedFile() {
  const self = this;
  const apply = closure_7.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};