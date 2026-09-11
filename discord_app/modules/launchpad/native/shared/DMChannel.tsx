// discord_app/modules/launchpad/native/shared/DMChannel.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import transitionToChannel from "../../../routing/transitionToChannel.tsx";
import openChannelLongPressActionSheet from "../../../channel/native/openChannelLongPressActionSheet.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const UnreadSetting = fn(4788).UnreadSetting;
const jsx = fn(21).jsx;
const createStyles = fn(4606);
let obj = { pressable: { flex: 1 }, pressableUnderlayColor: null };
obj = { backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_ACTIVE };
obj.pressableUnderlayColor = obj;
let closure_6 = createStyles.createStyles(obj);
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
  let obj = channel(16415);
  const baseChannelUnreadBadgeState = obj.useBaseChannelUnreadBadgeState(channel, muted);
  ({ unread, mentionCount } = baseChannelUnreadBadgeState);
  const tmp7 = flag(15380)(channel, { unread });
  let extractTimestampResult;
  if (null != tmp7) {
    let tmp2Result = tmp2(11);
    extractTimestampResult = tmp2Result.extractTimestamp(tmp7.id);
  }
  let str = "text-muted";
  if (unread) {
    str = "text-muted";
    if (!muted) {
      str = "text-default";
    }
  }
  const tmp4 = flag(16743)();
  const fontScale = channel(5033).useFontScale();
  tmp2Result = tmp2(17065);
  obj = { style: null, underlayColor: tmp.pressableUnderlayColor.backgroundColor };
  const items = [tmp.pressable, { borderRadius: tmp4.container.borderRadius }];
  obj.style = items;
  obj = { onPress: null, onLongPress: null };
  const items1 = [channel.id, flag];
  obj.onPress = noop.useCallback(() => {
    const obj = { navigationReplace: flag };
    obj.transitionToChannel(channel.id, obj);
  }, items1);
  const items2 = [channel.id];
  obj.onLongPress = noop.useCallback(
    () => openChannelLongPressActionSheet.openChannelLongPressActionSheet(channel.id),
    items2,
  );
  const merged = Object.assign(obj);
  const obj1 = {
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
  const tmp5Result = channel(5033);
  obj1.unreadBadge = jsx(flag(17066), { unread, resolvedUnreadSetting: UnreadSetting.ALL_MESSAGES, muted });
  let tmp11Result = null != tmp7;
  if (tmp11Result) {
    const obj3 = { channel, message: tmp7, color: str, muted, layout: channel(7953).ChannelListLayoutTypes.COMPACT };
    tmp11Result = jsx(channel(10198).ChannelRowPreview, {
      channel,
      message: tmp7,
      color: str,
      muted,
      layout: channel(7953).ChannelListLayoutTypes.COMPACT,
    });
  }
  obj1.subtitle = tmp11Result;
  obj1.latestMessageTimestamp = extractTimestampResult;
  obj1.channelName = flag(4759)(channel);
  obj1.fontScale = fontScale;
  obj.children = flag(16742)(obj1);
  return tmp2Result(jsx(channel(5174).PressableHighlight, { onPress: null, onLongPress: null }));
});
