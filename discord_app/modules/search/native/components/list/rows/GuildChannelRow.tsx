// === Module 15519: GuildChannelLabel ===

// Module 15519 (GuildChannelLabel)
import get_ActivityIndicator from "get ActivityIndicator";
import { CHANNEL_LIST_SEARCH_LAYOUT as closure_5 } from "MessageEmbedTypes";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import importAllResult from "noop";

let c3;
let c4;
const require = arg1;
function GuildChannelLabel(channel) {
  channel = channel.channel;
  let obj = { style: callback().content, children: null };
  const tmp = callback();
  const tmp2 = importDefault(4384)(channel);
  obj = { channel, layout: closure_5, name: tmp2 };
  obj[1] = require(15520) /* ChannelContentComponent */.renderChannelContent(obj);
  return <closure_4 channel={channel} layout={closure_5} name={tmp2} />;
}
({ Image: c3, View: c4 } = get_ActivityIndicator);
let obj = { container: { paddingVertical: 10 }, content: { flexDirection: "row", alignItems: "center" }, iconContainer: { marginRight: 0 }, simpleIcon: null };
obj = { width: 20, height: 20, marginRight: 8, tintColor: require("Themes").colors.TEXT_MUTED };
obj[3] = obj;
let closure_7 = createCacheKey.createStyles(obj);
const memoResult = require("noop").memo(function GuildChannelRow(channel) {
  let extras;
  let onPress;
  let subtitle;
  let trailing;
  let voiceStates;
  channel = channel.channel;
  ({ subtitle, trailing, extras, onPress, voiceStates } = channel);
  const merged = Object.assign(channel, Object.create(null));
  const tmp2 = callback();
  let obj = require(15522) /* LaunchpadChannelIcon */;
  const channelAccessibilityProps = obj.getChannelAccessibilityProps({ channel, unread: false, mentionCount: 0, voiceStates });
  obj = { style: tmp2.simpleIcon, source: null };
  obj[1] = require(4654) /* getChannelIcon */.getSimpleChannelIcon(channel);
  const obj3 = require(4654) /* getChannelIcon */;
  obj = {};
  const merged1 = Object.assign(channelAccessibilityProps);
  const merged2 = Object.assign(merged);
  ({ container: obj4.containerStyle, iconContainer: obj4.iconContainerStyle } = tmp2);
  obj.icon = <closure_3 />;
  obj.iconWidth = 32;
  obj.label = <GuildChannelLabel channel={channel} />;
  obj.subLabel = subtitle;
  obj.onPress = onPress;
  obj.trailing = trailing;
  obj.extras = extras;
  return jsx(require(15512) /* SearchListRow */.SearchListRow, {});
});
const result = require("MessageEmbedTypes").fileFinishedImporting("modules/search/native/components/list/rows/GuildChannelRow.tsx");

export default memoResult;