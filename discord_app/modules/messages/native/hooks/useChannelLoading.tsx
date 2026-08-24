// discord_app/modules/messages/native/hooks/useChannelLoading.tsx
import useMountEffectDefault from "../../../../../discord_common/js/shared/hooks/useMountEffect.tsx";
import closure_3 from "../../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../../../_runtime/00019_noop.js";

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