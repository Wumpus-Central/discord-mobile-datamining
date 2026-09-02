// === Module 11221: useStrangerDangerWarning ===

// Module 11221 (useStrangerDangerWarning)
import initialize from "initialize" /* 586 */;
import useUserIsTeen from "useUserIsTeen" /* 8786 */;
import useChannelSafetyWarning from "useChannelSafetyWarning" /* 10931 */;
import useIsSpamMessageRequest from "useIsSpamMessageRequest" /* 11222 */;
import useIsMessageRequest from "useIsMessageRequest" /* 11223 */;
import closure_2 from "mergeGuildAvatar" /* 1921 */;
import { SafetyWarningTypes } from "handleConnectionOpen" /* 10874 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/self_mod/stranger_danger/hooks/useStrangerDangerWarning.tsx");

export const useStrangerDangerWarning = function useStrangerDangerWarning(id) {
  const items = [closure_2];
  const stateFromStores = initialize.useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj = initialize;
  const tmp = require;
  const isSpamMessageRequest = useIsSpamMessageRequest.useIsSpamMessageRequest(id);
  const obj3 = useIsSpamMessageRequest;
  const isMessageRequest = useIsMessageRequest.useIsMessageRequest(id);
  const obj4 = useIsMessageRequest;
  const channelSafetyWarning = useChannelSafetyWarning.useChannelSafetyWarning(id, SafetyWarningTypes.STRANGER_DANGER);
  const obj5 = useChannelSafetyWarning;
  const userIsTeen = useUserIsTeen.useUserIsTeen();
  if (stateFromStores != null) {
    const isStaffResult = stateFromStores.isStaff();
  }
  const obj6 = useUserIsTeen;
  if (userIsTeen) {
    if (!isSpamMessageRequest) {
      if (!isMessageRequest) {
        if (tmpResult.useInappropriateConversationWarningsForChannel(id).length <= 0) {
          return channelSafetyWarning;
        }
      }
    }
  }
};