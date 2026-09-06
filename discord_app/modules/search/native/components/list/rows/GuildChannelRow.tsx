// === Module 16659: GuildChannelRow ===

// Module 16659 (GuildChannelRow)
import nativeDefault from "native" /* 576 */;
import useChannelNameDefault from "useChannelName" /* 4713 */;
import utils_ChannelUtils from "utils/ChannelUtils" /* 5028 */;
import SearchListRow from "SearchListRow" /* 16652 */;
import ChannelContent from "ChannelContent" /* 16660 */;
import guild_channels_ChannelItem from "guild_channels/ChannelItem" /* 16662 */;
import noop from "module_19" /* 19 */;

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
let obj = { container: { paddingVertical: 10 }, content: { flexDirection: "row", alignItems: "center" }, iconContainer: { marginRight: 0 }, simpleIcon: null };
let size = { width: 20, height: 20, marginRight: 8, tintColor: nativeDefault.colors.TEXT_MUTED };
obj.simpleIcon = size;
let closure_7 = createStyles.createStyles(obj);
size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/components/list/rows/GuildChannelRow.tsx");

export default noop.memo(function GuildChannelRow(channel) {
  channel = channel.channel;
  ({ subtitle, trailing, extras, onPress, voiceStates } = channel);
  const merged = Object.assign(channel, Object.assign({ channel: 0, subtitle: 0, trailing: 0, extras: 0, onPress: 0, voiceStates: 0 }));
  const tmp2 = closure_7();
  let obj = guild_channels_ChannelItem;
  const channelAccessibilityProps = obj.getChannelAccessibilityProps({ channel, unread: false, mentionCount: 0, voiceStates });
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