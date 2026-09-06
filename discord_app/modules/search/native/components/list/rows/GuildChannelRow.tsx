// discord_app/modules/search/native/components/list/rows/GuildChannelRow.tsx
import nativeDefault from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import useChannelNameDefault from "../../../../../channel/useChannelName.tsx";
import utils_ChannelUtils from "../../../../../../utils/native/ChannelUtils.tsx";
import SearchListRow from "../SearchListRow.tsx";
import ChannelContent from "../../../../../main_tabs_v2/native/shared_components/guild_channels/ChannelContent.tsx";
import guild_channels_ChannelItem from "../../../../../main_tabs_v2/native/shared_components/guild_channels/ChannelItem.tsx";
import noop from "../../../../../../../_runtime/metro/00019__.js";

require = fn;
function GuildChannelLabel(channel) {
  channel = channel.channel;
  let obj = { style: closure_7().content, children: null };
  const tmp = closure_7();
  const tmp2 = useChannelNameDefault(channel);
  obj = { channel, layout, name: tmp2 };
  obj.children = ChannelContent.renderChannelContent(obj);
  return <React4 channel={channel} layout={layout} name={tmp2} />;
}
get_ActivityIndicator = fn(17);
({ Image: c3, View: closure_4 } = get_ActivityIndicator);
const layout = fn(7878).CHANNEL_LIST_SEARCH_LAYOUT;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let obj = {
  container: { paddingVertical: 10 },
  content: { flexDirection: "row", alignItems: "center" },
  iconContainer: { marginRight: 0 },
  simpleIcon: null,
};
let size = { width: 20, height: 20, marginRight: 8, tintColor: nativeDefault.colors.TEXT_MUTED };
obj.simpleIcon = size;
let closure_7 = createStyles.createStyles(obj);
size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/components/list/rows/GuildChannelRow.tsx");

export default noop.memo(function GuildChannelRow(channel) {
  channel = channel.channel;
  ({ subtitle, trailing, extras, onPress, voiceStates } = channel);
  const merged = Object.assign(
    channel,
    Object.assign({ channel: 0, subtitle: 0, trailing: 0, extras: 0, onPress: 0, voiceStates: 0 }),
  );
  const tmp2 = closure_7();
  let obj = guild_channels_ChannelItem;
  const channelAccessibilityProps = obj.getChannelAccessibilityProps({
    channel,
    unread: false,
    mentionCount: 0,
    voiceStates,
  });
  obj = { style: tmp2.simpleIcon, source: utils_ChannelUtils.getSimpleChannelIcon(channel) };
  obj = {};
  const merged1 = Object.assign(channelAccessibilityProps);
  const merged2 = Object.assign(merged);
  ({ container: obj4.containerStyle, iconContainer: obj4.iconContainerStyle } = tmp2);
  obj.icon = <React3 />;
  obj.iconWidth = 32;
  obj.label = <GuildChannelLabel channel={channel} />;
  obj.subLabel = subtitle;
  obj.onPress = onPress;
  obj.trailing = trailing;
  obj.extras = extras;
  return jsx(SearchListRow.SearchListRow, {});
});
