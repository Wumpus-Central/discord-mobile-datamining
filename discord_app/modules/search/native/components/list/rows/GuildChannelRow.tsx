// discord_app/modules/search/native/components/list/rows/GuildChannelRow.tsx
import ThemesDefault from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import computeChannelNameDefault from "../../../../../channel/useChannelName.tsx";
import getChannelIcon from "../../../../../../utils/native/ChannelUtils.tsx";
import SearchListRow from "../SearchListRow.tsx";
import ChannelContentComponent from "../../../../../main_tabs_v2/native/shared_components/guild_channels/ChannelContent.tsx";
import LaunchpadChannelIcon from "../../../../../main_tabs_v2/native/shared_components/guild_channels/ChannelItem.tsx";
import get_ActivityIndicator from "../../../../../../../_runtime/00017_get_ActivityIndicator.js";
import { CHANNEL_LIST_SEARCH_LAYOUT as closure_5 } from "../../../../SearchConstants.tsx";
import { jsx } from "../../../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../../../design/components/Styles/native/createStyles.tsx";
import importAllResult from "../../../../../../../_runtime/00019_noop.js";

require = arg1;
function GuildChannelLabel(channel) {
  channel = channel.channel;
  let obj = { style: callback().content, children: null };
  const tmp = callback();
  const tmp2 = computeChannelNameDefault(channel);
  obj = { channel, layout: closure_5, name: tmp2 };
  obj[1] = ChannelContentComponent.renderChannelContent(obj);
  return <closure_4 channel={channel} layout={closure_5} name={tmp2} />;
}
({ Image: c3, View: c4 } = get_ActivityIndicator);
let obj = {
  container: { paddingVertical: 10 },
  content: { flexDirection: "row", alignItems: "center" },
  iconContainer: { marginRight: 0 },
  simpleIcon: null,
};
obj = { width: 20, height: 20, marginRight: 8, tintColor: ThemesDefault.colors.TEXT_MUTED };
obj[3] = obj;
let closure_7 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo(function GuildChannelRow(channel) {
  channel = channel.channel;
  ({ subtitle, trailing, extras, onPress, voiceStates } = channel);
  const merged = Object.assign(channel, Object.create(null));
  const tmp2 = callback();
  let obj = LaunchpadChannelIcon;
  const channelAccessibilityProps = obj.getChannelAccessibilityProps({
    channel,
    unread: false,
    mentionCount: 0,
    voiceStates,
  });
  obj = { style: tmp2.simpleIcon, source: getChannelIcon.getSimpleChannelIcon(channel) };
  const obj3 = getChannelIcon;
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
  return jsx(SearchListRow.SearchListRow, {});
});
const result = require("set").fileFinishedImporting("modules/search/native/components/list/rows/GuildChannelRow.tsx");

export default memoResult;
