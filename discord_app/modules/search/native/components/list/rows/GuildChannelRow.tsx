// discord_app/modules/search/native/components/list/rows/GuildChannelRow.tsx
import nativeDefault from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import useChannelNameDefault from "../../../../../channel/useChannelName.tsx";
import utils_ChannelUtils from "../../../../../../utils/native/ChannelUtils.tsx";
import SearchListRow from "../SearchListRow.tsx";
import ChannelContent from "../../../../../main_tabs_v2/native/shared_components/guild_channels/ChannelContent.tsx";
import renderChannelItem from "../../../../../launchpad/native/shared/renderChannelItem.tsx";
import noop from "../../../../../../../_runtime/metro/00019__.js";

require = fn;
function GuildChannelLabel(channel) {
  channel = channel.channel;
  const obj = { style: closure_7().content, children: null };
  const tmp = closure_7();
  const tmp2 = useChannelNameDefault(channel);
  obj.children = ChannelContent.renderChannelContent({ channel, layout, name: tmp2 });
  return <React4 style={closure_7().content}>{null}</React4>;
}
get_ActivityIndicator = fn(17);
({ Image: c3, View: closure_4 } = get_ActivityIndicator);
const layout = fn(8000).CHANNEL_LIST_SEARCH_LAYOUT;
const jsx = fn(21).jsx;
const createStyles = fn(4640);
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
  const channelAccessibilityProps = renderChannelItem.getChannelAccessibilityProps({
    channel,
    unread: false,
    mentionCount: 0,
    voiceStates,
  });
  const obj2 = { style: tmp2.simpleIcon, source: null };
  obj2.source = utils_ChannelUtils.getSimpleChannelIcon(channel);
  const obj6 = {};
  const merged1 = Object.assign(channelAccessibilityProps);
  const merged2 = Object.assign(merged);
  ({ container: obj4.containerStyle, iconContainer: obj4.iconContainerStyle } = tmp2);
  obj6.icon = <React3 style={tmp2.simpleIcon} source={null} />;
  obj6.iconWidth = 32;
  obj6.label = <GuildChannelLabel channel={channel} />;
  obj6.subLabel = subtitle;
  obj6.onPress = onPress;
  obj6.trailing = trailing;
  obj6.extras = extras;
  return jsx(SearchListRow.SearchListRow, {});
});
