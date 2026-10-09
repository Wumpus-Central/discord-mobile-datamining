// discord_app/modules/self_mod/stranger_danger/hooks/useStrangerDangerWarning.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../../_runtime/00576_c.js";
import useUserIsTeen from "../../hooks/useUserIsTeen.tsx";
import useIsSpamMessageRequest from "../../../message_request/hooks/useIsSpamMessageRequest.tsx";
import useIsMessageRequest from "../../../message_request/hooks/useIsMessageRequest.tsx";
import useChannelSafetyWarning from "../../hooks/useChannelSafetyWarning.tsx";
import useInappropriateConversationWarningsForChannel from "../../inappropriate_conversation/hooks/useInappropriateConversationWarningsForChannel.tsx";
import UserStore from "../../../../stores/UserStore.tsx";

require = fn;
const SafetyWarningTypes = fn(10251).SafetyWarningTypes;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/self_mod/stranger_danger/hooks/useStrangerDangerWarning.tsx");

export const useStrangerDangerWarning = ReactCompilerGating.isReactCompilerEnabled()
  ? function useStrangerDangerWarning(arg0) {
      const cResult = c.c(2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserStore];
        const fn = function o() {
          return currentUser.getCurrentUser();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const stateFromStores = initialize.useStateFromStores(tmp4, tmp5);
      const tmpResult = initialize;
      const isSpamMessageRequest = useIsSpamMessageRequest.useIsSpamMessageRequest(arg0);
      const tmpResult6 = useIsSpamMessageRequest;
      const isMessageRequest = useIsMessageRequest.useIsMessageRequest(arg0);
      const tmpResult7 = useIsMessageRequest;
      const channelSafetyWarning = useChannelSafetyWarning.useChannelSafetyWarning(
        arg0,
        SafetyWarningTypes.STRANGER_DANGER,
      );
      const tmpResult8 = useChannelSafetyWarning;
      const userIsTeen = useUserIsTeen.useUserIsTeen();
      if (stateFromStores != null) {
        stateFromStores.isStaff();
      }
      const tmpResult9 = useUserIsTeen;
      if (userIsTeen) {
        if (!isSpamMessageRequest) {
          if (!isMessageRequest) {
            if (tmpResult10.useInappropriateConversationWarningsForChannel(arg0).length <= 0) {
              return channelSafetyWarning;
            }
          }
        }
      }
      tmpResult10 = useInappropriateConversationWarningsForChannel;
    }
  : function useStrangerDangerWarning(arg0) {
      const items = [UserStore];
      const stateFromStores = initialize.useStateFromStores(items, () => currentUser.getCurrentUser());
      const isSpamMessageRequest = useIsSpamMessageRequest.useIsSpamMessageRequest(arg0);
      const isMessageRequest = useIsMessageRequest.useIsMessageRequest(arg0);
      const channelSafetyWarning = useChannelSafetyWarning.useChannelSafetyWarning(
        arg0,
        SafetyWarningTypes.STRANGER_DANGER,
      );
      const userIsTeen = useUserIsTeen.useUserIsTeen();
      if (stateFromStores != null) {
        stateFromStores.isStaff();
      }
      if (userIsTeen) {
        if (!isSpamMessageRequest) {
          if (!isMessageRequest) {
            if (tmpResult.useInappropriateConversationWarningsForChannel(arg0).length <= 0) {
              return channelSafetyWarning;
            }
          }
        }
      }
      tmpResult = useInappropriateConversationWarningsForChannel;
    };
