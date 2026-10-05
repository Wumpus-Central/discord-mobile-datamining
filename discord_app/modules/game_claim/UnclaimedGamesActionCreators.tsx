// discord_app/modules/game_claim/UnclaimedGamesActionCreators.tsx
import BackoffDefault from "../../../discord_common/js/packages/backoff/Backoff.tsx";
import Constants from "../../Constants.tsx";
import DurationsDefault from "../../utils/Durations.tsx";
import HTTPUtils from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import _asyncToGenerator from "../../../_runtime/metro/00005__asyncToGenerator.js";
import UnclaimedGamesStore from "UnclaimedGamesStore.tsx";
import get_initialized from "../../../discord_common/js/packages/flux/index.tsx";
import ReactCompilerGating_mod from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

let c2, c3;

function fetchUnclaimedGames() {
  return obj(...arguments);
}
let obj = function _fetchUnclaimedGames() {
  obj = _asyncToGenerator(async () => {
    if (c3 === 2) {
      c3 = 3;
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
      try {
        let body;
        c3 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_1 = tmp;
            let closure_0 = tmp4;
            body = undefined;
            const HTTP = HTTPUtils.HTTP;
            const obj4 = { url: constants.UNCLAIMED_GAMES, oldFormErrors: true, rejectWithError: false };
            c2 = 1;
            c3 = 1;
            const obj5 = { value: HTTP.get(obj4), done: false };
            return obj5;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          body = value.body;
          const obj7 = { type: "UNCLAIMED_GAMES_FETCH_SUCCESS", guildIdToGameIds: body };
          obj = closure_129_1(closure_129_2[4]);
          obj.dispatch(obj7);
          c3 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp14) {
        c3 = 3;
        throw tmp14;
      }
    }
  });
  return obj(...arguments);
};
const Endpoints = Constants.Endpoints;
let closure_6 = [];
obj = {
  getQueryId(arg0) {
    let str = null;
    if (arg0) {
      str = "unclaimed-games";
    }
    return str;
  },
  get() {
    return UnclaimedGamesStore.getMap();
  },
  load() {
    return fetchUnclaimedGames();
  },
  staleAfter: DurationsDefault.Seconds.DAY,
  retryConfig: {
    backoff() {
      const tmp = BackoffDefault;
      const tmp2 = new tmp(5 * DurationsDefault.Millis.MINUTE);
      return tmp2;
    },
    maxRetries: 10,
  },
};
const fetchStore = get_initialized.createFetchStore(UnclaimedGamesStore, obj);
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1) => {
      const tmp2 = undefined === arg1 || arg1;
      const data = fetchStore(tmp2).data;
      let tmp3;
      if (data != null) {
        tmp3 = data[arg0];
      }
      if (tmp3 == null) {
        tmp3 = closure_6;
      }
      return tmp3;
    }
  : (arg0) => {
      let flag = arg1;
      if (arg1 === undefined) {
        flag = true;
      }
      const data = fetchStore(flag).data;
      let tmp;
      if (data != null) {
        tmp = data[arg0];
      }
      if (tmp == null) {
        tmp = closure_6;
      }
      return tmp;
    };
let closure_10 = tmp4;
ReactCompilerGating = ReactCompilerGating_mod;
const tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1) => {
      const tmp2 = undefined === arg1 || arg1;
      return closure_10(arg0, tmp2).length > 0;
    }
  : (arg0) => {
      let flag = arg1;
      if (arg1 === undefined) {
        flag = true;
      }
      return closure_10(arg0, flag).length > 0;
    };
const result = size.fileFinishedImporting("modules/game_claim/UnclaimedGamesActionCreators.tsx");

export default { fetch: fetchUnclaimedGames };
export { fetchUnclaimedGames };
export const useUnclaimedGames = fetchStore;
export const useUnclaimedGameIdsForGuild = tmp4;
export const useHasUnclaimedGames = tmp5;
