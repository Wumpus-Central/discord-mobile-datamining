// === Module 11458: useStrangerDangerWarning ===

// Module 11458 (useStrangerDangerWarning)
import initialize from "initialize" /* 504 */;
import useUserIsTeen from "useUserIsTeen" /* 8735 */;
import useInappropriateConversationWarningsForChannel from "useInappropriateConversationWarningsForChannel" /* 11065 */;
import useChannelSafetyWarning from "useChannelSafetyWarning" /* 11066 */;
import useIsSpamMessageRequest from "useIsSpamMessageRequest" /* 11459 */;
import useIsMessageRequest from "useIsMessageRequest" /* 11460 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
const SafetyWarningTypes = fn(11007).SafetyWarningTypes;
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