// === Module 7287: utils/UploadUtils ===

// Module 7287 (utils/UploadUtils)
import LoggerDefault from "Logger" /* 3 */;
import react_native from "react-native" /* 17 */;
import react_nativeDefault from "react-native" /* 1162 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import react_nativeDefault2 from "react-native" /* 1432 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4534 */;
import DeviceUtils from "DeviceUtils" /* 4872 */;
import NativePermissionConstants from "NativePermissionConstants" /* 5105 */;
import UploadUtils from "UploadUtils" /* 7256 */;
import UploadPlatform from "UploadPlatform" /* 7260 */;
import FileUtils from "FileUtils" /* 7283 */;
import NativePermissionUtilsDefault from "NativePermissionUtils" /* 7288 */;
import ImageConversionDecision from "ImageConversionDecision" /* 7305 */;
import VideoUploadUtils from "VideoUploadUtils" /* 7307 */;
import UploadLimits from "UploadLimits" /* 7308 */;
import utils_TimeUtils from "utils/TimeUtils" /* 7315 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import UnsyncedUserSettingsStore_mod from "UnsyncedUserSettingsStore" /* 1195 */;
import NetworkStore from "NetworkStore" /* 4945 */;
import UserStore from "UserStore" /* 1377 */;
import Constants from "Constants" /* 1085 */;
import size_mod from "module_2" /* 2 */;

let c13, catchPromise, closure_11;

let Base64GIFPrefix;
let Base64JPEGPrefix;
let closure_12;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let metroImportAll;
let metroImportDefault;
function openImagePickerUnhandled() {
  return obj(...arguments);
}
let obj = function _openImagePickerUnhandled() {
  obj = _asyncToGenerator(async (arg0) => {
    const styles = arg0;
    let c11 = 0;
    let c12 = 0;
    let c9 = 0;
    return (async function(arg0) {
      let logger;
      let obj35;
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
          let width;
          let height;
          let cleanPickedImage;
          c12 = 2;
          switch (c11) {
            case 0:
            {
              if (arg0 === 1) {
                c12 = 3;
                throw value;
              } else if (arg0 === 2) {
                c12 = 3;
                return { value, done: true };
              } else {
                closure_6 = tmp;
                width = undefined;
                height = undefined;
                obj13 = undefined;
                obj11 = undefined;
                catchPromise = undefined;
                obj9 = undefined;
                cleanPickedImage = function cleanPickedImage() {
                  let uri;
                  obj = styles(obj22[13]);
                  if (obj.isIOS()) {
                    const nextPromise = catchPromise.then(() => {
                      obj = catchPromise(width[10]);
                      const str = uri.uri;
                      return obj.cleanSingle(decodeURIComponent(str.replace(/^file:\/\//, "")));
                    });
                    catchPromise = nextPromise.catch((error) => logger.warn("Failed to remove picked image", error));
                  }
                };
                c11 = 1;
                c12 = 1;
                const obj4 = { value: obj35.requestPermission(constants.PHOTOS), done: false };
                obj35 = NativePermissionUtilsDefault;
                return obj4;
              }
              break;
            }
            case 1:
            {
              if (arg0 === 1) {
                c12 = 3;
                throw value;
              } else if (arg0 === 2) {
                c12 = 3;
                return { value, done: true };
              } else if (value) {
                catchPromise = "size" in styles;
                size = { width: null, height: null };
                if (catchPromise) {
                  size.width = styles.size;
                  size.height = styles.size;
                  catchPromise = size;
                } else {
                  size.width = styles.width;
                  size.height = styles.height;
                  catchPromise = size;
                }
                width = catchPromise.width;
                height = catchPromise.height;
                catchPromise = this;
                let self2 = this;
                c11 = 2;
                c12 = 1;
                const obj6 = {
                  value: new Promise((arg0, arg1) => {
                              let closure_0 = arg0;
                              let closure_1 = arg1;
                              obj = closure_1(closure_2[10]);
                              obj.launchImageLibrary({ mediaType: "photo", includeBase64: true, disableNewIOSPicker: true }, function(assets) {
                                let first = null;
                                if (null != assets.assets) {
                                  first = null;
                                  if (assets.assets.length > 0) {
                                    first = assets.assets[0];
                                  }
                                }
                                if (assets.didCancel) {
                                  const _Error2 = Error;
                                  const self3 = this;
                                  const self4 = this;
                                  const error = new Error(closure_2_22);
                                  closure_1(error);
                                } else {
                                  if (null == assets.errorCode) {
                                    let uri;
                                    if (first != null) {
                                      uri = first.uri;
                                    }
                                    if (null != uri) {
                                      obj = { uri: null, base64: null };
                                      ({ uri: obj.uri, base64: obj.base64 } = first);
                                      closure_0(obj);
                                    }
                                  }
                                  const _Error = Error;
                                  const self = this;
                                  const self2 = this;
                                  const error1 = new Error(assets.errorMessage);
                                  closure_1(error1);
                                }
                              });
                            }),
                  done: false
                };
                return obj6;
              } else {
                let _Error = Error;
                catchPromise = this;
                let self = this;
                let str = "Missing permission";
                let error = new Error("Missing permission");
                throw error;
              }
              break;
            }
            case 2:
            {
              if (arg0 === 1) {
                c12 = 3;
                throw value;
              } else if (arg0 === 2) {
                c12 = 3;
                return { value, done: true };
              } else {
                obj13 = value;
                const obj8 = { uri: obj13.uri, i: "" };
                const obj32 = closure_134_0(closure_134_2[11]);
                obj11 = obj32.getFile(obj8);
                const obj34 = closure_134_1(closure_134_2[12]);
                const fromFileUriResult = obj34.fromFileUri(obj13.uri);
                catchPromise = fromFileUriResult.catch(() => null);
                if (null != obj13.base64) {
                  catchPromise = closure_134_0(closure_134_2[13]);
                  if (catchPromise.isAndroid()) {
                    const base64 = obj13.base64;
                    catchPromise = base64.startsWith("UklGR");
                    if (catchPromise) {
                      obj9 = { base64: closure_134_16 + obj13.base64, mimeType: "image/webp" };
                      c11 = 3;
                      c12 = 1;
                      return { value: catchPromise, done: false };
                    } else {
                      const base641 = obj13.base64;
                      catchPromise = base641.indexOf("ZnR5cA==");
                      if (4 === catchPromise) {
                        const base642 = obj13.base64;
                        catchPromise = base642.indexOf("YXZpZg==");
                        if (8 !== catchPromise) {
                          const base643 = obj13.base64;
                          catchPromise = base643.indexOf("YXZpcw==");
                        }
                        obj11 = { base64: closure_134_17 + obj13.base64, mimeType: "image/avif" };
                        c11 = 4;
                        c12 = 1;
                        return { value: catchPromise, done: false };
                      }
                    }
                  }
                }
                catchPromise = obj11.type;
                if ("image/gif" === catchPromise) {
                  cleanPickedImage();
                  obj13 = { base64: closure_134_13 + obj13.base64, mimeType: "image/gif" };
                  c11 = 5;
                  c12 = 1;
                  return { value: catchPromise, done: false };
                } else {
                  c9 = 2;
                  catchPromise = { uri: obj13.uri, width, height, includeBase64: true, mimeType: type };
                  const preferredMimeType = styles.preferredMimeType;
                  type = preferredMimeType;
                  const launchCropper = closure_134_1(closure_134_2[10]).launchCropper;
                  closure_134_1(closure_134_2[10]);
                  if (preferredMimeType == null) {
                    type = obj11.type;
                  }
                  c11 = 8;
                  c12 = 1;
                  const obj15 = { value: launchCropper(catchPromise), done: false };
                  return obj15;
                }
              }
              break;
            }
            case 3:
            {
              if (arg0 === 1) {
                c12 = 3;
                throw value;
              } else if (arg0 === 2) {
                c12 = 3;
                return { value, done: true };
              } else {
                obj9.originalMd5 = value;
                c12 = 3;
                return { value: obj9, done: true };
              }
              break;
            }
            case 4:
            {
              if (arg0 === 1) {
                c12 = 3;
                throw value;
              } else if (arg0 === 2) {
                c12 = 3;
                return { value, done: true };
              } else {
                obj11.originalMd5 = value;
                c12 = 3;
                return { value: obj11, done: true };
              }
              break;
            }
            case 5:
            {
              if (arg0 === 1) {
                c12 = 3;
                throw value;
              } else if (arg0 === 2) {
                c12 = 3;
                return { value, done: true };
              } else {
                obj13.originalMd5 = value;
                c12 = 3;
                return { value: obj13, done: true };
              }
              break;
            }
            case 6:
            {
              c9 = 0;
              catchPromise = cleanPickedImage();
              throw closure_10;
            }
            case 7:
            {
              catchPromise = closure_10;
              c9 = 1;
              let closure_9 = closure_10;
              if ("E_PICKER_CANCELLED" === closure_9.code) {
                throw closure_9;
              } else {
                obj22 = { base64: closure_134_12 + obj13.base64, mimeType: obj11.type, errorStr: closure_9.message };
                c11 = 10;
                c12 = 1;
                return { value: catchPromise, done: false };
              }
              break;
            }
            case 8:
            {
              if (arg0 === 1) {
                c12 = 3;
                throw value;
              } else if (arg0 === 2) {
                c9 = 0;
                cleanPickedImage();
                c12 = 3;
                return { value, done: true };
              } else {
                obj9 = value;
                const obj30 = closure_134_1(closure_134_2[10]);
                const cleanSingleResult = obj30.cleanSingle(obj9.path);
                cleanSingleResult.catch((error) => logger.warn("Failed to remove cropped image", error));
                obj25 = { base64: "data:" + obj9.mime + ";base64," + obj9.data, mimeType: obj9.mime };
                const _HermesInternal = HermesInternal;
                c11 = 9;
                c12 = 1;
                return { value: catchPromise, done: false };
              }
              break;
            }
            case 9:
            {
              if (arg0 === 1) {
                c12 = 3;
                throw value;
              } else if (arg0 === 2) {
                c9 = 0;
                cleanPickedImage();
                c12 = 3;
                return { value, done: true };
              } else {
                obj25.originalMd5 = value;
                c9 = 0;
                cleanPickedImage();
                c12 = 3;
                obj = { value: obj25, done: true };
                return obj;
              }
              break;
            }
            default:
            {
              if (arg0 === 1) {
                c12 = 3;
                throw value;
              } else if (arg0 === 2) {
                c9 = 0;
                cleanPickedImage();
                c12 = 3;
                return { value, done: true };
              } else {
                obj22.originalMd5 = value;
                c9 = 0;
                cleanPickedImage();
                c12 = 3;
                return { value: obj22, done: true };
              }
              break;
            }
          }
        } catch (tmp80) {
          closure_10 = tmp80;
          if (0 === c9) {
            c12 = 3;
            throw tmp80;
          } else if (1 === tmp82) {
            c11 = 6;
          } else {
            c11 = 7;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
function openImagePicker() {
  return obj(...arguments);
}
obj = function _openImagePicker() {
  obj = _asyncToGenerator(async (arg0) => {
    let closure_2;
    let obj10;
    let value;
    let closure_0 = arg0;
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c4;
      try {
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            value = undefined;
            c5 = 1;
            c6 = 1;
            const obj5 = { value: obj10.requestPermission(constants.PHOTOS), done: false };
            obj10 = NativePermissionUtilsDefault;
            return obj5;
          }
        } else if (1 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else if (value) {
            c4 = 1;
            c5 = 3;
            c6 = 1;
            const obj7 = { value: closure_130_23(closure_0), done: false };
            return obj7;
          } else {
            c6 = 3;
            const obj8 = { value: { errorStr: "Missing permission" }, done: true };
            return obj8;
          }
        } else if (2 === c5) {
          c4 = 0;
          if ("E_PICKER_CANCELLED" !== closure_3.code) {
            let obj9;
            if (closure_3.message !== closure_130_22) {
              if ("E_CROPPER_IMAGE_NOT_FOUND" === closure_3.code) {
                const presentFailedToast2 = closure_130_0(closure_130_2[14]).presentFailedToast;
                const tmp31 = closure_130_0(closure_130_2[14]);
                const intl2 = closure_130_0(closure_130_2[15]).intl;
                presentFailedToast2(intl2.string(closure_130_0(closure_130_2[15]).t.TTzyzW));
                obj9 = { errorStr: "No select photo access" };
              } else {
                const obj4 = closure_130_0(closure_130_2[14]);
                obj4.presentFailedToast(closure_3.message);
                obj9 = { errorStr: closure_3.message };
              }
            }
            c6 = 3;
            const obj11 = { value: obj9, done: true };
            return obj11;
          }
          obj9 = { errorStr: "Cancelled" };
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c6 = 3;
          const obj12 = { value, done: true };
          return obj12;
        } else {
          if (null != value.errorStr) {
            const presentFailedToast = closure_130_0(closure_130_2[14]).presentFailedToast;
            const tmp9 = closure_130_0(closure_130_2[14]);
            const intl = closure_130_0(closure_130_2[15]).intl;
            obj = { reason: value.errorStr };
            presentFailedToast(intl.formatToPlainString(closure_130_0(closure_130_2[15]).t.Ex162J, obj));
          }
          c4 = 0;
          c6 = 3;
          const obj13 = { value, done: true };
          return obj13;
        }
      } catch (tmp45) {
        closure_3 = tmp45;
        if (0 === c4) {
          c6 = 3;
          throw tmp45;
        } else {
          c5 = 2;
        }
      }
    }
  });
  return obj(...arguments);
};
function mediaManager() {
  return obj(...arguments);
}
obj = function _mediaManager() {
  obj = _asyncToGenerator(async (arg0) => {
    let applyResult;
    let closure_0 = arg0;
    let closure_1 = [...arguments].slice();
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    const iter = (async (arg0) => {
      if (c7 === 2) {
        c7 = 3;
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
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            } else {
              closure_3 = tmp;
              c6 = 1;
              c7 = 1;
              return { value: "Reflect", done: true };
            }
          } else if (1 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            } else {
              c5 = 1;
              c6 = 3;
              c7 = 1;
              const obj5 = { value: closure_0.apply(closure_131_1(closure_131_2[16]), closure_1), done: false };
              return obj5;
            }
          } else if (2 === c6) {
            c5 = 0;
            let closure_2 = closure_4;
            closure_131_19.warn(closure_2);
            c7 = 3;
            return { value: "IconComponent", done: null };
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            c7 = 3;
            return { value, done: true };
          } else {
            c5 = 0;
            c7 = 3;
            return { value, done: true };
          }
        } catch (tmp21) {
          closure_4 = tmp21;
          if (0 === c5) {
            c7 = 3;
            throw tmp21;
          } else {
            c6 = 2;
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  return obj(...arguments);
};
function getVideoQuality() {
  let LOW;
  if (UnsyncedUserSettingsStore.dataSavingMode) {
    if (NetworkStore.getType() === constants3.CELLULAR) {
      return metroImportDefault.LOW;
    }
  }
  const videoUploadQuality = UnsyncedUserSettingsStore.videoUploadQuality;
  const currentUser = UserStore.getCurrentUser();
  const DATA_SAVER = metroImportAll.DATA_SAVER;
  obj = PremiumUtilsDefault;
  if (obj.canUseHighVideoUploadQuality(currentUser)) {
    let MEDIUM;
    if (DATA_SAVER === videoUploadQuality) {
      MEDIUM = metroImportDefault.LOW;
    } else if (metroImportAll.STANDARD === videoUploadQuality) {
      MEDIUM = metroImportDefault.HIGH;
    } else if (metroImportAll.BEST === videoUploadQuality) {
      MEDIUM = metroImportDefault.VERY_HIGH;
    } else {
      MEDIUM = metroImportDefault.MEDIUM;
    }
    LOW = MEDIUM;
  } else if (DATA_SAVER === videoUploadQuality) {
    LOW = metroImportDefault.LOW;
  } else if (metroImportAll.STANDARD === videoUploadQuality) {
    LOW = metroImportDefault.MEDIUM;
  } else if (metroImportAll.BEST === videoUploadQuality) {
    LOW = metroImportDefault.HIGH;
  } else {
    LOW = metroImportDefault.LOW;
  }
  return LOW;
}
function getAppDir() {
  obj = PlatformUtils;
  const isAndroidResult = obj.isAndroid();
  const obj2 = react_nativeDefault;
  if (isAndroidResult) {
    if (null == obj2) {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error("RTNFileManager doesn't exist?");
      throw error;
    } else {
      const tmp3Result = react_nativeDefault;
      const str4 = tmp3Result.getConstants().CacheDirPath;
      return str4.replace(/cache$/, "");
    }
  } else {
    const str = obj2.getConstants().DocumentsDirPath;
    return "/private" + str.replace(/Documents$/, "");
  }
}
function getFileInfo(c1, arg1) {
  let allowOptimization;
  let description;
  let filename;
  let item;
  let mimeType;
  let mimeType2;
  let originalUri;
  let spoiler;
  function processVideoUpload(arg0) {
    return obj(...arguments);
  }
  function processImageOrFileUpload(size) {
    return obj(...arguments);
  }
  ({ item, spoiler, description } = c1);
  let str = arg1;
  ({ mimeType, allowOptimization } = c1);
  if (arg1 === undefined) {
    str = "";
  }
  if (item.platform !== UploadPlatform.UploadPlatform.REACT_NATIVE) {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("Try to get file info for unsupported upload item");
    throw error;
  } else {
    let tmp3;
    ({ originalUri, filename, mimeType: mimeType2 } = item);
    if (mimeType2 == null) {
      mimeType2 = mimeType;
    }
    obj = { uri: originalUri, overrideType: mimeType2 };
    const tmpResult = UploadUtils;
    if (tmpResult.getFile(obj).isVideo) {
      const obj2 = { originalUri, filename, mimeType: mimeType2, fileSize: item.size, spoiler, description, i: str };
      tmp3 = processVideoUpload(obj2);
    } else {
      size = { originalUri, filename, mimeType: mimeType2, spoiler, description, i: str, width: null, height: null, allowOptimization };
      ({ width: obj3.width, height: obj3.height } = item);
      tmp3 = processImageOrFileUpload(size);
    }
    return tmp3;
  }
}
obj = function _getPhotoKitDataUTI() {
  obj = _asyncToGenerator(async (arg0) => {
    let obj4;
    let value;
    let closure_0 = arg0;
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c5;
      try {
        c7 = 2;
        if (0 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_3 = tmp;
            let closure_2 = tmp4;
            const obj9 = PlatformUtils;
            if (obj9.isIOS()) {
              if (closure_0.startsWith("ph://")) {
                c5 = 1;
                c6 = 2;
                c7 = 1;
                const obj5 = { value: obj4.getImageContentType(closure_0), done: false };
                obj4 = react_nativeDefault2;
                return obj5;
              }
            }
            c7 = 3;
            return { value: "IconComponent", done: null };
          }
        } else if (1 === c6) {
          c5 = 0;
          closure_0 = closure_4;
          const _HermesInternal = HermesInternal;
          closure_131_19.warn("getImageContentType failed: " + closure_0);
          c7 = 3;
          const obj6 = { value: undefined, done: true };
          return obj6;
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 0;
          c7 = 3;
          const obj7 = { value, done: true };
          return obj7;
        } else {
          if (value == null) {
            value = undefined;
          }
          c5 = 0;
          c7 = 3;
          obj = { value, done: true };
          return obj;
        }
      } catch (tmp13) {
        closure_4 = tmp13;
        if (0 === c5) {
          c7 = 3;
          throw tmp13;
        } else {
          c6 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
obj = function _shouldConvertToPNG() {
  obj = _asyncToGenerator(async (arg0, arg1) => {
    let obj4;
    let closure_0 = arg0;
    let closure_1 = arg1;
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c5;
      try {
        c7 = 2;
        if (0 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_3 = tmp;
            let closure_2 = tmp4;
            const obj8 = PlatformUtils;
            if (obj8.isIOS()) {
              const tmp22Result = ImageConversionDecision;
              if (tmp22Result.isPhotoKitAsset(closure_0, closure_1)) {
                let match;
                if (closure_1 != null) {
                  match = closure_1.match(/\.png$/i);
                }
                if (null == match) {
                  c7 = 3;
                  return { value: false, done: true };
                }
              } else if (null == closure_0.match(/^(assets-library|file):\/\/.+(&ext=|\.)png$/i)) {
                c7 = 3;
                return { value: false, done: true };
              }
              c5 = 1;
              c6 = 2;
              c7 = 1;
              const obj5 = { value: obj4.imageHasTransparency(closure_0), done: false };
              obj4 = react_nativeDefault2;
              return obj5;
            } else {
              c7 = 3;
              return { value: false, done: true };
            }
          }
        } else if (1 === c6) {
          c5 = 0;
          closure_0 = closure_4;
          const _HermesInternal = HermesInternal;
          closure_131_19.error("shouldConvertToPNG: imageHasTransparency failed: " + closure_0);
          c7 = 3;
          return { value: false, done: true };
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 0;
          c7 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          c5 = 0;
          c7 = 3;
          obj = { value, done: true };
          return obj;
        }
      } catch (tmp14) {
        closure_4 = tmp14;
        if (0 === c5) {
          c7 = 3;
          throw tmp14;
        } else {
          c6 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
function isVideo(uri, overrideType) {
  obj = UploadUtils;
  const obj2 = { uri, overrideType };
  return obj.getFile(obj2).isVideo;
}
function isImage(uri, overrideType) {
  obj = UploadUtils;
  const obj2 = { uri, overrideType };
  return obj.getFile(obj2).isImage;
}
function getType(uri) {
  obj = UploadUtils;
  const obj2 = { uri };
  return obj.getFile(obj2).type;
}
function convertVideo(videoMetadata) {
  let compressionQuality;
  let isLowQuality;
  let result3;
  let videoQualitySetting;
  ({ uri: require, filename: importDefault, isLowQuality: dependencyMap, compressionQuality: closure_3, videoQualitySetting } = videoMetadata);
  videoMetadata = videoMetadata.videoMetadata;
  let c7;
  const fileSize = videoMetadata.fileSize;
  const VideoQualityTarget = VideoUploadUtils.VideoQualityTarget;
  const result = VideoQualityTarget.fromCompressionQuality(videoQualitySetting);
  let tmp4 = VideoUploadUtils;
  const canSkipVideoTranscode = tmp4.canSkipVideoTranscode;
  let tmp5 = UploadLimits;
  const getEffectiveUploadLimit = tmp5.getEffectiveUploadLimit;
  obj = FileUtils;
  const result1 = canSkipVideoTranscode(result, videoMetadata, fileSize, getEffectiveUploadLimit(obj.maxFileSize()));
  let obj2 = VideoUploadUtils;
  const result2 = obj2.calculateTargetDimensions(videoMetadata, result.targetResolution);
  let obj3 = VideoUploadUtils;
  let obj6 = { videoQuality: result, targetBitrate: result3 };
  result3 = obj3.calculateOptimalBitrate(videoMetadata, result, VideoUploadUtils.DEFAULT_VIDEO_ENCODING_CONFIG.bitrateFloor);
  const merged = Object.assign(VideoUploadUtils.DEFAULT_VIDEO_ENCODING_CONFIG);
  ({ width: obj4.targetWidth, height: obj4.targetHeight } = result2);
  let obj5 = PlatformUtils;
  if (obj5.isAndroid()) {
    let frameRate;
    let num = 34;
    const tmpResult = DeviceUtils;
    if (tmpResult.getSystemVersionMajor() > 34) {
      let _Math = Math;
      frameRate = Math.min(videoMetadata.frameRate, VideoUploadUtils.DEFAULT_VIDEO_ENCODING_CONFIG.frameRate);
    }
    obj6.frameRate = frameRate;
    obj6.skipVideoTranscode = result1;
    ({ isHDRContent: obj4.createHDR, rotationDegrees: obj4.rotationDegrees } = videoMetadata);
    let num2 = 0;
    c7 = 0;
    let tmp11 = globalThis;
    let self = this;
    let self2 = this;
    let promise = new Promise((arg0, arg1) => {
      let attempts;
      let logger;
      function findCompatibleConfig() {
        return obj(...arguments);
      }
      let closure_0 = arg0;
      let closure_1 = arg1;
      obj = function _findCompatibleConfig() {
        obj = _asyncToGenerator(async () => {
          let _undefined;
          let iter7;
          let value;
          if (c13 === 2) {
            c13 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else {
            if (tmp3 === 3) {
              if (arg0 === 1) {
                throw value;
              } else if (arg0 === 2) {
                const obj2 = { value, done: true };
                return obj2;
              } else {
                return { value: "IconComponent", done: null };
              }
            } else {
              let c10;
              try {
                let _loop;
                let iter;
                let next;
                let c0;
                let tmp30;
                let iter6;
                c13 = 2;
                const tmp4 = c12;
                if (0 === c12) {
                  if (arg0 === 1) {
                    c13 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c13 = 3;
                    const obj3 = { value, done: true };
                    return obj3;
                  } else {
                    let closure_8 = tmp;
                    _loop = function* _loop() {
                      let c3;
                      let closure_2;
                      yield closure_3_41(config);
                      let min2 = value;
                      if (min2.isSupported) {
                        return { v: true };
                      }
                      if (null != min2) {
                        if (null != min2.capabilities) {
                          if (null != min2.failures) {
                            if (0 !== min2.failures.length) {
                              let c1 = false;
                              const failures = min2.failures;
                              if (null != failures.find((type) => "codec_not_found" === type.type)) {
                                logger.error("No supported video encoder found");
                                const _Error3 = Error;
                                const self5 = this;
                                const self6 = this;
                                const error = new Error("No supported video encoder found");
                                tmp2(error);
                                let c4 = 3;
                                const obj7 = { value: { v: false }, done: true };
                                return obj7;
                              } else {
                                const failures1 = min2.failures;
                                if (null != failures1.find((type) => "resolution" === type.type || "resolution_alignment" === type.type)) {
                                  if (null != min2.capabilities.resolution) {
                                    if (0 !== config.targetHeight) {
                                      if (0 !== config.targetWidth) {
                                        const maxWidth = min2.capabilities.resolution.maxWidth;
                                        const maxHeight = min2.capabilities.resolution.maxHeight;
                                        let closure_4 = config.targetWidth / config.targetHeight;
                                        const _Math6 = Math;
                                        let targetWidth = Math.min(config.targetWidth, maxWidth);
                                        const _Math7 = Math;
                                        let targetHeight = Math.min(config.targetHeight, maxHeight);
                                        if (targetWidth !== config.targetWidth) {
                                          const _Math = Math;
                                          targetHeight = Math.round(targetWidth / closure_4);
                                        }
                                        if (targetHeight !== config.targetHeight) {
                                          const _Math2 = Math;
                                          targetWidth = Math.round(targetHeight * closure_4);
                                        }
                                        const str = "Missing video encoder block size";
                                        iter6(_undefined[25])(null != min2.capabilities.blockSize, "Missing video encoder block size");
                                        const blockSize = min2.capabilities.blockSize;
                                        const widthAlignment = blockSize.widthAlignment;
                                        const heightAlignment = blockSize.heightAlignment;
                                        const _Math3 = Math;
                                        targetWidth = Math.floor(targetWidth / widthAlignment) * widthAlignment;
                                        const _Math4 = Math;
                                        targetHeight = Math.floor(targetHeight / heightAlignment) * heightAlignment;
                                        const tmp36 = targetWidth === config.targetWidth && targetHeight === config.targetHeight;
                                        if (!tmp36) {
                                          config.targetWidth = targetWidth;
                                          config.targetHeight = targetHeight;
                                          c1 = true;
                                        }
                                      }
                                    }
                                    const _Error2 = Error;
                                    const self3 = this;
                                    const self4 = this;
                                    const error1 = new Error("Invalid video dimensions: width or height is 0");
                                    tmp2(error1);
                                    c4 = 3;
                                    const obj8 = { value: { v: false }, done: true };
                                    return obj8;
                                  }
                                }
                                const failures2 = min2.failures;
                                let message = failures2.find((type) => "frameRate" === type.type);
                                let frameRate = min2.capabilities.frameRate;
                                if (null != message) {
                                  let min;
                                  if (frameRate != null) {
                                    min = frameRate.min;
                                  }
                                  if (null != min) {
                                    let max;
                                    if (frameRate != null) {
                                      max = frameRate.max;
                                    }
                                    if (null != max) {
                                      frameRate = config.frameRate;
                                      message = message.message;
                                      if (message.includes("not supported at resolution")) {
                                        const items = [60, 30, 29.97, 24, 15];
                                        const sorted = items.sort((arg0, arg1) => arg1 - arg0);
                                        const found = sorted.find((item) => item < targetHeight.frameRate && item >= min.min);
                                        min2 = found;
                                        if (found == null) {
                                          min2 = frameRate.min;
                                        }
                                        frameRate = min2;
                                      } else {
                                        const _Math5 = Math;
                                        frameRate = Math.min(config.frameRate, frameRate.max);
                                      }
                                      if (frameRate !== config.frameRate) {
                                        config.frameRate = frameRate;
                                        c1 = true;
                                      }
                                    }
                                  }
                                }
                                if (c1) {
                                  closure_7 = closure_7 + 1;
                                  c4 = 3;
                                  return { value: "IconComponent", done: null };
                                } else {
                                  obj = { currentFailures: min2.failures, config, capabilities: min2.capabilities, attempt: closure_7 + 1 };
                                  logger.error("No adjustments possible for current failures", obj);
                                  const _Error = Error;
                                  const self = this;
                                  const self2 = this;
                                  const error2 = new Error("No adjustments possible for current failures");
                                  tmp2(error2);
                                  c4 = 3;
                                  const obj9 = { value: { v: false }, done: true };
                                  return obj9;
                                }
                              }
                            }
                          }
                        }
                      }
                      const obj10 = { config, attempt: closure_7 + 1 };
                      logger.warn("Unable to determine device capabilities or adjust parameters", obj10);
                      return 0;
                    };
                    iter = iter7;
                    if (iter7 < 4) {
                      const _loopResult = _loop();
                      iter7 = _loopResult[isArray.iterator]();
                      iter = HermesBuiltin.ensureObject("iterator is not an object");
                      next = iter7.next;
                      c0 = undefined;
                    }
                    c13 = 3;
                    return { value: false, done: true };
                  }
                } else {
                  if (1 === tmp4) {
                    c10 = 1;
                    if (arg0 === 1) {
                      c13 = 3;
                      throw value;
                    } else {
                      c0 = value;
                      if (arg0 === 2) {
                        c0 = value;
                        c10 = 0;
                        const method = HermesBuiltin.getMethod("return");
                        if (method === undefined) {
                          c13 = 3;
                          const obj4 = { value, done: true };
                          return obj4;
                        } else {
                          const iter5 = method(c0);
                          HermesBuiltin.ensureObject("iterator.return() did not return an object");
                          iter = iter5.done;
                          if (iter) {
                            c13 = 3;
                            const obj5 = { value: iter5.value, done: true };
                            return obj5;
                          } else {
                            c12 = 1;
                            c13 = 1;
                            return iter5;
                          }
                        }
                      } else {
                        c10 = 0;
                        tmp30 = value;
                      }
                    }
                  } else {
                    let tmp14;
                    if (2 === tmp4) {
                      c10 = 0;
                      const str8 = "throw";
                      iter = HermesBuiltin.getMethod("throw");
                      const tmp22 = closure_11;
                      if (iter === undefined) {
                        iter = HermesBuiltin.getMethod("return");
                        if (iter !== undefined) {
                          HermesBuiltin.ensureObject("iterator.return() did not return an object");
                        }
                        throw new TypeError("yield* delegate must have a .throw() method");
                      } else {
                        const iter4 = iter(tmp22);
                        const str9 = "iterator.throw() did not return an object";
                        HermesBuiltin.ensureObject("iterator.throw() did not return an object");
                        iter = iter4.done;
                        if (iter) {
                          iter6 = iter4;
                        } else {
                          c12 = 1;
                          c13 = 1;
                          return iter4;
                        }
                      }
                    } else {
                      let c2;
                      if (3 === tmp4) {
                        c10 = 2;
                        if (arg0 === 1) {
                          c13 = 3;
                          throw value;
                        } else {
                          c2 = value;
                          if (arg0 === 2) {
                            c2 = value;
                            c10 = 0;
                            const str6 = "return";
                            const method1 = HermesBuiltin.getMethod("return");
                            if (method1 === undefined) {
                              c13 = 3;
                              obj6 = { value, done: true };
                              return obj6;
                            } else {
                              const iter3 = method1(c2);
                              const str7 = "iterator.return() did not return an object";
                              HermesBuiltin.ensureObject("iterator.return() did not return an object");
                              iter = iter3.done;
                              if (iter) {
                                c13 = 3;
                                obj = { value: iter3.value, done: true };
                                return obj;
                              } else {
                                c12 = 3;
                                c13 = 1;
                                return iter3;
                              }
                            }
                          } else {
                            c10 = 0;
                            tmp14 = value;
                          }
                        }
                      } else {
                        c10 = 0;
                        let str = "throw";
                        iter = HermesBuiltin.getMethod("throw");
                        const tmp6 = closure_11;
                        if (iter === undefined) {
                          const str3 = "return";
                          iter = HermesBuiltin.getMethod("return");
                          if (iter !== undefined) {
                            const str4 = "iterator.return() did not return an object";
                            HermesBuiltin.ensureObject("iterator.return() did not return an object");
                          }
                          const str5 = "yield* delegate must have a .throw() method";
                          throw new TypeError("yield* delegate must have a .throw() method");
                        } else {
                          const iter2 = iter(tmp6);
                          const str2 = "iterator.throw() did not return an object";
                          HermesBuiltin.ensureObject("iterator.throw() did not return an object");
                          iter = iter2.done;
                          if (iter) {
                            iter = iter2;
                          } else {
                            c12 = 3;
                            c13 = 1;
                            return iter2;
                          }
                        }
                      }
                      iter = iter.value;
                      if (0 !== iter) {
                        const tmp42 = iter;
                        if (tmp42) {
                          c13 = 3;
                          let obj7 = { value: iter.v, done: true };
                          return obj7;
                        } else {
                          iter = iter7;
                          if (iter7 < 4) {
                            const tmp60 = _loop();
                            const iter8 = tmp60[isArray.iterator]();
                            HermesBuiltin.ensureObject("iterator is not an object");
                            next = iter8.next;
                            c2 = undefined;
                          }
                        }
                      }
                    }
                    iter = next(tmp14);
                    HermesBuiltin.ensureObject("iterator.next() did not return an object");
                    if (!iter.done) {
                      c12 = 3;
                      c13 = 1;
                      return iter;
                    }
                  }
                  value = iter6.value;
                  iter = value;
                }
                iter6 = next(tmp30);
                HermesBuiltin.ensureObject("iterator.next() did not return an object");
                iter = iter6.done;
                if (!iter) {
                  c12 = 1;
                  c13 = 1;
                  return iter6;
                }
              } catch (tmp51) {
                closure_11 = tmp51;
                if (0 === c10) {
                  c13 = 3;
                  throw tmp51;
                } else if (1 === tmp53) {
                  c12 = 2;
                } else {
                  c12 = 4;
                }
              }
            }
          }
        });
        return obj(...arguments);
      };
      function resolveWithConfig(path) {
        obj = { path, encodingConfig: obj6 };
        return closure_0(obj);
      }
      const promise = findCompatibleConfig();
      let nextPromise = promise.then(function(result) {
        let endsWithResult1;
        let tmp11;
        const tmp = result;
        if (tmp) {
          let nextPromise;
          const obj2 = PlatformUtils;
          const isAndroidResult = obj2.isAndroid() && null != require.match(/^content:\/\/.+$/i);
          if (isAndroidResult) {
            const obj3 = { encodingConfig: obj6, compressionQuality, isLowQuality: dependencyMap, videoQuality: videoQualitySetting, skipVideoTranscode: result1 };
            const promise4 = mediaManager(react_nativeDefault2.resolveToMediaFilePath, require, obj3);
            nextPromise = promise4.then(resolveWithConfig, closure_1);
          } else {
            const tmp12Result = PlatformUtils;
            let isIOSResult1 = tmp12Result.isIOS();
            if (isIOSResult1) {
              const tmp12Result7 = ImageConversionDecision;
              if (tmp12Result7.isPhotoKitAsset(require, importDefault)) {
                let match;
                if (importDefault != null) {
                  match = importDefault.match(/\.(mov|qt)$/i);
                }
                isVideo = null != match;
              } else {
                isVideo = null != require.match(/^assets-library:\/\/.+&ext=(mov|qt)$/i);
                if (isVideo) {
                  const obj4 = { uri: require, overrideType: "Array" };
                  const tmp12Result8 = UploadUtils;
                  isVideo = tmp12Result8.getFile(obj4).isVideo;
                }
              }
              isIOSResult1 = isVideo;
            }
            if (isIOSResult1) {
              const obj5 = { encodingConfig: obj6, videoQuality: videoQualitySetting, isMov: true, skipVideoTranscode: result1 };
              const promise3 = mediaManager(react_nativeDefault2.compressVideo, require, obj5);
              nextPromise = promise3.then(resolveWithConfig, closure_1);
            } else {
              const tmp12Result9 = PlatformUtils;
              let isIOSResult2 = tmp12Result9.isIOS();
              if (isIOSResult2) {
                let isVideo2;
                const tmp12Result10 = ImageConversionDecision;
                if (tmp12Result10.isPhotoKitAsset(require, importDefault)) {
                  let match1;
                  if (importDefault != null) {
                    match1 = importDefault.match(/\.mp4$/i);
                  }
                  isVideo2 = null != match1;
                } else {
                  isVideo2 = null != require.match(/^assets-library:\/\/.+&ext=mp4$/i);
                  if (isVideo2) {
                    obj6 = { uri: require, overrideType: "Array" };
                    const tmp12Result11 = UploadUtils;
                    isVideo2 = tmp12Result11.getFile(obj6).isVideo;
                  }
                }
                isIOSResult2 = isVideo2;
              }
              if (isIOSResult2) {
                const obj7 = { encodingConfig: obj6, videoQuality: videoQualitySetting, skipVideoTranscode: result1 };
                const promise2 = mediaManager(react_nativeDefault2.compressVideo, require, obj7);
                nextPromise = promise2.then(resolveWithConfig, closure_1);
              } else {
                const formatted = require.toLowerCase();
                const tmp12Result12 = PlatformUtils;
                let isIOSResult = tmp12Result12.isIOS() && require.startsWith("file");
                if (isIOSResult) {
                  isIOSResult = formatted.endsWith("mov") || formatted.endsWith("mp4") || formatted.endsWith("qt");
                  const endsWithResult = formatted.endsWith("mov") || formatted.endsWith("mp4") || formatted.endsWith("qt");
                }
                if (isIOSResult) {
                  const obj8 = { encodingConfig: obj6, videoQuality: videoQualitySetting, isMov: endsWithResult1, skipVideoTranscode: result1 };
                  const compressVideo = react_nativeDefault2.compressVideo;
                  const formatted1 = require.toLowerCase();
                  endsWithResult1 = formatted1.endsWith("mov");
                  if (!endsWithResult1) {
                    const formatted2 = require.toLowerCase();
                    endsWithResult1 = formatted2.endsWith("qt");
                  }
                  const tmp32Result = mediaManager(compressVideo, require, obj8);
                  nextPromise = tmp32Result.then(resolveWithConfig, closure_1);
                } else {
                  const obj9 = { uri: require, filename: importDefault };
                  logger.error("Unsupported video URI format", obj9);
                  const _Error2 = Error;
                  const _HermesInternal = HermesInternal;
                  const self3 = this;
                  const self4 = this;
                  const error = new Error("Unsupported video URI format: " + require);
                  closure_1(error);
                }
              }
            }
          }
          tmp11 = nextPromise;
        } else {
          obj = { finalConfig: obj6, attempts };
          logger.error("Could not find compatible encoding configuration after multiple attempts", obj);
          const _Error = Error;
          const self = this;
          const self2 = this;
          const error1 = new Error("Could not find compatible encoding configuration after multiple attempts");
          closure_1(error1);
        }
        return tmp11;
      });
      nextPromise.catch(arg1);
    });
    return promise;
  }
  frameRate = videoMetadata.frameRate;
}
function buildResolvedUpload(arg0) {
  return obj(...arguments);
}
obj = function _buildResolvedUpload() {
  obj = _asyncToGenerator(async (arg0) => {
    let closure_0 = arg0;
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
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
        let filename;
        let closure_2;
        c3 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_1 = tmp;
            const obj4 = { uri: null, i: null, overrideType: null, overrideFilename: null };
            ({ path: obj8.uri, i: obj8.i, mimeType: obj8.overrideType, filename: obj8.overrideFilename } = closure_0);
            const obj7 = UploadUtils;
            const file = obj7.getFile(obj4);
            filename = file.filename;
            closure_2 = _objectWithoutProperties(file, closure_2_3);
            closure_3 = {};
            isImage = closure_0.isImage && closure_0.path !== closure_0.originalUri;
            if (isImage) {
              c2 = 1;
              c3 = 1;
              const obj5 = { value: calculateImageQualityMetrics(closure_0.originalUri, closure_0.path, closure_0.filename, closure_0.attachmentQualityMetricsEnabled, closure_0.attachmentOriginDetectionEnabled), done: false };
              return obj5;
            }
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_3 = value;
        }
        const obj6 = { name: filename, spoiler: closure_0.spoiler, description: closure_0.description, imageCompressionQuality: closure_0.compressionQuality, imageEncoderType: closure_0.imageEncoderType, videoCompressionQuality: closure_0.videoQualitySetting, videoMetadata: closure_0.videoMetadata, encodingConfig: closure_0.encodingConfig, sourceWidth: closure_0.sourceImageDimensions.width, sourceHeight: closure_0.sourceImageDimensions.height, uploadedImageWidth: closure_0.uploadedImageWidth, uploadedImageHeight: closure_0.uploadedImageHeight, psnr: closure_3.psnr, ssim: closure_3.ssim, origin: closure_3.origin, psnrMeasurementLatencyMs: closure_3.psnrMeasurementLatencyMs, ssimMeasurementLatencyMs: closure_3.ssimMeasurementLatencyMs };
        const merged = Object.assign(closure_2);
        c3 = 3;
        const obj14 = { value: obj6, done: true };
        return obj14;
      } catch (tmp28) {
        c3 = 3;
        throw tmp28;
      }
    }
  });
  return obj(...arguments);
};
obj = function _processVideoUpload() {
  obj = _asyncToGenerator(async function(arg0) {
    let c0;
    let c1;
    let c2;
    let c3;
    let c4;
    let c5;
    let c6;
    let closure_6;
    let fileSize;
    let spoiler;
    function fetchVideoMetadata(c0, c2) {
      return closure_1_39(...arguments);
    }
    let closure_0 = arg0;
    if (spoiler === 2) {
      spoiler = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
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
        let originalUri;
        let filename;
        let mimeType;
        let description;
        let i;
        let videoQualitySetting;
        let dataSavingMode;
        let videoMetadata;
        let closure_10;
        let path;
        let encodingConfig;
        spoiler = 2;
        if (0 === fileSize) {
          if (arg0 === 1) {
            spoiler = 3;
            throw value;
          } else if (arg0 === 2) {
            spoiler = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_2 = tmp4;
            let closure_1 = tmp;
            originalUri = undefined;
            filename = undefined;
            mimeType = undefined;
            description = undefined;
            i = undefined;
            ({ originalUri: c0, filename: c1, mimeType: c2, fileSize: c3, spoiler: c4, description: c5, i: c6 } = closure_0);
            videoQualitySetting = undefined;
            dataSavingMode = undefined;
            videoMetadata = undefined;
            closure_10 = undefined;
            path = undefined;
            encodingConfig = undefined;
            fileSize = 1;
            spoiler = 1;
            return { value: "Reflect", done: true };
          }
        } else if (1 === fileSize) {
          if (arg0 === 1) {
            spoiler = 3;
            throw value;
          } else if (arg0 === 2) {
            spoiler = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            videoQualitySetting = closure_130_28();
            dataSavingMode = closure_130_9.dataSavingMode && closure_130_10.getType() === closure_130_14.CELLULAR;
            fileSize = 2;
            spoiler = 1;
            const obj5 = { value: fetchVideoMetadata(originalUri, mimeType), done: false };
            return obj5;
          }
        } else if (2 === fileSize) {
          if (arg0 === 1) {
            spoiler = 3;
            throw value;
          } else if (arg0 === 2) {
            spoiler = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            videoMetadata = value;
            if (null == videoMetadata) {
              const _Error3 = Error;
              const self5 = this;
              const self6 = this;
              const error = new Error("Video metadata is required for video conversion");
              throw error;
            } else {
              const obj11 = closure_130_0(closure_130_2[26]);
              if (obj11.getVideoFrameRateValidationExperimentConfig({ location: "upload_utils.process_video_upload" }).enableFrameRateValidation) {
                if (null != videoMetadata.frameRate) {
                  const _Number = Number;
                }
                const _Error2 = Error;
                const _HermesInternal = HermesInternal;
                const self3 = this;
                const self4 = this;
                const error1 = new Error("Invalid video frame rate: " + videoMetadata.frameRate);
                throw error1;
              }
              const obj7 = { uri: originalUri, filename, isLowQuality: dataSavingMode, compressionQuality: closure_130_15.LOW, videoQualitySetting, videoMetadata, fileSize };
              fileSize = 3;
              spoiler = 1;
              const obj8 = { value: closure_130_33(obj7), done: false };
              return obj8;
            }
          }
        } else if (arg0 === 1) {
          spoiler = 3;
          throw value;
        } else if (arg0 === 2) {
          spoiler = 3;
          const obj9 = { value, done: true };
          return obj9;
        } else {
          closure_10 = value;
          path = closure_10.path;
          encodingConfig = closure_10.encodingConfig;
          if (null == path) {
            const _Error = Error;
            const self = this;
            const self2 = this;
            const error2 = new Error("Failed to get video file path");
            throw error2;
          } else {
            const obj10 = { path, i, mimeType, filename, originalUri, spoiler, description, compressionQuality: closure_130_15.LOW, videoQualitySetting, videoMetadata, encodingConfig, sourceImageDimensions: {}, isImage: false };
            spoiler = 3;
            obj = { value: closure_130_34(obj10), done: true };
            return obj;
          }
        }
      } catch (tmp36) {
        spoiler = 3;
        throw tmp36;
      }
    }
  });
  return obj(...arguments);
};
obj = function _processImageOrFileUpload() {
  obj = _asyncToGenerator(async function(arg0) {
    let c0;
    let c1;
    let c2;
    let c3;
    let c4;
    let c5;
    let c6;
    let c7;
    let c8;
    let closure_5;
    let i;
    let width;
    function tryConvertImage(arg0) {
      return closure_1_38(...arguments);
    }
    function resolveFileUri(c0, compressionQuality, dataSavingMode, c15) {
      let flag = c8;
      if (c8 === undefined) {
        flag = true;
      }
      obj = closure_1_0(mimeType[13]);
      const isAndroidResult = obj.isAndroid() && null != c0.match(/^content:\/\/.+$/i);
      if (isAndroidResult) {
        const obj2 = { compressionQuality, isLowQuality: dataSavingMode, skipVideoTranscode: true, useOriginalIfSmaller, allowOptimization: flag };
        return closure_1_26(filename(mimeType[16]).resolveToMediaFilePath, c0, obj2);
      } else {
        return Promise.resolve(c0);
      }
    }
    let closure_0 = arg0;
    if (width === 2) {
      width = 3;
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
      try {
        let originalUri;
        let filename;
        let mimeType;
        let spoiler;
        let description;
        let height;
        let allowOptimization;
        let targetWidth;
        let targetHeight;
        let dataSavingMode;
        let obj5;
        let compressionQuality;
        let useOriginalIfSmaller;
        let useEnhancedConversion;
        let enabled;
        let enableQualityMetrics;
        let enableOriginDetection;
        let config;
        let useJpegliEncoder;
        let closure_23;
        let path;
        let encoderUsed;
        let closure_26;
        width = 2;
        const tmp4 = i;
        if (0 === i) {
          if (arg0 === 1) {
            width = 3;
            throw value;
          } else if (arg0 === 2) {
            width = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_4 = tmp4;
            closure_3 = tmp;
            originalUri = undefined;
            filename = undefined;
            mimeType = undefined;
            spoiler = undefined;
            description = undefined;
            height = undefined;
            allowOptimization = undefined;
            ({ originalUri: c0, filename: c1, mimeType: c2, spoiler: c3, description: c4, i: c5, width: c6, height: c7, allowOptimization: c8 } = closure_0);
            targetWidth = undefined;
            targetHeight = undefined;
            dataSavingMode = undefined;
            isImage = undefined;
            obj5 = undefined;
            compressionQuality = undefined;
            useOriginalIfSmaller = undefined;
            useEnhancedConversion = undefined;
            enabled = undefined;
            enableQualityMetrics = undefined;
            enableOriginDetection = undefined;
            config = undefined;
            useJpegliEncoder = undefined;
            closure_23 = undefined;
            path = undefined;
            encoderUsed = undefined;
            closure_26 = undefined;
            i = 1;
            width = 1;
            return { value: "Reflect", done: true };
          }
        } else if (1 === tmp4) {
          if (arg0 === 1) {
            width = 3;
            throw value;
          } else if (arg0 === 2) {
            width = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            dataSavingMode = closure_132_9.dataSavingMode && closure_132_10.getType() === closure_132_14.CELLULAR;
            isImage = closure_132_32(originalUri, mimeType);
            const tmp41 = isImage;
            if (tmp41) {
              size = { width, height };
              obj5 = size;
            } else {
              obj5 = {};
            }
            compressionQuality = closure_132_15.LOW;
            let flag = false;
            useOriginalIfSmaller = false;
            const tmp48 = isImage && !dataSavingMode;
            if (tmp48) {
              useOriginalIfSmaller = closure_132_0(closure_132_2[27]).ADAPTIVE_COMPRESSION_CONFIG.useOriginalIfSmaller;
              const obj7 = closure_132_0(closure_132_2[27]);
              compressionQuality = obj7.getAdaptiveImageCompressionQuality(obj5, closure_132_0(closure_132_2[27]).ADAPTIVE_COMPRESSION_CONFIG);
              const _HermesInternal = HermesInternal;
              closure_132_19.log("Got image compression quality: " + compressionQuality + " for " + originalUri + " with dimensions: " + width + "x" + height + " and useOriginalIfSmaller: " + useOriginalIfSmaller);
            }
            const obj8 = closure_132_0(closure_132_2[13]);
            const isIOSResult = obj8.isIOS() && originalUri.startsWith("ph://");
            useEnhancedConversion = isIOSResult;
            enabled = false;
            if (isImage) {
              const obj9 = closure_132_0(closure_132_2[28]);
              enabled = obj9.useMobileLosslessImageUploadV2Experiment({ location: "upload_utils.process_image_upload" });
              const obj10 = closure_132_0(closure_132_2[29]);
              enabled = obj10.isDiscordFrontendDevelopment() || enabled.enabled;
            }
            enableQualityMetrics = false;
            enableOriginDetection = false;
            const tmp86 = isImage;
            if (tmp86) {
              const AttachmentQualityMetricsExperiment = closure_132_0(closure_132_2[30]).AttachmentQualityMetricsExperiment;
              config = AttachmentQualityMetricsExperiment.getConfig({ location: "upload_utils.process_image_upload" });
              enableQualityMetrics = config.enableQualityMetrics;
              enableOriginDetection = config.enableOriginDetection;
            }
            useJpegliEncoder = false;
            const obj11 = closure_132_0(closure_132_2[13]);
            if (obj11.isIOS()) {
              const tmp97 = isImage;
              if (tmp97) {
                const obj12 = closure_132_0(closure_132_2[29]);
                if (obj12.isDiscordFrontendDevelopment()) {
                  useJpegliEncoder = true;
                } else {
                  const obj13 = closure_132_0(closure_132_2[31]);
                  useJpegliEncoder = obj13.getIosJpegliConfig({ location: "upload_utils.process_image_upload" }).useJpegliEncoder;
                }
                const tmp106 = dataSavingMode;
                if (!tmp106) {
                  if (null != obj5.width) {
                    if (null != obj5.height) {
                      const obj21 = closure_132_0(closure_132_2[32]);
                      if (obj21.getMobileImageEncodingLadderConfig({ location: "upload_utils.process_image_upload" }).useImageEncodingLadder) {
                        const ImageEncodingLadder = closure_132_0(closure_132_2[27]).ImageEncodingLadder;
                        const size1 = { width: obj5.width, height: obj5.height };
                        closure_23 = ImageEncodingLadder.selectEncodingConfig(size1);
                        useOriginalIfSmaller = true;
                        compressionQuality = closure_23.compressionQuality / 100;
                        targetWidth = closure_23.targetWidth;
                        targetHeight = closure_23.targetHeight;
                      }
                    }
                  }
                }
              }
            }
            const obj6 = { uri: originalUri, filename, isLowQuality: dataSavingMode, compressionQuality, mobileLosslessImageEnabled: enabled, useEnhancedConversion, useJpegliEncoder, allowOptimization, targetWidth, targetHeight };
            i = 2;
            width = 1;
            const obj14 = { value: tryConvertImage(obj6), done: false };
            return obj14;
          }
        } else {
          if (2 === tmp4) {
            if (arg0 === 1) {
              width = 3;
              throw value;
            } else if (arg0 === 2) {
              width = 3;
              const obj15 = { value, done: true };
              return obj15;
            } else {
              closure_26 = value;
              if (null != closure_26) {
                path = closure_26.path;
                encoderUsed = closure_26.encoderUsed;
              } else {
                i = 3;
                width = 1;
                const obj16 = { value: resolveFileUri(originalUri, compressionQuality, dataSavingMode, useOriginalIfSmaller, allowOptimization), done: false };
                return obj16;
              }
            }
          } else if (arg0 === 1) {
            width = 3;
            throw value;
          } else if (arg0 === 2) {
            width = 3;
            obj = { value, done: true };
            return obj;
          } else {
            path = value;
          }
          if (null == path) {
            const _Error = Error;
            const self = this;
            const self2 = this;
            const error = new Error("Failed to get image file path");
            throw error;
          } else {
            const obj17 = { path, i, mimeType, filename, originalUri, spoiler, description, compressionQuality, sourceImageDimensions: obj5, isImage, imageEncoderType: encoderUsed, uploadedImageWidth: width, uploadedImageHeight: height, attachmentQualityMetricsEnabled: enableQualityMetrics, attachmentOriginDetectionEnabled: enableOriginDetection };
            let outputWidth;
            if (closure_26 != null) {
              outputWidth = closure_26.outputWidth;
            }
            width = outputWidth;
            if (outputWidth == null) {
              width = obj5.width;
            }
            let outputHeight;
            if (closure_26 != null) {
              outputHeight = closure_26.outputHeight;
            }
            height = outputHeight;
            if (outputHeight == null) {
              height = obj5.height;
            }
            width = 3;
            const obj18 = { value: closure_132_34(obj17), done: true };
            return obj18;
          }
        }
      } catch (tmp129) {
        width = 3;
        throw tmp129;
      }
    }
  });
  return obj(...arguments);
};
obj = function _tryConvertImage() {
  obj = _asyncToGenerator(async (arg0) => {
    let obj17;
    let obj6;
    let useJpegliEncoder;
    let value;
    function getPhotoKitDataUTI() {
      return closure_1_29(...arguments);
    }
    function shouldConvertBase64ToJPG(c0) {
      obj = closure_1_0(closure_1_2[13]);
      const isIOSResult = obj.isIOS() && null != c0.match(closure_1_20);
      return isIOSResult;
    }
    function shouldConvertBase64ToGIF(c0) {
      obj = closure_1_0(closure_1_2[13]);
      const isIOSResult = obj.isIOS() && null != c0.match(closure_1_21);
      return isIOSResult;
    }
    function shouldConvertToPNG() {
      return closure_1_30(...arguments);
    }
    function shouldConvertToGifFilepath(c0, c1) {
      obj = closure_1_0(closure_1_2[13]);
      let isIOSResult = obj.isIOS();
      if (isIOSResult) {
        let tmp7;
        const tmpResult = closure_1_0(closure_1_2[20]);
        if (tmpResult.isPhotoKitAsset(c0, c1)) {
          let match;
          if (c1 != null) {
            match = c1.match(/\.gif$/i);
          }
          tmp7 = null != match;
        } else {
          tmp7 = null != c0.match(/^assets-library:\/\/.+&ext=gif$/i);
        }
        isIOSResult = tmp7;
      }
      return isIOSResult;
    }
    let closure_0 = arg0;
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c4;
      try {
        let c0;
        let c1;
        let c2;
        let compressionQuality;
        let useEnhancedConversion;
        let targetWidth;
        let targetHeight;
        let closure_10;
        let path2;
        let forceConvertToJPG;
        let closure_14;
        let path;
        let encoderUsed;
        let outputWidth;
        let outputHeight;
        let path3;
        c7 = 2;
        switch (useJpegliEncoder) {
          case 0:
          {
            let c3;
            let c5;
            let c6;
            let c7;
            let c8;
            let c9;
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_3 = tmp;
              let closure_2 = tmp4;
              c0 = undefined;
              c1 = undefined;
              c2 = undefined;
              compressionQuality = undefined;
              c4 = undefined;
              useEnhancedConversion = undefined;
              targetWidth = undefined;
              targetHeight = undefined;
              ({ uri: c0, filename: c1, isLowQuality: c2, compressionQuality: c3, mobileLosslessImageEnabled: c4, useEnhancedConversion: c5, useJpegliEncoder: c6, allowOptimization: c7, targetWidth: c8, targetHeight: c9 } = closure_0);
              closure_10 = undefined;
              path2 = undefined;
              forceConvertToJPG = undefined;
              closure_14 = undefined;
              path = undefined;
              encoderUsed = undefined;
              outputWidth = undefined;
              outputHeight = undefined;
              path3 = undefined;
              useJpegliEncoder = 1;
              c7 = 1;
              return { value: "Reflect", done: true };
            }
            break;
          }
          case 1:
          {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              useJpegliEncoder = 2;
              c7 = 1;
              const obj5 = { value: getPhotoKitDataUTI(c0), done: false };
              return obj5;
            }
            break;
          }
          case 2:
          {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              const obj7 = { value, done: true };
              return obj7;
            } else {
              closure_10 = value;
              if (shouldConvertBase64ToJPG(c0)) {
                const obj8 = { compressionQuality };
                useJpegliEncoder = 3;
                c7 = 1;
                const obj9 = { value: closure_131_26(closure_131_1(closure_131_2[16]).convertBase64ToJPEG, c0.replace(closure_131_20, ""), obj8), done: false };
                return obj9;
              } else if (shouldConvertBase64ToGIF(c0)) {
                useJpegliEncoder = 4;
                c7 = 1;
                const obj10 = { value: closure_131_26(closure_131_1(closure_131_2[16]).convertBase64ToGIF, c0.replace(closure_131_21, ""), null), done: false };
                return obj10;
              } else {
                const tmp62 = c4;
                if (tmp62) {
                  useJpegliEncoder = 6;
                  c7 = 1;
                  const obj11 = { value: shouldConvertToPNG(c0, c1), done: false };
                  return obj11;
                } else {
                  const obj15 = closure_131_0(closure_131_2[20]);
                  forceConvertToJPG = obj15.shouldForceConvertToJPG(c0, c1, closure_10);
                  const tmp70 = forceConvertToJPG;
                  if (!tmp70) {
                    const obj16 = closure_131_0(closure_131_2[20]);
                    if (!obj16.shouldConvertToJPG(c0, c1, c2, c4, c7)) {
                      if (shouldConvertToGifFilepath(c0, c1)) {
                        c4 = 2;
                        useJpegliEncoder = 10;
                        c7 = 1;
                        const obj12 = { value: obj17.convertToGIFFilePath(c0), done: false };
                        obj17 = closure_131_1(closure_131_2[16]);
                        return obj12;
                      } else {
                        c7 = 3;
                        return { value: null, done: true };
                      }
                    }
                  }
                  const obj13 = { compressionQuality, forceConvertToJPG, useEnhancedConversion, useJpegliEncoder, targetWidth, targetHeight };
                  useJpegliEncoder = 8;
                  c7 = 1;
                  const obj14 = { value: closure_131_26(closure_131_1(closure_131_2[16]).convertToJPEG, c0, obj13), done: false };
                  return obj14;
                }
              }
            }
            break;
          }
          case 3:
          {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              const obj18 = { value, done: true };
              return obj18;
            } else {
              path = value;
              let tmp54 = null;
              if (null != path) {
                tmp54 = null;
                if (path.length > 0) {
                  const obj19 = { path, encoderUsed: closure_131_0(closure_131_2[33]).ImageEncoder.NATIVE };
                  tmp54 = obj19;
                }
              }
              c7 = 3;
              const obj20 = { value: tmp54, done: true };
              return obj20;
            }
            break;
          }
          case 4:
          {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              const obj21 = { value, done: true };
              return obj21;
            } else {
              path2 = value;
              let tmp47 = null;
              if (null != path2) {
                tmp47 = null;
                if (path2.length > 0) {
                  const obj22 = { path: path2 };
                  tmp47 = obj22;
                }
              }
              c7 = 3;
              const obj23 = { value: tmp47, done: true };
              return obj23;
            }
            break;
          }
          case 5:
          {
            c4 = 0;
            let closure_20 = closure_5;
            const _HermesInternal = HermesInternal;
            closure_131_19.error("getLosslessImageData failed, falling through to JPEG conversion: " + closure_20);
            break;
          }
          case 6:
          {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              const obj24 = { value, done: true };
              return obj24;
            } else if (value) {
              c4 = 1;
              value = {};
              useJpegliEncoder = 7;
              c7 = 1;
              const obj25 = { value: obj6.getLosslessImageData(c0), done: false };
              obj6 = closure_131_1(closure_131_2[16]);
              return obj25;
            }
            break;
          }
          case 7:
          {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 0;
              c7 = 3;
              const obj26 = { value, done: true };
              return obj26;
            } else {
              value.path = value;
              value.encoderUsed = closure_131_0(closure_131_2[33]).ImageEncoder.PASSTHROUGH;
              c4 = 0;
              c7 = 3;
              const obj27 = { value, done: true };
              return obj27;
            }
            break;
          }
          case 8:
          {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              const obj28 = { value, done: true };
              return obj28;
            } else {
              closure_14 = value;
              if (typeof closure_14 === "string") {
                path = closure_14;
              } else if (closure_14 != null) {
                path = closure_14.path;
              }
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
              let tmp20 = null;
              if (null != path) {
                tmp20 = null;
                if (path.length > 0) {
                  obj = { path, encoderUsed, outputWidth, outputHeight };
                  tmp20 = obj;
                }
              }
              c7 = 3;
              const obj29 = { value: tmp20, done: true };
              return obj29;
            }
            break;
          }
          case 9:
          {
            let tmp7 = closure_5;
            c4 = 0;
            let closure_21 = closure_5;
            closure_131_19.warn(closure_21);
            break;
          }
          default:
          {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 0;
              c7 = 3;
              const obj30 = { value, done: true };
              return obj30;
            } else {
              path3 = value;
              let tmp120 = null;
              if (null != path3) {
                tmp120 = null;
                if (path3.length > 0) {
                  const obj31 = { path: path3 };
                  tmp120 = obj31;
                }
              }
              c4 = 0;
              c7 = 3;
              const obj32 = { value: tmp120, done: true };
              return obj32;
            }
            break;
          }
        }
      } catch (tmp125) {
        closure_5 = tmp125;
        if (0 === c4) {
          c7 = 3;
          throw tmp125;
        } else if (1 === tmp127) {
          useJpegliEncoder = 5;
        } else {
          useJpegliEncoder = 9;
        }
      }
    }
  });
  return obj(...arguments);
};
obj = function _fetchVideoMetadata() {
  obj = _asyncToGenerator(async (uri, value) => {
    let c2;
    let c7 = 0;
    let c8 = 0;
    let c6 = 0;
    return (async (arg0, value) => {
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
          c8 = 2;
          if (0 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              return { value, done: true };
            } else {
              closure_4 = tmp;
              closure_3 = tmp4;
              value = undefined;
              if (isVideo(uri, value)) {
                c6 = 1;
                c7 = 2;
                c8 = 1;
                const obj4 = { value: mediaManager(react_nativeDefault2.getVideoMetadata, uri, null), done: false };
                return obj4;
              }
            }
          } else if (1 === c7) {
            c6 = 0;
            const error = closure_5;
            const obj5 = { uri, error };
            closure_132_19.warn("Failed to fetch video metadata", obj5);
          } else if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 0;
            c8 = 3;
            return { value, done: true };
          } else {
            let rotationDegrees = value.rotationDegrees;
            const tmp6 = value;
            if (rotationDegrees == null) {
              rotationDegrees = 0;
            }
            tmp6.rotationDegrees = rotationDegrees;
            c6 = 0;
            c8 = 3;
            return { value, done: true };
          }
          c8 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp21) {
          closure_5 = tmp21;
          if (0 === c6) {
            c8 = 3;
            throw tmp21;
          } else {
            c7 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
function getCaptionLabel(type, isVideo, playableDuration) {
  let str2;
  const tmp = isVideo;
  if (tmp) {
    let str3 = "VIDEO";
    if (null != playableDuration.playableDuration) {
      obj = utils_TimeUtils;
      str3 = obj.getTimeFormat(playableDuration.playableDuration);
    }
    str2 = str3;
  } else {
    str2 = null;
    if ("image/gif" === type) {
      str2 = "GIF";
    }
  }
  return str2;
}
function getImageDimensionsIfMissing(c0, c1, c2, c12) {
  return obj(...arguments);
}
obj = function _getImageDimensionsIfMissing() {
  obj = _asyncToGenerator(async (uri, width, height, value) => {
    let closure_6;
    let c8 = 0;
    let c9 = 0;
    let c7 = 0;
    return (async (arg0, value, arg2, arg3) => {
      let obj3;
      function getImageDimensionByUri(uri) {
        let closure_0 = uri;
        const promise = new Promise((arg0, arg1) => {
          let closure_0 = arg0;
          return size.getSize(closure_0, (width, height) => {
            size = { width, height };
            return closure_0(size);
          }, arg1);
        });
        return promise;
      }
      if (c9 === 2) {
        c9 = 3;
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
          let file;
          c9 = 2;
          if (0 === c8) {
            if (arg0 === 1) {
              c9 = 3;
              throw value;
            } else if (arg0 === 2) {
              c9 = 3;
              return { value, done: true };
            } else {
              closure_5 = tmp;
              file = undefined;
              value = undefined;
              size = { width, height };
              const tmp43 = value;
              if (null != width) {
                if (null != height) {
                  c9 = 3;
                  return { value: size, done: true };
                }
              }
              const obj6 = { uri, overrideFilename: tmp43 };
              const obj7 = UploadUtils;
              file = obj7.getFile(obj6);
              isImage = file.isImage;
              if (!isImage) {
                if (!file.isVideo) {
                  c9 = 3;
                  return { value: size, done: true };
                }
              }
              c7 = 1;
              c8 = 2;
              c9 = 1;
              const obj9 = { value: getImageDimensionByUri(uri), done: false };
              return obj9;
            }
          } else if (1 === c8) {
            c7 = 0;
            let closure_4 = size;
            const _HermesInternal = HermesInternal;
            closure_133_19.warn("Unable to get width and height of media file: " + uri, closure_4);
            c9 = 3;
            return { value: size, done: true };
          } else {
            if (2 === c8) {
              if (arg0 === 1) {
                c9 = 3;
                throw value;
              } else if (arg0 === 2) {
                c7 = 0;
                c9 = 3;
                return { value, done: true };
              } else {
                const obj14 = closure_133_0(closure_133_2[13]);
                isVideo = obj14.isIOS() && file.isVideo && 0 === value.width && 0 === value.height;
                if (isVideo) {
                  c8 = 3;
                  c9 = 1;
                  const obj12 = { value: obj3.getVideoDimensions(uri), done: false };
                  obj3 = closure_133_1(closure_133_2[19]);
                  return obj12;
                }
              }
            } else if (arg0 === 1) {
              c9 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 0;
              c9 = 3;
              return { value, done: true };
            }
            c7 = 0;
            c9 = 3;
            return { value, done: true };
          }
        } catch (tmp29) {
          size = tmp29;
          if (0 === c7) {
            c9 = 3;
            throw tmp29;
          } else {
            c8 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
function checkVideoEncodingSupport(arg0) {
  return obj(...arguments);
}
obj = function _checkVideoEncodingSupport() {
  obj = _asyncToGenerator(async (arg0) => {
    let obj4;
    let closure_0 = arg0;
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c4;
      try {
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_2 = tmp;
            let closure_1 = tmp4;
            c4 = 1;
            size = { width: null, height: null, frameRate: null };
            ({ targetWidth: obj5.width, targetHeight: obj5.height, frameRate: obj5.frameRate } = closure_0);
            c5 = 2;
            c6 = 1;
            const obj6 = { value: obj4.isVideoEncodingSupported(size), done: false };
            obj4 = react_nativeDefault2;
            return obj6;
          }
        } else if (1 === c5) {
          c4 = 0;
          closure_0 = closure_3;
          closure_130_19.warn("Error checking video encoding support:", closure_0);
          c6 = 3;
          const obj7 = { value: { isSupported: true }, done: true };
          return obj7;
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c6 = 3;
          const obj8 = { value, done: true };
          return obj8;
        } else {
          c4 = 0;
          c6 = 3;
          obj = { value, done: true };
          return obj;
        }
      } catch (tmp15) {
        closure_3 = tmp15;
        if (0 === c4) {
          c6 = 3;
          throw tmp15;
        } else {
          c5 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
function calculateImageQualityMetrics(originalUri, combined, filename, attachmentQualityMetricsEnabled, attachmentOriginDetectionEnabled) {
  return obj(...arguments);
}
obj = function _calculateImageQualityMetrics() {
  obj = _asyncToGenerator(async (arg0, arg1, arg2, arg3, arg4) => {
    let closure_6;
    let obj5;
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg3;
    closure_3 = arg4;
    if (c9 === 2) {
      c9 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let tmp46;
      let c7;
      try {
        let combined;
        c9 = 2;
        if (0 === c8) {
          if (arg0 === 1) {
            c9 = 3;
            throw value;
          } else if (arg0 === 2) {
            c9 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_5 = tmp;
            calculateImageQualityMetrics = undefined;
            combined = undefined;
            tmp46 = undefined;
            closure_3 = {};
            if (closure_3) {
              c7 = 1;
              c8 = 2;
              c9 = 1;
              const obj4 = { value: obj5.getMediaOrigin(tmp67), done: false };
              obj5 = react_nativeDefault2;
              return obj4;
            }
          }
        } else {
          if (1 === c8) {
            c7 = 0;
            let closure_7 = tmp46;
            closure_133_19.warn("Failed to detect media origin", closure_7);
          } else if (2 === c8) {
            if (arg0 === 1) {
              c9 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 0;
              c9 = 3;
              const obj6 = { value, done: true };
              return obj6;
            } else {
              calculateImageQualityMetrics = value;
              closure_3.origin = calculateImageQualityMetrics.source;
              c7 = 0;
            }
          } else if (3 === c8) {
            c7 = 0;
            let closure_8 = tmp46;
            closure_133_19.warn("Error in quality metrics calculation", closure_8);
          } else if (arg0 === 1) {
            c9 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 0;
            c9 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            tmp46 = value;
            closure_3.psnr = tmp46.psnr;
            closure_3.ssim = tmp46.ssim;
            closure_3.psnrMeasurementLatencyMs = tmp46.psnrCalculationTimeMs;
            closure_3.ssimMeasurementLatencyMs = tmp46.ssimCalculationTimeMs;
            const _HermesInternal3 = HermesInternal;
            closure_133_19.log("Quality metrics calculated: PSNR=" + tmp46.psnr + "dB, SSIM=" + tmp46.ssim);
            c7 = 0;
          }
          calculateImageQualityMetrics = closure_3;
          c9 = 3;
          const obj7 = { value: calculateImageQualityMetrics, done: true };
          return obj7;
        }
        if (closure_2) {
          c7 = 2;
          combined = closure_1;
          if (!closure_1.includes("://")) {
            if (!closure_1.includes("/")) {
              if (!closure_1.includes("\\")) {
                calculateImageQualityMetrics = closure_1;
                const _HermesInternal = HermesInternal;
                if (closure_0.startsWith("ph://")) {
                  combined = concat(calculateImageQualityMetrics);
                } else {
                  combined = concat(calculateImageQualityMetrics);
                }
              }
            }
            calculateImageQualityMetrics = closure_1;
            const _HermesInternal2 = HermesInternal;
            combined = "file://" + closure_1;
          }
          calculateImageQualityMetrics = closure_133_1(closure_133_2[16]).calculateImageQualityMetrics;
          c8 = 4;
          c9 = 1;
          const obj8 = { value: calculateImageQualityMetrics(closure_0, combined), done: false };
          const tmp41 = closure_133_1(closure_133_2[16]);
          return obj8;
        }
      } catch (tmp46) {
        if (0 === c7) {
          c9 = 3;
          throw tmp46;
        } else if (1 === tmp48) {
          c8 = 1;
        } else {
          c8 = 3;
        }
      }
    }
  });
  return obj(...arguments);
};
let closure_3 = ["filename"];
const Image = react_native.Image;
let UnsyncedUserSettingsStore = UnsyncedUserSettingsStore_mod;
({ VideoCompressionQuality: metroImportDefault, VideoQualitySettings: metroImportAll } = UnsyncedUserSettingsStore);
UnsyncedUserSettingsStore = UnsyncedUserSettingsStore_mod;
({ Base64PNGPrefix: closure_12, Base64GIFPrefix } = Constants);
({ NetworkConnectionTypes: closure_14, CompressionQuality: closure_15, Base64WEBPPrefix: closure_16, Base64AVIFPrefix: closure_17, Base64JPEGPrefix } = Constants);
const NativePermissionTypes = NativePermissionConstants.NativePermissionTypes;
let tmp4 = new LoggerDefault("UploadUtils.tsx");
let closure_19 = tmp4;
const regExp = new RegExp("^" + Base64JPEGPrefix, "i");
const regExp1 = new RegExp("^" + Base64GIFPrefix, "i");
const Canceled = "Canceled";
let size = size_mod;
let result = size.fileFinishedImporting("utils/native/UploadUtils.tsx");

export default { getFileInfo, isVideo, getType, openImagePickerUnhandled, openImagePicker, getCaptionLabel, getImageDimensionsIfMissing, getAppDir };
export const base64JPEGRegex = regExp;
export const base64GIFRegex = regExp1;
export { openImagePicker };
export { mediaManager };
export const getImageCompressionQuality = function getImageCompressionQuality() {
  if (UnsyncedUserSettingsStore.dataSavingMode) {
    let HIGH;
    if (NetworkStore.getType() === constants3.CELLULAR) {
      HIGH = constants4.LOW;
    }
    return HIGH;
  }
  HIGH = constants4.HIGH;
};
export { getVideoQuality };
export const resolveModeToVideoQualityForUserWithFeature = function resolveModeToVideoQualityForUserWithFeature(arg0) {
  if (metroImportAll.DATA_SAVER === arg0) {
    return metroImportDefault.LOW;
  } else if (metroImportAll.STANDARD === arg0) {
    return metroImportDefault.HIGH;
  } else if (metroImportAll.BEST === arg0) {
    return metroImportDefault.VERY_HIGH;
  } else {
    return metroImportDefault.MEDIUM;
  }
};
export const resolveModeToVideoQualityForFreeUser = function resolveModeToVideoQualityForFreeUser(arg0) {
  if (metroImportAll.DATA_SAVER === arg0) {
    return metroImportDefault.LOW;
  } else if (metroImportAll.STANDARD === arg0) {
    return metroImportDefault.MEDIUM;
  } else if (metroImportAll.BEST === arg0) {
    return metroImportDefault.HIGH;
  } else {
    return metroImportDefault.LOW;
  }
};
export const cancelGetFileInfo = function cancelGetFileInfo(item) {
  item = item.item;
  let promise = new Promise((fn, arg1) => {
    obj = PlatformUtils;
    if (obj.isAndroid()) {
      if (item.platform === UploadPlatform.UploadPlatform.REACT_NATIVE) {
        const promise = mediaManager(react_nativeDefault2.cancelResolveToMediaFilePath, item.uri, null);
        promise.then(fn, arg1);
      }
    }
    fn();
  });
  return promise;
};
export const getFileSize = function getFileSize(uri) {
  let replaced = uri;
  obj = PlatformUtils;
  if (obj.isIOS()) {
    replaced = uri.replace(/file:\/\//, "");
  }
  const obj2 = react_nativeDefault;
  return obj2.getSize(replaced);
};
export { getAppDir };
export { getFileInfo };
export const shouldConvertToJPG = ImageConversionDecision.shouldConvertToJPG;
export const shouldForceConvertToJPG = ImageConversionDecision.shouldForceConvertToJPG;
export const shouldResolveToMediaFilePath = function shouldResolveToMediaFilePath(str) {
  obj = PlatformUtils;
  const isAndroidResult = obj.isAndroid() && null != str.match(/^content:\/\/.+$/i);
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
  obj = UploadUtils;
  const obj2 = { uri: result1.uri, overrideFilename: result1.filename, overrideType: result1.mimeType };
  return obj.getFile(obj2);
};