// discord_app/modules/messages/native/hooks/useChannelLoading.tsx
import hooks_useMountEffectDefault from "../../../../../discord_common/js/shared/hooks/useMountEffect.tsx";
import messages_MessagesUtils from "../MessagesUtils.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/messages/native/hooks/useChannelLoading.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (channelId) => {
      const cResult = channelId(oldestUnreadMessageId[3]).c(13);
      channelId = channelId.channelId;
      const jumpTargetId = channelId.jumpTargetId;
      oldestUnreadMessageId = channelId.oldestUnreadMessageId;
      const shouldJumpToOriginalPost = channelId.shouldJumpToOriginalPost;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function o() {
          return new jumpTargetId(oldestUnreadMessageId[4])("Messages");
        };
        cResult[0] = fn;
        let first = fn;
      } else {
        first = cResult[0];
      }
      first1 = shouldJumpToOriginalPost(first1.useState(first), 1)[0];
      if (cResult[1] === channelId) {
        if (cResult[2] === first1) {
          if (cResult[3] === jumpTargetId) {
            if (cResult[4] === oldestUnreadMessageId) {
              if (cResult[5] === shouldJumpToOriginalPost) {
                let tmp5 = cResult[6];
              }
              closure_5 = tmp5;
              if (cResult[7] === first1) {
                if (cResult[8] === tmp5) {
                  let tmp6 = cResult[9];
                }
                jumpTargetId(oldestUnreadMessageId[6])(tmp6);
                if (cResult[10] === first1) {
                  if (cResult[11] === tmp5) {
                    let tmp9 = cResult[12];
                  }
                  return tmp9;
                }
                const obj2 = { channelLatestMessageLoadingStatsManager: first1, startOrCancelLatestMessagesLoad: tmp5 };
                cResult[10] = first1;
                cResult[11] = tmp5;
                cResult[12] = obj2;
                tmp9 = obj2;
              }
              const fn3 = function p() {
                closure_5(false);
                return () => {
                  first1.cancel();
                };
              };
              cResult[7] = first1;
              cResult[8] = tmp5;
              cResult[9] = fn3;
              tmp6 = fn3;
            }
          }
        }
      }
      const fn2 = function h(first1) {
        const obj = messages_MessagesUtils;
        const result = obj.startOrCancelChannelLatestMessagesLoad({
          jumpTargetId,
          oldestUnreadMessageId,
          shouldJumpToOriginalPost: shouldJumpToOriginalPost(first1),
          channelId,
          tracker: first1,
        });
      };
      cResult[1] = channelId;
      cResult[2] = first1;
      cResult[3] = jumpTargetId;
      cResult[4] = oldestUnreadMessageId;
      cResult[5] = shouldJumpToOriginalPost;
      cResult[6] = fn2;
      tmp5 = fn2;
    }
  : (arg0) => {
      ({
        channelId: require,
        jumpTargetId: importDefault,
        oldestUnreadMessageId: dependencyMap,
        shouldJumpToOriginalPost: _slicedToArray,
      } = arg0);
      let channelLatestMessageLoadingStatsManager;
      channelLatestMessageLoadingStatsManager = _slicedToArray(
        channelLatestMessageLoadingStatsManager.useState(() => new jumpTargetId(oldestUnreadMessageId[4])("Messages")),
        1,
      )[0];
      hooks_useMountEffectDefault(() => {
        const obj = messages_MessagesUtils;
        const result = obj.startOrCancelChannelLatestMessagesLoad({
          jumpTargetId,
          oldestUnreadMessageId,
          shouldJumpToOriginalPost: _slicedToArray(false),
          channelId,
          tracker,
        });
        return () => {
          first.cancel();
        };
      });
      return {
        channelLatestMessageLoadingStatsManager,
        startOrCancelLatestMessagesLoad(arg0) {
          const obj = messages_MessagesUtils;
          const result = obj.startOrCancelChannelLatestMessagesLoad({
            jumpTargetId,
            oldestUnreadMessageId,
            shouldJumpToOriginalPost: _slicedToArray(arg0),
            channelId,
            tracker,
          });
        },
      };
    };
