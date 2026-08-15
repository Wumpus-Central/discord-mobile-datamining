// discord_app/utils/native/UploadUtils.tsx
import _objectWithoutProperties from "_objectWithoutProperties";
import mergeGuildAvatar from "mergeGuildAvatar";
import get_ActivityIndicator from "cancel";
import CHANNEL_SIDEBAR_WIDTH from "CHANNEL_SIDEBAR_WIDTH";
import closure_10 from "CHANNEL_SIDEBAR_WIDTH";
import handleConnectionInfoChange from "handleConnectionInfoChange";
import closure_12 from "mergeGuildAvatar";
import ME from "ME";
import { NativePermissionTypes } from "NativePermissionStatus";
import { enforcing } from "../../../discord_common/js/packages/rtn-codegen/js/NativeFileModule.tsx";
import { cancel } from "../../lib/uploader/Upload.tsx";
import { toString } from "../../modules/media_uploads/native/VideoUploadUtils.tsx";
import { getUploadFileSizeSum } from "../FileUtils.tsx";
import { set } from "../PlatformUtils.tsx";
import { items } from "../UploadUtils.tsx";
import { getTimeFormat } from "TimeUtils.tsx";

let Base64GIFPrefix;
let Base64JPEGPrefix;
let c9;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_6;
let error;
let map1;
let metroImportAll;
const require = arg1;
function openImagePickerUnhandled() {
  const self = this;
  const apply = _openImagePickerUnhandled.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _openImagePickerUnhandled() {
  const self = this;
  let tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c11 = 0;
    let c12 = 0;
    let c9 = 0;
    return (function*(arg0, originalMd5) {
      if (c12 === 2) {
        c12 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw originalMd5;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = originalMd5;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c12 = 2;
          if (0 === c11) {
            if (arg0 === 1) {
              c12 = 3;
              throw originalMd5;
            } else if (arg0 === 2) {
              c12 = 3;
              obj = { value: null, done: true };
              obj[0] = originalMd5;
              return obj;
            } else {
              let closure_6 = tmp2;
              let closure_7 = tmp7;
              let type;
              let obj20;
              let obj23;
              let obj10;
              let obj8;
              closure_6 = undefined;
              closure_7 = undefined;
              let obj25 = outer1_1(outer1_2[9]);
              c11 = 1;
              c12 = 1;
              const obj1 = { value: null, done: false };
              obj1[0] = obj25.requestPermission(outer1_19.PHOTOS);
              return obj1;
            }
          } else if (1 === tmp7) {
            if (arg0 === 1) {
              c12 = 3;
              throw originalMd5;
            } else if (arg0 === 2) {
              c12 = 3;
              const obj2 = { value: null, done: true };
              obj2[0] = originalMd5;
              return obj2;
            } else if (originalMd5) {
              let obj3 = { width: null, height: null };
              let size = lib;
              if ("size" in lib) {
                size = size.size;
                obj3[0] = size;
                obj3[1] = lib.size;
                let tmp64 = obj3;
              } else {
                obj3[0] = size.width;
                obj3[1] = lib.height;
                tmp64 = obj3;
              }
              type = tmp64;
              obj20 = type.width;
              obj23 = type.height;
              obj3 = new Promise((arg0, arg1) => {
                let closure_0 = arg0;
                const type = arg1;
                type(obj20[10]).launchImageLibrary({ mediaType: "photo", includeBase64: true, disableNewIOSPicker: true }, (assets) => {
                  let first = null;
                  if (null != assets.assets) {
                    first = null;
                    if (assets.assets.length > 0) {
                      first = assets.assets[0];
                    }
                  }
                  if (assets.didCancel) {
                    const _Error2 = Error;
                    const error = new Error(outer1_23);
                    callback2(error);
                  } else {
                    if (null == assets.errorCode) {
                      let uri;
                      if (first != null) {
                        uri = first.uri;
                      }
                      if (null != uri) {
                        const obj = { uri: null, base64: null };
                        ({ uri: obj[0], base64: obj[1] } = first);
                        callback(obj);
                      }
                    }
                    const _Error = Error;
                    const error1 = new Error(assets.errorMessage);
                    callback2(error1);
                  }
                });
              });
              c11 = 2;
              c12 = 1;
            } else {
              let _Error = Error;
              let error = new Error("Missing permission");
              throw error;
            }
          } else if (2 === tmp7) {
            if (arg0 === 1) {
              c12 = 3;
              throw originalMd5;
            } else if (arg0 === 2) {
              c12 = 3;
              const obj4 = { value: null, done: true };
              obj4[0] = originalMd5;
              return obj4;
            } else {
              obj10 = originalMd5;
              const obj5 = { uri: null, i: "" };
              obj5[0] = obj10.uri;
              obj8 = lib(obj20[11]).getFile(obj5);
              const obj30 = lib(obj20[11]);
              const obj32 = type(obj20[12]);
              closure_6 = type(obj20[12]).fromFileUri(obj10.uri).catch(() => null);
              if (null != obj10.base64) {
                if (obj33.isAndroid()) {
                  let base64 = obj10.base64;
                  if (base64.startsWith("UklGR")) {
                    const obj6 = {};
                    let closure_8 = obj6;
                    obj6.base64 = closure_17 + obj10.base64;
                    obj6.mimeType = "image/webp";
                    c11 = 3;
                    c12 = 1;
                    const obj7 = { value: null, done: false };
                    obj7[0] = closure_6;
                    return obj7;
                  } else {
                    base64 = obj10.base64;
                    if (4 === base64.indexOf("ZnR5cA==")) {
                      const base641 = obj10.base64;
                      if (8 !== base641.indexOf("YXZpZg==")) {
                        const base642 = obj10.base64;
                      }
                      obj8 = { base64: closure_18 + obj10.base64, mimeType: "image/avif" };
                      c11 = 4;
                      c12 = 1;
                      const obj9 = { value: null, done: false };
                      obj9[0] = closure_6;
                      return obj9;
                    }
                  }
                }
                obj33 = lib(obj20[13]);
              }
              if ("image/gif" === obj8.type) {
                obj10 = {};
                obj10.base64 = closure_14 + obj10.base64;
                obj10.mimeType = "image/gif";
                c11 = 5;
                c12 = 1;
                const obj11 = { value: null, done: false };
                obj11[0] = closure_6;
                return obj11;
              } else {
                let tmp = closure_6;
                let c9 = 1;
                tmp = type;
                tmp = obj20;
                const obj12 = { uri: null, width: null, height: null, includeBase64: true, mimeType: null };
                tmp = obj10;
                obj12[0] = obj10.uri;
                tmp = obj20;
                obj12[1] = obj20;
                tmp = obj23;
                obj12[2] = obj23;
                tmp = lib;
                const preferredMimeType = lib.preferredMimeType;
                type = preferredMimeType;
                if (preferredMimeType == null) {
                  type = obj8.type;
                }
                obj12[4] = type;
                c11 = 7;
                c12 = 1;
                const obj13 = { value: null, done: false };
                obj13[0] = type(obj20[10]).launchCropper(obj12);
                return obj13;
              }
              const fromFileUriResult = type(obj20[12]).fromFileUri(obj10.uri);
            }
          } else if (3 === tmp7) {
            if (arg0 === 1) {
              c12 = 3;
              throw originalMd5;
            } else if (arg0 === 2) {
              c12 = 3;
              const obj14 = { value: null, done: true };
              obj14[0] = originalMd5;
              return obj14;
            } else {
              closure_8.originalMd5 = originalMd5;
              c12 = 3;
              const obj15 = { value: null, done: true };
              obj15[0] = closure_8;
              return obj15;
            }
          } else if (4 === tmp7) {
            if (arg0 === 1) {
              c12 = 3;
              throw originalMd5;
            } else if (arg0 === 2) {
              c12 = 3;
              const obj16 = { value: null, done: true };
              obj16[0] = originalMd5;
              return obj16;
            } else {
              obj8.originalMd5 = originalMd5;
              c12 = 3;
              const obj17 = { value: null, done: true };
              obj17[0] = obj8;
              return obj17;
            }
          } else if (5 === tmp7) {
            if (arg0 === 1) {
              c12 = 3;
              throw originalMd5;
            } else if (arg0 === 2) {
              c12 = 3;
              const obj18 = { value: null, done: true };
              obj18[0] = originalMd5;
              return obj18;
            } else {
              obj10.originalMd5 = originalMd5;
              c12 = 3;
              const obj19 = { value: null, done: true };
              obj19[0] = obj10;
              return obj19;
            }
          } else if (6 === tmp7) {
            c9 = 0;
            closure_8 = closure_10;
            if ("E_PICKER_CANCELLED" === closure_8.code) {
              throw closure_8;
            } else {
              obj20 = { base64: closure_13 + obj10.base64, mimeType: obj8.type, errorStr: closure_8.message };
              c11 = 9;
              c12 = 1;
              const obj21 = { value: null, done: false };
              obj21[0] = closure_6;
              return obj21;
            }
          } else if (7 === tmp7) {
            if (arg0 === 1) {
              c12 = 3;
              throw originalMd5;
            } else if (arg0 === 2) {
              c9 = 0;
              c12 = 3;
              const obj22 = { value: null, done: true };
              obj22[0] = originalMd5;
              return obj22;
            } else {
              closure_7 = originalMd5;
              obj23 = {};
              const _HermesInternal = HermesInternal;
              obj23.base64 = "data:" + closure_7.mime + ";base64," + closure_7.data;
              obj23.mimeType = closure_7.mime;
              c11 = 8;
              c12 = 1;
              const obj24 = { value: null, done: false };
              obj24[0] = closure_6;
              return obj24;
            }
          } else if (8 === tmp7) {
            if (arg0 === 1) {
              c12 = 3;
              throw originalMd5;
            } else if (arg0 === 2) {
              c9 = 0;
              c12 = 3;
              obj25 = { value: null, done: true };
              obj25[0] = originalMd5;
              return obj25;
            } else {
              obj23.originalMd5 = originalMd5;
              c9 = 0;
              c12 = 3;
              const obj26 = { value: null, done: true };
              obj26[0] = obj23;
              return obj26;
            }
          } else if (arg0 === 1) {
            c12 = 3;
            throw originalMd5;
          } else if (arg0 === 2) {
            c12 = 3;
            const obj27 = { value: null, done: true };
            obj27[0] = originalMd5;
            return obj27;
          } else {
            obj20.originalMd5 = originalMd5;
            c12 = 3;
            obj = { value: null, done: true };
            obj[0] = obj20;
            return obj;
          }
        } catch (tmp75) {
          closure_10 = tmp75;
          if (tmp3 === c9) {
            c12 = tmp;
            throw tmp75;
          } else {
            c11 = tmp4;
          }
        }
      }
    })();
  });
  const _openImagePickerUnhandled = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function openImagePicker(outer1_8) {
  const self = this;
  const apply = _openImagePicker.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _openImagePicker() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    return (function*(arg0) {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let closure_2 = tmp3;
              let closure_1 = tmp7;
              closure_1 = undefined;
              c5 = 1;
              c6 = 1;
              const obj1 = { value: null, done: false };
              obj1[0] = outer1_1(outer1_2[9]).requestPermission(outer1_19.PHOTOS);
              return obj1;
            }
          } else if (1 === tmp7) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              let obj2 = { value: null, done: true };
              obj2[0] = arg1;
              return obj2;
            } else if (arg1) {
              let c4 = 1;
              c5 = 3;
              c6 = 1;
              let obj3 = { value: null, done: false };
              obj3[0] = callback2(callback);
              return obj3;
            } else {
              c6 = 3;
              const obj4 = { value: null, done: true };
              obj4[0] = { errorStr: "Missing permission" };
              return obj4;
            }
          } else if (2 === tmp7) {
            c4 = 0;
            closure_2 = closure_3;
            if ("E_PICKER_CANCELLED" !== closure_2.code) {
              if (closure_2.message !== closure_23) {
                if ("E_CROPPER_IMAGE_NOT_FOUND" === closure_2.code) {
                  obj3 = callback(closure_2[14]);
                  const intl = callback(closure_2[15]).intl;
                  obj3.presentFailedToast(intl.string(callback(closure_2[15]).t.TTzyzW));
                } else {
                  obj2 = callback(closure_2[14]);
                  obj2.presentFailedToast(closure_2.message);
                  { errorStr: null }[0] = closure_2.message;
                }
              }
              c6 = 3;
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            const obj7 = { value: null, done: true };
            obj7[0] = arg1;
            return obj7;
          } else {
            closure_1 = arg1;
            if (null != closure_1.errorStr) {
              const intl2 = callback(closure_2[15]).intl;
              const obj8 = { reason: null };
              obj8[0] = closure_1.errorStr;
              callback(closure_2[14]).presentFailedToast(intl2.formatToPlainString(callback(closure_2[15]).t.Ex162J, obj8));
              const obj14 = callback(closure_2[14]);
            }
            c4 = 0;
            c6 = 3;
            obj = { value: null, done: true };
            obj[0] = closure_1;
            return obj;
          }
        } catch (tmp36) {
          closure_3 = tmp36;
          if (tmp4 === c4) {
            c6 = tmp2;
            throw tmp36;
          } else {
            c5 = tmp;
          }
        }
      }
    })();
  });
  const _openImagePicker = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function mediaManager() {
  const self = this;
  const apply = _mediaManager.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _mediaManager() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let c7 = 0;
    let c8 = 0;
    let c6 = 0;
    const iter = (function*(arg0, arg1) {
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
          return { value: "HermesInternal", done: "HermesInternal" };
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
              let _objectWithoutProperties = tmp3;
              let closure_3 = tmp5;
              let c2;
              let tmp24 = c2;
              if (c2 === undefined) {
                tmp24 = null;
              }
              c2 = tmp24;
              c7 = 1;
              c8 = 1;
              return { value: "ct", done: true };
            }
          } else if (1 === tmp8) {
            if (arg0 === 1) {
              c8 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c8 = 3;
              const obj1 = { value: null, done: true };
              obj1[0] = arg1;
              return obj1;
            } else {
              let MediaManager = 1;
              MediaManager = MediaManager.MediaManager;
              c7 = 3;
              c8 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = MediaManager[closure_0](closure_1, c2);
              return obj2;
            }
          } else if (2 === tmp8) {
            MediaManager = 0;
            closure_3 = mergeGuildAvatar;
            logger.warn(closure_3);
            c8 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          } else if (arg0 === 1) {
            c8 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            MediaManager = 0;
            c8 = 3;
            const obj3 = { value: null, done: true };
            obj3[0] = arg1;
            return obj3;
          } else {
            MediaManager = 0;
            c8 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
        } catch (tmp25) {
          mergeGuildAvatar = tmp25;
          if (tmp4 === MediaManager) {
            c8 = tmp2;
            throw tmp25;
          } else {
            c7 = tmp;
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  const _mediaManager = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function getVideoQuality() {
  if (closure_10.dataSavingMode) {
    if (store.getType() === constants3.CELLULAR) {
      return constants.LOW;
    }
  }
  const videoUploadQuality = closure_10.videoUploadQuality;
  currentUser = currentUser.getCurrentUser();
  const DATA_SAVER = constants2.DATA_SAVER;
  if (obj.canUseHighVideoUploadQuality(currentUser)) {
    if (DATA_SAVER === videoUploadQuality) {
      let VERY_HIGH = constants.LOW;
    } else {
      if (tmp5.STANDARD === videoUploadQuality) {
        VERY_HIGH = constants.HIGH;
      } else if (tmp5.BEST !== videoUploadQuality) {
        VERY_HIGH = constants.MEDIUM;
      }
      VERY_HIGH = constants.VERY_HIGH;
    }
  } else {
    if (DATA_SAVER === videoUploadQuality) {
      let LOW = constants.LOW;
    } else if (tmp5.STANDARD === videoUploadQuality) {
      LOW = constants.MEDIUM;
    } else if (tmp5.BEST === videoUploadQuality) {
      LOW = constants.HIGH;
    } else {
      LOW = constants.LOW;
    }
    return LOW;
  }
}
function getAppDir() {
  if (obj.isAndroid()) {
    if (null == enforcing) {
      const _Error = Error;
      const error = new Error("RTNFileManager doesn't exist?");
      throw error;
    } else {
      const tmp3Result = tmp3(1271);
      return tmp3(1271).getConstants().CacheDirPath.replace(/cache$/, "");
    }
    tmp3 = importDefault;
  } else {
    return "/private" + closure_6.DCDFileManager.DocumentsDirPath.replace(/Documents$/, "");
  }
  obj = set;
}
function getFileInfo(closure_0, closure_1) {
  let allowOptimization;
  let description;
  let filename;
  let item;
  let mimeType;
  let mimeType2;
  let originalUri;
  let spoiler;
  ({ item, spoiler, description } = closure_0);
  let str = closure_1;
  ({ mimeType, allowOptimization } = closure_0);
  if (closure_1 === undefined) {
    str = "";
  }
  if (item.platform !== cancel.UploadPlatform.REACT_NATIVE) {
    const _Error = Error;
    const error = new Error("Try to get file info for unsupported upload item");
    throw error;
  } else {
    ({ originalUri, filename, mimeType: mimeType2 } = item);
    if (mimeType2 == null) {
      mimeType2 = mimeType;
    }
    let obj = { uri: null, overrideType: null };
    obj[0] = originalUri;
    obj[1] = mimeType2;
    if (tmpResult.getFile(obj).isVideo) {
      obj = { originalUri: null, filename: null, mimeType: null, fileSize: null, spoiler: null, description: null, i: null };
      obj[0] = originalUri;
      obj[1] = filename;
      obj[2] = mimeType2;
      obj[3] = item.size;
      obj[4] = spoiler;
      obj[5] = description;
      obj[6] = str;
      let tmp3 = (function processVideoUpload(arg0) {
        const self = this;
        const apply = closure_37.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      })(obj);
    } else {
      const obj1 = { originalUri: null, filename: null, mimeType: null, spoiler: null, description: null, i: null, width: null, height: null, allowOptimization: null };
      obj1[0] = originalUri;
      obj1[1] = filename;
      obj1[2] = mimeType2;
      obj1[3] = spoiler;
      obj1[4] = description;
      obj1[5] = str;
      ({ width: obj3[6], height: obj3[7] } = item);
      obj1[8] = allowOptimization;
      tmp3 = (function processImageOrFileUpload(arg0) {
        const self = this;
        const apply = closure_38.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      })(obj1);
    }
    return tmp3;
  }
  const tmp = require;
}
function _getPhotoKitDataUTI() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    return (function*(arg0) {
      if (c7 === 2) {
        c7 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c7 = 2;
          if (0 === MediaManager) {
            if (arg0 === 1) {
              c7 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c7 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let closure_3 = tmp3;
              let closure_2 = tmp7;
              if (obj8.isIOS()) {
                if (obj7.startsWith("ph://")) {
                  let c5 = 1;
                  MediaManager = MediaManager.MediaManager;
                  MediaManager = 2;
                  c7 = 1;
                  const obj1 = { value: null, done: false };
                  obj1[0] = MediaManager.getImageContentType(obj7);
                  return obj1;
                }
              }
              c7 = 3;
              return { value: "HermesInternal", done: "HermesInternal" };
            }
          } else if (1 === tmp7) {
            c5 = 0;
            const callback = _objectWithoutProperties;
            const _HermesInternal = HermesInternal;
            logger.warn("getImageContentType failed: " + callback);
            c7 = 3;
            const obj2 = { value: null, done: true };
            obj2[0] = undefined;
            return obj2;
          } else if (arg0 === 1) {
            c7 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 0;
            c7 = 3;
            const obj3 = { value: null, done: true };
            obj3[0] = arg1;
            return obj3;
          } else {
            let c1 = arg1;
            if (arg1 == null) {
              c1 = undefined;
            }
            c5 = 0;
            c7 = 3;
            obj = { value: null, done: true };
            obj[0] = c1;
            return obj;
          }
        } catch (tmp16) {
          _objectWithoutProperties = tmp16;
          if (tmp4 === c5) {
            c7 = tmp2;
            throw tmp16;
          } else {
            MediaManager = tmp;
          }
        }
      }
    })();
  });
  const _getPhotoKitDataUTI = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _shouldConvertToPNG() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    return (function*(arg0, arg1) {
      if (c7 === 2) {
        c7 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c7 = 2;
          if (0 === MediaManager) {
            if (arg0 === 1) {
              c7 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c7 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let closure_3 = tmp3;
              let closure_2 = tmp7;
              if (obj7.isIOS()) {
                if (tmp27Result.isPhotoKitAsset(str3, str4)) {
                  let match;
                  if (str4 != null) {
                    match = str4.match(/\.png$/i);
                  }
                  if (null == match) {
                    c7 = 3;
                    return { value: false, done: true };
                  }
                } else if (null == str3.match(/^(assets-library|file):\/\/.+(&ext=|\.)png$/i)) {
                  c7 = 3;
                  return { value: false, done: true };
                }
                let c5 = 1;
                MediaManager = MediaManager.MediaManager;
                MediaManager = 2;
                c7 = 1;
                const obj1 = { value: null, done: false };
                obj1[0] = MediaManager.imageHasTransparency(str3);
                return obj1;
              } else {
                c7 = 3;
                return { value: false, done: true };
              }
              obj7 = callback(outer1_2[13]);
              const tmp27 = callback;
              const tmp28 = outer1_2;
            }
          } else if (1 === tmp7) {
            c5 = 0;
            callback = _objectWithoutProperties;
            const _HermesInternal = HermesInternal;
            logger.error("shouldConvertToPNG: imageHasTransparency failed: " + callback);
            c7 = 3;
            return { value: false, done: true };
          } else if (arg0 === 1) {
            c7 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 0;
            c7 = 3;
            const obj2 = { value: null, done: true };
            obj2[0] = arg1;
            return obj2;
          } else {
            c5 = 0;
            c7 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
        } catch (tmp17) {
          _objectWithoutProperties = tmp17;
          if (tmp4 === c5) {
            c7 = tmp2;
            throw tmp17;
          } else {
            MediaManager = tmp;
          }
        }
      }
    })();
  });
  const _shouldConvertToPNG = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function isVideo(uri, overrideType) {
  let obj = items;
  obj = { uri, overrideType };
  return obj.getFile(obj).isVideo;
}
function isImage(uri, overrideType) {
  let obj = items;
  obj = { uri, overrideType };
  return obj.getFile(obj).isImage;
}
function getType(uri) {
  let obj = items;
  obj = { uri };
  return obj.getFile(obj).type;
}
function convertVideo(videoMetadata) {
  let closure_3;
  let dependencyMap;
  let importDefault;
  let require;
  let videoQualitySetting;
  ({ uri: require, filename: importDefault, isLowQuality: dependencyMap, compressionQuality: closure_3, videoQualitySetting } = videoMetadata);
  videoMetadata = videoMetadata.videoMetadata;
  let result1;
  let obj;
  let c7;
  const VideoQualityTarget = toString.VideoQualityTarget;
  const result = VideoQualityTarget.fromCompressionQuality(videoQualitySetting);
  obj = toString;
  result1 = obj.canSkipVideoTranscode(result, videoMetadata, videoMetadata.fileSize, getUploadFileSizeSum.maxFileSize());
  let obj2 = getUploadFileSizeSum;
  const result2 = toString.calculateTargetDimensions(videoMetadata, result.targetResolution);
  let obj3 = toString;
  obj = {};
  const result3 = toString.calculateOptimalBitrate(videoMetadata, result, toString.DEFAULT_VIDEO_ENCODING_CONFIG.bitrateFloor);
  const merged = Object.assign(toString.DEFAULT_VIDEO_ENCODING_CONFIG);
  obj.videoQuality = result;
  ({ width: obj5.targetWidth, height: obj5.targetHeight } = result2);
  obj.targetBitrate = result3;
  let obj4 = toString;
  if (obj6.isAndroid()) {
    if (tmpResult.getSystemVersionMajor() > 34) {
      let _Math = Math;
      let frameRate = Math.min(videoMetadata.frameRate, tmp(4862).DEFAULT_VIDEO_ENCODING_CONFIG.frameRate);
    }
    obj.frameRate = frameRate;
    obj.skipVideoTranscode = result1;
    ({ isHDRContent: obj5.createHDR, rotationDegrees: obj5.rotationDegrees } = videoMetadata);
    c7 = 0;
    let promise = new Promise((arg0, arg1) => {
      let closure_0 = arg0;
      let closure_1 = arg1;
      function _findCompatibleConfig() {
        const self = this;
        let tmp = result1(function*() {
          if (c13 === 2) {
            c13 = 3;
            HermesBuiltin.throwTypeError();
          } else {
            const tmp75 = /* builtin0  */;
            if (tmp9 === 3) {
              if (arg0 === 1) {
                throw arg1;
              } else if (arg0 === 2) {
                let obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                return { value: "HermesInternal", done: "HermesInternal" };
              }
            } else {
              try {
                c13 = 2;
                if (0 === c12) {
                  if (arg0 === 1) {
                    c13 = 3;
                    throw arg1;
                  } else if (arg0 === 2) {
                    c13 = 3;
                    obj = { value: null, done: true };
                    obj[0] = arg1;
                    return obj;
                  } else {
                    let closure_8 = tmp4;
                    let closure_9 = tmp7;
                    let v;
                    function* _loop() {
                      let maxWidth = tmp2;
                      let c1 = tmp3;
                      let throwTypeErrorResult = outer3_43;
                      throwTypeErrorResult = next;
                      yield outer3_43(next);
                      throwTypeErrorResult = c1;
                      let min = arg1;
                      throwTypeErrorResult = min;
                      if (min.isSupported) {
                        return { v: true };
                      }
                      if (null != min) {
                        throwTypeErrorResult = c1;
                        throwTypeErrorResult = min;
                        if (null != min.capabilities) {
                          throwTypeErrorResult = c1;
                          throwTypeErrorResult = min;
                          if (null != min.failures) {
                            throwTypeErrorResult = c1;
                            throwTypeErrorResult = min;
                            if (0 !== min.failures.length) {
                              throwTypeErrorResult = c1;
                              c1 = false;
                              throwTypeErrorResult = min;
                              const failures = min.failures;
                              if (null != failures.find(() => { ... })) {
                                if (next.useHEVC) {
                                  throwTypeErrorResult = c1;
                                  throwTypeErrorResult = maxWidth;
                                  throwTypeErrorResult = next;
                                  next.useHEVC = false;
                                  c1 = true;
                                } else {
                                  outer3_20.error("No supported video encoder found");
                                  const _Error3 = Error;
                                  throwTypeErrorResult = new.target;
                                  throwTypeErrorResult = new Error("No supported video encoder found");
                                  throwTypeErrorResult = outer1_1(throwTypeErrorResult);
                                }
                                let c4 = 3;
                              } else {
                                throwTypeErrorResult = c1;
                                throwTypeErrorResult = min;
                                const failures1 = min.failures;
                                if (null != failures1.find(() => { ... })) {
                                  throwTypeErrorResult = c1;
                                  throwTypeErrorResult = min;
                                  if (null != min.capabilities.resolution) {
                                    throwTypeErrorResult = maxWidth;
                                    throwTypeErrorResult = next;
                                    if (0 !== next.targetHeight) {
                                      throwTypeErrorResult = maxWidth;
                                      throwTypeErrorResult = next;
                                      if (0 !== next.targetWidth) {
                                        throwTypeErrorResult = c1;
                                        throwTypeErrorResult = maxWidth;
                                        throwTypeErrorResult = min;
                                        maxWidth = min.capabilities.resolution.maxWidth;
                                        throwTypeErrorResult = min;
                                        const maxHeight = min.capabilities.resolution.maxHeight;
                                        throwTypeErrorResult = next;
                                        throwTypeErrorResult = next;
                                        c4 = next.targetWidth / next.targetHeight;
                                        throwTypeErrorResult = globalThis;
                                        const _Math6 = Math;
                                        throwTypeErrorResult = next;
                                        throwTypeErrorResult = maxWidth;
                                        let mergeGuildAvatar = Math.min(next.targetWidth, maxWidth);
                                        const _Math7 = Math;
                                        throwTypeErrorResult = next;
                                        throwTypeErrorResult = maxHeight;
                                        let closure_6 = Math.min(next.targetHeight, maxHeight);
                                        throwTypeErrorResult = mergeGuildAvatar;
                                        throwTypeErrorResult = next;
                                        if (mergeGuildAvatar !== next.targetWidth) {
                                          const _Math = Math;
                                          closure_6 = Math.round(mergeGuildAvatar / c4);
                                        }
                                        if (closure_6 !== next.targetHeight) {
                                          const _Math2 = Math;
                                          mergeGuildAvatar = Math.round(closure_6 * c4);
                                        }
                                        const blockSize = min.capabilities.blockSize;
                                        const widthAlignment = blockSize.widthAlignment;
                                        const heightAlignment = blockSize.heightAlignment;
                                        const _Math3 = Math;
                                        mergeGuildAvatar = Math.floor(mergeGuildAvatar / widthAlignment) * widthAlignment;
                                        const _Math4 = Math;
                                        closure_6 = Math.floor(closure_6 / heightAlignment) * heightAlignment;
                                        let tmp33 = mergeGuildAvatar === next.targetWidth;
                                        if (tmp33) {
                                          tmp33 = closure_6 === next.targetHeight;
                                        }
                                        if (!tmp33) {
                                          next.targetWidth = iter8;
                                          next.targetHeight = next;
                                        }
                                      }
                                    }
                                    const _Error2 = Error;
                                    const error = new Error("Invalid video dimensions: width or height is 0");
                                    outer1_1(error);
                                    c4 = 3;
                                    const obj5 = { value: null, done: true };
                                    obj5[0] = { v: false };
                                    return obj5;
                                  }
                                }
                                const failures2 = closure_0.failures;
                                let message = failures2.find(() => { ... });
                                const capabilities = closure_0.capabilities;
                                if (null != message) {
                                  throwTypeErrorResult = c1;
                                  min = undefined;
                                  if (capabilities != null) {
                                    const frameRate = capabilities.frameRate;
                                    if (frameRate != null) {
                                      min = frameRate.min;
                                    }
                                  }
                                  if (null != min) {
                                    throwTypeErrorResult = c1;
                                    let max;
                                    if (capabilities != null) {
                                      const frameRate2 = capabilities.frameRate;
                                      if (frameRate2 != null) {
                                        max = frameRate2.max;
                                      }
                                    }
                                    if (null != max) {
                                      throwTypeErrorResult = c1;
                                      throwTypeErrorResult = maxWidth;
                                      throwTypeErrorResult = next;
                                      let frameRate3 = next.frameRate;
                                      throwTypeErrorResult = message;
                                      message = message.message;
                                      throwTypeErrorResult = c1;
                                      if (message.includes("not supported at resolution")) {
                                        const items = [60, 30, 29.97, 24, 15];
                                        const sorted = items.sort(() => { ... });
                                        const found = sorted.find(() => { ... });
                                        min = found;
                                        if (found == null) {
                                          min = capabilities.frameRate.min;
                                        }
                                        let closure_12 = min;
                                      } else {
                                        const _Math5 = Math;
                                        frameRate3 = Math.min(next.frameRate, capabilities.frameRate.max);
                                      }
                                      if (closure_12 !== next.frameRate) {
                                        next.frameRate = closure_12;
                                        c1 = true;
                                      }
                                    }
                                  }
                                }
                                if (c1) {
                                  c4 = 3;
                                  return { value: "HermesInternal", done: "HermesInternal" };
                                } else {
                                  const obj = { currentFailures: null, config: null, capabilities: null, attempt: null };
                                  obj[0] = min.failures;
                                  obj[1] = next;
                                  obj[2] = min.capabilities;
                                  obj[3] = iter7 + 1;
                                  outer3_20.error("No adjustments possible for current failures", obj);
                                  const _Error = Error;
                                  const error1 = new Error("No adjustments possible for current failures");
                                  outer1_1(error1);
                                  c4 = 3;
                                  const obj6 = { value: null, done: true };
                                  obj6[0] = { v: false };
                                  return obj6;
                                }
                              }
                            }
                          }
                        }
                      }
                      throwTypeErrorResult = maxWidth;
                      throwTypeErrorResult = outer3_20;
                      const obj7 = { config: null, attempt: null };
                      throwTypeErrorResult = next;
                      obj7[0] = next;
                      throwTypeErrorResult = iter7;
                      obj7[1] = iter7 + 1;
                      throwTypeErrorResult = outer3_20.warn("Unable to determine device capabilities or adjust parameters", obj7);
                      return 0;
                    }
                    let iter5 = _loop;
                    if (outer1_7 < 4) {
                      const iter7 = _loop()[tmp75.iterator]();
                      HermesBuiltin.ensureObject("iterator is not an object");
                      let next = iter7.next;
                      v = undefined;
                      const _loopResult = _loop();
                    }
                    c13 = 3;
                    return { value: false, done: true };
                  }
                } else {
                  if (1 !== tmp10) {
                    if (2 === tmp10) {
                      let c10 = 0;
                      const method = HermesBuiltin.getMethod("throw");
                      if (method === undefined) {
                        const method1 = HermesBuiltin.getMethod("return");
                        if (method1 !== undefined) {
                          HermesBuiltin.ensureObject("iterator.return() did not return an object");
                        }
                        HermesBuiltin.throwTypeError();
                      } else {
                        const iter3 = method(tmp31);
                        HermesBuiltin.ensureObject("iterator.throw() did not return an object");
                        if (iter3.done) {
                          iter5 = iter3;
                        } else {
                          c12 = 1;
                          c13 = 1;
                          return iter3;
                        }
                      }
                      let value = iter5.value;
                      v = value;
                      if (0 !== value) {
                        if (1 !== v) {
                          if (v) {
                            c13 = 3;
                            const obj1 = { value: null, done: true };
                            obj1[0] = v.v;
                            return obj1;
                          }
                        }
                        if (outer1_7 < 4) {
                          const iter8 = iter5()[tmp75.iterator]();
                          HermesBuiltin.ensureObject("iterator is not an object");
                          next = iter8.next;
                          let closure_2;
                          const tmp81 = iter5();
                        }
                      }
                      tmp31 = handleConnectionInfoChange;
                    } else {
                      if (3 !== tmp10) {
                        c10 = 0;
                        const method2 = HermesBuiltin.getMethod("throw");
                        if (method2 === undefined) {
                          const method3 = HermesBuiltin.getMethod("return");
                          if (method3 !== undefined) {
                            HermesBuiltin.ensureObject("iterator.return() did not return an object");
                          }
                          HermesBuiltin.throwTypeError();
                        } else {
                          const iter = method2(tmp12);
                          HermesBuiltin.ensureObject("iterator.throw() did not return an object");
                          if (iter.done) {
                            let iter6 = iter;
                          } else {
                            c12 = 3;
                            c13 = 1;
                            return iter;
                          }
                        }
                        value = iter6.value;
                        v = value;
                        tmp12 = handleConnectionInfoChange;
                      }
                      c10 = 2;
                      if (arg0 === 1) {
                        c13 = 3;
                        throw arg1;
                      } else {
                        closure_2 = arg1;
                        if (arg0 === 2) {
                          closure_2 = arg1;
                          c10 = 0;
                          const method4 = HermesBuiltin.getMethod("return");
                          if (method4 === undefined) {
                            c13 = 3;
                            const obj2 = { value: null, done: true };
                            obj2[0] = arg1;
                            return obj2;
                          } else {
                            const iter2 = method4(closure_2);
                            HermesBuiltin.ensureObject("iterator.return() did not return an object");
                            if (iter2.done) {
                              c13 = 3;
                              obj = { value: null, done: true };
                              obj[0] = iter2.value;
                              return obj;
                            } else {
                              c12 = 3;
                              c13 = 1;
                              return iter2;
                            }
                          }
                        } else {
                          c10 = 0;
                          const tmp23 = arg1;
                        }
                      }
                    }
                    iter6 = next(tmp23);
                    HermesBuiltin.ensureObject("iterator.next() did not return an object");
                    if (!iter6.done) {
                      c12 = 3;
                      c13 = 1;
                      return iter6;
                    }
                  }
                  c10 = 1;
                  if (arg0 === 1) {
                    c13 = 3;
                    throw arg1;
                  } else {
                    v = arg1;
                    if (arg0 === 2) {
                      v = arg1;
                      c10 = 0;
                      const method5 = HermesBuiltin.getMethod("return");
                      if (method5 === undefined) {
                        c13 = 3;
                        const obj3 = { value: null, done: true };
                        obj3[0] = arg1;
                        return obj3;
                      } else {
                        const iter4 = method5(v);
                        HermesBuiltin.ensureObject("iterator.return() did not return an object");
                        if (iter4.done) {
                          c13 = 3;
                          const obj4 = { value: null, done: true };
                          obj4[0] = iter4.value;
                          return obj4;
                        } else {
                          c12 = 1;
                          c13 = 1;
                          return iter4;
                        }
                      }
                    } else {
                      c10 = 0;
                      const tmp42 = arg1;
                    }
                  }
                }
                iter5 = next(tmp42);
                HermesBuiltin.ensureObject("iterator.next() did not return an object");
                if (!iter5.done) {
                  c12 = 1;
                  c13 = 1;
                  return iter5;
                }
              } catch (tmp67) {
                handleConnectionInfoChange = tmp67;
                if (tmp5 === c10) {
                  c13 = tmp3;
                  throw tmp67;
                } else if (tmp2 === tmp69) {
                  c12 = tmp;
                } else {
                  c12 = tmp6;
                }
              }
            }
          }
        });
        const _findCompatibleConfig = tmp;
        const apply = tmp.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      }
      function resolveWithConfig(path) {
        return callback({ path, encodingConfig: outer1_6 });
      }
      const promise = (function findCompatibleConfig() {
        const self = this;
        const apply = _findCompatibleConfig.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      })();
      (function findCompatibleConfig() {
        const self = this;
        const apply = _findCompatibleConfig.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      })().then((arg0) => {
        if (arg0) {
          let obj1 = outer2_0(outer2_2[13]);
          let isAndroidResult = obj1.isAndroid();
          if (isAndroidResult) {
            isAndroidResult = null != str3.match(/^content:\/\/.+$/i);
          }
          if (isAndroidResult) {
            let obj = { encodingConfig: null, compressionQuality: null, isLowQuality: null, videoQuality: null, skipVideoTranscode: null };
            obj[0] = outer1_6;
            obj[1] = resolveWithConfig;
            obj[2] = _findCompatibleConfig;
            obj[3] = outer1_4;
            obj[4] = outer1_5;
            let nextPromise = outer2_27("resolveToMediaFilePath", str3, obj).then(resolveWithConfig, callback2);
            const promise4 = outer2_27("resolveToMediaFilePath", str3, obj);
          } else {
            let tmp12Result = tmp12(tmp13[13]);
            let isIOSResult = tmp12Result.isIOS();
            if (!isIOSResult) {
              if (isIOSResult) {
                obj = { encodingConfig: null, videoQuality: null, isMov: true, skipVideoTranscode: null };
                obj[0] = outer1_6;
                obj[1] = outer1_4;
                obj[3] = outer1_5;
                nextPromise = outer2_27("compressVideo", str3, obj).then(resolveWithConfig, callback2);
                const promise3 = outer2_27("compressVideo", str3, obj);
              } else {
                tmp12Result = tmp12(tmp13[13]);
                const isIOSResult1 = tmp12Result.isIOS();
                if (!isIOSResult1) {
                  if (isIOSResult1) {
                    obj1 = { encodingConfig: null, videoQuality: null, skipVideoTranscode: null };
                    obj1[0] = outer1_6;
                    obj1[1] = outer1_4;
                    obj1[2] = outer1_5;
                    nextPromise = outer2_27("compressVideo", str3, obj1).then(resolveWithConfig, callback2);
                    const promise2 = outer2_27("compressVideo", str3, obj1);
                  } else {
                    const formatted = str3.toLowerCase();
                    isIOSResult = tmp12(tmp13[13]).isIOS();
                    if (isIOSResult) {
                      isIOSResult = str3.startsWith("file");
                    }
                    if (isIOSResult) {
                      let endsWithResult = formatted.endsWith("mov");
                      if (!endsWithResult) {
                        endsWithResult = formatted.endsWith("mp4");
                      }
                      if (!endsWithResult) {
                        endsWithResult = formatted.endsWith("qt");
                      }
                      isIOSResult = endsWithResult;
                    }
                    if (isIOSResult) {
                      const obj2 = { encodingConfig: null, videoQuality: null, isMov: null, skipVideoTranscode: null };
                      obj2[0] = outer1_6;
                      obj2[1] = outer1_4;
                      const formatted1 = str3.toLowerCase();
                      let endsWithResult1 = formatted1.endsWith("mov");
                      if (!endsWithResult1) {
                        const formatted2 = str3.toLowerCase();
                        endsWithResult1 = formatted2.endsWith("qt");
                      }
                      obj2[2] = endsWithResult1;
                      obj2[3] = outer1_5;
                      nextPromise = outer2_27("compressVideo", str3, obj2).then(resolveWithConfig, callback2);
                      const tmp36 = outer2_27;
                      const tmp36Result = outer2_27("compressVideo", str3, obj2);
                    } else {
                      const obj3 = { uri: null, filename: null };
                      obj3[0] = str3;
                      obj3[1] = str4;
                      outer2_20.error("Unsupported video URI format", obj3);
                      const _Error2 = Error;
                      const _HermesInternal = HermesInternal;
                      const error = new Error("Unsupported video URI format: " + str3);
                      callback2(error);
                    }
                    const tmp12Result1 = tmp12(tmp13[13]);
                  }
                } else {
                  if (tmp12Result2.isPhotoKitAsset(str3, str4)) {
                    let match;
                    if (str4 != null) {
                      match = str4.match(/\.mp4$/i);
                    }
                    let isVideo2 = null != match;
                  } else {
                    isVideo2 = null != str3.match(/^assets-library:\/\/.+&ext=mp4$/i);
                    if (isVideo2) {
                      const obj4 = { uri: null, overrideType: "a" };
                      obj4[0] = str3;
                      isVideo2 = tmp12(tmp13[11]).getFile(obj4).isVideo;
                      const tmp12Result3 = tmp12(tmp13[11]);
                    }
                  }
                  tmp12Result2 = tmp12(tmp13[19]);
                }
              }
            } else {
              if (tmp12Result4.isPhotoKitAsset(str3, str4)) {
                let match1;
                if (str4 != null) {
                  match1 = str4.match(/\.(mov|qt)$/i);
                }
                let isVideo = null != match1;
              } else {
                isVideo = null != str3.match(/^assets-library:\/\/.+&ext=(mov|qt)$/i);
                if (isVideo) {
                  const obj5 = { uri: null, overrideType: "a" };
                  obj5[0] = str3;
                  isVideo = tmp12(tmp13[11]).getFile(obj5).isVideo;
                  const tmp12Result5 = tmp12(tmp13[11]);
                }
              }
              tmp12Result4 = tmp12(tmp13[19]);
            }
          }
        } else {
          obj = { finalConfig: null, attempts: null };
          obj[0] = outer1_6;
          obj[1] = outer1_7;
          outer2_20.error("Could not find compatible encoding configuration after multiple attempts", obj);
          const _Error = Error;
          const error1 = new Error("Could not find compatible encoding configuration after multiple attempts");
          callback2(error1);
        }
      }).catch(arg1);
    });
    return promise;
  }
  frameRate = videoMetadata.frameRate;
}
function buildResolvedUpload(arg0) {
  const self = this;
  const apply = _buildResolvedUpload.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _buildResolvedUpload() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c2 = 0;
    let c3 = 0;
    return (function*(arg0) {
      if (c3 === 2) {
        c3 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c3 = 2;
          if (0 === table) {
            if (arg0 === 1) {
              c3 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let filename = tmp2;
              filename = undefined;
              table = undefined;
              c3 = undefined;
              ({ path: obj7[0], i: obj7[1], mimeType: obj7[2], filename: obj7[3] } = lib);
              const file = lib(table[11]).getFile({ uri: null, i: null, overrideType: null, overrideFilename: null });
              filename = file.filename;
              table = outer1_4(file, c3);
              c3 = {};
              let isImage = lib.isImage;
              if (isImage) {
                isImage = tmp35.path !== tmp35.originalUri;
              }
              if (isImage) {
                table = 1;
                c3 = 1;
                const obj2 = { value: null, done: false };
                obj2[0] = outer1_45(tmp35.originalUri, tmp35.path, tmp35.filename, tmp35.attachmentQualityMetricsEnabled, tmp35.attachmentOriginDetectionEnabled);
                return obj2;
              } else {
                const obj3 = {};
                const merged = Object.assign(table);
                obj3.name = filename;
                obj3.spoiler = lib.spoiler;
                obj3.description = lib.description;
                obj3.imageCompressionQuality = lib.compressionQuality;
                obj3.imageEncoderType = lib.imageEncoderType;
                obj3.videoCompressionQuality = lib.videoQualitySetting;
                obj3.videoMetadata = lib.videoMetadata;
                obj3.encodingConfig = lib.encodingConfig;
                obj3.sourceWidth = lib.sourceImageDimensions.width;
                obj3.sourceHeight = lib.sourceImageDimensions.height;
                obj3.uploadedImageWidth = lib.uploadedImageWidth;
                obj3.uploadedImageHeight = lib.uploadedImageHeight;
                obj3.psnr = c3.psnr;
                obj3.ssim = c3.ssim;
                obj3.origin = c3.origin;
                obj3.psnrMeasurementLatencyMs = c3.psnrMeasurementLatencyMs;
                obj3.ssimMeasurementLatencyMs = c3.ssimMeasurementLatencyMs;
                c3 = 3;
              }
              const obj1 = { uri: null, i: null, overrideType: null, overrideFilename: null };
              const obj6 = lib(table[11]);
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 !== 2) {
            c3 = arg1;
          }
          c3 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } catch (tmp29) {
          c3 = tmp;
          throw tmp29;
        }
      }
    })();
  });
  const _buildResolvedUpload = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _processVideoUpload() {
  let self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c3 = 0;
    let c4 = 0;
    const iter = (function*(arg0) {
      let c0;
      let c1;
      let c2;
      let c3;
      let c4;
      let c5;
      let c6;
      if (c4 === 2) {
        c4 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let table = tmp5;
              c1 = tmp2;
              let callback;
              c1 = undefined;
              table = undefined;
              c3 = undefined;
              c4 = undefined;
              c5 = undefined;
              c6 = undefined;
              ({ originalUri: c0, filename: c1, mimeType: c2, fileSize: c3, spoiler: c4, description: c5, i: c6 } = callback);
              let closure_7;
              let dataSavingMode;
              let closure_9;
              let closure_10;
              let path;
              let encodingConfig;
              c3 = 1;
              c4 = 1;
              return { value: "ct", done: true };
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj1 = { value: null, done: true };
              obj1[0] = arg1;
              return obj1;
            } else {
              closure_7 = callback2();
              dataSavingMode = closure_10.dataSavingMode;
              if (dataSavingMode) {
                dataSavingMode = path.getType() === constants.CELLULAR;
              }
              c3 = 2;
              c4 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = (function fetchVideoMetadata(c0, c2) {
                const self = this;
                const apply = closure_40.apply;
                if (typeof apply === "unknown") {
                  let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                } else {
                  applyArgumentsResult = apply(self, arguments);
                }
                return applyArgumentsResult;
              })(callback, table);
              return obj2;
            }
          } else if (2 === tmp5) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj3 = { value: null, done: true };
              obj3[0] = arg1;
              return obj3;
            } else {
              closure_9 = arg1;
              if (null == closure_9) {
                const _Error3 = Error;
                const error = new Error("Video metadata is required for video conversion");
                throw error;
              } else {
                if (obj11.getVideoFrameRateValidationExperimentConfig({ location: "upload_utils.process_video_upload" }).enableFrameRateValidation) {
                  if (null != closure_9.frameRate) {
                    const _Number = Number;
                  }
                  const _Error2 = Error;
                  const _HermesInternal = HermesInternal;
                  const error1 = new Error("Invalid video frame rate: " + closure_9.frameRate);
                  throw error1;
                }
                const obj4 = { uri: null, filename: null, isLowQuality: null, compressionQuality: null, videoQualitySetting: null, videoMetadata: null, fileSize: null };
                obj4[0] = callback;
                obj4[1] = c1;
                obj4[2] = dataSavingMode;
                obj4[3] = constants2.LOW;
                obj4[4] = closure_7;
                obj4[5] = closure_9;
                obj4[6] = c3;
                c3 = 3;
                c4 = 1;
                const obj5 = { value: null, done: false };
                obj5[0] = callback3(obj4);
                return obj5;
              }
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj6 = { value: null, done: true };
            obj6[0] = arg1;
            return obj6;
          } else {
            closure_10 = arg1;
            path = closure_10.path;
            encodingConfig = closure_10.encodingConfig;
            if (null == path) {
              const _Error = Error;
              const error2 = new Error("Failed to get video file path");
              throw error2;
            } else {
              const obj7 = { path: null, i: null, mimeType: null, filename: null, originalUri: null, spoiler: null, description: null, compressionQuality: null, videoQualitySetting: null, videoMetadata: null, encodingConfig: null, sourceImageDimensions: null, isImage: false };
              obj7[0] = path;
              obj7[1] = c6;
              obj7[2] = table;
              obj7[3] = c1;
              obj7[4] = callback;
              obj7[5] = c4;
              obj7[6] = c5;
              obj7[7] = constants2.LOW;
              obj7[8] = closure_7;
              obj7[9] = closure_9;
              obj7[10] = encodingConfig;
              obj7[11] = {};
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = callback4(obj7);
              return obj;
            }
          }
        } catch (tmp43) {
          c4 = tmp;
          throw tmp43;
        }
      }
    })();
    iter.next();
    return iter;
  });
  const _processVideoUpload = tmp;
  let apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _processImageOrFileUpload() {
  let self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c5 = 0;
    let c6 = 0;
    const iter = (function*(arg0) {
      let c0;
      let c3;
      let c4;
      let c5;
      let c6;
      let c7;
      let c8;
      let height;
      let width;
      if (c6 === 2) {
        c6 = 3;
        let throwTypeErrorResult = HermesBuiltin.throwTypeError();
      } else {
        throwTypeErrorResult = arg1;
        throwTypeErrorResult = arg0;
        throwTypeErrorResult = tmp3;
        if (tmp4 === 3) {
          if (arg0 === 1) {
            throw arg1;
          } else if (arg0 === 2) {
            let obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } else {
          try {
            c6 = 2;
            if (0 === c5) {
              if (arg0 === 1) {
                c6 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c6 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                c4 = tmp5;
                c3 = tmp2;
                let lib;
                width = undefined;
                height = undefined;
                c3 = undefined;
                c4 = undefined;
                c5 = undefined;
                c6 = undefined;
                c7 = undefined;
                c8 = undefined;
                throwTypeErrorResult = lib;
                ({ originalUri: c0, filename: width, mimeType: height, spoiler: c3, description: c4, i: c5, width: c6, height: c7, allowOptimization: c8 } = lib);
                let c9;
                let c10;
                let c11;
                let c12;
                let styles;
                let c14;
                let c15;
                let constants;
                let c17;
                let closure_18;
                let c19;
                let logger;
                let c21;
                let c22;
                let c23;
                let path;
                let encoderUsed;
                let closure_26;
                c5 = 1;
                c6 = 1;
                return { value: "ct", done: true };
              }
            } else if (1 === tmp5) {
              if (arg0 === 1) {
                c6 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c6 = 3;
                const obj1 = { value: null, done: true };
                obj1[0] = arg1;
                return obj1;
              } else {
                throwTypeErrorResult = c4;
                throwTypeErrorResult = outer1_10;
                let dataSavingMode = outer1_10.dataSavingMode;
                if (dataSavingMode) {
                  dataSavingMode = outer1_11.getType() === outer1_15.CELLULAR;
                }
                outer1_11 = dataSavingMode;
                const outer1_12 = callback(lib, outer1_2);
                if (outer1_12) {
                  const obj2 = { width: null, height: null };
                  obj2[0] = c6;
                  obj2[1] = c7;
                  let obj3 = obj2;
                } else {
                  obj3 = {};
                }
                const outer1_13 = obj3;
                let outer1_14 = constants.LOW;
                outer1_15 = false;
                let tmp51 = outer1_12;
                if (outer1_12) {
                  tmp51 = !c11;
                }
                if (tmp51) {
                  outer1_15 = lib(height[24]).ADAPTIVE_COMPRESSION_CONFIG.useOriginalIfSmaller;
                  let obj6 = lib(height[24]);
                  outer1_14 = obj6.getAdaptiveImageCompressionQuality(outer1_13, lib(height[24]).ADAPTIVE_COMPRESSION_CONFIG);
                  const _HermesInternal = HermesInternal;
                  logger.log("Got image compression quality: " + outer1_14 + " for " + lib + " with dimensions: " + c6 + "x" + outer1_7 + " and useOriginalIfSmaller: " + outer1_15);
                }
                let obj7 = lib(outer1_2[13]);
                let isIOSResult = obj7.isIOS();
                if (isIOSResult) {
                  isIOSResult = lib.startsWith("ph://");
                }
                constants = isIOSResult;
                c17 = false;
                if (c12) {
                  let obj8 = lib(outer1_2[25]);
                  closure_18 = obj8.useMobileLosslessImageUploadV2Experiment({ location: "upload_utils.process_image_upload" });
                  let obj9 = lib(outer1_2[26]);
                  let enabled = obj9.isDiscordFrontendDevelopment();
                  if (!enabled) {
                    enabled = outer1_18.enabled;
                  }
                  const outer1_17 = enabled;
                }
                let outer1_19 = false;
                let outer1_20 = false;
                if (outer1_12) {
                  const AttachmentQualityMetricsExperiment = lib(outer1_2[27]).AttachmentQualityMetricsExperiment;
                  const outer1_21 = AttachmentQualityMetricsExperiment.getConfig({ location: "upload_utils.process_image_upload" });
                  outer1_19 = outer1_21.enableQualityMetrics;
                  outer1_20 = outer1_21.enableOriginDetection;
                }
                let outer1_22 = false;
                let obj10 = lib(outer1_2[13]);
                if (obj10.isIOS()) {
                  throwTypeErrorResult = outer1_12;
                  if (outer1_12) {
                    throwTypeErrorResult = c4;
                    throwTypeErrorResult = lib;
                    throwTypeErrorResult = outer1_2;
                    throwTypeErrorResult = c3;
                    if (obj12.isDiscordFrontendDevelopment()) {
                      outer1_22 = true;
                    } else {
                      throwTypeErrorResult = c4;
                      throwTypeErrorResult = lib;
                      throwTypeErrorResult = outer1_2;
                      outer1_22 = lib(outer1_2[28]).getIosJpegliConfig({ location: "upload_utils.process_image_upload" }).useJpegliEncoder;
                      const obj13 = lib(outer1_2[28]);
                    }
                    throwTypeErrorResult = c3;
                    throwTypeErrorResult = outer1_11;
                    if (!outer1_11) {
                      throwTypeErrorResult = outer1_13;
                      throwTypeErrorResult = null;
                      if (null != outer1_13.width) {
                        throwTypeErrorResult = c3;
                        throwTypeErrorResult = outer1_13;
                        if (null != outer1_13.height) {
                          throwTypeErrorResult = c4;
                          throwTypeErrorResult = lib;
                          throwTypeErrorResult = outer1_2;
                          if (obj21.getMobileImageEncodingLadderConfig({ location: "upload_utils.process_image_upload" }).useImageEncodingLadder) {
                            throwTypeErrorResult = c3;
                            throwTypeErrorResult = c4;
                            throwTypeErrorResult = lib;
                            throwTypeErrorResult = outer1_2;
                            const ImageEncodingLadder = lib(outer1_2[24]).ImageEncodingLadder;
                            const obj4 = { width: null, height: null };
                            throwTypeErrorResult = outer1_13;
                            obj4[0] = outer1_13.width;
                            throwTypeErrorResult = outer1_13;
                            obj4[1] = outer1_13.height;
                            const outer1_23 = ImageEncodingLadder.selectEncodingConfig(obj4);
                            outer1_15 = true;
                            throwTypeErrorResult = outer1_23;
                            outer1_14 = outer1_23.compressionQuality / 100;
                            throwTypeErrorResult = outer1_23;
                            const outer1_9 = outer1_23.targetWidth;
                            throwTypeErrorResult = outer1_23;
                            outer1_10 = outer1_23.targetHeight;
                          }
                          obj21 = lib(outer1_2[29]);
                        }
                      }
                    }
                    obj12 = lib(outer1_2[26]);
                  }
                }
                throwTypeErrorResult = c3;
                const obj5 = { uri: null, filename: null, isLowQuality: null, compressionQuality: null, mobileLosslessImageEnabled: null, useEnhancedConversion: null, useJpegliEncoder: null, allowOptimization: null, targetWidth: null, targetHeight: null };
                throwTypeErrorResult = lib;
                obj5[0] = lib;
                throwTypeErrorResult = outer1_1;
                obj5[1] = outer1_1;
                throwTypeErrorResult = outer1_11;
                obj5[2] = outer1_11;
                throwTypeErrorResult = outer1_14;
                obj5[3] = outer1_14;
                throwTypeErrorResult = outer1_17;
                obj5[4] = outer1_17;
                throwTypeErrorResult = outer1_16;
                obj5[5] = outer1_16;
                throwTypeErrorResult = outer1_22;
                obj5[6] = outer1_22;
                throwTypeErrorResult = outer1_8;
                obj5[7] = outer1_8;
                throwTypeErrorResult = outer1_9;
                obj5[8] = outer1_9;
                throwTypeErrorResult = outer1_10;
                obj5[9] = outer1_10;
                c5 = 2;
                c6 = 1;
                obj6 = { value: null, done: false };
                obj6[0] = (function tryConvertImage(arg0) {
                  const self = this;
                  const apply = closure_39.apply;
                  if (typeof apply === "unknown") {
                    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                  } else {
                    applyArgumentsResult = apply(self, arguments);
                  }
                  return applyArgumentsResult;
                })(obj5);
                return obj6;
              }
            } else {
              if (2 === tmp5) {
                if (arg0 === 1) {
                  c6 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  c6 = 3;
                  obj7 = { value: null, done: true };
                  obj7[0] = arg1;
                  return obj7;
                } else {
                  throwTypeErrorResult = c3;
                  closure_26 = arg1;
                  throwTypeErrorResult = closure_26;
                  throwTypeErrorResult = null;
                  if (null != closure_26) {
                    path = closure_26.path;
                    encoderUsed = closure_26.encoderUsed;
                  } else {
                    c5 = 3;
                    c6 = 1;
                    obj8 = { value: null, done: false };
                    obj8[0] = (function resolveFileUri(c0, c14, c11, c15, c8) {
                      let flag = c8;
                      if (c8 === undefined) {
                        flag = true;
                      }
                      let obj = _undefined(height[13]);
                      let isAndroidResult = obj.isAndroid();
                      if (isAndroidResult) {
                        isAndroidResult = null != c0.match(/^content:\/\/.+$/i);
                      }
                      if (isAndroidResult) {
                        obj = { compressionQuality: null, isLowQuality: null, skipVideoTranscode: true, useOriginalIfSmaller: null, allowOptimization: null };
                        obj[0] = c14;
                        obj[1] = c11;
                        obj[3] = c15;
                        obj[4] = flag;
                        return callback("resolveToMediaFilePath", c0, obj);
                      } else {
                        return Promise.resolve(c0);
                      }
                    })(lib, c14, c11, c15, c8);
                    return obj8;
                  }
                }
              } else if (arg0 === 1) {
                c6 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c6 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                path = arg1;
              }
              if (null == outer1_24) {
                const _Error = Error;
                const error = new Error("Failed to get image file path");
                throw error;
              } else {
                throwTypeErrorResult = c3;
                throwTypeErrorResult = c4;
                obj9 = { path: null, i: null, mimeType: null, filename: null, originalUri: null, spoiler: null, description: null, compressionQuality: null, sourceImageDimensions: null, isImage: null, imageEncoderType: null, uploadedImageWidth: null, uploadedImageHeight: null, attachmentQualityMetricsEnabled: null, attachmentOriginDetectionEnabled: null };
                throwTypeErrorResult = outer1_24;
                obj9[0] = outer1_24;
                throwTypeErrorResult = c5;
                obj9[1] = c5;
                throwTypeErrorResult = outer1_2;
                obj9[2] = outer1_2;
                throwTypeErrorResult = outer1_1;
                obj9[3] = outer1_1;
                throwTypeErrorResult = lib;
                obj9[4] = lib;
                throwTypeErrorResult = outer1_3;
                obj9[5] = outer1_3;
                throwTypeErrorResult = outer1_4;
                obj9[6] = outer1_4;
                throwTypeErrorResult = outer1_14;
                obj9[7] = outer1_14;
                throwTypeErrorResult = outer1_13;
                obj9[8] = outer1_13;
                throwTypeErrorResult = outer1_12;
                obj9[9] = outer1_12;
                throwTypeErrorResult = outer1_25;
                obj9[10] = outer1_25;
                let outputWidth;
                throwTypeErrorResult = closure_35;
                if (outer1_26 != null) {
                  outputWidth = outer1_26.outputWidth;
                }
                width = outputWidth;
                if (outputWidth == null) {
                  width = styles.width;
                }
                obj9[11] = width;
                let outputHeight;
                if (closure_26 != null) {
                  outputHeight = closure_26.outputHeight;
                }
                height = outputHeight;
                if (outputHeight == null) {
                  height = styles.height;
                }
                obj9[12] = height;
                obj9[13] = c19;
                obj9[14] = logger;
                c6 = 3;
                obj10 = { value: null, done: true };
                obj10[0] = throwTypeErrorResult(obj9);
                return obj10;
              }
            }
          } catch (throwTypeErrorResult) {
            c6 = throwTypeErrorResult;
            throw throwTypeErrorResult;
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  const _processImageOrFileUpload = tmp;
  let apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _tryConvertImage() {
  let self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c7 = 0;
    let c8 = 0;
    let c5 = 0;
    const iter = (function*(arg0, path) {
      let c0;
      let c3;
      let c4;
      let c5;
      let c6;
      let c7;
      let c8;
      let c9;
      let closure_1;
      let closure_2;
      if (c8 === 2) {
        c8 = 3;
        let throwTypeErrorResult = HermesBuiltin.throwTypeError();
      } else {
        throwTypeErrorResult = path;
        throwTypeErrorResult = arg0;
        throwTypeErrorResult = tmp5;
        throwTypeErrorResult = null;
        throwTypeErrorResult = globalThis;
        if (tmp6 === 3) {
          if (arg0 === 1) {
            throw path;
          } else if (arg0 === 2) {
            let obj = { value: null, done: true };
            obj[0] = path;
            return obj;
          } else {
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } else {
          try {
            c8 = 2;
            if (0 === c7) {
              if (arg0 === 1) {
                c8 = 3;
                throw path;
              } else if (arg0 === 2) {
                c8 = 3;
                obj = { value: null, done: true };
                obj[0] = path;
                return obj;
              } else {
                c4 = tmp2;
                c3 = tmp7;
                let lib;
                closure_1 = undefined;
                let dependencyMap;
                c3 = undefined;
                c4 = undefined;
                c5 = undefined;
                let MediaManager;
                c7 = undefined;
                c8 = undefined;
                c9 = undefined;
                throwTypeErrorResult = lib;
                ({ uri: c0, filename: closure_1, isLowQuality: closure_2, compressionQuality: c3, mobileLosslessImageEnabled: c4, useEnhancedConversion: c5, useJpegliEncoder: c6, allowOptimization: c7, targetWidth: c8, targetHeight: c9 } = lib);
                let closure_10;
                let handleConnectionInfoChange;
                let closure_12;
                let c13;
                let closure_14;
                let closure_15;
                let encoderUsed;
                let outputWidth;
                let outputHeight;
                let closure_19;
                c7 = 1;
                c8 = 1;
                return { value: "ct", done: true };
              }
            } else if (1 === tmp7) {
              if (arg0 === 1) {
                c8 = 3;
                throw path;
              } else if (arg0 === 2) {
                c8 = 3;
                const obj1 = { value: null, done: true };
                obj1[0] = path;
                return obj1;
              } else {
                throwTypeErrorResult = c3;
                throwTypeErrorResult = closure_0;
                c7 = 2;
                c8 = 1;
                const obj2 = { value: null, done: false };
                obj2[0] = (function getPhotoKitDataUTI(closure_0) {
                  const self = this;
                  const apply = closure_30.apply;
                  if (typeof apply === "unknown") {
                    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                  } else {
                    applyArgumentsResult = apply(self, arguments);
                  }
                  return applyArgumentsResult;
                })(closure_0);
                return obj2;
              }
            } else {
              if (2 === tmp7) {
                if (arg0 === 1) {
                  c8 = 3;
                  throw path;
                } else if (arg0 === 2) {
                  c8 = 3;
                  const obj3 = { value: null, done: true };
                  obj3[0] = path;
                  return obj3;
                } else {
                  throwTypeErrorResult = c3;
                  closure_10 = path;
                  throwTypeErrorResult = lib;
                  throwTypeErrorResult = c3;
                  if ((function shouldConvertBase64ToJPG(c0) {
                    let isIOSResult = _undefined(500).isIOS();
                    if (isIOSResult) {
                      isIOSResult = null != c0.match(closure_21);
                    }
                    return isIOSResult;
                  })(lib)) {
                    throwTypeErrorResult = c4;
                    throwTypeErrorResult = outer1_27;
                    throwTypeErrorResult = lib;
                    throwTypeErrorResult = outer1_21;
                    const obj4 = { compressionQuality: null };
                    throwTypeErrorResult = c3;
                    obj4[0] = c3;
                    c7 = 3;
                    c8 = 1;
                    const obj5 = { value: null, done: false };
                    obj5[0] = outer1_27("convertBase64ToJPEG", lib.replace(outer1_21, ""), obj4);
                    return obj5;
                  } else if ((function shouldConvertBase64ToGIF(c0) {
                    let isIOSResult = _undefined(500).isIOS();
                    if (isIOSResult) {
                      isIOSResult = null != c0.match(closure_22);
                    }
                    return isIOSResult;
                  })(lib)) {
                    c7 = 4;
                    c8 = 1;
                    const obj6 = { value: null, done: false };
                    obj6[0] = outer1_27("convertBase64ToGIF", lib.replace(outer1_22, ""));
                    return obj6;
                  } else if (c4) {
                    c7 = 6;
                    c8 = 1;
                    const obj7 = { value: null, done: false };
                    obj7[0] = (function shouldConvertToPNG(c0, closure_1) {
                      const self = this;
                      const apply = closure_31.apply;
                      if (typeof apply === "unknown") {
                        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                      } else {
                        applyArgumentsResult = apply(self, arguments);
                      }
                      return applyArgumentsResult;
                    })(lib, closure_1);
                    return obj7;
                  }
                }
              } else if (3 === tmp7) {
                if (arg0 === 1) {
                  c8 = 3;
                  throw path;
                } else if (arg0 === 2) {
                  c8 = 3;
                  const obj8 = { value: null, done: true };
                  obj8[0] = path;
                  return obj8;
                } else {
                  handleConnectionInfoChange = path;
                  let tmp51 = null;
                  if (handleConnectionInfoChange) {
                    const obj9 = { path: null, encoderUsed: null };
                    obj9[0] = handleConnectionInfoChange;
                    obj9[1] = lib(4810).ImageEncoder.NATIVE;
                    tmp51 = obj9;
                  }
                  c8 = 3;
                  const obj10 = { value: null, done: true };
                  obj10[0] = tmp51;
                  return obj10;
                }
              } else if (4 === tmp7) {
                if (arg0 === 1) {
                  c8 = 3;
                  throw path;
                } else if (arg0 === 2) {
                  c8 = 3;
                  const obj11 = { value: null, done: true };
                  obj11[0] = path;
                  return obj11;
                } else {
                  closure_12 = path;
                  let tmp47 = null;
                  if (closure_12) {
                    const obj12 = { path: null };
                    obj12[0] = closure_12;
                    tmp47 = obj12;
                  }
                  c8 = 3;
                  const obj13 = { value: null, done: true };
                  obj13[0] = tmp47;
                  return obj13;
                }
              } else if (5 === tmp7) {
                c5 = 0;
                const logger = MediaManager;
                const _HermesInternal = HermesInternal;
                logger.error("getLosslessImageData failed, falling through to JPEG conversion: " + logger);
              } else if (6 === tmp7) {
                if (arg0 === 1) {
                  c8 = 3;
                  throw path;
                } else if (arg0 === 2) {
                  c8 = 3;
                  const obj14 = { value: null, done: true };
                  obj14[0] = path;
                  return obj14;
                } else if (path) {
                  c5 = 1;
                  dependencyMap = {};
                  MediaManager = MediaManager.MediaManager;
                  c7 = 7;
                  c8 = 1;
                  const obj15 = { value: null, done: false };
                  obj15[0] = MediaManager.getLosslessImageData(lib);
                  return obj15;
                }
              } else if (7 === tmp7) {
                if (arg0 === 1) {
                  c8 = 3;
                  throw path;
                } else if (arg0 === 2) {
                  c5 = 0;
                  c8 = 3;
                  let obj16 = { value: null, done: true };
                  obj16[0] = path;
                  return obj16;
                } else {
                  dependencyMap.path = path;
                  dependencyMap.encoderUsed = lib(4810).ImageEncoder.PASSTHROUGH;
                  c5 = 0;
                  c8 = 3;
                  let obj17 = { value: null, done: true };
                  obj17[0] = dependencyMap;
                  return obj17;
                }
              } else if (8 === tmp7) {
                if (arg0 === 1) {
                  c8 = 3;
                  throw path;
                } else if (arg0 === 2) {
                  c8 = 3;
                  const obj18 = { value: null, done: true };
                  obj18[0] = path;
                  return obj18;
                } else {
                  throwTypeErrorResult = c3;
                  closure_14 = path;
                  path = undefined;
                  if (closure_14 != null) {
                    path = closure_14.path;
                  }
                  closure_1 = path;
                  if (path == null) {
                    closure_1 = closure_14;
                  }
                  closure_15 = closure_1;
                  encoderUsed = undefined;
                  if (closure_14 != null) {
                    encoderUsed = closure_14.encoderUsed;
                  }
                  outputWidth = undefined;
                  if (closure_14 != null) {
                    outputWidth = closure_14.outputWidth;
                  }
                  outputHeight = undefined;
                  if (closure_14 != null) {
                    outputHeight = closure_14.outputHeight;
                  }
                  let tmp24 = null;
                  if (closure_15) {
                    const obj19 = { path: null, encoderUsed: null, outputWidth: null, outputHeight: null };
                    obj19[0] = closure_15;
                    obj19[1] = encoderUsed;
                    obj19[2] = outputWidth;
                    obj19[3] = outputHeight;
                    tmp24 = obj19;
                  }
                  c8 = 3;
                  const obj20 = { value: null, done: true };
                  obj20[0] = tmp24;
                  return obj20;
                }
              } else if (arg0 === 1) {
                c8 = 3;
                throw path;
              } else if (arg0 === 2) {
                c8 = 3;
                const obj21 = { value: null, done: true };
                obj21[0] = path;
                return obj21;
              } else {
                closure_19 = path;
                let tmp10 = null;
                if (closure_19) {
                  obj = { path: null };
                  obj[0] = closure_19;
                  tmp10 = obj;
                }
                c8 = 3;
                const obj22 = { value: null, done: true };
                obj22[0] = tmp10;
                return obj22;
              }
              obj16 = lib(4860);
              const outer1_13 = obj16.shouldForceConvertToJPG(closure_0, outer1_1, outer1_10);
              if (!outer1_13) {
                obj17 = lib(4860);
                if (!obj17.shouldConvertToJPG(closure_0, outer1_1, outer1_2, outer1_4, c7)) {
                  if ((function shouldConvertToGifFilepath(closure_0, outer1_1) {
                    const isIOSResult = _undefined(500).isIOS();
                    if (!isIOSResult) {
                      return isIOSResult;
                    } else {
                      if (tmpResult.isPhotoKitAsset(closure_0, outer1_1)) {
                        let match;
                        if (outer1_1 != null) {
                          match = outer1_1.match(/\.gif$/i);
                        }
                        let tmp7 = null != match;
                      } else {
                        tmp7 = null != closure_0.match(/^assets-library:\/\/.+&ext=gif$/i);
                      }
                      tmpResult = _undefined(4860);
                    }
                  })(closure_0, outer1_1)) {
                    c7 = 9;
                    c8 = 1;
                    const obj23 = { value: null, done: false };
                    obj23[0] = callback("convertToGIFFilePath", closure_0);
                    return obj23;
                  } else {
                    c8 = 3;
                    return { value: null, done: true };
                  }
                }
              }
              const obj24 = { compressionQuality: null, forceConvertToJPG: null, useEnhancedConversion: null, useJpegliEncoder: null, targetWidth: null, targetHeight: null };
              obj24[0] = c3;
              obj24[1] = c13;
              obj24[2] = c5;
              obj24[3] = MediaManager;
              obj24[4] = c8;
              obj24[5] = c9;
              c7 = 8;
              c8 = 1;
              const obj25 = { value: null, done: false };
              obj25[0] = outer1_27("convertToJPEG", lib, obj24);
              return obj25;
            }
          } catch (throwTypeErrorResult) {
            MediaManager = throwTypeErrorResult;
            throwTypeErrorResult = c5;
            if (tmp3 === c5) {
              c8 = throwTypeErrorResult;
              throw throwTypeErrorResult;
            } else {
              c7 = tmp4;
            }
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  const _tryConvertImage = tmp;
  let apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _fetchVideoMetadata() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let c7 = 0;
    let c8 = 0;
    let c6 = 0;
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
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c8 = 2;
          let warnResult = c7;
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
              let _objectWithoutProperties = tmp3;
              let closure_3 = warnResult;
              let rotationDegrees;
              warnResult = outer1_32(closure_0, rotationDegrees);
              if (warnResult) {
                let c6 = 1;
                c7 = 2;
                c8 = 1;
                const obj1 = { value: null, done: false };
                obj1[0] = outer1_27("getVideoMetadata", tmp20);
                return obj1;
              }
              tmp20 = closure_0;
            }
          } else if (1 === warnResult) {
            c6 = 0;
            let c2 = mergeGuildAvatar;
            const obj2 = { uri: null, error: null };
            obj2[0] = closure_0;
            obj2[1] = c2;
            warnResult = logger.warn("Failed to fetch video metadata", obj2);
          } else if (arg0 === 1) {
            c8 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c6 = 0;
            c8 = 3;
            const obj3 = { value: null, done: true };
            obj3[0] = arg1;
            return obj3;
          } else {
            rotationDegrees = arg1;
            rotationDegrees = rotationDegrees.rotationDegrees;
            c2 = rotationDegrees;
            if (rotationDegrees == null) {
              c2 = 0;
            }
            rotationDegrees.rotationDegrees = c2;
            c6 = 0;
            c8 = 3;
            obj = { value: null, done: true };
            obj[0] = rotationDegrees;
            return obj;
          }
          c8 = 3;
        } catch (tmp24) {
          mergeGuildAvatar = tmp24;
          if (tmp4 === c6) {
            c8 = tmp2;
            throw tmp24;
          } else {
            c7 = tmp;
          }
        }
      }
    })();
  });
  const _fetchVideoMetadata = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function getCaptionLabel(type, isVideo, item) {
  if (isVideo) {
    let str3 = "VIDEO";
    if (null != item.playableDuration) {
      str3 = getTimeFormat.getTimeFormat(item.playableDuration);
      const obj = getTimeFormat;
    }
    let str2 = str3;
  } else {
    str2 = null;
    if ("image/gif" === type) {
      str2 = "GIF";
    }
  }
  return str2;
}
function getImageDimensionsIfMissing(closure_0, outer1_1, outer1_2, c1) {
  const self = this;
  const apply = _getImageDimensionsIfMissing.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _getImageDimensionsIfMissing() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2, arg3) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let closure_3 = arg3;
    let c8 = 0;
    let c9 = 0;
    let c7 = 0;
    return (function*(arg0, arg1, arg2, arg3) {
      if (c9 === 2) {
        c9 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp7 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c9 = 2;
          if (0 === c8) {
            if (arg0 === 1) {
              c9 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c9 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let mergeGuildAvatar = tmp3;
              let _objectWithoutProperties = tmp5;
              let file;
              let styles;
              const obj1 = { width: null, height: null };
              obj1[0] = obj1;
              obj1[1] = file;
              if (null != obj1) {
                if (null != file) {
                  c9 = 3;
                  const obj2 = { value: null, done: true };
                  obj2[0] = obj1;
                  return obj2;
                }
              }
              let obj4 = callback(table[11]);
              const obj3 = { uri: null, overrideFilename: null };
              obj3[0] = callback;
              obj3[1] = styles;
              file = obj4.getFile(obj3);
              if (!file.isImage) {
                if (!file.isVideo) {
                  c9 = 3;
                  obj4 = { value: null, done: true };
                  obj4[0] = obj1;
                  return obj4;
                }
              }
              let c7 = 1;
              c8 = 2;
              c9 = 1;
              const obj5 = { value: null, done: false };
              obj5[0] = (function getImageDimensionByUri(arg0) {
                let closure_0 = arg0;
                return new Promise((arg0, arg1) => {
                  let closure_0 = arg0;
                  return outer1_7.getSize(closure_0, () => { ... }, arg1);
                });
              })(callback);
              return obj5;
            }
          } else if (1 === tmp8) {
            c7 = 0;
            _objectWithoutProperties = DCDFileManager;
            const _HermesInternal = HermesInternal;
            logger.warn("Unable to get width and height of media file: " + callback, _objectWithoutProperties);
            c9 = 3;
            const obj6 = { value: null, done: true };
            obj6[0] = obj1;
            return obj6;
          } else {
            if (2 === tmp8) {
              if (arg0 === 1) {
                c9 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c7 = 0;
                c9 = 3;
                const obj7 = { value: null, done: true };
                obj7[0] = arg1;
                return obj7;
              } else {
                styles = arg1;
                let isVideo = callback(file[13]).isIOS();
                if (isVideo) {
                  isVideo = file.isVideo;
                }
                if (isVideo) {
                  isVideo = 0 === styles.width;
                }
                if (isVideo) {
                  isVideo = 0 === styles.height;
                }
                if (isVideo) {
                  DCDFileManager = DCDFileManager.DCDFileManager;
                  c8 = 3;
                  c9 = 1;
                  const obj8 = { value: null, done: false };
                  obj8[0] = DCDFileManager.getVideoDimensions(callback);
                  return obj8;
                } else {
                  c7 = 0;
                  c9 = 3;
                }
                const obj12 = callback(file[13]);
              }
            } else if (arg0 === 1) {
              c9 = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              styles = arg1;
            }
            c7 = 0;
            c9 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
        } catch (tmp33) {
          DCDFileManager = tmp33;
          if (tmp4 === c7) {
            c9 = tmp2;
            throw tmp33;
          } else {
            c8 = tmp;
          }
        }
      }
    })();
  });
  const _getImageDimensionsIfMissing = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function isHEVCEncodingSupported() {
  const self = this;
  const apply = _isHEVCEncodingSupported.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _isHEVCEncodingSupported() {
  const self = this;
  const tmp = callback(function*() {
    if (c5 === 2) {
      c5 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let closure_1 = tmp3;
            let closure_0 = tmp7;
            let c3 = 1;
            const MediaManager = outer1_6.MediaManager;
            c4 = 2;
            c5 = 1;
            const obj1 = { value: null, done: false };
            obj1[0] = MediaManager.isHEVCEncodingSupported();
            return obj1;
          }
        } else if (1 === tmp7) {
          c3 = 0;
          closure_0 = closure_2;
          logger.warn("Error checking HEVC support:", closure_0);
          c5 = 3;
          return { value: false, done: true };
        } else if (arg0 === 1) {
          c5 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c3 = 0;
          c5 = 3;
          const obj2 = { value: null, done: true };
          obj2[0] = arg1;
          return obj2;
        } else {
          c3 = 0;
          c5 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        }
      } catch (tmp16) {
        closure_2 = tmp16;
        if (tmp4 === c3) {
          c5 = tmp2;
          throw tmp16;
        } else {
          c4 = tmp;
        }
      }
    }
  });
  const _isHEVCEncodingSupported = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function checkVideoEncodingSupport(arg0) {
  const self = this;
  const apply = _checkVideoEncodingSupport.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _checkVideoEncodingSupport() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    return (function*(arg0) {
      if (MediaManager === 2) {
        MediaManager = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          MediaManager = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              MediaManager = 3;
              throw arg1;
            } else if (arg0 === 2) {
              MediaManager = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let closure_2 = tmp3;
              let closure_1 = tmp7;
              let c4 = 1;
              MediaManager = MediaManager.MediaManager;
              ({ targetWidth: obj7[0], targetHeight: obj7[1], frameRate: obj7[2], useHEVC: obj7[3] } = closure_0);
              c5 = 2;
              MediaManager = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = MediaManager.isVideoEncodingSupported({ width: null, height: null, frameRate: null, isHEVC: null });
              return obj2;
            }
          } else if (1 === tmp7) {
            c4 = 0;
            closure_0 = closure_3;
            logger.warn("Error checking video encoding support:", closure_0);
            MediaManager = 3;
            const obj3 = { value: null, done: true };
            obj3[0] = { isSupported: true };
            return obj3;
          } else if (arg0 === 1) {
            MediaManager = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 0;
            MediaManager = 3;
            const obj4 = { value: null, done: true };
            obj4[0] = arg1;
            return obj4;
          } else {
            c4 = 0;
            MediaManager = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
        } catch (tmp15) {
          closure_3 = tmp15;
          if (tmp4 === c4) {
            MediaManager = tmp2;
            throw tmp15;
          } else {
            c5 = tmp;
          }
        }
      }
    })();
  });
  const _checkVideoEncodingSupport = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function calculateImageQualityMetrics(closure_0, combined) {
  const self = this;
  const apply = _calculateImageQualityMetrics.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _calculateImageQualityMetrics() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2, arg3, arg4) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg3;
    let closure_3 = arg4;
    let c8 = 0;
    let c9 = 0;
    let c7 = 0;
    return (function*(arg0, arg1, arg2, arg3, arg4) {
      if (c9 === 2) {
        c9 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp7 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c9 = 2;
          if (0 === c8) {
            if (arg0 === 1) {
              c9 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c9 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let MediaManager = tmp3;
              let source = tmp5;
              source = undefined;
              MediaManager = undefined;
              let combined;
              let c7;
              let closure_3 = {};
              if (closure_3) {
                c7 = 1;
                MediaManager = lib(17).NativeModules.MediaManager;
                c8 = 2;
                c9 = 1;
                const obj1 = { value: null, done: false };
                obj1[0] = MediaManager.getMediaOrigin(tmp76);
                return obj1;
              }
            }
          } else {
            if (1 === tmp8) {
              c7 = 0;
              c8 = combined;
              logger.warn("Failed to detect media origin", c8);
            } else if (2 === tmp8) {
              if (arg0 === 1) {
                c9 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c7 = 0;
                c9 = 3;
                const obj2 = { value: null, done: true };
                obj2[0] = arg1;
                return obj2;
              } else {
                source = arg1;
                closure_3.origin = source.source;
                c7 = 0;
              }
            } else {
              if (3 === tmp8) {
                c7 = 0;
                c9 = combined;
                logger.warn("Error in quality metrics calculation", c9);
              } else if (arg0 === 1) {
                c9 = 3;
                throw arg1;
              } else if (arg0 !== 2) {
                c7 = arg1;
                closure_3.psnr = c7.psnr;
                closure_3.ssim = c7.ssim;
                closure_3.psnrMeasurementLatencyMs = c7.psnrCalculationTimeMs;
                closure_3.ssimMeasurementLatencyMs = c7.ssimCalculationTimeMs;
                const _HermesInternal3 = HermesInternal;
                logger.log("Quality metrics calculated: PSNR=" + c7.psnr + "dB, SSIM=" + c7.ssim);
                c7 = 0;
              }
              c7 = 0;
              c9 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            }
            c9 = 3;
          }
          if (dependencyMap) {
            c7 = 2;
            MediaManager = lib(17).NativeModules.MediaManager;
            combined = closure_1;
            if (closure_1.includes("://")) {
              c8 = 4;
              c9 = 1;
              const obj3 = { value: null, done: false };
              obj3[0] = MediaManager.calculateImageQualityMetrics(lib, combined);
              return obj3;
            } else {
              if (!closure_1.includes("/")) {
                if (!closure_1.includes("\\")) {
                  const _HermesInternal = HermesInternal;
                  if (lib.startsWith("ph://")) {
                    combined = concat(tmp42);
                  } else {
                    combined = concat(tmp42);
                  }
                }
              }
              const _HermesInternal2 = HermesInternal;
              combined = "file://" + closure_1;
            }
          }
        } catch (tmp53) {
          combined = tmp53;
          if (tmp4 === c7) {
            c9 = tmp2;
            throw tmp53;
          } else if (tmp === tmp55) {
            c8 = tmp;
          } else {
            c8 = tmp2;
          }
        }
      }
    })();
  });
  const _calculateImageQualityMetrics = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_3 = ["filename"];
({ NativeModules: closure_6, Image: error } = get_ActivityIndicator);
({ VideoCompressionQuality: metroImportAll, VideoQualitySettings: c9 } = CHANNEL_SIDEBAR_WIDTH);
({ Base64PNGPrefix: map1, Base64GIFPrefix } = ME);
({ NetworkConnectionTypes: closure_15, CompressionQuality: closure_16, Base64WEBPPrefix: closure_17, Base64AVIFPrefix: closure_18, Base64JPEGPrefix } = ME);
let closure_20 = new require("CHANNEL_SIDEBAR_WIDTH")("UploadUtils.tsx");
const regExp = new RegExp("^" + Base64JPEGPrefix, "i");
const regExp1 = new RegExp("^" + Base64GIFPrefix, "i");
const Canceled = "Canceled";
let tmp5 = new require("CHANNEL_SIDEBAR_WIDTH")("UploadUtils.tsx");
let result = require("get ActivityIndicator").fileFinishedImporting("utils/native/UploadUtils.tsx");

export default { getFileInfo, isVideo, getType, openImagePickerUnhandled, openImagePicker, getCaptionLabel, getImageDimensionsIfMissing, isHEVCEncodingSupported, getAppDir };
export const base64JPEGRegex = regExp;
export const base64GIFRegex = regExp1;
export { openImagePicker };
export { mediaManager };
export const getImageCompressionQuality = function getImageCompressionQuality() {
  if (closure_10.dataSavingMode) {
    if (store.getType() === constants3.CELLULAR) {
      let HIGH = constants4.LOW;
    }
    return HIGH;
  }
  HIGH = constants4.HIGH;
};
export { getVideoQuality };
export const resolveModeToVideoQualityForUserWithFeature = function resolveModeToVideoQualityForUserWithFeature(arg0) {
  if (constants2.DATA_SAVER === arg0) {
    return constants.LOW;
  } else if (tmp.STANDARD === arg0) {
    return constants.HIGH;
  } else if (tmp.BEST === arg0) {
    return constants.VERY_HIGH;
  } else {
    return constants.MEDIUM;
  }
};
export const resolveModeToVideoQualityForFreeUser = function resolveModeToVideoQualityForFreeUser(arg0) {
  if (constants2.DATA_SAVER === arg0) {
    return constants.LOW;
  } else if (tmp.STANDARD === arg0) {
    return constants.MEDIUM;
  } else if (tmp.BEST === arg0) {
    return constants.HIGH;
  } else {
    return constants.LOW;
  }
};
export const cancelGetFileInfo = function cancelGetFileInfo(closure_0) {
  const item = closure_0.item;
  return new Promise((arg0, arg1) => {
    if (obj.isAndroid()) {
      if (item.platform === item(outer1_2[17]).UploadPlatform.REACT_NATIVE) {
        outer1_27("cancelResolveToMediaFilePath", item.uri).then(arg0, arg1);
        const promise = outer1_27("cancelResolveToMediaFilePath", item.uri);
      }
    }
    arg0();
  });
};
export const getFileSize = function getFileSize(uri) {
  let replaced = uri;
  if (obj.isIOS()) {
    replaced = uri.replace(/file:\/\//, "");
  }
  obj = set;
  const tmp = require;
  if (tmpResult.isAndroid()) {
    if (null == enforcing) {
      let rejectResult = Promise.reject("RTNFileManager doesn't exist?");
    } else {
      rejectResult = tmp5(1271).getSize(replaced);
      const tmp5Result = tmp5(1271);
    }
    tmp5 = importDefault;
  } else {
    const DCDFileManager = closure_6.DCDFileManager;
    return DCDFileManager.getSize(replaced);
  }
};
export { getAppDir };
export { getFileInfo };
export const shouldConvertToJPG = require("isPhotoKitAsset").shouldConvertToJPG;
export const shouldForceConvertToJPG = require("isPhotoKitAsset").shouldForceConvertToJPG;
export const shouldResolveToMediaFilePath = function shouldResolveToMediaFilePath(str) {
  let isAndroidResult = set.isAndroid();
  if (isAndroidResult) {
    isAndroidResult = null != str.match(/^content:\/\/.+$/i);
  }
  return isAndroidResult;
};
export { isVideo };
export { isImage };
export { getType };
export { getCaptionLabel };
export { getImageDimensionsIfMissing };
export { isHEVCEncodingSupported };
export { checkVideoEncodingSupport };
export { calculateImageQualityMetrics };
export const getFileFromUploadItem = function getFileFromUploadItem(result1) {
  let obj = items;
  obj = { uri: result1.uri, overrideFilename: result1.filename, overrideType: result1.mimeType };
  return obj.getFile(obj);
};