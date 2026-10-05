// === Module 9785: useStrangerDangerWarning ===

// Module 9785 (useStrangerDangerWarning)
import get_initialized from "get initialized" /* 504 */;
import react from "react" /* 576 */;
import useUserIsTeen from "useUserIsTeen" /* 8294 */;
import ChannelSafetyWarningsStore from "ChannelSafetyWarningsStore" /* 9786 */;
import useIsSpamMessageRequest from "useIsSpamMessageRequest" /* 9787 */;
import useIsMessageRequest from "useIsMessageRequest" /* 9788 */;
import useChannelSafetyWarning from "useChannelSafetyWarning" /* 9789 */;
import useInappropriateConversationWarningsForChannel from "useInappropriateConversationWarningsForChannel" /* 9790 */;
import UserStore from "UserStore" /* 1377 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const SafetyWarningTypes = ChannelSafetyWarningsStore.SafetyWarningTypes;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
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
}) : ((arg0) => {
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
});
const result = size.fileFinishedImporting("modules/self_mod/stranger_danger/hooks/useStrangerDangerWarning.tsx");

export const useStrangerDangerWarning = tmp2;