// discord_app/modules/media_uploads/native/ImageConversionDecision.tsx
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import IosImageTypesManagerDefault from "../../media/native/IosImageTypesManager.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/media_uploads/native/ImageConversionDecision.tsx");

export const isPhotoKitAsset = function isPhotoKitAsset(c0, c1) {
  const tmp = null != _require.match(/^ph:\/\//i) && null != c1;
  return tmp;
};
export const isHeicUTI = function isHeicUTI(str) {
  if (null == str) {
    return false;
  } else {
    const formatted = str.toLowerCase();
    const hasItem = formatted.includes("heic") || formatted.includes("heif");
    return hasItem;
  }
};
export const shouldForceConvertToJPG = function shouldForceConvertToJPG(c0, c1, value) {
  const obj = PlatformUtils;
  let isIOSResult = obj.isIOS();
  if (isIOSResult) {
    let flag = false;
    if (null != value) {
      const formatted = value.toLowerCase();
      const hasItem = formatted.includes("heic") || formatted.includes("heif");
      flag = hasItem;
    }
    let tmp5 = flag;
    if (!tmp5) {
      let tmp9;
      const tmp8 = null != _require.match(/^ph:\/\//i) && null != importDefault;
      if (tmp8) {
        let match;
        if (importDefault != null) {
          match = importDefault.match(/\.HEI[CF]$/i);
        }
        tmp9 = null != match;
      } else {
        tmp9 = null != _require.match(/^(assets-library|file):\/\/.+(&ext=|\.)(HEI[CF])$/i);
      }
      tmp5 = tmp9;
    }
    isIOSResult = tmp5;
  }
  return isIOSResult;
};
export const shouldConvertToJPG = function shouldConvertToJPG(c0, c1, c2, c4) {
  let flag = c7;
  if (c7 === undefined) {
    flag = true;
  }
  const obj = PlatformUtils;
  if (obj.isIOS()) {
    let formatted;
    let num;
    if (importDefault != null) {
      num = importDefault.lastIndexOf(".");
    }
    if (num == null) {
      num = -1;
    }
    if (-1 !== num) {
      const str2 = importDefault.substring(num + 1);
      formatted = str2.toLowerCase();
    }
    const match = _require.match;
    if (flag) {
      const tmp8 = null != match(/^ph:\/\//i) && null != importDefault;
      if (tmp8) {
        if (null == formatted) {
          return false;
        } else {
          if ("png" === formatted) {
            if (c4) {
              return true;
            } else if (c2) {
              return true;
            }
          } else {
            const obj2 = IosImageTypesManagerDefault;
            if (obj2.isExtensionAnimated(formatted)) {
              return false;
            } else {
              const tmp14Result = IosImageTypesManagerDefault;
              const supportedExtensions = tmp14Result.getSupportedExtensions();
              if (null !== supportedExtensions) {
                if (supportedExtensions.has(formatted)) {
                  return true;
                }
              }
            }
          }
          return false;
        }
      } else {
        let tmp11 = null != _require.match(/^(assets-library|file):\/\/.+(&ext=|\.)(hei[cf]|jpe?g|dng)$/i);
        if (!tmp11) {
          let tmp12 = null == _require.match(/^(assets-library|file):\/\/.+(&ext=|\.)png$/i);
          if (!tmp12) {
            tmp12 = !c2 && !c4;
          }
          tmp11 = !tmp12;
        }
        return tmp11;
      }
    } else {
      let tmp7 = "heic" === formatted;
      const tmp6 = null != match(/(&ext=|\.)(hei[cf])$/i);
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
};
