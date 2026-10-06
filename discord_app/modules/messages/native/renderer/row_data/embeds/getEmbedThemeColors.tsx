// === Module 7615: getEmbedThemeColors ===

// Module 7615 (getEmbedThemeColors)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import ColorUtils from "ColorUtils" /* 4733 */;
import shared from "shared" /* 4735 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let theme;

let createStyles = createStyles_mod;
const result = createStyles.experimental_createToken((theme) => {
  theme = theme.theme;
  const obj = shared;
  const isThemeDarkResult = obj.isThemeDark(theme);
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  return isThemeDarkResult ? unsafe_rawColors.PRIMARY_500 : unsafe_rawColors.PRIMARY_400;
});
createStyles = createStyles_mod;
const result1 = createStyles.experimental_createToken((theme) => {
  let PRIMARY_600;
  theme = theme.theme;
  const obj = shared;
  if (obj.isThemeDark(theme)) {
    PRIMARY_600 = nativeDefault.unsafe_rawColors.PRIMARY_600;
  } else {
    const tmpResult = ColorUtils;
    PRIMARY_600 = tmpResult.hexWithOpacity(nativeDefault.unsafe_rawColors.PRIMARY_500, 0.3);
  }
  return PRIMARY_600;
});
createStyles = createStyles_mod;
const result2 = createStyles.experimental_createToken((theme) => {
  theme = theme.theme;
  const obj = shared;
  const isThemeDarkResult = obj.isThemeDark(theme);
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  return isThemeDarkResult ? unsafe_rawColors.PRIMARY_500 : unsafe_rawColors.PRIMARY_400;
});
createStyles = createStyles_mod;
const result3 = createStyles.experimental_createToken((theme) => {
  theme = theme.theme;
  const obj = shared;
  const isThemeDarkResult = obj.isThemeDark(theme);
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  return isThemeDarkResult ? unsafe_rawColors.PRIMARY_500 : unsafe_rawColors.PRIMARY_400;
});
createStyles = createStyles_mod;
const result4 = createStyles.experimental_createToken((theme) => {
  theme = theme.theme;
  const obj = shared;
  const isThemeDarkResult = obj.isThemeDark(theme);
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  return isThemeDarkResult ? unsafe_rawColors.PRIMARY_500 : unsafe_rawColors.PRIMARY_100;
});
createStyles = createStyles_mod;
const result5 = createStyles.experimental_createToken((theme) => {
  let hexWithOpacityResult;
  theme = theme.theme;
  const obj = shared;
  const isThemeDarkResult = obj.isThemeDark(theme);
  const hexWithOpacity = ColorUtils.hexWithOpacity;
  ColorUtils;
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  if (isThemeDarkResult) {
    hexWithOpacityResult = hexWithOpacity(unsafe_rawColors.WHITE, 0.06);
  } else {
    hexWithOpacityResult = hexWithOpacity(unsafe_rawColors.PRIMARY_860, 0.08);
  }
  return hexWithOpacityResult;
});
createStyles = createStyles_mod;
const result6 = createStyles.experimental_createToken((theme) => {
  theme = theme.theme;
  const obj = shared;
  const isThemeDarkResult = obj.isThemeDark(theme);
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  return isThemeDarkResult ? unsafe_rawColors.PRIMARY_600 : unsafe_rawColors.PRIMARY_100;
});
createStyles = createStyles_mod;
const result7 = createStyles.experimental_createToken((theme) => {
  theme = theme.theme;
  let str = "#666b73";
  const obj = shared;
  if (!obj.isThemeDark(theme)) {
    str = nativeDefault.unsafe_rawColors.PRIMARY_300;
  }
  return str;
});
createStyles = createStyles_mod;
const result8 = createStyles.experimental_createToken((theme) => {
  let PRIMARY_600;
  theme = theme.theme;
  const obj = shared;
  if (obj.isThemeDark(theme)) {
    PRIMARY_600 = nativeDefault.unsafe_rawColors.PRIMARY_600;
  } else {
    const tmpResult = ColorUtils;
    PRIMARY_600 = tmpResult.hexWithOpacity(nativeDefault.unsafe_rawColors.PRIMARY_200, 0.3);
  }
  return PRIMARY_600;
});
createStyles = createStyles_mod;
let obj = { acceptBlurpleLabelBackgroundColor: nativeDefault.colors.BACKGROUND_BRAND, acceptLabelGreenBackgroundColor: nativeDefault.colors.CONTROL_CONNECTED_BACKGROUND_DEFAULT, acceptLabelGreenColor: nativeDefault.unsafe_rawColors.WHITE, backgroundColor: nativeDefault.colors.MOBILE_EMBED_BACKGROUND_DEFAULT, bodyTextColor: nativeDefault.colors.TEXT_DEFAULT, clearLabelRedBackgroundColor: nativeDefault.unsafe_rawColors.RED_400, clearLabelRedColor: nativeDefault.unsafe_rawColors.WHITE, headerColor: nativeDefault.colors.TEXT_SUBTLE, subtitleColor: nativeDefault.colors.TEXT_SUBTLE, titleColor: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, acceptLabelActiveBackgroundColor: result, acceptLabelDisabledBackgroundColor: result1, acceptLabelDisabledBorderColor: result2, acceptLabelDisabledTextColor: result3, acceptLabelDisabledColor: result4, borderColor: result5, resolvingGradientEnd: result6, resolvingGradientStart: result7, thumbnailBackgroundColor: result8, voiceActiveColor: nativeDefault.colors.TEXT_FEEDBACK_POSITIVE, voiceHeaderBackgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, voiceMutedColor: nativeDefault.colors.TEXT_MUTED };
let closure_4 = createStyles.createNativeStyleProperties(obj);
function getEmbedThemeColors(arg0) {
  const tmp = closure_4(arg0);
  return { colors: tmp, baseColors: { borderColor: tmp.borderColor, backgroundColor: tmp.backgroundColor, thumbnailCornerRadius: 15, headerColor: tmp.headerColor } };
}
const tmp11 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let obj5;
  let tmp2;
  const obj = react2;
  const cResult = obj.c(2);
  if (cResult[0] !== arg0) {
    const tmp4 = closure_4(arg0);
    const obj2 = { colors: tmp4, baseColors: obj5 };
    obj5 = { borderColor: null, backgroundColor: null, thumbnailCornerRadius: 15, headerColor: null };
    ({ borderColor: obj3.borderColor, backgroundColor: obj3.backgroundColor, headerColor: obj3.headerColor } = tmp4);
    cResult[0] = arg0;
    cResult[1] = obj2;
    tmp2 = obj2;
  } else {
    tmp2 = cResult[1];
  }
  return tmp2;
}) : ((arg0) => {
  let closure_0 = arg0;
  const items = [arg0];
  return react.useMemo(() => {
    const tmp = closure_4(closure_0);
    return { colors: tmp, baseColors: { borderColor: tmp.borderColor, backgroundColor: tmp.backgroundColor, thumbnailCornerRadius: 15, headerColor: tmp.headerColor } };
  }, items);
});
const result9 = size.fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/getEmbedThemeColors.tsx");

export default getEmbedThemeColors;
export const useEmbedThemeColors = tmp11;