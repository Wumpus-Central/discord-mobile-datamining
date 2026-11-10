// discord_app/modules/games/GameActionCreators.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import GameStore from "GameStore.tsx";

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
      closure_130_1(closure_130_2[4]).dispatch({ type: "GAME_FETCH_FAILURE", gameIds: closure_129_0 });
      c5 = 3;
      closure_130_1(closure_130_2[4]);
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
  if (1 === tmp4) {
    if (arg0 === 1) {
      c5 = 3;
      throw value;
    } else if (arg0 === 2) {
      c5 = 3;
      return { value, done: true };
    } else if (0 !== closure_130_0.length) {
      if (closure_130_1) {
        closure_131_1(closure_131_2[4]).dispatch({ type: "GAME_FETCH", gameIds: closure_130_0, force: closure_130_1 });
        closure_131_1(closure_131_2[4]);
      }
      c4 = 2;
      c5 = 1;
      return { value: closure_131_8.queue(closure_130_0), done: false };
    }
  } else if (arg0 === 1) {
    c5 = 3;
    throw value;
  } else if (arg0 === 2) {
    c5 = 3;
    return { value, done: true };
  }
  await "HermesInternal";
  closure_130_0 = closure_0;
  let flag = closure_1;
  if (closure_1 === undefined) {
    flag = false;
  }
  closure_130_1 = flag;
  return "flexDirection";
};
const Endpoints = fn(1072).Endpoints;
let closure_0 = asyncGeneratorStep(async (arg0) => {
  if (v3 === 2) {
    v3 = 3;
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
      v3 = 2;
      if (0 === dependencyMap) {
        if (arg0 === 1) {
          v3 = 3;
          throw value;
        } else if (arg0 === 2) {
          v3 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          const obj2 = v3(dependencyMap[6]);
          dependencyMap = 1;
          v3 = 1;
          const obj5 = { value: Promise.all(v3(dependencyMap[6]).chunk(closure_0, 20).map(requestGames)), done: false };
          return obj5;
        }
      } else if (arg0 === 1) {
        v3 = 3;
        throw value;
      } else if (arg0 === 2) {
        v3 = 3;
        const obj = { value, done: true };
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
const batchInvocationManager = new fn(4986).BatchInvocationManager(
  function () {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  },
  {
    predicate(nextResult) {
      return !GameStore.hasNoData(nextResult);
    },
    onQueued(gameIds) {
      return DispatcherDefault.dispatch({ type: "GAME_FETCH", gameIds });
    },
    onCancelled(gameIds) {
      return DispatcherDefault.dispatch({ type: "GAME_FETCH_CANCELLED", gameIds });
    },
  },
);
const size = fn(2);
const result = size.fileFinishedImporting("modules/games/GameActionCreators.tsx");

export function fetchGamesWithSupplementalData() {
  const self = this;
  const apply = closure_9.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
