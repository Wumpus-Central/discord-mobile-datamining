// discord_app/modules/premium/ReverseTrialUtils.native.tsx
import initialize from "../../../discord_common/js/packages/flux/index.tsx";
import UserStore from "../../stores/UserStore.tsx";

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
export function maybeShowReverseTrialInitialUpsellModal() {}
export function maybeShowReverseTrialFollowupUpsellModal() {}
