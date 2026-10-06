// === Module 17435: shared/DMChannel ===

// Module 17435 (shared/DMChannel)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import transitionToChannel from "transitionToChannel" /* 4907 */;
import useChannelNameDefault from "useChannelName" /* 5049 */;
import ReadStateConstants from "ReadStateConstants" /* 5078 */;
import useFontScale from "useFontScale" /* 5609 */;
import Pressables from "Pressables" /* 5916 */;
import ChannelListLayoutTypes from "ChannelListLayoutTypes" /* 7525 */;
import openChannelLongPressActionSheet from "openChannelLongPressActionSheet" /* 10664 */;
import ChannelRowPreview2 from "ChannelRowPreview" /* 12503 */;
import useMessagePreviewsDefault from "useMessagePreviews" /* 15152 */;
import useChannelUnreadBadgeState from "useChannelUnreadBadgeState" /* 16325 */;
import renderChannelItemDefault from "renderChannelItem" /* 16852 */;
import getLayoutStylesDefault from "getLayoutStyles" /* 16853 */;
import UnreadBadgeDefault from "UnreadBadge" /* 17427 */;
import renderChannelPressableWrapperDefault from "renderChannelPressableWrapper" /* 17429 */;
import react from "react" /* 19 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import createStyles from "createStyles" /* 4896 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let obj2;
const UnreadSetting = ReadStateConstants.UnreadSetting;
const jsx = Fragment.jsx;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_6 = ReactCompilerGating.isReactCompilerEnabled() ? ((id, navigationReplace) => {
  let user;
  _require = id;
  let obj = require("react");
  const cResult = obj.c(8);
  if (cResult[0] === id.id) {
    let tmp2;
    let tmp3;
    if (cResult[1] === navigationReplace) {
      tmp2 = cResult[2];
    }
    if (cResult[3] !== id.id) {
      const fn2 = function s() {
        const obj = openChannelLongPressActionSheet;
        return obj.openChannelLongPressActionSheet(user.id);
      };
      cResult[3] = id.id;
      cResult[4] = fn2;
      tmp3 = fn2;
    } else {
      tmp3 = cResult[4];
    }
    if (cResult[5] === tmp3) {
      let tmp4;
      if (cResult[6] === tmp2) {
        tmp4 = cResult[7];
      }
      return tmp4;
    }
    let obj2 = { onPress: tmp2, onLongPress: tmp3 };
    cResult[5] = tmp3;
    cResult[6] = tmp2;
    cResult[7] = obj2;
    tmp4 = obj2;
  }
  const fn = function l() {
    const obj = transitionToChannel;
    const obj2 = { navigationReplace };
    obj.transitionToChannel(user.id, obj2);
  };
  cResult[0] = id.id;
  cResult[1] = navigationReplace;
  cResult[2] = fn;
  tmp2 = fn;
}) : ((id, navigationReplace) => {
  let items;
  let items1;
  const user = id;
  let obj = {
    onPress: react.useCallback(() => {
      const obj = transitionToChannel;
      const obj2 = { navigationReplace };
      obj.transitionToChannel(user.id, obj2);
    }, items),
    onLongPress: react.useCallback(() => {
      const obj = openChannelLongPressActionSheet;
      return obj.openChannelLongPressActionSheet(user.id);
    }, items1)
  };
  items = [id.id, navigationReplace];
  items1 = [id.id];
  return obj;
});
let obj = { pressable: { flex: 1 }, pressableUnderlayColor: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_ACTIVE };
let closure_7 = createStyles.createStyles(obj);
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let channel;
  let extractTimestampResult;
  let first;
  let mentionCount;
  let muted;
  let navigationReplace;
  let tmp11;
  let tmp17;
  let tmp18;
  let unread;
  const obj = react2;
  const cResult = obj.c(23);
  ({ channel, muted, navigationReplace } = arg0);
  const tmp5 = undefined !== navigationReplace && navigationReplace;
  const tmp6 = closure_7();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp9 = getLayoutStylesDefault();
    cResult[0] = tmp9;
    first = tmp9;
  } else {
    first = cResult[0];
  }
  const tmpResult = useChannelUnreadBadgeState;
  const baseChannelUnreadBadgeState = tmpResult.useBaseChannelUnreadBadgeState(channel, tmp4);
  ({ unread, mentionCount } = baseChannelUnreadBadgeState);
  if (cResult[1] !== unread) {
    const obj2 = { unread };
    cResult[1] = unread;
    cResult[2] = obj2;
    tmp11 = obj2;
  } else {
    tmp11 = cResult[2];
  }
  const tmp13 = useMessagePreviewsDefault(channel, tmp11);
  if (null != tmp13) {
    const tmp12Result = SnowflakeUtilsDefault;
    extractTimestampResult = tmp12Result.extractTimestamp(tmp13.id);
  }
  let str = "text-muted";
  if (unread) {
    str = "text-muted";
    if (!(undefined !== muted && muted)) {
      str = "text-default";
    }
  }
  const tmpResult2 = useFontScale;
  const fontScale = tmpResult2.useFontScale();
  const tmp12Result3 = renderChannelPressableWrapperDefault;
  const PressableHighlight = Pressables.PressableHighlight;
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { borderRadius: first.container.borderRadius };
    cResult[3] = obj3;
    tmp17 = obj3;
  } else {
    tmp17 = cResult[3];
  }
  if (cResult[4] !== tmp6.pressable) {
    const items = [tmp6.pressable, tmp17];
    cResult[4] = tmp6.pressable;
    cResult[5] = items;
    tmp18 = items;
  } else {
    tmp18 = cResult[5];
  }
  const backgroundColor = tmp6.pressableUnderlayColor.backgroundColor;
  const tmp19 = closure_6(channel, tmp5);
  if (cResult[6] === (undefined !== muted && muted)) {
    let tmp20;
    if (cResult[7] === unread) {
      tmp20 = cResult[8];
    }
    if (cResult[9] === channel) {
      if (cResult[10] === tmp13) {
        if (cResult[11] === (undefined !== muted && muted)) {
          let tmp22;
          if (cResult[12] === str) {
            tmp22 = cResult[13];
          }
          const obj4 = { channel, unread, resolvedUnreadSetting: UnreadSetting.ALL_MESSAGES, muted: undefined !== muted && muted, mentionCount, unreadBadge: tmp20, subtitle: tmp22, latestMessageTimestamp: extractTimestampResult, channelName: useChannelNameDefault(channel), fontScale };
          const tmp12Result4 = renderChannelItemDefault;
          const tmp12Result2Result = tmp12Result4(obj4);
          if (cResult[14] === PressableHighlight) {
            if (cResult[15] === tmp6.pressableUnderlayColor.backgroundColor) {
              if (cResult[16] === tmp12Result2Result) {
                if (cResult[17] === tmp18) {
                  let tmp28;
                  if (cResult[18] === tmp19) {
                    tmp28 = cResult[19];
                  }
                  if (cResult[20] === tmp28) {
                    let tmp34;
                    if (cResult[21] === tmp12Result3) {
                      tmp34 = cResult[22];
                    }
                    return tmp34;
                  }
                  const tmp12Result1Result = tmp12Result3(tmp28);
                  cResult[20] = tmp28;
                  cResult[21] = tmp12Result3;
                  cResult[22] = tmp12Result1Result;
                  tmp34 = tmp12Result1Result;
                }
              }
            }
          }
          const merged = Object.assign(tmp19);
          const tmp33 = <PressableHighlight style={tmp18} underlayColor={backgroundColor}>{tmp12Result2Result}</PressableHighlight>;
          cResult[14] = PressableHighlight;
          cResult[15] = tmp6.pressableUnderlayColor.backgroundColor;
          cResult[16] = tmp12Result2Result;
          cResult[17] = tmp18;
          cResult[18] = tmp19;
          cResult[19] = tmp33;
          tmp28 = tmp33;
        }
      }
    }
    let tmp23 = null != tmp13;
    if (tmp23) {
      const ChannelRowPreview = ChannelRowPreview2.ChannelRowPreview;
      tmp23 = <ChannelRowPreview channel={channel} message={tmp13} color={str} muted={undefined !== muted && muted} layout={ChannelListLayoutTypes.ChannelListLayoutTypes.COMPACT} />;
    }
    cResult[9] = channel;
    cResult[10] = tmp13;
    cResult[11] = undefined !== muted && muted;
    cResult[12] = str;
    cResult[13] = tmp23;
    tmp22 = tmp23;
  }
  const tmp21 = jsx(UnreadBadgeDefault, { unread, resolvedUnreadSetting: UnreadSetting.ALL_MESSAGES, muted: undefined !== muted && muted });
  cResult[6] = undefined !== muted && muted;
  cResult[7] = unread;
  cResult[8] = tmp21;
  tmp20 = tmp21;
}) : ((navigationReplace) => {
  let channel;
  let mentionCount;
  let muted;
  let tmp11Result;
  let unread;
  ({ channel, muted } = navigationReplace);
  if (muted === undefined) {
    muted = false;
  }
  let flag = navigationReplace.navigationReplace;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = closure_7();
  const tmp4 = getLayoutStylesDefault();
  const obj = useChannelUnreadBadgeState;
  const baseChannelUnreadBadgeState = obj.useBaseChannelUnreadBadgeState(channel, muted);
  ({ unread, mentionCount } = baseChannelUnreadBadgeState);
  const tmp7 = useMessagePreviewsDefault(channel, { unread });
  let extractTimestampResult;
  if (null != tmp7) {
    const tmp2Result = SnowflakeUtilsDefault;
    extractTimestampResult = tmp2Result.extractTimestamp(tmp7.id);
  }
  let str = "text-muted";
  if (unread) {
    str = "text-muted";
    if (!muted) {
      str = "text-default";
    }
  }
  const tmp5Result = useFontScale;
  const fontScale = tmp5Result.useFontScale();
  const items = [tmp.pressable, { borderRadius: tmp4.container.borderRadius }];
  const tmp2Result3 = renderChannelPressableWrapperDefault;
  const PressableHighlight = Pressables.PressableHighlight;
  const merged = Object.assign(closure_6(channel, flag));
  const obj3 = { channel, unread, resolvedUnreadSetting: UnreadSetting.ALL_MESSAGES, muted, mentionCount, unreadBadge: null, subtitle: tmp11Result, latestMessageTimestamp: extractTimestampResult, channelName: useChannelNameDefault(channel), fontScale };
  tmp11Result = null != tmp7;
  const tmp2Result4 = renderChannelItemDefault;
  if (tmp11Result) {
    const ChannelRowPreview = ChannelRowPreview2.ChannelRowPreview;
    tmp11Result = <ChannelRowPreview channel={channel} message={tmp7} color={str} muted={muted} layout={ChannelListLayoutTypes.ChannelListLayoutTypes.COMPACT} />;
  }
  return tmp2Result3(<PressableHighlight style={items} underlayColor={tmp.pressableUnderlayColor.backgroundColor}>{tmp2Result4(obj3)}</PressableHighlight>);
}));
const result = size.fileFinishedImporting("modules/launchpad/native/shared/DMChannel.tsx");

export default memoResult;