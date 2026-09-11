// === Module 8038: createCommonMessage ===

// Module 8038 (createCommonMessage)
import nativeDefault from "native" /* 576 */;
import DateUtils from "DateUtils" /* 4288 */;
import ColorUtils from "ColorUtils" /* 4456 */;
import shared from "shared" /* 4458 */;
import renderer_EmbedUtils from "renderer/EmbedUtils" /* 8020 */;
import _modDef8039 from "module_8039" /* 8039 */;
import _modDef8040 from "module_8040" /* 8040 */;
import MessageAccessibilityActions from "MessageAccessibilityActions" /* 8041 */;
import ChannelStore from "ChannelStore" /* 1957 */;

require = fn;
let createStyles = fn(4606);
const result = createStyles.experimental_createToken((theme) => {
  let str = "rgba(201,210,240,0.6)";
  if (obj.isThemeDark(theme.theme)) {
    str = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.WHITE, 0.1);
    const tmpResult = ColorUtils;
  }
  return str;
});
fn(4606);
createStyles = { timestampColor: nativeDefault.colors.TEXT_MUTED, highlightColor: result };
let closure_4 = createStyles.createNativeStyleProperties(createStyles);
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
  obj.swipeToReplyIconUrl = renderer_EmbedUtils.getAssetUriForEmbed(_modDef8039);
  obj.swipeToEditIconUrl = renderer_EmbedUtils.getAssetUriForEmbed(_modDef8040);
  obj.accessibilityActions = MessageAccessibilityActions.createMessageAccessibilityActions(message, channel);
  return obj;
};