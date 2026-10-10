// === Module 13755: usePremiumGroupMembership ===

// Module 13755 (usePremiumGroupMembership)
import _mod19 from "module_19" /* 19 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import PremiumGroupStore from "PremiumGroupStore" /* 13756 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const useEffect = _mod19.useEffect;
const result = size.fileFinishedImporting("modules/premium/premium_group/hooks/usePremiumGroupMembership.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function usePremiumGroupMembership(arg0) {
  const cResult = require("c").c(11);
  if (cResult[0] !== arg0) {
    let obj2 = arg0;
    if (undefined === arg0) {
      obj2 = {};
    }
    cResult[0] = arg0;
    cResult[1] = obj2;
    let tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  ({ useCachedData, fetch: _fetch } = tmp4);
  _require = tmp5;
  closure_1 = tmp6;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PremiumGroupStore];
    class M {
      constructor() {
        obj = { premiumGroupMembership: closure_1_4.getMembership(), isFetchingMembership: closure_1_4.isFetchingMembership() };
        return obj;
      }
    }
    cResult[2] = items;
    cResult[3] = M;
    let tmp8 = M;
    let tmp7 = items;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  let obj = require("c");
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(tmp7, tmp8);
  ({ premiumGroupMembership, isFetchingMembership } = stateFromStoresObject);
  if (cResult[4] === (undefined === _fetch || _fetch)) {
    if (cResult[5] === tmp5) {
      let tmp11 = cResult[6];
      let tmp12 = cResult[7];
    }
    useEffect(tmp11, tmp12);
    class M {
      constructor() {
        obj = { premiumGroupMembership: closure_1_4.getMembership(), isFetchingMembership: closure_1_4.isFetchingMembership() };
        return obj;
      }
    }
    const obj3 = { premiumGroupMembership, isLoading: isFetchingMembership };
    cResult[8] = isFetchingMembership;
    cResult[9] = premiumGroupMembership;
    cResult[10] = obj3;
  }
  const fn = function f() {
    if (closure_1) {
      let hasFetchedMembershipResult = closure_0;
      if (closure_0) {
        hasFetchedMembershipResult = PremiumGroupStore.hasFetchedMembership();
      }
      if (!hasFetchedMembershipResult) {
        DispatcherDefault.dispatch({ type: "PREMIUM_GROUP_MEMBERSHIP_REQUEST" });
      }
    }
  };
  const items1 = [undefined === _fetch || _fetch, undefined !== useCachedData && useCachedData];
  cResult[4] = undefined === _fetch || _fetch;
  cResult[5] = undefined !== useCachedData && useCachedData;
  cResult[6] = fn;
  cResult[7] = items1;
  tmp12 = items1;
  tmp11 = fn;
  const tmpResult = require("initialize");
}) : (function usePremiumGroupMembership() {
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
  const stateFromStoresObject = flag(504).useStateFromStoresObject(items, () => ({ premiumGroupMembership: PremiumGroupStore.getMembership(), isFetchingMembership: PremiumGroupStore.isFetchingMembership() }));
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
});