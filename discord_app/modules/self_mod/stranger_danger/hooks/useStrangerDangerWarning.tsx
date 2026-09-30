// === Module 11111: useStrangerDangerWarning ===

// Module 11111 (useStrangerDangerWarning)
import initialize from "initialize" /* 504 */;
import useUserIsTeen from "useUserIsTeen" /* 8300 */;
import useInappropriateConversationWarningsForChannel from "useInappropriateConversationWarningsForChannel" /* 10638 */;
import useChannelSafetyWarning from "useChannelSafetyWarning" /* 10639 */;
import useIsSpamMessageRequest from "useIsSpamMessageRequest" /* 11112 */;
import useIsMessageRequest from "useIsMessageRequest" /* 11113 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
const SafetyWarningTypes = fn(10579).SafetyWarningTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/self_mod/stranger_danger/hooks/useStrangerDangerWarning.tsx");

export const useStrangerDangerWarning = function useStrangerDangerWarning(id) {
  const items = [UserStore];
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
};