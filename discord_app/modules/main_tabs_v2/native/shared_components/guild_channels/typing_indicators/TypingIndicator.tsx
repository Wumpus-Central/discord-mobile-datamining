// === Module 16426: typing_indicators/TypingIndicator ===

// Module 16426 (typing_indicators/TypingIndicator)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1200 */;
import shared from "shared" /* 4930 */;
import useThemeDefault from "useTheme" /* 4992 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5091);
let closure_5 = createStyles.createStyles((arg0) => {
  const obj = { ellipsisWrapper: { zIndex: 10, borderRadius: 17, borderWidth: 2, borderColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, ellipsis: null, ellipsisDot: null };
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  obj.ellipsis = { borderRadius: 13, paddingVertical: 4, paddingStart: 4, paddingEnd: 2, marginRight: 0, backgroundColor: arg0 ? unsafe_rawColors.BRAND_200 : unsafe_rawColors.BRAND_500 };
  const unsafe_rawColors2 = nativeDefault.unsafe_rawColors;
  obj.ellipsisDot = { width: 4, height: 4, backgroundColor: arg0 ? unsafe_rawColors2.BRAND_500 : unsafe_rawColors2.WHITE };
  return obj;
});
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/guild_channels/typing_indicators/TypingIndicator.tsx");

export const TypingIndicator = ReactCompilerGating.isReactCompilerEnabled() ? (function TypingIndicator(style) {
  const cResult = c.c(11);
  style = style.style;
  const tmp4 = useThemeDefault();
  if (cResult[0] !== tmp4) {
    const isThemeLightResult = shared.isThemeLight(tmp4);
    cResult[0] = tmp4;
    cResult[1] = isThemeLightResult;
    let tmp5 = isThemeLightResult;
    const tmpResult = shared;
  } else {
    tmp5 = cResult[1];
  }
  const tmp7 = closure_5(tmp5);
  if (cResult[2] === style) {
    if (cResult[3] === tmp7.ellipsisWrapper) {
      let tmp8 = cResult[4];
    }
    if (cResult[5] === tmp7.ellipsis) {
      if (cResult[6] === tmp7.ellipsisDot) {
        let tmp9 = cResult[7];
      }
      if (cResult[8] === tmp8) {
        if (cResult[9] === tmp9) {
          let tmp12 = cResult[10];
        }
        return tmp12;
      }
      const obj2 = { style: tmp8, children: tmp9 };
      const tmp15 = <View style={tmp8}>{tmp9}</View>;
      cResult[8] = tmp8;
      cResult[9] = tmp9;
      cResult[10] = tmp15;
      tmp12 = tmp15;
    }
    ({ ellipsis: obj3.style, ellipsisDot: obj3.dotStyle } = tmp7);
    const tmp11 = jsx(native.Ellipsis, { style: null, dotStyle: null, disableScale: true });
    cResult[5] = tmp7.ellipsis;
    cResult[6] = tmp7.ellipsisDot;
    cResult[7] = tmp11;
    tmp9 = tmp11;
    const obj4 = { style: null, dotStyle: null, disableScale: true };
  }
  const items = [tmp7.ellipsisWrapper, style];
  cResult[2] = style;
  cResult[3] = tmp7.ellipsisWrapper;
  cResult[4] = items;
  tmp8 = items;
}) : (function TypingIndicator(style) {
  const tmp = useThemeDefault();
  const tmp2 = closure_5(shared.isThemeLight(tmp));
  const obj2 = { style: null, children: jsx(native.Ellipsis, { style: tmp2.ellipsis, dotStyle: tmp2.ellipsisDot, disableScale: true }) };
  const items = [tmp2.ellipsisWrapper, style.style];
  obj2.style = items;
  return <View style={null}>{jsx(native.Ellipsis, { style: tmp2.ellipsis, dotStyle: tmp2.ellipsisDot, disableScale: true })}</View>;
});