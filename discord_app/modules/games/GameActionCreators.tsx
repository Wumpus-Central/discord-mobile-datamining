// === Module 7310: GameActionCreators ===

// Module 7310 (GameActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import GameStore from "GameStore" /* 1916 */;

function requestGames() {
  const self = this;
  const apply = closure_7.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_7 = async function _requestGames() {
  c4 = 0;
  c5 = 0;
  c3 = 0;
  return (async (arg0) => {
    closure_2 = tmp3;
    closure_129_0 = game_ids;
    const HTTP = closure_2_0(dependencyMap[3]).HTTP;
    const request = { url: constants.GAMES, query: { game_ids }, rejectWithError: true };
    await HTTP.get(request);
    if (1 === tmp7) {
      c3 = 0;
      closure_130_1(closure_130_2[4]);
      const obj3 = { type: "GAME_FETCH_FAILURE", gameIds: closure_129_0 };
      obj3.dispatch(obj3);
      c5 = 3;
    } else if (arg0 === 1) {
      c5 = 3;
      throw value;
    } else if (arg0 !== 2) {
      const body = value.body;
      closure_130_1(closure_130_2[4]).dispatch({ type: "GAME_FETCH_SUCCESS", gameIds: closure_129_0, games: body });
      c3 = 0;
      closure_130_1(closure_130_2[4]);
    }
    return value;
  })();
};
let closure_9 = async function _fetchGamesWithSupplementalData(arg0) {
  if (c1 === 2) {
    c1 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c1 = 2;
      if (0 === c2) {
        if (arg0 === 1) {
          c1 = 3;
          throw value;
        } else if (arg0 === 2) {
          c1 = 3;
          obj = { value, done: true };
          return obj;
        } else if (0 !== length.length) {
          c2 = 1;
          c1 = 1;
          const obj1 = { value: batchInvocationManager.queue(tmp5), done: false };
          return obj1;
        }
      } else if (arg0 === 1) {
        c1 = 3;
        throw value;
      } else if (arg0 === 2) {
        c1 = 3;
        obj = { value, done: true };
        return obj;
      }
      c1 = 3;
      return { value: "HermesInternal", done: null };
    } catch (tmp7) {
      c1 = tmp;
      throw tmp7;
    }
  }
};
const Endpoints = fn(1074).Endpoints;
let closure_0 = asyncGeneratorStep(async (arg0) => {
  if (v3 === 2) {
    v3 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      v3 = 2;
      if (0 === dependencyMap) {
        if (arg0 === 1) {
          v3 = 3;
          throw value;
        } else if (arg0 === 2) {
          v3 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          let obj1 = v3(dependencyMap[6]);
          dependencyMap = 1;
          v3 = 1;
          obj1 = { value: null, done: false };
          obj1.value = Promise.all(obj1.chunk(closure_0, 20).map(requestGames));
          return obj1;
        }
      } else if (arg0 === 1) {
        v3 = 3;
        throw value;
      } else if (arg0 === 2) {
        v3 = 3;
        obj = { value, done: true };
        return obj;
      } else {
        v3 = 3;
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp10) {
      v3 = tmp;
      throw tmp10;
    }
  }
});
const batchInvocationManager = new fn(4447).BatchInvocationManager(function() {
  const self = this;
  const apply = closure_0.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}, {
  predicate(item) {
    return !GameStore.hasNoData(item);
  },
  onQueued(gameIds) {
    const obj = { type: "GAME_FETCH", gameIds };
    return obj.dispatch(obj);
  },
  onCancelled(gameIds) {
    const obj = { type: "GAME_FETCH_CANCELLED", gameIds };
    return obj.dispatch(obj);
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/games/GameActionCreators.tsx");

export const fetchGamesWithSupplementalData = function fetchGamesWithSupplementalData() {
  const self = this;
  const apply = closure_9.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};