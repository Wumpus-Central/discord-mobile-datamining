// === Module 5019: set ===

// Module 5019 (set)
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import privDefault from "priv" /* 1405 */;
import GAME_AUTOCOMPLETE_MAX_QUERY_LENGTH from "GAME_AUTOCOMPLETE_MAX_QUERY_LENGTH" /* 5020 */;
import set from "set" /* 2 */;

require = arg1;
let closure_2 = new privDefault({ max: 100 });
let set = new Set();
const tmp2 = new privDefault({ max: 100 });
let closure_4 = new privDefault({ max: 500 });
const Store = initializeDefault.Store;
class GameAutocompleteStore extends Store {
}
const prototype = GameAutocompleteStore.prototype;
prototype["getResults"] = function getResults(c0) {
  const result = GAME_AUTOCOMPLETE_MAX_QUERY_LENGTH.normalizeGameAutocompleteQuery(c0);
  let peekResult;
  if (null != result) {
    peekResult = navigation.peek(result);
  }
  return peekResult;
};
prototype["getClosestResults"] = function getClosestResults(result) {
  result = GAME_AUTOCOMPLETE_MAX_QUERY_LENGTH.normalizeGameAutocompleteQuery(result);
  if (null != result) {
    const peekResult = navigation.peek(result);
    if (null != peekResult) {
      return peekResult;
    } else {
      let diff = result.length - 1;
      if (1 <= diff) {
        const peekResult1 = navigation.peek(result.slice(0, diff));
        while (null == peekResult1) {
          diff = diff - 1;
        }
        return peekResult1;
      }
    }
  }
};
prototype["shouldSuppressFetch"] = function shouldSuppressFetch(result) {
  result = GAME_AUTOCOMPLETE_MAX_QUERY_LENGTH.normalizeGameAutocompleteQuery(result);
  let tmp4 = null != result;
  if (tmp4) {
    const hasItem = navigation.has(result);
    let result1 = !hasItem;
    if (!hasItem) {
      result1 = !set.has(result);
    }
    if (result1) {
      result1 = GAME_AUTOCOMPLETE_MAX_QUERY_LENGTH.shouldSuppressAutocompleteFetch(result, (arg0) => closure_2.peek(arg0));
      const tmpResult = GAME_AUTOCOMPLETE_MAX_QUERY_LENGTH;
    }
    tmp4 = result1;
  }
  return tmp4;
};
prototype["isFetching"] = function isFetching(c0) {
  const result = GAME_AUTOCOMPLETE_MAX_QUERY_LENGTH.normalizeGameAutocompleteQuery(c0);
  let hasItem = null != result;
  if (hasItem) {
    hasItem = set.has(result);
  }
  return hasItem;
};
prototype["getGameById"] = function getGameById(closure_0) {
  return navigation2.peek(closure_0);
};
GameAutocompleteStore.displayName = "GameAutocompleteStore";
const gameAutocompleteStore = new GameAutocompleteStore(dispatcherDefault, {
  LOGOUT: function handleLogout() {
    navigation.reset();
    set = new Set();
    navigation2.reset();
  },
  GAME_AUTOCOMPLETE_FETCH: function handleFetch(query) {
    set.add(query.query);
  },
  GAME_AUTOCOMPLETE_FETCH_SUCCESS: function handleFetchSuccess(arg0) {
    ({ query, results } = arg0);
    set.delete(query);
    const result = navigation.set(query, results);
    for (const item10013 of results) {
      let tmp3 = navigation2;
      let result1 = navigation2.set(item10013.id, item10013);
      continue;
    }
  },
  GAME_AUTOCOMPLETE_FETCH_FAILURE: function handleFetchFailure(query) {
    set.delete(query.query);
  }
});
let result = set.fileFinishedImporting("modules/games/autocomplete/GameAutocompleteStore.tsx");

export default gameAutocompleteStore;