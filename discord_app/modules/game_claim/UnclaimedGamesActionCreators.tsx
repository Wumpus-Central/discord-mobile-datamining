// === Module 16289: UnclaimedGamesActionCreators ===

// Module 16289 (UnclaimedGamesActionCreators)
import BackoffDefault from "Backoff" /* 559 */;
import DurationsDefault from "Durations" /* 1090 */;
import HTTPUtils from "HTTPUtils" /* 1270 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import UnclaimedGamesStore from "UnclaimedGamesStore" /* 16290 */;

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
let closure_8 = async function _fetchUnclaimedGames() {
  if (c3 === 2) {
    c3 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
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
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_1 = tmp2;
          closure_0 = tmp5;
          let body;
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
        closure_129_1(closure_129_2[4]).dispatch(obj7);
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
const initialize = fn(504);
const fetchStore = initialize.createFetchStore(UnclaimedGamesStore, {
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
      return new BackoffDefault(5 * DurationsDefault.Millis.MINUTE);
    },
    maxRetries: 10
  }
});
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
export const useHasUnclaimedGames = function useHasUnclaimedGames(id) {
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