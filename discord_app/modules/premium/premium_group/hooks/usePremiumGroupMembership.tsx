// === Module 12919: usePremiumGroupMembership ===

// Module 12919 (usePremiumGroupMembership)
import obj132 from "obj132" /* 2 */;
import noop from "noop" /* 19 */;
import handleMutationStart from "handleMutationStart" /* 12920 */;

const useEffect = noop.useEffect;
const result = obj132.fileFinishedImporting("modules/premium/premium_group/hooks/usePremiumGroupMembership.tsx");

export default function usePremiumGroupMembership() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let flag = obj.useCachedData;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = obj.fetch;
  if (flag2 === undefined) {
    flag2 = true;
  }
  const items = [closure_4];
  const stateFromStoresObject = flag(589).useStateFromStoresObject(items, () => ({ premiumGroupMembership: closure_4.getMembership(), isFetchingMembership: closure_4.isFetchingMembership() }));
  const items1 = [flag2, flag];
  ({ premiumGroupMembership, isFetchingMembership } = stateFromStoresObject);
  useEffect(() => {
    if (flag2) {
      let hasFetchedMembershipResult = flag;
      if (flag) {
        hasFetchedMembershipResult = closure_1_4.hasFetchedMembership();
      }
      if (!hasFetchedMembershipResult) {
        flag2(dependencyMap[3]).dispatch({ type: "PREMIUM_GROUP_MEMBERSHIP_REQUEST" });
        const obj = flag2(dependencyMap[3]);
      }
    }
  }, items1);
  return { premiumGroupMembership, isLoading };
};