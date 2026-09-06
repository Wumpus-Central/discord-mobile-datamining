// === Module 10399: StickerPackBanner ===

// Module 10399 (StickerPackBanner)
import StickersUtils from "StickersUtils" /* 4899 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Image: c2, View: c3 } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/stickers/native/StickerPackBanner.tsx");

export default function StickerPackBanner(arg0) {
  ({ containerStyle, style, stickerPack } = arg0);
  let obj = StickersUtils;
  const stickerPackBannerAssetUrl = obj.getStickerPackBannerAssetUrl(stickerPack, 1024);
  let tmp2 = null;
  if (null != stickerPackBannerAssetUrl) {
    obj = { style: containerStyle, children: null };
    obj = { source: null, style: null, resizeMode: "contain" };
    const obj1 = { uri: stickerPackBannerAssetUrl };
    obj.source = obj1;
    obj.style = style;
    obj.children = <React2 source={null} style={null} resizeMode="contain" />;
    tmp2 = <React3 source={null} style={null} resizeMode="contain" />;
  }
  return tmp2;
};