// === Module 12088: WidgetAssetUtils ===

// Module 12088 (WidgetAssetUtils)
import AvatarUtils from "AvatarUtils" /* 1414 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_profile/WidgetAssetUtils.tsx");

export function getWidgetAssetURL(arg0, fileId, arg2) {
  let obj = arg2;
  if (arg2 === undefined) {
    obj = {};
  }
  let flag = obj.animated;
  if (flag === undefined) {
    flag = false;
  }
  if (null != CDN_HOST) {
    const _HermesInternal = HermesInternal;
    let combined = "https://" + CDN_HOST;
  } else {
    const _location = location;
    combined = location.protocol + tmp;
  }
  let str2 = "webp";
  if (!AvatarUtils.SUPPORTS_WEBP) {
    let str3 = "png";
    if (flag) {
      str3 = "gif";
    }
    str2 = str3;
  }
  return "" + combined + "/widget-assets/" + arg0 + "/" + fileId + "?format=" + str2 + "&animated=" + flag;
}