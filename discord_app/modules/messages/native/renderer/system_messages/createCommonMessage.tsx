// === Module 8188: createCommonMessage ===

// Module 8188 (createCommonMessage)
import ThemesDefault from "Themes" /* 712 */;
import AccessibilityAnnouncer from "AccessibilityAnnouncer" /* 1363 */;
import resetCache from "resetCache" /* 4063 */;
import hexToRgba from "hexToRgba" /* 4223 */;
import frozen from "frozen" /* 8171 */;
import registerAssetDefault from "registerAsset" /* 8189 */;
import registerAssetDefault2 from "registerAsset" /* 8190 */;
import MessageAccessibilityAction from "MessageAccessibilityAction" /* 8191 */;
import ensureGuildLoaded from "ensureGuildLoaded" /* 1391 */;
import createCacheKey from "createCacheKey" /* 4661 */;
import "createCacheKey";

require = fn;
const result = createCacheKey.experimental_createToken((theme) => {
  let str = "rgba(201,210,240,0.6)";
  if (obj.isThemeDark(theme.theme)) {
    str = hexToRgba.hexWithOpacity(ThemesDefault.unsafe_rawColors.WHITE, 0.1);
    const tmpResult = hexToRgba;
  }
  return str;
});
createCacheKey = { timestampColor: ThemesDefault.colors.TEXT_MUTED, highlightColor: result };
let closure_4 = createCacheKey.createNativeStyleProperties(createCacheKey);
const result1 = require("obj132").fileFinishedImporting("modules/messages/native/renderer/system_messages/createCommonMessage.tsx");

export default function createCommonMessage(reactions) {
  ({ message, theme } = reactions);
  const tmp = callback(theme);
  const obj = { id: message.id, channelId: message.channel_id, type: message.type, mentioned: message.mentioned, timestamp: null, timestampColor: null, dark: null, highlightColor: null, reactions: null, swipeToReplyIconUrl: null, swipeToEditIconUrl: null, accessibilityActions: null };
  channel = channel.getChannel(message.channel_id);
  obj[4] = resetCache.calendarFormat(message.timestamp, true);
  obj[5] = tmp.timestampColor;
  obj[6] = AccessibilityAnnouncer.isThemeDark(theme);
  obj[7] = tmp.highlightColor;
  obj[8] = reactions.reactions;
  obj[9] = frozen.getAssetUriForEmbed(registerAssetDefault);
  obj[10] = frozen.getAssetUriForEmbed(registerAssetDefault2);
  obj[11] = MessageAccessibilityAction.createMessageAccessibilityActions(message, channel);
  return obj;
};