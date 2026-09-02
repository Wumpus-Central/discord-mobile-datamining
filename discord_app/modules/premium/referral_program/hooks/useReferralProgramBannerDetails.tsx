// discord_app/modules/premium/referral_program/hooks/useReferralProgramBannerDetails.tsx
import closure_2 from "../../../../../_runtime/00019_noop.js";
import closure_3 from "../../../../stores/UserStore.tsx";
import closure_4 from "../../ReferralTrialStore.tsx";

const require = arg1;
const result = require("set").fileFinishedImporting(
  "modules/premium/referral_program/hooks/useReferralProgramBannerDetails.tsx",
);

export const MAX_REFERRALS_SENT = 3;
export const useReferralProgramBannerDetails = function useReferralProgramBannerDetails() {
  let obj = stateFromStoresArray(586);
  const items = [closure_4];
  stateFromStoresArray = obj.useStateFromStoresArray(items, () => authStore.getSentUserIds());
  const items1 = [closure_3];
  const items2 = [stateFromStoresArray];
  const stateFromStoresArray1 = stateFromStoresArray(586).useStateFromStoresArray(items1, () => {
    const mapped = stateFromStoresArray.map((arg0) => user.getUser(arg0));
    return mapped.filter((arg0) => null != arg0);
  });
  const effect = React.useEffect(() => {
    const item = stateFromStoresArray.forEach((arg0) => {
      const user = callback(table[4]).getUser(arg0);
    });
  }, items2);
  obj = {
    referralSentUsers: stateFromStoresArray1,
    hasSentAllReferrals: 3 === stateFromStoresArray.length,
    refreshAt: null,
  };
  const obj2 = stateFromStoresArray(586);
  const items3 = [closure_4];
  obj[2] = stateFromStoresArray(586).useStateFromStores(items3, () => authStore.getRefreshAt());
  return obj;
};
