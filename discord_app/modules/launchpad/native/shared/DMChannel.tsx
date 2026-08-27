// discord_app/modules/launchpad/native/shared/DMChannel.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import importAllResult from "../../../../../_runtime/00019_noop.js";
import { UnreadSetting } from "../../../read_states/ReadStateConstants.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

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
  let obj = channel(15847);
  const baseChannelUnreadBadgeState = obj.useBaseChannelUnreadBadgeState(channel, muted);
  ({ unread, mentionCount } = baseChannelUnreadBadgeState);
  const tmp7 = flag(14861)(channel, { unread });
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
  const tmp4 = flag(16470)();
  const fontScale = channel(4887).useFontScale();
  tmp2Result = tmp2(16471);
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
  const tmp5Result = channel(4887);
  obj1[5] = jsx(flag(16474), { unread, resolvedUnreadSetting: UnreadSetting.ALL_MESSAGES, muted });
  let tmp11Result = null != tmp7;
  if (tmp11Result) {
    const obj3 = { channel: null, message: null, color: null, muted: null, layout: null };
    obj3[0] = channel;
    obj3[1] = tmp7;
    obj3[2] = str;
    obj3[3] = muted;
    obj3[4] = tmp5(4139).ChannelListLayoutTypes.COMPACT;
    tmp11Result = tmp11(tmp5(10112).ChannelRowPreview, obj3);
  }
  obj1[6] = tmp11Result;
  obj1[7] = extractTimestampResult;
  obj1[8] = flag(4639)(channel);
  obj1[9] = fontScale;
  obj.children = flag(16483)(obj1);
  return tmp2Result(jsx(channel(5020).PressableHighlight, {
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