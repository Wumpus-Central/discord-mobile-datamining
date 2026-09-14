// discord_app/modules/games/getGameMediaRefURL.tsx
import AvatarUtilsDefault from "../../utils/AvatarUtils.tsx";
import ImageProxyUtils from "../image_proxy/ImageProxyUtils.tsx";
import size from "../../../_runtime/metro/00002__.js";

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
}
