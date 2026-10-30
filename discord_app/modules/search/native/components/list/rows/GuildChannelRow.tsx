// === Module 18674: GuildChannelRow ===

// Module 18674 (GuildChannelRow)
import nativeDefault from "native" /* 575 */;
import useChannelNameDefault from "useChannelName" /* 5647 */;
import FastImageDefault from "FastImage" /* 5712 */;
import utils_ChannelUtils from "utils/ChannelUtils" /* 8595 */;
import SearchListRow from "SearchListRow" /* 18653 */;
import ChannelContent from "ChannelContent" /* 18675 */;
import renderChannelItem from "renderChannelItem" /* 18677 */;
import noop from "module_19" /* 19 */;

require = fn;
function GuildChannelLabel(channel) {
  channel = channel.channel;
  const obj = { style: closure_6().content, children: null };
  const tmp = closure_6();
  const tmp2 = useChannelNameDefault(channel);
  obj.children = ChannelContent.renderChannelContent({ channel, layout, name: tmp2 });
  return <View style={closure_6().content}>{null}</View>;
}
const View = fn(17).View;
const layout = fn(9806).CHANNEL_LIST_SEARCH_LAYOUT;
const jsx = fn(21).jsx;
const createStyles = fn(5009);
let obj = { container: { paddingVertical: 10 }, content: { flexDirection: "row", alignItems: "center" }, iconContainer: { marginRight: 0 }, simpleIcon: null };
let size = { width: 20, height: 20, marginRight: 8, tintColor: nativeDefault.colors.TEXT_MUTED };
obj.simpleIcon = size;
let closure_6 = createStyles.createStyles(obj);
size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/components/list/rows/GuildChannelRow.tsx");

export default noop.memo(function GuildChannelRow(channel) {
  channel = channel.channel;
  ({ subtitle, trailing, extras, onPress, voiceStates } = channel);
  const merged = Object.assign(channel, Object.assign({ channel: 0, subtitle: 0, trailing: 0, extras: 0, onPress: 0, voiceStates: 0 }));
  const tmp2 = closure_6();
  const channelAccessibilityProps = renderChannelItem.getChannelAccessibilityProps({ channel, unread: false, mentionCount: 0, voiceStates });
  const obj2 = { style: tmp2.simpleIcon, source: null };
  obj2.source = utils_ChannelUtils.getSimpleChannelIcon(channel);
  const obj6 = {};
  const merged1 = Object.assign(channelAccessibilityProps);
  const merged2 = Object.assign(merged);
  ({ container: obj4.containerStyle, iconContainer: obj4.iconContainerStyle } = tmp2);
  obj6.icon = <tmp4 style={tmp2.simpleIcon} source={null} />;
  obj6.iconWidth = 32;
  obj6.label = <GuildChannelLabel channel={channel} />;
  obj6.subLabel = subtitle;
  obj6.onPress = onPress;
  obj6.trailing = trailing;
  obj6.extras = extras;
  return jsx(SearchListRow.SearchListRow, {});
});