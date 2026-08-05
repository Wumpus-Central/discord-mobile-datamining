// discord_app/modules/premium/referral_program/hooks/useIsEligibleSenderForReferralProgram.tsx
import emitChanges from "emitChanges";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/premium/referral_program/hooks/useIsEligibleSenderForReferralProgram.tsx");

export const useIsEligibleSenderForReferralProgram = function useIsEligibleSenderForReferralProgram(result) {
  let flag = result;
  if (result === undefined) {
    flag = false;
  }
  const maybeFetchReferralsRemaining = require("useMaybeFetchReferralsRemaining.tsx") /* useMaybeFetchReferralsRemaining */.useMaybeFetchReferralsRemaining(flag);
  const obj = require("useMaybeFetchReferralsRemaining.tsx") /* useMaybeFetchReferralsRemaining */;
  const items = [emitChanges];
  return require("../../../../../discord_common/js/packages/flux/index.tsx") /* initialize */.useStateFromStores(items, () => isEligibleToSendReferrals.getIsEligibleToSendReferrals());
};