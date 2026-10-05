// === Module 6813: GameActionCreators ===

// Module 6813 (GameActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import HTTPUtils from "HTTPUtils" /* 1282 */;
import Timers from "Timers" /* 2046 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import GameStore from "GameStore" /* 2007 */;
import size from "module_2" /* 2 */;

let c4, c5;

function requestGames() {
  return obj(...arguments);
}
let obj = function _requestGames() {
  obj = _asyncToGenerator(async (arg0) => {
    let closure_0;
    let obj5;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c3;
      try {
        let body;
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_2 = tmp;
            let closure_1 = tmp4;
            body = undefined;
            c3 = 1;
            const HTTP = HTTPUtils.HTTP;
            const request = { url: constants.GAMES, query: obj5, rejectWithError: true };
            obj5 = { game_ids: gameIds };
            c4 = 2;
            c5 = 1;
            const obj6 = { value: HTTP.get(request), done: false };
            return obj6;
          }
        } else {
          if (1 === c4) {
            c3 = 0;
            const obj7 = { type: "GAME_FETCH_FAILURE", gameIds };
            const obj4 = closure_130_1(closure_130_2[4]);
            obj4.dispatch(obj7);
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj8 = { value, done: true };
            return obj8;
          } else {
            body = value.body;
            const obj9 = { type: "GAME_FETCH_SUCCESS", gameIds, games: body };
            obj = closure_130_1(closure_130_2[4]);
            obj.dispatch(obj9);
            c3 = 0;
          }
          c5 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp18) {
        if (0 === c3) {
          c5 = 3;
          throw tmp18;
        } else {
          c4 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
obj = function _fetchGamesWithSupplementalData() {
  obj = _asyncToGenerator(async (arg0) => {
    const length = arg0;
    let c2 = 0;
    let c1 = 0;
    return (async (arg0) => {
      if (c1 === 2) {
        c1 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
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
              return { value, done: true };
            } else if (0 !== length.length) {
              c2 = 1;
              c1 = 1;
              const obj4 = { value: batchInvocationManager.queue(tmp4), done: false };
              return obj4;
            }
          } else if (arg0 === 1) {
            c1 = 3;
            throw value;
          } else if (arg0 === 2) {
            c1 = 3;
            return { value, done: true };
          }
          c1 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp6) {
          c1 = 3;
          throw tmp6;
        }
      }
    })();
  });
  return obj(...arguments);
};
const Endpoints = Constants.Endpoints;
const BatchInvocationManager = Timers.BatchInvocationManager;
let closure_0 = _asyncToGenerator(async (arg0) => {
  let chunkResult;
  let v3;
  closure_0 = arg0;
  if (v3 === 2) {
    v3 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp2 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj3 = { value, done: true };
      return obj3;
    } else {
      return { value: "IconComponent", done: null };
    }
  } else {
    try {
      v3 = 2;
      if (0 === c2) {
        if (arg0 === 1) {
          v3 = 3;
          throw value;
        } else if (arg0 === 2) {
          v3 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          const obj2 = v3(c2[6]);
          c2 = 1;
          v3 = 1;
          const obj5 = { value: all(chunkResult.map(requestGames)), done: false };
          chunkResult = obj2.chunk(closure_0, 20);
          return obj5;
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
        return { value: "IconComponent", done: null };
      }
    } catch (tmp9) {
      v3 = 3;
      throw tmp9;
    }
  }
});
obj = {
  predicate(item) {
    return !GameStore.hasNoData(item);
  },
  onQueued(gameIds) {
    obj = DispatcherDefault;
    const obj2 = { type: "GAME_FETCH", gameIds };
    return obj.dispatch(obj2);
  },
  onCancelled(gameIds) {
    obj = DispatcherDefault;
    const obj2 = { type: "GAME_FETCH_CANCELLED", gameIds };
    return obj.dispatch(obj2);
  }
};
const batchInvocationManager = new BatchInvocationManager(function() {
  return closure_0(...arguments);
}, obj);
const result = size.fileFinishedImporting("modules/games/GameActionCreators.tsx");

export const fetchGamesWithSupplementalData = function fetchGamesWithSupplementalData() {
  return obj(...arguments);
};