// discord_app/modules/user_profile/WidgetAssetUtils.tsx
import Constants from "../../Constants.tsx";
import AvatarUtils from "../../utils/AvatarUtils.tsx";
import size from "../../../_runtime/metro/00002__.js";

const DEFAULT_CDN_HOST = Constants.DEFAULT_CDN_HOST;
const result = size.fileFinishedImporting("modules/user_profile/WidgetAssetUtils.tsx");

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
  if (!AvatarUtils.SUPPORTS_WEBP) {
    let str2 = "png";
    if (flag) {
      str2 = "gif";
    }
    str = str2;
  }
  return "https://" + CDN_HOST + "/widget-assets/" + arg0 + "/" + fileId + "?format=" + str + "&animated=" + flag;
};
