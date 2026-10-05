// === Module 16117: UnclaimedGamesActionCreators ===

// Module 16117 (UnclaimedGamesActionCreators)
import BackoffDefault from "Backoff" /* 569 */;
import DurationsDefault from "Durations" /* 1102 */;
import HTTPUtils from "HTTPUtils" /* 1282 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import UnclaimedGamesStore from "UnclaimedGamesStore" /* 16118 */;

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
      return { value: "IconComponent", done: null };
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
        return { value: "IconComponent", done: null };
      }
    } catch (tmp15) {
      c3 = tmp;
      throw tmp15;
    }
  }
};
const Endpoints = fn(1085).Endpoints;
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
let ReactCompilerGating = fn(558);
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  let tmp2 = undefined === arg1;
  if (!tmp2) {
    tmp2 = arg1;
  }
  const data = fetchStore(tmp2).data;
  let tmp3;
  if (data != null) {
    tmp3 = data[arg0];
  }
  if (tmp3 == null) {
    tmp3 = closure_6;
  }
  return tmp3;
}) : ((arg0) => {
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
});
let closure_10 = tmp4;
ReactCompilerGating = fn(558);
let obj2 = {
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
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_claim/UnclaimedGamesActionCreators.tsx");

export default { fetch: fetchUnclaimedGames };
export { fetchUnclaimedGames };
export const useUnclaimedGames = fetchStore;
export const useUnclaimedGameIdsForGuild = tmp4;
export const useHasUnclaimedGames = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  let tmp2 = undefined === arg1;
  if (!tmp2) {
    tmp2 = arg1;
  }
  return closure_10(arg0, tmp2).length > 0;
}) : ((arg0) => {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = true;
  }
  return closure_10(arg0, flag).length > 0;
});