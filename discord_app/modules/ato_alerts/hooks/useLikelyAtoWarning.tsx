// discord_app/modules/ato_alerts/hooks/useLikelyAtoWarning.tsx
import ChannelSafetyWarningsStore from "../../self_mod/ChannelSafetyWarningsStore.tsx";
import useIsSpamMessageRequest from "../../message_request/hooks/useIsSpamMessageRequest.tsx";
import useIsMessageRequest from "../../message_request/hooks/useIsMessageRequest.tsx";
import useChannelSafetyWarning from "../../self_mod/hooks/useChannelSafetyWarning.tsx";
import useInappropriateConversationWarningsForChannel from "../../self_mod/inappropriate_conversation/hooks/useInappropriateConversationWarningsForChannel.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const SafetyWarningTypes = ChannelSafetyWarningsStore.SafetyWarningTypes;
const result = size.fileFinishedImporting("modules/ato_alerts/hooks/useLikelyAtoWarning.tsx");

export const useLikelyAtoWarning = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const isSpamMessageRequest = useIsSpamMessageRequest.useIsSpamMessageRequest(arg0);
      const isMessageRequest = useIsMessageRequest.useIsMessageRequest(arg0);
      const channelSafetyWarning = useChannelSafetyWarning.useChannelSafetyWarning(arg0, SafetyWarningTypes.LIKELY_ATO);
      const tmp4 =
        useInappropriateConversationWarningsForChannel.useInappropriateConversationWarningsForChannel(arg0).length > 0;
      if (!isSpamMessageRequest) {
        if (!isMessageRequest) {
          if (!tmp4) {
            if (null == obj5.useStrangerDangerWarning(arg0)) {
              return channelSafetyWarning;
            }
          }
        }
      }
    }
  : (arg0) => {
      const isSpamMessageRequest = useIsSpamMessageRequest.useIsSpamMessageRequest(arg0);
      const isMessageRequest = useIsMessageRequest.useIsMessageRequest(arg0);
      const channelSafetyWarning = useChannelSafetyWarning.useChannelSafetyWarning(arg0, SafetyWarningTypes.LIKELY_ATO);
      const tmp4 =
        useInappropriateConversationWarningsForChannel.useInappropriateConversationWarningsForChannel(arg0).length > 0;
      if (!isSpamMessageRequest) {
        if (!isMessageRequest) {
          if (!tmp4) {
            if (null == obj5.useStrangerDangerWarning(arg0)) {
              return channelSafetyWarning;
            }
          }
        }
      }
    };
