// discord_app/modules/launchpad/native/shared/DMChannel.tsx
import SnowflakeUtilsDefault from "../../../../utils/SnowflakeUtils.tsx";
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import transitionToChannel from "../../../routing/transitionToChannel.tsx";
import useFontScale from "../../../screen/native/useFontScale.tsx";
import useChannelNameDefault from "../../../channel/useChannelName.tsx";
import Pressables from "../../../../design/void/Pressables/native/Pressables.tsx";
import ChannelListLayoutTypes from "../../../main_tabs_v2/ChannelListLayoutTypes.tsx";
import openChannelLongPressActionSheet from "../../../channel/native/openChannelLongPressActionSheet.tsx";
import ChannelRowPreview from "../../../main_tabs_v2/native/shared_components/ChannelRowPreview.tsx";
import useMessagePreviewsDefault from "../../../main_tabs_v2/useMessagePreviews.tsx";
import useChannelUnreadBadgeState from "useChannelUnreadBadgeState.tsx";
import renderChannelItemDefault from "renderChannelItem.tsx";
import getLayoutStylesDefault from "getLayoutStyles.tsx";
import UnreadBadgeDefault from "UnreadBadge.tsx";
import renderChannelPressableWrapperDefault from "renderChannelPressableWrapper.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const UnreadSetting = fn(5967).UnreadSetting;
const jsx = fn(21).jsx;
let ReactCompilerGating = fn(558);
let closure_6 = ReactCompilerGating.isReactCompilerEnabled()
  ? function usePrivateChannelPressEvents(id, navigationReplace) {
      _require = id;
      const cResult = require("c").c(8);
      if (cResult[0] === id.id) {
        if (cResult[1] === navigationReplace) {
          let tmp2 = cResult[2];
        }
        if (cResult[3] !== id.id) {
          const fn2 = function s() {
            return openChannelLongPressActionSheet.openChannelLongPressActionSheet(user.id);
          };
          cResult[3] = id.id;
          cResult[4] = fn2;
          let tmp3 = fn2;
        } else {
          tmp3 = cResult[4];
        }
        if (cResult[5] === tmp3) {
          if (cResult[6] === tmp2) {
            let tmp4 = cResult[7];
          }
          return tmp4;
        }
        const obj2 = { onPress: tmp2, onLongPress: tmp3 };
        cResult[5] = tmp3;
        cResult[6] = tmp2;
        cResult[7] = obj2;
        tmp4 = obj2;
      }
      const fn = function l() {
        transitionToChannel.transitionToChannel(user.id, { navigationReplace });
      };
      cResult[0] = id.id;
      cResult[1] = navigationReplace;
      cResult[2] = fn;
      tmp2 = fn;
    }
  : function usePrivateChannelPressEvents(id, navigationReplace) {
      const user = id;
      const obj = { onPress: null, onLongPress: null };
      const items = [id.id, navigationReplace];
      obj.onPress = noop.useCallback(() => {
        transitionToChannel.transitionToChannel(user.id, { navigationReplace });
      }, items);
      const items1 = [id.id];
      obj.onLongPress = noop.useCallback(
        () => openChannelLongPressActionSheet.openChannelLongPressActionSheet(user.id),
        items1,
      );
      return obj;
    };
const createStyles = fn(5092);
let obj = {
  pressable: { flex: 1 },
  pressableUnderlayColor: { backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_ACTIVE },
};
let closure_7 = createStyles.createStyles(obj);
ReactCompilerGating = fn(558);
let obj4 = { backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_ACTIVE };
const size = fn(2);
const result = size.fileFinishedImporting("modules/launchpad/native/shared/DMChannel.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function DMChannel(arg0) {
        const cResult = c.c(23);
        ({ channel, muted, navigationReplace } = arg0);
        const tmp6 = closure_7();
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp9 = getLayoutStylesDefault();
          cResult[0] = tmp9;
          let first = tmp9;
        } else {
          first = cResult[0];
        }
        const tmp5 = undefined !== navigationReplace && navigationReplace;
        const baseChannelUnreadBadgeState = useChannelUnreadBadgeState.useBaseChannelUnreadBadgeState(channel, tmp4);
        ({ unread, mentionCount } = baseChannelUnreadBadgeState);
        if (cResult[1] !== unread) {
          const obj2 = { unread };
          cResult[1] = unread;
          cResult[2] = obj2;
          let tmp11 = obj2;
        } else {
          tmp11 = cResult[2];
        }
        const tmp13 = useMessagePreviewsDefault(channel, tmp11);
        if (null != tmp13) {
          const tmp12Result = SnowflakeUtilsDefault;
          const extractTimestampResult = SnowflakeUtilsDefault.extractTimestamp(tmp13.id);
        }
        let str = "text-muted";
        if (unread) {
          str = "text-muted";
          if (!tmp4) {
            str = "text-default";
          }
        }
        const tmpResult = useChannelUnreadBadgeState;
        const fontScale = useFontScale.useFontScale();
        const tmp12Result3 = renderChannelPressableWrapperDefault;
        const PressableHighlight = Pressables.PressableHighlight;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const obj3 = { borderRadius: first.container.borderRadius };
          cResult[3] = obj3;
          let tmp17 = obj3;
        } else {
          tmp17 = cResult[3];
        }
        if (cResult[4] !== tmp6.pressable) {
          const items = [tmp6.pressable, tmp17];
          cResult[4] = tmp6.pressable;
          cResult[5] = items;
          let tmp18 = items;
        } else {
          tmp18 = cResult[5];
        }
        const tmp19 = closure_6(channel, tmp5);
        if (cResult[6] === (undefined !== muted && muted)) {
          if (cResult[7] === unread) {
            let tmp20 = cResult[8];
          }
          if (cResult[9] === channel) {
            if (cResult[10] === tmp13) {
              if (cResult[11] === tmp4) {
                if (cResult[12] === str) {
                  let tmp22 = cResult[13];
                }
                const obj4 = {
                  channel,
                  unread,
                  resolvedUnreadSetting: UnreadSetting.ALL_MESSAGES,
                  muted: tmp4,
                  mentionCount,
                  unreadBadge: tmp20,
                  subtitle: tmp22,
                  latestMessageTimestamp: extractTimestampResult,
                  channelName: useChannelNameDefault(channel),
                  fontScale,
                };
                const tmp12Result2Result = renderChannelItemDefault(obj4);
                if (cResult[14] === PressableHighlight) {
                  if (cResult[15] === tmp6.pressableUnderlayColor.backgroundColor) {
                    if (cResult[16] === tmp12Result2Result) {
                      if (cResult[17] === tmp18) {
                        if (cResult[18] === tmp19) {
                          let tmp28 = cResult[19];
                        }
                        if (cResult[20] === tmp28) {
                          if (cResult[21] === tmp12Result3) {
                            let tmp34 = cResult[22];
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
                const obj5 = { style: tmp18, underlayColor: tmp6.pressableUnderlayColor.backgroundColor };
                const merged = Object.assign(tmp19);
                obj5.children = tmp12Result2Result;
                const tmp33 = (
                  <PressableHighlight style={tmp18} underlayColor={tmp6.pressableUnderlayColor.backgroundColor} />
                );
                cResult[14] = PressableHighlight;
                cResult[15] = tmp6.pressableUnderlayColor.backgroundColor;
                cResult[16] = tmp12Result2Result;
                cResult[17] = tmp18;
                cResult[18] = tmp19;
                cResult[19] = tmp33;
                tmp28 = tmp33;
                const tmp12Result4 = renderChannelItemDefault;
              }
            }
          }
          let tmp23 = null != tmp13;
          if (tmp23) {
            const obj6 = {
              channel,
              message: tmp13,
              color: str,
              muted: tmp4,
              layout: ChannelListLayoutTypes.ChannelListLayoutTypes.COMPACT,
            };
            tmp23 = jsx(ChannelRowPreview.ChannelRowPreview, {
              channel,
              message: tmp13,
              color: str,
              muted: tmp4,
              layout: ChannelListLayoutTypes.ChannelListLayoutTypes.COMPACT,
            });
          }
          cResult[9] = channel;
          cResult[10] = tmp13;
          cResult[11] = tmp4;
          cResult[12] = str;
          cResult[13] = tmp23;
          tmp22 = tmp23;
        }
        const tmp21 = jsx(UnreadBadgeDefault, {
          unread,
          resolvedUnreadSetting: UnreadSetting.ALL_MESSAGES,
          muted: undefined !== muted && muted,
        });
        cResult[6] = undefined !== muted && muted;
        cResult[7] = unread;
        cResult[8] = tmp21;
        tmp20 = tmp21;
        const obj7 = { unread, resolvedUnreadSetting: UnreadSetting.ALL_MESSAGES, muted: undefined !== muted && muted };
        const tmpResult2 = useFontScale;
      }
    : function DMChannel(navigationReplace) {
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
        const baseChannelUnreadBadgeState = useChannelUnreadBadgeState.useBaseChannelUnreadBadgeState(channel, muted);
        ({ unread, mentionCount } = baseChannelUnreadBadgeState);
        const tmp7 = useMessagePreviewsDefault(channel, { unread });
        let extractTimestampResult;
        if (null != tmp7) {
          extractTimestampResult = SnowflakeUtilsDefault.extractTimestamp(tmp7.id);
          const tmp2Result = SnowflakeUtilsDefault;
        }
        let str = "text-muted";
        if (unread) {
          str = "text-muted";
          if (!muted) {
            str = "text-default";
          }
        }
        const fontScale = useFontScale.useFontScale();
        const tmp5Result = useFontScale;
        const obj2 = { style: null, underlayColor: tmp.pressableUnderlayColor.backgroundColor };
        const items = [tmp.pressable, { borderRadius: tmp4.container.borderRadius }];
        obj2.style = items;
        const merged = Object.assign(closure_6(channel, flag));
        const obj3 = {
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
        const tmp2Result3 = renderChannelPressableWrapperDefault;
        obj3.unreadBadge = jsx(UnreadBadgeDefault, {
          unread,
          resolvedUnreadSetting: UnreadSetting.ALL_MESSAGES,
          muted,
        });
        let tmp11Result = null != tmp7;
        if (tmp11Result) {
          const obj5 = {
            channel,
            message: tmp7,
            color: str,
            muted,
            layout: ChannelListLayoutTypes.ChannelListLayoutTypes.COMPACT,
          };
          tmp11Result = jsx(ChannelRowPreview.ChannelRowPreview, {
            channel,
            message: tmp7,
            color: str,
            muted,
            layout: ChannelListLayoutTypes.ChannelListLayoutTypes.COMPACT,
          });
        }
        obj3.subtitle = tmp11Result;
        obj3.latestMessageTimestamp = extractTimestampResult;
        obj3.channelName = useChannelNameDefault(channel);
        obj3.fontScale = fontScale;
        obj2.children = renderChannelItemDefault(obj3);
        return tmp2Result3(
          jsx(Pressables.PressableHighlight, {
            style: null,
            underlayColor: tmp.pressableUnderlayColor.backgroundColor,
          }),
        );
      },
);
