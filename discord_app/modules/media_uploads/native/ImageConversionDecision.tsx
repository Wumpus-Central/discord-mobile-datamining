// discord_app/modules/media_uploads/native/ImageConversionDecision.tsx
import set from "../../../../_runtime/00002_set.js";
import set2 from "../../../utils/PlatformUtils.tsx";
import _initializeDefault from "../../media/native/IosImageTypesManager.tsx";

const result = set.fileFinishedImporting("modules/media_uploads/native/ImageConversionDecision.tsx");

export const isPhotoKitAsset = function isPhotoKitAsset(closure_0, closure_1_1) {
  let tmp = null != closure_0.match(/^ph:\/\//i);
  if (tmp) {
    tmp = null != closure_1_1;
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
export const shouldForceConvertToJPG = function shouldForceConvertToJPG(closure_0, closure_1_1, closure_1_10) {
  let isIOSResult = set2.isIOS();
  if (isIOSResult) {
    let flag = false;
    if (null != closure_1_10) {
      const formatted = closure_1_10.toLowerCase();
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
        if (closure_1_1 != null) {
          match = closure_1_1.match(/\.HEI[CF]$/i);
        }
        let tmp9 = null != match;
      } else {
        tmp9 = null != closure_0.match(/^(assets-library|file):\/\/.+(&ext=|\.)(HEI[CF])$/i);
      }
      tmp8 = null != closure_0.match(/^ph:\/\//i) && null != closure_1_1;
    }
  }
  return isIOSResult;
};
export const shouldConvertToJPG = function shouldConvertToJPG(closure_0, closure_1_1, closure_1_2, closure_1_4, c7) {
  let flag = c7;
  if (c7 === undefined) {
    flag = true;
  }
  if (obj.isIOS()) {
    let num;
    if (closure_1_1 != null) {
      num = closure_1_1.lastIndexOf(".");
    }
    if (num == null) {
      num = -1;
    }
    if (-1 !== num) {
      const formatted = closure_1_1.substring(num + 1).toLowerCase();
      const str2 = closure_1_1.substring(num + 1);
    }
    const match = closure_0.match;
    if (flag) {
      if (tmp8) {
        if (null == formatted) {
          return false;
        } else {
          if ("png" === formatted) {
            if (closure_1_4) {
              return true;
            } else if (closure_1_2) {
              return true;
            }
          } else {
            if (obj2.isExtensionAnimated(formatted)) {
              return false;
            } else {
              const supportedExtensions = tmp14(5104).getSupportedExtensions();
              if (null !== supportedExtensions) {
                if (supportedExtensions.has(formatted)) {
                  return true;
                }
              }
              const tmp14Result = tmp14(5104);
            }
            obj2 = _initializeDefault;
            tmp14 = importDefault;
          }
          return false;
        }
      } else {
        let tmp11 = null != closure_0.match(/^(assets-library|file):\/\/.+(&ext=|\.)(hei[cf]|jpe?g|dng)$/i);
        if (!tmp11) {
          let tmp12 = null == closure_0.match(/^(assets-library|file):\/\/.+(&ext=|\.)png$/i);
          if (!tmp12) {
            let tmp13 = !closure_1_2;
            if (!closure_1_2) {
              tmp13 = !closure_1_4;
            }
            tmp12 = tmp13;
          }
          tmp11 = !tmp12;
        }
        return tmp11;
      }
      tmp8 = null != match(/^ph:\/\//i) && null != closure_1_1;
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
  obj = set2;
};