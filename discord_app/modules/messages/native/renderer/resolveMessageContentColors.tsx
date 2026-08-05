// discord_app/modules/messages/native/renderer/resolveMessageContentColors.tsx
import createCacheKey from "createCacheKey";
import createCacheKey from "createCacheKey";
import createCacheKey from "createCacheKey";
import { Themes } from "../../../../../discord_common/js/packages/tokens/native.tsx";
import { AccessibilityAnnouncer } from "../../../../design/shared.tsx";

const result = createCacheKey.experimental_createToken((theme) => {
  const obj = AccessibilityAnnouncer /* AccessibilityAnnouncer */;
  const unsafe_rawColors = Themes.unsafe_rawColors;
  return AccessibilityAnnouncer /* AccessibilityAnnouncer */.isThemeDark(theme.theme) ? unsafe_rawColors.PRIMARY_300 : unsafe_rawColors.PRIMARY_630;
});
let obj = { textColor: null, linkColor: null, timestampColor: null, highlightColor: null, unsupportedColor: null, embedProviderColor: null, embedBorderLeftColor: null, embedBodyTextColor: null, embedHeaderTextColor: null, opTagTextColor: null, opTagBackgroundColor: null, failedMessageBodyTextColor: null, automodBlockedBodyTextColor: null, aiBotTagColor: null, editedColor: null, defaultUsernameColor: null, feedbackColor: null, reportFpTextColor: null, reportFpBackgroundColor: null, retryTextColor: null, retryBackgroundColor: null, clipTagBackgroundColor: null, clipTagTextColor: null };
const result1 = createCacheKey.experimental_createToken((theme) => {
  const obj = AccessibilityAnnouncer /* AccessibilityAnnouncer */;
  const unsafe_rawColors = Themes.unsafe_rawColors;
  return AccessibilityAnnouncer /* AccessibilityAnnouncer */.isThemeDark(theme.theme) ? unsafe_rawColors.BRAND_260 : unsafe_rawColors.BRAND_200;
});
obj[0] = require("Themes").colors.TEXT_STRONG;
obj[1] = require("Themes").colors.TEXT_LINK;
obj[2] = require("Themes").colors.TEXT_MUTED;
obj[3] = require("Themes").colors.MESSAGE_HIGHLIGHT_BACKGROUND_DEFAULT;
obj[4] = require("Themes").colors.TEXT_MUTED;
obj[5] = result;
obj[6] = require("Themes").colors.BORDER_NORMAL;
obj[7] = require("Themes").colors.TEXT_DEFAULT;
obj[8] = require("Themes").colors.MOBILE_TEXT_HEADING_PRIMARY;
obj[9] = require("Themes").unsafe_rawColors.BRAND_560;
obj[10] = result1;
obj[11] = require("Themes").unsafe_rawColors.RED_400;
obj[12] = require("Themes").colors.TEXT_MUTED;
obj[13] = require("Themes").colors.TEXT_FEEDBACK_POSITIVE;
obj[14] = require("Themes").colors.TEXT_MUTED;
obj[15] = require("Themes").colors.INTERACTIVE_TEXT_ACTIVE;
obj[16] = require("Themes").colors.BACKGROUND_MOD_MUTED;
obj[17] = require("Themes").colors.CONTROL_SECONDARY_TEXT_DEFAULT;
obj[18] = require("Themes").colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT;
obj[19] = require("Themes").colors.WHITE;
obj[20] = require("Themes").colors.BACKGROUND_BRAND;
obj[21] = require("Themes").colors.BACKGROUND_BRAND;
obj[22] = require("Themes").unsafe_rawColors.WHITE;
let closure_4 = createCacheKey.createNativeStyleProperties((arg0) => {
  const colors = Themes.colors;
  const obj = { embedBackgroundColor: arg0 ? colors.EMBED_BACKGROUND_ALTERNATE : colors.EMBED_BACKGROUND };
  const merged = Object.assign(obj);
  return obj;
});
const result2 = require("Themes").fileFinishedImporting("modules/messages/native/renderer/resolveMessageContentColors.tsx");

export default function resolveMessageContentColors(arg0) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  return callback(arg0, flag);
};