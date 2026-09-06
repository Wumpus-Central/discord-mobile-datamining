// === Module 5138: utils/UploadUtils ===

// Module 5138 (utils/UploadUtils)
import LoggerDefault from "Logger" /* 3 */;
import _mod17 from "module_17" /* 17 */;
import PlatformUtils from "PlatformUtils" /* 1115 */;
import NativeFileModuleDefault from "NativeFileModule" /* 1152 */;
import Upload from "Upload" /* 5128 */;
import UploadUtils from "UploadUtils" /* 5129 */;
import FileUtils from "FileUtils" /* 5134 */;
import NativePermissionUtilsDefault from "NativePermissionUtils" /* 5139 */;
import VideoUploadUtils from "VideoUploadUtils" /* 5161 */;
import utils_TimeUtils from "utils/TimeUtils" /* 5168 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1185 */;
import NetworkStore from "NetworkStore" /* 4609 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
function openImagePickerUnhandled() {
  const self = this;
  const apply = closure_25.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_25 = async function _openImagePickerUnhandled(arg0, value) {
  if (c12 === 2) {
    c12 = 3;
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
      c12 = 2;
      if (0 === c11) {
        if (arg0 === 1) {
          c12 = 3;
          throw value;
        } else if (arg0 === 2) {
          c12 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_6 = tmp2;
          closure_7 = tmp7;
          closure_135_0 = closure_0;
          closure_135_1 = undefined;
          let width;
          let height;
          closure_135_4 = undefined;
          let file;
          closure_135_6 = undefined;
          closure_135_7 = undefined;
          let obj25 = NativePermissionUtilsDefault;
          c11 = 1;
          c12 = 1;
          const obj1 = { value: obj25.requestPermission(constants.PHOTOS), done: false };
          return obj1;
        }
      } else if (1 === tmp7) {
        if (arg0 === 1) {
          c12 = 3;
          throw value;
        } else if (arg0 === 2) {
          c12 = 3;
          const obj2 = { value, done: true };
          return obj2;
        } else if (value) {
          let size = { width: null, height: null };
          size = closure_135_0;
          if ("size" in closure_135_0) {
            size = size.size;
            size.width = size;
            size.height = closure_135_0.size;
            let tmp64 = size;
          } else {
            size.width = size.width;
            size.height = closure_135_0.height;
            tmp64 = size;
          }
          closure_135_1 = tmp64;
          width = closure_135_1.width;
          height = closure_135_1.height;
          size = new Promise((arg0, arg1) => {
            closure_0 = arg0;
            closure_1 = arg1;
            closure_1(closure_2[10]).launchImageLibrary({ mediaType: "photo", includeBase64: true, disableNewIOSPicker: true }, (assets) => {
              let first = null;
              if (null != assets.assets) {
                first = null;
                if (assets.assets.length > 0) {
                  first = assets.assets[0];
                }
              }
              if (assets.didCancel) {
                const _Error2 = Error;
                const error = new Error(closure_2_23);
                closure_1(error);
              } else {
                if (null == assets.errorCode) {
                  let uri;
                  if (first != null) {
                    uri = first.uri;
                  }
                  if (null != uri) {
                    const obj = { uri: null, base64: null };
                    ({ uri: obj.uri, base64: obj.base64 } = first);
                    closure_0(obj);
                  }
                }
                const _Error = Error;
                const error1 = new Error(assets.errorMessage);
                closure_1(error1);
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
          throw value;
        } else if (arg0 === 2) {
          c12 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_135_4 = value;
          const obj4 = { uri: closure_135_4.uri, i: "" };
          file = closure_134_0(closure_134_2[11]).getFile(obj4);
          const obj30 = closure_134_0(closure_134_2[11]);
          const obj32 = closure_134_1(closure_134_2[12]);
          closure_135_6 = closure_134_1(closure_134_2[12]).fromFileUri(closure_135_4.uri).catch(() => null);
          if (null != closure_135_4.base64) {
            if (obj33.isAndroid()) {
              let base64 = closure_135_4.base64;
              if (base64.startsWith("UklGR")) {
                const obj5 = { base64: closure_134_17 + closure_135_4.base64, mimeType: "image/webp" };
                c11 = 3;
                c12 = 1;
                const obj6 = { value: closure_135_6, done: false };
                return obj6;
              } else {
                base64 = closure_135_4.base64;
                if (4 === base64.indexOf("ZnR5cA==")) {
                  const base641 = closure_135_4.base64;
                  if (8 !== base641.indexOf("YXZpZg==")) {
                    const base642 = closure_135_4.base64;
                  }
                  const obj7 = { base64: closure_134_18 + closure_135_4.base64, mimeType: "image/avif" };
                  c11 = 4;
                  c12 = 1;
                  const obj8 = { value: closure_135_6, done: false };
                  return obj8;
                }
              }
            }
            obj33 = closure_134_0(closure_134_2[13]);
          }
          if ("image/gif" === file.type) {
            const obj9 = { base64: closure_134_14 + closure_135_4.base64, mimeType: "image/gif" };
            c11 = 5;
            c12 = 1;
            const obj10 = { value: closure_135_6, done: false };
            return obj10;
          } else {
            c9 = 1;
            const size1 = { uri: closure_135_4.uri, width, height, includeBase64: true, mimeType: null };
            const preferredMimeType = closure_135_0.preferredMimeType;
            let type = preferredMimeType;
            if (preferredMimeType == null) {
              type = file.type;
            }
            size1.mimeType = type;
            c11 = 7;
            c12 = 1;
            const obj11 = { value: closure_134_1(closure_134_2[10]).launchCropper(size1), done: false };
            return obj11;
          }
          const fromFileUriResult = closure_134_1(closure_134_2[12]).fromFileUri(closure_135_4.uri);
        }
      } else if (3 === tmp7) {
        if (arg0 === 1) {
          c12 = 3;
          throw value;
        } else if (arg0 === 2) {
          c12 = 3;
          const obj12 = { value, done: true };
          return obj12;
        } else {
          obj5.originalMd5 = value;
          c12 = 3;
          const obj13 = { value: obj5, done: true };
          return obj13;
        }
      } else if (4 === tmp7) {
        if (arg0 === 1) {
          c12 = 3;
          throw value;
        } else if (arg0 === 2) {
          c12 = 3;
          const obj14 = { value, done: true };
          return obj14;
        } else {
          obj7.originalMd5 = value;
          c12 = 3;
          const obj15 = { value: obj7, done: true };
          return obj15;
        }
      } else if (5 === tmp7) {
        if (arg0 === 1) {
          c12 = 3;
          throw value;
        } else if (arg0 === 2) {
          c12 = 3;
          const obj16 = { value, done: true };
          return obj16;
        } else {
          obj9.originalMd5 = value;
          c12 = 3;
          const obj17 = { value: obj9, done: true };
          return obj17;
        }
      } else if (6 === tmp7) {
        c9 = 0;
        closure_135_8 = closure_10;
        if ("E_PICKER_CANCELLED" === closure_135_8.code) {
          throw closure_135_8;
        } else {
          const obj18 = { base64: closure_134_13 + closure_135_4.base64, mimeType: file.type, errorStr: closure_135_8.message };
          c11 = 9;
          c12 = 1;
          const obj19 = { value: closure_135_6, done: false };
          return obj19;
        }
      } else if (7 === tmp7) {
        if (arg0 === 1) {
          c12 = 3;
          throw value;
        } else if (arg0 === 2) {
          c9 = 0;
          c12 = 3;
          const obj20 = { value, done: true };
          return obj20;
        } else {
          closure_135_7 = value;
          const obj21 = {};
          const _HermesInternal = HermesInternal;
          obj21.base64 = "data:" + closure_135_7.mime + ";base64," + closure_135_7.data;
          obj21.mimeType = closure_135_7.mime;
          c11 = 8;
          c12 = 1;
          const obj22 = { value: closure_135_6, done: false };
          return obj22;
        }
      } else if (8 === tmp7) {
        if (arg0 === 1) {
          c12 = 3;
          throw value;
        } else if (arg0 === 2) {
          c9 = 0;
          c12 = 3;
          const obj23 = { value, done: true };
          return obj23;
        } else {
          obj21.originalMd5 = value;
          c9 = 0;
          c12 = 3;
          const obj24 = { value: obj21, done: true };
          return obj24;
        }
      } else if (arg0 === 1) {
        c12 = 3;
        throw value;
      } else if (arg0 === 2) {
        c12 = 3;
        obj25 = { value, done: true };
        return obj25;
      } else {
        obj18.originalMd5 = value;
        c12 = 3;
        obj = { value: obj18, done: true };
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
};
function openImagePicker() {
  const self = this;
  const apply = closure_26.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_26 = async function _openImagePicker(arg0, value) {
  if (c6 === 2) {
    c6 = 3;
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
      c6 = 2;
      if (0 === c5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_2 = tmp3;
          closure_1 = tmp7;
          closure_129_0 = closure_0;
          closure_129_1 = undefined;
          c5 = 1;
          c6 = 1;
          const obj1 = { value: NativePermissionUtilsDefault.requestPermission(constants.PHOTOS), done: false };
          return obj1;
        }
      } else if (1 === tmp7) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj2 = { value, done: true };
          return obj2;
        } else if (value) {
          c4 = 1;
          c5 = 3;
          c6 = 1;
          const obj3 = { value: closure_130_24(closure_129_0), done: false };
          return obj3;
        } else {
          c6 = 3;
          let obj4 = { value: { errorStr: "Missing permission" }, done: true };
          return obj4;
        }
      } else if (2 === tmp7) {
        c4 = 0;
        closure_129_2 = closure_3;
        if ("E_PICKER_CANCELLED" !== closure_129_2.code) {
          if (closure_129_2.message !== closure_130_23) {
            if ("E_CROPPER_IMAGE_NOT_FOUND" === closure_129_2.code) {
              let obj5 = closure_130_0(closure_130_2[14]);
              const intl2 = closure_130_0(closure_130_2[15]).intl;
              obj5.presentFailedToast(intl2.string(closure_130_0(closure_130_2[15]).t.TTzyzW));
              obj5 = { errorStr: "No select photo access" };
            } else {
              obj4 = closure_130_0(closure_130_2[14]);
              obj4.presentFailedToast(closure_129_2.message);
              { errorStr: null }[0] = closure_129_2.message;
            }
          }
          c6 = 3;
        }
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 0;
        c6 = 3;
        const obj7 = { value, done: true };
        return obj7;
      } else {
        closure_129_1 = value;
        if (null != closure_129_1.errorStr) {
          obj = closure_130_0(closure_130_2[14]);
          const intl = closure_130_0(closure_130_2[15]).intl;
          const obj8 = { reason: closure_129_1.errorStr };
          obj.presentFailedToast(intl.formatToPlainString(closure_130_0(closure_130_2[15]).t.Ex162J, obj8));
        }
        c4 = 0;
        c6 = 3;
        const obj9 = { value: closure_129_1, done: true };
        return obj9;
      }
    } catch (tmp46) {
      closure_3 = tmp46;
      if (tmp4 === c4) {
        c6 = tmp2;
        throw tmp46;
      } else {
        c5 = tmp;
      }
    }
  }
};
function mediaManager() {
  const self = this;
  const apply = closure_28.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_28 = async function _mediaManager(arg0, value) {
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
          closure_131_2 = undefined;
          closure_131_0 = closure_0;
          closure_131_1 = closure_1;
          let tmp24 = closure_2;
          if (closure_2 === undefined) {
            tmp24 = null;
          }
          closure_131_2 = tmp24;
          c7 = 1;
          c8 = 1;
          return { value: "PX_16", done: true };
        }
      } else if (1 === tmp8) {
        if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c8 = 3;
          const obj1 = { value, done: true };
          return obj1;
        } else {
          c6 = 1;
          const MediaManager = closure_132_6.MediaManager;
          c7 = 3;
          c8 = 1;
          const obj2 = { value: MediaManager[closure_131_0](closure_131_1, closure_131_2), done: false };
          return obj2;
        }
      } else if (2 === tmp8) {
        c6 = 0;
        closure_131_3 = closure_5;
        closure_132_20.warn(closure_131_3);
        c8 = 3;
        return { value: "HermesInternal", done: null };
      } else if (arg0 === 1) {
        c8 = 3;
        throw value;
      } else if (arg0 === 2) {
        c6 = 0;
        c8 = 3;
        const obj3 = { value, done: true };
        return obj3;
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
function getVideoQuality() {
  if (UnsyncedUserSettingsStore.dataSavingMode) {
    if (NetworkStore.getType() === constants3.CELLULAR) {
      return constants.LOW;
    }
  }
  const videoUploadQuality = UnsyncedUserSettingsStore.videoUploadQuality;
  const currentUser = UserStore.getCurrentUser();
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
    if (null == NativeFileModuleDefault) {
      const _Error = Error;
      const error = new Error("RTNFileManager doesn't exist?");
      throw error;
    } else {
      const tmp3Result = tmp3(1152);
      return tmp3(1152).getConstants().CacheDirPath.replace(/cache$/, "");
    }
    tmp3 = importDefault;
  } else {
    return "/private" + timestampProducer.DCDFileManager.DocumentsDirPath.replace(/Documents$/, "");
  }
  obj = PlatformUtils;
}
function getFileInfo(arg0, arg1) {
  ({ item, spoiler, description } = arg0);
  let str = arg1;
  ({ mimeType, allowOptimization } = arg0);
  if (arg1 === undefined) {
    str = "";
  }
  if (item.platform !== Upload.UploadPlatform.REACT_NATIVE) {
    const _Error = Error;
    const error = new Error("Try to get file info for unsupported upload item");
    throw error;
  } else {
    ({ originalUri, filename, mimeType: mimeType2 } = item);
    if (mimeType2 == null) {
      mimeType2 = mimeType;
    }
    let obj = { uri: originalUri, overrideType: mimeType2 };
    if (tmpResult.getFile(obj).isVideo) {
      obj = { originalUri, filename, mimeType: mimeType2, fileSize: item.size, spoiler, description, i: str };
      let tmp3 = (function processVideoUpload(arg0) {
        const self = this;
        const apply = closure_1_37.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      })(obj);
    } else {
      const size = { originalUri, filename, mimeType: mimeType2, spoiler, description, i: str, width: null, height: null, allowOptimization: null };
      ({ width: obj3.width, height: obj3.height } = item);
      size.allowOptimization = allowOptimization;
      tmp3 = (function processImageOrFileUpload(size) {
        const self = this;
        const apply = closure_1_38.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      })(size);
    }
    return tmp3;
  }
}
let closure_30 = async function _getPhotoKitDataUTI(arg0, value) {
  if (c7 === 2) {
    c7 = 3;
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
      c7 = 2;
      if (0 === c6) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_3 = tmp3;
          closure_2 = tmp7;
          if (obj8.isIOS()) {
            if (obj7.startsWith("ph://")) {
              c5 = 1;
              MediaManager = MediaManager.MediaManager;
              c6 = 2;
              c7 = 1;
              const obj1 = { value: MediaManager.getImageContentType(obj7), done: false };
              return obj1;
            }
          }
          c7 = 3;
          return { value: "HermesInternal", done: null };
        }
      } else if (1 === tmp7) {
        c5 = 0;
        closure_130_0 = closure_4;
        const _HermesInternal = HermesInternal;
        closure_131_20.warn("getImageContentType failed: " + closure_130_0);
        c7 = 3;
        const obj2 = { value: undefined, done: true };
        return obj2;
      } else if (arg0 === 1) {
        c7 = 3;
        throw value;
      } else if (arg0 === 2) {
        c5 = 0;
        c7 = 3;
        const obj3 = { value, done: true };
        return obj3;
      } else {
        if (value == null) {
          value = undefined;
        }
        c5 = 0;
        c7 = 3;
        obj = { value, done: true };
        return obj;
      }
    } catch (tmp16) {
      closure_4 = tmp16;
      if (tmp4 === c5) {
        c7 = tmp2;
        throw tmp16;
      } else {
        c6 = tmp;
      }
    }
  }
};
let closure_31 = async function _shouldConvertToPNG(arg0, value) {
  if (c7 === 2) {
    c7 = 3;
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
      c7 = 2;
      if (0 === c6) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_3 = tmp3;
          closure_2 = tmp7;
          if (obj7.isIOS()) {
            if (tmp26Result.isPhotoKitAsset(str3, str4)) {
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
            c5 = 1;
            MediaManager = MediaManager.MediaManager;
            c6 = 2;
            c7 = 1;
            const obj1 = { value: MediaManager.imageHasTransparency(str3), done: false };
            return obj1;
          } else {
            c7 = 3;
            return { value: false, done: true };
          }
          obj7 = PlatformUtils;
        }
      } else if (1 === tmp7) {
        c5 = 0;
        closure_130_0 = closure_4;
        const _HermesInternal = HermesInternal;
        closure_131_20.error("shouldConvertToPNG: imageHasTransparency failed: " + closure_130_0);
        c7 = 3;
        return { value: false, done: true };
      } else if (arg0 === 1) {
        c7 = 3;
        throw value;
      } else if (arg0 === 2) {
        c5 = 0;
        c7 = 3;
        const obj2 = { value, done: true };
        return obj2;
      } else {
        c5 = 0;
        c7 = 3;
        obj = { value, done: true };
        return obj;
      }
    } catch (tmp17) {
      closure_4 = tmp17;
      if (tmp4 === c5) {
        c7 = tmp2;
        throw tmp17;
      } else {
        c6 = tmp;
      }
    }
  }
};
function isVideo(uri, overrideType) {
  const obj = { uri, overrideType };
  return obj.getFile(obj).isVideo;
}
function isImage(uri, overrideType) {
  const obj = { uri, overrideType };
  return obj.getFile(obj).isImage;
}
function getType(uri) {
  const obj = { uri };
  return obj.getFile(obj).type;
}
function convertVideo(videoMetadata) {
  ({ uri: require, filename: importDefault, isLowQuality: dependencyMap, compressionQuality: closure_3, videoQualitySetting } = videoMetadata);
  videoMetadata = videoMetadata.videoMetadata;
  c7 = undefined;
  const VideoQualityTarget = VideoUploadUtils.VideoQualityTarget;
  const result = VideoQualityTarget.fromCompressionQuality(videoQualitySetting);
  let obj = VideoUploadUtils;
  const result1 = obj.canSkipVideoTranscode(result, videoMetadata, videoMetadata.fileSize, FileUtils.maxFileSize());
  const result2 = VideoUploadUtils.calculateTargetDimensions(videoMetadata, result.targetResolution);
  obj = {};
  const result3 = VideoUploadUtils.calculateOptimalBitrate(videoMetadata, result, VideoUploadUtils.DEFAULT_VIDEO_ENCODING_CONFIG.bitrateFloor);
  const merged = Object.assign(VideoUploadUtils.DEFAULT_VIDEO_ENCODING_CONFIG);
  obj.videoQuality = result;
  ({ width: obj5.targetWidth, height: obj5.targetHeight } = result2);
  obj.targetBitrate = result3;
  if (obj6.isAndroid()) {
    if (tmpResult.getSystemVersionMajor() > 34) {
      let _Math = Math;
      let frameRate = Math.min(videoMetadata.frameRate, tmp(5161).DEFAULT_VIDEO_ENCODING_CONFIG.frameRate);
    }
    obj.frameRate = frameRate;
    obj.skipVideoTranscode = result1;
    ({ isHDRContent: obj5.createHDR, rotationDegrees: obj5.rotationDegrees } = videoMetadata);
    c7 = 0;
    let promise = new Promise((arg0, arg1) => {
      closure_0 = arg0;
      closure_1 = arg1;
      closure_2 = async function _findCompatibleConfig(arg0, value) {
        if (c13 === 2) {
          c13 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else {
          if (tmp9 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              obj = { value, done: true };
              return obj;
            } else {
              return { value: "HermesInternal", done: null };
            }
          } else {
            try {
              c13 = 2;
              if (0 === c12) {
                if (arg0 === 1) {
                  c13 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c13 = 3;
                  obj = { value, done: true };
                  return obj;
                } else {
                  closure_8 = tmp4;
                  closure_9 = tmp7;
                  closure_137_0 = undefined;
                  async function _loop() {
                    closure_2 = tmp2;
                    closure_129_0 = await closure_3_42(config);
                    if (closure_129_0.isSupported) {
                      return { v: true };
                    }
                    if (null != closure_129_0) {
                      if (null != closure_129_0.capabilities) {
                        if (null != closure_129_0.failures) {
                          if (0 !== closure_129_0.failures.length) {
                            closure_129_1 = false;
                            const failures = closure_129_0.failures;
                            if (null != failures.find((type) => "codec_not_found" === type.type)) {
                              logger.error("No supported video encoder found");
                              const _Error3 = Error;
                              const error = new Error("No supported video encoder found");
                              tmp3(error);
                              c4 = 3;
                              return { value: { v: false }, done: true };
                            } else {
                              const failures1 = closure_129_0.failures;
                              if (null != failures1.find((type) => {
                                let tmp = "resolution" === type.type;
                                if (!tmp) {
                                  tmp = "resolution_alignment" === type.type;
                                }
                                return tmp;
                              })) {
                                if (null != closure_129_0.capabilities.resolution) {
                                  if (0 !== config.targetHeight) {
                                    if (0 !== config.targetWidth) {
                                      const maxWidth = closure_129_0.capabilities.resolution.maxWidth;
                                      const maxHeight = closure_129_0.capabilities.resolution.maxHeight;
                                      closure_129_4 = config.targetWidth / config.targetHeight;
                                      const _Math6 = Math;
                                      closure_129_5 = Math.min(config.targetWidth, maxWidth);
                                      const _Math7 = Math;
                                      closure_129_6 = Math.min(config.targetHeight, maxHeight);
                                      if (closure_129_5 !== config.targetWidth) {
                                        const _Math = Math;
                                        closure_129_6 = Math.round(closure_129_5 / closure_129_4);
                                      }
                                      if (closure_129_6 !== config.targetHeight) {
                                        const _Math2 = Math;
                                        closure_129_5 = Math.round(closure_129_6 * closure_129_4);
                                      }
                                      const blockSize = closure_129_0.capabilities.blockSize;
                                      const widthAlignment = blockSize.widthAlignment;
                                      const heightAlignment = blockSize.heightAlignment;
                                      const _Math3 = Math;
                                      closure_129_5 = Math.floor(closure_129_5 / widthAlignment) * widthAlignment;
                                      const _Math4 = Math;
                                      closure_129_6 = Math.floor(closure_129_6 / heightAlignment) * heightAlignment;
                                      let tmp33 = closure_129_5 === config.targetWidth;
                                      if (tmp33) {
                                        tmp33 = closure_129_6 === config.targetHeight;
                                      }
                                      if (!tmp33) {
                                        config.targetWidth = closure_129_5;
                                        config.targetHeight = closure_129_6;
                                        closure_129_1 = true;
                                      }
                                    }
                                  }
                                  const _Error2 = Error;
                                  const error1 = new Error("Invalid video dimensions: width or height is 0");
                                  tmp3(error1);
                                  c4 = 3;
                                  return { value: { v: false }, done: true };
                                }
                              }
                              const failures2 = closure_129_0.failures;
                              closure_129_10 = failures2.find((type) => "frameRate" === type.type);
                              const capabilities = closure_129_0.capabilities;
                              if (null != closure_129_10) {
                                let min;
                                if (capabilities != null) {
                                  const frameRate = capabilities.frameRate;
                                  if (frameRate != null) {
                                    min = frameRate.min;
                                  }
                                }
                                if (null != min) {
                                  let max;
                                  if (capabilities != null) {
                                    const frameRate2 = capabilities.frameRate;
                                    if (frameRate2 != null) {
                                      max = frameRate2.max;
                                    }
                                  }
                                  if (null != max) {
                                    let frameRate3 = config.frameRate;
                                    const message = closure_129_10.message;
                                    if (message.includes("not supported at resolution")) {
                                      const items = [60, 30, 29.97, 24, 15];
                                      const sorted = items.sort((arg0, arg1) => arg1 - arg0);
                                      const found = sorted.find((item) => {
                                        let tmp = item < frameRate.frameRate;
                                        if (tmp) {
                                          tmp = item >= frameRate.frameRate.min;
                                        }
                                        return tmp;
                                      });
                                      min = found;
                                      if (found == null) {
                                        min = capabilities.frameRate.min;
                                      }
                                      frameRate3 = min;
                                    } else {
                                      const _Math5 = Math;
                                      frameRate3 = Math.min(config.frameRate, capabilities.frameRate.max);
                                    }
                                    if (frameRate3 !== config.frameRate) {
                                      config.frameRate = frameRate3;
                                      closure_129_1 = true;
                                    }
                                  }
                                }
                              }
                              if (closure_129_1) {
                                closure_7 = closure_7 + 1;
                                c4 = 3;
                                return { value: "HermesInternal", done: null };
                              } else {
                                logger.error("No adjustments possible for current failures", { currentFailures: closure_129_0.failures, config, capabilities: closure_129_0.capabilities, attempt: closure_7 + 1 });
                                const _Error = Error;
                                const error2 = new Error("No adjustments possible for current failures");
                                tmp3(error2);
                                c4 = 3;
                                return { value: { v: false }, done: true };
                              }
                            }
                          }
                        }
                      }
                    }
                    logger.warn("Unable to determine device capabilities or adjust parameters", { config, attempt: closure_7 + 1 });
                    return 0;
                  }
                  closure_137_1 = _loop;
                  if (iter7 < 4) {
                    iter7 = _loop()[isArray.iterator]();
                    HermesBuiltin.ensureObject("iterator is not an object");
                    let next = iter7.next;
                    closure_0 = undefined;
                    const _loopResult = _loop();
                  }
                  c13 = 3;
                  return { value: false, done: true };
                }
              } else {
                if (1 === tmp10) {
                  c10 = 1;
                  if (arg0 === 1) {
                    c13 = 3;
                    throw value;
                  } else {
                    closure_0 = value;
                    if (arg0 === 2) {
                      closure_0 = value;
                      c10 = 0;
                      const method = HermesBuiltin.getMethod("return");
                      if (method === undefined) {
                        c13 = 3;
                        const obj1 = { value, done: true };
                        return obj1;
                      } else {
                        const iter4 = method(closure_0);
                        HermesBuiltin.ensureObject("iterator.return() did not return an object");
                        if (iter4.done) {
                          c13 = 3;
                          const obj2 = { value: iter4.value, done: true };
                          return obj2;
                        } else {
                          c12 = 1;
                          c13 = 1;
                          return iter4;
                        }
                      }
                    } else {
                      c10 = 0;
                      const tmp40 = value;
                    }
                  }
                } else {
                  if (2 === tmp10) {
                    c10 = 0;
                    const method1 = HermesBuiltin.getMethod("throw");
                    if (method1 === undefined) {
                      const method2 = HermesBuiltin.getMethod("return");
                      if (method2 !== undefined) {
                        HermesBuiltin.ensureObject("iterator.return() did not return an object");
                      }
                      throw new TypeError("yield* delegate must have a .throw() method");
                    } else {
                      const iter3 = method1(tmp30);
                      HermesBuiltin.ensureObject("iterator.throw() did not return an object");
                      if (iter3.done) {
                        let iter5 = iter3;
                      } else {
                        c12 = 1;
                        c13 = 1;
                        return iter3;
                      }
                    }
                    tmp30 = closure_11;
                  } else {
                    if (3 === tmp10) {
                      c10 = 2;
                      if (arg0 === 1) {
                        c13 = 3;
                        throw value;
                      } else {
                        c2 = value;
                        if (arg0 === 2) {
                          c2 = value;
                          c10 = 0;
                          const method3 = HermesBuiltin.getMethod("return");
                          if (method3 === undefined) {
                            c13 = 3;
                            const obj3 = { value, done: true };
                            return obj3;
                          } else {
                            const iter2 = method3(c2);
                            HermesBuiltin.ensureObject("iterator.return() did not return an object");
                            if (iter2.done) {
                              c13 = 3;
                              obj = { value: iter2.value, done: true };
                              return obj;
                            } else {
                              c12 = 3;
                              c13 = 1;
                              return iter2;
                            }
                          }
                        } else {
                          c10 = 0;
                          const tmp22 = value;
                        }
                      }
                    } else {
                      c10 = 0;
                      const method4 = HermesBuiltin.getMethod("throw");
                      if (method4 === undefined) {
                        const method5 = HermesBuiltin.getMethod("return");
                        if (method5 !== undefined) {
                          HermesBuiltin.ensureObject("iterator.return() did not return an object");
                        }
                        throw new TypeError("yield* delegate must have a .throw() method");
                      } else {
                        const iter = method4(tmp12);
                        HermesBuiltin.ensureObject("iterator.throw() did not return an object");
                        if (iter.done) {
                          let iter6 = iter;
                        } else {
                          c12 = 3;
                          c13 = 1;
                          return iter;
                        }
                      }
                      tmp12 = closure_11;
                    }
                    value = iter6.value;
                    closure_137_0 = value;
                    if (0 !== value) {
                      if (closure_137_0) {
                        c13 = 3;
                        const obj4 = { value: closure_137_0.v, done: true };
                        return obj4;
                      } else if (iter7 < 4) {
                        const iter8 = closure_137_1()[isArray.iterator]();
                        HermesBuiltin.ensureObject("iterator is not an object");
                        next = iter8.next;
                        c2 = undefined;
                        const tmp76 = closure_137_1();
                      }
                    }
                  }
                  iter6 = next(tmp22);
                  HermesBuiltin.ensureObject("iterator.next() did not return an object");
                  if (!iter6.done) {
                    c12 = 3;
                    c13 = 1;
                    return iter6;
                  }
                }
                value = iter5.value;
                closure_137_0 = value;
              }
              iter5 = next(tmp40);
              HermesBuiltin.ensureObject("iterator.next() did not return an object");
              if (!iter5.done) {
                c12 = 1;
                c13 = 1;
                return iter5;
              }
            } catch (tmp64) {
              closure_11 = tmp64;
              if (tmp5 === c10) {
                c13 = tmp3;
                throw tmp64;
              } else if (tmp2 === tmp66) {
                c12 = tmp;
              } else {
                c12 = tmp6;
              }
            }
          }
        }
      };
      function resolveWithConfig(path) {
        encodingConfig = { path, encodingConfig };
        return closure_0(encodingConfig);
      }
      const promise = (function findCompatibleConfig() {
        const self = this;
        const apply = closure_2.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      })();
      (function findCompatibleConfig() {
        const self = this;
        const apply = closure_2.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      })().then((result) => {
        if (result) {
          let obj1 = PlatformUtils;
          let isAndroidResult = obj1.isAndroid();
          if (isAndroidResult) {
            isAndroidResult = null != str3.match(/^content:\/\/.+$/i);
          }
          if (isAndroidResult) {
            let finalConfig = { encodingConfig: null, compressionQuality: null, isLowQuality: null, videoQuality: null, skipVideoTranscode: null };
            finalConfig.encodingConfig = finalConfig;
            finalConfig.compressionQuality = compressionQuality;
            finalConfig.isLowQuality = isLowQuality;
            finalConfig.videoQuality = videoQualitySetting;
            finalConfig.skipVideoTranscode = result1;
            let nextPromise = mediaManager("resolveToMediaFilePath", str3, finalConfig).then(resolveWithConfig, closure_1);
            const promise4 = mediaManager("resolveToMediaFilePath", str3, finalConfig);
          } else {
            let tmp12Result = tmp12(1115);
            let isIOSResult = tmp12Result.isIOS();
            if (!isIOSResult) {
              if (isIOSResult) {
                finalConfig = { encodingConfig: null, videoQuality: null, isMov: true, skipVideoTranscode: null };
                finalConfig.encodingConfig = finalConfig;
                finalConfig.videoQuality = videoQualitySetting;
                finalConfig.skipVideoTranscode = result1;
                nextPromise = mediaManager("compressVideo", str3, finalConfig).then(resolveWithConfig, closure_1);
                const promise3 = mediaManager("compressVideo", str3, finalConfig);
              } else {
                tmp12Result = tmp12(1115);
                const isIOSResult1 = tmp12Result.isIOS();
                if (!isIOSResult1) {
                  if (isIOSResult1) {
                    obj1 = { encodingConfig: finalConfig, videoQuality: videoQualitySetting, skipVideoTranscode: result1 };
                    nextPromise = mediaManager("compressVideo", str3, obj1).then(resolveWithConfig, closure_1);
                    const promise2 = mediaManager("compressVideo", str3, obj1);
                  } else {
                    const formatted = str3.toLowerCase();
                    isIOSResult = tmp12(1115).isIOS();
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
                      const obj2 = { encodingConfig: finalConfig, videoQuality: videoQualitySetting, isMov: null, skipVideoTranscode: null };
                      const formatted1 = str3.toLowerCase();
                      let endsWithResult1 = formatted1.endsWith("mov");
                      if (!endsWithResult1) {
                        const formatted2 = str3.toLowerCase();
                        endsWithResult1 = formatted2.endsWith("qt");
                      }
                      obj2.isMov = endsWithResult1;
                      obj2.skipVideoTranscode = result1;
                      nextPromise = mediaManager("compressVideo", str3, obj2).then(resolveWithConfig, closure_1);
                      const tmp36Result = mediaManager("compressVideo", str3, obj2);
                    } else {
                      const obj3 = { uri: str3, filename: str4 };
                      logger.error("Unsupported video URI format", obj3);
                      const _Error2 = Error;
                      const _HermesInternal = HermesInternal;
                      const error = new Error("Unsupported video URI format: " + str3);
                      closure_1(error);
                    }
                    const tmp12Result1 = tmp12(1115);
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
                      const obj4 = { uri: str3, overrideType: "a" };
                      isVideo2 = tmp12(5129).getFile(obj4).isVideo;
                      const tmp12Result3 = tmp12(5129);
                    }
                  }
                  tmp12Result2 = tmp12(5159);
                }
              }
            } else {
              if (tmp12Result4.isPhotoKitAsset(str3, str4)) {
                let match1;
                if (str4 != null) {
                  match1 = str4.match(/\.(mov|qt)$/i);
                }
                isVideo = null != match1;
              } else {
                isVideo = null != str3.match(/^assets-library:\/\/.+&ext=(mov|qt)$/i);
                if (isVideo) {
                  const obj5 = { uri: str3, overrideType: "a" };
                  isVideo = tmp12(5129).getFile(obj5).isVideo;
                  const tmp12Result5 = tmp12(5129);
                }
              }
              tmp12Result4 = tmp12(5159);
            }
          }
        } else {
          finalConfig = { finalConfig: null, attempts: null };
          finalConfig.finalConfig = finalConfig;
          finalConfig.attempts = attempts;
          logger.error("Could not find compatible encoding configuration after multiple attempts", finalConfig);
          const _Error = Error;
          const error1 = new Error("Could not find compatible encoding configuration after multiple attempts");
          closure_1(error1);
        }
      }).catch(arg1);
    });
    return promise;
  }
  frameRate = videoMetadata.frameRate;
}
function buildResolvedUpload(arg0) {
  const self = this;
  const apply = closure_36.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_36 = async function _buildResolvedUpload(arg0) {
  isImage = arg0;
  c2 = 0;
  c3 = 0;
  return (async (arg0, value) => {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
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
        c3 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_1 = tmp2;
            closure_129_0 = isImage;
            let filename;
            closure_129_2 = undefined;
            closure_129_3 = undefined;
            ({ path: obj7.uri, i: obj7.i, mimeType: obj7.overrideType, filename: obj7.overrideFilename } = isImage);
            const file = UploadUtils.getFile({ uri: null, i: null, overrideType: null, overrideFilename: null });
            filename = file.filename;
            closure_129_2 = _objectWithoutProperties(file, closure_2_3);
            closure_129_3 = {};
            isImage = isImage.isImage;
            if (isImage) {
              isImage = tmp34.path !== tmp34.originalUri;
            }
            if (isImage) {
              c2 = 1;
              c3 = 1;
              const obj2 = { value: calculateImageQualityMetrics(tmp34.originalUri, tmp34.path, tmp34.filename, tmp34.attachmentQualityMetricsEnabled, tmp34.attachmentOriginDetectionEnabled), done: false };
              return obj2;
            } else {
              const obj3 = {};
              const merged = Object.assign(closure_129_2);
              obj3.name = filename;
              obj3.spoiler = closure_129_0.spoiler;
              obj3.description = closure_129_0.description;
              obj3.imageCompressionQuality = closure_129_0.compressionQuality;
              obj3.imageEncoderType = closure_129_0.imageEncoderType;
              obj3.videoCompressionQuality = closure_129_0.videoQualitySetting;
              obj3.videoMetadata = closure_129_0.videoMetadata;
              obj3.encodingConfig = closure_129_0.encodingConfig;
              obj3.sourceWidth = closure_129_0.sourceImageDimensions.width;
              obj3.sourceHeight = closure_129_0.sourceImageDimensions.height;
              obj3.uploadedImageWidth = closure_129_0.uploadedImageWidth;
              obj3.uploadedImageHeight = closure_129_0.uploadedImageHeight;
              obj3.psnr = closure_129_3.psnr;
              obj3.ssim = closure_129_3.ssim;
              obj3.origin = closure_129_3.origin;
              obj3.psnrMeasurementLatencyMs = closure_129_3.psnrMeasurementLatencyMs;
              obj3.ssimMeasurementLatencyMs = closure_129_3.ssimMeasurementLatencyMs;
              c3 = 3;
            }
            const obj1 = { uri: null, i: null, overrideType: null, overrideFilename: null };
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 !== 2) {
          closure_129_3 = value;
        }
        c3 = 3;
        obj = { value, done: true };
        return obj;
      } catch (tmp29) {
        c3 = tmp;
        throw tmp29;
      }
    }
  })();
};
let closure_37 = async function _processVideoUpload(arg0, value) {
  if (c4 === 2) {
    c4 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
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
      c4 = 2;
      if (0 === c3) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_2 = tmp5;
          closure_1 = tmp2;
          closure_129_0 = undefined;
          closure_129_1 = undefined;
          closure_129_2 = undefined;
          closure_129_3 = undefined;
          closure_129_4 = undefined;
          closure_129_5 = undefined;
          closure_129_6 = undefined;
          ({ originalUri: closure_129_0, filename: closure_129_1, mimeType: closure_129_2, fileSize: closure_129_3, spoiler: closure_129_4, description: closure_129_5, i: closure_129_6 } = closure_0);
          closure_129_7 = undefined;
          closure_129_8 = undefined;
          closure_129_9 = undefined;
          closure_129_10 = undefined;
          let path;
          let encodingConfig;
          c3 = 1;
          c4 = 1;
          return { value: "PX_16", done: true };
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj1 = { value, done: true };
          return obj1;
        } else {
          closure_129_7 = closure_130_29();
          let dataSavingMode = closure_130_10.dataSavingMode;
          if (dataSavingMode) {
            dataSavingMode = closure_130_11.getType() === closure_130_15.CELLULAR;
          }
          closure_129_8 = dataSavingMode;
          c3 = 2;
          c4 = 1;
          const obj2 = {
            value: (function fetchVideoMetadata(arg0, arg1) {
                      const self = this;
                      const apply = closure_1_40.apply;
                      if (typeof apply === "unknown") {
                        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                      } else {
                        applyArgumentsResult = apply(self, arguments);
                      }
                      return applyArgumentsResult;
                    })(closure_129_0, closure_129_2),
            done: false
          };
          return obj2;
        }
      } else if (2 === tmp5) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_129_9 = value;
          if (null == closure_129_9) {
            const _Error3 = Error;
            const error = new Error("Video metadata is required for video conversion");
            throw error;
          } else {
            if (obj11.getVideoFrameRateValidationExperimentConfig({ location: "upload_utils.process_video_upload" }).enableFrameRateValidation) {
              if (null != closure_129_9.frameRate) {
                const _Number = Number;
              }
              const _Error2 = Error;
              const _HermesInternal = HermesInternal;
              const error1 = new Error("Invalid video frame rate: " + closure_129_9.frameRate);
              throw error1;
            }
            const obj4 = { uri: closure_129_0, filename: closure_129_1, isLowQuality: closure_129_8, compressionQuality: closure_130_16.LOW, videoQualitySetting: closure_129_7, videoMetadata: closure_129_9, fileSize: closure_129_3 };
            c3 = 3;
            c4 = 1;
            const obj5 = { value: closure_130_34(obj4), done: false };
            return obj5;
          }
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 3;
        const obj6 = { value, done: true };
        return obj6;
      } else {
        closure_129_10 = value;
        path = closure_129_10.path;
        encodingConfig = closure_129_10.encodingConfig;
        if (null == path) {
          const _Error = Error;
          const error2 = new Error("Failed to get video file path");
          throw error2;
        } else {
          const obj7 = { path, i: closure_129_6, mimeType: closure_129_2, filename: closure_129_1, originalUri: closure_129_0, spoiler: closure_129_4, description: closure_129_5, compressionQuality: closure_130_16.LOW, videoQualitySetting: closure_129_7, videoMetadata: closure_129_9, encodingConfig, sourceImageDimensions: {}, isImage: false };
          c4 = 3;
          obj = { value: closure_130_35(obj7), done: true };
          return obj;
        }
      }
    } catch (tmp43) {
      c4 = tmp;
      throw tmp43;
    }
  }
};
let closure_38 = async function _processImageOrFileUpload(arg0, value) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
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
      c6 = 2;
      if (0 === c5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_4 = tmp5;
          closure_3 = tmp2;
          closure_131_0 = undefined;
          closure_131_1 = undefined;
          closure_131_2 = undefined;
          closure_131_3 = undefined;
          closure_131_4 = undefined;
          closure_131_5 = undefined;
          closure_131_6 = undefined;
          closure_131_7 = undefined;
          closure_131_8 = undefined;
          ({ originalUri: closure_131_0, filename: closure_131_1, mimeType: closure_131_2, spoiler: closure_131_3, description: closure_131_4, i: closure_131_5, width: closure_131_6, height: closure_131_7, allowOptimization: closure_131_8 } = closure_0);
          let targetWidth;
          let targetHeight;
          closure_131_11 = undefined;
          closure_131_12 = undefined;
          closure_131_13 = undefined;
          let LOW;
          let useOriginalIfSmaller;
          closure_131_16 = undefined;
          closure_131_17 = undefined;
          closure_131_18 = undefined;
          let enableQualityMetrics;
          closure_131_20 = undefined;
          let config;
          let useJpegliEncoder;
          closure_131_23 = undefined;
          let path;
          let encoderUsed;
          closure_131_26 = undefined;
          c5 = 1;
          c6 = 1;
          return { value: "PX_16", done: true };
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj1 = { value, done: true };
          return obj1;
        } else {
          let dataSavingMode = closure_132_10.dataSavingMode;
          if (dataSavingMode) {
            dataSavingMode = closure_132_11.getType() === closure_132_15.CELLULAR;
          }
          closure_131_11 = dataSavingMode;
          closure_131_12 = closure_132_33(closure_131_0, closure_131_2);
          if (closure_131_12) {
            const size = { width: closure_131_6, height: closure_131_7 };
            let obj2 = size;
          } else {
            obj2 = {};
          }
          closure_131_13 = obj2;
          LOW = closure_132_16.LOW;
          useOriginalIfSmaller = false;
          let tmp51 = closure_131_12;
          if (closure_131_12) {
            tmp51 = !closure_131_11;
          }
          if (tmp51) {
            useOriginalIfSmaller = closure_132_0(closure_132_2[24]).ADAPTIVE_COMPRESSION_CONFIG.useOriginalIfSmaller;
            let obj6 = closure_132_0(closure_132_2[24]);
            LOW = obj6.getAdaptiveImageCompressionQuality(closure_131_13, closure_132_0(closure_132_2[24]).ADAPTIVE_COMPRESSION_CONFIG);
            const _HermesInternal = HermesInternal;
            closure_132_20.log("Got image compression quality: " + LOW + " for " + closure_131_0 + " with dimensions: " + closure_131_6 + "x" + closure_131_7 + " and useOriginalIfSmaller: " + useOriginalIfSmaller);
          }
          let obj7 = closure_132_0(closure_132_2[13]);
          let isIOSResult = obj7.isIOS();
          if (isIOSResult) {
            isIOSResult = closure_131_0.startsWith("ph://");
          }
          closure_131_16 = isIOSResult;
          closure_131_17 = false;
          if (closure_131_12) {
            let obj8 = closure_132_0(closure_132_2[25]);
            closure_131_18 = obj8.useMobileLosslessImageUploadV2Experiment({ location: "upload_utils.process_image_upload" });
            let enabled = closure_132_0(closure_132_2[26]).isDiscordFrontendDevelopment();
            if (!enabled) {
              enabled = closure_131_18.enabled;
            }
            closure_131_17 = enabled;
            const obj10 = closure_132_0(closure_132_2[26]);
          }
          enableQualityMetrics = false;
          closure_131_20 = false;
          if (closure_131_12) {
            const AttachmentQualityMetricsExperiment = closure_132_0(closure_132_2[27]).AttachmentQualityMetricsExperiment;
            config = AttachmentQualityMetricsExperiment.getConfig({ location: "upload_utils.process_image_upload" });
            enableQualityMetrics = config.enableQualityMetrics;
            closure_131_20 = config.enableOriginDetection;
          }
          useJpegliEncoder = false;
          if (obj11.isIOS()) {
            if (closure_131_12) {
              if (obj12.isDiscordFrontendDevelopment()) {
                useJpegliEncoder = true;
              } else {
                useJpegliEncoder = closure_132_0(closure_132_2[28]).getIosJpegliConfig({ location: "upload_utils.process_image_upload" }).useJpegliEncoder;
                const obj13 = closure_132_0(closure_132_2[28]);
              }
              if (!closure_131_11) {
                if (null != closure_131_13.width) {
                  if (null != closure_131_13.height) {
                    if (obj21.getMobileImageEncodingLadderConfig({ location: "upload_utils.process_image_upload" }).useImageEncodingLadder) {
                      const ImageEncodingLadder = closure_132_0(closure_132_2[24]).ImageEncodingLadder;
                      const size1 = { width: closure_131_13.width, height: closure_131_13.height };
                      closure_131_23 = ImageEncodingLadder.selectEncodingConfig(size1);
                      useOriginalIfSmaller = true;
                      LOW = closure_131_23.compressionQuality / 100;
                      targetWidth = closure_131_23.targetWidth;
                      targetHeight = closure_131_23.targetHeight;
                    }
                    obj21 = closure_132_0(closure_132_2[29]);
                  }
                }
              }
              obj12 = closure_132_0(closure_132_2[26]);
            }
          }
          const obj3 = { uri: closure_131_0, filename: closure_131_1, isLowQuality: closure_131_11, compressionQuality: LOW, mobileLosslessImageEnabled: closure_131_17, useEnhancedConversion: closure_131_16, useJpegliEncoder, allowOptimization: closure_131_8, targetWidth, targetHeight };
          c5 = 2;
          c6 = 1;
          const obj4 = {
            value: (function tryConvertImage(arg0) {
                      const self = this;
                      const apply = closure_1_39.apply;
                      if (typeof apply === "unknown") {
                        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                      } else {
                        applyArgumentsResult = apply(self, arguments);
                      }
                      return applyArgumentsResult;
                    })(obj3),
            done: false
          };
          return obj4;
        }
      } else {
        if (2 === tmp5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            closure_131_26 = value;
            if (null != closure_131_26) {
              path = closure_131_26.path;
              encoderUsed = closure_131_26.encoderUsed;
            } else {
              c5 = 3;
              c6 = 1;
              obj6 = {
                value: (function resolveFileUri(str, compressionQuality, isLowQuality, useOriginalIfSmaller, arg4) {
                              let flag = arg4;
                              if (arg4 === undefined) {
                                flag = true;
                              }
                              let obj = closure_1_0(height[13]);
                              let isAndroidResult = obj.isAndroid();
                              if (isAndroidResult) {
                                isAndroidResult = null != str.match(/^content:\/\/.+$/i);
                              }
                              if (isAndroidResult) {
                                obj = { compressionQuality, isLowQuality, skipVideoTranscode: true, useOriginalIfSmaller, allowOptimization: flag };
                                return closure_1_27("resolveToMediaFilePath", str, obj);
                              } else {
                                return Promise.resolve(str);
                              }
                            })(closure_131_0, LOW, closure_131_11, useOriginalIfSmaller, closure_131_8),
                done: false
              };
              return obj6;
            }
          }
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          path = value;
        }
        if (null == path) {
          const _Error = Error;
          const error = new Error("Failed to get image file path");
          throw error;
        } else {
          obj7 = { path, i: closure_131_5, mimeType: closure_131_2, filename: closure_131_1, originalUri: closure_131_0, spoiler: closure_131_3, description: closure_131_4, compressionQuality: LOW, sourceImageDimensions: closure_131_13, isImage: closure_131_12, imageEncoderType: encoderUsed, uploadedImageWidth: null, uploadedImageHeight: null, attachmentQualityMetricsEnabled: null, attachmentOriginDetectionEnabled: null };
          let outputWidth;
          if (closure_131_26 != null) {
            outputWidth = closure_131_26.outputWidth;
          }
          let width = outputWidth;
          if (outputWidth == null) {
            width = closure_131_13.width;
          }
          obj7.uploadedImageWidth = width;
          let outputHeight;
          if (closure_131_26 != null) {
            outputHeight = closure_131_26.outputHeight;
          }
          let height = outputHeight;
          if (outputHeight == null) {
            height = closure_131_13.height;
          }
          obj7.uploadedImageHeight = height;
          obj7.attachmentQualityMetricsEnabled = enableQualityMetrics;
          obj7.attachmentOriginDetectionEnabled = closure_131_20;
          c6 = 3;
          obj8 = { value: closure_132_35(obj7), done: true };
          return obj8;
        }
      }
    } catch (tmp132) {
      c6 = tmp;
      throw tmp132;
    }
  }
};
let closure_39 = async function _tryConvertImage(arg0, value) {
  await (function getPhotoKitDataUTI() {
    const self = this;
    const apply = closure_1_30.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  })(closure_131_0);
  if (2 === tmp7) {
    if (arg0 === 1) {
      c8 = 3;
      throw value;
    } else if (arg0 === 2) {
      c8 = 3;
      return { value, done: true };
    } else {
      closure_131_10 = value;
      if ((function shouldConvertBase64ToJPG(str) {
        let isIOSResult = closure_1_0(1115).isIOS();
        if (isIOSResult) {
          isIOSResult = null != str.match(closure_1_21);
        }
        return isIOSResult;
      })(closure_131_0)) {
        c7 = 3;
        c8 = 1;
        return { value: closure_132_27("convertBase64ToJPEG", closure_131_0.replace(closure_132_21, ""), { compressionQuality: closure_131_3 }), done: false };
      } else if ((function shouldConvertBase64ToGIF(str) {
        let isIOSResult = closure_1_0(1115).isIOS();
        if (isIOSResult) {
          isIOSResult = null != str.match(closure_1_22);
        }
        return isIOSResult;
      })(closure_131_0)) {
        c7 = 4;
        c8 = 1;
        return { value: closure_132_27("convertBase64ToGIF", closure_131_0.replace(closure_132_22, "")), done: false };
      } else if (closure_131_4) {
        c7 = 6;
        c8 = 1;
        return {
          value: (function shouldConvertToPNG() {
                  const self = this;
                  const apply = closure_1_31.apply;
                  if (typeof apply === "unknown") {
                    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                  } else {
                    applyArgumentsResult = apply(self, arguments);
                  }
                  return applyArgumentsResult;
                })(closure_131_0, closure_131_1),
          done: false
        };
      }
    }
  } else if (3 === tmp7) {
    if (arg0 === 1) {
      c8 = 3;
      throw value;
    } else if (arg0 === 2) {
      c8 = 3;
      return { value, done: true };
    } else {
      closure_131_11 = value;
      let tmp51 = null;
      if (closure_131_11) {
        tmp51 = { path: closure_131_11, encoderUsed: closure_132_0(closure_132_2[30]).ImageEncoder.NATIVE };
        { path: closure_131_11, encoderUsed: closure_132_0(closure_132_2[30]).ImageEncoder.NATIVE };
      }
      c8 = 3;
      return { value: tmp51, done: true };
    }
  } else if (4 === tmp7) {
    if (arg0 === 1) {
      c8 = 3;
      throw value;
    } else if (arg0 === 2) {
      c8 = 3;
      return { value, done: true };
    } else {
      closure_131_12 = value;
      let tmp47 = null;
      if (closure_131_12) {
        tmp47 = { path: closure_131_12 };
      }
      c8 = 3;
      return { value: tmp47, done: true };
    }
  } else if (5 === tmp7) {
    c5 = 0;
    closure_131_20 = closure_6;
    const _HermesInternal = HermesInternal;
    closure_132_20.error("getLosslessImageData failed, falling through to JPEG conversion: " + closure_131_20);
  } else if (6 === tmp7) {
    if (arg0 === 1) {
      c8 = 3;
      throw value;
    } else if (arg0 === 2) {
      c8 = 3;
      return { value, done: true };
    } else if (value) {
      c5 = 1;
      value = {};
      const MediaManager = closure_132_6.MediaManager;
      c7 = 7;
      c8 = 1;
      return { value: MediaManager.getLosslessImageData(closure_131_0), done: false };
    }
  } else if (7 === tmp7) {
    if (arg0 === 1) {
      c8 = 3;
      throw value;
    } else if (arg0 === 2) {
      c5 = 0;
      c8 = 3;
      let obj16 = { value, done: true };
      return obj16;
    } else {
      value.path = value;
      value.encoderUsed = closure_132_0(closure_132_2[30]).ImageEncoder.PASSTHROUGH;
      c5 = 0;
      c8 = 3;
      let obj17 = { value, done: true };
      return obj17;
    }
  } else if (8 === tmp7) {
    if (arg0 === 1) {
      c8 = 3;
      throw value;
    } else if (arg0 === 2) {
      c8 = 3;
      return { value, done: true };
    } else {
      closure_131_14 = value;
      let path;
      if (closure_131_14 != null) {
        path = closure_131_14.path;
      }
      closure_1 = path;
      if (path == null) {
        closure_1 = closure_131_14;
      }
      closure_131_15 = closure_1;
      let encoderUsed;
      if (closure_131_14 != null) {
        encoderUsed = closure_131_14.encoderUsed;
      }
      closure_131_16 = encoderUsed;
      let outputWidth;
      if (closure_131_14 != null) {
        outputWidth = closure_131_14.outputWidth;
      }
      closure_131_17 = outputWidth;
      let outputHeight;
      if (closure_131_14 != null) {
        outputHeight = closure_131_14.outputHeight;
      }
      closure_131_18 = outputHeight;
      let tmp24 = null;
      if (closure_131_15) {
        tmp24 = { path: closure_131_15, encoderUsed: closure_131_16, outputWidth: closure_131_17, outputHeight: closure_131_18 };
      }
      c8 = 3;
      return { value: tmp24, done: true };
    }
  } else if (arg0 === 1) {
    c8 = 3;
    throw value;
  } else if (arg0 === 2) {
    c8 = 3;
    return { value, done: true };
  } else {
    closure_131_19 = value;
    let tmp10 = null;
    if (closure_131_19) {
      tmp10 = { path: closure_131_19 };
    }
    c8 = 3;
    return { value: tmp10, done: true };
  }
  obj16 = closure_132_0(closure_132_2[19]);
  closure_131_13 = obj16.shouldForceConvertToJPG(closure_131_0, closure_131_1, closure_131_10);
  if (!closure_131_13) {
    obj17 = closure_132_0(closure_132_2[19]);
    if (!obj17.shouldConvertToJPG(closure_131_0, closure_131_1, closure_131_2, closure_131_4, closure_131_7)) {
      if ((function shouldConvertToGifFilepath(str, str2) {
        const isIOSResult = closure_1_0(1115).isIOS();
        if (!isIOSResult) {
          return isIOSResult;
        } else {
          if (tmpResult.isPhotoKitAsset(str, str2)) {
            let match;
            if (str2 != null) {
              match = str2.match(/\.gif$/i);
            }
            let tmp7 = null != match;
          } else {
            tmp7 = null != str.match(/^assets-library:\/\/.+&ext=gif$/i);
          }
          tmpResult = closure_1_0(5159);
        }
      })(closure_131_0, closure_131_1)) {
        c7 = 9;
        c8 = 1;
        return { value: closure_132_27("convertToGIFFilePath", closure_131_0), done: false };
      } else {
        c8 = 3;
        return { value: null, done: true };
      }
    }
  }
  await closure_132_27("convertToJPEG", closure_131_0, { compressionQuality: closure_131_3, forceConvertToJPG: closure_131_13, useEnhancedConversion: closure_131_5, useJpegliEncoder: closure_131_6, targetWidth: closure_131_8, targetHeight: closure_131_9 });
  closure_4 = tmp2;
  ({ uri: closure_131_0, filename: closure_131_1, isLowQuality: closure_131_2, compressionQuality: closure_131_3, mobileLosslessImageEnabled: closure_131_4, useEnhancedConversion: closure_131_5, useJpegliEncoder: closure_131_6, allowOptimization: closure_131_7, targetWidth: closure_131_8, targetHeight: closure_131_9 } = closure_0);
  return "PX_16";
};
let closure_40 = async function _fetchVideoMetadata(arg0, value) {
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
      let warnResult = c7;
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
          closure_131_0 = closure_0;
          closure_131_1 = undefined;
          warnResult = isVideo(closure_0, closure_1);
          if (warnResult) {
            c6 = 1;
            c7 = 2;
            c8 = 1;
            const obj1 = { value: mediaManager("getVideoMetadata", tmp20), done: false };
            return obj1;
          }
          tmp20 = closure_0;
        }
      } else if (1 === warnResult) {
        c6 = 0;
        closure_131_2 = closure_5;
        const obj2 = { uri: closure_131_0, error: closure_131_2 };
        warnResult = closure_132_20.warn("Failed to fetch video metadata", obj2);
      } else if (arg0 === 1) {
        c8 = 3;
        throw value;
      } else if (arg0 === 2) {
        c6 = 0;
        c8 = 3;
        const obj3 = { value, done: true };
        return obj3;
      } else {
        closure_131_1 = value;
        let rotationDegrees = closure_131_1.rotationDegrees;
        if (rotationDegrees == null) {
          rotationDegrees = 0;
        }
        closure_131_1.rotationDegrees = rotationDegrees;
        c6 = 0;
        c8 = 3;
        obj = { value: closure_131_1, done: true };
        return obj;
      }
      c8 = 3;
    } catch (tmp24) {
      closure_5 = tmp24;
      if (tmp4 === c6) {
        c8 = tmp2;
        throw tmp24;
      } else {
        c7 = tmp;
      }
    }
  }
};
function getCaptionLabel(type, isVideo, playableDuration) {
  if (isVideo) {
    let str3 = "VIDEO";
    if (null != playableDuration.playableDuration) {
      str3 = utils_TimeUtils.getTimeFormat(playableDuration.playableDuration);
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
function getImageDimensionsIfMissing(uri, arg1, arg2, c1) {
  const self = this;
  const apply = closure_41.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_41 = async function _getImageDimensionsIfMissing(arg0, width, height, arg3) {
  closure_0 = arg0;
  closure_3 = arg3;
  c8 = 0;
  c9 = 0;
  c7 = 0;
  return (async (arg0, value, arg2, arg3) => {
    if (c9 === 2) {
      c9 = 3;
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
        c9 = 2;
        if (0 === c8) {
          if (arg0 === 1) {
            c9 = 3;
            throw value;
          } else if (arg0 === 2) {
            c9 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_5 = tmp3;
            closure_4 = tmp5;
            closure_132_0 = uri;
            closure_132_2 = undefined;
            closure_132_3 = undefined;
            let size = { width, height };
            closure_132_1 = size;
            if (null != width) {
              if (null != height) {
                c9 = 3;
                const obj1 = { value: size, done: true };
                return obj1;
              }
            }
            let obj4 = UploadUtils;
            const obj2 = { uri, overrideFilename };
            const file = obj4.getFile(obj2);
            closure_132_2 = file;
            if (!file.isImage) {
              if (!file.isVideo) {
                c9 = 3;
                const obj3 = { value: size, done: true };
                return obj3;
              }
            }
            c7 = 1;
            c8 = 2;
            c9 = 1;
            obj4 = {
              value: (function getImageDimensionByUri(arg0) {
                        closure_0 = arg0;
                        return new Promise((arg0, arg1) => {
                          closure_0 = arg0;
                          return size.getSize(closure_0, (width, height) => {
                            size = { width, height };
                            return closure_0(size);
                          }, arg1);
                        });
                      })(uri),
              done: false
            };
            return obj4;
          }
        } else if (1 === tmp8) {
          c7 = 0;
          closure_132_4 = closure_6;
          const _HermesInternal = HermesInternal;
          closure_133_20.warn("Unable to get width and height of media file: " + closure_132_0, closure_132_4);
          c9 = 3;
          const obj5 = { value: closure_132_1, done: true };
          return obj5;
        } else {
          if (2 === tmp8) {
            if (arg0 === 1) {
              c9 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 0;
              c9 = 3;
              const obj6 = { value, done: true };
              return obj6;
            } else {
              closure_132_3 = value;
              isVideo = closure_133_0(closure_133_2[13]).isIOS();
              if (isVideo) {
                isVideo = closure_132_2.isVideo;
              }
              if (isVideo) {
                isVideo = 0 === closure_132_3.width;
              }
              if (isVideo) {
                isVideo = 0 === closure_132_3.height;
              }
              if (isVideo) {
                const DCDFileManager = closure_133_6.DCDFileManager;
                c8 = 3;
                c9 = 1;
                const obj7 = { value: DCDFileManager.getVideoDimensions(closure_132_0), done: false };
                return obj7;
              } else {
                c7 = 0;
                c9 = 3;
              }
              const obj12 = closure_133_0(closure_133_2[13]);
            }
          } else if (arg0 === 1) {
            c9 = 3;
            throw value;
          } else if (arg0 !== 2) {
            closure_132_3 = value;
          }
          c7 = 0;
          c9 = 3;
          obj = { value, done: true };
          return obj;
        }
      } catch (tmp33) {
        closure_6 = tmp33;
        if (tmp4 === c7) {
          c9 = tmp2;
          throw tmp33;
        } else {
          c8 = tmp;
        }
      }
    }
  })();
};
function checkVideoEncodingSupport(arg0) {
  const self = this;
  const apply = closure_43.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_43 = async function _checkVideoEncodingSupport(arg0, value) {
  if (c6 === 2) {
    c6 = 3;
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
      c6 = 2;
      if (0 === c5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_2 = tmp3;
          closure_1 = tmp7;
          c4 = 1;
          MediaManager = MediaManager.MediaManager;
          const size = { width: null, height: null, frameRate: null };
          ({ targetWidth: obj4.width, targetHeight: obj4.height, frameRate: obj4.frameRate } = closure_0);
          c5 = 2;
          c6 = 1;
          const obj1 = { value: MediaManager.isVideoEncodingSupported(size), done: false };
          return obj1;
        }
      } else if (1 === tmp7) {
        c4 = 0;
        closure_129_0 = closure_3;
        closure_130_20.warn("Error checking video encoding support:", closure_129_0);
        c6 = 3;
        const obj2 = { value: { isSupported: true }, done: true };
        return obj2;
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 0;
        c6 = 3;
        const obj3 = { value, done: true };
        return obj3;
      } else {
        c4 = 0;
        c6 = 3;
        obj = { value, done: true };
        return obj;
      }
    } catch (tmp17) {
      closure_3 = tmp17;
      if (tmp4 === c4) {
        c6 = tmp2;
        throw tmp17;
      } else {
        c5 = tmp;
      }
    }
  }
};
function calculateImageQualityMetrics(arg0, arg1, arg2, arg3, arg4) {
  const self = this;
  const apply = closure_45.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_45 = async function _calculateImageQualityMetrics(arg0, value) {
  if (c9 === 2) {
    c9 = 3;
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
      c9 = 2;
      if (0 === c8) {
        if (arg0 === 1) {
          c9 = 3;
          throw value;
        } else if (arg0 === 2) {
          c9 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_5 = tmp3;
          closure_4 = tmp5;
          closure_132_0 = closure_0;
          closure_132_1 = closure_1;
          closure_132_2 = closure_2;
          closure_132_4 = undefined;
          let MediaManager2;
          closure_132_6 = undefined;
          closure_132_7 = undefined;
          closure_132_3 = {};
          if (closure_3) {
            c7 = 1;
            const MediaManager = _mod17.NativeModules.MediaManager;
            c8 = 2;
            c9 = 1;
            const obj1 = { value: MediaManager.getMediaOrigin(tmp75), done: false };
            return obj1;
          }
        }
      } else {
        if (1 === tmp8) {
          c7 = 0;
          closure_132_8 = closure_6;
          closure_133_20.warn("Failed to detect media origin", closure_132_8);
        } else if (2 === tmp8) {
          if (arg0 === 1) {
            c9 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 0;
            c9 = 3;
            const obj2 = { value, done: true };
            return obj2;
          } else {
            closure_132_4 = value;
            closure_132_3.origin = closure_132_4.source;
            c7 = 0;
          }
        } else {
          if (3 === tmp8) {
            c7 = 0;
            closure_132_9 = closure_6;
            closure_133_20.warn("Error in quality metrics calculation", closure_132_9);
          } else if (arg0 === 1) {
            c9 = 3;
            throw value;
          } else if (arg0 !== 2) {
            closure_132_7 = value;
            closure_132_3.psnr = closure_132_7.psnr;
            closure_132_3.ssim = closure_132_7.ssim;
            closure_132_3.psnrMeasurementLatencyMs = closure_132_7.psnrCalculationTimeMs;
            closure_132_3.ssimMeasurementLatencyMs = closure_132_7.ssimCalculationTimeMs;
            const _HermesInternal3 = HermesInternal;
            closure_133_20.log("Quality metrics calculated: PSNR=" + closure_132_7.psnr + "dB, SSIM=" + closure_132_7.ssim);
            c7 = 0;
          }
          c7 = 0;
          c9 = 3;
          obj = { value, done: true };
          return obj;
        }
        c9 = 3;
      }
      if (closure_132_2) {
        c7 = 2;
        MediaManager2 = closure_133_0(closure_133_2[2]).NativeModules.MediaManager;
        closure_132_6 = closure_132_1;
        if (closure_132_1.includes("://")) {
          c8 = 4;
          c9 = 1;
          const obj3 = { value: MediaManager2.calculateImageQualityMetrics(closure_132_0, closure_132_6), done: false };
          return obj3;
        } else {
          if (!closure_132_1.includes("/")) {
            if (!closure_132_1.includes("\\")) {
              const _HermesInternal = HermesInternal;
              if (closure_132_0.startsWith("ph://")) {
                let combined = concat(tmp42);
              } else {
                combined = concat(tmp42);
              }
            }
            closure_132_6 = combined;
          }
          const _HermesInternal2 = HermesInternal;
          combined = "file://" + closure_132_1;
        }
      }
    } catch (tmp53) {
      closure_6 = tmp53;
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
};
let closure_3 = ["filename"];
get_ActivityIndicator = fn(17);
({ NativeModules: metroRequire, Image: closure_7 } = get_ActivityIndicator);
let UnsyncedUserSettingsStore = fn(1185);
({ VideoCompressionQuality: closure_8, VideoQualitySettings: closure_9 } = UnsyncedUserSettingsStore);
const Constants = fn(1074);
({ Base64PNGPrefix: map1, Base64GIFPrefix } = Constants);
({ NetworkConnectionTypes: closure_15, CompressionQuality: closure_16, Base64WEBPPrefix: closure_17, Base64AVIFPrefix: closure_18, Base64JPEGPrefix } = Constants);
const NativePermissionTypes = fn(4770).NativePermissionTypes;
let closure_20 = new LoggerDefault("UploadUtils.tsx");
const regExp = new RegExp("^" + Base64JPEGPrefix, "i");
const regExp1 = new RegExp("^" + Base64GIFPrefix, "i");
const Canceled = "Canceled";
let size = fn(2);
let result = size.fileFinishedImporting("utils/native/UploadUtils.tsx");

export default { getFileInfo, isVideo, getType, openImagePickerUnhandled, openImagePicker, getCaptionLabel, getImageDimensionsIfMissing, getAppDir };
export const base64JPEGRegex = regExp;
export const base64GIFRegex = regExp1;
export { openImagePicker };
export { mediaManager };
export const getImageCompressionQuality = function getImageCompressionQuality() {
  if (UnsyncedUserSettingsStore.dataSavingMode) {
    if (NetworkStore.getType() === constants3.CELLULAR) {
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
export const cancelGetFileInfo = function cancelGetFileInfo(item) {
  item = item.item;
  return new Promise((fn, arg1) => {
    if (obj.isAndroid()) {
      if (item.platform === Upload.UploadPlatform.REACT_NATIVE) {
        mediaManager("cancelResolveToMediaFilePath", item.uri).then(fn, arg1);
        const promise = mediaManager("cancelResolveToMediaFilePath", item.uri);
      }
    }
    fn();
  });
};
export const getFileSize = function getFileSize(uri) {
  let replaced = uri;
  if (obj.isIOS()) {
    replaced = uri.replace(/file:\/\//, "");
  }
  obj = PlatformUtils;
  if (tmpResult.isAndroid()) {
    if (null == NativeFileModuleDefault) {
      let rejectResult = Promise.reject("RTNFileManager doesn't exist?");
    } else {
      rejectResult = tmp5(1152).getSize(replaced);
      const tmp5Result = tmp5(1152);
    }
    tmp5 = importDefault;
  } else {
    const DCDFileManager = timestampProducer.DCDFileManager;
    return DCDFileManager.getSize(replaced);
  }
};
export { getAppDir };
export { getFileInfo };
export const shouldConvertToJPG = fn(5159).shouldConvertToJPG;
export const shouldForceConvertToJPG = fn(5159).shouldForceConvertToJPG;
export const shouldResolveToMediaFilePath = function shouldResolveToMediaFilePath(str) {
  let isAndroidResult = PlatformUtils.isAndroid();
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
export { checkVideoEncodingSupport };
export { calculateImageQualityMetrics };
export const getFileFromUploadItem = function getFileFromUploadItem(result1) {
  const obj = { uri: result1.uri, overrideFilename: result1.filename, overrideType: result1.mimeType };
  return obj.getFile(obj);
};