// discord_app/modules/games/autocomplete/useGameAutocomplete.tsx
import GameAutocompleteUtils from "GameAutocompleteUtils.tsx";
import GameAutocompleteActionCreators from "GameAutocompleteActionCreators.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import GameAutocompleteStore from "GameAutocompleteStore.tsx";

require = fn;
const QueryIds = fn(1074).QueryIds;
fn(504);
const initialize = {
  getQueryId(query) {
    return QueryIds.GAME_AUTOCOMPLETE(GameAutocompleteUtils.normalizeGameAutocompleteQuery(query));
  },
  get(arg0) {
    let results = GameAutocompleteStore.getResults(arg0);
    if (results == null) {
      results = null;
    }
    return results;
  },
  load(arg0) {
    return GameAutocompleteActionCreators.fetchGameAutocomplete(arg0);
  },
  getIsLoading(arg0) {
    return GameAutocompleteStore.isFetching(arg0);
  },
  retryConfig: {
    retryableErrors: function isRetryableError(status) {
      status = status.status;
      let tmp = null != status;
      if (tmp) {
        let tmp2 = 429 === status;
        if (!tmp2) {
          let tmp3 = status >= 500;
          if (tmp3) {
            tmp3 = 503 !== status;
          }
          tmp2 = tmp3;
        }
        tmp = tmp2;
      }
      return tmp;
    },
  },
  staleAfter: 3600,
  failureStaleAfter: 60,
};
const fetchStore = initialize.createFetchStore(GameAutocompleteStore, initialize);
const size = fn(2);
let result = size.fileFinishedImporting("modules/games/autocomplete/useGameAutocomplete.tsx");

export const GAME_AUTOCOMPLETE_DEBOUNCE_MS = 200;
export const GAME_AUTOCOMPLETE_DEBOUNCE_MAX_WAIT_MS = 500;
export const useGameAutocomplete = fetchStore;
export const useDebouncedGameAutocomplete = function useDebouncedGameAutocomplete(query) {
  let obj = GameAutocompleteUtils;
  const result = obj.normalizeGameAutocompleteQuery(query);
  require = result;
  c1 = undefined;
  [tmp3, c1] = _slicedToArray(noop.useState(result), 2);
  noop.useRef(tmp3);
  noop.useRef(0);
  const items = [result];
  const effect = noop.useEffect(() => {
    if (current !== ref.current) {
      if (null != tmp) {
        if (null != tmp2.current) {
          const _Date2 = Date;
          function emit() {
            ref2.current = Date.now();
            ref.current = current;
            _undefined(current);
          }
          const _Math = Math;
          const _Math2 = Math;
          const _setTimeout = setTimeout;
          current = setTimeout(emit, Math.min(200, Math.max(0, 500 - (Date.now() - ref2.current))));
          return () => {
            clearTimeout(closure_0);
          };
        }
      }
      const _Date = Date;
      ref2.current = Date.now();
      tmp2.current = tmp;
      _undefined(tmp);
    }
  }, items);
  const tmp5 = fetchStore(tmp3);
  ({ data, isLoading } = tmp5);
  const tmp2 = _slicedToArray(noop.useState(result), 2);
  [tmp7, tmp8] = _slicedToArray(noop.useState(null), 2);
  if (null == result) {
    if (null != tmp7) {
      tmp8(null);
    }
  } else {
    if (tmp9) {
      tmp8(data);
    }
    tmp9 = null != data && data !== tmp7;
  }
  let tmp12 = null;
  if (null != result) {
    if (data == null) {
      data = tmp7;
    }
    tmp12 = data;
  }
  obj = { results: tmp12, isLoading: null, error: null };
  if (!isLoading) {
    isLoading = tmp3 !== result;
  }
  obj.isLoading = isLoading;
  let error = null;
  if (tmp3 === result) {
    error = tmp5.error;
  }
  obj.error = error;
  return obj;
};
