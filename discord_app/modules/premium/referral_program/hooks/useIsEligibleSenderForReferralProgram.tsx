// discord_app/modules/premium/referral_program/hooks/useIsEligibleSenderForReferralProgram.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import useMaybeFetchReferralsRemaining from "useMaybeFetchReferralsRemaining.tsx";
import ReferralTrialStore from "../../ReferralTrialStore.tsx";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/premium/referral_program/hooks/useIsEligibleSenderForReferralProgram.tsx",
);

export const useIsEligibleSenderForReferralProgram = function useIsEligibleSenderForReferralProgram() {
  let flag = result;
  if (result === undefined) {
    flag = false;
  }
  const maybeFetchReferralsRemaining = useMaybeFetchReferralsRemaining.useMaybeFetchReferralsRemaining(flag);
  const items = [ReferralTrialStore];
  return initialize.useStateFromStores(items, () => isEligibleToSendReferrals.getIsEligibleToSendReferrals());
};
