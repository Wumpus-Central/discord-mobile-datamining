// discord_app/modules/rewards/ProgramRewardsStore.tsx
import get_initializedDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import DurationsDefault from "../../utils/Durations.tsx";
import addDaysDefault from "../../../_runtime/04112_addDays.js";
import addMinutesDefault from "../../../_runtime/04129_addMinutes.js";
import differenceInMillisecondsDefault from "../../../_runtime/04157_differenceInMilliseconds.js";
import NetworkTtlCache from "../../lib/NetworkTtlCache.tsx";
import ProgramRewardsUtils from "ProgramRewardsUtils.tsx";
import ProgramRewardsTypes from "ProgramRewardsTypes.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__slicedToArray.js";
import UserStore from "../../stores/UserStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

let map;

function getCacheTtlState() {
  value = value.getValue();
  if (null == value) {
    return { state: closure_1_8.MORE_THAN_24H_BEFORE_REWARD };
  } else {
    const _Date2 = Date;
    const self3 = this;
    const self4 = this;
    const date = new Date();
    const values = value.values();
    const obj7 = values[Symbol.iterator]();
    while (obj7 !== undefined) {
      let _Date = Date;
      let self = this;
      let self2 = this;
      let date1 = new Date(tmp2.next_reward_date);
      let tmp5 = date1;
      let _isNaN = isNaN;
      if (!isNaN(date1.getTime())) {
        let tmp9 = addMinutesDefault(tmp5, 10);
        let tmp10 = tmp9;
        if (date >= tmp9) {
          let obj2 = { state: closure_1_8.PAST_REWARD_DATE };
          obj7.return();
          return obj2;
        } else if (date >= tmp5) {
          let obj3 = {
            state: closure_1_8.LESS_THAN_24H_BEFORE_REWARD,
            msUntilReward: differenceInMillisecondsDefault(tmp10, date),
          };
          obj7.return();
          return obj3;
        } else if (date >= addDaysDefault(tmp5, -1)) {
          let obj4 = {
            state: closure_1_8.LESS_THAN_24H_BEFORE_REWARD,
            msUntilReward: differenceInMillisecondsDefault(tmp10, date),
          };
          obj7.return();
          return obj4;
        }
      }
      continue;
    }
    return { state: closure_1_8.MORE_THAN_24H_BEFORE_REWARD };
  }
}
function updateTtl() {
  let msUntilReward;
  let state;
  let tmp4;
  ({ state, msUntilReward } = getCacheTtlState());
  const setTtl = networkTtlCache.setTtl;
  getCacheTtlState();
  if (closure_8.LESS_THAN_24H_BEFORE_REWARD === state) {
    if (msUntilReward == null) {
      msUntilReward = c6;
    }
    tmp4 = msUntilReward;
  } else {
    if (closure_8.MORE_THAN_24H_BEFORE_REWARD !== state) {
      const PAST_REWARD_DATE = closure_8.PAST_REWARD_DATE;
    }
    tmp4 = c6;
  }
  setTtl(tmp4);
}
const DidNotFetchReason = {
  NOT_ELIGIBLE_FOR_ANY_PROGRAM_REWARD: "NOT_ELIGIBLE_FOR_ANY_PROGRAM_REWARD",
  CACHE_SHOULD_NOT_FETCH: "CACHE_SHOULD_NOT_FETCH",
};
let c6 = 86400000;
const networkTtlCache = new NetworkTtlCache.NetworkTtlCache({ ttlMs: 86400000 });
const metroImportAll = {
  MORE_THAN_24H_BEFORE_REWARD: "MORE_THAN_24H_BEFORE_REWARD",
  LESS_THAN_24H_BEFORE_REWARD: "LESS_THAN_24H_BEFORE_REWARD",
  PAST_REWARD_DATE: "PAST_REWARD_DATE",
};
const PersistedStore = get_initializedDefault.PersistedStore;
class ProgramRewardsStore extends PersistedStore {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    require = applyArgumentsResult;
    applyArgumentsResult.__getLocalVars = function __getLocalVars() {
      let fetchedAt;
      let tmp15;
      let tmp6;
      let tmp8;
      const state = require.getState();
      let items;
      if (state.cache != null) {
        items = iter.value;
      }
      if (items == null) {
        items = [];
      }
      const obj = {};
      const tmp2 = items[Symbol.iterator]();
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
      const cache = state.cache;
      const obj2 = {
        status: require.getStatus(),
        isFetching: require.isFetching(),
        isFetched: require.isFetched(),
        hasCachedValue: require.hasCachedValue(),
        isError: require.isError(),
        isReady: require.isReady(),
        shouldFetch: require.shouldFetch(),
        fetchedAt,
        rewards: tmp15,
      };
      fetchedAt = undefined;
      if (cache != null) {
        fetchedAt = cache.fetchedAt;
      }
      if (fetchedAt == null) {
        fetchedAt = null;
      }
      tmp15 = null;
      if (Object.keys(obj).length > 0) {
        tmp15 = obj;
      }
      return obj2;
    };
    applyArgumentsResult.__getLocalVarsEditConfig = function __getLocalVarsEditConfig() {
      let items;
      let obj = {
        preDispatches: items,
        actionType: "PROGRAM_REWARDS_FETCH_SUCCESS",
        buildPayload(rewards) {
          let entries;
          rewards = rewards.rewards;
          if (rewards == null) {
            rewards = null;
          }
          if (null != rewards) {
            let obj;
            const tmp2 = globalThis;
            const _Object = Object;
            if (0 !== Object.keys(rewards).length) {
              obj = {
                programRewards: entries.map((item) => {
                  let NumberResult;
                  let tmp;
                  let tmp2;
                  [tmp, tmp2] = item;
                  const obj = { reward_program: NumberResult };
                  const merged = Object.assign(tmp2);
                  NumberResult = closure_1_0(closure_1_2[9]).RewardProgram[tmp];
                  if (NumberResult == null) {
                    const _Number = Number;
                    NumberResult = Number(tmp);
                  }
                  return obj;
                }),
              };
              const _Object2 = Object;
              entries = Object.entries(rewards);
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
      return obj;
    };
    return applyArgumentsResult;
  }
  initialize(cache) {
    let msUntilReward;
    let state;
    let tmp11;
    this.waitFor(UserStore);
    cache = undefined;
    if (cache != null) {
      cache = cache.cache;
    }
    if (null != cache) {
      const _Map = Map;
      const self = this;
      const self2 = this;
      const obj = { value: new Map(cache.cache.value), fetchedAt: cache.cache.fetchedAt };
      networkTtlCache.restore(obj);
    }
    ({ state, msUntilReward } = getCacheTtlState());
    const setTtl = networkTtlCache.setTtl;
    getCacheTtlState();
    if (closure_8.LESS_THAN_24H_BEFORE_REWARD === state) {
      if (msUntilReward == null) {
        msUntilReward = c6;
      }
      tmp11 = msUntilReward;
    } else {
      if (closure_8.MORE_THAN_24H_BEFORE_REWARD !== state) {
        const PAST_REWARD_DATE = closure_8.PAST_REWARD_DATE;
      }
      tmp11 = c6;
    }
    setTtl(tmp11);
  }
  getState() {
    let value;
    const iter = networkTtlCache.serialize();
    let cache = null;
    if (null != iter) {
      const _Array = Array;
      const obj = { value: Array.from(value.entries()), fetchedAt: iter.fetchedAt };
      value = iter.value;
      cache = obj;
    }
    return { cache };
  }
  getTotalDaysInDuration(arg0) {
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
  }
  isFetching() {
    return networkTtlCache.isLoading();
  }
  isFetched() {
    return networkTtlCache.isValid();
  }
  hasCachedValue() {
    return null != networkTtlCache.getValue();
  }
  isReady() {
    const self = this;
    let tmp2 = !this.isFetching();
    this.isFetching();
    if (tmp2) {
      let hasCachedValueResult = self.hasCachedValue();
      if (!hasCachedValueResult) {
        const obj = ProgramRewardsUtils;
        hasCachedValueResult = !obj.canFetchAnyProgramReward("ProgramRewardsStore");
      }
      if (!hasCachedValueResult) {
        hasCachedValueResult = self.isError();
      }
      tmp2 = hasCachedValueResult;
    }
    return tmp2;
  }
  shouldFetch() {
    let obj3;
    const obj = ProgramRewardsUtils;
    if (obj.canFetchAnyProgramReward("ProgramRewardsStore.shouldFetch")) {
      let obj2;
      if (networkTtlCache.shouldFetch()) {
        obj2 = { shouldFetch: true };
      } else {
        obj2 = { shouldFetch: false, reason: obj.CACHE_SHOULD_NOT_FETCH };
      }
      obj3 = obj2;
    } else {
      obj3 = { shouldFetch: false, reason: obj.NOT_ELIGIBLE_FOR_ANY_PROGRAM_REWARD };
    }
    return obj3;
  }
  isError() {
    return networkTtlCache.isError();
  }
  getStatus() {
    return networkTtlCache.getStatus();
  }
  getRewardForProgram(arg0) {
    const value = networkTtlCache.getValue();
    let value2;
    if (value != null) {
      value2 = value.get(arg0);
    }
    return value2;
  }
  forceExpire() {
    networkTtlCache.forceExpire();
  }
}
const prototype = ProgramRewardsStore.prototype;
ProgramRewardsStore.displayName = "ProgramRewardsStore";
ProgramRewardsStore.persistKey = "ProgramRewardsStore";
let obj2 = {
  LOGOUT: function handleReset() {
    networkTtlCache.clear();
  },
  PROGRAM_REWARDS_FETCH: function handleProgramRewardsFetch() {
    networkTtlCache.setLoading();
  },
  PROGRAM_REWARDS_FETCH_SUCCESS: function handleProgramRewardsFetchSuccess(programRewards) {
    let msUntilReward;
    let state;
    programRewards = programRewards.programRewards;
    map = undefined;
    if (networkTtlCache.isLoading()) {
      let tmp8;
      const _Map = Map;
      let self = this;
      let self2 = this;
      map = new Map();
      const item = programRewards.forEach((reward_program) => {
        const result = map.set(reward_program.reward_program, reward_program);
      });
      networkTtlCache.setValue(map);
      ({ state, msUntilReward } = getCacheTtlState());
      const setTtl = networkTtlCache.setTtl;
      getCacheTtlState();
      if (closure_8.LESS_THAN_24H_BEFORE_REWARD === state) {
        let tmp9 = null;
        if (msUntilReward == null) {
          msUntilReward = c6;
        }
        tmp8 = msUntilReward;
      } else {
        if (closure_8.MORE_THAN_24H_BEFORE_REWARD !== state) {
          const PAST_REWARD_DATE = closure_8.PAST_REWARD_DATE;
        }
        tmp8 = c6;
      }
      setTtl(tmp8);
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
};
const programRewardsStore = new ProgramRewardsStore(DispatcherDefault, obj2);
let result = size.fileFinishedImporting("modules/rewards/ProgramRewardsStore.tsx");

export default programRewardsStore;
export { DidNotFetchReason };
