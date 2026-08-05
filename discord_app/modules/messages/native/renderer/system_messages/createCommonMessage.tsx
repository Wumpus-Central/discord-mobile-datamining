// discord_app/modules/messages/native/renderer/system_messages/createCommonMessage.tsx
import ensureGuildLoaded from "ensureGuildLoaded";
import createCacheKey from "createCacheKey";
import createCacheKey from "createCacheKey";

const require = arg1;
const result = createCacheKey.experimental_createToken((theme) => {
  let str = "rgba(201,210,240,0.6)";
  if (obj.isThemeDark(theme.theme)) {
    str = require("../../../../../utils/ColorUtils.tsx") /* hexToRgba */.hexWithOpacity(require("../../../../../../discord_common/js/packages/tokens/native.tsx").unsafe_rawColors.WHITE, 0.1);
    const tmpResult = require("../../../../../utils/ColorUtils.tsx") /* hexToRgba */;
  }
  return str;
});
createCacheKey = { timestampColor: require("Themes").colors.TEXT_MUTED, highlightColor: result };
createCacheKey = createCacheKey.createNativeStyleProperties(createCacheKey);
const result1 = require("AccessibilityAnnouncer").fileFinishedImporting("modules/messages/native/renderer/system_messages/createCommonMessage.tsx");

export default function createCommonMessage(reactions) {
  let message;
  let theme;
  ({ message, theme } = reactions);
  const tmp = createCacheKey(theme);
  const obj = { id: message.id, channelId: message.channel_id, type: message.type, mentioned: message.mentioned, timestamp: null, timestampColor: null, dark: null, highlightColor: null, reactions: null, swipeToReplyIconUrl: null, swipeToEditIconUrl: null, accessibilityActions: null };
  channel = channel.getChannel(message.channel_id);
  obj[4] = require("../../../../../utils/DateUtils.tsx") /* resetCache */.calendarFormat(message.timestamp, true);
  obj[5] = tmp.timestampColor;
  const obj2 = require("../../../../../utils/DateUtils.tsx") /* resetCache */;
  obj[6] = require("../../../../../design/shared.tsx") /* AccessibilityAnnouncer */.isThemeDark(theme);
  obj[7] = tmp.highlightColor;
  obj[8] = reactions.reactions;
  const obj3 = require("../../../../../design/shared.tsx") /* AccessibilityAnnouncer */;
  obj[9] = require("../EmbedUtils.tsx") /* frozen */.getAssetUriForEmbed(require("../../../../../../_runtime/07883_registerAsset.js"));
  const obj4 = require("../EmbedUtils.tsx") /* frozen */;
  obj[10] = require("../EmbedUtils.tsx") /* frozen */.getAssetUriForEmbed(require("../../../../../../_runtime/07884_registerAsset.js"));
  const obj5 = require("../EmbedUtils.tsx") /* frozen */;
  obj[11] = require("../../MessageAccessibilityActions.tsx") /* MessageAccessibilityAction */.createMessageAccessibilityActions(message, channel);
  return obj;
};