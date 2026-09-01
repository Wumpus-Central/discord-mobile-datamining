// discord_app/modules/messages/native/renderer/system_messages/createCommonMessage.tsx
import ThemesDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import AccessibilityAnnouncer from "../../../../../design/shared.tsx";
import resetCache from "../../../../../utils/DateUtils.tsx";
import hexToRgba from "../../../../../utils/ColorUtils.tsx";
import frozen from "../EmbedUtils.tsx";
import registerAssetDefault from "../../../../../../_runtime/07874_registerAsset.js";
import registerAssetDefault2 from "../../../../../../_runtime/07875_registerAsset.js";
import MessageAccessibilityAction from "../../MessageAccessibilityActions.tsx";
import closure_3 from "../../../../../stores/ChannelStore.tsx";
import createCacheKey from "../../../../../design/components/Styles/native/createStyles.tsx";

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