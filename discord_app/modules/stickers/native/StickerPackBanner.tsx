// === Module 10125: StickerPackBanner ===

// Module 10125 (StickerPackBanner)
import c from "c" /* 576 */;
import StickersUtils from "StickersUtils" /* 5428 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Image: c2, View: c3 } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/stickers/native/StickerPackBanner.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
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
      const tmp14 = <React3 style={containerStyle}>{tmp7}</React3>;
      cResult[7] = containerStyle;
      cResult[8] = tmp7;
      cResult[9] = tmp14;
    }
    const obj4 = { source: tmp6, style, resizeMode: "contain" };
    const tmp10 = <React2 source={tmp6} style={style} resizeMode="contain" />;
    cResult[4] = style;
    cResult[5] = tmp6;
    cResult[6] = tmp10;
    tmp7 = tmp10;
  }
}) : ((arg0) => {
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
});