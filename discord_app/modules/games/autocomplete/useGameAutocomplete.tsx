// discord_app/modules/games/autocomplete/useGameAutocomplete.tsx
import c from "../../../../_runtime/00576_c.js";
import GameAutocompleteTypes from "GameAutocompleteTypes.tsx";
import GameAutocompleteUtils from "GameAutocompleteUtils.tsx";
import GameAutocompleteActionCreators from "GameAutocompleteActionCreators.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import GameAutocompleteStore from "GameAutocompleteStore.tsx";

require = fn;
const QueryIds = fn(1085).QueryIds;
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
    },
  },
  staleAfter: 3600,
  failureStaleAfter: 60,
});
let ReactCompilerGating = fn(558);
let closure_7 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      closure_0 = arg0;
      const cResult = c.c(3);
      [tmp3, dependencyMap] = noop.useState(arg0);
      noop.useRef(tmp3);
      noop.useRef(0);
      if (cResult[0] !== arg0) {
        const fn = function n() {
          if (current !== ref.current) {
            if (null != tmp) {
              if (null != ref.current) {
                const _Date2 = Date;
                function emit() {
                  ref2.current = Date.now();
                  ref.current = current;
                  closure_1_1(current);
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
            closure_1(tmp);
          }
        };
        const items = [arg0];
        cResult[0] = arg0;
        cResult[1] = fn;
        cResult[2] = items;
        let tmp5 = items;
        let tmp4 = fn;
      } else {
        tmp4 = cResult[1];
        tmp5 = cResult[2];
      }
      const effect = noop.useEffect(tmp4, tmp5);
      return tmp3;
    }
  : (arg0) => {
      closure_0 = arg0;
      [tmp2, dependencyMap] = noop.useState(arg0);
      noop.useRef(tmp2);
      noop.useRef(0);
      const items = [arg0];
      const effect = noop.useEffect(() => {
        if (current !== ref.current) {
          if (null != tmp) {
            if (null != ref.current) {
              const _Date2 = Date;
              function emit() {
                ref2.current = Date.now();
                ref.current = current;
                closure_1_1(current);
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
          closure_1(tmp);
        }
      }, items);
      return tmp2;
    };
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/games/autocomplete/useGameAutocomplete.tsx");

export const GAME_AUTOCOMPLETE_DEBOUNCE_MS = 200;
export const GAME_AUTOCOMPLETE_DEBOUNCE_MAX_WAIT_MS = 500;
export const useGameAutocomplete = fetchStore;
export const useDebouncedGameAutocomplete = ReactCompilerGating.isReactCompilerEnabled()
  ? (query, arg1) => {
      let DEFAULT = arg1;
      const cResult = c.c(6);
      if (undefined === arg1) {
        DEFAULT = GameAutocompleteTypes.GameAutocompleteProfile.DEFAULT;
      }
      if (cResult[0] !== query) {
        const result = GameAutocompleteUtils.normalizeGameAutocompleteQuery(query);
        cResult[0] = query;
        cResult[1] = result;
        let tmp4 = result;
        const tmpResult = GameAutocompleteUtils;
      } else {
        tmp4 = cResult[1];
      }
      const tmp6 = closure_7(tmp4);
      const tmp7 = fetchStore(tmp6, DEFAULT);
      ({ data, isLoading } = tmp7);
      [tmp9, tmp10] = noop.useState(null);
      if (null == tmp4) {
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
      if (null != tmp4) {
        if (data == null) {
          data = tmp9;
        }
        tmp14 = data;
      }
      if (!isLoading) {
        isLoading = tmp6 !== tmp4;
      }
      let error = null;
      if (tmp6 === tmp4) {
        error = tmp7.error;
      }
      if (cResult[2] === tmp14) {
        if (cResult[3] === isLoading) {
          if (cResult[4] === error) {
            let tmp16 = cResult[5];
          }
          return tmp16;
        }
      }
      const obj2 = { results: tmp14, isLoading, error };
      cResult[2] = tmp14;
      cResult[3] = isLoading;
      cResult[4] = error;
      cResult[5] = obj2;
      tmp16 = obj2;
      const tmp8 = _slicedToArray(noop.useState(null), 2);
    }
  : (query) => {
      let DEFAULT = arg1;
      if (arg1 === undefined) {
        DEFAULT = GameAutocompleteTypes.GameAutocompleteProfile.DEFAULT;
      }
      const result = GameAutocompleteUtils.normalizeGameAutocompleteQuery(query);
      const tmp4 = closure_7(result);
      const tmp5 = fetchStore(tmp4, DEFAULT);
      ({ data, isLoading } = tmp5);
      [tmp7, tmp8] = noop.useState(null);
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
      const obj2 = { results: tmp12, isLoading: null, error: null };
      if (!isLoading) {
        isLoading = tmp4 !== result;
      }
      obj2.isLoading = isLoading;
      let error = null;
      if (tmp4 === result) {
        error = tmp5.error;
      }
      obj2.error = error;
      return obj2;
    };
