// discord_app/modules/games/hooks/useGame.tsx
import setDefault from "../../../utils/Durations.tsx";
import closure_3 from "../../../../_runtime/00019_noop.js";
import importDefaultResult1 from "../GameStore.tsx";
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import importDefaultResult from "../../../../_runtime/00005_asyncGeneratorStep.js";
import { initialize } from "../../../../discord_common/js/packages/flux/index.tsx";

const require = arg1;
initialize = {
  getQueryId: require("ME").QueryIds.GAME,
  failureStaleAfter: 15 * setDefault.Seconds.SECOND,
  get(closure_0) {
    if (null == closure_0) {
      return null;
    } else {
      if (importDefaultResult1.hasNoData(closure_0)) {
        let NO_DATA = initialize.NO_DATA;
      } else {
        NO_DATA = obj.getGame(closure_0);
        if (NO_DATA == null) {
          NO_DATA = null;
        }
      }
      obj = importDefaultResult1;
    }
  },
  load: null,
  getIsLoading: null,
  getError: null
};
let closure_2 = importDefaultResult((arg0) => {
  closure_0 = arg0;
  c2 = 0;
  c1 = 0;
  return (function*(arg0) {
    if (table === 2) {
      table = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        table = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            table = 3;
            throw arg1;
          } else if (arg0 === 2) {
            table = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else if (null != callback) {
            obj1 = callback(table[6]);
            const items = [tmp5];
            c2 = 1;
            table = 1;
            obj1 = { value: null, done: false };
            obj1[0] = obj1.fetchGamesWithSupplementalData(items);
            return obj1;
          }
        } else if (arg0 === 1) {
          table = 3;
          throw arg1;
        } else if (arg0 === 2) {
          table = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        }
        table = 3;
        return { value: "HermesInternal", done: "HermesInternal" };
      } catch (tmp9) {
        table = tmp;
        throw tmp9;
      }
    }
  })();
});
initialize[3] = function() {
  const self = this;
  const apply = closure_2.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
initialize[4] = function getIsLoading(arg0) {
  let isFetchingResult = null != arg0;
  if (isFetchingResult) {
    isFetchingResult = importDefaultResult1.isFetching(arg0);
  }
  return isFetchingResult;
};
initialize[5] = function getError(closure_0) {
  error = null;
  if (null != closure_0) {
    error = null;
    if (importDefaultResult1.didFetchingFail(closure_0)) {
      const _Error = Error;
      error = new Error("Failed to fetch game data");
    }
  }
  return error;
};
const fetchStore = initialize.createFetchStore(importDefaultResult1, initialize);
const result = require("set").fileFinishedImporting("modules/games/hooks/useGame.tsx");

export const useGame = fetchStore;
export const useGames = function useGames(memo) {
  closure_0 = memo;
  let items = [memo];
  const effect = React.useEffect(() => {
    let items = [
      ...closure_0.map((arg0) => {
        const items = [arg0];
        return items;
      })
    ];
    closure_1_5.fetchMany.apply(items);
  }, items);
};