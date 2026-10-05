// discord_app/modules/games/hooks/useGame.tsx
import Constants from "../../../Constants.tsx";
import DurationsDefault from "../../../utils/Durations.tsx";
import GameActionCreators from "../GameActionCreators.tsx";
import _asyncToGenerator from "../../../../_runtime/metro/00005__asyncToGenerator.js";
import react from "../../../../_runtime/00019_react.js";
import GameStore from "../GameStore.tsx";
import get_initialized from "../../../../discord_common/js/packages/flux/index.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, c1, c2;

const QueryIds = Constants.QueryIds;
let obj = {
  getQueryId: QueryIds.GAME,
  failureStaleAfter: 15 * DurationsDefault.Seconds.SECOND,
  get(gameId) {
    let tmp = null;
    if (null != gameId) {
      let NO_DATA;
      if (GameStore.hasNoData(gameId)) {
        NO_DATA = require("get initialized").NO_DATA;
      } else {
        NO_DATA = GameStore.getGame(gameId);
        if (NO_DATA == null) {
          NO_DATA = null;
        }
      }
      tmp = NO_DATA;
    }
    return tmp;
  },
  load: function () {
    return closure_2(...arguments);
  },
  getIsLoading(arg0) {
    const isFetchingResult = null != arg0 && GameStore.isFetching(arg0);
    return isFetchingResult;
  },
  getError(item) {
    let error = null;
    if (null != item) {
      error = null;
      if (GameStore.didFetchingFail(item)) {
        const _Error = Error;
        const self = this;
        const self2 = this;
        error = new Error("Failed to fetch game data");
      }
    }
    return error;
  },
};
const createFetchStore = get_initialized.createFetchStore;
let closure_2 = _asyncToGenerator(async (arg0) => {
  let obj2;
  let closure_0 = arg0;
  if (c1 === 2) {
    c1 = 3;
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
          const items = [tmp4];
          c2 = 1;
          c1 = 1;
          const obj5 = { value: obj2.fetchGamesWithSupplementalData(items), done: false };
          obj2 = GameActionCreators;
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
      return { value: "IconComponent", done: null };
    } catch (tmp8) {
      c1 = 3;
      throw tmp8;
    }
  }
});
const fetchStore = createFetchStore(GameStore, obj);
const tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let tmp2;
      let tmp3;
      _require = arg0;
      const obj = require("react");
      const cResult = obj.c(3);
      if (cResult[0] !== arg0) {
        const fn = function n() {
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
        tmp3 = items;
        tmp2 = fn;
      } else {
        tmp2 = cResult[1];
        tmp3 = cResult[2];
      }
      const effect = react.useEffect(tmp2, tmp3);
    }
  : (arg0) => {
      let closure_0 = arg0;
      let items = [arg0];
      const effect = react.useEffect(() => {
        let items = [
          ...closure_0.map((item) => {
            const items = [item];
            return items;
          }),
        ];
        fetchStore.fetchMany.apply(items);
      }, items);
    };
const result = size.fileFinishedImporting("modules/games/hooks/useGame.tsx");

export const useGame = fetchStore;
export const useGames = tmp6;
