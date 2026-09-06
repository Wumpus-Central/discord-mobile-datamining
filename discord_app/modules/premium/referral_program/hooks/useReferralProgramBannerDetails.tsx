// discord_app/modules/premium/referral_program/hooks/useReferralProgramBannerDetails.tsx
import noop from "../../../../../_runtime/metro/00019__.js";
import UserStore from "../../../../stores/UserStore.tsx";
import ReferralTrialStore from "../../ReferralTrialStore.tsx";

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/referral_program/hooks/useReferralProgramBannerDetails.tsx");

export const MAX_REFERRALS_SENT = 3;
export const useReferralProgramBannerDetails = function useReferralProgramBannerDetails() {
  let obj = stateFromStoresArray(504);
  const items = [ReferralTrialStore];
  stateFromStoresArray = obj.useStateFromStoresArray(items, () => authStore.getSentUserIds());
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
  obj = {
    referralSentUsers: stateFromStoresArray1,
    hasSentAllReferrals: 3 === stateFromStoresArray.length,
    refreshAt: null,
  };
  const obj2 = stateFromStoresArray(504);
  const items3 = [ReferralTrialStore];
  obj.refreshAt = stateFromStoresArray(504).useStateFromStores(items3, () => authStore.getRefreshAt());
  return obj;
};
