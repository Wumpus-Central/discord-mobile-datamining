// discord_app/modules/games/autocomplete/useGameAutocomplete.tsx
import GAME_AUTOCOMPLETE_MAX_QUERY_LENGTH from "GameAutocompleteUtils.tsx";
import _fetchGameAutocomplete from "GameAutocompleteActionCreators.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import noop from "../../../../_runtime/00019_noop.js";
import importDefaultResult from "GameAutocompleteStore.tsx";
import { QueryIds } from "../../../Constants.tsx";
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";

require = fn;
let c4 = importDefaultResult;
initialize = {
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
};
const fetchStore = initialize.createFetchStore(importDefaultResult, initialize);
let result = require("obj132").fileFinishedImporting("modules/games/autocomplete/useGameAutocomplete.tsx");

export const GAME_AUTOCOMPLETE_DEBOUNCE_MS = 200;
export const GAME_AUTOCOMPLETE_DEBOUNCE_MAX_WAIT_MS = 500;
export const useGameAutocomplete = fetchStore;
export const useDebouncedGameAutocomplete = function useDebouncedGameAutocomplete(c0) {
  let obj = GAME_AUTOCOMPLETE_MAX_QUERY_LENGTH;
  const result = obj.normalizeGameAutocompleteQuery(c0);
  require = result;
  dependencyMap = undefined;
  let callback;
  let React;
  [tmp3, c1] = callback(React.useState(result), 2);
  callback = React.useRef(tmp3);
  React = React.useRef(0);
  const items = [result];
  const effect = React.useEffect(() => {
    if (timeout !== ref.current) {
      if (null != tmp) {
        if (null != ref.current) {
          const _Date2 = Date;
          function emit() {
            closure_3.current = Date.now();
            closure_2.current = closure_0;
            callback(closure_0);
          }
          const _Math = Math;
          const _Math2 = Math;
          const _setTimeout = setTimeout;
          timeout = setTimeout(emit, Math.min(200, Math.max(0, 500 - (Date.now() - ref2.current))));
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
  const tmp5 = fetchStore(tmp3);
  ({ data, isLoading } = tmp5);
  const tmp2 = callback(React.useState(result), 2);
  [tmp7, tmp8] = callback(React.useState(null), 2);
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
  obj[1] = isLoading;
  error = null;
  if (tmp3 === result) {
    error = tmp5.error;
  }
  obj[2] = error;
  return obj;
};