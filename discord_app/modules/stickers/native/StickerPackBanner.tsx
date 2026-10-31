// === Module 10279: StickerPackBanner ===

// Module 10279 (StickerPackBanner)
import FastImageDefault from "FastImage" /* 5717 */;
import StickersUtils from "StickersUtils" /* 6560 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/stickers/native/StickerPackBanner.tsx");

export default function StickerPackBanner(arg0) {
  ({ containerStyle, style, stickerPack } = arg0);
  const stickerPackBannerAssetUrl = StickersUtils.getStickerPackBannerAssetUrl(stickerPack, 1024);
  let tmp3 = null;
  if (null != stickerPackBannerAssetUrl) {
    const obj2 = { style: containerStyle, children: null };
    const obj3 = { source: null, style: null, resizeMode: "contain" };
    const obj4 = { uri: stickerPackBannerAssetUrl };
    obj3.source = obj4;
    obj3.style = style;
    obj2.children = jsx(FastImageDefault, { source: null, style: null, resizeMode: "contain" });
    tmp3 = <View style={containerStyle}>{null}</View>;
  }
  return tmp3;
};