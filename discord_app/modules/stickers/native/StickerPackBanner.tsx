// === Module 9791: StickerPackBanner ===

// Module 9791 (StickerPackBanner)
import "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";

let c3;
let obj1;
const require = arg1;
({ Image: obj1, View: c3 } = get_ActivityIndicator);
const result = require("jsxProd").fileFinishedImporting("modules/stickers/native/StickerPackBanner.tsx");

export default function StickerPackBanner(arg0) {
  let containerStyle;
  let stickerPack;
  let style;
  ({ containerStyle, style, stickerPack } = arg0);
  let obj = require(4590) /* getStickerExtensionFromFormatType */;
  const stickerPackBannerAssetUrl = obj.getStickerPackBannerAssetUrl(stickerPack, 1024);
  let tmp2 = null;
  if (null != stickerPackBannerAssetUrl) {
    obj = { style: null, children: null };
    obj[0] = containerStyle;
    obj = { source: null, style: null, resizeMode: "contain" };
    const obj1 = { uri: null };
    obj1[0] = stickerPackBannerAssetUrl;
    obj[0] = obj1;
    obj[1] = style;
    obj[1] = <closure_2 source={null} style={null} resizeMode="contain" />;
    tmp2 = <closure_3 source={null} style={null} resizeMode="contain" />;
  }
  return tmp2;
};