// discord_app/modules/messages/native/renderer/system_messages/createCommonMessage.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import DateUtils from "../../../../../utils/DateUtils.tsx";
import ColorUtils from "../../../../../utils/ColorUtils.tsx";
import shared from "../../../../../design/shared.tsx";
import renderer_EmbedUtils from "../EmbedUtils.tsx";
import _modDef7979 from "../../../../../../_runtime/metro/07979__.js";
import _modDef7980 from "../../../../../../_runtime/metro/07980__.js";
import MessageAccessibilityActions from "../../MessageAccessibilityActions.tsx";
import ChannelStore from "../../../../../stores/ChannelStore.tsx";

require = fn;
let createStyles = fn(4574);
const result = createStyles.experimental_createToken((theme) => {
  let str = "rgba(201,210,240,0.6)";
  if (obj.isThemeDark(theme.theme)) {
    str = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.WHITE, 0.1);
    const tmpResult = ColorUtils;
  }
  return str;
});
fn(4574);
createStyles = { timestampColor: nativeDefault.colors.TEXT_MUTED, highlightColor: result };
let closure_4 = createStyles.createNativeStyleProperties(createStyles);
const size = fn(2);
const result1 = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/createCommonMessage.tsx");

export default function createCommonMessage(reactions) {
  ({ message, theme } = reactions);
  const tmp = closure_4(theme);
  const obj = {
    id: message.id,
    channelId: message.channel_id,
    type: message.type,
    mentioned: message.mentioned,
    timestamp: null,
    timestampColor: null,
    dark: null,
    highlightColor: null,
    reactions: null,
    swipeToReplyIconUrl: null,
    swipeToEditIconUrl: null,
    accessibilityActions: null,
  };
  const channel = ChannelStore.getChannel(message.channel_id);
  obj.timestamp = DateUtils.calendarFormat(message.timestamp, true);
  obj.timestampColor = tmp.timestampColor;
  obj.dark = shared.isThemeDark(theme);
  obj.highlightColor = tmp.highlightColor;
  obj.reactions = reactions.reactions;
  obj.swipeToReplyIconUrl = renderer_EmbedUtils.getAssetUriForEmbed(_modDef7979);
  obj.swipeToEditIconUrl = renderer_EmbedUtils.getAssetUriForEmbed(_modDef7980);
  obj.accessibilityActions = MessageAccessibilityActions.createMessageAccessibilityActions(message, channel);
  return obj;
}
