// discord_app/modules/premium/referral_program/hooks/useReferralProgramBannerDetails.tsx
import noop from "noop";
import mergeGuildAvatar from "mergeGuildAvatar";
import emitChanges from "emitChanges";

const require = arg1;
const result = require("emitChanges").fileFinishedImporting("modules/premium/referral_program/hooks/useReferralProgramBannerDetails.tsx");

export const MAX_REFERRALS_SENT = 3;
export const useReferralProgramBannerDetails = function useReferralProgramBannerDetails() {
  let obj = stateFromStoresArray(589);
  const items = [emitChanges];
  stateFromStoresArray = obj.useStateFromStoresArray(items, () => authStore.getSentUserIds());
  const items1 = [mergeGuildAvatar];
  const items2 = [stateFromStoresArray];
  const stateFromStoresArray1 = stateFromStoresArray(589).useStateFromStoresArray(items1, () => {
    const mapped = stateFromStoresArray.map((arg0) => user.getUser(arg0));
    return mapped.filter((arg0) => null != arg0);
  });
  const effect = React.useEffect(() => {
    const item = stateFromStoresArray.forEach((arg0) => {
      const user = callback(table[4]).getUser(arg0);
    });
  }, items2);
  obj = { referralSentUsers: stateFromStoresArray1, hasSentAllReferrals: 3 === stateFromStoresArray.length, refreshAt: null };
  const obj2 = stateFromStoresArray(589);
  const items3 = [emitChanges];
  obj[2] = stateFromStoresArray(589).useStateFromStores(items3, () => authStore.getRefreshAt());
  return obj;
};