// === Module 10570: useStrangerDangerWarning ===

// Module 10570 (useStrangerDangerWarning)
import initialize from "initialize" /* 589 */;
import useUserIsTeen from "useUserIsTeen" /* 8152 */;
import useIsSpamMessageRequest from "useIsSpamMessageRequest" /* 10571 */;
import useIsMessageRequest from "useIsMessageRequest" /* 10572 */;
import useChannelSafetyWarning from "useChannelSafetyWarning" /* 10573 */;
import useInappropriateConversationWarningsForChannel from "useInappropriateConversationWarningsForChannel" /* 10574 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;
import { SafetyWarningTypes } from "handleConnectionOpen" /* 9921 */;

require = fn;
const result = require("obj132").fileFinishedImporting("modules/self_mod/stranger_danger/hooks/useStrangerDangerWarning.tsx");

export const useStrangerDangerWarning = function useStrangerDangerWarning(id) {
  const items = [closure_2];
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