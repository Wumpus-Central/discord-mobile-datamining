// discord_app/modules/games/autocomplete/GameAutocompleteStore.tsx
import get_initializedDefault from "../../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../../Dispatcher.tsx";
import LRUCacheDefault from "../../../../_runtime/01444_LRUCache.js";
import GameAutocompleteTypes from "GameAutocompleteTypes.tsx";
import GameAutocompleteUtils from "GameAutocompleteUtils.tsx";
import size from "../../../../_runtime/metro/00002__.js";

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
  getResults(query) {
    let DEFAULT = arg1;
    if (arg1 === undefined) {
      DEFAULT = GameAutocompleteTypes.GameAutocompleteProfile.DEFAULT;
    }
    const obj = GameAutocompleteUtils;
    const result = obj.normalizeGameAutocompleteQuery(query);
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
        const _HermesInternal = HermesInternal;
        const peekResult = navigation.peek("" + DEFAULT + ":" + result.slice(0, length));
        while (null == peekResult) {
          length = length - 1;
        }
        return peekResult;
      }
    }
  }
  shouldSuppressFetch(query) {
    let DEFAULT;
    if (DEFAULT === undefined) {
      DEFAULT = DEFAULT(5893).GameAutocompleteProfile.DEFAULT;
    }
    const obj = DEFAULT(5894);
    const result = obj.normalizeGameAutocompleteQuery(query);
    const tmp3 = DEFAULT;
    if (null == result) {
      return false;
    } else {
      const _HermesInternal = HermesInternal;
      const combined = "" + DEFAULT + ":" + result;
      const hasItem = navigation.has(combined);
      let result1 = !hasItem && !set.has(combined);
      if (result1) {
        const tmp3Result = tmp3(5894);
        result1 = tmp3Result.shouldSuppressAutocompleteFetch(result, (arg0) =>
          navigation.peek("" + DEFAULT + ":" + arg0),
        );
      }
      return result1;
    }
  }
  isFetching(query) {
    let DEFAULT = arg1;
    if (arg1 === undefined) {
      DEFAULT = GameAutocompleteTypes.GameAutocompleteProfile.DEFAULT;
    }
    const obj = GameAutocompleteUtils;
    const result = obj.normalizeGameAutocompleteQuery(query);
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
  },
};
const gameAutocompleteStore = new GameAutocompleteStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/games/autocomplete/GameAutocompleteStore.tsx");

export default gameAutocompleteStore;
