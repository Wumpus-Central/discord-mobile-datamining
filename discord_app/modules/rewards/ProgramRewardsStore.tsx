// discord_app/modules/rewards/ProgramRewardsStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import DurationsDefault from "../../utils/Durations.tsx";
import ProgramRewardsUtils from "ProgramRewardsUtils.tsx";
import ProgramRewardsTypes from "ProgramRewardsTypes.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import UserStore from "../../stores/UserStore.tsx";

require = fn;
function updateTtl() {
  ({ state, msUntilReward } = (function getCacheTtlState() {
    value = value.getValue();
    if (null == value) {
      const obj = { state: closure_1_8.MORE_THAN_24H_BEFORE_REWARD };
      return obj;
    } else {
      const _Date3 = Date;
      const date = new Date();
      const values = value.values();
      const obj10 = values[Symbol.iterator]();
      while (obj10 !== undefined) {
        let _Date = Date;
        let tmp4 = new.target;
        let tmp5 = new.target;
        let date1 = new Date(tmp2.next_reward_date);
        let tmp6 = date1;
        let obj3 = date1;
        let _isNaN = isNaN;
        if (!isNaN(date1.getTime())) {
          let _Date2 = Date;
          let time = obj3.getTime();
          let tmp11 = new.target;
          let tmp12 = new.target;
          let date2 = new Date(time + 10 * DurationsDefault.Millis.MINUTE);
          let obj4 = date2;
          if (date >= date2) {
            let obj2 = { state: closure_1_8.PAST_REWARD_DATE };
            obj10.return();
            return obj2;
          } else if (date >= obj3) {
            let time1 = obj4.getTime();
            let obj5 = { state: closure_1_8.LESS_THAN_24H_BEFORE_REWARD, msUntilReward: time1 - date.getTime() };
            obj10.return();
            return obj5;
          } else {
            let _Date4 = Date;
            let tmp32 = new.target;
            let tmp33 = new.target;
            let date3 = new Date(tmp6);
            let setDateResult = date3.setDate(obj3.getDate() - 1);
            if (date >= date3) {
              let time2 = obj4.getTime();
              let obj6 = { state: closure_1_8.LESS_THAN_24H_BEFORE_REWARD, msUntilReward: time2 - date.getTime() };
              obj10.return();
              return obj6;
            }
          }
        }
        continue;
      }
      const obj7 = { state: closure_1_8.MORE_THAN_24H_BEFORE_REWARD };
      return obj7;
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
      const obj = { state: closure_1_8.MORE_THAN_24H_BEFORE_REWARD };
      return obj;
    } else {
      const _Date3 = Date;
      const date = new Date();
      const values = value.values();
      const obj10 = values[Symbol.iterator]();
      while (obj10 !== undefined) {
        let _Date = Date;
        let tmp4 = new.target;
        let tmp5 = new.target;
        let date1 = new Date(tmp2.next_reward_date);
        let tmp6 = date1;
        let obj3 = date1;
        let _isNaN = isNaN;
        if (!isNaN(date1.getTime())) {
          let _Date2 = Date;
          let time = obj3.getTime();
          let tmp11 = new.target;
          let tmp12 = new.target;
          let date2 = new Date(time + 10 * DurationsDefault.Millis.MINUTE);
          let obj4 = date2;
          if (date >= date2) {
            let obj2 = { state: closure_1_8.PAST_REWARD_DATE };
            obj10.return();
            return obj2;
          } else if (date >= obj3) {
            let time1 = obj4.getTime();
            let obj5 = { state: closure_1_8.LESS_THAN_24H_BEFORE_REWARD, msUntilReward: time1 - date.getTime() };
            obj10.return();
            return obj5;
          } else {
            let _Date4 = Date;
            let tmp32 = new.target;
            let tmp33 = new.target;
            let date3 = new Date(tmp6);
            let setDateResult = date3.setDate(obj3.getDate() - 1);
            if (date >= date3) {
              let time2 = obj4.getTime();
              let obj6 = { state: closure_1_8.LESS_THAN_24H_BEFORE_REWARD, msUntilReward: time2 - date.getTime() };
              obj10.return();
              return obj6;
            }
          }
        }
        continue;
      }
      const obj7 = { state: closure_1_8.MORE_THAN_24H_BEFORE_REWARD };
      return obj7;
    }
  })();
}
const DidNotFetchReason = {
  NOT_ELIGIBLE_FOR_ANY_PROGRAM_REWARD: "NOT_ELIGIBLE_FOR_ANY_PROGRAM_REWARD",
  CACHE_SHOULD_NOT_FETCH: "CACHE_SHOULD_NOT_FETCH",
};
let c6 = 86400000;
const networkTtlCache = new fn(15221).NetworkTtlCache({ ttlMs: 86400000 });
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
      state = applyArgumentsResult.getState();
      items = undefined;
      if (state.cache != null) {
        items = iter.value;
      }
      if (items == null) {
        items = [];
      }
      const obj = {};
      while (tmp2 !== undefined) {
        let tmp5 = _slicedToArray(tmp3, 2);
        [tmp6, tmp8] = tmp5;
        let StringResult = ProgramRewardsTypes.RewardProgram[tmp6];
        if (StringResult == null) {
          let _String = String;
          StringResult = String(tmp6);
        }
        obj[StringResult] = tmp8;
        continue;
      }
      const obj2 = {
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
      obj2.fetchedAt = fetchedAt;
      let tmp15 = null;
      if (Object.keys(obj).length > 0) {
        tmp15 = obj;
      }
      obj2.rewards = tmp15;
      return obj2;
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
                let NumberResult = closure_1_0(closure_1_2[6]).RewardProgram[tmp];
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
      items = [{ type: "PROGRAM_REWARDS_FETCH" }];
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
      const obj = { state: closure_1_8.MORE_THAN_24H_BEFORE_REWARD };
      return obj;
    } else {
      const _Date3 = Date;
      const date = new Date();
      const values = value.values();
      const obj10 = values[Symbol.iterator]();
      while (obj10 !== undefined) {
        let _Date = Date;
        let tmp4 = new.target;
        let tmp5 = new.target;
        let date1 = new Date(tmp2.next_reward_date);
        let tmp6 = date1;
        let obj3 = date1;
        let _isNaN = isNaN;
        if (!isNaN(date1.getTime())) {
          let _Date2 = Date;
          let time = obj3.getTime();
          let tmp11 = new.target;
          let tmp12 = new.target;
          let date2 = new Date(time + 10 * DurationsDefault.Millis.MINUTE);
          let obj4 = date2;
          if (date >= date2) {
            let obj2 = { state: closure_1_8.PAST_REWARD_DATE };
            obj10.return();
            return obj2;
          } else if (date >= obj3) {
            let time1 = obj4.getTime();
            let obj5 = { state: closure_1_8.LESS_THAN_24H_BEFORE_REWARD, msUntilReward: time1 - date.getTime() };
            obj10.return();
            return obj5;
          } else {
            let _Date4 = Date;
            let tmp32 = new.target;
            let tmp33 = new.target;
            let date3 = new Date(tmp6);
            let setDateResult = date3.setDate(obj3.getDate() - 1);
            if (date >= date3) {
              let time2 = obj4.getTime();
              let obj6 = { state: closure_1_8.LESS_THAN_24H_BEFORE_REWARD, msUntilReward: time2 - date.getTime() };
              obj10.return();
              return obj6;
            }
          }
        }
        continue;
      }
      const obj7 = { state: closure_1_8.MORE_THAN_24H_BEFORE_REWARD };
      return obj7;
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
      const obj = { state: closure_1_8.MORE_THAN_24H_BEFORE_REWARD };
      return obj;
    } else {
      const _Date3 = Date;
      const date = new Date();
      const values = value.values();
      const obj10 = values[Symbol.iterator]();
      while (obj10 !== undefined) {
        let _Date = Date;
        let tmp4 = new.target;
        let tmp5 = new.target;
        let date1 = new Date(tmp2.next_reward_date);
        let tmp6 = date1;
        let obj3 = date1;
        let _isNaN = isNaN;
        if (!isNaN(date1.getTime())) {
          let _Date2 = Date;
          let time = obj3.getTime();
          let tmp11 = new.target;
          let tmp12 = new.target;
          let date2 = new Date(time + 10 * DurationsDefault.Millis.MINUTE);
          let obj4 = date2;
          if (date >= date2) {
            let obj2 = { state: closure_1_8.PAST_REWARD_DATE };
            obj10.return();
            return obj2;
          } else if (date >= obj3) {
            let time1 = obj4.getTime();
            let obj5 = { state: closure_1_8.LESS_THAN_24H_BEFORE_REWARD, msUntilReward: time1 - date.getTime() };
            obj10.return();
            return obj5;
          } else {
            let _Date4 = Date;
            let tmp32 = new.target;
            let tmp33 = new.target;
            let date3 = new Date(tmp6);
            let setDateResult = date3.setDate(obj3.getDate() - 1);
            if (date >= date3) {
              let time2 = obj4.getTime();
              let obj6 = { state: closure_1_8.LESS_THAN_24H_BEFORE_REWARD, msUntilReward: time2 - date.getTime() };
              obj10.return();
              return obj6;
            }
          }
        }
        continue;
      }
      const obj7 = { state: closure_1_8.MORE_THAN_24H_BEFORE_REWARD };
      return obj7;
    }
  })();
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
      hasCachedValueResult = !ProgramRewardsUtils.canFetchAnyProgramReward();
    }
    if (!hasCachedValueResult) {
      hasCachedValueResult = self.isError();
    }
    tmp2 = hasCachedValueResult;
  }
  return tmp2;
};
prototype["shouldFetch"] = function shouldFetch() {
  const obj = ProgramRewardsUtils;
  if (obj.canFetchAnyProgramReward()) {
    if (networkTtlCache.shouldFetch()) {
      let obj2 = { shouldFetch: true };
    } else {
      obj2 = { shouldFetch: false, reason: obj.CACHE_SHOULD_NOT_FETCH };
    }
  } else {
    const obj3 = { shouldFetch: false, reason: obj.NOT_ELIGIBLE_FOR_ANY_PROGRAM_REWARD };
    return obj3;
  }
};
prototype["isError"] = function isError() {
  return networkTtlCache.isError();
};
prototype["getStatus"] = function getStatus() {
  return networkTtlCache.getStatus();
};
prototype["getRewardForProgram"] = function getRewardForProgram(arg0) {
  value = networkTtlCache.getValue();
  let value2;
  if (value != null) {
    value2 = value.get(arg0);
  }
  return value2;
};
prototype["forceExpire"] = function forceExpire() {
  networkTtlCache.forceExpire();
};
ProgramRewardsStore.displayName = "ProgramRewardsStore";
ProgramRewardsStore.persistKey = "ProgramRewardsStore";
const programRewardsStore = new ProgramRewardsStore(DispatcherDefault, {
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
      networkTtlCache.setValue(map);
      ({ state, msUntilReward } = (function getCacheTtlState() {
        value = value.getValue();
        if (null == value) {
          const obj = { state: closure_1_8.MORE_THAN_24H_BEFORE_REWARD };
          return obj;
        } else {
          const _Date3 = Date;
          const date = new Date();
          const values = value.values();
          const obj10 = values[Symbol.iterator]();
          while (obj10 !== undefined) {
            let _Date = Date;
            let tmp4 = new.target;
            let tmp5 = new.target;
            let date1 = new Date(tmp2.next_reward_date);
            let tmp6 = date1;
            let obj3 = date1;
            let _isNaN = isNaN;
            if (!isNaN(date1.getTime())) {
              let _Date2 = Date;
              let time = obj3.getTime();
              let tmp11 = new.target;
              let tmp12 = new.target;
              let date2 = new Date(time + 10 * DurationsDefault.Millis.MINUTE);
              let obj4 = date2;
              if (date >= date2) {
                let obj2 = { state: closure_1_8.PAST_REWARD_DATE };
                obj10.return();
                return obj2;
              } else if (date >= obj3) {
                let time1 = obj4.getTime();
                let obj5 = { state: closure_1_8.LESS_THAN_24H_BEFORE_REWARD, msUntilReward: time1 - date.getTime() };
                obj10.return();
                return obj5;
              } else {
                let _Date4 = Date;
                let tmp32 = new.target;
                let tmp33 = new.target;
                let date3 = new Date(tmp6);
                let setDateResult = date3.setDate(obj3.getDate() - 1);
                if (date >= date3) {
                  let time2 = obj4.getTime();
                  let obj6 = { state: closure_1_8.LESS_THAN_24H_BEFORE_REWARD, msUntilReward: time2 - date.getTime() };
                  obj10.return();
                  return obj6;
                }
              }
            }
            continue;
          }
          const obj7 = { state: closure_1_8.MORE_THAN_24H_BEFORE_REWARD };
          return obj7;
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
          const obj = { state: closure_1_8.MORE_THAN_24H_BEFORE_REWARD };
          return obj;
        } else {
          const _Date3 = Date;
          const date = new Date();
          const values = value.values();
          const obj10 = values[Symbol.iterator]();
          while (obj10 !== undefined) {
            let _Date = Date;
            let tmp4 = new.target;
            let tmp5 = new.target;
            let date1 = new Date(tmp2.next_reward_date);
            let tmp6 = date1;
            let obj3 = date1;
            let _isNaN = isNaN;
            if (!isNaN(date1.getTime())) {
              let _Date2 = Date;
              let time = obj3.getTime();
              let tmp11 = new.target;
              let tmp12 = new.target;
              let date2 = new Date(time + 10 * DurationsDefault.Millis.MINUTE);
              let obj4 = date2;
              if (date >= date2) {
                let obj2 = { state: closure_1_8.PAST_REWARD_DATE };
                obj10.return();
                return obj2;
              } else if (date >= obj3) {
                let time1 = obj4.getTime();
                let obj5 = { state: closure_1_8.LESS_THAN_24H_BEFORE_REWARD, msUntilReward: time1 - date.getTime() };
                obj10.return();
                return obj5;
              } else {
                let _Date4 = Date;
                let tmp32 = new.target;
                let tmp33 = new.target;
                let date3 = new Date(tmp6);
                let setDateResult = date3.setDate(obj3.getDate() - 1);
                if (date >= date3) {
                  let time2 = obj4.getTime();
                  let obj6 = { state: closure_1_8.LESS_THAN_24H_BEFORE_REWARD, msUntilReward: time2 - date.getTime() };
                  obj10.return();
                  return obj6;
                }
              }
            }
            continue;
          }
          const obj7 = { state: closure_1_8.MORE_THAN_24H_BEFORE_REWARD };
          return obj7;
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
  CONNECTION_OPEN: updateTtl,
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/rewards/ProgramRewardsStore.tsx");

export default programRewardsStore;
export { DidNotFetchReason };
