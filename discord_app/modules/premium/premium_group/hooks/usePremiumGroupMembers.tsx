// discord_app/modules/premium/premium_group/hooks/usePremiumGroupMembers.tsx
import react from "../../../../../_runtime/00019_react.js";
import DispatcherDefault from "../../../../Dispatcher.tsx";
import PremiumGroupStore from "../PremiumGroupStore.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, dependencyMap, importDefault;

const useEffect = react.useEffect;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1) => {
      let _fetch;
      let closure_0;
      let closure_1;
      let closure_2;
      let isFetchingMembers;
      let premiumGroupMembers;
      let tmp4;
      let tmp7;
      let tmp8;
      let useCachedData;
      _require = arg0;
      let obj = require("react");
      const cResult = obj.c(12);
      const tmp = _require;
      if (cResult[0] !== arg1) {
        let obj2 = arg1;
        if (undefined === arg1) {
          obj2 = {};
        }
        cResult[0] = arg1;
        cResult[1] = obj2;
        tmp4 = obj2;
      } else {
        tmp4 = cResult[1];
      }
      ({ useCachedData, fetch: _fetch } = tmp4);
      importDefault = tmp5;
      dependencyMap = tmp6;
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [PremiumGroupStore];
        const fn = function b() {
          const obj = {
            premiumGroupMembers: PremiumGroupStore.getMembers(),
            isFetchingMembers: PremiumGroupStore.isFetchingMembers(),
            isUpdatingMembers: PremiumGroupStore.isUpdatingMembers(),
          };
          return obj;
        };
        cResult[2] = items;
        cResult[3] = fn;
        tmp8 = fn;
        tmp7 = items;
      } else {
        tmp7 = cResult[2];
        tmp8 = cResult[3];
      }
      const tmpResult = tmp(504);
      const stateFromStoresObject = tmpResult.useStateFromStoresObject(tmp7, tmp8);
      ({ premiumGroupMembers, isFetchingMembers } = stateFromStoresObject);
      if (cResult[4] === (undefined === _fetch || _fetch)) {
        if (cResult[5] === arg0) {
          let tmp12;
          let tmp13;
          if (cResult[6] === (undefined !== useCachedData && useCachedData)) {
            tmp12 = cResult[7];
            tmp13 = cResult[8];
          }
          useEffect(tmp12, tmp13);
          if (!isFetchingMembers) {
            isFetchingMembers = tmp11;
          }
          if (cResult[9] === premiumGroupMembers) {
            let tmp16;
            if (cResult[10] === isFetchingMembers) {
              tmp16 = cResult[11];
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
          if (closure_2) {
            const hasFetchedMembersResult = closure_1 && PremiumGroupStore.hasFetchedMembers();
            if (!hasFetchedMembersResult) {
              if (null != closure_0) {
                const obj2 = { type: "PREMIUM_GROUP_MEMBERS_REQUEST", subscriptionId: tmp4 };
                const obj = DispatcherDefault;
                obj.dispatch(obj2);
              }
            }
          }
        }
      }
      const items1 = [undefined === _fetch || _fetch, arg0, tmp5];
      cResult[4] = undefined === _fetch || _fetch;
      cResult[5] = arg0;
      cResult[6] = undefined !== useCachedData && useCachedData;
      cResult[7] = U;
      cResult[8] = items1;
      tmp13 = items1;
      tmp12 = U;
    }
  : (arg0) => {
      let closure_0;
      let isUpdatingMembers;
      let premiumGroupMembers;
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
      let obj2 = require("get initialized");
      const items = [PremiumGroupStore];
      const stateFromStoresObject = obj2.useStateFromStoresObject(items, () => {
        const obj = {
          premiumGroupMembers: PremiumGroupStore.getMembers(),
          isFetchingMembers: PremiumGroupStore.isFetchingMembers(),
          isUpdatingMembers: PremiumGroupStore.isUpdatingMembers(),
        };
        return obj;
      });
      let isFetchingMembers = stateFromStoresObject.isFetchingMembers;
      const items1 = [flag2, arg0, flag];
      ({ premiumGroupMembers, isUpdatingMembers } = stateFromStoresObject);
      useEffect(() => {
        if (flag2) {
          const hasFetchedMembersResult = flag && PremiumGroupStore.hasFetchedMembers();
          if (!hasFetchedMembersResult) {
            if (null != closure_0) {
              const obj2 = { type: "PREMIUM_GROUP_MEMBERS_REQUEST", subscriptionId: tmp4 };
              const obj = DispatcherDefault;
              obj.dispatch(obj2);
            }
          }
        }
      }, items1);
      const obj3 = { premiumGroupMembers, isLoading: isFetchingMembers };
      if (!isFetchingMembers) {
        isFetchingMembers = isUpdatingMembers;
      }
      return obj3;
    };
const result = size.fileFinishedImporting("modules/premium/premium_group/hooks/usePremiumGroupMembers.tsx");

export default tmp2;
