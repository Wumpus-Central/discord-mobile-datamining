// === Module 17025: shared/DMChannel ===

// Module 17025 (shared/DMChannel)
import nativeDefault from "native" /* 576 */;
import transitionToChannel from "transitionToChannel" /* 4585 */;
import openChannelLongPressActionSheet from "openChannelLongPressActionSheet" /* 10945 */;
import noop from "module_19" /* 19 */;

require = fn;
const UnreadSetting = fn(4756).UnreadSetting;
const jsx = fn(21).jsx;
const createStyles = fn(4574);
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
  let obj = channel(16377);
  const baseChannelUnreadBadgeState = obj.useBaseChannelUnreadBadgeState(channel, muted);
  ({ unread, mentionCount } = baseChannelUnreadBadgeState);
  const tmp7 = flag(15349)(channel, { unread });
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
  const tmp4 = flag(16698)();
  const fontScale = channel(4996).useFontScale();
  tmp2Result = tmp2(17017);
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
  obj.onLongPress = noop.useCallback(() => openChannelLongPressActionSheet.openChannelLongPressActionSheet(channel.id), items2);
  const merged = Object.assign(obj);
  const obj1 = { channel, unread, resolvedUnreadSetting: UnreadSetting.ALL_MESSAGES, muted, mentionCount, unreadBadge: null, subtitle: null, latestMessageTimestamp: null, channelName: null, fontScale: null };
  const tmp5Result = channel(4996);
  obj1.unreadBadge = jsx(flag(17018), { unread, resolvedUnreadSetting: UnreadSetting.ALL_MESSAGES, muted });
  let tmp11Result = null != tmp7;
  if (tmp11Result) {
    const obj3 = { channel, message: tmp7, color: str, muted, layout: channel(7893).ChannelListLayoutTypes.COMPACT };
    tmp11Result = jsx(channel(10141).ChannelRowPreview, { channel, message: tmp7, color: str, muted, layout: channel(7893).ChannelListLayoutTypes.COMPACT });
  }
  obj1.subtitle = tmp11Result;
  obj1.latestMessageTimestamp = extractTimestampResult;
  obj1.channelName = flag(4727)(channel);
  obj1.fontScale = fontScale;
  obj.children = flag(16697)(obj1);
  return tmp2Result(jsx(channel(5137).PressableHighlight, { onPress: null, onLongPress: null }));
});