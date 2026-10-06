// discord_app/modules/messages/native/renderer/system_messages/createCommonMessage.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import DateUtils from "../../../../../utils/DateUtils.tsx";
import ColorUtils from "../../../../../utils/ColorUtils.tsx";
import shared from "../../../../../design/shared.tsx";
import renderer_EmbedUtils from "../EmbedUtils.tsx";
import AssetRegistryDefault from "../../../../../../_runtime/07635_AssetRegistry.js";
import AssetRegistryDefault2 from "../../../../../../_runtime/07636_AssetRegistry.js";
import MessageAccessibilityActions from "../../MessageAccessibilityActions.tsx";
import ChannelStore from "../../../../../stores/ChannelStore.tsx";
import createStyles_mod from "../../../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

let createStyles = createStyles_mod;
const result = createStyles.experimental_createToken((theme) => {
  theme = theme.theme;
  let str = "rgba(201,210,240,0.6)";
  const obj = shared;
  if (obj.isThemeDark(theme)) {
    const tmpResult = ColorUtils;
    str = tmpResult.hexWithOpacity(nativeDefault.unsafe_rawColors.WHITE, 0.1);
  }
  return str;
});
createStyles = createStyles_mod;
let obj = { timestampColor: nativeDefault.colors.TEXT_MUTED, highlightColor: result };
let closure_4 = createStyles.createNativeStyleProperties(obj);
const result1 = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/createCommonMessage.tsx");

export default function createCommonMessage(reactions) {
  let channel;
  let message;
  let obj2;
  let obj3;
  let obj4;
  let obj5;
  let obj6;
  let theme;
  ({ message, theme } = reactions);
  reactions = reactions.reactions;
  const tmp = closure_4(theme);
  const obj = {
    id: message.id,
    channelId: message.channel_id,
    type: message.type,
    mentioned: message.mentioned,
    timestamp: obj2.calendarFormat(message.timestamp, true),
    timestampColor: tmp.timestampColor,
    dark: obj3.isThemeDark(theme),
    highlightColor: tmp.highlightColor,
    reactions,
    swipeToReplyIconUrl: obj4.getAssetUriForEmbed(AssetRegistryDefault),
    swipeToEditIconUrl: obj5.getAssetUriForEmbed(AssetRegistryDefault2),
    accessibilityActions: obj6.createMessageAccessibilityActions(message, channel),
  };
  channel = ChannelStore.getChannel(message.channel_id);
  obj2 = DateUtils;
  obj3 = shared;
  obj4 = renderer_EmbedUtils;
  obj5 = renderer_EmbedUtils;
  obj6 = MessageAccessibilityActions;
  return obj;
}
