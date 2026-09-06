// discord_app/modules/messages/native/renderer/resolveMessageContentColors.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import shared from "../../../../design/shared.tsx";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const result = createStyles.experimental_createToken((theme) => {
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  return shared.isThemeDark(theme.theme) ? unsafe_rawColors.PRIMARY_300 : unsafe_rawColors.PRIMARY_630;
});
let obj = {
  textColor: null,
  linkColor: null,
  timestampColor: null,
  highlightColor: null,
  unsupportedColor: null,
  embedProviderColor: null,
  embedBorderLeftColor: null,
  embedBodyTextColor: null,
  embedHeaderTextColor: null,
  opTagTextColor: null,
  opTagBackgroundColor: null,
  failedMessageBodyTextColor: null,
  automodBlockedBodyTextColor: null,
  aiBotTagColor: null,
  editedColor: null,
  defaultUsernameColor: null,
  feedbackColor: null,
  reportFpTextColor: null,
  reportFpBackgroundColor: null,
  retryTextColor: null,
  retryBackgroundColor: null,
  clipTagBackgroundColor: null,
  clipTagTextColor: null,
};
const result1 = createStyles.experimental_createToken((theme) => {
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  return shared.isThemeDark(theme.theme) ? unsafe_rawColors.BRAND_260 : unsafe_rawColors.BRAND_200;
});
obj.textColor = nativeDefault.colors.TEXT_STRONG;
obj.linkColor = nativeDefault.colors.TEXT_LINK;
obj.timestampColor = nativeDefault.colors.TEXT_MUTED;
obj.highlightColor = nativeDefault.colors.MESSAGE_HIGHLIGHT_BACKGROUND_DEFAULT;
obj.unsupportedColor = nativeDefault.colors.TEXT_MUTED;
obj.embedProviderColor = result;
obj.embedBorderLeftColor = nativeDefault.colors.BORDER_NORMAL;
obj.embedBodyTextColor = nativeDefault.colors.TEXT_DEFAULT;
obj.embedHeaderTextColor = nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY;
obj.opTagTextColor = nativeDefault.unsafe_rawColors.BRAND_560;
obj.opTagBackgroundColor = result1;
obj.failedMessageBodyTextColor = nativeDefault.unsafe_rawColors.RED_400;
obj.automodBlockedBodyTextColor = nativeDefault.colors.TEXT_MUTED;
obj.aiBotTagColor = nativeDefault.colors.TEXT_FEEDBACK_POSITIVE;
obj.editedColor = nativeDefault.colors.TEXT_MUTED;
obj.defaultUsernameColor = nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE;
obj.feedbackColor = nativeDefault.colors.BACKGROUND_MOD_MUTED;
obj.reportFpTextColor = nativeDefault.colors.CONTROL_SECONDARY_TEXT_DEFAULT;
obj.reportFpBackgroundColor = nativeDefault.colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT;
obj.retryTextColor = nativeDefault.colors.WHITE;
obj.retryBackgroundColor = nativeDefault.colors.BACKGROUND_BRAND;
obj.clipTagBackgroundColor = nativeDefault.colors.BACKGROUND_BRAND;
obj.clipTagTextColor = nativeDefault.unsafe_rawColors.WHITE;
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
}
