// === Module 17043: usePriceTiers ===

// Module 17043 (usePriceTiers)
import isIterable from "isIterable" /* 4009 */;
import closure_4 from "_slicedToArray" /* 32 */;
import closure_5 from "asyncGeneratorStep" /* 5 */;
import identity from "identity" /* 700 */;

require = arg1;
function usePriceTiers(guildId) {
  const _require = guildId;
  let tmp = callback(withEqualityFn((arg0) => {
    const items = [, , ];
    ({ priceTiers: arr[0], priceTierState: arr[1], loadPriceTiers: arr[2] } = arg0);
    return items;
  }, _require(4009).shallow), 3);
  const first = tmp[0];
  closure_2 = tmp3;
  dependencyMap = tmp[2];
  first(4766)(() => {
    let tmp2 = null == first;
    if (tmp2) {
      tmp2 = closure_2 !== closure_1_6.LOADING;
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
        tmp = closure_2 !== closure_1_6.LOADING;
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
  closure_0 = arg0;
  obj = {};
  const merged = Object.assign(closure_7);
  obj.setScene = function setScene(arg0) {
    const callback = arg0;
    callback(closure_1_3[2]).batchUpdates(() => callback({ currentScene: callback }));
  };
  closure_0 = arg0;
  let groupIsFullGate = "groupCover";
  obj.setGroupCover = (arg0) => {
    const callback = arg0;
    callback(closure_1_3[2]).batchUpdates(() => callback({ [closure_1_1]: callback }));
  };
  closure_0 = arg0;
  groupIsFullGate = "groupDescription";
  obj.setGroupDescription = (arg0) => {
    const callback = arg0;
    callback(closure_1_3[2]).batchUpdates(() => callback({ [closure_1_1]: callback }));
  };
  closure_0 = arg0;
  groupIsFullGate = "groupIsFullGate";
  obj.setGroupIsFullGate = (arg0) => {
    const callback = arg0;
    callback(closure_1_3[2]).batchUpdates(() => callback({ [closure_1_1]: callback }));
  };
  obj.priceTiers = null;
  obj.priceTierState = obj.IDLE;
  obj.loadPriceTiers = function loadPriceTiers(arg0) {
    closure_0 = arg0;
    return closure_1_5(function*() {
      closure_1 = tmp3;
      c2 = 1;
      callback(closure_2_3[2]).batchUpdates(() => callback({ priceTierState: closure_1_6.LOADING }));
      const obj4 = callback(closure_2_3[2]);
      yield closure_2_2(closure_2_3[4]).getPriceTiers(closure_1_0);
      if (1 === tmp7) {
        c2 = 0;
        const obj2 = callback(closure_2_3[2]);
        obj2.batchUpdates(() => callback({ priceTierState: closure_1_6.ERROR }));
        c4 = 3;
      } else if (arg0 === 1) {
        c4 = 3;
        throw arg1;
      } else if (arg0 !== 2) {
        callback = arg1;
        obj = callback(closure_2_3[2]);
        obj.batchUpdates(() => callback({ priceTiers: callback, priceTierState: closure_2_6.IDLE }));
        c2 = 0;
      }
      c2 = 0;
      return arg1;
    })();
  };
  obj.reset = function reset() {
    callback(closure_1_3[2]).batchUpdates(() => callback(closure_1_7));
  };
  return obj;
});
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/native/RoleTierEditStore.tsx");

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
  const tmp = usePriceTiers(guildId);
  let tiers = tmp.tiers;
  ({ state, onRefresh } = tmp);
  const subscriptionListingsForGuild = set(14626).useSubscriptionListingsForGuild(guildId);
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
  }, isIterable.shallow);
};
export const useGroupDescriptionState = function useGroupDescriptionState() {
  return withEqualityFn((arg0) => {
    const items = [, ];
    ({ groupDescription: arr[0], setGroupDescription: arr[1] } = arg0);
    return items;
  }, isIterable.shallow);
};
export const useGroupIsFullGateState = function useGroupIsFullGateState() {
  return withEqualityFn((arg0) => {
    const items = [, ];
    ({ groupIsFullGate: arr[0], setGroupIsFullGate: arr[1] } = arg0);
    return items;
  }, isIterable.shallow);
};