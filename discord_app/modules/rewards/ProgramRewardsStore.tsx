// discord_app/modules/rewards/ProgramRewardsStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import obj132Default from "../../utils/Durations.tsx";
import dispatcherDefault from "../../Dispatcher.tsx";
import canFetchNitroProgramReward from "ProgramRewardsUtils.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__slicedToArray.js";
import mergeGuildAvatar from "../../stores/UserStore.tsx";

require = fn;
function updateTtl() {
  ({ state, msUntilReward } = (function getCacheTtlState() {
    value = value.getValue();
    if (null == value) {
      obj = { state: null };
      obj[0] = closure_8.MORE_THAN_24H_BEFORE_REWARD;
      return obj;
    } else {
      const _Date2 = Date;
      const date = new Date();
      const values = value.values();
      const obj7 = values[Symbol.iterator]();
      while (obj7 !== undefined) {
        let _Date = Date;
        let date1 = new Date(tmp2.next_reward_date);
        let tmp7 = date1;
        let _isNaN = isNaN;
        if (!isNaN(date1.getTime())) {
          let tmp11 = callback(table[3])(tmp7, 10);
          let tmp12 = tmp11;
          if (date >= tmp11) {
            obj = { state: null };
            obj[0] = closure_8.PAST_REWARD_DATE;
            obj7.return();
            return obj;
          } else if (date >= tmp7) {
            obj1 = { state: null, msUntilReward: null };
            obj1[0] = closure_8.LESS_THAN_24H_BEFORE_REWARD;
            obj1[1] = callback(table[4])(tmp12, date);
            obj7.return();
            return obj1;
          } else if (date >= callback(table[5])(tmp7, -1)) {
            let obj2 = { state: null, msUntilReward: null };
            obj2[0] = closure_8.LESS_THAN_24H_BEFORE_REWARD;
            obj2[1] = callback(table[4])(tmp12, date);
            obj7.return();
            return obj2;
          }
        }
        continue;
      }
      const obj3 = { state: null };
      obj3[0] = closure_8.MORE_THAN_24H_BEFORE_REWARD;
      return obj3;
    }
  })());
  if (closure_8.LESS_THAN_24H_BEFORE_REWARD === state) {
    if (msUntilReward == null) {
      msUntilReward = c6;
    }
    let tmp4 = msUntilReward;
  } else {
    if (closure_8.MORE_THAN_24H_BEFORE_REWARD !== state) {
      const PAST_REWARD_DATE = closure_8.PAST_REWARD_DATE;
    }
    tmp4 = c6;
  }
  networkTtlCache.setTtl(tmp4);
  const tmp = (function getCacheTtlState() {
    value = value.getValue();
    if (null == value) {
      obj = { state: null };
      obj[0] = closure_8.MORE_THAN_24H_BEFORE_REWARD;
      return obj;
    } else {
      const _Date2 = Date;
      const date = new Date();
      const values = value.values();
      const obj7 = values[Symbol.iterator]();
      while (obj7 !== undefined) {
        let _Date = Date;
        let date1 = new Date(tmp2.next_reward_date);
        let tmp7 = date1;
        let _isNaN = isNaN;
        if (!isNaN(date1.getTime())) {
          let tmp11 = callback(table[3])(tmp7, 10);
          let tmp12 = tmp11;
          if (date >= tmp11) {
            obj = { state: null };
            obj[0] = closure_8.PAST_REWARD_DATE;
            obj7.return();
            return obj;
          } else if (date >= tmp7) {
            obj1 = { state: null, msUntilReward: null };
            obj1[0] = closure_8.LESS_THAN_24H_BEFORE_REWARD;
            obj1[1] = callback(table[4])(tmp12, date);
            obj7.return();
            return obj1;
          } else if (date >= callback(table[5])(tmp7, -1)) {
            let obj2 = { state: null, msUntilReward: null };
            obj2[0] = closure_8.LESS_THAN_24H_BEFORE_REWARD;
            obj2[1] = callback(table[4])(tmp12, date);
            obj7.return();
            return obj2;
          }
        }
        continue;
      }
      const obj3 = { state: null };
      obj3[0] = closure_8.MORE_THAN_24H_BEFORE_REWARD;
      return obj3;
    }
  })();
}
let obj = { NOT_ELIGIBLE_FOR_ANY_PROGRAM_REWARD: "NOT_ELIGIBLE_FOR_ANY_PROGRAM_REWARD", CACHE_SHOULD_NOT_FETCH: "CACHE_SHOULD_NOT_FETCH" };
let c6 = 86400000;
const networkTtlCache = new require("NetworkTtlCacheStatus").NetworkTtlCache({ ttlMs: 86400000 });
let closure_8 = { MORE_THAN_24H_BEFORE_REWARD: "MORE_THAN_24H_BEFORE_REWARD", LESS_THAN_24H_BEFORE_REWARD: "LESS_THAN_24H_BEFORE_REWARD", PAST_REWARD_DATE: "PAST_REWARD_DATE" };
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
      obj = {};
      while (tmp2 !== undefined) {
        let tmp5 = closure_1_3(tmp3, 2);
        [tmp6, tmp8] = tmp5;
        let StringResult = applyArgumentsResult(dependencyMap[9]).RewardProgram[tmp6];
        if (StringResult == null) {
          let _String = String;
          StringResult = String(tmp6);
        }
        obj[StringResult] = tmp8;
        continue;
      }
      obj = { status: applyArgumentsResult.getStatus(), isFetching: applyArgumentsResult.isFetching(), isFetched: applyArgumentsResult.isFetched(), hasCachedValue: applyArgumentsResult.hasCachedValue(), isError: applyArgumentsResult.isError(), isReady: applyArgumentsResult.isReady(), shouldFetch: applyArgumentsResult.shouldFetch(), fetchedAt: null, rewards: null };
      const cache = state.cache;
      let fetchedAt;
      if (cache != null) {
        fetchedAt = cache.fetchedAt;
      }
      if (fetchedAt == null) {
        fetchedAt = null;
      }
      obj[7] = fetchedAt;
      let tmp15 = null;
      if (Object.keys(obj).length > 0) {
        tmp15 = obj;
      }
      obj[8] = tmp15;
      return obj;
    };
    applyArgumentsResult.__getLocalVarsEditConfig = function __getLocalVarsEditConfig() {
      const items = [{ type: "PROGRAM_REWARDS_FETCH" }];
      return {
        preDispatches: items,
        actionType: "PROGRAM_REWARDS_FETCH_SUCCESS",
        buildPayload(rewards) {
          rewards = rewards.rewards;
          if (rewards == null) {
            rewards = null;
          }
          if (null != rewards) {
            const _Object = Object;
            if (0 !== Object.keys(rewards).length) {
              obj = { programRewards: null };
              const _Object2 = Object;
              const entries = Object.entries(rewards);
              obj[0] = entries.map((item, index) => {
                [tmp, tmp2] = item;
                obj = {};
                const merged = Object.assign(tmp2);
                let NumberResult = callback(table[9]).RewardProgram[tmp];
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
        }
      };
    };
    return applyArgumentsResult;
  }
}
const prototype = ProgramRewardsStore.prototype;
prototype["initialize"] = function initialize(cache) {
  this.waitFor(closure_4);
  cache = undefined;
  if (cache != null) {
    cache = cache.cache;
  }
  if (null != cache) {
    const _Map = Map;
    const map = new Map(cache.cache.value);
    obj = { value: null, fetchedAt: null };
    obj[0] = map;
    obj[1] = cache.cache.fetchedAt;
    networkTtlCache.restore(obj);
  }
  ({ state, msUntilReward } = (function getCacheTtlState() {
    value = value.getValue();
    if (null == value) {
      obj = { state: null };
      obj[0] = closure_8.MORE_THAN_24H_BEFORE_REWARD;
      return obj;
    } else {
      const _Date2 = Date;
      const date = new Date();
      const values = value.values();
      const obj7 = values[Symbol.iterator]();
      while (obj7 !== undefined) {
        let _Date = Date;
        let date1 = new Date(tmp2.next_reward_date);
        let tmp7 = date1;
        let _isNaN = isNaN;
        if (!isNaN(date1.getTime())) {
          let tmp11 = callback(table[3])(tmp7, 10);
          let tmp12 = tmp11;
          if (date >= tmp11) {
            obj = { state: null };
            obj[0] = closure_8.PAST_REWARD_DATE;
            obj7.return();
            return obj;
          } else if (date >= tmp7) {
            obj1 = { state: null, msUntilReward: null };
            obj1[0] = closure_8.LESS_THAN_24H_BEFORE_REWARD;
            obj1[1] = callback(table[4])(tmp12, date);
            obj7.return();
            return obj1;
          } else if (date >= callback(table[5])(tmp7, -1)) {
            let obj2 = { state: null, msUntilReward: null };
            obj2[0] = closure_8.LESS_THAN_24H_BEFORE_REWARD;
            obj2[1] = callback(table[4])(tmp12, date);
            obj7.return();
            return obj2;
          }
        }
        continue;
      }
      const obj3 = { state: null };
      obj3[0] = closure_8.MORE_THAN_24H_BEFORE_REWARD;
      return obj3;
    }
  })());
  if (closure_8.LESS_THAN_24H_BEFORE_REWARD === state) {
    if (msUntilReward == null) {
      msUntilReward = c6;
    }
    let tmp13 = msUntilReward;
  } else {
    if (closure_8.MORE_THAN_24H_BEFORE_REWARD !== state) {
      const PAST_REWARD_DATE = closure_8.PAST_REWARD_DATE;
    }
    tmp13 = c6;
  }
  networkTtlCache.setTtl(tmp13);
  const tmp10 = (function getCacheTtlState() {
    value = value.getValue();
    if (null == value) {
      obj = { state: null };
      obj[0] = closure_8.MORE_THAN_24H_BEFORE_REWARD;
      return obj;
    } else {
      const _Date2 = Date;
      const date = new Date();
      const values = value.values();
      const obj7 = values[Symbol.iterator]();
      while (obj7 !== undefined) {
        let _Date = Date;
        let date1 = new Date(tmp2.next_reward_date);
        let tmp7 = date1;
        let _isNaN = isNaN;
        if (!isNaN(date1.getTime())) {
          let tmp11 = callback(table[3])(tmp7, 10);
          let tmp12 = tmp11;
          if (date >= tmp11) {
            obj = { state: null };
            obj[0] = closure_8.PAST_REWARD_DATE;
            obj7.return();
            return obj;
          } else if (date >= tmp7) {
            obj1 = { state: null, msUntilReward: null };
            obj1[0] = closure_8.LESS_THAN_24H_BEFORE_REWARD;
            obj1[1] = callback(table[4])(tmp12, date);
            obj7.return();
            return obj1;
          } else if (date >= callback(table[5])(tmp7, -1)) {
            let obj2 = { state: null, msUntilReward: null };
            obj2[0] = closure_8.LESS_THAN_24H_BEFORE_REWARD;
            obj2[1] = callback(table[4])(tmp12, date);
            obj7.return();
            return obj2;
          }
        }
        continue;
      }
      const obj3 = { state: null };
      obj3[0] = closure_8.MORE_THAN_24H_BEFORE_REWARD;
      return obj3;
    }
  })();
};
prototype["getState"] = function getState() {
  const iter = networkTtlCache.serialize();
  let cache = null;
  if (null != iter) {
    obj = { value: null, fetchedAt: null };
    const _Array = Array;
    const value = iter.value;
    obj[0] = Array.from(value.entries());
    obj[1] = iter.fetchedAt;
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
        rounded = Math.ceil(total_countdown_duration_ms / obj132Default.Millis.DAY);
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
      hasCachedValueResult = !canFetchNitroProgramReward.canFetchAnyProgramReward("ProgramRewardsStore");
    }
    if (!hasCachedValueResult) {
      hasCachedValueResult = self.isError();
    }
    tmp2 = hasCachedValueResult;
  }
  return tmp2;
};
prototype["shouldFetch"] = function shouldFetch() {
  obj = canFetchNitroProgramReward;
  if (obj.canFetchAnyProgramReward("ProgramRewardsStore.shouldFetch")) {
    if (networkTtlCache.shouldFetch()) {
      obj = { shouldFetch: true };
    } else {
      obj = { shouldFetch: false, reason: null };
      obj[1] = obj.CACHE_SHOULD_NOT_FETCH;
    }
  } else {
    obj = { shouldFetch: false, reason: null };
    obj[1] = obj.NOT_ELIGIBLE_FOR_ANY_PROGRAM_REWARD;
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
  let value;
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
obj = {
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
      const item = programRewards.forEach((item, index) => {
        const result = map.set(item.reward_program, item);
      });
      networkTtlCache.setValue(map);
      ({ state, msUntilReward } = (function getCacheTtlState() {
        value = value.getValue();
        if (null == value) {
          obj = { state: null };
          obj[0] = closure_8.MORE_THAN_24H_BEFORE_REWARD;
          return obj;
        } else {
          const _Date2 = Date;
          const date = new Date();
          const values = value.values();
          const obj7 = values[Symbol.iterator]();
          while (obj7 !== undefined) {
            let _Date = Date;
            let date1 = new Date(tmp2.next_reward_date);
            let tmp7 = date1;
            let _isNaN = isNaN;
            if (!isNaN(date1.getTime())) {
              let tmp11 = callback(table[3])(tmp7, 10);
              let tmp12 = tmp11;
              if (date >= tmp11) {
                obj = { state: null };
                obj[0] = closure_8.PAST_REWARD_DATE;
                obj7.return();
                return obj;
              } else if (date >= tmp7) {
                obj1 = { state: null, msUntilReward: null };
                obj1[0] = closure_8.LESS_THAN_24H_BEFORE_REWARD;
                obj1[1] = callback(table[4])(tmp12, date);
                obj7.return();
                return obj1;
              } else if (date >= callback(table[5])(tmp7, -1)) {
                let obj2 = { state: null, msUntilReward: null };
                obj2[0] = closure_8.LESS_THAN_24H_BEFORE_REWARD;
                obj2[1] = callback(table[4])(tmp12, date);
                obj7.return();
                return obj2;
              }
            }
            continue;
          }
          const obj3 = { state: null };
          obj3[0] = closure_8.MORE_THAN_24H_BEFORE_REWARD;
          return obj3;
        }
      })());
      if (closure_8.LESS_THAN_24H_BEFORE_REWARD === state) {
        if (msUntilReward == null) {
          msUntilReward = c6;
        }
        let tmp10 = msUntilReward;
      } else {
        if (closure_8.MORE_THAN_24H_BEFORE_REWARD !== state) {
          const PAST_REWARD_DATE = closure_8.PAST_REWARD_DATE;
        }
        tmp10 = c6;
      }
      networkTtlCache.setTtl(tmp10);
      const tmp8 = (function getCacheTtlState() {
        value = value.getValue();
        if (null == value) {
          obj = { state: null };
          obj[0] = closure_8.MORE_THAN_24H_BEFORE_REWARD;
          return obj;
        } else {
          const _Date2 = Date;
          const date = new Date();
          const values = value.values();
          const obj7 = values[Symbol.iterator]();
          while (obj7 !== undefined) {
            let _Date = Date;
            let date1 = new Date(tmp2.next_reward_date);
            let tmp7 = date1;
            let _isNaN = isNaN;
            if (!isNaN(date1.getTime())) {
              let tmp11 = callback(table[3])(tmp7, 10);
              let tmp12 = tmp11;
              if (date >= tmp11) {
                obj = { state: null };
                obj[0] = closure_8.PAST_REWARD_DATE;
                obj7.return();
                return obj;
              } else if (date >= tmp7) {
                obj1 = { state: null, msUntilReward: null };
                obj1[0] = closure_8.LESS_THAN_24H_BEFORE_REWARD;
                obj1[1] = callback(table[4])(tmp12, date);
                obj7.return();
                return obj1;
              } else if (date >= callback(table[5])(tmp7, -1)) {
                let obj2 = { state: null, msUntilReward: null };
                obj2[0] = closure_8.LESS_THAN_24H_BEFORE_REWARD;
                obj2[1] = callback(table[4])(tmp12, date);
                obj7.return();
                return obj2;
              }
            }
            continue;
          }
          const obj3 = { state: null };
          obj3[0] = closure_8.MORE_THAN_24H_BEFORE_REWARD;
          return obj3;
        }
      })();
    } else {
      return false;
    }
  },
  PROGRAM_REWARDS_FETCH_FAILURE: function handleProgramRewardsFetchFailure() {
    if (networkTtlCache.isLoading()) {
      networkTtlCache.setError();
    } else {
      return false;
    }
  },
  CURRENT_USER_UPDATE: updateTtl,
  CONNECTION_OPEN: updateTtl
};
const programRewardsStore = new ProgramRewardsStore(dispatcherDefault, obj);
let result = require("obj132").fileFinishedImporting("modules/rewards/ProgramRewardsStore.tsx");

export default programRewardsStore;
export const DidNotFetchReason = obj;