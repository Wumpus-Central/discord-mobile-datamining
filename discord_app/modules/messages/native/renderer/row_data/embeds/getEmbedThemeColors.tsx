// discord_app/modules/messages/native/renderer/row_data/embeds/getEmbedThemeColors.tsx
import noop from "noop";
import createCacheKey from "createCacheKey";
import createCacheKey from "createCacheKey";
import createCacheKey from "createCacheKey";
import createCacheKey from "createCacheKey";
import createCacheKey from "createCacheKey";
import createCacheKey from "createCacheKey";
import createCacheKey from "createCacheKey";
import createCacheKey from "createCacheKey";
import createCacheKey from "createCacheKey";
import createCacheKey from "createCacheKey";

const require = arg1;
const result = createCacheKey.experimental_createToken((theme) => {
  const obj = require(4131) /* AccessibilityAnnouncer */;
  const unsafe_rawColors = importDefault(712).unsafe_rawColors;
  return require(4131) /* AccessibilityAnnouncer */.isThemeDark(theme.theme) ? unsafe_rawColors.PRIMARY_500 : unsafe_rawColors.PRIMARY_400;
});
const result1 = createCacheKey.experimental_createToken((theme) => {
  if (obj.isThemeDark(theme.theme)) {
    let PRIMARY_600 = importDefault(712).unsafe_rawColors.PRIMARY_600;
  } else {
    PRIMARY_600 = require(4129) /* hexToRgba */.hexWithOpacity(importDefault(712).unsafe_rawColors.PRIMARY_500, 0.3);
    const tmpResult = require(4129) /* hexToRgba */;
  }
  return PRIMARY_600;
});
const result2 = createCacheKey.experimental_createToken((theme) => {
  const obj = require(4131) /* AccessibilityAnnouncer */;
  const unsafe_rawColors = importDefault(712).unsafe_rawColors;
  return require(4131) /* AccessibilityAnnouncer */.isThemeDark(theme.theme) ? unsafe_rawColors.PRIMARY_500 : unsafe_rawColors.PRIMARY_400;
});
const result3 = createCacheKey.experimental_createToken((theme) => {
  const obj = require(4131) /* AccessibilityAnnouncer */;
  const unsafe_rawColors = importDefault(712).unsafe_rawColors;
  return require(4131) /* AccessibilityAnnouncer */.isThemeDark(theme.theme) ? unsafe_rawColors.PRIMARY_500 : unsafe_rawColors.PRIMARY_400;
});
const result4 = createCacheKey.experimental_createToken((theme) => {
  const obj = require(4131) /* AccessibilityAnnouncer */;
  const unsafe_rawColors = importDefault(712).unsafe_rawColors;
  return require(4131) /* AccessibilityAnnouncer */.isThemeDark(theme.theme) ? unsafe_rawColors.PRIMARY_500 : unsafe_rawColors.PRIMARY_100;
});
const result5 = createCacheKey.experimental_createToken((theme) => {
  const obj = require(4131) /* AccessibilityAnnouncer */;
  const isThemeDarkResult = require(4131) /* AccessibilityAnnouncer */.isThemeDark(theme.theme);
  const hexWithOpacity = require(4129) /* hexToRgba */.hexWithOpacity;
  const unsafe_rawColors = importDefault(712).unsafe_rawColors;
  if (isThemeDarkResult) {
    let hexWithOpacityResult = hexWithOpacity(unsafe_rawColors.WHITE, 0.06);
  } else {
    hexWithOpacityResult = hexWithOpacity(unsafe_rawColors.PRIMARY_860, 0.08);
  }
  return hexWithOpacityResult;
});
const result6 = createCacheKey.experimental_createToken((theme) => {
  const obj = require(4131) /* AccessibilityAnnouncer */;
  const unsafe_rawColors = importDefault(712).unsafe_rawColors;
  return require(4131) /* AccessibilityAnnouncer */.isThemeDark(theme.theme) ? unsafe_rawColors.PRIMARY_600 : unsafe_rawColors.PRIMARY_100;
});
const result7 = createCacheKey.experimental_createToken((theme) => {
  let str = "#666b73";
  if (!obj.isThemeDark(theme.theme)) {
    str = importDefault(712).unsafe_rawColors.PRIMARY_300;
  }
  return str;
});
const result8 = createCacheKey.experimental_createToken((theme) => {
  if (obj.isThemeDark(theme.theme)) {
    let PRIMARY_600 = importDefault(712).unsafe_rawColors.PRIMARY_600;
  } else {
    PRIMARY_600 = require(4129) /* hexToRgba */.hexWithOpacity(importDefault(712).unsafe_rawColors.PRIMARY_200, 0.3);
    const tmpResult = require(4129) /* hexToRgba */;
  }
  return PRIMARY_600;
});
createCacheKey = { acceptBlurpleLabelBackgroundColor: require("Themes").colors.BACKGROUND_BRAND, acceptLabelGreenBackgroundColor: require("Themes").colors.CONTROL_CONNECTED_BACKGROUND_DEFAULT, acceptLabelGreenColor: require("Themes").unsafe_rawColors.WHITE, backgroundColor: require("Themes").colors.MOBILE_EMBED_BACKGROUND_DEFAULT, bodyTextColor: require("Themes").colors.TEXT_DEFAULT, clearLabelRedBackgroundColor: require("Themes").unsafe_rawColors.RED_400, clearLabelRedColor: require("Themes").unsafe_rawColors.WHITE, headerColor: require("Themes").colors.TEXT_SUBTLE, subtitleColor: require("Themes").colors.TEXT_SUBTLE, titleColor: require("Themes").colors.MOBILE_TEXT_HEADING_PRIMARY, acceptLabelActiveBackgroundColor: result, acceptLabelDisabledBackgroundColor: result1, acceptLabelDisabledBorderColor: result2, acceptLabelDisabledTextColor: result3, acceptLabelDisabledColor: result4, borderColor: result5, resolvingGradientEnd: result6, resolvingGradientStart: result7, thumbnailBackgroundColor: result8, voiceActiveColor: require("Themes").colors.TEXT_FEEDBACK_POSITIVE, voiceHeaderBackgroundColor: require("Themes").colors.BACKGROUND_MOD_MUTED, voiceMutedColor: require("Themes").colors.TEXT_MUTED };
createCacheKey = createCacheKey.createNativeStyleProperties(createCacheKey);
const result9 = require("AccessibilityAnnouncer").fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/getEmbedThemeColors.tsx");

export default function getEmbedThemeColors(context) {
  const colors = createCacheKey(context);
  const baseColors = { borderColor: colors.borderColor, backgroundColor: colors.backgroundColor, thumbnailCornerRadius: 15, headerColor: colors.headerColor };
  return { colors, baseColors };
};
export const useEmbedThemeColors = function useEmbedThemeColors(arg0) {
  let closure_0 = arg0;
  const items = [arg0];
  return React.useMemo(() => {
    const colors = outer1_4(closure_0);
    const baseColors = { borderColor: colors.borderColor, backgroundColor: colors.backgroundColor, thumbnailCornerRadius: 15, headerColor: colors.headerColor };
    return { colors, baseColors };
  }, items);
};