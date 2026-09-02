// discord_app/modules/games/GameActionCreators.tsx
import dispatcherDefault from "../../Dispatcher.tsx";
import importDefaultResult from "../../../_runtime/00005_asyncGeneratorStep.js";
import closure_4 from "GameStore.tsx";
import { Endpoints } from "../../Constants.tsx";

let closure_0 = arg1;
function requestGames() {
  const self = this;
  const apply = _requestGames.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _requestGames() {
  const self = this;
  const tmp = importDefaultResult((arg0) => {
    closure_0 = arg0;
    c4 = 0;
    c5 = 0;
    c3 = 0;
    return (function* (arg0, body) {
      dependencyMap = tmp3;
      c3 = 1;
      const HTTP = callback(closure_1_2[3]).HTTP;
      obj1 = { url: null, query: null, rejectWithError: true };
      obj1[0] = constants.GAMES;
      const obj2 = { game_ids: null };
      obj2[0] = callback;
      obj1[1] = obj2;
      yield HTTP.get(obj1);
      if (1 === tmp7) {
        c3 = 0;
        const obj3 = body(706);
        const obj4 = { type: "GAME_FETCH_FAILURE", gameIds: null };
        obj4[1] = callback;
        obj3.dispatch(obj4);
        constants = 3;
      } else if (arg0 === 1) {
        constants = 3;
        throw body;
      } else if (arg0 !== 2) {
        body = body.body;
        const obj = body(706);
        const obj5 = { type: "GAME_FETCH_SUCCESS", gameIds: null, games: null };
        obj5[1] = callback;
        obj5[2] = body;
        obj.dispatch(obj5);
        c3 = 0;
      }
      c3 = 0;
      return body;
    })();
  });
  closure_7 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _fetchGamesWithSupplementalData() {
  const self = this;
  const tmp = importDefaultResult((arg0) => {
    closure_0 = arg0;
    c2 = 0;
    c1 = 0;
    return (function* (arg0) {
      if (c1 === 2) {
        c1 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
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
              throw arg1;
            } else if (arg0 === 2) {
              c1 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else if (0 !== length.length) {
              c2 = 1;
              c1 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = closure_1_8.queue(tmp5);
              return obj1;
            }
          } else if (arg0 === 1) {
            c1 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c1 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
          c1 = 3;
          return { value: "HermesInternal", done: null };
        } catch (tmp7) {
          c1 = tmp;
          throw tmp7;
        }
      }
    })();
  });
  closure_9 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let c3 = importDefaultResult;
closure_0 = undefined;
closure_0 = importDefaultResult((arg0) => {
  closure_0 = arg0;
  c2 = 0;
  c1 = 0;
  return (function* (arg0) {
    if (v0 === 2) {
      v0 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        v0 = 2;
        if (0 === table) {
          if (arg0 === 1) {
            v0 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            v0 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            obj1 = v0(table[6]);
            table = 1;
            v0 = 1;
            obj1 = { value: null, done: false };
            obj1[0] = Promise.all(obj1.chunk(closure_0, 20).map(closure_1_6));
            return obj1;
          }
        } else if (arg0 === 1) {
          v0 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          v0 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          v0 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp10) {
        v0 = tmp;
        throw tmp10;
      }
    }
  })();
});
const batchInvocationManager = new require("start").BatchInvocationManager(
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
    predicate(closure_0) {
      return !closure_4.hasNoData(closure_0);
    },
    onQueued(gameIds) {
      let obj = dispatcherDefault;
      obj = { type: "GAME_FETCH", gameIds };
      return obj.dispatch(obj);
    },
    onCancelled(gameIds) {
      let obj = dispatcherDefault;
      obj = { type: "GAME_FETCH_CANCELLED", gameIds };
      return obj.dispatch(obj);
    },
  },
);
const result = require("set").fileFinishedImporting("modules/games/GameActionCreators.tsx");

export const fetchGamesWithSupplementalData = function fetchGamesWithSupplementalData(items) {
  const self = this;
  const apply = _fetchGamesWithSupplementalData.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
