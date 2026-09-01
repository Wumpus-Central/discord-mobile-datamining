// === Module 13149: usePremiumGroupMembers ===

// Module 13149 (usePremiumGroupMembers)
import set from "set" /* 2 */;
import noop from "noop" /* 19 */;
import closure_4 from "handleMutationStart" /* 13146 */;

const useEffect = noop.useEffect;
const result = set.fileFinishedImporting("modules/premium/premium_group/hooks/usePremiumGroupMembers.tsx");

export default function usePremiumGroupMembers(arg0) {
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
  const items = [closure_4];
  const stateFromStoresObject = _require(flag2[2]).useStateFromStoresObject(items, () => ({ premiumGroupMembers: closure_4.getMembers(), isFetchingMembers: closure_4.isFetchingMembers(), isUpdatingMembers: closure_4.isUpdatingMembers() }));
  let isFetchingMembers = stateFromStoresObject.isFetchingMembers;
  const items1 = [flag2, arg0, flag];
  ({ premiumGroupMembers, isUpdatingMembers } = stateFromStoresObject);
  useEffect(() => {
    if (flag2) {
      let hasFetchedMembersResult = flag;
      if (flag) {
        hasFetchedMembersResult = closure_1_4.hasFetchedMembers();
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