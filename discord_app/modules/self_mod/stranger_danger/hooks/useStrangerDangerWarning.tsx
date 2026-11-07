// === Module 11397: useStrangerDangerWarning ===

// Module 11397 (useStrangerDangerWarning)
import initialize from "initialize" /* 504 */;
import useUserIsTeen from "useUserIsTeen" /* 8439 */;
import useIsSpamMessageRequest from "useIsSpamMessageRequest" /* 11398 */;
import useIsMessageRequest from "useIsMessageRequest" /* 11399 */;
import useChannelSafetyWarning from "useChannelSafetyWarning" /* 11400 */;
import useInappropriateConversationWarningsForChannel from "useInappropriateConversationWarningsForChannel" /* 11401 */;
import UserStore from "UserStore" /* 1385 */;

require = fn;
const SafetyWarningTypes = fn(10923).SafetyWarningTypes;
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