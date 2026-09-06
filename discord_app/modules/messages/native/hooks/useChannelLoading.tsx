// discord_app/modules/messages/native/hooks/useChannelLoading.tsx
import hooks_useMountEffectDefault from "../../../../../discord_common/js/shared/hooks/useMountEffect.tsx";
import messages_MessagesUtils from "../MessagesUtils.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/messages/native/hooks/useChannelLoading.tsx");

export default function useChannelLoading(arg0) {
  ({
    channelId: require,
    jumpTargetId: importDefault,
    oldestUnreadMessageId: dependencyMap,
    shouldJumpToOriginalPost: _slicedToArray,
  } = arg0);
  let channelLatestMessageLoadingStatsManager;
  channelLatestMessageLoadingStatsManager = _slicedToArray(
    channelLatestMessageLoadingStatsManager.useState(() => new jumpTargetId(oldestUnreadMessageId[2])("Messages")),
    1,
  )[0];
  hooks_useMountEffectDefault(() => {
    const obj = {
      jumpTargetId,
      oldestUnreadMessageId,
      shouldJumpToOriginalPost: _slicedToArray(false),
      channelId,
      tracker,
    };
    const result = obj.startOrCancelChannelLatestMessagesLoad(obj);
    return () => {
      first.cancel();
    };
  });
  return {
    channelLatestMessageLoadingStatsManager,
    startOrCancelLatestMessagesLoad(arg0) {
      const obj = {
        jumpTargetId,
        oldestUnreadMessageId,
        shouldJumpToOriginalPost: _slicedToArray(arg0),
        channelId,
        tracker,
      };
      const result = obj.startOrCancelChannelLatestMessagesLoad(obj);
    },
  };
}
