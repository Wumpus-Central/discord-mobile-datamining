// === Module 13316: usePremiumGroupMembers ===

// Module 13316 (usePremiumGroupMembers)
import _mod19 from "module_19" /* 19 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import PremiumGroupStore from "PremiumGroupStore" /* 13313 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const useEffect = _mod19.useEffect;
const result = size.fileFinishedImporting("modules/premium/premium_group/hooks/usePremiumGroupMembers.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  _require = arg0;
  const cResult = require("c").c(12);
  if (cResult[0] !== arg1) {
    let obj2 = arg1;
    if (undefined === arg1) {
      obj2 = {};
    }
    cResult[0] = arg1;
    cResult[1] = obj2;
    let tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  ({ useCachedData, fetch: _fetch } = tmp4);
  importDefault = tmp5;
  dependencyMap = tmp6;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PremiumGroupStore];
    const fn = function b() {
      return { premiumGroupMembers: PremiumGroupStore.getMembers(), isFetchingMembers: PremiumGroupStore.isFetchingMembers(), isUpdatingMembers: PremiumGroupStore.isUpdatingMembers() };
    };
    cResult[2] = items;
    cResult[3] = fn;
    let tmp8 = fn;
    let tmp7 = items;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  let obj = require("c");
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(tmp7, tmp8);
  ({ premiumGroupMembers, isFetchingMembers } = stateFromStoresObject);
  if (cResult[4] === (undefined === _fetch || _fetch)) {
    if (cResult[5] === arg0) {
      if (cResult[6] === tmp5) {
        let tmp12 = cResult[7];
        let tmp13 = cResult[8];
      }
      useEffect(tmp12, tmp13);
      if (!isFetchingMembers) {
        isFetchingMembers = tmp11;
      }
      if (cResult[9] === premiumGroupMembers) {
        if (cResult[10] === isFetchingMembers) {
          let tmp16 = cResult[11];
        }
        return tmp16;
      }
      const obj3 = { premiumGroupMembers, isLoading: isFetchingMembers };
      cResult[9] = premiumGroupMembers;
      cResult[10] = isFetchingMembers;
      cResult[11] = obj3;
      tmp16 = obj3;
    }
  }
  class U {
    constructor() {
      if (fetch) {
        hasFetchedMembersResult = useCachedData;
        if (useCachedData) {
          tmp2 = closure_4;
          hasFetchedMembersResult = closure_4.hasFetchedMembers();
        }
        if (!hasFetchedMembersResult) {
          tmp4 = null;
          if (null != closure_0) {
            tmp5 = closure_1;
            tmp6 = closure_2;
            obj = closure_1(closure_2[5]);
            obj1 = { type: "PREMIUM_GROUP_MEMBERS_REQUEST", subscriptionId: null };
            obj1.subscriptionId = tmp3;
            dispatchResult = obj.dispatch(obj1);
          }
        }
      }
      return;
    }
  }
  const items1 = [undefined === _fetch || _fetch, arg0, undefined !== useCachedData && useCachedData];
  cResult[4] = undefined === _fetch || _fetch;
  cResult[5] = arg0;
  cResult[6] = undefined !== useCachedData && useCachedData;
  cResult[7] = U;
  cResult[8] = items1;
  tmp13 = items1;
  tmp12 = U;
  const tmpResult = require("initialize");
}) : ((arg0) => {
  _require = arg0;
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
  const items1 = [flag2, arg0, flag];
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
});