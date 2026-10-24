// === Module 8322: createCommonMessage ===

// Module 8322 (createCommonMessage)
import nativeDefault from "native" /* 587 */;
import DateUtils from "DateUtils" /* 4796 */;
import ColorUtils from "ColorUtils" /* 4968 */;
import shared from "shared" /* 4978 */;
import renderer_EmbedUtils from "renderer/EmbedUtils" /* 8277 */;
import _modDef8323 from "module_8323" /* 8323 */;
import _modDef8324 from "module_8324" /* 8324 */;
import MessageAccessibilityActions from "MessageAccessibilityActions" /* 8325 */;
import ChannelStore from "ChannelStore" /* 4823 */;

require = fn;
let createStyles = fn(4971);
const result = createStyles.experimental_createToken((theme) => {
  let str = "rgba(201,210,240,0.6)";
  if (obj.isThemeDark(theme.theme)) {
    str = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.WHITE, 0.1);
    const tmpResult = ColorUtils;
  }
  return str;
});
createStyles = fn(4971);
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
  obj.swipeToReplyIconUrl = renderer_EmbedUtils.getAssetUriForEmbed(_modDef8323);
  obj.swipeToEditIconUrl = renderer_EmbedUtils.getAssetUriForEmbed(_modDef8324);
  obj.accessibilityActions = MessageAccessibilityActions.createMessageAccessibilityActions(message, channel);
  return obj;
};