// discord_app/modules/premium/ReverseTrialUtils.native.tsx
import initialize from "../../../discord_common/js/packages/flux/index.tsx";
import closure_2 from "../../stores/UserStore.tsx";

require = arg1;
const result = require("set").fileFinishedImporting("modules/premium/ReverseTrialUtils.native.tsx");

export const useIsInReverseTrial = function useIsInReverseTrial() {
  const items = [closure_2];
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
