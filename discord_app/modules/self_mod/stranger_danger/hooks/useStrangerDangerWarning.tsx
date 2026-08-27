// discord_app/modules/self_mod/stranger_danger/hooks/useStrangerDangerWarning.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import useUserIsTeen from "../../hooks/useUserIsTeen.tsx";
import useChannelSafetyWarning from "../../hooks/useChannelSafetyWarning.tsx";
import useIsSpamMessageRequest from "../../../message_request/hooks/useIsSpamMessageRequest.tsx";
import useIsMessageRequest from "../../../message_request/hooks/useIsMessageRequest.tsx";
import closure_2 from "../../../../stores/UserStore.tsx";
import { SafetyWarningTypes } from "../../ChannelSafetyWarningsStore.tsx";

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