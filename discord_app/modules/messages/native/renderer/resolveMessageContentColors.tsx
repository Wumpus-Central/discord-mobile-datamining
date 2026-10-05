// === Module 7612: resolveMessageContentColors ===

// Module 7612 (resolveMessageContentColors)
import nativeDefault from "native" /* 587 */;
import shared from "shared" /* 4729 */;
import createStyles_mod from "createStyles" /* 4890 */;
import size from "module_2" /* 2 */;

let theme;

let result1;
let createStyles = createStyles_mod;
const result = createStyles.experimental_createToken((theme) => {
  theme = theme.theme;
  obj = shared;
  const isThemeDarkResult = obj.isThemeDark(theme);
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  return isThemeDarkResult ? unsafe_rawColors.PRIMARY_300 : unsafe_rawColors.PRIMARY_630;
});
createStyles = createStyles_mod;
let obj = { textColor: nativeDefault.colors.TEXT_STRONG, linkColor: nativeDefault.colors.TEXT_LINK, timestampColor: nativeDefault.colors.TEXT_MUTED, highlightColor: nativeDefault.colors.MESSAGE_HIGHLIGHT_BACKGROUND_DEFAULT, unsupportedColor: nativeDefault.colors.TEXT_MUTED, embedProviderColor: result, embedBorderLeftColor: nativeDefault.colors.BORDER_NORMAL, embedBodyTextColor: nativeDefault.colors.TEXT_DEFAULT, embedHeaderTextColor: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, opTagTextColor: nativeDefault.unsafe_rawColors.BRAND_560, opTagBackgroundColor: result1, failedMessageBodyTextColor: nativeDefault.unsafe_rawColors.RED_400, automodBlockedBodyTextColor: nativeDefault.colors.TEXT_MUTED, aiBotTagColor: nativeDefault.colors.TEXT_FEEDBACK_POSITIVE, editedColor: nativeDefault.colors.TEXT_MUTED, defaultUsernameColor: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE, feedbackColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, reportFpTextColor: nativeDefault.colors.CONTROL_SECONDARY_TEXT_DEFAULT, reportFpBackgroundColor: nativeDefault.colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT, retryTextColor: nativeDefault.colors.WHITE, retryBackgroundColor: nativeDefault.colors.BACKGROUND_BRAND, clipTagBackgroundColor: nativeDefault.colors.BACKGROUND_BRAND, clipTagTextColor: nativeDefault.unsafe_rawColors.WHITE };
result1 = createStyles.experimental_createToken((theme) => {
  theme = theme.theme;
  obj = shared;
  const isThemeDarkResult = obj.isThemeDark(theme);
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  return isThemeDarkResult ? unsafe_rawColors.BRAND_260 : unsafe_rawColors.BRAND_200;
});
createStyles = createStyles_mod;
let closure_4 = createStyles.createNativeStyleProperties((arg0) => {
  const colors = nativeDefault.colors;
  obj = { embedBackgroundColor: arg0 ? colors.EMBED_BACKGROUND_ALTERNATE : colors.EMBED_BACKGROUND };
  const merged = Object.assign(obj);
  return obj;
});
const result2 = size.fileFinishedImporting("modules/messages/native/renderer/resolveMessageContentColors.tsx");

export default function resolveMessageContentColors(arg0) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  return closure_4(arg0, flag);
};