// === Module 8178: result ===

// Module 8178 (result)
import set from "set" /* 2 */;
import ThemesDefault from "Themes" /* 712 */;
import AccessibilityAnnouncer from "AccessibilityAnnouncer" /* 1363 */;
import createCacheKey from "createCacheKey" /* 4661 */;

const result = createCacheKey.experimental_createToken((theme) => {
  obj = AccessibilityAnnouncer;
  const unsafe_rawColors = ThemesDefault.unsafe_rawColors;
  return AccessibilityAnnouncer.isThemeDark(theme.theme) ? unsafe_rawColors.PRIMARY_300 : unsafe_rawColors.PRIMARY_630;
});
let obj = { textColor: null, linkColor: null, timestampColor: null, highlightColor: null, unsupportedColor: null, embedProviderColor: null, embedBorderLeftColor: null, embedBodyTextColor: null, embedHeaderTextColor: null, opTagTextColor: null, opTagBackgroundColor: null, failedMessageBodyTextColor: null, automodBlockedBodyTextColor: null, aiBotTagColor: null, editedColor: null, defaultUsernameColor: null, feedbackColor: null, reportFpTextColor: null, reportFpBackgroundColor: null, retryTextColor: null, retryBackgroundColor: null, clipTagBackgroundColor: null, clipTagTextColor: null };
const result1 = createCacheKey.experimental_createToken((theme) => {
  obj = AccessibilityAnnouncer;
  const unsafe_rawColors = ThemesDefault.unsafe_rawColors;
  return AccessibilityAnnouncer.isThemeDark(theme.theme) ? unsafe_rawColors.BRAND_260 : unsafe_rawColors.BRAND_200;
});
obj[0] = ThemesDefault.colors.TEXT_STRONG;
obj[1] = ThemesDefault.colors.TEXT_LINK;
obj[2] = ThemesDefault.colors.TEXT_MUTED;
obj[3] = ThemesDefault.colors.MESSAGE_HIGHLIGHT_BACKGROUND_DEFAULT;
obj[4] = ThemesDefault.colors.TEXT_MUTED;
obj[5] = result;
obj[6] = ThemesDefault.colors.BORDER_NORMAL;
obj[7] = ThemesDefault.colors.TEXT_DEFAULT;
obj[8] = ThemesDefault.colors.MOBILE_TEXT_HEADING_PRIMARY;
obj[9] = ThemesDefault.unsafe_rawColors.BRAND_560;
obj[10] = result1;
obj[11] = ThemesDefault.unsafe_rawColors.RED_400;
obj[12] = ThemesDefault.colors.TEXT_MUTED;
obj[13] = ThemesDefault.colors.TEXT_FEEDBACK_POSITIVE;
obj[14] = ThemesDefault.colors.TEXT_MUTED;
obj[15] = ThemesDefault.colors.INTERACTIVE_TEXT_ACTIVE;
obj[16] = ThemesDefault.colors.BACKGROUND_MOD_MUTED;
obj[17] = ThemesDefault.colors.CONTROL_SECONDARY_TEXT_DEFAULT;
obj[18] = ThemesDefault.colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT;
obj[19] = ThemesDefault.colors.WHITE;
obj[20] = ThemesDefault.colors.BACKGROUND_BRAND;
obj[21] = ThemesDefault.colors.BACKGROUND_BRAND;
obj[22] = ThemesDefault.unsafe_rawColors.WHITE;
let closure_4 = createCacheKey.createNativeStyleProperties((arg0) => {
  const colors = ThemesDefault.colors;
  obj = { embedBackgroundColor: arg0 ? colors.EMBED_BACKGROUND_ALTERNATE : colors.EMBED_BACKGROUND };
  const merged = Object.assign(obj);
  return obj;
});
const result2 = set.fileFinishedImporting("modules/messages/native/renderer/resolveMessageContentColors.tsx");

export default function resolveMessageContentColors(arg0) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  return callback(arg0, flag);
};