// === Module 5899: GameAutocompleteStore ===

// Module 5899 (GameAutocompleteStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import LRUCacheDefault from "LRUCache" /* 1444 */;
import GameAutocompleteTypes from "GameAutocompleteTypes" /* 5900 */;
import GameAutocompleteUtils from "GameAutocompleteUtils" /* 5901 */;
import size from "module_2" /* 2 */;

function getCacheKey(arg0, arg1) {
  return "" + arg0 + ":" + arg1;
}
const _false = new LRUCacheDefault({ max: 100 });
new LRUCacheDefault({ max: 100 });
const set = new Set();
const hasOwnProperty = new LRUCacheDefault({ max: 500 });
new LRUCacheDefault({ max: 500 });
const Store = get_initializedDefault.Store;
class GameAutocompleteStore extends Store {
  getResults(name) {
    let DEFAULT = arg1;
    if (arg1 === undefined) {
      DEFAULT = GameAutocompleteTypes.GameAutocompleteProfile.DEFAULT;
    }
    const obj = GameAutocompleteUtils;
    const result = obj.normalizeGameAutocompleteQuery(name);
    let peekResult;
    if (null != result) {
      const _HermesInternal = HermesInternal;
      peekResult = navigation.peek("" + DEFAULT + ":" + result);
    }
    return peekResult;
  }
  getClosestResults(result) {
    let DEFAULT = arg1;
    if (arg1 === undefined) {
      DEFAULT = GameAutocompleteTypes.GameAutocompleteProfile.DEFAULT;
    }
    const obj = GameAutocompleteUtils;
    result = obj.normalizeGameAutocompleteQuery(result);
    if (null != result) {
      let length = result.length;
      if (length >= 1) {
        const substr = result.slice(0, length);
        const _HermesInternal = HermesInternal;
        const peekResult = navigation.peek("" + DEFAULT + ":" + substr);
        while (null == peekResult) {
          length = length - 1;
        }
        return { query: substr, results: peekResult };
      }
    }
  }
  shouldSuppressFetch(name) {
    let DEFAULT;
    if (DEFAULT === undefined) {
      DEFAULT = DEFAULT(5900).GameAutocompleteProfile.DEFAULT;
    }
    const obj = DEFAULT(5901);
    const result = obj.normalizeGameAutocompleteQuery(name);
    const tmp3 = DEFAULT;
    if (null == result) {
      return false;
    } else {
      const _HermesInternal = HermesInternal;
      const combined = "" + DEFAULT + ":" + result;
      const hasItem = navigation.has(combined);
      let result1 = !hasItem && !set.has(combined);
      if (result1) {
        const tmp3Result = tmp3(5901);
        result1 = tmp3Result.shouldSuppressAutocompleteFetch(result, (arg0) => navigation.peek("" + DEFAULT + ":" + arg0));
      }
      return result1;
    }
  }
  isFetching(name) {
    let DEFAULT = arg1;
    if (arg1 === undefined) {
      DEFAULT = GameAutocompleteTypes.GameAutocompleteProfile.DEFAULT;
    }
    const obj = GameAutocompleteUtils;
    const result = obj.normalizeGameAutocompleteQuery(name);
    let hasItem = null != result;
    if (hasItem) {
      const _HermesInternal = HermesInternal;
      hasItem = set.has("" + DEFAULT + ":" + result);
    }
    return hasItem;
  }
  getGameById(item) {
    return navigation2.peek(item);
  }
}
const prototype = GameAutocompleteStore.prototype;
GameAutocompleteStore.displayName = "GameAutocompleteStore";
let obj = {
  LOGOUT: function handleLogout() {
    navigation.reset();
    new Set();
    navigation2.reset();
  },
  GAME_AUTOCOMPLETE_FETCH: function handleFetch(profile) {
    set.add("" + profile.profile + ":" + profile.query);
  },
  GAME_AUTOCOMPLETE_FETCH_SUCCESS: function handleFetchSuccess(results) {
    results = results.results;
    const tmp = getCacheKey(results.profile, results.query);
    set.delete(tmp);
    const result = navigation.set(tmp, results);
    for (const item10017 of results) {
      let result1 = navigation2.set(item10017.id, item10017);
      continue;
    }
  },
  GAME_AUTOCOMPLETE_FETCH_FAILURE: function handleFetchFailure(profile) {
    set.delete("" + profile.profile + ":" + profile.query);
  }
};
const gameAutocompleteStore = new GameAutocompleteStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/games/autocomplete/GameAutocompleteStore.tsx");

export default gameAutocompleteStore;