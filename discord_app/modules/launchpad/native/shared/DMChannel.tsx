// discord_app/modules/launchpad/native/shared/DMChannel.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import transitionToChannel from "../../../routing/transitionToChannel.tsx";
import openChannelLongPressActionSheet from "../../../channel/native/openChannelLongPressActionSheet.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const UnreadSetting = fn(6834).UnreadSetting;
const jsx = fn(21).jsx;
const createStyles = fn(5142);
let obj = {
  pressable: { flex: 1 },
  pressableUnderlayColor: { backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_ACTIVE },
};
let closure_6 = createStyles.createStyles(obj);
let obj3 = { backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_ACTIVE };
const size = fn(2);
const result = size.fileFinishedImporting("modules/launchpad/native/shared/DMChannel.tsx");

export default noop.memo(function DMChannel(navigationReplace) {
  ({ channel, muted } = navigationReplace);
  if (muted === undefined) {
    muted = false;
  }
  let flag = navigationReplace.navigationReplace;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = closure_6();
  const tmp4 = flag(19114)();
  const baseChannelUnreadBadgeState = channel(18779).useBaseChannelUnreadBadgeState(channel, muted);
  ({ unread, mentionCount } = baseChannelUnreadBadgeState);
  const tmp7 = flag(17658)(channel, { unread });
  let extractTimestampResult;
  if (null != tmp7) {
    extractTimestampResult = tmp2(11).extractTimestamp(tmp7.id);
    const tmp2Result = tmp2(11);
  }
  let str = "text-muted";
  if (unread) {
    str = "text-muted";
    if (!muted) {
      str = "text-default";
    }
  }
  const obj = channel(18779);
  const fontScale = channel(5768).useFontScale();
  const tmp5Result = channel(5768);
  const obj2 = { style: null, underlayColor: tmp.pressableUnderlayColor.backgroundColor };
  items = [tmp.pressable, { borderRadius: tmp4.container.borderRadius }];
  obj2.style = items;
  const obj3 = { onPress: null, onLongPress: null };
  const items1 = [channel.id, flag];
  obj3.onPress = noop.useCallback(() => {
    transitionToChannel.transitionToChannel(channel.id, { navigationReplace: flag });
  }, items1);
  const items2 = [channel.id];
  obj3.onLongPress = noop.useCallback(
    () => openChannelLongPressActionSheet.openChannelLongPressActionSheet(channel.id),
    items2,
  );
  const merged = Object.assign(obj3);
  const obj4 = {
    channel,
    unread,
    resolvedUnreadSetting: UnreadSetting.ALL_MESSAGES,
    muted,
    mentionCount,
    unreadBadge: null,
    subtitle: null,
    latestMessageTimestamp: null,
    channelName: null,
    fontScale: null,
  };
  const tmp2Result3 = flag(19481);
  obj4.unreadBadge = jsx(flag(19482), { unread, resolvedUnreadSetting: UnreadSetting.ALL_MESSAGES, muted });
  let tmp11Result = null != tmp7;
  if (tmp11Result) {
    const obj6 = { channel, message: tmp7, color: str, muted, layout: channel(5818).ChannelListLayoutTypes.COMPACT };
    tmp11Result = jsx(channel(11180).ChannelRowPreview, {
      channel,
      message: tmp7,
      color: str,
      muted,
      layout: channel(5818).ChannelListLayoutTypes.COMPACT,
    });
  }
  obj4.subtitle = tmp11Result;
  obj4.latestMessageTimestamp = extractTimestampResult;
  obj4.channelName = flag(5778)(channel);
  obj4.fontScale = fontScale;
  obj2.children = flag(19113)(obj4);
  return tmp2Result3(
    jsx(channel(7046).PressableHighlight, { style: null, underlayColor: tmp.pressableUnderlayColor.backgroundColor }),
  );
});
