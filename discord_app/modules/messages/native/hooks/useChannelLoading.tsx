// === Module 11360: useChannelLoading ===

// Module 11360 (useChannelLoading)
import useMountEffectDefault from "useMountEffect" /* 4946 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;

const require = arg1;
let result = require("set").fileFinishedImporting("modules/messages/native/hooks/useChannelLoading.tsx");

export default function useChannelLoading(arg0) {
  ({ channelId: require, jumpTargetId: importDefault, oldestUnreadMessageId: dependencyMap, shouldJumpToOriginalPost: closure_3 } = arg0);
  let first;
  first = callback(first.useState(() => new callback(table[2])("Messages")), 1)[0];
  useMountEffectDefault(() => {
    let obj = closure_1_0(closure_1_2[3]);
    obj = { jumpTargetId: closure_1, oldestUnreadMessageId: closure_2, shouldJumpToOriginalPost: callback2(false), channelId: closure_0, tracker: first };
    const result = obj.startOrCancelChannelLatestMessagesLoad(obj);
    return () => {
      closure_4.cancel();
    };
  });
  return {
    channelLatestMessageLoadingStatsManager: first,
    startOrCancelLatestMessagesLoad(arg0) {
      let obj = closure_1_0(closure_1_2[3]);
      obj = { jumpTargetId: closure_1, oldestUnreadMessageId: closure_2, shouldJumpToOriginalPost: callback2(arg0), channelId: closure_0, tracker: first };
      const result = obj.startOrCancelChannelLatestMessagesLoad(obj);
    }
  };
};