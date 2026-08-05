// discord_app/modules/self_mod/stranger_danger/hooks/useStrangerDangerWarning.tsx
import mergeGuildAvatar from "mergeGuildAvatar";
import { SafetyWarningTypes } from "handleConnectionOpen";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/self_mod/stranger_danger/hooks/useStrangerDangerWarning.tsx");

export const useStrangerDangerWarning = function useStrangerDangerWarning(id) {
  const items = [mergeGuildAvatar];
  const stateFromStores = require(589) /* initialize */.useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj = require(589) /* initialize */;
  const tmp = require;
  const isSpamMessageRequest = require(10255) /* useIsSpamMessageRequest */.useIsSpamMessageRequest(id);
  const obj3 = require(10255) /* useIsSpamMessageRequest */;
  const isMessageRequest = require(10256) /* useIsMessageRequest */.useIsMessageRequest(id);
  const obj4 = require(10256) /* useIsMessageRequest */;
  const channelSafetyWarning = require(10257) /* useChannelSafetyWarning */.useChannelSafetyWarning(id, SafetyWarningTypes.STRANGER_DANGER);
  const obj5 = require(10257) /* useChannelSafetyWarning */;
  const userIsTeen = require(7846) /* useUserIsTeen */.useUserIsTeen();
  if (stateFromStores != null) {
    const isStaffResult = stateFromStores.isStaff();
  }
  const obj6 = require(7846) /* useUserIsTeen */;
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