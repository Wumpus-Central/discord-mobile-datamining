// === Module 8094: ReverseTrialUtils ===

// Module 8094 (ReverseTrialUtils)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import UserStore from "UserStore" /* 1390 */;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/ReverseTrialUtils.native.tsx");

export const useIsInReverseTrial = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsInReverseTrial() {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function n() {
      currentUser = currentUser.getCurrentUser();
      let flag;
      if (currentUser != null) {
        flag = currentUser.isOnReverseTrial();
      }
      if (flag == null) {
        flag = false;
      }
      return flag;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  return initialize.useStateFromStores(tmp4, tmp5);
}) : (function useIsInReverseTrial() {
  const items = [UserStore];
  return initialize.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let flag;
    if (currentUser != null) {
      flag = currentUser.isOnReverseTrial();
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  });
});
export function useReverseTrialDaysRemaining() {
  return 0;
}
export function maybeShowReverseTrialInitialUpsellModal() {

}
export function maybeShowReverseTrialFollowupUpsellModal() {

}