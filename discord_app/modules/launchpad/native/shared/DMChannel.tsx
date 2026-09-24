// discord_app/modules/launchpad/native/shared/DMChannel.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import transitionToChannel from "../../../routing/transitionToChannel.tsx";
import openChannelLongPressActionSheet from "../../../channel/native/openChannelLongPressActionSheet.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const UnreadSetting = fn(5011).UnreadSetting;
const jsx = fn(21).jsx;
const createStyles = fn(4829);
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
  const tmp4 = flag(17231)();
  const baseChannelUnreadBadgeState = channel(16770).useBaseChannelUnreadBadgeState(channel, muted);
  ({ unread, mentionCount } = baseChannelUnreadBadgeState);
  const tmp7 = flag(15668)(channel, { unread });
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
  const obj = channel(16770);
  const fontScale = channel(5280).useFontScale();
  const tmp5Result = channel(5280);
  const obj2 = { style: null, underlayColor: tmp.pressableUnderlayColor.backgroundColor };
  const items = [tmp.pressable, { borderRadius: tmp4.container.borderRadius }];
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
  const tmp2Result3 = flag(17550);
  obj4.unreadBadge = jsx(flag(17551), { unread, resolvedUnreadSetting: UnreadSetting.ALL_MESSAGES, muted });
  let tmp11Result = null != tmp7;
  if (tmp11Result) {
    const obj6 = { channel, message: tmp7, color: str, muted, layout: channel(8210).ChannelListLayoutTypes.COMPACT };
    tmp11Result = jsx(channel(10455).ChannelRowPreview, {
      channel,
      message: tmp7,
      color: str,
      muted,
      layout: channel(8210).ChannelListLayoutTypes.COMPACT,
    });
  }
  obj4.subtitle = tmp11Result;
  obj4.latestMessageTimestamp = extractTimestampResult;
  obj4.channelName = flag(4982)(channel);
  obj4.fontScale = fontScale;
  obj2.children = flag(17230)(obj4);
  return tmp2Result3(
    jsx(channel(5427).PressableHighlight, { style: null, underlayColor: tmp.pressableUnderlayColor.backgroundColor }),
  );
});
