// === Module 10138: StickerPackBanner ===

// Module 10138 (StickerPackBanner)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import StickersUtils from "StickersUtils" /* 5435 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
({ Image: c2, View: c3 } = react_native);
const jsx = Fragment.jsx;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let containerStyle;
  let stickerPack;
  let style;
  let tmp4;
  const obj = react2;
  const cResult = obj.c(10);
  ({ containerStyle, style, stickerPack } = arg0);
  if (cResult[0] !== stickerPack) {
    const tmpResult = StickersUtils;
    const stickerPackBannerAssetUrl = tmpResult.getStickerPackBannerAssetUrl(stickerPack, 1024);
    cResult[0] = stickerPack;
    cResult[1] = stickerPackBannerAssetUrl;
    tmp4 = stickerPackBannerAssetUrl;
  } else {
    tmp4 = cResult[1];
  }
  let tmp6 = null;
  if (null != tmp4) {
    let tmp7;
    if (cResult[2] !== tmp4) {
      const obj2 = { uri: tmp4 };
      cResult[2] = tmp4;
      cResult[3] = obj2;
      tmp7 = obj2;
    } else {
      tmp7 = cResult[3];
    }
    if (cResult[4] === style) {
      let tmp8;
      if (cResult[5] === tmp7) {
        tmp8 = cResult[6];
      }
      if (cResult[7] === containerStyle) {
        let tmp12;
        if (cResult[8] === tmp8) {
          tmp12 = cResult[9];
        }
        tmp6 = tmp12;
      }
      const tmp15 = <_false style={containerStyle}>{tmp8}</_false>;
      cResult[7] = containerStyle;
      cResult[8] = tmp8;
      cResult[9] = tmp15;
      tmp12 = tmp15;
    }
    const tmp11 = <React2 source={tmp7} style={style} resizeMode="contain" />;
    cResult[4] = style;
    cResult[5] = tmp7;
    cResult[6] = tmp11;
    tmp8 = tmp11;
  }
  return tmp6;
}) : ((arg0) => {
  let containerStyle;
  let stickerPack;
  let style;
  ({ containerStyle, style, stickerPack } = arg0);
  const obj = StickersUtils;
  const stickerPackBannerAssetUrl = obj.getStickerPackBannerAssetUrl(stickerPack, 1024);
  let tmp2 = null;
  if (null != stickerPackBannerAssetUrl) {
    tmp2 = <_false style={containerStyle}>{null}</_false>;
    const obj4 = { uri: stickerPackBannerAssetUrl };
  }
  return tmp2;
});
const result = size.fileFinishedImporting("modules/stickers/native/StickerPackBanner.tsx");

export default tmp4;