// discord_app/modules/premium/referral_program/hooks/useIsEligibleSenderForReferralProgram.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import useMaybeFetchReferralsRemaining from "useMaybeFetchReferralsRemaining.tsx";
import closure_2 from "../../ReferralTrialStore.tsx";

require = arg1;
const result = require("set").fileFinishedImporting(
  "modules/premium/referral_program/hooks/useIsEligibleSenderForReferralProgram.tsx",
);

export const useIsEligibleSenderForReferralProgram = function useIsEligibleSenderForReferralProgram(result) {
  let flag = result;
  if (result === undefined) {
    flag = false;
  }
  const maybeFetchReferralsRemaining = useMaybeFetchReferralsRemaining.useMaybeFetchReferralsRemaining(flag);
  const obj = useMaybeFetchReferralsRemaining;
  const items = [closure_2];
  return initialize.useStateFromStores(items, () => isEligibleToSendReferrals.getIsEligibleToSendReferrals());
};
