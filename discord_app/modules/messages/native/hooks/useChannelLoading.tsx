// === Module 11156: useChannelLoading ===

// Module 11156 (useChannelLoading)
import hooks_useMountEffectDefault from "hooks/useMountEffect" /* 5591 */;
import messages_MessagesUtils from "messages/MessagesUtils" /* 9854 */;
import ChannelLatestMessageLoadingStatsManagerDefault from "ChannelLatestMessageLoadingStatsManager" /* 11157 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((channelId) => {
  let first;
  let first1;
  let oldestUnreadMessageId;
  let tmp = oldestUnreadMessageId;
  let obj = channelId(oldestUnreadMessageId[3]);
  const cResult = obj.c(13);
  channelId = channelId.channelId;
  const jumpTargetId = channelId.jumpTargetId;
  oldestUnreadMessageId = channelId.oldestUnreadMessageId;
  const shouldJumpToOriginalPost = channelId.shouldJumpToOriginalPost;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function o() {
      const tmp = new jumpTargetId(oldestUnreadMessageId[4])("Messages");
      return tmp;
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  first1 = shouldJumpToOriginalPost(first1.useState(first), 1)[0];
  if (cResult[1] === channelId) {
    if (cResult[2] === first1) {
      if (cResult[3] === jumpTargetId) {
        if (cResult[4] === oldestUnreadMessageId) {
          let tmp5;
          if (cResult[5] === shouldJumpToOriginalPost) {
            tmp5 = cResult[6];
          }
          let closure_5 = tmp5;
          if (cResult[7] === first1) {
            let tmp6;
            if (cResult[8] === tmp5) {
              tmp6 = cResult[9];
            }
            jumpTargetId(tmp[6])(tmp6);
            if (cResult[10] === first1) {
              let tmp9;
              if (cResult[11] === tmp5) {
                tmp9 = cResult[12];
              }
              return tmp9;
            }
            let obj2 = { channelLatestMessageLoadingStatsManager: first1, startOrCancelLatestMessagesLoad: tmp5 };
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
    const obj2 = { jumpTargetId, oldestUnreadMessageId, shouldJumpToOriginalPost: shouldJumpToOriginalPost(first1), channelId, tracker: first1 };
    const result = obj.startOrCancelChannelLatestMessagesLoad(obj2);
  };
  cResult[1] = channelId;
  cResult[2] = first1;
  cResult[3] = jumpTargetId;
  cResult[4] = oldestUnreadMessageId;
  cResult[5] = shouldJumpToOriginalPost;
  cResult[6] = fn2;
  tmp5 = fn2;
}) : ((arg0) => {
  let channelId;
  let first;
  let jumpTargetId;
  let oldestUnreadMessageId;
  ({ channelId: require, jumpTargetId: importDefault, oldestUnreadMessageId: dependencyMap, shouldJumpToOriginalPost: _slicedToArray } = arg0);
  let channelLatestMessageLoadingStatsManager;
  channelLatestMessageLoadingStatsManager = _slicedToArray(channelLatestMessageLoadingStatsManager.useState(() => {
    const tmp = new ChannelLatestMessageLoadingStatsManagerDefault("Messages");
    return tmp;
  }), 1)[0];
  hooks_useMountEffectDefault(() => {
    const obj = messages_MessagesUtils;
    const obj2 = { jumpTargetId: importDefault, oldestUnreadMessageId: dependencyMap, shouldJumpToOriginalPost: _slicedToArray(false), channelId: require, tracker };
    const result = obj.startOrCancelChannelLatestMessagesLoad(obj2);
    return () => {
      first.cancel();
    };
  });
  let obj = {
    channelLatestMessageLoadingStatsManager,
    startOrCancelLatestMessagesLoad(arg0) {
      const obj = messages_MessagesUtils;
      const obj2 = { jumpTargetId: importDefault, oldestUnreadMessageId: dependencyMap, shouldJumpToOriginalPost: _slicedToArray(arg0), channelId: require, tracker };
      const result = obj.startOrCancelChannelLatestMessagesLoad(obj2);
    }
  };
  return obj;
});
let result = size.fileFinishedImporting("modules/messages/native/hooks/useChannelLoading.tsx");

export default tmp2;