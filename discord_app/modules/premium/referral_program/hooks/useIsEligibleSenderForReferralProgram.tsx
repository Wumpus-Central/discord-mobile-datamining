// discord_app/modules/premium/referral_program/hooks/useIsEligibleSenderForReferralProgram.tsx
import emitChanges from "emitChanges";
import { initialize } from "../../../../../discord_common/js/packages/flux/index.tsx";
import { useMaybeFetchReferralsRemaining } from "useMaybeFetchReferralsRemaining.tsx";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/premium/referral_program/hooks/useIsEligibleSenderForReferralProgram.tsx");

export const useIsEligibleSenderForReferralProgram = function useIsEligibleSenderForReferralProgram(result) {
  let flag = result;
  if (result === undefined) {
    flag = false;
  }
  const maybeFetchReferralsRemaining = useMaybeFetchReferralsRemaining /* useMaybeFetchReferralsRemaining */.useMaybeFetchReferralsRemaining(flag);
  const obj = useMaybeFetchReferralsRemaining /* useMaybeFetchReferralsRemaining */;
  const items = [emitChanges];
  return initialize /* initialize */.useStateFromStores(items, () => isEligibleToSendReferrals.getIsEligibleToSendReferrals());
};