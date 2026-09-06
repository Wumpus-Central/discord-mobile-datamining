// === Module 7945: getEmbedThemeColors ===

// Module 7945 (getEmbedThemeColors)
import nativeDefault from "native" /* 576 */;
import ColorUtils from "ColorUtils" /* 4409 */;
import shared from "shared" /* 4411 */;
import noop from "module_19" /* 19 */;

require = fn;
let createStyles = fn(4560);
const result = createStyles.experimental_createToken((theme) => {
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  return shared.isThemeDark(theme.theme) ? unsafe_rawColors.PRIMARY_500 : unsafe_rawColors.PRIMARY_400;
});
createStyles = fn(4560);
const result1 = createStyles.experimental_createToken((theme) => {
  if (obj.isThemeDark(theme.theme)) {
    let PRIMARY_600 = nativeDefault.unsafe_rawColors.PRIMARY_600;
  } else {
    PRIMARY_600 = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.PRIMARY_500, 0.3);
    const tmpResult = ColorUtils;
  }
  return PRIMARY_600;
});
createStyles = fn(4560);
const result2 = createStyles.experimental_createToken((theme) => {
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  return shared.isThemeDark(theme.theme) ? unsafe_rawColors.PRIMARY_500 : unsafe_rawColors.PRIMARY_400;
});
createStyles = fn(4560);
const result3 = createStyles.experimental_createToken((theme) => {
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  return shared.isThemeDark(theme.theme) ? unsafe_rawColors.PRIMARY_500 : unsafe_rawColors.PRIMARY_400;
});
createStyles = fn(4560);
const result4 = createStyles.experimental_createToken((theme) => {
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  return shared.isThemeDark(theme.theme) ? unsafe_rawColors.PRIMARY_500 : unsafe_rawColors.PRIMARY_100;
});
createStyles = fn(4560);
const result5 = createStyles.experimental_createToken((theme) => {
  const isThemeDarkResult = shared.isThemeDark(theme.theme);
  const hexWithOpacity = ColorUtils.hexWithOpacity;
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  if (isThemeDarkResult) {
    let hexWithOpacityResult = hexWithOpacity(unsafe_rawColors.WHITE, 0.06);
  } else {
    hexWithOpacityResult = hexWithOpacity(unsafe_rawColors.PRIMARY_860, 0.08);
  }
  return hexWithOpacityResult;
});
createStyles = fn(4560);
const result6 = createStyles.experimental_createToken((theme) => {
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  return shared.isThemeDark(theme.theme) ? unsafe_rawColors.PRIMARY_600 : unsafe_rawColors.PRIMARY_100;
});
createStyles = fn(4560);
const result7 = createStyles.experimental_createToken((theme) => {
  let str = "#666b73";
  if (!obj.isThemeDark(theme.theme)) {
    str = nativeDefault.unsafe_rawColors.PRIMARY_300;
  }
  return str;
});
createStyles = fn(4560);
const result8 = createStyles.experimental_createToken((theme) => {
  if (obj.isThemeDark(theme.theme)) {
    let PRIMARY_600 = nativeDefault.unsafe_rawColors.PRIMARY_600;
  } else {
    PRIMARY_600 = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.PRIMARY_200, 0.3);
    const tmpResult = ColorUtils;
  }
  return PRIMARY_600;
});
fn(4560);
createStyles = { acceptBlurpleLabelBackgroundColor: nativeDefault.colors.BACKGROUND_BRAND, acceptLabelGreenBackgroundColor: nativeDefault.colors.CONTROL_CONNECTED_BACKGROUND_DEFAULT, acceptLabelGreenColor: nativeDefault.unsafe_rawColors.WHITE, backgroundColor: nativeDefault.colors.MOBILE_EMBED_BACKGROUND_DEFAULT, bodyTextColor: nativeDefault.colors.TEXT_DEFAULT, clearLabelRedBackgroundColor: nativeDefault.unsafe_rawColors.RED_400, clearLabelRedColor: nativeDefault.unsafe_rawColors.WHITE, headerColor: nativeDefault.colors.TEXT_SUBTLE, subtitleColor: nativeDefault.colors.TEXT_SUBTLE, titleColor: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, acceptLabelActiveBackgroundColor: result, acceptLabelDisabledBackgroundColor: result1, acceptLabelDisabledBorderColor: result2, acceptLabelDisabledTextColor: result3, acceptLabelDisabledColor: result4, borderColor: result5, resolvingGradientEnd: result6, resolvingGradientStart: result7, thumbnailBackgroundColor: result8, voiceActiveColor: nativeDefault.colors.TEXT_FEEDBACK_POSITIVE, voiceHeaderBackgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, voiceMutedColor: nativeDefault.colors.TEXT_MUTED };
let closure_4 = createStyles.createNativeStyleProperties(createStyles);
const size = fn(2);
const result9 = size.fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/getEmbedThemeColors.tsx");

export default function getEmbedThemeColors(arg0) {
  const tmp = closure_4(arg0);
  return { colors: tmp, baseColors: { borderColor: tmp.borderColor, backgroundColor: tmp.backgroundColor, thumbnailCornerRadius: 15, headerColor: tmp.headerColor } };
};
export const useEmbedThemeColors = function useEmbedThemeColors(arg0) {
  closure_0 = arg0;
  const items = [arg0];
  return noop.useMemo(() => {
    const tmp = closure_4(closure_0);
    return { colors: tmp, baseColors: { borderColor: tmp.borderColor, backgroundColor: tmp.backgroundColor, thumbnailCornerRadius: 15, headerColor: tmp.headerColor } };
  }, items);
};