// discord_app/modules/games/autocomplete/GameAutocompleteStore.tsx
import initializeDefault from "../../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../../Dispatcher.tsx";
import privDefault from "../../../../_runtime/01444_priv.js";
import GameAutocompleteTypes from "GameAutocompleteTypes.tsx";
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
prototype["getResults"] = function getResults(query) {
  let DEFAULT = arg1;
  if (arg1 === undefined) {
    DEFAULT = GameAutocompleteTypes.GameAutocompleteProfile.DEFAULT;
  }
  const result = GameAutocompleteUtils.normalizeGameAutocompleteQuery(query);
  let peekResult;
  if (null != result) {
    const _HermesInternal = HermesInternal;
    peekResult = navigation.peek("" + DEFAULT + ":" + result);
  }
  return peekResult;
};
prototype["getClosestResults"] = function getClosestResults(result) {
  let DEFAULT = arg1;
  if (arg1 === undefined) {
    DEFAULT = GameAutocompleteTypes.GameAutocompleteProfile.DEFAULT;
  }
  result = GameAutocompleteUtils.normalizeGameAutocompleteQuery(result);
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
};
prototype["shouldSuppressFetch"] = function shouldSuppressFetch(query, arg1) {
  let DEFAULT = arg1;
  if (arg1 === undefined) {
    DEFAULT = DEFAULT(5893).GameAutocompleteProfile.DEFAULT;
  }
  const result = DEFAULT(5894).normalizeGameAutocompleteQuery(query);
  if (null == result) {
    return false;
  } else {
    const _HermesInternal = HermesInternal;
    const combined = "" + DEFAULT + ":" + result;
    const hasItem = navigation.has(combined);
    let result1 = !hasItem;
    if (!hasItem) {
      result1 = !set.has(combined);
    }
    if (result1) {
      result1 = tmp3(5894).shouldSuppressAutocompleteFetch(result, (arg0) => closure_3.peek("" + DEFAULT + ":" + arg0));
      const tmp3Result = tmp3(5894);
    }
    return result1;
  }
  const obj = DEFAULT(5894);
  tmp3 = DEFAULT;
};
prototype["isFetching"] = function isFetching(query) {
  let DEFAULT = arg1;
  if (arg1 === undefined) {
    DEFAULT = GameAutocompleteTypes.GameAutocompleteProfile.DEFAULT;
  }
  const result = GameAutocompleteUtils.normalizeGameAutocompleteQuery(query);
  let hasItem = null != result;
  if (hasItem) {
    const _HermesInternal = HermesInternal;
    hasItem = set.has("" + DEFAULT + ":" + result);
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
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/games/autocomplete/GameAutocompleteStore.tsx");

export default gameAutocompleteStore;
