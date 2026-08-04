// discord_app/modules/premium/premium_group/hooks/usePremiumGroupMembership.tsx
import { useEffect } from "noop";
import handleMutationStart from "handleMutationStart";

const result = require("initialize").fileFinishedImporting("modules/premium/premium_group/hooks/usePremiumGroupMembership.tsx");

export default function usePremiumGroupMembership() {
  let isFetchingMembership;
  let premiumGroupMembership;
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
  const items = [handleMutationStart];
  const stateFromStoresObject = flag(589).useStateFromStoresObject(items, () => ({ premiumGroupMembership: handleMutationStart.getMembership(), isFetchingMembership: handleMutationStart.isFetchingMembership() }));
  const items1 = [flag2, flag];
  ({ premiumGroupMembership, isFetchingMembership } = stateFromStoresObject);
  useEffect(() => {
    if (flag2) {
      let hasFetchedMembershipResult = flag;
      if (flag) {
        hasFetchedMembershipResult = outer1_4.hasFetchedMembership();
      }
      if (!hasFetchedMembershipResult) {
        flag2(outer1_2[3]).dispatch({ type: "PREMIUM_GROUP_MEMBERSHIP_REQUEST" });
        const obj = flag2(outer1_2[3]);
      }
    }
  }, items1);
  return { premiumGroupMembership, isLoading };
};