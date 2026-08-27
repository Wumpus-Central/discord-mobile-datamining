// === Module 15693: fetchUnclaimedGames ===

// Module 15693 (fetchUnclaimedGames)
import failsDefault from "fails" /* 584 */;
import setDefault from "set" /* 687 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import importDefaultResult from "getMap" /* 15694 */;
import { Endpoints } from "ME" /* 676 */;
import initialize from "initialize" /* 589 */;

const require = arg1;
function fetchUnclaimedGames() {
  const self = this;
  const apply = _fetchUnclaimedGames.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _fetchUnclaimedGames() {
  const self = this;
  const tmp = callback(function*() {
    if (c3 === 2) {
      c3 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp4 === 3) {
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
        c3 = 2;
        if (0 === dependencyMap) {
          if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            const callback = tmp2;
            let body = tmp5;
            body = undefined;
            const HTTP = closure_1_0(530).HTTP;
            obj1 = { url: null, oldFormErrors: true, rejectWithError: false };
            obj1[0] = closure_1_5.UNCLAIMED_GAMES;
            dependencyMap = 1;
            c3 = 1;
            const obj2 = { value: null, done: false };
            obj2[0] = HTTP.get(obj1);
            return obj2;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj3 = { value: null, done: true };
          obj3[0] = arg1;
          return obj3;
        } else {
          body = arg1.body;
          obj = callback(709);
          const obj4 = { type: "UNCLAIMED_GAMES_FETCH_SUCCESS", guildIdToGameIds: null };
          obj4[1] = body;
          obj.dispatch(obj4);
          c3 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp15) {
        c3 = tmp;
        throw tmp15;
      }
    }
  });
  closure_8 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let c4 = importDefaultResult;
let closure_6 = [];
initialize = {
  getQueryId(arg0) {
    let str = null;
    if (arg0) {
      str = "unclaimed-games";
    }
    return str;
  },
  get() {
    return importDefaultResult.getMap();
  },
  load() {
    return fetchUnclaimedGames();
  },
  staleAfter: setDefault.Seconds.DAY,
  retryConfig: initialize
};
initialize = {
  backoff() {
    let tmp = failsDefault;
    tmp = new tmp(5 * setDefault.Millis.MINUTE);
    return tmp;
  },
  maxRetries: 10
};
const fetchStore = initialize.createFetchStore(importDefaultResult, initialize);
const result = require("set").fileFinishedImporting("modules/game_claim/UnclaimedGamesActionCreators.tsx");

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