// === Module 16008: typing_indicators/TypingIndicator ===

// Module 16008 (typing_indicators/TypingIndicator)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1188 */;
import shared from "shared" /* 4729 */;
import useThemeDefault from "useTheme" /* 4791 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let style;

const View = react_native.View;
const jsx = Fragment.jsx;
let closure_5 = createStyles.createStyles((arg0) => {
  let unsafe_rawColors;
  let unsafe_rawColors2;
  const obj = { ellipsisWrapper: { zIndex: 10, borderRadius: 17, borderWidth: 2, borderColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, ellipsis: { borderRadius: 13, paddingVertical: 4, paddingStart: 4, paddingEnd: 2, marginRight: 0, backgroundColor: arg0 ? unsafe_rawColors.BRAND_200 : unsafe_rawColors.BRAND_500 }, ellipsisDot: { width: 4, height: 4, backgroundColor: arg0 ? unsafe_rawColors2.BRAND_500 : unsafe_rawColors2.WHITE } };
  ({ zIndex: 10, borderRadius: 17, borderWidth: 2, borderColor: nativeDefault.colors.BACKGROUND_BASE_LOW });
  unsafe_rawColors = nativeDefault.unsafe_rawColors;
  unsafe_rawColors2 = nativeDefault.unsafe_rawColors;
  return obj;
});
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((style) => {
  let tmp5;
  const obj = react2;
  const cResult = obj.c(13);
  style = style.style;
  const tmp4 = useThemeDefault();
  if (cResult[0] !== tmp4) {
    const tmpResult = shared;
    const isThemeLightResult = tmpResult.isThemeLight(tmp4);
    cResult[0] = tmp4;
    cResult[1] = isThemeLightResult;
    tmp5 = isThemeLightResult;
  } else {
    tmp5 = cResult[1];
  }
  const tmp7 = closure_5(tmp5);
  if (cResult[2] === style) {
    let tmp8;
    let tmp9;
    if (cResult[3] === tmp7.ellipsisWrapper) {
      tmp8 = cResult[4];
    }
    if (cResult[5] !== tmp7.ellipsis) {
      const items = [tmp7.ellipsis];
      cResult[5] = tmp7.ellipsis;
      cResult[6] = items;
      tmp9 = items;
    } else {
      tmp9 = cResult[6];
    }
    if (cResult[7] === tmp7.ellipsisDot) {
      let tmp10;
      if (cResult[8] === tmp9) {
        tmp10 = cResult[9];
      }
      if (cResult[10] === tmp8) {
        let tmp13;
        if (cResult[11] === tmp10) {
          tmp13 = cResult[12];
        }
        return tmp13;
      }
      const tmp16 = <View style={tmp8}>{tmp10}</View>;
      cResult[10] = tmp8;
      cResult[11] = tmp10;
      cResult[12] = tmp16;
      tmp13 = tmp16;
    }
    const tmp12 = jsx(native.Ellipsis, { style: tmp9, dotStyle: tmp7.ellipsisDot, disableScale: true });
    cResult[7] = tmp7.ellipsisDot;
    cResult[8] = tmp9;
    cResult[9] = tmp12;
    tmp10 = tmp12;
  }
  const items1 = [tmp7.ellipsisWrapper, style];
  cResult[2] = style;
  cResult[3] = tmp7.ellipsisWrapper;
  cResult[4] = items1;
  tmp8 = items1;
}) : ((style) => {
  style = style.style;
  const tmp = useThemeDefault();
  const obj = shared;
  const tmp2 = closure_5(obj.isThemeLight(tmp));
  const items = [tmp2.ellipsisWrapper, style];
  const items1 = [tmp2.ellipsis];
  return <View style={items}>{null}</View>;
});
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/guild_channels/typing_indicators/TypingIndicator.tsx");

export const TypingIndicator = tmp3;