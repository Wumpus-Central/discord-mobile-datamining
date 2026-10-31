// === Module 9141: useGameAutocomplete ===

// Module 9141 (useGameAutocomplete)
import GameAutocompleteUtils from "GameAutocompleteUtils" /* 8681 */;
import GameAutocompleteActionCreators from "GameAutocompleteActionCreators" /* 9142 */;
import GameSearchSession from "GameSearchSession" /* 9143 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GameAutocompleteStore from "GameAutocompleteStore" /* 8680 */;

require = fn;
const QueryIds = fn(1072).QueryIds;
const initialize = fn(504);
const fetchStore = initialize.createFetchStore(GameAutocompleteStore, {
  getQueryId(name, arg1) {
    return QueryIds.GAME_AUTOCOMPLETE(GameAutocompleteUtils.normalizeGameAutocompleteQuery(name), arg1);
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
export function useDebouncedGameAutocomplete(name, arg1) {
  ({ surface: require, filterGroup } = arg1);
  let results1;
  let first;
  const result = GameAutocompleteUtils.normalizeGameAutocompleteQuery(name);
  require = result;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  let query;
  let tmp2 = _slicedToArray;
  [tmp4, c1] = query.useState(result);
  _slicedToArray = query.useRef(tmp4);
  query = query.useRef(0);
  const items = [result];
  const effect = query.useEffect(() => {
    if (current !== ref.current) {
      if (null != tmp) {
        if (null != ref.current) {
          const _Date2 = Date;
          function emit() {
            query.current = Date.now();
            ref.current = current;
            _undefined(current);
          }
          const _Math = Math;
          const _Math2 = Math;
          const _setTimeout = setTimeout;
          current = setTimeout(emit, Math.min(200, Math.max(0, 500 - (Date.now() - query.current))));
          return () => {
            clearTimeout(closure_0);
          };
        }
      }
      const _Date = Date;
      query.current = Date.now();
      ref.current = tmp;
      _undefined(tmp);
    }
  }, items);
  const tmp6 = fetchStore(tmp4, filterGroup);
  ({ data, isLoading } = tmp6);
  const tmp3 = _slicedToArray(query.useState(result), 2);
  [tmp8, tmp9] = query.useState(null);
  let tmp10 = null;
  if (null != data) {
    tmp10 = null;
    if (null != tmp4) {
      const obj3 = { query: tmp4, results: data };
      tmp10 = obj3;
    }
  }
  if (null == result) {
    if (null != tmp8) {
      tmp9(null);
    }
  } else {
    let tmp11 = null != tmp10;
    if (tmp11) {
      let results;
      if (tmp8 != null) {
        results = tmp8.results;
      }
      tmp11 = tmp10.results !== results;
    }
    if (tmp11) {
      tmp9(tmp10);
    }
  }
  let tmp15 = null;
  if (null != result) {
    if (tmp10 == null) {
      tmp10 = tmp8;
    }
    tmp15 = tmp10;
  }
  query = undefined;
  if (tmp15 != null) {
    query = tmp15.query;
  }
  if (query == null) {
    query = null;
  }
  results1 = undefined;
  if (tmp15 != null) {
    results1 = tmp15.results;
  }
  if (results1 == null) {
    results1 = null;
  }
  first = tmp2(obj2.useState(() => {
    const gameSearchSession = new GameSearchSession.GameSearchSession(result, c1);
    return gameSearchSession;
  }), 1)[0];
  const items1 = [first, result];
  const effect1 = obj2.useEffect(() => {
    first.onQuery(closure_2);
  }, items1);
  const items2 = [first, query, results1];
  const effect2 = obj2.useEffect(() => {
    let tmp2 = null != query;
    if (tmp2) {
      tmp2 = null != results1;
    }
    if (tmp2) {
      first.onResults(query, results1);
    }
  }, items2);
  const items3 = [first];
  const effect3 = obj2.useEffect(() => first.end, items3);
  const obj6 = { results: results1, isLoading: null, error: null, onSelect: null, endSession: null };
  if (!isLoading) {
    isLoading = tmp4 !== result;
  }
  obj6.isLoading = isLoading;
  let error = null;
  if (tmp4 === result) {
    error = tmp6.error;
  }
  obj6.error = error;
  ({ select: obj4.onSelect, end: obj4.endSession } = first);
  return obj6;
}