// discord_app/modules/premium/premium_group/hooks/usePremiumGroupMembership.tsx
import _mod19 from "../../../../../_runtime/metro/00019__.js";
import DispatcherDefault from "../../../../Dispatcher.tsx";
import PremiumGroupStore from "../PremiumGroupStore.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const useEffect = _mod19.useEffect;
const result = size.fileFinishedImporting("modules/premium/premium_group/hooks/usePremiumGroupMembership.tsx");

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
  const items = [PremiumGroupStore];
  const stateFromStoresObject = flag(504).useStateFromStoresObject(items, () => ({
    premiumGroupMembership: PremiumGroupStore.getMembership(),
    isFetchingMembership: PremiumGroupStore.isFetchingMembership(),
  }));
  const items1 = [flag2, flag];
  ({ premiumGroupMembership, isFetchingMembership } = stateFromStoresObject);
  useEffect(() => {
    if (flag2) {
      let hasFetchedMembershipResult = flag;
      if (flag) {
        hasFetchedMembershipResult = PremiumGroupStore.hasFetchedMembership();
      }
      if (!hasFetchedMembershipResult) {
        DispatcherDefault.dispatch({ type: "PREMIUM_GROUP_MEMBERSHIP_REQUEST" });
      }
    }
  }, items1);
  return { premiumGroupMembership, isLoading };
}
