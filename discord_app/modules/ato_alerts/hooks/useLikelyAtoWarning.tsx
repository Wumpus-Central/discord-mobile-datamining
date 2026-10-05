// discord_app/modules/ato_alerts/hooks/useLikelyAtoWarning.tsx
import useStrangerDangerWarning from "../../self_mod/stranger_danger/hooks/useStrangerDangerWarning.tsx";
import ChannelSafetyWarningsStore from "../../self_mod/ChannelSafetyWarningsStore.tsx";
import useIsSpamMessageRequest from "../../message_request/hooks/useIsSpamMessageRequest.tsx";
import useIsMessageRequest from "../../message_request/hooks/useIsMessageRequest.tsx";
import useChannelSafetyWarning from "../../self_mod/hooks/useChannelSafetyWarning.tsx";
import useInappropriateConversationWarningsForChannel from "../../self_mod/inappropriate_conversation/hooks/useInappropriateConversationWarningsForChannel.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const SafetyWarningTypes = ChannelSafetyWarningsStore.SafetyWarningTypes;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const obj = useIsSpamMessageRequest;
      const isSpamMessageRequest = obj.useIsSpamMessageRequest(arg0);
      const obj2 = useIsMessageRequest;
      const isMessageRequest = obj2.useIsMessageRequest(arg0);
      const obj3 = useChannelSafetyWarning;
      const channelSafetyWarning = obj3.useChannelSafetyWarning(arg0, SafetyWarningTypes.LIKELY_ATO);
      const obj4 = useInappropriateConversationWarningsForChannel;
      const tmp4 = obj4.useInappropriateConversationWarningsForChannel(arg0).length > 0;
      const obj5 = useStrangerDangerWarning;
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
      const obj = useIsSpamMessageRequest;
      const isSpamMessageRequest = obj.useIsSpamMessageRequest(arg0);
      const obj2 = useIsMessageRequest;
      const isMessageRequest = obj2.useIsMessageRequest(arg0);
      const obj3 = useChannelSafetyWarning;
      const channelSafetyWarning = obj3.useChannelSafetyWarning(arg0, SafetyWarningTypes.LIKELY_ATO);
      const obj4 = useInappropriateConversationWarningsForChannel;
      const tmp4 = obj4.useInappropriateConversationWarningsForChannel(arg0).length > 0;
      const obj5 = useStrangerDangerWarning;
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
const result = size.fileFinishedImporting("modules/ato_alerts/hooks/useLikelyAtoWarning.tsx");

export const useLikelyAtoWarning = tmp2;
