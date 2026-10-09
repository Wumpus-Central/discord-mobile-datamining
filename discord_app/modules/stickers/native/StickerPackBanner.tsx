// === Module 9742: StickerPackBanner ===

// Module 9742 (StickerPackBanner)
import c from "c" /* 576 */;
import StickersUtils from "StickersUtils" /* 5746 */;
import FastImageDefault from "FastImage" /* 6163 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/stickers/native/StickerPackBanner.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function StickerPackBanner(arg0) {
  const cResult = c.c(10);
  ({ containerStyle, style, stickerPack } = arg0);
  if (cResult[0] !== stickerPack) {
    const stickerPackBannerAssetUrl = StickersUtils.getStickerPackBannerAssetUrl(stickerPack, 1024);
    cResult[0] = stickerPack;
    cResult[1] = stickerPackBannerAssetUrl;
    let tmp4 = stickerPackBannerAssetUrl;
    const tmpResult = StickersUtils;
  } else {
    tmp4 = cResult[1];
  }
  if (null == tmp4) {
    return null;
  } else {
    if (cResult[2] !== tmp4) {
      const obj2 = { uri: tmp4 };
      cResult[2] = tmp4;
      cResult[3] = obj2;
      let tmp6 = obj2;
    } else {
      tmp6 = cResult[3];
    }
    if (cResult[4] === style) {
      if (cResult[5] === tmp6) {
        let tmp7 = cResult[6];
      }
      if (cResult[7] === containerStyle) {
      }
      const obj3 = { style: containerStyle, children: tmp7 };
      const tmp14 = <View style={containerStyle}>{tmp7}</View>;
      cResult[7] = containerStyle;
      cResult[8] = tmp7;
      cResult[9] = tmp14;
    }
    const obj4 = { source: tmp6, style, resizeMode: "contain" };
    const tmp10 = jsx(FastImageDefault, { source: tmp6, style, resizeMode: "contain" });
    cResult[4] = style;
    cResult[5] = tmp6;
    cResult[6] = tmp10;
    tmp7 = tmp10;
  }
}) : (function StickerPackBanner(arg0) {
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
});