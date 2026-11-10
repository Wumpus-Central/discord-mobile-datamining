// === Module 7547: useGame ===

// Module 7547 (useGame)
import DurationsDefault from "Durations" /* 1089 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import GameStore from "GameStore" /* 2138 */;

const require = fn;
const initialize = fn(504);
const obj2 = {
  getQueryId: fn(1072).QueryIds.GAME,
  failureStaleAfter: 15 * DurationsDefault.Seconds.SECOND,
  get(nextResult) {
    if (null == nextResult) {
      return null;
    } else if (GameStore.hasNoData(nextResult)) {
      let NO_DATA = require("initialize").NO_DATA;
    } else {
      NO_DATA = GameStore.getGame(nextResult);
      if (NO_DATA == null) {
        NO_DATA = null;
      }
    }
  },
  load: null,
  getIsLoading: null,
  getError: null
};
let closure_2 = asyncGeneratorStep(async (arg0) => {
  if (1 === tmp5) {
    if (arg0 === 1) {
      c5 = 3;
      throw value;
    } else if (arg0 === 2) {
      c5 = 3;
      return { value, done: true };
    } else if (null != closure_130_0) {
      items = [closure_130_0];
      c4 = 2;
      c5 = 1;
      return { value: closure_131_0(closure_131_1[6]).fetchGamesWithSupplementalData(items, closure_130_1), done: false };
    }
  } else if (arg0 === 1) {
    c5 = 3;
    throw value;
  } else if (arg0 === 2) {
    c5 = 3;
    return { value, done: true };
  }
  await "HermesInternal";
  closure_2 = tmp2;
  closure_130_0 = closure_0;
  let flag = closure_1;
  if (closure_1 === undefined) {
    flag = false;
  }
  closure_130_1 = flag;
  return "flexDirection";
});
obj2.load = function load() {
  const self = this;
  const apply = closure_2.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
obj2.getIsLoading = function getIsLoading(arg0) {
  let isFetchingResult = null != arg0;
  if (isFetchingResult) {
    isFetchingResult = GameStore.isFetching(arg0);
  }
  return isFetchingResult;
};
obj2.getError = function getError(nextResult) {
  let error = null;
  if (null != nextResult) {
    error = null;
    if (GameStore.didFetchingFail(nextResult)) {
      const _Error = Error;
      error = new Error("Failed to fetch game data");
    }
  }
  return error;
};
const fetchStore = initialize.createFetchStore(GameStore, obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/games/hooks/useGame.tsx");

export const useGame = fetchStore;
export function useGames(memo) {
  items = [memo];
  const effect = noop.useEffect(() => {
    items = [
      ...closure_0.map((item) => {
        items = [item];
        return items;
      })
    ];
    fetchStore.fetchMany.apply(items);
  }, items);
}