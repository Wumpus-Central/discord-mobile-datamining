// discord_app/modules/self_mod/stranger_danger/hooks/useStrangerDangerWarning.tsx
import mergeGuildAvatar from "mergeGuildAvatar";
import { SafetyWarningTypes } from "handleConnectionOpen";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/self_mod/stranger_danger/hooks/useStrangerDangerWarning.tsx");

export const useStrangerDangerWarning = function useStrangerDangerWarning(id) {
  const items = [mergeGuildAvatar];
  const stateFromStores = require("../../../../../discord_common/js/packages/flux/index.tsx") /* initialize */.useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj = require("../../../../../discord_common/js/packages/flux/index.tsx") /* initialize */;
  const tmp = require;
  const isSpamMessageRequest = require("../../../message_request/hooks/useIsSpamMessageRequest.tsx") /* useIsSpamMessageRequest */.useIsSpamMessageRequest(id);
  const obj3 = require("../../../message_request/hooks/useIsSpamMessageRequest.tsx") /* useIsSpamMessageRequest */;
  const isMessageRequest = require("../../../message_request/hooks/useIsMessageRequest.tsx") /* useIsMessageRequest */.useIsMessageRequest(id);
  const obj4 = require("../../../message_request/hooks/useIsMessageRequest.tsx") /* useIsMessageRequest */;
  const channelSafetyWarning = require("../../hooks/useChannelSafetyWarning.tsx") /* useChannelSafetyWarning */.useChannelSafetyWarning(id, SafetyWarningTypes.STRANGER_DANGER);
  const obj5 = require("../../hooks/useChannelSafetyWarning.tsx") /* useChannelSafetyWarning */;
  const userIsTeen = require("../../hooks/useUserIsTeen.tsx") /* useUserIsTeen */.useUserIsTeen();
  if (stateFromStores != null) {
    const isStaffResult = stateFromStores.isStaff();
  }
  const obj6 = require("../../hooks/useUserIsTeen.tsx") /* useUserIsTeen */;
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