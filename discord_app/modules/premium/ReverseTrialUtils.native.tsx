// === Module 8065: ReverseTrialUtils ===

// Module 8065 (ReverseTrialUtils)
import initialize from "initialize" /* 504 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/ReverseTrialUtils.native.tsx");

export const useIsInReverseTrial = function useIsInReverseTrial() {
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
};
export function useReverseTrialDaysRemaining() {
  return 0;
}
export function maybeShowReverseTrialInitialUpsellModal() {

}
export function maybeShowReverseTrialFollowupUpsellModal() {

}