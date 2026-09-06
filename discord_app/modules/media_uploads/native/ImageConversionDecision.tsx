// === Module 5159: ImageConversionDecision ===

// Module 5159 (ImageConversionDecision)
import PlatformUtils from "PlatformUtils" /* 1115 */;
import IosImageTypesManagerDefault from "IosImageTypesManager" /* 5160 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_uploads/native/ImageConversionDecision.tsx");

export const isPhotoKitAsset = function isPhotoKitAsset(str, arg1) {
  let tmp = null != str.match(/^ph:\/\//i);
  if (tmp) {
    tmp = null != arg1;
  }
  return tmp;
};
export const isHeicUTI = function isHeicUTI(str) {
  if (null == str) {
    return false;
  } else {
    const formatted = str.toLowerCase();
    let hasItem = formatted.includes("heic");
    if (!hasItem) {
      hasItem = formatted.includes("heif");
    }
    return hasItem;
  }
};
export const shouldForceConvertToJPG = function shouldForceConvertToJPG(str, str2, str3) {
  let isIOSResult = PlatformUtils.isIOS();
  if (isIOSResult) {
    let flag = false;
    if (null != str3) {
      const formatted = str3.toLowerCase();
      let hasItem = formatted.includes("heic");
      if (!hasItem) {
        hasItem = formatted.includes("heif");
      }
      flag = hasItem;
    }
    if (flag) {
      isIOSResult = tmp5;
    } else {
      if (tmp8) {
        let match;
        if (str2 != null) {
          match = str2.match(/\.HEI[CF]$/i);
        }
        let tmp9 = null != match;
      } else {
        tmp9 = null != str.match(/^(assets-library|file):\/\/.+(&ext=|\.)(HEI[CF])$/i);
      }
      tmp8 = null != str.match(/^ph:\/\//i) && null != str2;
    }
  }
  return isIOSResult;
};
export const shouldConvertToJPG = function shouldConvertToJPG(str, arr, arg2, arg3, arg4) {
  let flag = arg4;
  if (arg4 === undefined) {
    flag = true;
  }
  if (obj.isIOS()) {
    let num;
    if (arr != null) {
      num = arr.lastIndexOf(".");
    }
    if (num == null) {
      num = -1;
    }
    if (-1 !== num) {
      const formatted = arr.substring(num + 1).toLowerCase();
      const str2 = arr.substring(num + 1);
    }
    const match = str.match;
    if (flag) {
      if (tmp8) {
        if (null == formatted) {
          return false;
        } else {
          if ("png" === formatted) {
            if (arg3) {
              return true;
            } else if (arg2) {
              return true;
            }
          } else {
            if (obj2.isExtensionAnimated(formatted)) {
              return false;
            } else {
              const supportedExtensions = tmp14(5160).getSupportedExtensions();
              if (null !== supportedExtensions) {
                if (supportedExtensions.has(formatted)) {
                  return true;
                }
              }
              const tmp14Result = tmp14(5160);
            }
            obj2 = IosImageTypesManagerDefault;
            tmp14 = importDefault;
          }
          return false;
        }
      } else {
        let tmp11 = null != str.match(/^(assets-library|file):\/\/.+(&ext=|\.)(hei[cf]|jpe?g|dng)$/i);
        if (!tmp11) {
          let tmp12 = null == str.match(/^(assets-library|file):\/\/.+(&ext=|\.)png$/i);
          if (!tmp12) {
            let tmp13 = !arg2;
            if (!arg2) {
              tmp13 = !arg3;
            }
            tmp12 = tmp13;
          }
          tmp11 = !tmp12;
        }
        return tmp11;
      }
      tmp8 = null != match(/^ph:\/\//i) && null != arr;
    } else {
      let tmp7 = "heic" === formatted;
      if (!tmp7) {
        tmp7 = "heif" === formatted;
      }
      if (!tmp7) {
        tmp7 = tmp6;
      }
      return tmp7;
    }
  } else {
    return false;
  }
  obj = PlatformUtils;
};