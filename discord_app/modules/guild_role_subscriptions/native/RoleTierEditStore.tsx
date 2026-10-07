// discord_app/modules/guild_role_subscriptions/native/RoleTierEditStore.tsx
import c from "../../../../_runtime/00576_c.js";
import ReactBatchUpdates from "../../../../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx";
import _mod4498 from "../../../../_runtime/metro/04498__.js";
import GuildRoleSubscriptionsHooks from "../GuildRoleSubscriptionsHooks.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";

require = fn;
const LoadingState = { IDLE: 0, [0]: "IDLE", LOADING: 1, [1]: "LOADING", ERROR: 2, [2]: "ERROR" };
let closure_7 = Object.freeze({ currentScene: null, groupCover: null, groupDescription: "", groupIsFullGate: false });
const identity = fn(1254);
const withEqualityFn = identity.createWithEqualityFn((arg0) => {
  closure_0 = arg0;
  const obj = {};
  const merged = Object.assign(closure_7);
  obj.setScene = function setScene(currentScene) {
    currentScene(1259).batchUpdates(() => currentScene({ currentScene }));
  };
  closure_129_0 = arg0;
  closure_129_1 = "groupCover";
  obj.setGroupCover = (arg0) => {
    closure_0 = arg0;
    closure_0(1259).batchUpdates(() => closure_0({ [closure_2_1]: closure_0 }));
  };
  closure_130_0 = arg0;
  closure_130_1 = "groupDescription";
  obj.setGroupDescription = (arg0) => {
    closure_0 = arg0;
    closure_0(1259).batchUpdates(() => closure_0({ [closure_2_1]: closure_0 }));
  };
  closure_131_0 = arg0;
  closure_131_1 = "groupIsFullGate";
  obj.setGroupIsFullGate = (arg0) => {
    closure_0 = arg0;
    closure_0(1259).batchUpdates(() => closure_0({ [closure_2_1]: closure_0 }));
  };
  obj.priceTiers = null;
  obj.priceTierState = obj.IDLE;
  obj.loadPriceTiers = function loadPriceTiers(arg0) {
    closure_0 = arg0;
    return (async () => {
      closure_1 = tmp3;
      priceTiers(1259).batchUpdates(() => priceTiers({ priceTierState: constants.LOADING }));
      await closure_2_2(6769).getPriceTiers(priceTiers);
      if (1 === tmp7) {
        c2 = 0;
        priceTiers(1259).batchUpdates(() => priceTiers({ priceTierState: constants.ERROR }));
        c4 = 3;
        priceTiers(1259);
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 !== 2) {
        closure_128_0 = value;
        priceTiers(1259).batchUpdates(() => priceTiers({ priceTiers, priceTierState: constants.IDLE }));
        c2 = 0;
        priceTiers(1259);
      }
      return value;
    })();
  };
  obj.reset = function reset() {
    ReactBatchUpdates.batchUpdates(() => closure_1_0(closure_2_7));
  };
  return obj;
});
fn(558);
let ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(3);
      ({ currentScene, setScene } = withEqualityFn());
      if (cResult[0] === currentScene) {
        if (cResult[1] === setScene) {
          let tmp3 = cResult[2];
        }
        return tmp3;
      }
      const items = [currentScene, setScene];
      cResult[0] = currentScene;
      cResult[1] = setScene;
      cResult[2] = items;
      tmp3 = items;
    }
  : () => {
      const items = [,];
      ({ currentScene: arr[0], setScene: arr[1] } = withEqualityFn());
      return items;
    };
ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (guildId) => {
      _require = guildId;
      const cResult = require("c").c(13);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function o(arg0) {
          const items = [, ,];
          ({ priceTiers: arr[0], priceTierState: arr[1], loadPriceTiers: arr[2] } = arg0);
          return items;
        };
        cResult[0] = fn;
        let first = fn;
      } else {
        first = cResult[0];
      }
      const tmp5 = _slicedToArray(withEqualityFn(first, require("../../../../_runtime/metro/04498__.js").shallow), 3);
      const first1 = tmp5[0];
      closure_2 = tmp7;
      dependencyMap = tmp8;
      if (cResult[1] === tmp5[2]) {
        if (cResult[2] === tmp7) {
          if (cResult[3] === first1) {
            let tmp9 = cResult[4];
          }
          _slicedToArray = tmp9;
          if (cResult[5] === guildId) {
            if (cResult[6] === tmp9) {
              let tmp10 = cResult[7];
            }
            first1(5597)(tmp10);
            class G {
              constructor() {
                tmp = closure_4(closure_0);
                return;
              }
            }
            const obj2 = { tiers: first1, state: tmp7, onRefresh: tmp9, guildId };
            cResult[8] = guildId;
            cResult[9] = tmp9;
            cResult[10] = tmp7;
            cResult[11] = first1;
            cResult[12] = obj2;
          }
          class G {
            constructor() {
              tmp = closure_4(closure_0);
              return;
            }
          }
          cResult[5] = guildId;
          cResult[6] = tmp9;
          cResult[7] = G;
          tmp10 = G;
        }
      }
      const fn2 = function l(arg0) {
        let tmp = null == first1;
        if (tmp) {
          tmp = closure_2 !== obj.LOADING;
        }
        if (tmp) {
          closure_3(arg0);
        }
      };
      cResult[1] = tmp5[2];
      cResult[2] = tmp5[1];
      cResult[3] = first1;
      cResult[4] = fn2;
      tmp9 = fn2;
    }
  : (guildId) => {
      _require = guildId;
      let tmp = _slicedToArray(
        withEqualityFn((arg0) => {
          const items = [, ,];
          ({ priceTiers: arr[0], priceTierState: arr[1], loadPriceTiers: arr[2] } = arg0);
          return items;
        }, require("../../../../_runtime/metro/04498__.js").shallow),
        3,
      );
      const tiers = tmp[0];
      closure_2 = tmp3;
      dependencyMap = tmp[2];
      tiers(5597)(() => {
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
    };
let closure_9 = tmp5;
ReactCompilerGating = fn(558);
const tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function t(reset) {
          return reset.reset;
        };
        cResult[0] = fn;
        let first = fn;
      } else {
        first = cResult[0];
      }
      return withEqualityFn(first);
    }
  : () => withEqualityFn((reset) => reset.reset);
ReactCompilerGating = fn(558);
const tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(9);
      ({ tiers, state, onRefresh } = closure_9(arg0));
      const tmp2 = closure_9(arg0);
      const subscriptionListingsForGuild = GuildRoleSubscriptionsHooks.useSubscriptionListingsForGuild(arg0);
      if (cResult[0] !== subscriptionListingsForGuild) {
        const _Set = Set;
        let set = new Set();
        for (const item10029 of subscriptionListingsForGuild) {
          let addResult = set.add(item10029.subscription_plans[0].price);
          continue;
        }
        cResult[0] = subscriptionListingsForGuild;
        cResult[1] = set;
      } else {
        set = cResult[1];
      }
      if (cResult[2] === tiers) {
        if (cResult[3] === tmp4) {
          let tmp12 = cResult[4];
        }
        if (cResult[5] === onRefresh) {
          if (cResult[6] === state) {
            if (cResult[7] === tmp12) {
              let tmp14 = cResult[8];
            }
            return tmp14;
          }
        }
        const obj3 = { tiers: tmp12, state, onRefresh };
        cResult[5] = onRefresh;
        cResult[6] = state;
        cResult[7] = tmp12;
        cResult[8] = obj3;
        tmp14 = obj3;
      }
      let found;
      if (tiers != null) {
        found = tiers.filter((item) => !set.has(item));
      }
      cResult[2] = tiers;
      cResult[3] = tmp4;
      cResult[4] = found;
      tmp12 = found;
    }
  : (arg0) => {
      const tmp = closure_9(arg0);
      const tiers = tmp.tiers;
      ({ state, onRefresh } = tmp);
      const subscriptionListingsForGuild = GuildRoleSubscriptionsHooks.useSubscriptionListingsForGuild(arg0);
      const set = new Set();
      for (const item10022 of subscriptionListingsForGuild) {
        let addResult = set.add(item10022.subscription_plans[0].price);
        continue;
      }
      let tiers1;
      if (tiers != null) {
        tiers1 = tiers.filter((item) => !set.has(item));
      }
      return { tiers: tiers1, state, onRefresh };
    };
ReactCompilerGating = fn(558);
const tmp7 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function t(arg0) {
          const items = [,];
          ({ groupCover: arr[0], setGroupCover: arr[1] } = arg0);
          return items;
        };
        cResult[0] = fn;
        let first = fn;
      } else {
        first = cResult[0];
      }
      return withEqualityFn(first, _mod4498.shallow);
    }
  : () =>
      withEqualityFn((arg0) => {
        const items = [,];
        ({ groupCover: arr[0], setGroupCover: arr[1] } = arg0);
        return items;
      }, _mod4498.shallow);
ReactCompilerGating = fn(558);
const tmp8 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function t(arg0) {
          const items = [,];
          ({ groupDescription: arr[0], setGroupDescription: arr[1] } = arg0);
          return items;
        };
        cResult[0] = fn;
        let first = fn;
      } else {
        first = cResult[0];
      }
      return withEqualityFn(first, _mod4498.shallow);
    }
  : () =>
      withEqualityFn((arg0) => {
        const items = [,];
        ({ groupDescription: arr[0], setGroupDescription: arr[1] } = arg0);
        return items;
      }, _mod4498.shallow);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/RoleTierEditStore.tsx");

export { LoadingState };
export const useRoleTierEditStore = withEqualityFn;
export const resetImperatively = function resetImperatively() {
  withEqualityFn.getState().reset();
};
export const useCurrentTierEditScene = tmp3;
export const useResetTierEditState = tmp4;
export const usePriceTiers = tmp5;
export const usePriceTiersAvailableInGuild = tmp6;
export const useGroupCoverState = tmp7;
export const useGroupDescriptionState = tmp8;
export const useGroupIsFullGateState = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function t(arg0) {
          const items = [,];
          ({ groupIsFullGate: arr[0], setGroupIsFullGate: arr[1] } = arg0);
          return items;
        };
        cResult[0] = fn;
        let first = fn;
      } else {
        first = cResult[0];
      }
      return withEqualityFn(first, _mod4498.shallow);
    }
  : () =>
      withEqualityFn((arg0) => {
        const items = [,];
        ({ groupIsFullGate: arr[0], setGroupIsFullGate: arr[1] } = arg0);
        return items;
      }, _mod4498.shallow);
