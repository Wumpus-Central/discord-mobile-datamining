// === Module 4511: getGameMediaRefURL ===

// Module 4511 (getGameMediaRefURL)
import set from "set" /* 2 */;
import getAvatarURLDefault from "getAvatarURL" /* 1430 */;
import getSizedImageProxyURL from "getSizedImageProxyURL" /* 4512 */;

const result = set.fileFinishedImporting("modules/games/getGameMediaRefURL.tsx");

export default function getGameMediaRefURL(arg0, type, size) {
  if (null == type) {
    return null;
  } else {
    type = type.type;
    if ("hash" === type) {
      let tmp8 = null;
      if (!obj3.isNullOrEmpty(type.value)) {
        let obj = { id: null, hash: null };
        obj[0] = arg0;
        obj[1] = type.value;
        const merged = Object.assign(size);
        let gameAssetURL = getAvatarURLDefault.getGameAssetURL(obj);
        if (gameAssetURL == null) {
          gameAssetURL = null;
        }
        tmp8 = gameAssetURL;
        const obj4 = getAvatarURLDefault;
      }
      return tmp8;
    } else if ("url" === type) {
      obj = getSizedImageProxyURL;
      size = undefined;
      if (size != null) {
        size = size.size;
      }
      obj = { size: null, keepAspectRatio: null, format: null };
      obj[0] = size;
      let keepAspectRatio;
      if (size != null) {
        keepAspectRatio = size.keepAspectRatio;
      }
      obj[1] = keepAspectRatio;
      let format;
      if (size != null) {
        format = size.format;
      }
      obj[2] = format;
      return obj.getSizedImageAssetURL(type.value, obj);
    } else {
      return null;
    }
  }
};