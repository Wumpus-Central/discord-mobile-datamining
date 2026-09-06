// === Module 16991: shared/DMChannel ===

// Module 16991 (shared/DMChannel)
import nativeDefault from "native" /* 576 */;
import transitionToChannel from "transitionToChannel" /* 4571 */;
import openChannelLongPressActionSheet from "openChannelLongPressActionSheet" /* 10913 */;
import noop from "module_19" /* 19 */;

require = fn;
const UnreadSetting = fn(4742).UnreadSetting;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
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
  let obj = channel(16343);
  const baseChannelUnreadBadgeState = obj.useBaseChannelUnreadBadgeState(channel, muted);
  ({ unread, mentionCount } = baseChannelUnreadBadgeState);
  const tmp7 = flag(15317)(channel, { unread });
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
  const tmp4 = flag(16977)();
  const fontScale = channel(4982).useFontScale();
  tmp2Result = tmp2(16978);
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
  const tmp5Result = channel(4982);
  obj1.unreadBadge = jsx(flag(16981), { unread, resolvedUnreadSetting: UnreadSetting.ALL_MESSAGES, muted });
  let tmp11Result = null != tmp7;
  if (tmp11Result) {
    const obj3 = { channel, message: tmp7, color: str, muted, layout: tmp5(7879).ChannelListLayoutTypes.COMPACT };
    tmp11Result = tmp11(tmp5(10109).ChannelRowPreview, obj3);
  }
  obj1.subtitle = tmp11Result;
  obj1.latestMessageTimestamp = extractTimestampResult;
  obj1.channelName = flag(4713)(channel);
  obj1.fontScale = fontScale;
  obj.children = flag(16990)(obj1);
  return tmp2Result(jsx(channel(5123).PressableHighlight, { onPress: null, onLongPress: null }));
});