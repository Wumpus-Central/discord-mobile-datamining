// discord_app/modules/games/getGameMediaRefURL.tsx
const result = require("isImageProxyURL").fileFinishedImporting("modules/games/getGameMediaRefURL.tsx");

export default function getGameMediaRefURL(arg0, type, size) {
  if (null == type) {
    return null;
  } else {
    type = type.type;
    if ("hash" === type) {
      let tmp7 = null;
      if (!obj3.isNullOrEmpty(type.value)) {
        let obj = { id: null, hash: null };
        obj[0] = arg0;
        obj[1] = type.value;
        const merged = Object.assign(size);
        let gameAssetURL = importDefault(1416).getGameAssetURL(obj);
        if (gameAssetURL == null) {
          gameAssetURL = null;
        }
        tmp7 = gameAssetURL;
        const obj4 = importDefault(1416);
      }
      return tmp7;
    } else if ("url" === type) {
      obj = require(4316) /* isImageProxyURL */;
      size = undefined;
      if (size != null) {
        size = size.size;
      }
      obj = { size: null, keepAspectRatio: null };
      obj[0] = size;
      let keepAspectRatio;
      if (size != null) {
        keepAspectRatio = size.keepAspectRatio;
      }
      obj[1] = keepAspectRatio;
      return obj.getSizedImageProxyURL(type.value, obj);
    } else {
      return null;
    }
  }
};