// === Module 13704: useReferralProgramBannerDetails ===

// Module 13704 (useReferralProgramBannerDetails)
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1372 */;
import ReferralTrialStore from "ReferralTrialStore" /* 7694 */;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/referral_program/hooks/useReferralProgramBannerDetails.tsx");

export const MAX_REFERRALS_SENT = 3;
export const useReferralProgramBannerDetails = function useReferralProgramBannerDetails() {
  const items = [ReferralTrialStore];
  stateFromStoresArray = stateFromStoresArray(504).useStateFromStoresArray(items, () => authStore.getSentUserIds());
  const obj = stateFromStoresArray(504);
  const items1 = [UserStore];
  const items2 = [stateFromStoresArray];
  const stateFromStoresArray1 = stateFromStoresArray(504).useStateFromStoresArray(items1, () => {
    const mapped = stateFromStoresArray.map((item) => user.getUser(item));
    return mapped.filter((item) => null != item);
  });
  const effect = noop.useEffect(() => {
    const item = stateFromStoresArray.forEach((item) => {
      const user = stateFromStoresArray(closure_1_1[4]).getUser(item);
    });
  }, items2);
  const obj3 = { referralSentUsers: stateFromStoresArray1, hasSentAllReferrals: 3 === stateFromStoresArray.length, refreshAt: null };
  const obj2 = stateFromStoresArray(504);
  const items3 = [ReferralTrialStore];
  obj3.refreshAt = stateFromStoresArray(504).useStateFromStores(items3, () => authStore.getRefreshAt());
  return obj3;
};