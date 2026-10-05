// === Module 8564: useGameAutocomplete ===

// Module 8564 (useGameAutocomplete)
import react2 from "react" /* 576 */;
import Constants from "Constants" /* 1085 */;
import GameAutocompleteTypes from "GameAutocompleteTypes" /* 5893 */;
import GameAutocompleteUtils from "GameAutocompleteUtils" /* 5894 */;
import GameAutocompleteActionCreators from "GameAutocompleteActionCreators" /* 8565 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GameAutocompleteStore from "GameAutocompleteStore" /* 5892 */;
import get_initialized from "get initialized" /* 504 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const QueryIds = Constants.QueryIds;
let obj = {
  getQueryId(query) {
    let DEFAULT;
    if (DEFAULT === undefined) {
      DEFAULT = GameAutocompleteTypes.GameAutocompleteProfile.DEFAULT;
    }
    const GAME_AUTOCOMPLETE = QueryIds.GAME_AUTOCOMPLETE;
    const obj = GameAutocompleteUtils;
    return GAME_AUTOCOMPLETE(obj.normalizeGameAutocompleteQuery(query), DEFAULT);
  },
  get(arg0, arg1) {
    let results = GameAutocompleteStore.getResults(arg0, arg1);
    if (results == null) {
      results = null;
    }
    return results;
  },
  load(arg0, arg1) {
    const obj = GameAutocompleteActionCreators;
    return obj.fetchGameAutocomplete(arg0, arg1);
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
          tmp2 = status >= 500 && 503 !== status;
          const tmp3 = status >= 500 && 503 !== status;
        }
        tmp = tmp2;
      }
      return tmp;
    }
  },
  staleAfter: 3600,
  failureStaleAfter: 60
};
const fetchStore = get_initialized.createFetchStore(GameAutocompleteStore, obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_7 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_129_1;
  let tmp3;
  let tmp4;
  let tmp5;
  let closure_0 = arg0;
  const obj = react2;
  const cResult = obj.c(3);
  [tmp3, closure_129_1] = react.useState(arg0);
  _slicedToArray(react.useState(arg0), 2);
  let closure_2 = react.useRef(tmp3);
  let closure_3 = react.useRef(0);
  if (cResult[0] !== arg0) {
    const fn = function n() {
      let current;
      if (current !== ref.current) {
        if (null != current) {
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
              clearTimeout(current);
            };
          }
        }
        const _Date = Date;
        ref2.current = Date.now();
        ref.current = current;
        closure_1(current);
      }
    };
    const items = [arg0];
    cResult[0] = arg0;
    cResult[1] = fn;
    cResult[2] = items;
    tmp5 = items;
    tmp4 = fn;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
  }
  const effect = react.useEffect(tmp4, tmp5);
  return tmp3;
}) : ((arg0) => {
  let closure_129_1;
  let tmp2;
  let closure_0 = arg0;
  const tmp = _slicedToArray(react.useState(arg0), 2);
  [tmp2, closure_129_1] = tmp;
  let closure_2 = react.useRef(tmp2);
  let closure_3 = react.useRef(0);
  const items = [arg0];
  const effect = react.useEffect(() => {
    let current;
    if (current !== ref.current) {
      if (null != current) {
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
            clearTimeout(current);
          };
        }
      }
      const _Date = Date;
      ref2.current = Date.now();
      ref.current = current;
      closure_1(current);
    }
  }, items);
  return tmp2;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((query, arg1) => {
  let data;
  let isLoading;
  let tmp10;
  let tmp4;
  let tmp9;
  let DEFAULT = arg1;
  const obj = react2;
  const cResult = obj.c(6);
  if (undefined === arg1) {
    DEFAULT = GameAutocompleteTypes.GameAutocompleteProfile.DEFAULT;
  }
  if (cResult[0] !== query) {
    const tmpResult = GameAutocompleteUtils;
    const result = tmpResult.normalizeGameAutocompleteQuery(query);
    cResult[0] = query;
    cResult[1] = result;
    tmp4 = result;
  } else {
    tmp4 = cResult[1];
  }
  const tmp6 = closure_7(tmp4);
  const tmp7 = fetchStore(tmp6, DEFAULT);
  ({ data, isLoading } = tmp7);
  const error = tmp7.error;
  [tmp9, tmp10] = react.useState(null);
  _slicedToArray(react.useState(null), 2);
  if (null == tmp4) {
    if (null != tmp9) {
      tmp10(null);
    }
  } else {
    const tmp11 = null != data && data !== tmp9;
    if (tmp11) {
      tmp10(data);
    }
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
  let tmp15 = null;
  if (tmp6 === tmp4) {
    tmp15 = error;
  }
  if (cResult[2] === tmp14) {
    if (cResult[3] === isLoading) {
      let tmp16;
      if (cResult[4] === tmp15) {
        tmp16 = cResult[5];
      }
      return tmp16;
    }
  }
  const obj2 = { results: tmp14, isLoading, error: tmp15 };
  cResult[2] = tmp14;
  cResult[3] = isLoading;
  cResult[4] = tmp15;
  cResult[5] = obj2;
  tmp16 = obj2;
}) : ((query) => {
  let data;
  let isLoading;
  let tmp13;
  let tmp7;
  let tmp8;
  let DEFAULT = arg1;
  if (arg1 === undefined) {
    DEFAULT = GameAutocompleteTypes.GameAutocompleteProfile.DEFAULT;
  }
  const obj = GameAutocompleteUtils;
  const result = obj.normalizeGameAutocompleteQuery(query);
  const tmp4 = closure_7(result);
  const tmp5 = fetchStore(tmp4, DEFAULT);
  ({ data, isLoading } = tmp5);
  const error = tmp5.error;
  [tmp7, tmp8] = react.useState(null);
  _slicedToArray(react.useState(null), 2);
  if (null == result) {
    if (null != tmp7) {
      tmp8(null);
    }
  } else {
    const tmp9 = null != data && data !== tmp7;
    if (tmp9) {
      tmp8(data);
    }
  }
  let tmp12 = null;
  if (null != result) {
    if (data == null) {
      data = tmp7;
    }
    tmp12 = data;
  }
  const obj2 = { results: tmp12, isLoading, error: tmp13 };
  if (!isLoading) {
    isLoading = tmp4 !== result;
  }
  tmp13 = null;
  if (tmp4 === result) {
    tmp13 = error;
  }
  return obj2;
});
let result = size.fileFinishedImporting("modules/games/autocomplete/useGameAutocomplete.tsx");

export const GAME_AUTOCOMPLETE_DEBOUNCE_MS = 200;
export const GAME_AUTOCOMPLETE_DEBOUNCE_MAX_WAIT_MS = 500;
export const useGameAutocomplete = fetchStore;
export const useDebouncedGameAutocomplete = tmp4;