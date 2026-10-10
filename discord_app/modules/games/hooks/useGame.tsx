// discord_app/modules/games/hooks/useGame.tsx
import DurationsDefault from "../../../utils/Durations.tsx";
import GameActionCreators from "../GameActionCreators.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../_runtime/metro/00019__.js";
import GameStore from "../GameStore.tsx";

const require = globalThis.__r;

require = fn;
const initialize = fn(504);
const obj2 = {
  getQueryId: fn(1085).QueryIds.GAME,
  failureStaleAfter: 15 * DurationsDefault.Seconds.SECOND,
  get(gameId) {
    if (null == gameId) {
      return null;
    } else if (GameStore.hasNoData(gameId)) {
      let NO_DATA = require("initialize").NO_DATA;
    } else {
      NO_DATA = GameStore.getGame(gameId);
      if (NO_DATA == null) {
        NO_DATA = null;
      }
    }
  },
  load: null,
  getIsLoading: null,
  getError: null,
};
let closure_2 = asyncGeneratorStep(async (arg0) => {
  if (c1 === 2) {
    c1 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj3 = { value, done: true };
      return obj3;
    } else {
      return { value: "IconComponent", done: "+51" };
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
          const obj4 = { value, done: true };
          return obj4;
        } else if (null != closure_0) {
          const items = [tmp5];
          c2 = 1;
          c1 = 1;
          const obj5 = { value: GameActionCreators.fetchGamesWithSupplementalData(items), done: false };
          return obj5;
        }
      } else if (arg0 === 1) {
        c1 = 3;
        throw value;
      } else if (arg0 === 2) {
        c1 = 3;
        const obj = { value, done: true };
        return obj;
      }
      c1 = 3;
      return { value: "IconComponent", done: "+51" };
    } catch (tmp9) {
      c1 = tmp;
      throw tmp9;
    }
  }
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
obj2.getError = function getError(item) {
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
const fetchStore = initialize.createFetchStore(GameStore, obj2);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/games/hooks/useGame.tsx");

export const useGame = fetchStore;
export const useGames = ReactCompilerGating.isReactCompilerEnabled()
  ? function useGames(arg0) {
      _require = arg0;
      const cResult = require("c").c(3);
      if (cResult[0] !== arg0) {
        const fn = function l() {
          let items = [
            ...closure_0.map((item) => {
              const items = [item];
              return items;
            }),
          ];
          fetchStore.fetchMany.apply(items);
        };
        let items = [arg0];
        cResult[0] = arg0;
        cResult[1] = fn;
        cResult[2] = items;
        let tmp3 = items;
        let tmp2 = fn;
      } else {
        tmp2 = cResult[1];
        tmp3 = cResult[2];
      }
      const effect = noop.useEffect(tmp2, tmp3);
    }
  : function useGames(arg0) {
      closure_0 = arg0;
      let items = [arg0];
      const effect = noop.useEffect(() => {
        let items = [
          ...closure_0.map((item) => {
            const items = [item];
            return items;
          }),
        ];
        fetchStore.fetchMany.apply(items);
      }, items);
    };
