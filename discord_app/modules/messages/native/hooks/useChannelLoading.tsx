// === Module 11540: useChannelLoading ===

// Module 11540 (useChannelLoading)
import hooks_useMountEffectDefault from "hooks/useMountEffect" /* 4993 */;
import messages_MessagesUtils from "messages/MessagesUtils" /* 11252 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/messages/native/hooks/useChannelLoading.tsx");

export default function useChannelLoading(arg0) {
  ({ channelId: require, jumpTargetId: importDefault, oldestUnreadMessageId: dependencyMap, shouldJumpToOriginalPost: _slicedToArray } = arg0);
  let channelLatestMessageLoadingStatsManager;
  channelLatestMessageLoadingStatsManager = _slicedToArray(channelLatestMessageLoadingStatsManager.useState(() => new jumpTargetId(oldestUnreadMessageId[2])("Messages")), 1)[0];
  hooks_useMountEffectDefault(() => {
    const obj = { jumpTargetId, oldestUnreadMessageId, shouldJumpToOriginalPost: _slicedToArray(false), channelId, tracker };
    const result = obj.startOrCancelChannelLatestMessagesLoad(obj);
    return () => {
      first.cancel();
    };
  });
  return {
    channelLatestMessageLoadingStatsManager,
    startOrCancelLatestMessagesLoad(arg0) {
      const obj = { jumpTargetId, oldestUnreadMessageId, shouldJumpToOriginalPost: _slicedToArray(arg0), channelId, tracker };
      const result = obj.startOrCancelChannelLatestMessagesLoad(obj);
    }
  };
};