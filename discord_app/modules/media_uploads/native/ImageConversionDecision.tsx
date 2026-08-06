// discord_app/modules/media_uploads/native/ImageConversionDecision.tsx
import { set } from "../../../utils/PlatformUtils.tsx";
import { _initialize } from "../../media/native/IosImageTypesManager.tsx";
const result = require("set").fileFinishedImporting("modules/media_uploads/native/ImageConversionDecision.tsx");

export const isPhotoKitAsset = function isPhotoKitAsset(closure_0, outer1_1) {
  let tmp = null != closure_0.match(/^ph:\/\//i);
  if (tmp) {
    tmp = null != outer1_1;
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
export const shouldForceConvertToJPG = function shouldForceConvertToJPG(closure_0, outer1_1, outer1_10) {
  let isIOSResult = set.isIOS();
  if (isIOSResult) {
    let flag = false;
    if (null != outer1_10) {
      const formatted = outer1_10.toLowerCase();
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
        if (outer1_1 != null) {
          match = outer1_1.match(/\.HEI[CF]$/i);
        }
        let tmp9 = null != match;
      } else {
        tmp9 = null != closure_0.match(/^(assets-library|file):\/\/.+(&ext=|\.)(HEI[CF])$/i);
      }
      tmp8 = null != closure_0.match(/^ph:\/\//i) && null != outer1_1;
    }
  }
  return isIOSResult;
};
export const shouldConvertToJPG = function shouldConvertToJPG(closure_0, outer1_1, outer1_2, outer1_4, c7) {
  let flag = c7;
  if (c7 === undefined) {
    flag = true;
  }
  if (obj.isIOS()) {
    let num;
    if (outer1_1 != null) {
      num = outer1_1.lastIndexOf(".");
    }
    if (num == null) {
      num = -1;
    }
    if (-1 !== num) {
      const formatted = outer1_1.substring(num + 1).toLowerCase();
      const str2 = outer1_1.substring(num + 1);
    }
    const match = closure_0.match;
    if (flag) {
      if (tmp8) {
        if (null == formatted) {
          return false;
        } else {
          if ("png" === formatted) {
            if (outer1_4) {
              return true;
            } else if (outer1_2) {
              return true;
            }
          } else {
            if (obj2.isExtensionAnimated(formatted)) {
              return false;
            } else {
              const supportedExtensions = tmp14(4863).getSupportedExtensions();
              if (null !== supportedExtensions) {
                if (supportedExtensions.has(formatted)) {
                  return true;
                }
              }
              const tmp14Result = tmp14(4863);
            }
            obj2 = _initialize;
            tmp14 = importDefault;
          }
          return false;
        }
      } else {
        let tmp11 = null != closure_0.match(/^(assets-library|file):\/\/.+(&ext=|\.)(hei[cf]|jpe?g|dng)$/i);
        if (!tmp11) {
          let tmp12 = null == closure_0.match(/^(assets-library|file):\/\/.+(&ext=|\.)png$/i);
          if (!tmp12) {
            let tmp13 = !outer1_2;
            if (!outer1_2) {
              tmp13 = !outer1_4;
            }
            tmp12 = tmp13;
          }
          tmp11 = !tmp12;
        }
        return tmp11;
      }
      tmp8 = null != match(/^ph:\/\//i) && null != outer1_1;
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
  obj = set;
};