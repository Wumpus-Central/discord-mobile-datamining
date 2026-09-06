// discord_app/modules/rewards/ProgramRewardsStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import DurationsDefault from "../../utils/Durations.tsx";
import _modDef3815 from "../../../_runtime/metro/03815__.js";
import ProgramRewardsUtils from "ProgramRewardsUtils.tsx";
import ProgramRewardsTypes from "ProgramRewardsTypes.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import UserStore from "../../stores/UserStore.tsx";

require = fn;
function updateTtl() {
  ({ state, msUntilReward } = (function getCacheTtlState() {
    value = value.getValue();
    if (null == value) {
      let obj = { state: closure_1_8.MORE_THAN_24H_BEFORE_REWARD };
      return obj;
    } else {
      const _Date2 = Date;
      const date = new Date();
      const values = value.values();
      const obj7 = values[Symbol.iterator]();
      while (obj7 !== undefined) {
        let _Date = Date;
        let tmp4 = new.target;
        let tmp5 = new.target;
        let date1 = new Date(tmp2.next_reward_date);
        let tmp7 = date1;
        let _isNaN = isNaN;
        if (!isNaN(date1.getTime())) {
          let tmp8 = importDefault;
          let tmp9 = dependencyMap;
          let tmp11 = _modDef3815(tmp7, 10);
          let tmp12 = tmp11;
          if (date >= tmp11) {
            obj = { state: null };
            obj.state = closure_1_8.PAST_REWARD_DATE;
            obj7.return();
            return obj;
          } else if (date >= tmp7) {
            let obj1 = { state: null, msUntilReward: null };
            obj1.state = closure_1_8.LESS_THAN_24H_BEFORE_REWARD;
            obj1.msUntilReward = tmp8(tmp9[4])(tmp12, date);
            obj7.return();
            return obj1;
          } else if (date >= tmp8(tmp9[5])(tmp7, -1)) {
            let obj2 = { state: null, msUntilReward: null };
            obj2.state = closure_1_8.LESS_THAN_24H_BEFORE_REWARD;
            obj2.msUntilReward = tmp8(tmp9[4])(tmp12, date);
            obj7.return();
            return obj2;
          }
        }
        continue;
      }
      const obj3 = { state: closure_1_8.MORE_THAN_24H_BEFORE_REWARD };
      return obj3;
    }
  })());
  if (closure_8.LESS_THAN_24H_BEFORE_REWARD === state) {
    if (msUntilReward == null) {
      msUntilReward = c6;
    }
    let tmp4 = msUntilReward;
  } else {
    if (tmp3.MORE_THAN_24H_BEFORE_REWARD !== state) {
      const PAST_REWARD_DATE = tmp3.PAST_REWARD_DATE;
    }
    tmp4 = c6;
  }
  networkTtlCache.setTtl(tmp4);
}
let DidNotFetchReason = {
  NOT_ELIGIBLE_FOR_ANY_PROGRAM_REWARD: "NOT_ELIGIBLE_FOR_ANY_PROGRAM_REWARD",
  CACHE_SHOULD_NOT_FETCH: "CACHE_SHOULD_NOT_FETCH",
};
let c6 = 86400000;
const networkTtlCache = new fn(13725).NetworkTtlCache({ ttlMs: 86400000 });
let closure_8 = {
  MORE_THAN_24H_BEFORE_REWARD: "MORE_THAN_24H_BEFORE_REWARD",
  LESS_THAN_24H_BEFORE_REWARD: "LESS_THAN_24H_BEFORE_REWARD",
  PAST_REWARD_DATE: "PAST_REWARD_DATE",
};
const PersistedStore = initializeDefault.PersistedStore;
class ProgramRewardsStore extends PersistedStore {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.__getLocalVars = function __getLocalVars() {
      const state = applyArgumentsResult.getState();
      let items;
      if (state.cache != null) {
        items = iter.value;
      }
      if (items == null) {
        items = [];
      }
      let obj = {};
      while (tmp2 !== undefined) {
        let tmp5 = _slicedToArray(tmp3, 2);
        [tmp6, tmp8] = tmp5;
        let tmp7 = tmp6;
        let StringResult = ProgramRewardsTypes.RewardProgram[tmp6];
        if (StringResult == null) {
          let _String = String;
          StringResult = String(tmp7);
        }
        obj[StringResult] = tmp8;
        continue;
      }
      obj = {
        status: applyArgumentsResult.getStatus(),
        isFetching: applyArgumentsResult.isFetching(),
        isFetched: applyArgumentsResult.isFetched(),
        hasCachedValue: applyArgumentsResult.hasCachedValue(),
        isError: applyArgumentsResult.isError(),
        isReady: applyArgumentsResult.isReady(),
        shouldFetch: applyArgumentsResult.shouldFetch(),
        fetchedAt: null,
        rewards: null,
      };
      const cache = state.cache;
      let fetchedAt;
      if (cache != null) {
        fetchedAt = cache.fetchedAt;
      }
      if (fetchedAt == null) {
        fetchedAt = null;
      }
      obj.fetchedAt = fetchedAt;
      let tmp15 = null;
      if (Object.keys(obj).length > 0) {
        tmp15 = obj;
      }
      obj.rewards = tmp15;
      return obj;
    };
    applyArgumentsResult.__getLocalVarsEditConfig = function __getLocalVarsEditConfig() {
      let obj = {
        preDispatches: null,
        actionType: "PROGRAM_REWARDS_FETCH_SUCCESS",
        buildPayload(rewards) {
          rewards = rewards.rewards;
          if (rewards == null) {
            rewards = null;
          }
          if (null != rewards) {
            const _Object = Object;
            if (0 !== Object.keys(rewards).length) {
              let obj = { programRewards: null };
              const _Object2 = Object;
              const entries = Object.entries(rewards);
              obj.programRewards = entries.map((item) => {
                [tmp, tmp2] = item;
                const obj = {};
                const merged = Object.assign(tmp2);
                let NumberResult = closure_1_0(closure_1_2[9]).RewardProgram[tmp];
                if (NumberResult == null) {
                  const _Number = Number;
                  NumberResult = Number(tmp);
                }
                obj.reward_program = NumberResult;
                return obj;
              });
            }
            return obj;
          }
          obj = { programRewards: [] };
        },
        getPurgeVars() {
          return { rewards: null };
        },
      };
      const items = [{ type: "PROGRAM_REWARDS_FETCH" }];
      obj.preDispatches = items;
      return obj;
    };
    return applyArgumentsResult;
  }
}
const prototype = ProgramRewardsStore.prototype;
prototype["initialize"] = function initialize(cache) {
  this.waitFor(UserStore);
  cache = undefined;
  if (cache != null) {
    cache = cache.cache;
  }
  if (null != cache) {
    const _Map = Map;
    const map = new Map(cache.cache.value);
    const obj = { value: map, fetchedAt: cache.cache.fetchedAt };
    networkTtlCache.restore(obj);
  }
  ({ state, msUntilReward } = (function getCacheTtlState() {
    value = value.getValue();
    if (null == value) {
      let obj = { state: closure_1_8.MORE_THAN_24H_BEFORE_REWARD };
      return obj;
    } else {
      const _Date2 = Date;
      const date = new Date();
      const values = value.values();
      const obj7 = values[Symbol.iterator]();
      while (obj7 !== undefined) {
        let _Date = Date;
        let tmp4 = new.target;
        let tmp5 = new.target;
        let date1 = new Date(tmp2.next_reward_date);
        let tmp7 = date1;
        let _isNaN = isNaN;
        if (!isNaN(date1.getTime())) {
          let tmp8 = importDefault;
          let tmp9 = dependencyMap;
          let tmp11 = _modDef3815(tmp7, 10);
          let tmp12 = tmp11;
          if (date >= tmp11) {
            obj = { state: null };
            obj.state = closure_1_8.PAST_REWARD_DATE;
            obj7.return();
            return obj;
          } else if (date >= tmp7) {
            let obj1 = { state: null, msUntilReward: null };
            obj1.state = closure_1_8.LESS_THAN_24H_BEFORE_REWARD;
            obj1.msUntilReward = tmp8(tmp9[4])(tmp12, date);
            obj7.return();
            return obj1;
          } else if (date >= tmp8(tmp9[5])(tmp7, -1)) {
            let obj2 = { state: null, msUntilReward: null };
            obj2.state = closure_1_8.LESS_THAN_24H_BEFORE_REWARD;
            obj2.msUntilReward = tmp8(tmp9[4])(tmp12, date);
            obj7.return();
            return obj2;
          }
        }
        continue;
      }
      const obj3 = { state: closure_1_8.MORE_THAN_24H_BEFORE_REWARD };
      return obj3;
    }
  })());
  if (closure_8.LESS_THAN_24H_BEFORE_REWARD === state) {
    if (msUntilReward == null) {
      msUntilReward = c6;
    }
    let tmp13 = msUntilReward;
  } else {
    if (tmp12.MORE_THAN_24H_BEFORE_REWARD !== state) {
      const PAST_REWARD_DATE = tmp12.PAST_REWARD_DATE;
    }
    tmp13 = c6;
  }
  networkTtlCache.setTtl(tmp13);
};
prototype["getState"] = function getState() {
  const iter = networkTtlCache.serialize();
  let cache = null;
  if (null != iter) {
    const obj = { value: null, fetchedAt: null };
    const _Array = Array;
    value = iter.value;
    obj.value = Array.from(value.entries());
    obj.fetchedAt = iter.fetchedAt;
    cache = obj;
  }
  return { cache };
};
prototype["getTotalDaysInDuration"] = function getTotalDaysInDuration(arg0) {
  const rewardForProgram = this.getRewardForProgram(arg0);
  if (null == rewardForProgram) {
    return null;
  } else {
    const total_countdown_duration_ms = rewardForProgram.total_countdown_duration_ms;
    let rounded = null;
    if (null != total_countdown_duration_ms) {
      rounded = null;
      if (total_countdown_duration_ms > 0) {
        const _Math = Math;
        rounded = Math.ceil(total_countdown_duration_ms / DurationsDefault.Millis.DAY);
      }
    }
    return rounded;
  }
};
prototype["isFetching"] = function isFetching() {
  return networkTtlCache.isLoading();
};
prototype["isFetched"] = function isFetched() {
  return networkTtlCache.isValid();
};
prototype["hasCachedValue"] = function hasCachedValue() {
  return null != networkTtlCache.getValue();
};
prototype["isReady"] = function isReady() {
  const self = this;
  const isFetchingResult = this.isFetching();
  let tmp2 = !isFetchingResult;
  if (!isFetchingResult) {
    let hasCachedValueResult = self.hasCachedValue();
    if (!hasCachedValueResult) {
      hasCachedValueResult = !ProgramRewardsUtils.canFetchAnyProgramReward("ProgramRewardsStore");
    }
    if (!hasCachedValueResult) {
      hasCachedValueResult = self.isError();
    }
    tmp2 = hasCachedValueResult;
  }
  return tmp2;
};
prototype["shouldFetch"] = function shouldFetch() {
  let obj = ProgramRewardsUtils;
  if (obj.canFetchAnyProgramReward("ProgramRewardsStore.shouldFetch")) {
    if (networkTtlCache.shouldFetch()) {
      obj = { shouldFetch: true };
    } else {
      obj = { shouldFetch: false, reason: null };
      obj.reason = obj.CACHE_SHOULD_NOT_FETCH;
    }
  } else {
    obj = { shouldFetch: false, reason: null };
    obj.reason = obj.NOT_ELIGIBLE_FOR_ANY_PROGRAM_REWARD;
    return obj;
  }
};
prototype["isError"] = function isError() {
  return networkTtlCache.isError();
};
prototype["getStatus"] = function getStatus() {
  return networkTtlCache.getStatus();
};
prototype["getRewardForProgram"] = function getRewardForProgram(arg0) {
  networkTtlCache.getValue();
  value = undefined;
  if (value != null) {
    value = value.get(arg0);
  }
  return value;
};
prototype["forceExpire"] = function forceExpire() {
  networkTtlCache.forceExpire();
};
ProgramRewardsStore.displayName = "ProgramRewardsStore";
ProgramRewardsStore.persistKey = "ProgramRewardsStore";
DidNotFetchReason = {
  LOGOUT: function handleReset() {
    networkTtlCache.clear();
  },
  PROGRAM_REWARDS_FETCH: function handleProgramRewardsFetch() {
    networkTtlCache.setLoading();
  },
  PROGRAM_REWARDS_FETCH_SUCCESS: function handleProgramRewardsFetchSuccess(programRewards) {
    programRewards = programRewards.programRewards;
    let map;
    if (networkTtlCache.isLoading()) {
      const _Map = Map;
      map = new Map();
      const item = programRewards.forEach((reward_program) => {
        const result = map.set(reward_program.reward_program, reward_program);
      });
      obj.setValue(map);
      ({ state, msUntilReward } = (function getCacheTtlState() {
        value = value.getValue();
        if (null == value) {
          let obj = { state: closure_1_8.MORE_THAN_24H_BEFORE_REWARD };
          return obj;
        } else {
          const _Date2 = Date;
          const date = new Date();
          const values = value.values();
          const obj7 = values[Symbol.iterator]();
          while (obj7 !== undefined) {
            let _Date = Date;
            let tmp4 = new.target;
            let tmp5 = new.target;
            let date1 = new Date(tmp2.next_reward_date);
            let tmp7 = date1;
            let _isNaN = isNaN;
            if (!isNaN(date1.getTime())) {
              let tmp8 = importDefault;
              let tmp9 = dependencyMap;
              let tmp11 = _modDef3815(tmp7, 10);
              let tmp12 = tmp11;
              if (date >= tmp11) {
                obj = { state: null };
                obj.state = closure_1_8.PAST_REWARD_DATE;
                obj7.return();
                return obj;
              } else if (date >= tmp7) {
                let obj1 = { state: null, msUntilReward: null };
                obj1.state = closure_1_8.LESS_THAN_24H_BEFORE_REWARD;
                obj1.msUntilReward = tmp8(tmp9[4])(tmp12, date);
                obj7.return();
                return obj1;
              } else if (date >= tmp8(tmp9[5])(tmp7, -1)) {
                let obj2 = { state: null, msUntilReward: null };
                obj2.state = closure_1_8.LESS_THAN_24H_BEFORE_REWARD;
                obj2.msUntilReward = tmp8(tmp9[4])(tmp12, date);
                obj7.return();
                return obj2;
              }
            }
            continue;
          }
          const obj3 = { state: closure_1_8.MORE_THAN_24H_BEFORE_REWARD };
          return obj3;
        }
      })());
      if (closure_8.LESS_THAN_24H_BEFORE_REWARD === state) {
        if (msUntilReward == null) {
          msUntilReward = c6;
        }
        let tmp10 = msUntilReward;
      } else {
        if (tmp9.MORE_THAN_24H_BEFORE_REWARD !== state) {
          const PAST_REWARD_DATE = tmp9.PAST_REWARD_DATE;
        }
        tmp10 = c6;
      }
      obj.setTtl(tmp10);
    } else {
      return false;
    }
  },
  PROGRAM_REWARDS_FETCH_FAILURE: function handleProgramRewardsFetchFailure() {
    if (networkTtlCache.isLoading()) {
      obj.setError();
    } else {
      return false;
    }
    obj = networkTtlCache;
  },
  CURRENT_USER_UPDATE: updateTtl,
  CONNECTION_OPEN: updateTtl,
};
const programRewardsStore = new ProgramRewardsStore(DispatcherDefault, DidNotFetchReason);
const size = fn(2);
let result = size.fileFinishedImporting("modules/rewards/ProgramRewardsStore.tsx");

export default programRewardsStore;
export { DidNotFetchReason };
