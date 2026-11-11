// === Module 18989: useInterestGameSearch ===

// Module 18989 (useInterestGameSearch)
import GameAutocompleteUtils from "GameAutocompleteUtils" /* 9313 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GameAutocompleteStore from "GameAutocompleteStore" /* 9312 */;

require = fn;
let closure_6 = [];
const DEFAULT = fn(10189).GameSearchFilterGroup.DEFAULT;
const size = fn(2);
let result = size.fileFinishedImporting("modules/waterwheels/interest/native/useInterestGameSearch.tsx");

export default function useInterestGameSearch(name) {
  const result = GameAutocompleteUtils.normalizeGameAutocompleteQuery(name);
  require = result;
  [tmp4, tmp5] = noop.useState({ query: null, results: [], error: null });
  dependencyMap = tmp5;
  if (tmp6) {
    let obj3 = { query: null, results: [], error: null };
    tmp5(obj3);
  }
  const first = _slicedToArray(noop.useState(() => {
    const gameSearchSession = new result(tmp5[6]).GameSearchSession(result(tmp5[7]).GameSearchSurface.INTEREST_PICKER, DEFAULT);
    return gameSearchSession;
  }), 1)[0];
  items = [first];
  const effect = noop.useEffect(() => first.end, items);
  const items1 = [result, first];
  const effect1 = noop.useEffect(() => {
    first.onQuery(closure_0);
    if (null != closure_0) {
      const _AbortController = AbortController;
      const abortController = new AbortController();
      closure_0 = first(function*() {
        if (c6 === 2) {
          c6 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp6 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            c6 = 2;
            let aborted = c5;
            if (0 === c5) {
              if (arg0 === 1) {
                c6 = 3;
                throw value;
              } else if (arg0 === 2) {
                c6 = 3;
                const obj3 = { value, done: true };
                return obj3;
              } else {
                closure_2 = tmp3;
                closure_129_0 = undefined;
                c4 = 1;
                if (null == GameAutocompleteStore.getResults(query, DEFAULT)) {
                  c5 = 2;
                  c6 = 1;
                  const obj5 = { value: result(aborted[8]).fetchGameAutocomplete(query, DEFAULT, query.signal), done: false };
                  return obj5;
                } else if (query.signal.aborted) {
                  c4 = 0;
                  c6 = 3;
                  return { value: "HermesInternal", done: null };
                } else {
                  const results = GameAutocompleteStore.getResults(query, DEFAULT);
                  query = results;
                  if (results == null) {
                    query = [];
                  }
                  closure_129_0 = query;
                  first.onResults(query, closure_129_0);
                  const obj6 = { query, results: closure_129_0, error: null };
                  aborted = aborted(obj6);
                  c4 = 0;
                }
              }
            } else if (1 === aborted) {
              c4 = 0;
              closure_129_1 = closure_3;
              aborted = query.signal.aborted;
              if (!aborted) {
                const obj7 = { query, results: [], error: closure_129_1 };
                aborted = aborted(obj7);
              }
            } else if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 0;
              c6 = 3;
              const obj = { value, done: true };
              return obj;
            }
            c6 = 3;
          } catch (tmp39) {
            closure_3 = tmp39;
            if (tmp4 === c4) {
              c6 = tmp2;
              throw tmp39;
            } else {
              c5 = tmp;
            }
          }
        }
      });
      const _setTimeout = setTimeout;
      const timeout = setTimeout(function load() {
        const self = this;
        const apply = closure_0.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      }, 200);
      return () => {
        clearTimeout(closure_1);
        closure_0.abort();
      };
    }
  }, items1);
  const obj4 = { results: null == result ? closure_6 : tmp4.results, isLoading: null != result && tmp4.query !== result, error: null, onSelect: null };
  let error = null;
  if (tmp4.query === result) {
    error = tmp4.error;
  }
  obj4.error = error;
  obj4.onSelect = first.select;
  return obj4;
};
export const INTEREST_SEARCH_DEBOUNCE_MS = 200;