// === Module 8558: useGameAutocomplete ===

// Module 8558 (useGameAutocomplete)
import GameAutocompleteTypes from "GameAutocompleteTypes" /* 5605 */;
import GameAutocompleteUtils from "GameAutocompleteUtils" /* 5606 */;
import GameAutocompleteActionCreators from "GameAutocompleteActionCreators" /* 8559 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GameAutocompleteStore from "GameAutocompleteStore" /* 5604 */;

require = fn;
const QueryIds = fn(1074).QueryIds;
const initialize = fn(504);
const fetchStore = initialize.createFetchStore(GameAutocompleteStore, {
  getQueryId(query) {
    if (DEFAULT === undefined) {
      DEFAULT = GameAutocompleteTypes.GameAutocompleteProfile.DEFAULT;
    }
    return QueryIds.GAME_AUTOCOMPLETE(GameAutocompleteUtils.normalizeGameAutocompleteQuery(query), DEFAULT);
  },
  get(arg0, arg1) {
    let results = GameAutocompleteStore.getResults(arg0, arg1);
    if (results == null) {
      results = null;
    }
    return results;
  },
  load(arg0, arg1) {
    return GameAutocompleteActionCreators.fetchGameAutocomplete(arg0, arg1);
  },
  getIsLoading(arg0, arg1) {
    return GameAutocompleteStore.isFetching(arg0, arg1);
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
    }
  },
  staleAfter: 3600,
  failureStaleAfter: 60
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/games/autocomplete/useGameAutocomplete.tsx");

export const GAME_AUTOCOMPLETE_DEBOUNCE_MS = 200;
export const GAME_AUTOCOMPLETE_DEBOUNCE_MAX_WAIT_MS = 500;
export const useGameAutocomplete = fetchStore;
export const useDebouncedGameAutocomplete = function useDebouncedGameAutocomplete(query) {
  let DEFAULT = arg1;
  if (arg1 === undefined) {
    DEFAULT = GameAutocompleteTypes.GameAutocompleteProfile.DEFAULT;
  }
  const result = GameAutocompleteUtils.normalizeGameAutocompleteQuery(query);
  require = result;
  c1 = undefined;
  [tmp5, c1] = noop.useState(result);
  noop.useRef(tmp5);
  noop.useRef(0);
  const items = [result];
  const effect = noop.useEffect(() => {
    if (current !== ref.current) {
      if (null != tmp) {
        if (null != ref.current) {
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
      ref.current = tmp;
      _undefined(tmp);
    }
  }, items);
  const tmp7 = fetchStore(tmp5, DEFAULT);
  ({ data, isLoading } = tmp7);
  const tmp4 = _slicedToArray(noop.useState(result), 2);
  [tmp9, tmp10] = noop.useState(null);
  if (null == result) {
    if (null != tmp9) {
      tmp10(null);
    }
  } else {
    if (tmp11) {
      tmp10(data);
    }
    tmp11 = null != data && data !== tmp9;
  }
  let tmp14 = null;
  if (null != result) {
    if (data == null) {
      data = tmp9;
    }
    tmp14 = data;
  }
  const obj2 = { results: tmp14, isLoading: null, error: null };
  if (!isLoading) {
    isLoading = tmp5 !== result;
  }
  obj2.isLoading = isLoading;
  let error = null;
  if (tmp5 === result) {
    error = tmp7.error;
  }
  obj2.error = error;
  return obj2;
};