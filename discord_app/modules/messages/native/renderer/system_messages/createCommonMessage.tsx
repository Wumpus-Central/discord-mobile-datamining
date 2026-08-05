import { registerAsset } from "../../../../../../_runtime/07883_registerAsset.js";
import { registerAsset } from "../../../../../../_runtime/07884_registerAsset.js";
import { Themes } from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import { AccessibilityAnnouncer } from "../../../../../design/shared.tsx";
import { hexToRgba } from "../../../../../utils/ColorUtils.tsx";
import { resetCache } from "../../../../../utils/DateUtils.tsx";
import { MessageAccessibilityAction } from "../../MessageAccessibilityActions.tsx";
import { frozen } from "../EmbedUtils.tsx";
// discord_app/modules/messages/native/renderer/system_messages/createCommonMessage.tsx
import ensureGuildLoaded from "ensureGuildLoaded";
import createCacheKey from "createCacheKey";
import createCacheKey from "createCacheKey";

const require = arg1;
const result = createCacheKey.experimental_createToken((theme) => {
  let str = "rgba(201,210,240,0.6)";
  if (obj.isThemeDark(theme.theme)) {
    str = hexToRgba /* hexToRgba */.hexWithOpacity(Themes.unsafe_rawColors.WHITE, 0.1);
    const tmpResult = hexToRgba /* hexToRgba */;
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
  obj[4] = resetCache /* resetCache */.calendarFormat(message.timestamp, true);
  obj[5] = tmp.timestampColor;
  const obj2 = resetCache /* resetCache */;
  obj[6] = AccessibilityAnnouncer /* AccessibilityAnnouncer */.isThemeDark(theme);
  obj[7] = tmp.highlightColor;
  obj[8] = reactions.reactions;
  const obj3 = AccessibilityAnnouncer /* AccessibilityAnnouncer */;
  obj[9] = frozen /* frozen */.getAssetUriForEmbed(registerAsset);
  const obj4 = frozen /* frozen */;
  obj[10] = frozen /* frozen */.getAssetUriForEmbed(registerAsset);
  const obj5 = frozen /* frozen */;
  obj[11] = MessageAccessibilityAction /* MessageAccessibilityAction */.createMessageAccessibilityActions(message, channel);
  return obj;
};