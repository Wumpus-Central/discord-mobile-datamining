// discord_app/modules/channel_list_v2/native/items/DMChannel.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import getChannelA11yLabelDefault from "../../../channel/getChannelA11yLabel.tsx";
import useCallA11yStateDefault from "../../../calls/useCallA11yState.tsx";
import getChannelModeDefault from "../../../guild_sidebar/native/ChannelItem.tsx";
import importAllResult from "../../../../../_runtime/00019_noop.js";
import closure_4 from "../../../../stores/ReadStateStore.tsx";
import closure_5 from "../../../../stores/UserGuildSettingsStore.tsx";
import { UnreadSetting } from "../../../read_states/ReadStateConstants.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
let c3 = importAllResult;
let obj = { container: null };
obj = {
  marginVertical: require("hairlineWidth").CHANNEL_MARGIN_VERTICAL,
  marginHorizontal: 8,
  borderRadius: ThemesDefault.radii.md,
};
obj[0] = obj;
let closure_8 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo((channel) => {
  channel = channel.channel;
  const selected = channel.selected;
  const items = [channel.id];
  const items1 = [channel.id];
  const callback = importAllResult.useCallback(() => {
    const result = channel(closure_1_2[8]).openChannelLongPressActionSheet(channel.id);
  }, items);
  const callback1 = importAllResult.useCallback(() => {
    channel(closure_1_2[9]).transitionToChannel(channel.id);
  }, items1);
  let obj = channel(589);
  const items2 = [closure_4];
  const items3 = [channel.id];
  const stateFromStoresObject = obj.useStateFromStoresObject(
    items2,
    () => ({ hasUnread: closure_1_4.hasUnread(channel.id), mentionCount: closure_1_4.getMentionCount(channel.id) }),
    items3,
  );
  ({ hasUnread, mentionCount } = stateFromStoresObject);
  const tmp = callback();
  const items4 = [closure_5];
  const items5 = [channel];
  const stateFromStores = channel(589).useStateFromStores(
    items4,
    () => closure_1_5.isChannelMuted(channel.getGuildId(), channel.id),
    items5,
  );
  const obj2 = channel(589);
  ({ isIncomingCall, isOngoingCall } = useCallA11yStateDefault(channel.id));
  obj = {
    onPress: callback1,
    onLongPress: callback,
    style: tmp.container,
    accessible: true,
    accessibilityRole: "button",
    accessibilityLabel: null,
    accessibilityState: null,
    channel: null,
    selected: null,
    unread: null,
    resolvedUnreadSetting: null,
    mentionCount: null,
    muted: null,
  };
  const tmp6 = useCallA11yStateDefault(channel.id);
  obj[5] = getChannelA11yLabelDefault({ channel, unread: hasUnread, mentionCount, isIncomingCall, isOngoingCall });
  obj[6] = { selected };
  obj[7] = channel;
  obj[8] = selected;
  obj[9] = hasUnread;
  obj[10] = UnreadSetting.ALL_MESSAGES;
  obj[11] = mentionCount;
  obj[12] = stateFromStores;
  return jsx(getChannelModeDefault, {
    onPress: callback1,
    onLongPress: callback,
    style: tmp.container,
    accessible: true,
    accessibilityRole: "button",
    accessibilityLabel: null,
    accessibilityState: null,
    channel: null,
    selected: null,
    unread: null,
    resolvedUnreadSetting: null,
    mentionCount: null,
    muted: null,
  });
});
let result = require("set").fileFinishedImporting("modules/channel_list_v2/native/items/DMChannel.tsx");

export default memoResult;
