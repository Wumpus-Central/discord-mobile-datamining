import { useEffect } from "noop";
import handleMutationStart from "handleMutationStart";

const result = require("initialize").fileFinishedImporting("modules/premium/premium_group/hooks/usePremiumGroupMembers.tsx");

export default function usePremiumGroupMembers(arg0) {
  let isUpdatingMembers;
  let premiumGroupMembers;
  const _require = arg0;
  let obj = arg1;
  if (arg1 === undefined) {
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
  const stateFromStoresObject = _require(flag2[2]).useStateFromStoresObject(items, () => ({ premiumGroupMembers: handleMutationStart.getMembers(), isFetchingMembers: handleMutationStart.isFetchingMembers(), isUpdatingMembers: handleMutationStart.isUpdatingMembers() }));
  let isFetchingMembers = stateFromStoresObject.isFetchingMembers;
  const items1 = [flag2, arg0, flag];
  ({ premiumGroupMembers, isUpdatingMembers } = stateFromStoresObject);
  useEffect(() => {
    if (flag2) {
      let hasFetchedMembersResult = flag;
      if (flag) {
        hasFetchedMembersResult = outer1_4.hasFetchedMembers();
      }
      if (!hasFetchedMembersResult) {
        if (null != closure_0) {
          let obj = flag(flag2[3]);
          obj = { type: "PREMIUM_GROUP_MEMBERS_REQUEST", subscriptionId: null };
          obj[1] = tmp3;
          obj.dispatch(obj);
        }
      }
    }
  }, items1);
  obj = { premiumGroupMembers, isLoading: null };
  if (!isFetchingMembers) {
    isFetchingMembers = isUpdatingMembers;
  }
  obj[1] = isFetchingMembers;
  return obj;
};