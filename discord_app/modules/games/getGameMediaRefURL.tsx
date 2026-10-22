// discord_app/modules/games/getGameMediaRefURL.tsx
import AvatarUtilsDefault from "../../utils/AvatarUtils.tsx";
import StringUtils from "../../utils/StringUtils.tsx";
import ImageProxyUtils from "../image_proxy/ImageProxyUtils.tsx";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/games/getGameMediaRefURL.tsx");

export default function getGameMediaRefURL(id, value, size) {
  let tmp = null != value;
  if (tmp) {
    tmp = !StringUtils.isNullOrEmpty(value.value);
  }
  if (tmp) {
    const type = value.type;
    if ("hash" === type) {
      const obj3 = { id, hash: value.value };
      const merged = Object.assign(size);
      let gameAssetURL = AvatarUtilsDefault.getGameAssetURL(obj3);
      if (gameAssetURL == null) {
        gameAssetURL = null;
      }
      return gameAssetURL;
    } else if ("url" === type) {
      size = undefined;
      if (size != null) {
        size = size.size;
      }
      const obj5 = { size, keepAspectRatio: null, format: null };
      let keepAspectRatio;
      if (size != null) {
        keepAspectRatio = size.keepAspectRatio;
      }
      obj5.keepAspectRatio = keepAspectRatio;
      let format;
      if (size != null) {
        format = size.format;
      }
      obj5.format = format;
      return ImageProxyUtils.getSizedImageAssetURL(value.value, obj5);
    } else {
      return null;
    }
  } else {
    return null;
  }
}
export const hasGameMediaRef = function hasGameMediaRef(cover) {
  let tmp = null != cover;
  if (tmp) {
    tmp = !StringUtils.isNullOrEmpty(cover.value);
  }
  return tmp;
};
