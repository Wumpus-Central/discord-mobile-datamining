// === Module 7964: createCommonMessage ===

// Module 7964 (createCommonMessage)
import ThemesDefault from "Themes" /* 576 */;
import resetCache from "resetCache" /* 4242 */;
import hexToRgba from "hexToRgba" /* 4409 */;
import AccessibilityAnnouncer from "AccessibilityAnnouncer" /* 4411 */;
import frozen from "frozen" /* 7946 */;
import registerAssetDefault from "registerAsset" /* 7965 */;
import registerAssetDefault2 from "registerAsset" /* 7966 */;
import MessageAccessibilityAction from "MessageAccessibilityAction" /* 7967 */;
import closure_3 from "ensureGuildLoaded" /* 1957 */;
import createCacheKey from "createCacheKey" /* 4560 */;

require = arg1;
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
const result1 = require("set").fileFinishedImporting("modules/messages/native/renderer/system_messages/createCommonMessage.tsx");

export default function createCommonMessage(reactions) {
  ({ message, theme } = reactions);
  const tmp = callback(theme);
  const obj = { id: message.id, channelId: message.channel_id, type: message.type, mentioned: message.mentioned, timestamp: null, timestampColor: null, dark: null, highlightColor: null, reactions: null, swipeToReplyIconUrl: null, swipeToEditIconUrl: null, accessibilityActions: null };
  channel = channel.getChannel(message.channel_id);
  obj[4] = resetCache.calendarFormat(message.timestamp, true);
  obj[5] = tmp.timestampColor;
  const obj2 = resetCache;
  obj[6] = AccessibilityAnnouncer.isThemeDark(theme);
  obj[7] = tmp.highlightColor;
  obj[8] = reactions.reactions;
  const obj3 = AccessibilityAnnouncer;
  obj[9] = frozen.getAssetUriForEmbed(registerAssetDefault);
  const obj4 = frozen;
  obj[10] = frozen.getAssetUriForEmbed(registerAssetDefault2);
  const obj5 = frozen;
  obj[11] = MessageAccessibilityAction.createMessageAccessibilityActions(message, channel);
  return obj;
};