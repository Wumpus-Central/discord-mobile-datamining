// === Module 15873: DMChannel ===

// Module 15873 (DMChannel)
import nativeDefault from "native" /* 576 */;
import transitionToChannel from "transitionToChannel" /* 4847 */;
import getChannelA11yLabelDefault from "getChannelA11yLabel" /* 9060 */;
import openChannelLongPressActionSheet from "openChannelLongPressActionSheet" /* 10374 */;
import useCallA11yStateDefault from "useCallA11yState" /* 15667 */;
import ChannelItemDefault from "ChannelItem" /* 15750 */;
import noop from "module_19" /* 19 */;
import ReadStateStore from "ReadStateStore" /* 4851 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5017 */;

require = fn;
const UnreadSetting = fn(5018).UnreadSetting;
const jsx = fn(21).jsx;
const createStyles = fn(4836);
let obj = { container: { marginVertical: fn(9577).CHANNEL_MARGIN_VERTICAL, marginHorizontal: 8, borderRadius: nativeDefault.radii.md } };
let closure_8 = createStyles.createStyles(obj);
let obj3 = { marginVertical: fn(9577).CHANNEL_MARGIN_VERTICAL, marginHorizontal: 8, borderRadius: nativeDefault.radii.md };
const size = fn(2);
let result = size.fileFinishedImporting("modules/channel_list_v2/native/items/DMChannel.tsx");

export default noop.memo((channel) => {
  channel = channel.channel;
  const selected = channel.selected;
  const items = [channel.id];
  const items1 = [channel.id];
  const callback = noop.useCallback(() => {
    const result = openChannelLongPressActionSheet.openChannelLongPressActionSheet(channel.id);
  }, items);
  const callback1 = noop.useCallback(() => {
    transitionToChannel.transitionToChannel(channel.id);
  }, items1);
  const tmp = closure_8();
  const items2 = [ReadStateStore];
  const items3 = [channel.id];
  const stateFromStoresObject = channel(504).useStateFromStoresObject(items2, () => ({ hasUnread: ReadStateStore.hasUnread(channel.id), mentionCount: ReadStateStore.getMentionCount(channel.id) }), items3);
  ({ hasUnread, mentionCount } = stateFromStoresObject);
  const obj = channel(504);
  const items4 = [UserGuildSettingsStore];
  const items5 = [channel];
  const stateFromStores = channel(504).useStateFromStores(items4, () => UserGuildSettingsStore.isChannelMuted(channel.getGuildId(), channel.id), items5);
  const obj2 = channel(504);
  ({ isIncomingCall, isOngoingCall } = useCallA11yStateDefault(channel.id));
  const obj3 = { onPress: callback1, onLongPress: callback, style: tmp.container, accessible: true, accessibilityRole: "button", accessibilityLabel: null, accessibilityState: null, channel: null, selected: null, unread: null, resolvedUnreadSetting: null, mentionCount: null, muted: null };
  const tmp6 = useCallA11yStateDefault(channel.id);
  obj3.accessibilityLabel = getChannelA11yLabelDefault({ channel, unread: hasUnread, mentionCount, isIncomingCall, isOngoingCall });
  obj3.accessibilityState = { selected };
  obj3.channel = channel;
  obj3.selected = selected;
  obj3.unread = hasUnread;
  obj3.resolvedUnreadSetting = UnreadSetting.ALL_MESSAGES;
  obj3.mentionCount = mentionCount;
  obj3.muted = stateFromStores;
  return jsx(ChannelItemDefault, { onPress: callback1, onLongPress: callback, style: tmp.container, accessible: true, accessibilityRole: "button", accessibilityLabel: null, accessibilityState: null, channel: null, selected: null, unread: null, resolvedUnreadSetting: null, mentionCount: null, muted: null });
});