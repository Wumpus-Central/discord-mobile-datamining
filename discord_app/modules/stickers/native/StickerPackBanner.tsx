// === Module 10229: StickerPackBanner ===

// Module 10229 (StickerPackBanner)
import noopAll from "noop" /* 19 */;
import getStickerExtensionFromFormatType from "getStickerExtensionFromFormatType" /* 4823 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

require = fn;
noopAll;
({ Image: obj1, View: c3 } = get_ActivityIndicator);
const result = require("obj132").fileFinishedImporting("modules/stickers/native/StickerPackBanner.tsx");

export default function StickerPackBanner(arg0) {
  ({ containerStyle, style, stickerPack } = arg0);
  let obj = getStickerExtensionFromFormatType;
  const stickerPackBannerAssetUrl = obj.getStickerPackBannerAssetUrl(stickerPack, 1024);
  let tmp2 = null;
  if (null != stickerPackBannerAssetUrl) {
    obj = { style: null, children: null };
    obj[0] = containerStyle;
    obj = { source: null, style: null, resizeMode: "contain" };
    obj1 = { uri: null };
    obj1[0] = stickerPackBannerAssetUrl;
    obj[0] = obj1;
    obj[1] = style;
    obj[1] = <closure_2 source={null} style={null} resizeMode="contain" />;
    tmp2 = <closure_3 source={null} style={null} resizeMode="contain" />;
  }
  return tmp2;
};