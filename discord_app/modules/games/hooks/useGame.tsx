// === Module 7309: useGame ===

// Module 7309 (useGame)
import DurationsDefault from "Durations" /* 1090 */;
import GameActionCreators from "GameActionCreators" /* 7310 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import GameStore from "GameStore" /* 1916 */;

require = fn;
fn(504);
const initialize = {
  getQueryId: fn(1074).QueryIds.GAME,
  failureStaleAfter: 15 * DurationsDefault.Seconds.SECOND,
  get(gameId) {
    if (null == gameId) {
      return null;
    } else {
      if (GameStore.hasNoData(gameId)) {
        let NO_DATA = require("initialize").NO_DATA;
      } else {
        NO_DATA = obj.getGame(gameId);
        if (NO_DATA == null) {
          NO_DATA = null;
        }
      }
      obj = GameStore;
    }
  },
  load: null,
  getIsLoading: null,
  getError: null
};
let closure_2 = asyncGeneratorStep(async (arg0, value) => {
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
        } else if (null != closure_0) {
          let obj1 = GameActionCreators;
          const items = [tmp5];
          c2 = 1;
          c1 = 1;
          obj1 = { value: null, done: false };
          obj1.value = obj1.fetchGamesWithSupplementalData(items);
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
    } catch (tmp9) {
      c1 = tmp;
      throw tmp9;
    }
  }
});
initialize.load = function() {
  const self = this;
  const apply = closure_2.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
initialize.getIsLoading = function getIsLoading(arg0) {
  let isFetchingResult = null != arg0;
  if (isFetchingResult) {
    isFetchingResult = GameStore.isFetching(arg0);
  }
  return isFetchingResult;
};
initialize.getError = function getError(item) {
  let error = null;
  if (null != item) {
    error = null;
    if (GameStore.didFetchingFail(item)) {
      const _Error = Error;
      error = new Error("Failed to fetch game data");
    }
  }
  return error;
};
const fetchStore = initialize.createFetchStore(GameStore, initialize);
const size = fn(2);
const result = size.fileFinishedImporting("modules/games/hooks/useGame.tsx");

export const useGame = fetchStore;
export const useGames = function useGames(memo) {
  let items = [memo];
  const effect = noop.useEffect(() => {
    let items = [
      ...closure_0.map((item) => {
        const items = [item];
        return items;
      })
    ];
    fetchStore.fetchMany.apply(items);
  }, items);
};