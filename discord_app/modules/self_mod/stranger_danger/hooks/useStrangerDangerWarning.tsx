// === Module 12025: useStrangerDangerWarning ===

// Module 12025 (useStrangerDangerWarning)
import initialize from "initialize" /* 504 */;
import useIsSpamMessageRequest from "useIsSpamMessageRequest" /* 12026 */;
import useIsMessageRequest from "useIsMessageRequest" /* 12027 */;
import useChannelSafetyWarning from "useChannelSafetyWarning" /* 12028 */;
import useUserIsTeen from "useUserIsTeen" /* 12029 */;
import useInappropriateConversationWarningsForChannel from "useInappropriateConversationWarningsForChannel" /* 12030 */;
import UserStore from "UserStore" /* 1388 */;

require = fn;
const SafetyWarningTypes = fn(10896).SafetyWarningTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/self_mod/stranger_danger/hooks/useStrangerDangerWarning.tsx");

export function useStrangerDangerWarning(id) {
  items = [UserStore];
  const stateFromStores = initialize.useStateFromStores(items, () => currentUser.getCurrentUser());
  const isSpamMessageRequest = useIsSpamMessageRequest.useIsSpamMessageRequest(id);
  const isMessageRequest = useIsMessageRequest.useIsMessageRequest(id);
  const channelSafetyWarning = useChannelSafetyWarning.useChannelSafetyWarning(id, SafetyWarningTypes.STRANGER_DANGER);
  const userIsTeen = useUserIsTeen.useUserIsTeen();
  if (stateFromStores != null) {
    stateFromStores.isStaff();
  }
  if (userIsTeen) {
    if (!isSpamMessageRequest) {
      if (!isMessageRequest) {
        if (tmpResult.useInappropriateConversationWarningsForChannel(id).length <= 0) {
          return channelSafetyWarning;
        }
      }
    }
  }
  tmpResult = useInappropriateConversationWarningsForChannel;
}