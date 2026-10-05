// discord_app/modules/self_mod/stranger_danger/hooks/useStrangerDangerWarning.tsx
import get_initialized from "../../../../../discord_common/js/packages/flux/index.tsx";
import react from "../../../../../_runtime/00576_react.js";
import useUserIsTeen from "../../hooks/useUserIsTeen.tsx";
import ChannelSafetyWarningsStore from "../../ChannelSafetyWarningsStore.tsx";
import useIsSpamMessageRequest from "../../../message_request/hooks/useIsSpamMessageRequest.tsx";
import useIsMessageRequest from "../../../message_request/hooks/useIsMessageRequest.tsx";
import useChannelSafetyWarning from "../../hooks/useChannelSafetyWarning.tsx";
import useInappropriateConversationWarningsForChannel from "../../inappropriate_conversation/hooks/useInappropriateConversationWarningsForChannel.tsx";
import UserStore from "../../../../stores/UserStore.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const SafetyWarningTypes = ChannelSafetyWarningsStore.SafetyWarningTypes;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let currentUser;
      let tmp4;
      let tmp5;
      const obj = react;
      const cResult = obj.c(2);
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
      const tmpResult = get_initialized;
      const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
      const tmpResult6 = useIsSpamMessageRequest;
      const isSpamMessageRequest = tmpResult6.useIsSpamMessageRequest(arg0);
      const tmpResult7 = useIsMessageRequest;
      const isMessageRequest = tmpResult7.useIsMessageRequest(arg0);
      const tmpResult8 = useChannelSafetyWarning;
      const channelSafetyWarning = tmpResult8.useChannelSafetyWarning(arg0, SafetyWarningTypes.STRANGER_DANGER);
      const tmpResult9 = useUserIsTeen;
      const userIsTeen = tmpResult9.useUserIsTeen();
      if (stateFromStores != null) {
        stateFromStores.isStaff();
      }
      const tmpResult10 = useInappropriateConversationWarningsForChannel;
      if (userIsTeen) {
        if (!isSpamMessageRequest) {
          if (!isMessageRequest) {
            if (tmpResult10.useInappropriateConversationWarningsForChannel(arg0).length <= 0) {
              return channelSafetyWarning;
            }
          }
        }
      }
    }
  : (arg0) => {
      let currentUser;
      const items = [UserStore];
      const obj = get_initialized;
      const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
      const obj3 = useIsSpamMessageRequest;
      const isSpamMessageRequest = obj3.useIsSpamMessageRequest(arg0);
      const obj4 = useIsMessageRequest;
      const isMessageRequest = obj4.useIsMessageRequest(arg0);
      const obj5 = useChannelSafetyWarning;
      const channelSafetyWarning = obj5.useChannelSafetyWarning(arg0, SafetyWarningTypes.STRANGER_DANGER);
      const obj6 = useUserIsTeen;
      const userIsTeen = obj6.useUserIsTeen();
      if (stateFromStores != null) {
        stateFromStores.isStaff();
      }
      const tmpResult = useInappropriateConversationWarningsForChannel;
      if (userIsTeen) {
        if (!isSpamMessageRequest) {
          if (!isMessageRequest) {
            if (tmpResult.useInappropriateConversationWarningsForChannel(arg0).length <= 0) {
              return channelSafetyWarning;
            }
          }
        }
      }
    };
const result = size.fileFinishedImporting("modules/self_mod/stranger_danger/hooks/useStrangerDangerWarning.tsx");

export const useStrangerDangerWarning = tmp2;
