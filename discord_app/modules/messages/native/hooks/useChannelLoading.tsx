// === Module 10732: useChannelLoading ===

// Module 10732 (useChannelLoading)
import useMountEffectDefault from "useMountEffect" /* 4762 */;
import getVisibleMessages from "getVisibleMessages" /* 10454 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;

require = fn;
let result = require("obj132").fileFinishedImporting("modules/messages/native/hooks/useChannelLoading.tsx");

export default function useChannelLoading(arg0) {
  ({ channelId: require, jumpTargetId: importDefault, oldestUnreadMessageId: dependencyMap, shouldJumpToOriginalPost: closure_3 } = arg0);
  let first;
  first = callback(first.useState(() => new callback(table[2])("Messages")), 1)[0];
  useMountEffectDefault(() => {
    const obj = { jumpTargetId: closure_1, oldestUnreadMessageId: closure_2, shouldJumpToOriginalPost: callback2(false), channelId: closure_0, tracker: first };
    const result = obj.startOrCancelChannelLatestMessagesLoad(obj);
    return () => {
      closure_4.cancel();
    };
  });
  return {
    channelLatestMessageLoadingStatsManager: first,
    startOrCancelLatestMessagesLoad(arg0) {
      const obj = { jumpTargetId: closure_1, oldestUnreadMessageId: closure_2, shouldJumpToOriginalPost: callback2(arg0), channelId: closure_0, tracker: first };
      const result = obj.startOrCancelChannelLatestMessagesLoad(obj);
    }
  };
};