// discord_app/modules/launchpad/native/shared/DMChannel.tsx
import ThemesDefault from "Themes" /* 712 */;
import importAllResult from "noop" /* 19 */;
import { UnreadSetting } from "ReadStateTypes" /* 5044 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

const require = arg1;
let c3 = importAllResult;
let obj = { pressable: { flex: 1 }, pressableUnderlayColor: null };
obj = { backgroundColor: ThemesDefault.colors.INTERACTIVE_BACKGROUND_ACTIVE };
obj[1] = obj;
let closure_6 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo(function DMChannel(navigationReplace) {
  ({ channel, muted } = navigationReplace);
  if (muted === undefined) {
    muted = false;
  }
  let flag = navigationReplace.navigationReplace;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = callback();
  let obj = channel(15606);
  const baseChannelUnreadBadgeState = obj.useBaseChannelUnreadBadgeState(channel, muted);
  ({ unread, mentionCount } = baseChannelUnreadBadgeState);
  const tmp7 = flag(14663)(channel, { unread });
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
  const tmp4 = flag(16196)();
  const fontScale = channel(4751).useFontScale();
  tmp2Result = tmp2(16197);
  obj = { style: items, underlayColor: tmp.pressableUnderlayColor.backgroundColor };
  items = [tmp.pressable, { borderRadius: tmp4.container.borderRadius }];
  obj = {
    onPress: importAllResult.useCallback(() => {
      let obj = channel(closure_1_2[3]);
      obj = { navigationReplace: flag };
      obj.transitionToChannel(channel.id, obj);
    }, items1),
    onLongPress: importAllResult.useCallback(() => channel(closure_1_2[4]).openChannelLongPressActionSheet(channel.id), items2)
  };
  items1 = [channel.id, flag];
  items2 = [channel.id];
  const merged = Object.assign(obj);
  obj1 = { channel, unread, resolvedUnreadSetting: UnreadSetting.ALL_MESSAGES, muted, mentionCount, unreadBadge: null, subtitle: null, latestMessageTimestamp: null, channelName: null, fontScale: null };
  const tmp5Result = channel(4751);
  obj1[5] = jsx(flag(16200), { unread, resolvedUnreadSetting: UnreadSetting.ALL_MESSAGES, muted });
  let tmp11Result = null != tmp7;
  if (tmp11Result) {
    const obj3 = { channel: null, message: null, color: null, muted: null, layout: null };
    obj3[0] = channel;
    obj3[1] = tmp7;
    obj3[2] = str;
    obj3[3] = muted;
    obj3[4] = tmp5(4071).ChannelListLayoutTypes.COMPACT;
    tmp11Result = tmp11(tmp5(10050).ChannelRowPreview, obj3);
  }
  obj1[6] = tmp11Result;
  obj1[7] = extractTimestampResult;
  obj1[8] = flag(4984)(channel);
  obj1[9] = fontScale;
  obj.children = flag(16209)(obj1);
  return tmp2Result(jsx(channel(5433).PressableHighlight, {
    onPress: importAllResult.useCallback(() => {
      let obj = channel(closure_1_2[3]);
      obj = { navigationReplace: flag };
      obj.transitionToChannel(channel.id, obj);
    }, items1),
    onLongPress: importAllResult.useCallback(() => channel(closure_1_2[4]).openChannelLongPressActionSheet(channel.id), items2)
  }));
});
const result = require("set").fileFinishedImporting("modules/launchpad/native/shared/DMChannel.tsx");

export default memoResult;