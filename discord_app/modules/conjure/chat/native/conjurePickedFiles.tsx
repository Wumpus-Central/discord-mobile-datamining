// === Module 16743: conjurePickedFiles ===

// Module 16743 (conjurePickedFiles)
import UploadPlatform from "UploadPlatform" /* 7260 */;
import UploadDefault from "Upload" /* 7282 */;
import utils_UploadUtils from "utils/UploadUtils" /* 7287 */;
import ImagePickerDefault from "ImagePicker" /* 7298 */;
import conjureAttachmentDrafts from "conjureAttachmentDrafts" /* 16744 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let closure_10, closure_2, closure_5, closure_6, closure_7, closure_9, mediaType, name2, overrideFilename, uploadConjureAttachment;

let obj = function _pickConjurePhotos() {
  obj = _asyncToGenerator(async (mediaType, selectionLimit) => {
    let c3 = 0;
    let c4 = 0;
    return (async (arg0, value) => {
      let obj3;
      if (c4 === 2) {
        c4 = 3;
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
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              return { value, done: true };
            } else {
              closure_2 = tmp;
              mediaType = undefined;
              c3 = 1;
              c4 = 1;
              const obj5 = { mediaType, selectionLimit, skipProcessing: true };
              const obj6 = { value: obj3.launchImageLibraryAsync(obj5), done: false };
              obj3 = ImagePickerDefault;
              return obj6;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            return { value, done: true };
          } else {
            mediaType = value;
            if (!mediaType.didCancel) {
              let mapped;
              if (null != mediaType.assets) {
                const assets = mediaType.assets;
                mapped = assets.map((uri) => {
                  let fileName;
                  let str4;
                  obj = { uri: uri.uri, name: fileName, contentType: str4, size: null };
                  ({ uri, fileName } = uri);
                  if (null == fileName) {
                    const parts = uri.split("/");
                    let str3 = parts.at(-1);
                    if (str3 == null) {
                      str3 = "attachment";
                    }
                    fileName = str3;
                  }
                  str4 = uri.mimeType;
                  if (str4 == null) {
                    str4 = uri.fileType;
                  }
                  if (str4 == null) {
                    str4 = uri.type;
                  }
                  if (str4 == null) {
                    str4 = "application/octet-stream";
                  }
                  return obj;
                });
              }
              c4 = 3;
              obj = { value: mapped, done: true };
              return obj;
            }
            mapped = [];
          }
        } catch (tmp16) {
          c4 = 3;
          throw tmp16;
        }
      }
    })();
  });
  return obj(...arguments);
};
function readFile() {
  return obj(...arguments);
}
obj = function _readFile() {
  obj = _asyncToGenerator(async (arg0) => {
    let c1;
    let c2;
    let closure_0 = arg0;
    const _fetch = fetch;
    let combined = closure_0;
    if (closure_0.startsWith("/")) {
      const _HermesInternal = HermesInternal;
      combined = "file://" + closure_0;
    }
    await _fetch(combined);
    return value.blob();
  });
  return obj(...arguments);
};
obj = function _uploadConjurePickedFile() {
  obj = _asyncToGenerator(async (arg0, arg1) => {
    let closure_0 = arg0;
    const user = arg1;
    let c11 = 0;
    let c12 = 0;
    return (async function(arg0, value) {
      let tmp53Result;
      if (c12 === 2) {
        c12 = 3;
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
          let type;
          c12 = 2;
          if (0 === c11) {
            if (arg0 === 1) {
              c12 = 3;
              throw value;
            } else if (arg0 === 2) {
              c12 = 3;
              return { value, done: true };
            } else {
              closure_5 = tmp;
              closure_6 = tmp4;
              name2 = undefined;
              overrideFilename = undefined;
              type = undefined;
              const obj5 = { platform: UploadPlatform.UploadPlatform.REACT_NATIVE, uri: null, originalUri: null, filename: null };
              ({ uri: obj14.uri, uri: obj14.originalUri, name: obj14.filename } = user);
              const self = this;
              const self2 = this;
              const tmp47 = UploadDefault;
              const tmp472 = new tmp47(obj5);
              if (tmp472.isImage) {
                c11 = 2;
                c12 = 1;
                const obj6 = { value: tmp53Result.getFileInfo(tmp472), done: false };
                tmp53Result = utils_UploadUtils;
                return obj6;
              } else {
                const tmp53Result2 = conjureAttachmentDrafts;
                closure_7 = tmp53Result2;
                uploadConjureAttachment = tmp53Result2.uploadConjureAttachment;
                closure_9 = closure_0;
                c11 = 1;
                c12 = 1;
                const obj7 = { value: readFile(user.uri), done: false };
                return obj7;
              }
            }
          } else if (1 === c11) {
            if (arg0 === 1) {
              c12 = 3;
              throw value;
            } else if (arg0 === 2) {
              c12 = 3;
              return { value, done: true };
            } else {
              c12 = 3;
              const obj9 = { value: uploadConjureAttachment(closure_9, value, user.name, user.contentType), done: true };
              return obj9;
            }
          } else if (2 === c11) {
            if (arg0 === 1) {
              c12 = 3;
              throw value;
            } else if (arg0 === 2) {
              c12 = 3;
              return { value, done: true };
            } else {
              name2 = value;
              const name = name2.name;
              name2 = name;
              if (name == null) {
                name2 = user.name;
              }
              overrideFilename = name2;
              const obj11 = { uri: name2.uri, overrideFilename };
              const obj3 = closure_133_0(closure_133_2[6]);
              type = obj3.getFile(obj11).type;
              const tmp23 = closure_133_0(closure_133_2[4]);
              closure_10 = tmp23;
              uploadConjureAttachment = tmp23.uploadConjureAttachment;
              overrideFilename = closure_0;
              c11 = 3;
              c12 = 1;
              const obj12 = { value: closure_133_5(name2.uri), done: false };
              return obj12;
            }
          } else if (arg0 === 1) {
            c12 = 3;
            throw value;
          } else if (arg0 === 2) {
            c12 = 3;
            return { value, done: true };
          } else {
            c12 = 3;
            obj = { value: uploadConjureAttachment(overrideFilename, value, overrideFilename, type), done: true };
            return obj;
          }
        } catch (tmp36) {
          c12 = 3;
          throw tmp36;
        }
      }
    })();
  });
  return obj(...arguments);
};
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
  return obj(...arguments);
};
export const uploadConjurePickedFile = function uploadConjurePickedFile() {
  return obj(...arguments);
};