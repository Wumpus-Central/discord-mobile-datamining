// === Module 1925: getGameMediaRefURL ===

// Module 1925 (getGameMediaRefURL)
import AvatarUtilsDefault from "AvatarUtils" /* 1397 */;
import ImageProxyUtils from "ImageProxyUtils" /* 1930 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/games/getGameMediaRefURL.tsx");

export default function getGameMediaRefURL(id, type, size) {
  if (null == type) {
    return null;
  } else {
    type = type.type;
    if ("hash" === type) {
      let tmp8 = null;
      if (!obj3.isNullOrEmpty(type.value)) {
        const obj2 = { id, hash: type.value };
        const merged = Object.assign(size);
        let gameAssetURL = AvatarUtilsDefault.getGameAssetURL(obj2);
        if (gameAssetURL == null) {
          gameAssetURL = null;
        }
        tmp8 = gameAssetURL;
      }
      return tmp8;
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
      return ImageProxyUtils.getSizedImageAssetURL(type.value, obj5);
    } else {
      return null;
    }
  }
};