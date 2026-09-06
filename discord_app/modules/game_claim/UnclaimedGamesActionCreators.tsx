// === Module 16192: UnclaimedGamesActionCreators ===

// Module 16192 (UnclaimedGamesActionCreators)
import BackoffDefault from "Backoff" /* 559 */;
import DurationsDefault from "Durations" /* 1090 */;
import HTTPUtils from "HTTPUtils" /* 1272 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import UnclaimedGamesStore from "UnclaimedGamesStore" /* 16193 */;

require = fn;
function fetchUnclaimedGames() {
  const self = this;
  const apply = closure_8.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_8 = async function _fetchUnclaimedGames(arg0, value) {
  if (c3 === 2) {
    c3 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
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
      c3 = 2;
      if (0 === c2) {
        if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_1 = tmp2;
          closure_0 = tmp5;
          let body;
          const HTTP = HTTPUtils.HTTP;
          const obj1 = { url: constants.UNCLAIMED_GAMES, oldFormErrors: true, rejectWithError: false };
          c2 = 1;
          c3 = 1;
          const obj2 = { value: HTTP.get(obj1), done: false };
          return obj2;
        }
      } else if (arg0 === 1) {
        c3 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 3;
        const obj3 = { value, done: true };
        return obj3;
      } else {
        body = value.body;
        obj = closure_129_1(closure_129_2[4]);
        const obj4 = { type: "UNCLAIMED_GAMES_FETCH_SUCCESS", guildIdToGameIds: body };
        obj.dispatch(obj4);
        c3 = 3;
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp15) {
      c3 = tmp;
      throw tmp15;
    }
  }
};
const Endpoints = fn(1074).Endpoints;
let closure_6 = [];
fn(504);
const initialize = {
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
      let tmp = BackoffDefault;
      tmp = new tmp(5 * DurationsDefault.Millis.MINUTE);
      return tmp;
    },
    maxRetries: 10
  }
};
const fetchStore = initialize.createFetchStore(UnclaimedGamesStore, initialize);
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_claim/UnclaimedGamesActionCreators.tsx");

export default { fetch: fetchUnclaimedGames };
export { fetchUnclaimedGames };
export const useUnclaimedGames = fetchStore;
export const useUnclaimedGameIdsForGuild = function useUnclaimedGameIdsForGuild(id) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = true;
  }
  const data = fetchStore(flag).data;
  let tmp;
  if (data != null) {
    tmp = data[id];
  }
  if (tmp == null) {
    tmp = closure_6;
  }
  return tmp;
};
export const useHasUnclaimedGames = function useHasUnclaimedGames(id, gameClaimCoachmarkEnabled) {
  let flag = gameClaimCoachmarkEnabled;
  if (gameClaimCoachmarkEnabled === undefined) {
    flag = true;
  }
  if (flag === undefined) {
    flag = true;
  }
  const data = fetchStore(flag).data;
  let tmp;
  if (data != null) {
    tmp = data[id];
  }
  if (tmp == null) {
    tmp = closure_6;
  }
  return tmp.length > 0;
};