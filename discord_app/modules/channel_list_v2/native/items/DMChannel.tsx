// === Module 16239: DMChannel ===

// Module 16239 (DMChannel)
import nativeDefault from "native" /* 576 */;
import transitionToChannel from "transitionToChannel" /* 4571 */;
import getChannelA11yLabelDefault from "getChannelA11yLabel" /* 9770 */;
import openChannelLongPressActionSheet from "openChannelLongPressActionSheet" /* 10913 */;
import useCallA11yStateDefault from "useCallA11yState" /* 16032 */;
import ChannelItemDefault from "ChannelItem" /* 16116 */;
import noop from "module_19" /* 19 */;
import ReadStateStore from "ReadStateStore" /* 4575 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 4741 */;

require = fn;
const UnreadSetting = fn(4742).UnreadSetting;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let obj = { container: null };
obj = { marginVertical: fn(10118).CHANNEL_MARGIN_VERTICAL, marginHorizontal: 8, borderRadius: nativeDefault.radii.md };
obj.container = obj;
let closure_8 = createStyles.createStyles(obj);
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
  let obj = channel(504);
  const items2 = [ReadStateStore];
  const items3 = [channel.id];
  const stateFromStoresObject = obj.useStateFromStoresObject(items2, () => ({ hasUnread: ReadStateStore.hasUnread(channel.id), mentionCount: ReadStateStore.getMentionCount(channel.id) }), items3);
  ({ hasUnread, mentionCount } = stateFromStoresObject);
  const tmp = closure_8();
  const items4 = [UserGuildSettingsStore];
  const items5 = [channel];
  const stateFromStores = channel(504).useStateFromStores(items4, () => UserGuildSettingsStore.isChannelMuted(channel.getGuildId(), channel.id), items5);
  const obj2 = channel(504);
  ({ isIncomingCall, isOngoingCall } = useCallA11yStateDefault(channel.id));
  obj = { onPress: callback1, onLongPress: callback, style: tmp.container, accessible: true, accessibilityRole: "button", accessibilityLabel: null, accessibilityState: null, channel: null, selected: null, unread: null, resolvedUnreadSetting: null, mentionCount: null, muted: null };
  const tmp6 = useCallA11yStateDefault(channel.id);
  obj.accessibilityLabel = getChannelA11yLabelDefault({ channel, unread: hasUnread, mentionCount, isIncomingCall, isOngoingCall });
  obj.accessibilityState = { selected };
  obj.channel = channel;
  obj.selected = selected;
  obj.unread = hasUnread;
  obj.resolvedUnreadSetting = UnreadSetting.ALL_MESSAGES;
  obj.mentionCount = mentionCount;
  obj.muted = stateFromStores;
  return jsx(ChannelItemDefault, { onPress: callback1, onLongPress: callback, style: tmp.container, accessible: true, accessibilityRole: "button", accessibilityLabel: null, accessibilityState: null, channel: null, selected: null, unread: null, resolvedUnreadSetting: null, mentionCount: null, muted: null });
});