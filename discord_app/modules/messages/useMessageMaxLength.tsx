// === Module 9232: useMessageMaxLength ===

// Module 9232 (useMessageMaxLength)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4728 */;
import UserStore from "UserStore" /* 1390 */;

require = fn;
const Constants = fn(1085);
({ MAX_MESSAGE_LENGTH_PREMIUM: closure_4, MAX_MESSAGE_LENGTH: hasOwnProperty } = Constants);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/useMessageMaxLength.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useMessageMaxLength() {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function n() {
      return PremiumUtilsDefault.canUseIncreasedMessageLength(currentUser.getCurrentUser()) ? closure_1_4 : closure_1_5;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  return initialize.useStateFromStores(tmp4, tmp5);
}) : (function useMessageMaxLength() {
  const items = [UserStore];
  return initialize.useStateFromStores(items, () => PremiumUtilsDefault.canUseIncreasedMessageLength(currentUser.getCurrentUser()) ? closure_1_4 : closure_1_5);
});
export const getMaxMessageLength = function getMaxMessageLength() {
  return PremiumUtilsDefault.canUseIncreasedMessageLength(UserStore.getCurrentUser()) ? React4 : hasOwnProperty;
};