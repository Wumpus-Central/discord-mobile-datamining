// === Module 8661: getWidgetAssetURL ===

// Module 8661 (getWidgetAssetURL)
import set from "set" /* 2 */;
import ME from "ME" /* 1074 */;
import getAvatarURL from "getAvatarURL" /* 1396 */;

const DEFAULT_CDN_HOST = ME.DEFAULT_CDN_HOST;
const result = set.fileFinishedImporting("modules/user_profile/WidgetAssetUtils.tsx");

export const getWidgetAssetURL = function getWidgetAssetURL(arg0, fileId, arg2) {
  let obj = arg2;
  if (arg2 === undefined) {
    obj = {};
  }
  let flag = obj.animated;
  if (flag === undefined) {
    flag = false;
  }
  if (CDN_HOST == null) {
    CDN_HOST = DEFAULT_CDN_HOST;
  }
  let str = "webp";
  if (!getAvatarURL.SUPPORTS_WEBP) {
    let str2 = "png";
    if (flag) {
      str2 = "gif";
    }
    str = str2;
  }
  return "https://" + CDN_HOST + "/widget-assets/" + arg0 + "/" + fileId + "?format=" + str + "&animated=" + flag;
};