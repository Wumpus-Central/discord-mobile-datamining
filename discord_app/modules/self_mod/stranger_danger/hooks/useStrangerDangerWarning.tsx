import { initialize } from "../../../../../discord_common/js/packages/flux/index.tsx";
import { useIsMessageRequest } from "../../../message_request/hooks/useIsMessageRequest.tsx";
import { useIsSpamMessageRequest } from "../../../message_request/hooks/useIsSpamMessageRequest.tsx";
import { useChannelSafetyWarning } from "../../hooks/useChannelSafetyWarning.tsx";
import { useUserIsTeen } from "../../hooks/useUserIsTeen.tsx";
// discord_app/modules/self_mod/stranger_danger/hooks/useStrangerDangerWarning.tsx
import mergeGuildAvatar from "mergeGuildAvatar";
import { SafetyWarningTypes } from "handleConnectionOpen";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/self_mod/stranger_danger/hooks/useStrangerDangerWarning.tsx");

export const useStrangerDangerWarning = function useStrangerDangerWarning(id) {
  const items = [mergeGuildAvatar];
  const stateFromStores = initialize /* initialize */.useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj = initialize /* initialize */;
  const tmp = require;
  const isSpamMessageRequest = useIsSpamMessageRequest /* useIsSpamMessageRequest */.useIsSpamMessageRequest(id);
  const obj3 = useIsSpamMessageRequest /* useIsSpamMessageRequest */;
  const isMessageRequest = useIsMessageRequest /* useIsMessageRequest */.useIsMessageRequest(id);
  const obj4 = useIsMessageRequest /* useIsMessageRequest */;
  const channelSafetyWarning = useChannelSafetyWarning /* useChannelSafetyWarning */.useChannelSafetyWarning(id, SafetyWarningTypes.STRANGER_DANGER);
  const obj5 = useChannelSafetyWarning /* useChannelSafetyWarning */;
  const userIsTeen = useUserIsTeen /* useUserIsTeen */.useUserIsTeen();
  if (stateFromStores != null) {
    const isStaffResult = stateFromStores.isStaff();
  }
  const obj6 = useUserIsTeen /* useUserIsTeen */;
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