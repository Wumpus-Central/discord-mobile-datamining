// === Module 13604: usePremiumGroupMembers ===

// Module 13604 (usePremiumGroupMembers)
import _mod19 from "module_19" /* 19 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import PremiumGroupStore from "PremiumGroupStore" /* 13601 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const useEffect = _mod19.useEffect;
const result = size.fileFinishedImporting("modules/premium/premium_group/hooks/usePremiumGroupMembers.tsx");

export default function usePremiumGroupMembers(subscriptionId, arg1) {
  _require = subscriptionId;
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
  const items = [PremiumGroupStore];
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(items, () => ({ premiumGroupMembers: PremiumGroupStore.getMembers(), isFetchingMembers: PremiumGroupStore.isFetchingMembers(), isUpdatingMembers: PremiumGroupStore.isUpdatingMembers() }));
  let isFetchingMembers = stateFromStoresObject.isFetchingMembers;
  const items1 = [flag2, subscriptionId, flag];
  ({ premiumGroupMembers, isUpdatingMembers } = stateFromStoresObject);
  useEffect(() => {
    if (flag2) {
      let hasFetchedMembersResult = flag;
      if (flag) {
        hasFetchedMembersResult = PremiumGroupStore.hasFetchedMembers();
      }
      if (!hasFetchedMembersResult) {
        if (null != closure_0) {
          const obj2 = { type: "PREMIUM_GROUP_MEMBERS_REQUEST", subscriptionId: tmp3 };
          DispatcherDefault.dispatch(obj2);
        }
      }
    }
  }, items1);
  const obj3 = { premiumGroupMembers, isLoading: null };
  if (!isFetchingMembers) {
    isFetchingMembers = isUpdatingMembers;
  }
  obj3.isLoading = isFetchingMembers;
  return obj3;
};