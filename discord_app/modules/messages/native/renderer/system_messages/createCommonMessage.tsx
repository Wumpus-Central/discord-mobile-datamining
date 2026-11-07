// === Module 8493: createCommonMessage ===

// Module 8493 (createCommonMessage)
import nativeDefault from "native" /* 575 */;
import DateUtils from "DateUtils" /* 4962 */;
import ColorUtils from "ColorUtils" /* 5137 */;
import shared from "shared" /* 5147 */;
import renderer_EmbedUtils from "renderer/EmbedUtils" /* 8467 */;
import _modDef8494 from "module_8494" /* 8494 */;
import _modDef8495 from "module_8495" /* 8495 */;
import MessageAccessibilityActions from "MessageAccessibilityActions" /* 8496 */;
import ChannelStore from "ChannelStore" /* 4989 */;

require = fn;
let createStyles = fn(5140);
const result = createStyles.experimental_createToken((theme) => {
  let str = "rgba(201,210,240,0.6)";
  if (obj.isThemeDark(theme.theme)) {
    str = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.WHITE, 0.1);
    const tmpResult = ColorUtils;
  }
  return str;
});
createStyles = fn(5140);
let closure_4 = createStyles.createNativeStyleProperties({ timestampColor: nativeDefault.colors.TEXT_MUTED, highlightColor: result });
const size = fn(2);
const result1 = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/createCommonMessage.tsx");

export default function createCommonMessage(reactions) {
  ({ message, theme } = reactions);
  const tmp = closure_4(theme);
  const obj = { id: message.id, channelId: message.channel_id, type: message.type, mentioned: message.mentioned, timestamp: null, timestampColor: null, dark: null, highlightColor: null, reactions: null, swipeToReplyIconUrl: null, swipeToEditIconUrl: null, accessibilityActions: null };
  const channel = ChannelStore.getChannel(message.channel_id);
  obj.timestamp = DateUtils.calendarFormat(message.timestamp, true);
  obj.timestampColor = tmp.timestampColor;
  obj.dark = shared.isThemeDark(theme);
  obj.highlightColor = tmp.highlightColor;
  obj.reactions = reactions.reactions;
  obj.swipeToReplyIconUrl = renderer_EmbedUtils.getAssetUriForEmbed(_modDef8494);
  obj.swipeToEditIconUrl = renderer_EmbedUtils.getAssetUriForEmbed(_modDef8495);
  obj.accessibilityActions = MessageAccessibilityActions.createMessageAccessibilityActions(message, channel);
  return obj;
};