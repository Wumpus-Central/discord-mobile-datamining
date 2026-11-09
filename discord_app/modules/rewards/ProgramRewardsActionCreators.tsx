// discord_app/modules/rewards/ProgramRewardsActionCreators.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import HTTPUtils from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import ProgramRewardsUtils from "ProgramRewardsUtils.tsx";
import getShouldFetchProgramRewards from "getShouldFetchProgramRewards.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import ProgramRewardsStore from "ProgramRewardsStore.tsx";

require = fn;
function fetchProgramRewards() {
  const self = this;
  const apply = closure_7.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_7 = async function _fetchProgramRewards() {
  closure_2 = tmp3;
  DispatcherDefault.dispatch({ type: "PROGRAM_REWARDS_FETCH" });
  const HTTP = HTTPUtils.HTTP;
  await HTTP.get({ url: constants.PROGRAM_REWARDS, rejectWithError: true });
  if (1 === tmp7) {
    c4 = 0;
    closure_130_1(closure_130_2[3]).dispatch({ type: "PROGRAM_REWARDS_FETCH_FAILURE" });
    c6 = 3;
    closure_130_1(closure_130_2[3]);
  } else if (arg0 === 1) {
    c6 = 3;
    throw value;
  } else if (arg0 !== 2) {
    const rewards = value.body.rewards;
    closure_0 = rewards;
    if (rewards == null) {
      closure_0 = [];
    }
    closure_129_0 = closure_0;
    closure_130_1(closure_130_2[3]).dispatch({ type: "PROGRAM_REWARDS_FETCH_SUCCESS", programRewards: closure_129_0 });
    c4 = 0;
    closure_130_1(closure_130_2[3]);
  }
  return value;
};
let closure_8 = async function _conditionallyFetchProgramRewards() {
  if (c0 === 2) {
    c0 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj3 = { value, done: true };
      return obj3;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c0 = 2;
      if (0 === c1) {
        if (arg0 === 1) {
          c0 = 3;
          throw value;
        } else if (arg0 === 2) {
          c0 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          if (obj2.shouldFetchProgramRewards()) {
            c1 = 1;
            c0 = 1;
            const obj5 = { value: fetchProgramRewards(), done: false };
            return obj5;
          }
          obj2 = getShouldFetchProgramRewards;
        }
      } else if (arg0 === 1) {
        c0 = 3;
        throw value;
      } else if (arg0 === 2) {
        c0 = 3;
        const obj = { value, done: true };
        return obj;
      }
      c0 = 3;
      return { value: "HermesInternal", done: null };
    } catch (tmp8) {
      c0 = tmp;
      throw tmp8;
    }
  }
};
let closure_9 = async function _conditionallyFetchProgramRewardsIgnoreCacheTTL() {
  if (c0 === 2) {
    c0 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj3 = { value, done: true };
      return obj3;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c0 = 2;
      if (0 === c1) {
        if (arg0 === 1) {
          c0 = 3;
          throw value;
        } else if (arg0 === 2) {
          c0 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          let result = ProgramRewardsUtils.canFetchAnyProgramReward();
          if (result) {
            result = !fetching.isFetching();
          }
          if (result) {
            c1 = 1;
            c0 = 1;
            const obj5 = { value: fetchProgramRewards(), done: false };
            return obj5;
          }
        }
      } else if (arg0 === 1) {
        c0 = 3;
        throw value;
      } else if (arg0 === 2) {
        c0 = 3;
        const obj = { value, done: true };
        return obj;
      }
      c0 = 3;
      return { value: "HermesInternal", done: null };
    } catch (tmp10) {
      c0 = tmp;
      throw tmp10;
    }
  }
};
const Endpoints = fn(1072).Endpoints;
const size = fn(2);
let result = size.fileFinishedImporting("modules/rewards/ProgramRewardsActionCreators.tsx");

export default function conditionallyFetchProgramRewards() {
  const self = this;
  const apply = closure_8.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
export { fetchProgramRewards };
export function conditionallyFetchProgramRewardsIgnoreCacheTTL() {
  const self = this;
  const apply = closure_9.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
