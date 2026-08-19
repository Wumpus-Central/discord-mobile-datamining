// === Module 12880: MAX_REFERRALS_SENT ===

// Module 12880 (MAX_REFERRALS_SENT)
import noop from "noop" /* 19 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;
import emitChanges from "emitChanges" /* 7423 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/premium/referral_program/hooks/useReferralProgramBannerDetails.tsx");

export const MAX_REFERRALS_SENT = 3;
export const useReferralProgramBannerDetails = function useReferralProgramBannerDetails() {
  let obj = stateFromStoresArray(589);
  const items = [closure_4];
  stateFromStoresArray = obj.useStateFromStoresArray(items, () => authStore.getSentUserIds());
  const items1 = [closure_3];
  const items2 = [stateFromStoresArray];
  const stateFromStoresArray1 = stateFromStoresArray(589).useStateFromStoresArray(items1, () => {
    const mapped = stateFromStoresArray.map((item, index) => user.getUser(item));
    return mapped.filter((item, index) => null != item);
  });
  const effect = React.useEffect(() => {
    const item = stateFromStoresArray.forEach((item, index) => {
      const user = callback(table[4]).getUser(item);
    });
  }, items2);
  obj = { referralSentUsers: stateFromStoresArray1, hasSentAllReferrals: 3 === stateFromStoresArray.length, refreshAt: null };
  const obj2 = stateFromStoresArray(589);
  const items3 = [closure_4];
  obj[2] = stateFromStoresArray(589).useStateFromStores(items3, () => authStore.getRefreshAt());
  return obj;
};