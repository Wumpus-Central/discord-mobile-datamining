// discord_app/modules/guild_role_subscriptions/native/RoleTierEditStore.tsx
import ReactBatchUpdates from "../../../../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx";
import _mod4184 from "../../../../_runtime/metro/04184__.js";
import GuildRoleSubscriptionsHooks from "../GuildRoleSubscriptionsHooks.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";

require = fn;
function usePriceTiers(guildId) {
  _require = guildId;
  let tmp = _slicedToArray(
    withEqualityFn((arg0) => {
      const items = [, ,];
      ({ priceTiers: arr[0], priceTierState: arr[1], loadPriceTiers: arr[2] } = arg0);
      return items;
    }, require("../../../../_runtime/metro/04184__.js").shallow),
    3,
  );
  const tiers = tmp[0];
  closure_2 = tmp3;
  dependencyMap = tmp[2];
  tiers(4992)(() => {
    let tmp2 = null == first;
    if (tmp2) {
      tmp2 = closure_2 !== obj.LOADING;
    }
    if (tmp2) {
      closure_3(closure_0);
    }
  });
  return {
    tiers,
    state: tmp[1],
    onRefresh(arg0) {
      let tmp = null == first;
      if (tmp) {
        tmp = closure_2 !== obj.LOADING;
      }
      if (tmp) {
        closure_3(arg0);
      }
    },
    guildId,
  };
}
const LoadingState = { IDLE: 0, [0]: "IDLE", LOADING: 1, [1]: "LOADING", ERROR: 2, [2]: "ERROR" };
let closure_7 = Object.freeze({ currentScene: null, groupCover: null, groupDescription: "", groupIsFullGate: false });
const identity = fn(1244);
const withEqualityFn = identity.createWithEqualityFn((arg0) => {
  closure_0 = arg0;
  const obj = {};
  const merged = Object.assign(closure_7);
  obj.setScene = function setScene(currentScene) {
    currentScene(1249).batchUpdates(() => currentScene({ currentScene }));
  };
  closure_129_0 = arg0;
  closure_129_1 = "groupCover";
  obj.setGroupCover = (arg0) => {
    closure_0 = arg0;
    closure_0(1249).batchUpdates(() => closure_0({ [closure_2_1]: closure_0 }));
  };
  closure_130_0 = arg0;
  closure_130_1 = "groupDescription";
  obj.setGroupDescription = (arg0) => {
    closure_0 = arg0;
    closure_0(1249).batchUpdates(() => closure_0({ [closure_2_1]: closure_0 }));
  };
  closure_131_0 = arg0;
  closure_131_1 = "groupIsFullGate";
  obj.setGroupIsFullGate = (arg0) => {
    closure_0 = arg0;
    closure_0(1249).batchUpdates(() => closure_0({ [closure_2_1]: closure_0 }));
  };
  obj.priceTiers = null;
  obj.priceTierState = obj.IDLE;
  obj.loadPriceTiers = function loadPriceTiers(arg0) {
    closure_0 = arg0;
    return (async () => {
      closure_1 = tmp3;
      priceTiers(1249).batchUpdates(() => priceTiers({ priceTierState: constants.LOADING }));
      await closure_2_2(7256).getPriceTiers(priceTiers);
      if (1 === tmp7) {
        c2 = 0;
        priceTiers(1249).batchUpdates(() => priceTiers({ priceTierState: constants.ERROR }));
        c4 = 3;
        priceTiers(1249);
      } else if (arg0 === 1) {
        c4 = 3;
        throw arg1;
      } else if (arg0 !== 2) {
        closure_128_0 = arg1;
        priceTiers(1249).batchUpdates(() => priceTiers({ priceTiers, priceTierState: constants.IDLE }));
        c2 = 0;
        priceTiers(1249);
      }
      return arg1;
    })();
  };
  obj.reset = function reset() {
    ReactBatchUpdates.batchUpdates(() => closure_1_0(closure_2_7));
  };
  return obj;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/RoleTierEditStore.tsx");

export { LoadingState };
export const useRoleTierEditStore = withEqualityFn;
export const resetImperatively = function resetImperatively() {
  withEqualityFn.getState().reset();
};
export const useCurrentTierEditScene = function useCurrentTierEditScene() {
  const items = [,];
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
  const subscriptionListingsForGuild = GuildRoleSubscriptionsHooks.useSubscriptionListingsForGuild(guildId);
  const set = new Set();
  for (const item10022 of subscriptionListingsForGuild) {
    let addResult = set.add(item10022.subscription_plans[0].price);
    continue;
  }
  tiers = undefined;
  if (tiers != null) {
    tiers = tiers.filter((item) => !set.has(item));
  }
  return { tiers, state, onRefresh };
};
export const useGroupCoverState = function useGroupCoverState() {
  return withEqualityFn((arg0) => {
    const items = [,];
    ({ groupCover: arr[0], setGroupCover: arr[1] } = arg0);
    return items;
  }, _mod4184.shallow);
};
export const useGroupDescriptionState = function useGroupDescriptionState() {
  return withEqualityFn((arg0) => {
    const items = [,];
    ({ groupDescription: arr[0], setGroupDescription: arr[1] } = arg0);
    return items;
  }, _mod4184.shallow);
};
export const useGroupIsFullGateState = function useGroupIsFullGateState() {
  return withEqualityFn((arg0) => {
    const items = [,];
    ({ groupIsFullGate: arr[0], setGroupIsFullGate: arr[1] } = arg0);
    return items;
  }, _mod4184.shallow);
};
