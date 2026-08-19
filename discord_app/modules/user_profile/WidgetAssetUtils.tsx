// === Module 12293: getWidgetAssetURL ===

// Module 12293 (getWidgetAssetURL)
import obj132 from "obj132" /* 2 */;
import ME from "ME" /* 676 */;
import getAvatarURL from "getAvatarURL" /* 1435 */;

const DEFAULT_CDN_HOST = ME.DEFAULT_CDN_HOST;
const result = obj132.fileFinishedImporting("modules/user_profile/WidgetAssetUtils.tsx");

export const getWidgetAssetURL = function getWidgetAssetURL(closure_0, fileId, arg2) {
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
  return "https://" + CDN_HOST + "/widget-assets/" + closure_0 + "/" + fileId + "?format=" + str + "&animated=" + flag;
};