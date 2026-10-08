// discord_app/modules/games/autocomplete/GameAutocompleteStore.tsx
import initializeDefault from "../../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../../Dispatcher.tsx";
import privDefault from "../../../../_runtime/01456_priv.js";
import GameAutocompleteUtils from "GameAutocompleteUtils.tsx";

require = fn;
function getCacheKey(arg0, arg1) {
  return "" + arg0 + ":" + arg1;
}
const navigation = new privDefault({ max: 100 });
let set = new Set();
const tmp2 = new privDefault({ max: 100 });
const navigation2 = new privDefault({ max: 500 });
const Store = initializeDefault.Store;
class GameAutocompleteStore extends Store {}
const prototype = GameAutocompleteStore.prototype;
prototype["getResults"] = function getResults(name, arg1) {
  const result = GameAutocompleteUtils.normalizeGameAutocompleteQuery(name);
  let peekResult;
  if (null != result) {
    const _HermesInternal = HermesInternal;
    peekResult = navigation.peek("" + arg1 + ":" + result);
  }
  return peekResult;
};
prototype["getClosestResults"] = function getClosestResults(result, DEFAULT) {
  result = GameAutocompleteUtils.normalizeGameAutocompleteQuery(result);
  if (null != result) {
    let length = result.length;
    if (length >= 1) {
      const substr = result.slice(0, length);
      const _HermesInternal = HermesInternal;
      const peekResult = navigation.peek("" + DEFAULT + ":" + substr);
      while (null == peekResult) {
        length = length - 1;
      }
      const obj2 = { query: substr, results: peekResult };
      return obj2;
    }
  }
};
prototype["shouldSuppressFetch"] = function shouldSuppressFetch(result, filter_group) {
  _require = filter_group;
  result = require("GameAutocompleteUtils").normalizeGameAutocompleteQuery(result);
  if (null == result) {
    return false;
  } else {
    const _HermesInternal = HermesInternal;
    const combined = "" + filter_group + ":" + result;
    const hasItem = navigation.has(combined);
    let result1 = !hasItem;
    if (!hasItem) {
      result1 = !set.has(combined);
    }
    if (result1) {
      result1 = tmp(8212).shouldSuppressAutocompleteFetch(result, (arg0) =>
        closure_3.peek("" + closure_0 + ":" + arg0),
      );
      const tmpResult = tmp(8212);
    }
    return result1;
  }
  const obj = require("GameAutocompleteUtils");
  tmp = _require;
};
prototype["isFetching"] = function isFetching(name, arg1) {
  const result = GameAutocompleteUtils.normalizeGameAutocompleteQuery(name);
  let hasItem = null != result;
  if (hasItem) {
    const _HermesInternal = HermesInternal;
    hasItem = set.has("" + arg1 + ":" + result);
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
  GAME_AUTOCOMPLETE_FETCH: function handleFetch(filterGroup) {
    set.add("" + filterGroup.filterGroup + ":" + filterGroup.query);
  },
  GAME_AUTOCOMPLETE_FETCH_SUCCESS: function handleFetchSuccess(results) {
    results = results.results;
    const tmp = getCacheKey(results.filterGroup, results.query);
    set.delete(tmp);
    const result = navigation.set(tmp, results);
    for (const item10017 of results) {
      let result1 = navigation2.set(item10017.id, item10017);
      continue;
    }
  },
  GAME_AUTOCOMPLETE_FETCH_FAILURE: function handleFetchFailure(filterGroup) {
    set.delete("" + filterGroup.filterGroup + ":" + filterGroup.query);
  },
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/games/autocomplete/GameAutocompleteStore.tsx");

export default gameAutocompleteStore;
