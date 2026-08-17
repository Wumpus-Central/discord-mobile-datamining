// discord_app/modules/messages/native/renderer/row_data/embeds/getEmbedThemeColors.tsx
import ThemesDefault from "Themes" /* 712 */;
import AccessibilityAnnouncer from "AccessibilityAnnouncer" /* 1363 */;
import hexToRgba from "hexToRgba" /* 4223 */;
import closure_3 from "noop" /* 19 */;
import createCacheKey from "createCacheKey" /* 4661 */;

require = arg1;
const result = createCacheKey.experimental_createToken((theme) => {
  const obj = AccessibilityAnnouncer;
  const unsafe_rawColors = ThemesDefault.unsafe_rawColors;
  return AccessibilityAnnouncer.isThemeDark(theme.theme) ? unsafe_rawColors.PRIMARY_500 : unsafe_rawColors.PRIMARY_400;
});
const result1 = createCacheKey.experimental_createToken((theme) => {
  if (obj.isThemeDark(theme.theme)) {
    let PRIMARY_600 = ThemesDefault.unsafe_rawColors.PRIMARY_600;
  } else {
    PRIMARY_600 = hexToRgba.hexWithOpacity(ThemesDefault.unsafe_rawColors.PRIMARY_500, 0.3);
    const tmpResult = hexToRgba;
  }
  return PRIMARY_600;
});
const result2 = createCacheKey.experimental_createToken((theme) => {
  const obj = AccessibilityAnnouncer;
  const unsafe_rawColors = ThemesDefault.unsafe_rawColors;
  return AccessibilityAnnouncer.isThemeDark(theme.theme) ? unsafe_rawColors.PRIMARY_500 : unsafe_rawColors.PRIMARY_400;
});
const result3 = createCacheKey.experimental_createToken((theme) => {
  const obj = AccessibilityAnnouncer;
  const unsafe_rawColors = ThemesDefault.unsafe_rawColors;
  return AccessibilityAnnouncer.isThemeDark(theme.theme) ? unsafe_rawColors.PRIMARY_500 : unsafe_rawColors.PRIMARY_400;
});
const result4 = createCacheKey.experimental_createToken((theme) => {
  const obj = AccessibilityAnnouncer;
  const unsafe_rawColors = ThemesDefault.unsafe_rawColors;
  return AccessibilityAnnouncer.isThemeDark(theme.theme) ? unsafe_rawColors.PRIMARY_500 : unsafe_rawColors.PRIMARY_100;
});
const result5 = createCacheKey.experimental_createToken((theme) => {
  const obj = AccessibilityAnnouncer;
  const isThemeDarkResult = AccessibilityAnnouncer.isThemeDark(theme.theme);
  const hexWithOpacity = hexToRgba.hexWithOpacity;
  const unsafe_rawColors = ThemesDefault.unsafe_rawColors;
  if (isThemeDarkResult) {
    let hexWithOpacityResult = hexWithOpacity(unsafe_rawColors.WHITE, 0.06);
  } else {
    hexWithOpacityResult = hexWithOpacity(unsafe_rawColors.PRIMARY_860, 0.08);
  }
  return hexWithOpacityResult;
});
const result6 = createCacheKey.experimental_createToken((theme) => {
  const obj = AccessibilityAnnouncer;
  const unsafe_rawColors = ThemesDefault.unsafe_rawColors;
  return AccessibilityAnnouncer.isThemeDark(theme.theme) ? unsafe_rawColors.PRIMARY_600 : unsafe_rawColors.PRIMARY_100;
});
const result7 = createCacheKey.experimental_createToken((theme) => {
  let str = "#666b73";
  if (!obj.isThemeDark(theme.theme)) {
    str = ThemesDefault.unsafe_rawColors.PRIMARY_300;
  }
  return str;
});
const result8 = createCacheKey.experimental_createToken((theme) => {
  if (obj.isThemeDark(theme.theme)) {
    let PRIMARY_600 = ThemesDefault.unsafe_rawColors.PRIMARY_600;
  } else {
    PRIMARY_600 = hexToRgba.hexWithOpacity(ThemesDefault.unsafe_rawColors.PRIMARY_200, 0.3);
    const tmpResult = hexToRgba;
  }
  return PRIMARY_600;
});
createCacheKey = { acceptBlurpleLabelBackgroundColor: ThemesDefault.colors.BACKGROUND_BRAND, acceptLabelGreenBackgroundColor: ThemesDefault.colors.CONTROL_CONNECTED_BACKGROUND_DEFAULT, acceptLabelGreenColor: ThemesDefault.unsafe_rawColors.WHITE, backgroundColor: ThemesDefault.colors.MOBILE_EMBED_BACKGROUND_DEFAULT, bodyTextColor: ThemesDefault.colors.TEXT_DEFAULT, clearLabelRedBackgroundColor: ThemesDefault.unsafe_rawColors.RED_400, clearLabelRedColor: ThemesDefault.unsafe_rawColors.WHITE, headerColor: ThemesDefault.colors.TEXT_SUBTLE, subtitleColor: ThemesDefault.colors.TEXT_SUBTLE, titleColor: ThemesDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, acceptLabelActiveBackgroundColor: result, acceptLabelDisabledBackgroundColor: result1, acceptLabelDisabledBorderColor: result2, acceptLabelDisabledTextColor: result3, acceptLabelDisabledColor: result4, borderColor: result5, resolvingGradientEnd: result6, resolvingGradientStart: result7, thumbnailBackgroundColor: result8, voiceActiveColor: ThemesDefault.colors.TEXT_FEEDBACK_POSITIVE, voiceHeaderBackgroundColor: ThemesDefault.colors.BACKGROUND_MOD_MUTED, voiceMutedColor: ThemesDefault.colors.TEXT_MUTED };
let closure_4 = createCacheKey.createNativeStyleProperties(createCacheKey);
const result9 = require("set").fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/getEmbedThemeColors.tsx");

export default function getEmbedThemeColors(arg0) {
  const colors = callback(arg0);
  const baseColors = { borderColor: colors.borderColor, backgroundColor: colors.backgroundColor, thumbnailCornerRadius: 15, headerColor: colors.headerColor };
  return { colors, baseColors };
};
export const useEmbedThemeColors = function useEmbedThemeColors(arg0) {
  closure_0 = arg0;
  const items = [arg0];
  return React.useMemo(() => {
    const colors = closure_1_4(closure_0);
    const baseColors = { borderColor: colors.borderColor, backgroundColor: colors.backgroundColor, thumbnailCornerRadius: 15, headerColor: colors.headerColor };
    return { colors, baseColors };
  }, items);
};