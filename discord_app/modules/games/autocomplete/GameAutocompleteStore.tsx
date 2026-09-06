// discord_app/modules/games/autocomplete/GameAutocompleteStore.tsx
import initializeDefault from "../../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../../Dispatcher.tsx";
import privDefault from "../../../../_runtime/01437_priv.js";
import GameAutocompleteUtils from "GameAutocompleteUtils.tsx";

require = fn;
const navigation = new privDefault({ max: 100 });
let set = new Set();
const tmp2 = new privDefault({ max: 100 });
const navigation2 = new privDefault({ max: 500 });
const Store = initializeDefault.Store;
class GameAutocompleteStore extends Store {}
const prototype = GameAutocompleteStore.prototype;
prototype["getResults"] = function getResults(query) {
  const result = GameAutocompleteUtils.normalizeGameAutocompleteQuery(query);
  let peekResult;
  if (null != result) {
    peekResult = navigation.peek(result);
  }
  return peekResult;
};
prototype["getClosestResults"] = function getClosestResults(result) {
  result = GameAutocompleteUtils.normalizeGameAutocompleteQuery(result);
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
  result = GameAutocompleteUtils.normalizeGameAutocompleteQuery(result);
  let tmp4 = null != result;
  if (tmp4) {
    const hasItem = navigation.has(result);
    let result1 = !hasItem;
    if (!hasItem) {
      result1 = !set.has(result);
    }
    if (result1) {
      result1 = GameAutocompleteUtils.shouldSuppressAutocompleteFetch(result, (arg0) => navigation.peek(arg0));
      const tmpResult = GameAutocompleteUtils;
    }
    tmp4 = result1;
  }
  return tmp4;
};
prototype["isFetching"] = function isFetching(query) {
  const result = GameAutocompleteUtils.normalizeGameAutocompleteQuery(query);
  let hasItem = null != result;
  if (hasItem) {
    hasItem = set.has(result);
  }
  return hasItem;
};
prototype["getGameById"] = function getGameById(item) {
  return navigation2.peek(item);
};
GameAutocompleteStore.displayName = "GameAutocompleteStore";
const gameAutocompleteStore = new GameAutocompleteStore(DispatcherDefault, {
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
      let result1 = navigation2.set(item10013.id, item10013);
      continue;
    }
  },
  GAME_AUTOCOMPLETE_FETCH_FAILURE: function handleFetchFailure(query) {
    set.delete(query.query);
  },
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/games/autocomplete/GameAutocompleteStore.tsx");

export default gameAutocompleteStore;
