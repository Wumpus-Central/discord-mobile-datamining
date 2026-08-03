import _slicedToArray from "_slicedToArray";
import isIterable from "isIterable";
import identity from "identity";

const require = arg1;
function usePriceTiers(guildId) {
  const _require = guildId;
  let tmp = callback(withEqualityFn((arg0) => {
    const items = [, , ];
    ({ priceTiers: arr[0], priceTierState: arr[1], loadPriceTiers: arr[2] } = arg0);
    return items;
  }, _require(3806).shallow), 3);
  const first = tmp[0];
  const importAll = tmp3;
  const dependencyMap = tmp[2];
  first(4620)(() => {
    let tmp2 = null == first;
    if (tmp2) {
      tmp2 = closure_2 !== outer1_6.LOADING;
    }
    if (tmp2) {
      callback(closure_0);
    }
  });
  return {
    tiers: first,
    state: tmp[1],
    onRefresh(arg0) {
      let tmp = null == first;
      if (tmp) {
        tmp = closure_2 !== outer1_6.LOADING;
      }
      if (tmp) {
        callback(arg0);
      }
    },
    guildId
  };
}
let obj = { IDLE: 0, [0]: "IDLE", LOADING: 1, [1]: "LOADING", ERROR: 2, [2]: "ERROR" };
let closure_7 = Object.freeze({ currentScene: null, groupCover: null, groupDescription: "", groupIsFullGate: false });
const withEqualityFn = identity.createWithEqualityFn((arg0) => {
  let closure_0 = arg0;
  let obj = {};
  const merged = Object.assign(closure_7);
  obj.setScene = function setScene(arg0) {
    const callback = arg0;
    callback(outer1_3[2]).batchUpdates(() => callback({ currentScene: callback }));
  };
  closure_0 = arg0;
  let groupIsFullGate = "groupCover";
  obj.setGroupCover = (arg0) => {
    const callback = arg0;
    callback(outer1_3[2]).batchUpdates(() => callback({ [outer1_1]: callback }));
  };
  closure_0 = arg0;
  groupIsFullGate = "groupDescription";
  obj.setGroupDescription = (arg0) => {
    const callback = arg0;
    callback(outer1_3[2]).batchUpdates(() => callback({ [outer1_1]: callback }));
  };
  closure_0 = arg0;
  groupIsFullGate = "groupIsFullGate";
  obj.setGroupIsFullGate = (arg0) => {
    const callback = arg0;
    callback(outer1_3[2]).batchUpdates(() => callback({ [outer1_1]: callback }));
  };
  obj.priceTiers = null;
  obj.priceTierState = obj.IDLE;
  obj.loadPriceTiers = function loadPriceTiers(arg0) {
    let closure_0 = arg0;
    return outer1_5(function*() {
      if (c4 === 2) {
        c4 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let closure_1 = tmp3;
              let callback = tmp7;
              callback = undefined;
              let c2 = 1;
              callback(outer2_3[2]).batchUpdates(() => callback({ priceTierState: outer1_6.LOADING }));
              const obj4 = callback(outer2_3[2]);
              c3 = 2;
              c4 = 1;
              const obj1 = { value: null, done: false };
              obj1[0] = outer2_2(outer2_3[4]).getPriceTiers(outer1_0);
              return obj1;
            }
          } else {
            if (1 === tmp7) {
              c2 = 0;
              let obj2 = callback(outer2_3[2]);
              obj2.batchUpdates(() => callback({ priceTierState: outer1_6.ERROR }));
              c4 = 3;
            } else if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              callback = arg1;
              obj = callback(outer2_3[2]);
              obj.batchUpdates(() => callback({ priceTiers: callback, priceTierState: outer2_6.IDLE }));
              c2 = 0;
            }
            c2 = 0;
            c4 = 3;
            obj2 = { value: null, done: true };
            obj2[0] = arg1;
            return obj2;
          }
        } catch (tmp24) {
          if (tmp4 === c2) {
            c4 = tmp2;
            throw tmp24;
          } else {
            c3 = tmp;
          }
        }
      }
    })();
  };
  obj.reset = function reset() {
    callback(outer1_3[2]).batchUpdates(() => callback(outer1_7));
  };
  return obj;
});
const result = require("batchUpdates").fileFinishedImporting("modules/guild_role_subscriptions/native/RoleTierEditStore.tsx");

export const LoadingState = obj;
export const useRoleTierEditStore = withEqualityFn;
export const resetImperatively = function resetImperatively() {
  withEqualityFn.getState().reset();
};
export const useCurrentTierEditScene = function useCurrentTierEditScene() {
  const items = [, ];
  ({ currentScene: arr[0], setScene: arr[1] } = withEqualityFn());
  return items;
};
export const useResetTierEditState = function useResetTierEditState() {
  return withEqualityFn((reset) => reset.reset);
};
export { usePriceTiers };
export const usePriceTiersAvailableInGuild = function usePriceTiersAvailableInGuild(guildId) {
  let onRefresh;
  let state;
  const tmp = usePriceTiers(guildId);
  let tiers = tmp.tiers;
  ({ state, onRefresh } = tmp);
  const subscriptionListingsForGuild = set(14248).useSubscriptionListingsForGuild(guildId);
  set = new Set();
  for (const item10022 of subscriptionListingsForGuild) {
    let addResult = set.add(item10022.subscription_plans[0].price);
    continue;
  }
  tiers = undefined;
  if (tiers != null) {
    tiers = tiers.filter((arg0) => !set.has(arg0));
  }
  return { tiers, state, onRefresh };
};
export const useGroupCoverState = function useGroupCoverState() {
  return withEqualityFn((arg0) => {
    const items = [, ];
    ({ groupCover: arr[0], setGroupCover: arr[1] } = arg0);
    return items;
  }, require(3806) /* isIterable */.shallow);
};
export const useGroupDescriptionState = function useGroupDescriptionState() {
  return withEqualityFn((arg0) => {
    const items = [, ];
    ({ groupDescription: arr[0], setGroupDescription: arr[1] } = arg0);
    return items;
  }, require(3806) /* isIterable */.shallow);
};
export const useGroupIsFullGateState = function useGroupIsFullGateState() {
  return withEqualityFn((arg0) => {
    const items = [, ];
    ({ groupIsFullGate: arr[0], setGroupIsFullGate: arr[1] } = arg0);
    return items;
  }, require(3806) /* isIterable */.shallow);
};