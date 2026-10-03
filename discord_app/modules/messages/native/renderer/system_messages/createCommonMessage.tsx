// === Module 7623: createCommonMessage ===

// Module 7623 (createCommonMessage)
import nativeDefault from "native" /* 587 */;
import DateUtils from "DateUtils" /* 4552 */;
import ColorUtils from "ColorUtils" /* 4727 */;
import shared from "shared" /* 4729 */;
import renderer_EmbedUtils from "renderer/EmbedUtils" /* 7605 */;
import _modDef7624 from "module_7624" /* 7624 */;
import _modDef7625 from "module_7625" /* 7625 */;
import MessageAccessibilityActions from "MessageAccessibilityActions" /* 7626 */;
import ChannelStore from "ChannelStore" /* 2051 */;

require = fn;
let createStyles = fn(4890);
const result = createStyles.experimental_createToken((theme) => {
  let str = "rgba(201,210,240,0.6)";
  if (obj.isThemeDark(theme.theme)) {
    str = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.WHITE, 0.1);
    const tmpResult = ColorUtils;
  }
  return str;
});
createStyles = fn(4890);
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
  obj.swipeToReplyIconUrl = renderer_EmbedUtils.getAssetUriForEmbed(_modDef7624);
  obj.swipeToEditIconUrl = renderer_EmbedUtils.getAssetUriForEmbed(_modDef7625);
  obj.accessibilityActions = MessageAccessibilityActions.createMessageAccessibilityActions(message, channel);
  return obj;
};