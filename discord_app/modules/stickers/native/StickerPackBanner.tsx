// === Module 10746: StickerPackBanner ===

// Module 10746 (StickerPackBanner)
import StickersUtils from "StickersUtils" /* 5190 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Image: c2, View: c3 } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/stickers/native/StickerPackBanner.tsx");

export default function StickerPackBanner(arg0) {
  ({ containerStyle, style, stickerPack } = arg0);
  const stickerPackBannerAssetUrl = StickersUtils.getStickerPackBannerAssetUrl(stickerPack, 1024);
  let tmp2 = null;
  if (null != stickerPackBannerAssetUrl) {
    const obj2 = { style: containerStyle, children: null };
    const obj3 = { source: null, style: null, resizeMode: "contain" };
    const obj4 = { uri: stickerPackBannerAssetUrl };
    obj3.source = obj4;
    obj3.style = style;
    obj2.children = <React2 source={null} style={null} resizeMode="contain" />;
    tmp2 = <React3 style={containerStyle}>{null}</React3>;
  }
  return tmp2;
};