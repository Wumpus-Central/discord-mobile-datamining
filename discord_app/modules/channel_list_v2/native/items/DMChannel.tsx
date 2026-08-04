// discord_app/modules/channel_list_v2/native/items/DMChannel.tsx
import importAllResult from "noop";
import generateOldThreadCutoff from "generateOldThreadCutoff";
import updateUserGuildSettingsInternal from "updateUserGuildSettingsInternal";
import { UnreadSetting } from "ReadStateTypes";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
let c3 = importAllResult;
let obj = { container: null };
obj = { marginVertical: require("hairlineWidth").CHANNEL_MARGIN_VERTICAL, marginHorizontal: 8, borderRadius: require("Themes").radii.md };
obj[0] = obj;
let closure_8 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo((channel) => {
  let hasUnread;
  let isIncomingCall;
  let isOngoingCall;
  let mentionCount;
  channel = channel.channel;
  const selected = channel.selected;
  const items = [channel.id];
  const items1 = [channel.id];
  const callback = importAllResult.useCallback(() => {
    const result = channel(outer1_2[8]).openChannelLongPressActionSheet(channel.id);
  }, items);
  const callback1 = importAllResult.useCallback(() => {
    channel(outer1_2[9]).transitionToChannel(channel.id);
  }, items1);
  let obj = channel(589);
  const items2 = [generateOldThreadCutoff];
  const items3 = [channel.id];
  const stateFromStoresObject = obj.useStateFromStoresObject(items2, () => ({ hasUnread: outer1_4.hasUnread(channel.id), mentionCount: outer1_4.getMentionCount(channel.id) }), items3);
  ({ hasUnread, mentionCount } = stateFromStoresObject);
  const tmp = callback();
  const items4 = [updateUserGuildSettingsInternal];
  const items5 = [channel];
  const stateFromStores = channel(589).useStateFromStores(items4, () => outer1_5.isChannelMuted(channel.getGuildId(), channel.id), items5);
  const obj2 = channel(589);
  ({ isIncomingCall, isOngoingCall } = importDefault(15049)(channel.id));
  obj = { onPress: callback1, onLongPress: callback, style: tmp.container, accessible: true, accessibilityRole: "button", accessibilityLabel: null, accessibilityState: null, channel: null, selected: null, unread: null, resolvedUnreadSetting: null, mentionCount: null, muted: null };
  const tmp6 = importDefault(15049)(channel.id);
  obj[5] = importDefault(8320)({ channel, unread: hasUnread, mentionCount, isIncomingCall, isOngoingCall });
  obj[6] = { selected };
  obj[7] = channel;
  obj[8] = selected;
  obj[9] = hasUnread;
  obj[10] = UnreadSetting.ALL_MESSAGES;
  obj[11] = mentionCount;
  obj[12] = stateFromStores;
  return jsx(importDefault(15124), { onPress: callback1, onLongPress: callback, style: tmp.container, accessible: true, accessibilityRole: "button", accessibilityLabel: null, accessibilityState: null, channel: null, selected: null, unread: null, resolvedUnreadSetting: null, mentionCount: null, muted: null });
});
let result = require("updateUserGuildSettingsInternal").fileFinishedImporting("modules/channel_list_v2/native/items/DMChannel.tsx");

export default memoResult;