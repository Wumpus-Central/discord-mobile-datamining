// discord_app/modules/recent_avatars/RecentAvatarUtils.tsx
import set from "../../../_runtime/00002_set.js";
import ME from "../../Constants.tsx";
import getAvatarURL from "../../utils/AvatarUtils.tsx";
import handleImageLoad from "../image_upload/ImageLoaderUtils.tsx";
import parseDefault from "../../../_runtime/01482_parse.js";
import AssetOriginTypes from "../profile_customization/ProfilePendingImageTypes.tsx";

function getArchivedAvatarURL(allowWebp) {
  ({ userId, avatarId, storageHash, canAnimate } = allowWebp);
  if (canAnimate === undefined) {
    canAnimate = false;
  }
  let flag = allowWebp.allowWebp;
  if (flag === undefined) {
    flag = true;
  }
  if (null != CDN_HOST) {
    const _HermesInternal = HermesInternal;
    let combined = "https://" + CDN_HOST;
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
    let obj = getAvatarURL;
    if (obj.isAnimatedIconHash(storageHash)) {
      let str6 = "gif";
      if (flag) {
        str6 = "gif";
        if (tmp2(1430).SUPPORTS_WEBP) {
          str6 = "webp";
        }
      }
      let str2 = str6;
    }
    obj = { size: null };
    const obj3 = handleImageLoad;
    tmp2 = require;
    const tmp6 = require;
    obj[0] = obj3.getBestMediaProxySize(allowWebp.size * handleImageLoad.getDevicePixelRatio());
    let isAnimatedIconHashResult = "webp" === str2 && canAnimate;
    if (isAnimatedIconHashResult) {
      isAnimatedIconHashResult = tmp6(1430).isAnimatedIconHash(storageHash);
      const tmp6Result = tmp6(1430);
    }
    if (isAnimatedIconHashResult) {
      obj.animated = true;
    }
    const obj4 = handleImageLoad;
    const ARCHIVED_AVATARResult = Endpoints.ARCHIVED_AVATAR(userId, avatarId, storageHash, str2);
    const _HermesInternal2 = HermesInternal;
    return "" + combined + ARCHIVED_AVATARResult + "?" + parseDefault.stringify(obj);
  }
  str2 = "jpg";
  if (null != window.GLOBAL_ENV.CDN_HOST) {
    let str4 = "png";
    if (flag) {
      str4 = "png";
      if (getAvatarURL.SUPPORTS_WEBP) {
        str4 = "webp";
      }
    }
    str2 = str4;
  }
}
const Endpoints = ME.Endpoints;
const result = set.fileFinishedImporting("modules/recent_avatars/RecentAvatarUtils.tsx");

export const getImageFormat = function getImageFormat(canAnimate) {
  let flag = canAnimate.canAnimate;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = canAnimate.allowWebp;
  if (flag2 === undefined) {
    flag2 = true;
  }
  if (flag) {
    if (obj.isAnimatedIconHash(canAnimate.storageHash)) {
      let str5 = "gif";
      if (flag2) {
        str5 = "gif";
        if (getAvatarURL.SUPPORTS_WEBP) {
          str5 = "webp";
        }
      }
      let str = str5;
    }
    return str;
  }
  str = "jpg";
  if (null != window.GLOBAL_ENV.CDN_HOST) {
    let str3 = "png";
    if (flag2) {
      str3 = "png";
      if (getAvatarURL.SUPPORTS_WEBP) {
        str3 = "webp";
      }
    }
    str = str3;
  }
};
export { getArchivedAvatarURL };
export const generateAvatarDescription = function generateAvatarDescription(maxSettingsForPreset) {
  let obj = maxSettingsForPreset;
  if (maxSettingsForPreset == null) {
    obj = {};
  }
  ({ filename, assetOrigin } = obj);
  if (undefined === assetOrigin) {
    assetOrigin = AssetOriginTypes.AssetOriginTypes.NEW_ASSET;
  }
  if (assetOrigin !== AssetOriginTypes.AssetOriginTypes.ARCHIVED_ASSET) {
    if (filename == null) {
      const intl = tmp3(1233).intl;
      filename = intl.string(tmp3(1233).t.lqaIxI);
    }
    const _Date = Date;
    const date = new Date();
    const intl2 = tmp3(1233).intl;
    if (assetOrigin === tmp3(7770).AssetOriginTypes.EDITED_ARCHIVED_ASSET) {
      let DYil93 = tmp3(1233).t.eC2sZi;
    } else {
      DYil93 = tmp3(1233).t.DYil93;
    }
    obj = { name: null, dateTime: null };
    obj[0] = filename;
    obj[1] = date.toLocaleString(tmp3(1233).intl.currentLocale, {
      year: "numeric",
      day: "numeric",
      month: "long",
      hour: "numeric",
      minute: "numeric",
    });
    return intl2.formatToPlainString(DYil93, obj);
  }
};
export const generateRecentAvatarFileDetails = function generateRecentAvatarFileDetails(storageHash) {
  let flag = getAvatarURL.SUPPORTS_WEBP;
  if (flag === undefined) {
    flag = true;
  }
  let tmpResult = tmp(1430);
  if (tmpResult.isAnimatedIconHash(storageHash)) {
    let str5 = "gif";
    if (flag) {
      str5 = "gif";
      if (tmp(1430).SUPPORTS_WEBP) {
        str5 = "webp";
      }
    }
    let str = str5;
  } else {
    const _window = window;
    str = "jpg";
    if (null != window.GLOBAL_ENV.CDN_HOST) {
      let str3 = "png";
      if (flag) {
        str3 = "png";
        if (tmp(1430).SUPPORTS_WEBP) {
          str3 = "webp";
        }
      }
      str = str3;
    }
  }
  if (null == arg1) {
    const intl = tmp(1233).intl;
    let stringResult = intl.string(tmp(1233).t.lqaIxI);
  } else {
    stringResult = arg1.split(",")[0];
  }
  const obj = { filename: "" + stringResult + "." + str, type: null };
  if ("gif" === str) {
    let str9 = "image/gif";
  } else if ("png" === str) {
    str9 = "image/png";
  } else if ("jpg" === str) {
    str9 = "image/jpeg";
  } else {
    str9 = "image/webp";
    if ("webp" !== str) {
      tmpResult = tmp(1470);
      tmpResult.assertNever(str);
    }
  }
  obj[1] = str9;
  return obj;
};
export const getPendingAvatarSrc = function getPendingAvatarSrc(canAnimate) {
  ({ userId, image, size } = canAnimate);
  if (size === undefined) {
    size = 80;
  }
  let flag = canAnimate.canAnimate;
  if (flag === undefined) {
    flag = true;
  }
  let tmp = image;
  if (null != image) {
    tmp = image;
    if (typeof image !== "string") {
      if (image.assetOrigin === AssetOriginTypes.AssetOriginTypes.ARCHIVED_ASSET) {
        const obj = { userId: null, avatarId: null, storageHash: null, size: null, canAnimate: null };
        obj[0] = userId;
        userId = image.originalAsset.id;
        obj[1] = userId;
        image = image.originalAsset.storageHash;
        obj[2] = image;
        obj[3] = size;
        obj[4] = flag;
        let imageUri = getArchivedAvatarURL(obj);
      } else if (flag) {
        imageUri = image.imageUri;
      } else {
        imageUri = image.staticImageUri;
        if (imageUri == null) {
          imageUri = image.imageUri;
        }
      }
    }
  }
  return tmp;
};
