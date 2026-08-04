import { Store } from "initialize";
import set from "GAME_AUTOCOMPLETE_MAX_QUERY_LENGTH";

const require = arg1;
let set = new Set();
const tmp2 = new require("priv")({ max: 100 });
let c4 = new require("priv")({ max: 500 });
class GameAutocompleteStore extends Store {
}
const prototype = GameAutocompleteStore.prototype;
prototype["getResults"] = function getResults(c0) {
  const result = require(7229) /* GAME_AUTOCOMPLETE_MAX_QUERY_LENGTH */.normalizeGameAutocompleteQuery(c0);
  let peekResult;
  if (null != result) {
    peekResult = tmp2.peek(result);
  }
  return peekResult;
};
prototype["getClosestResults"] = function getClosestResults(result) {
  result = require(7229) /* GAME_AUTOCOMPLETE_MAX_QUERY_LENGTH */.normalizeGameAutocompleteQuery(result);
  if (null != result) {
    const peekResult = tmp2.peek(result);
    if (null != peekResult) {
      return peekResult;
    } else {
      let diff = result.length - 1;
      if (1 <= diff) {
        const peekResult1 = tmp2.peek(result.slice(0, diff));
        while (null == peekResult1) {
          diff = diff - 1;
        }
        return peekResult1;
      }
    }
  }
};
prototype["shouldSuppressFetch"] = function shouldSuppressFetch(result) {
  result = require(7229) /* GAME_AUTOCOMPLETE_MAX_QUERY_LENGTH */.normalizeGameAutocompleteQuery(result);
  let tmp4 = null != result;
  if (tmp4) {
    const hasItem = tmp2.has(result);
    let result1 = !hasItem;
    if (!hasItem) {
      result1 = !set.has(result);
    }
    if (result1) {
      result1 = require(7229) /* GAME_AUTOCOMPLETE_MAX_QUERY_LENGTH */.shouldSuppressAutocompleteFetch(result, (arg0) => closure_2.peek(arg0));
      const tmpResult = require(7229) /* GAME_AUTOCOMPLETE_MAX_QUERY_LENGTH */;
    }
    tmp4 = result1;
  }
  return tmp4;
};
prototype["isFetching"] = function isFetching(c0) {
  const result = require(7229) /* GAME_AUTOCOMPLETE_MAX_QUERY_LENGTH */.normalizeGameAutocompleteQuery(c0);
  let hasItem = null != result;
  if (hasItem) {
    hasItem = set.has(result);
  }
  return hasItem;
};
prototype["getGameById"] = function getGameById(arg0) {
  return tmp4.peek(arg0);
};
GameAutocompleteStore.displayName = "GameAutocompleteStore";
const gameAutocompleteStore = new GameAutocompleteStore(require("dispatcher"), {
  LOGOUT: function handleLogout() {
    tmp2.reset();
    const set = new Set();
    tmp4.reset();
  },
  GAME_AUTOCOMPLETE_FETCH: function handleFetch(query) {
    set.add(query.query);
  },
  GAME_AUTOCOMPLETE_FETCH_SUCCESS: function handleFetchSuccess(arg0) {
    let query;
    let results;
    ({ query, results } = arg0);
    set.delete(query);
    const result = tmp2.set(query, results);
    for (const item10013 of results) {
      let tmp3 = tmp4;
      let result1 = tmp4.set(item10013.id, item10013);
      continue;
    }
  },
  GAME_AUTOCOMPLETE_FETCH_FAILURE: function handleFetchFailure(query) {
    set.delete(query.query);
  }
});
let result = set.fileFinishedImporting("modules/games/autocomplete/GameAutocompleteStore.tsx");

export default gameAutocompleteStore;