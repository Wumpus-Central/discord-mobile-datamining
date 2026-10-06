// === Module 7851: RecentAvatarUtils ===

// Module 7851 (RecentAvatarUtils)
import Constants from "Constants" /* 1085 */;
import intl3 from "intl" /* 1126 */;
import GlobalUtils from "GlobalUtils" /* 1375 */;
import AvatarUtils from "AvatarUtils" /* 1402 */;
import ImageLoaderUtils from "ImageLoaderUtils" /* 1437 */;
import _modDef1478 from "module_1478" /* 1478 */;
import ProfilePendingImageTypes from "ProfilePendingImageTypes" /* 6493 */;
import size_mod from "module_2" /* 2 */;

function getArchivedAvatarURL(allowWebp) {
  let avatarId;
  let canAnimate;
  let combined;
  let getBestMediaProxySize;
  let obj3;
  let storageHash;
  let str2;
  let userId;
  ({ userId, avatarId, storageHash, canAnimate } = allowWebp);
  if (canAnimate === undefined) {
    canAnimate = false;
  }
  let flag = allowWebp.allowWebp;
  if (flag === undefined) {
    flag = true;
  }
  size = allowWebp.size;
  if (null != CDN_HOST) {
    const _HermesInternal = HermesInternal;
    combined = "https://" + CDN_HOST;
  } else {
    const _location = location;
    const _window = window;
    combined = location.protocol + window.GLOBAL_ENV.API_ENDPOINT;
  }
  let flag2 = canAnimate;
  if (canAnimate === undefined) {
    flag2 = false;
  }
  if (flag === undefined) {
    flag = true;
  }
  if (flag2) {
    const obj = AvatarUtils;
    if (obj.isAnimatedIconHash(storageHash)) {
      let str6 = "gif";
      if (flag) {
        str6 = "gif";
        if (AvatarUtils.SUPPORTS_WEBP) {
          str6 = "webp";
        }
      }
      str2 = str6;
    }
    const obj2 = { size: getBestMediaProxySize(size * obj3.getDevicePixelRatio()) };
    getBestMediaProxySize = ImageLoaderUtils.getBestMediaProxySize;
    ImageLoaderUtils;
    let isAnimatedIconHashResult = "webp" === str2 && canAnimate;
    obj3 = ImageLoaderUtils;
    if (isAnimatedIconHashResult) {
      const tmp6Result = AvatarUtils;
      isAnimatedIconHashResult = tmp6Result.isAnimatedIconHash(storageHash);
    }
    if (isAnimatedIconHashResult) {
      obj2.animated = true;
    }
    const _HermesInternal2 = HermesInternal;
    const ARCHIVED_AVATARResult = Endpoints.ARCHIVED_AVATAR(userId, avatarId, storageHash, str2);
    const obj5 = _modDef1478;
    return "" + combined + ARCHIVED_AVATARResult + "?" + obj5.stringify(obj2);
  }
  str2 = "jpg";
  if (null != window.GLOBAL_ENV.CDN_HOST) {
    let str4 = "png";
    if (flag) {
      str4 = "png";
      if (AvatarUtils.SUPPORTS_WEBP) {
        str4 = "webp";
      }
    }
    str2 = str4;
  }
}
const Endpoints = Constants.Endpoints;
let size = size_mod;
const result = size.fileFinishedImporting("modules/recent_avatars/RecentAvatarUtils.tsx");

export const getImageFormat = function getImageFormat(canAnimate) {
  let str;
  let flag = canAnimate.canAnimate;
  const storageHash = canAnimate.storageHash;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = canAnimate.allowWebp;
  if (flag2 === undefined) {
    flag2 = true;
  }
  if (flag) {
    const obj = AvatarUtils;
    if (obj.isAnimatedIconHash(storageHash)) {
      let str5 = "gif";
      if (flag2) {
        str5 = "gif";
        if (AvatarUtils.SUPPORTS_WEBP) {
          str5 = "webp";
        }
      }
      str = str5;
    }
    return str;
  }
  str = "jpg";
  if (null != window.GLOBAL_ENV.CDN_HOST) {
    let str3 = "png";
    if (flag2) {
      str3 = "png";
      if (AvatarUtils.SUPPORTS_WEBP) {
        str3 = "webp";
      }
    }
    str = str3;
  }
};
export { getArchivedAvatarURL };
export const generateAvatarDescription = function generateAvatarDescription(arg0) {
  let assetOrigin;
  let filename;
  let obj = arg0;
  if (arg0 == null) {
    obj = {};
  }
  ({ filename, assetOrigin } = obj);
  if (undefined === assetOrigin) {
    assetOrigin = ProfilePendingImageTypes.AssetOriginTypes.NEW_ASSET;
  }
  if (assetOrigin !== ProfilePendingImageTypes.AssetOriginTypes.ARCHIVED_ASSET) {
    let DYil93;
    if (filename == null) {
      const intl = intl3.intl;
      filename = intl.string(intl3.t.lqaIxI);
    }
    const _Date = Date;
    const self = this;
    const self2 = this;
    const date = new Date();
    const toLocaleStringResult = date.toLocaleString(intl3.intl.currentLocale, { year: "numeric", day: "numeric", month: "long", hour: "numeric", minute: "numeric" });
    const intl2 = intl3.intl;
    const formatToPlainString = intl2.formatToPlainString;
    if (assetOrigin === ProfilePendingImageTypes.AssetOriginTypes.EDITED_ARCHIVED_ASSET) {
      DYil93 = intl3.t.eC2sZi;
    } else {
      DYil93 = intl3.t.DYil93;
    }
    const obj2 = { name: filename, dateTime: toLocaleStringResult };
    return formatToPlainString(DYil93, obj2);
  }
};
export const generateRecentAvatarFileDetails = function generateRecentAvatarFileDetails(storageHash, arg1) {
  let str;
  let str9;
  let stringResult;
  let flag = AvatarUtils.SUPPORTS_WEBP;
  if (flag === undefined) {
    flag = true;
  }
  const tmpResult = AvatarUtils;
  if (tmpResult.isAnimatedIconHash(storageHash)) {
    let str5 = "gif";
    if (flag) {
      str5 = "gif";
      if (AvatarUtils.SUPPORTS_WEBP) {
        str5 = "webp";
      }
    }
    str = str5;
  } else {
    const _window = window;
    str = "jpg";
    if (null != window.GLOBAL_ENV.CDN_HOST) {
      let str3 = "png";
      if (flag) {
        str3 = "png";
        if (AvatarUtils.SUPPORTS_WEBP) {
          str3 = "webp";
        }
      }
      str = str3;
    }
  }
  if (null == arg1) {
    const intl = intl3.intl;
    stringResult = intl.string(intl3.t.lqaIxI);
  } else {
    stringResult = arg1.split(",")[0];
  }
  const obj = { filename: "" + stringResult + "." + str, type: str9 };
  if ("gif" === str) {
    str9 = "image/gif";
  } else if ("png" === str) {
    str9 = "image/png";
  } else if ("jpg" === str) {
    str9 = "image/jpeg";
  } else {
    str9 = "image/webp";
    if ("webp" !== str) {
      const tmpResult2 = GlobalUtils;
      tmpResult2.assertNever(str);
    }
  }
  return obj;
};
export const getPendingAvatarSrc = function getPendingAvatarSrc(userId) {
  let image;
  ({ image, size } = userId);
  userId = userId.userId;
  if (size === undefined) {
    size = 80;
  }
  let flag = userId.canAnimate;
  if (flag === undefined) {
    flag = true;
  }
  let tmp = image;
  if (null != image) {
    tmp = image;
    if (typeof image !== "string") {
      let imageUri;
      if (image.assetOrigin === ProfilePendingImageTypes.AssetOriginTypes.ARCHIVED_ASSET) {
        const obj = { userId, avatarId: image.originalAsset.id, storageHash: image.originalAsset.storageHash, size, canAnimate: flag };
        imageUri = getArchivedAvatarURL(obj);
      } else if (flag) {
        imageUri = image.imageUri;
      } else {
        imageUri = image.staticImageUri;
        if (imageUri == null) {
          imageUri = image.imageUri;
        }
      }
      tmp = imageUri;
    }
  }
  return tmp;
};