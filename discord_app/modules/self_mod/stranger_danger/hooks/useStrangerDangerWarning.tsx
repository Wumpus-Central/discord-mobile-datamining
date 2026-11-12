// === Module 11958: useStrangerDangerWarning ===

// Module 11958 (useStrangerDangerWarning)
import initialize from "initialize" /* 504 */;
import useIsSpamMessageRequest from "useIsSpamMessageRequest" /* 11959 */;
import useIsMessageRequest from "useIsMessageRequest" /* 11960 */;
import useChannelSafetyWarning from "useChannelSafetyWarning" /* 11961 */;
import useUserIsTeen from "useUserIsTeen" /* 11962 */;
import useInappropriateConversationWarningsForChannel from "useInappropriateConversationWarningsForChannel" /* 11963 */;
import UserStore from "UserStore" /* 1385 */;

require = fn;
const SafetyWarningTypes = fn(10827).SafetyWarningTypes;
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